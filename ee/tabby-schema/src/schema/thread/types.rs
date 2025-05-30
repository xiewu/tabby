use chrono::{DateTime, Utc};
use juniper::{GraphQLEnum, GraphQLInputObject, GraphQLObject, GraphQLUnion, ID};
use serde::Serialize;
use tabby_common::api::{
    code::{CodeSearchDocument, CodeSearchHit, CodeSearchScores},
    structured_doc::DocSearchDocument,
};
use validator::Validate;

use super::MessageAttachmentCodeInput;
use crate::{interface::UserValue, juniper::relay::NodeType, ChatCompletionMessage, Context};

#[derive(GraphQLEnum, Serialize, Clone, PartialEq, Eq)]
pub enum Role {
    User,
    Assistant,
}

#[derive(GraphQLObject, Clone)]
#[graphql(context = Context)]
pub struct Message {
    pub id: ID,
    pub thread_id: ID,
    pub code_source_id: Option<String>,
    pub role: Role,
    pub content: String,

    pub attachment: MessageAttachment,

    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl NodeType for Message {
    type Cursor = String;

    fn cursor(&self) -> Self::Cursor {
        self.id.to_string()
    }

    fn connection_type_name() -> &'static str {
        "MessageConnection"
    }

    fn edge_type_name() -> &'static str {
        "MessageEdge"
    }
}

#[derive(GraphQLInputObject, Clone, Validate)]
#[graphql(context = Context)]
pub struct UpdateMessageInput {
    pub id: ID,
    pub thread_id: ID,
    #[validate(length(min = 1, code = "content", message = "content can not be empty"))]
    pub content: String,
}

#[derive(GraphQLObject, Clone, Default)]
#[graphql(context = Context)]
/// Represents an attachment to a message, which can include various types of content.
pub struct MessageAttachment {
    /// Code snippets retrieved from the client side.
    pub client_code: Vec<MessageAttachmentClientCode>,

    /// Code snippets retrieved from the server side codebase.
    pub code: Vec<MessageAttachmentCode>,

    /// Documents retrieved from various sources, all from the server side.
    pub doc: Vec<MessageAttachmentDoc>,

    /// File list retrieved from the server side codebase is used for generating this message.
    pub code_file_list: Option<MessageAttachmentCodeFileList>,
}

#[derive(GraphQLObject, Clone)]
pub struct MessageAttachmentCodeFileList {
    pub file_list: Vec<String>,
    pub truncated: bool,
}

#[derive(GraphQLObject, Clone)]
pub struct MessageAttachmentClientCode {
    pub filepath: Option<String>,
    pub start_line: Option<i32>,
    pub content: String,
}

impl From<MessageAttachmentClientCode> for MessageAttachmentCodeInput {
    fn from(val: MessageAttachmentClientCode) -> Self {
        MessageAttachmentCodeInput {
            filepath: val.filepath,
            start_line: val.start_line,
            content: val.content,
        }
    }
}

#[derive(GraphQLObject, Clone)]
pub struct MessageAttachmentCode {
    pub git_url: String,
    pub commit: Option<String>,
    pub filepath: String,
    pub language: String,
    pub content: String,

    /// When start line is `None`, it represents the entire file.
    pub start_line: Option<i32>,
}

impl From<CodeSearchDocument> for MessageAttachmentCode {
    fn from(doc: CodeSearchDocument) -> Self {
        Self {
            git_url: doc.git_url,
            commit: doc.commit,
            filepath: doc.filepath,
            language: doc.language,
            content: doc.body,
            start_line: doc.start_line.map(|x| x as i32),
        }
    }
}

#[derive(GraphQLObject, Clone)]
pub struct MessageAttachmentCodeScores {
    pub rrf: f64,
    pub bm25: f64,
    pub embedding: f64,
}

impl From<CodeSearchScores> for MessageAttachmentCodeScores {
    fn from(scores: CodeSearchScores) -> Self {
        Self {
            rrf: scores.rrf as f64,
            bm25: scores.bm25 as f64,
            embedding: scores.embedding as f64,
        }
    }
}

#[derive(GraphQLObject)]
pub struct MessageCodeSearchHit {
    pub code: MessageAttachmentCode,
    pub scores: MessageAttachmentCodeScores,
}

impl From<CodeSearchHit> for MessageCodeSearchHit {
    fn from(hit: CodeSearchHit) -> Self {
        Self {
            code: hit.doc.into(),
            scores: hit.scores.into(),
        }
    }
}

#[derive(GraphQLUnion, Clone)]
#[graphql(context = Context)]
pub enum MessageAttachmentDoc {
    Web(MessageAttachmentWebDoc),
    Issue(MessageAttachmentIssueDoc),
    Pull(MessageAttachmentPullDoc),
    Commit(MessageAttachmentCommitDoc),
    Page(MessageAttachmentPageDoc),
    Ingested(MessageAttachmentIngestedDoc),
}

#[derive(GraphQLObject, Clone)]
pub struct MessageAttachmentWebDoc {
    pub title: String,
    pub link: String,
    pub content: String,
}

#[derive(GraphQLObject, Clone)]
#[graphql(context = Context)]
pub struct MessageAttachmentIssueDoc {
    pub title: String,
    pub link: String,
    pub author: Option<UserValue>,
    pub body: String,
    pub closed: bool,
}

#[derive(GraphQLObject, Clone)]
#[graphql(context = Context)]
pub struct MessageAttachmentPullDoc {
    pub title: String,
    pub link: String,
    pub author: Option<UserValue>,
    pub body: String,
    pub patch: String,
    pub merged: bool,
}

#[derive(GraphQLObject, Clone)]
#[graphql(context = Context)]
pub struct MessageAttachmentCommitDoc {
    pub sha: String,
    pub message: String,
    pub author: Option<UserValue>,
    pub author_at: DateTime<Utc>,
}

#[derive(GraphQLObject, Clone)]
#[graphql(context = Context)]
pub struct MessageAttachmentPageDoc {
    pub link: String,
    pub title: String,
    pub content: String,
}

#[derive(GraphQLObject, Clone)]
#[graphql(context = Context)]
pub struct MessageAttachmentIngestedDoc {
    pub id: String,
    pub title: String,
    pub body: String,
    pub link: Option<String>,
}

impl MessageAttachmentDoc {
    pub fn from_doc_search_document(doc: DocSearchDocument, author: Option<UserValue>) -> Self {
        match doc {
            DocSearchDocument::Web(web) => MessageAttachmentDoc::Web(MessageAttachmentWebDoc {
                title: web.title,
                link: web.link,
                content: web.snippet,
            }),
            DocSearchDocument::Issue(issue) => {
                MessageAttachmentDoc::Issue(MessageAttachmentIssueDoc {
                    title: issue.title,
                    link: issue.link,
                    author,
                    body: issue.body,
                    closed: issue.closed,
                })
            }
            DocSearchDocument::Pull(pull) => MessageAttachmentDoc::Pull(MessageAttachmentPullDoc {
                title: pull.title,
                link: pull.link,
                author,
                body: pull.body,
                patch: pull.diff,
                merged: pull.merged,
            }),
            DocSearchDocument::Commit(commit) => {
                MessageAttachmentDoc::Commit(MessageAttachmentCommitDoc {
                    sha: commit.sha,
                    message: commit.message,
                    author,
                    author_at: commit.author_at,
                })
            }
            DocSearchDocument::Page(page) => MessageAttachmentDoc::Page(MessageAttachmentPageDoc {
                link: page.link,
                title: page.title,
                content: page.content,
            }),
            DocSearchDocument::Ingested(ingested) => {
                MessageAttachmentDoc::Ingested(MessageAttachmentIngestedDoc {
                    id: ingested.id,
                    title: ingested.title,
                    body: ingested.body,
                    link: ingested.link,
                })
            }
        }
    }

    pub fn content(&self) -> String {
        match self {
            MessageAttachmentDoc::Web(web) => web.content.to_string(),
            MessageAttachmentDoc::Issue(issue) => issue.body.to_string(),
            MessageAttachmentDoc::Pull(pull) => pull.body.to_string(),
            MessageAttachmentDoc::Commit(commit) => commit.message.to_string(),
            MessageAttachmentDoc::Page(page) => page.content.to_string(),
            MessageAttachmentDoc::Ingested(ingested) => ingested.body.clone(),
        }
    }
}

#[derive(GraphQLObject)]
#[graphql(context = Context)]
pub struct MessageDocSearchHit {
    pub doc: MessageAttachmentDoc,
    pub score: f64,
}

#[derive(GraphQLObject)]
#[graphql(context = Context)]
pub struct Thread {
    pub id: ID,
    pub user_id: ID,

    pub is_ephemeral: bool,

    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl NodeType for Thread {
    type Cursor = String;

    fn cursor(&self) -> Self::Cursor {
        self.id.to_string()
    }

    fn connection_type_name() -> &'static str {
        "ThreadConnection"
    }

    fn edge_type_name() -> &'static str {
        "ThreadEdge"
    }
}

#[derive(GraphQLObject)]
pub struct ThreadCreated {
    pub id: ID,
}

#[derive(GraphQLObject)]
pub struct ThreadRelevantQuestions {
    pub questions: Vec<String>,
}

#[derive(GraphQLObject)]
pub struct ThreadUserMessageCreated {
    pub id: ID,
}

#[derive(GraphQLObject)]
pub struct ThreadAssistantMessageCreated {
    pub id: ID,
}

#[derive(GraphQLObject, Clone, Debug)]
pub struct ThreadAssistantMessageReadingCode {
    pub snippet: bool,
    pub file_list: bool,
}

#[derive(GraphQLObject)]
pub struct ThreadAssistantMessageAttachmentsCodeFileList {
    pub file_list: Vec<String>,
    pub truncated: bool,
}

#[derive(GraphQLObject)]
pub struct ThreadAssistantMessageAttachmentsCode {
    pub hits: Vec<MessageCodeSearchHit>,
}

#[derive(GraphQLObject, Clone, Debug)]
pub struct ThreadAssistantMessageReadingDoc {
    pub source_ids: Vec<String>,
}

#[derive(GraphQLObject)]
#[graphql(context = Context)]
pub struct ThreadAssistantMessageAttachmentsDoc {
    pub hits: Vec<MessageDocSearchHit>,
}

#[derive(GraphQLObject)]
pub struct ThreadAssistantMessageContentDelta {
    pub delta: String,
}

#[derive(GraphQLObject)]
pub struct ThreadAssistantMessageCompleted {
    /// Debug data for the assistant message completion.
    pub debug_data: Option<ThreadAssistantMessageCompletedDebugData>,
}

#[derive(GraphQLObject, Clone, Debug)]
pub struct ThreadAssistantMessageCompletedDebugData {
    // Messages sent to LLM to generate the response.
    pub chat_completion_messages: Vec<ChatCompletionMessage>,
}

/// Schema of thread run stream.
///
/// Apart from `thread_message_content_delta`, all other items will only appear once in the stream.
#[derive(GraphQLUnion)]
#[graphql(context = Context)]
pub enum ThreadRunItem {
    ThreadCreated(ThreadCreated),
    ThreadRelevantQuestions(ThreadRelevantQuestions),
    ThreadUserMessageCreated(ThreadUserMessageCreated),
    ThreadAssistantMessageCreated(ThreadAssistantMessageCreated),
    ThreadAssistantMessageReadingCode(ThreadAssistantMessageReadingCode),
    ThreadAssistantMessageAttachmentsCodeFileList(ThreadAssistantMessageAttachmentsCodeFileList),
    ThreadAssistantMessageAttachmentsCode(ThreadAssistantMessageAttachmentsCode),
    ThreadAssistantMessageReadingDoc(ThreadAssistantMessageReadingDoc),
    ThreadAssistantMessageAttachmentsDoc(ThreadAssistantMessageAttachmentsDoc),
    ThreadAssistantMessageContentDelta(ThreadAssistantMessageContentDelta),
    ThreadAssistantMessageCompleted(ThreadAssistantMessageCompleted),
}

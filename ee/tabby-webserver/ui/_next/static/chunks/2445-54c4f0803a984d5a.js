"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2445],{19567:function(e,n,t){t.d(n,{Uw:function(){return l},c7:function(){return u},jJ:function(){return d},xG:function(){return a}});var r=t(99109),i=t(60106);let s=(0,i.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n    }\n  }\n"),o=()=>{let[{data:e}]=(0,r.aM)({query:s});return null==e?void 0:e.serverInfo},a=()=>{var e;return null===(e=o())||void 0===e?void 0:e.isChatEnabled},u=()=>{var e;return null===(e=o())||void 0===e?void 0:e.isAdminInitialized},l=()=>{var e;return null===(e=o())||void 0===e?void 0:e.isEmailConfigured},d=()=>{var e;return null===(e=o())||void 0===e?void 0:e.allowSelfSignup}},58001:function(e,n,t){t.d(n,{Dp:function(){return p},Ho:function(){return y},QJ:function(){return m},av:function(){return P},kP:function(){return R},zq:function(){return S}});var r,i,s=t(57437),o=t(2265),a=t(24033),u=t(26566),l=t.n(u),d=t(60106),f=t(19567),c=t(7820),v=t(37004);function g(e,n){var t,r;let s=function(e,n){switch(n.type){case i.SignIn:case i.Refresh:return{status:"authenticated",data:n.data};case i.SignOut:return{status:"unauthenticated",data:void 0}}}(0,n);return e.status==s.status&&(t=e.data,r=s.data,(null==t?void 0:t.accessToken)===(null==r?void 0:r.accessToken)&&(null==t?void 0:t.refreshToken)===(null==r?void 0:r.refreshToken))?e:s}(r=i||(i={}))[r.SignIn=0]="SignIn",r[r.SignOut=1]="SignOut",r[r.Refresh=2]="Refresh";let h=o.createContext({}),p=(0,d.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),$=(0,d.BX)("\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n"),y=e=>{let{children:n}=e,t=o.useRef(!1),[r]=l()(v.nd,void 0),[a,u]=o.useReducer(g,{status:"loading",data:void 0});o.useEffect(()=>{t.current=!0,(null==r?void 0:r.accessToken)&&(null==r?void 0:r.refreshToken)?u({type:i.SignIn,data:r}):u({type:i.SignOut})},[]),o.useEffect(()=>{t.current&&((null==r?void 0:r.accessToken)&&(null==r?void 0:r.refreshToken)?u({type:i.Refresh,data:r}):u({type:i.SignOut}))},[r]);let d=o.useMemo(()=>{var e;return(null==a?void 0:a.status)=="authenticated"?{data:{accessToken:a.data.accessToken},status:a.status}:{status:null!==(e=null==a?void 0:a.status)&&void 0!==e?e:"loading",data:null}},[a]);return(0,s.jsx)(h.Provider,{value:{authState:a,dispatch:u,session:d},children:n})};class b extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function I(){let e=o.useContext(h);if(!e)throw new b;return e}function S(){let{dispatch:e}=I(),[n,t]=l()(v.nd,void 0);return async n=>(t({accessToken:n.accessToken,refreshToken:n.refreshToken}),e({type:i.SignIn,data:n}),!0)}function m(){let e=(0,c.D)($),{dispatch:n}=I(),[t,r]=l()(v.nd,void 0);return async()=>{await e(),r(void 0),n({type:i.SignOut})}}function R(){let{session:e}=I();return e}let k=["/auth/signin","/auth/signup","/auth/reset-password"];function P(){let e=(0,f.c7)(),n=(0,a.useRouter)(),t=(0,a.usePathname)(),r=(0,a.useSearchParams)(),{data:i,status:s}=R();return o.useEffect(()=>{if("loading"===s||"authenticated"===s||void 0===e)return;if(!e)return n.replace("/auth/signup?isAdmin=true");let i="/auth/signup"===t&&"true"===r.get("isAdmin");(!k.includes(t)||i)&&n.replace("/auth/signin")},[e,s]),i}},7820:function(e,n,t){t.d(n,{D:function(){return v},L:function(){return g}});var r=t(69166),i=t(73997),s=t(83074),o=t(53771),a=t(24144),u=t(99109),l=t(18398),d=t(58001),f=t(57166),c=t(37004);function v(e,n){var t;let[r,i]=(0,u.Db)(e),s=(null==n?void 0:n.form)?(t=n.form,e=>{let{graphQLErrors:n=[]}=e;for(let e of n)if(e.extensions&&e.extensions["validation-errors"]){let n=e.extensions["validation-errors"];for(let e of n.errors)t.setError(e.path,e)}else(null==e?void 0:e.originalError)&&t.setError("root",e.originalError)}):void 0,o=async e=>{let t;try{if(null==(t=await i(e))?void 0:t.error)s&&s(t.error),(null==n?void 0:n.onError)&&n.onError(t.error);else if(!(0,a.Z)(null==t?void 0:t.data)){var r;null==n||null===(r=n.onCompleted)||void 0===r||r.call(n,t.data)}}catch(e){(null==n?void 0:n.onError)&&n.onError(e);return}return t};return o}let g=new l.KU({url:"/graphql",requestPolicy:"cache-and-network",exchanges:[(0,i.HG)({keys:{CompletionStats:()=>null,ServerInfo:()=>null,RepositorySearch:()=>null,RepositoryList:()=>null},resolvers:{Query:{invitations:(0,s.N)(),repositories:(0,s.N)(),githubRepositories:(0,s.N)(),gitlabRepositories:(0,s.N)()}},updates:{Mutation:{deleteInvitation(e,n,t,r){e.deleteInvitation&&t.inspectFields("Query").filter(e=>"invitations"===e.fieldName).forEach(e=>{t.updateQuery({query:f.lE,variables:e.arguments},e=>{var t;return(null==e?void 0:null===(t=e.invitations)||void 0===t?void 0:t.edges)&&(e.invitations.edges=e.invitations.edges.filter(e=>e.node.id!==n.id)),e})})},deleteGitRepository(e,n,t,r){e.deleteGitRepository&&t.inspectFields("Query").filter(e=>"gitRepositories"===e.fieldName).forEach(e=>{t.updateQuery({query:f.S1,variables:e.arguments},e=>{var t;return(null==e?void 0:null===(t=e.gitRepositories)||void 0===t?void 0:t.edges)&&(e.gitRepositories.edges=e.gitRepositories.edges.filter(e=>e.node.id!==n.id)),e})})},updateGithubProvidedRepositoryActive(e,n,t,r){e.updateGithubProvidedRepositoryActive&&t.inspectFields("Query").filter(e=>"githubRepositories"===e.fieldName).forEach(e=>{t.updateQuery({query:f.Vt,variables:e.arguments},e=>{var t,r;return(null==e?void 0:null===(r=e.githubRepositories)||void 0===r?void 0:null===(t=r.edges)||void 0===t?void 0:t.length)&&(e.githubRepositories.edges=e.githubRepositories.edges.map(e=>e.node.id===n.id?{...e,node:{...e.node,active:n.active}}:e)),e})})},updateGitlabProvidedRepositoryActive(e,n,t,r){e.updateGitlabProvidedRepositoryActive&&t.inspectFields("Query").filter(e=>"gitlabRepositories"===e.fieldName).forEach(e=>{t.updateQuery({query:f.Zr,variables:e.arguments},e=>{var t,r;return(null==e?void 0:null===(r=e.gitlabRepositories)||void 0===r?void 0:null===(t=r.edges)||void 0===t?void 0:t.length)&&(e.gitlabRepositories.edges=e.gitlabRepositories.edges.map(e=>e.node.id===n.id?{...e,node:{...e.node,active:n.active}}:e)),e})})}}}}),(0,r.M)(async e=>{let n=(0,c.bW)(),t=null==n?void 0:n.accessToken,r=null==n?void 0:n.refreshToken;return{addAuthToOperation(n){let i=(0,c.bW)();return(t=null==i?void 0:i.accessToken,r=null==i?void 0:i.refreshToken,t)?e.appendHeaders(n,{Authorization:"Bearer ".concat(t)}):n},didAuthError:(e,n)=>e.graphQLErrors.some(e=>{var n;return(null==e?void 0:null===(n=e.extensions)||void 0===n?void 0:n.code)==="UNAUTHORIZED"}),willAuthError(e){let n=(0,c.bW)();if(t=null==n?void 0:n.accessToken,r=null==n?void 0:n.refreshToken,"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["tokenAuth","registerUser"].includes(e.name.value)})||r&&"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.value)==="refreshToken"}))return!1;if(!t)return!0;try{let{exp:e}=(0,o.o)(t);return!e||(0,c.pw)(e)}catch(e){return!0}},async refreshAuth(){if(r)return c.wG.refreshToken(()=>e.mutate(d.Dp,{refreshToken:r}).then(e=>{var n;return null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.refreshToken}));(0,c.Rn)()}}}),(0,l.Dk)({onError(e){e.message.startsWith("[GraphQL]")&&(e.message=e.message.replace("[GraphQL]","").trim())}}),l.Ek]})},57166:function(e,n,t){t.d(n,{Cl:function(){return f},DQ:function(){return u},GG:function(){return o},S1:function(){return s},Vt:function(){return v},Y6:function(){return d},Zr:function(){return h},cO:function(){return g},hC:function(){return c},lE:function(){return i},yB:function(){return a},yw:function(){return l}});var r=t(60106);let i=(0,r.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),s=(0,r.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,r.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,r.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),u=(0,r.BX)("\n  query ListJobs {\n    jobs\n  }\n"),l=(0,r.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),d=(0,r.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),f=(0,r.BX)("\n  query DailyStats(\n    $start: DateTimeUtc!\n    $end: DateTimeUtc!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),c=(0,r.BX)("\n  query ListGithubRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),v=(0,r.BX)("\n  query ListGithubRepositories(\n    $providerIds: [ID!]!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubRepositories(\n      providerIds: $providerIds\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          githubRepositoryProviderId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),g=(0,r.BX)("\n  query ListGitlabRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),h=(0,r.BX)("\n  query ListGitlabRepositories(\n    $providerIds: [ID!]!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabRepositories(\n      providerIds: $providerIds\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          gitlabRepositoryProviderId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")},37004:function(e,n,t){t.d(n,{Rn:function(){return u},bW:function(){return o},nd:function(){return i},pw:function(){return l},wG:function(){return d}});var r=t(39311);let i="_tabby_auth",s="_tabby_auth_lock",o=()=>{if((0,r.S_)()){let e=localStorage.getItem(i);if(e)try{return JSON.parse(e)}catch(e){}}},a=e=>{localStorage.setItem(i,JSON.stringify(e))},u=()=>{localStorage.removeItem(i),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:i}))},l=e=>Date.now()>1e3*e,d=new class{tryGetRefreshLock(){let e=localStorage.getItem(s),n=e?parseInt(e,10):null,t=Date.now();return(!e||!!n&&t-n>1e4)&&(localStorage.setItem(s,t.toString()),!0)}releaseRefreshLock(){localStorage.removeItem(s)}enqueueRetryRequest(e){this.retryQueue.push(e)}processQueue(){this.retryQueue.forEach(e=>e(!0)),this.retryQueue=[],this.releaseRefreshLock()}rejectQueue(e){this.retryQueue.forEach(n=>n(!1,e)),this.retryQueue=[],this.releaseRefreshLock()}async refreshToken(e){if(!this.tryGetRefreshLock())return new Promise((e,n)=>{this.enqueueRetryRequest((t,r)=>{!t||r?n(null!=r?r:"Failed to refresh token"):e()})});let n=await e();if(n)await a(n),this.processQueue();else throw this.rejectQueue(),u(),Error("Failed to refresh token")}constructor(){this.handleStorageChange=e=>{try{var n;e.key===s&&null===e.newValue&&(null===(n=this.retryQueue)||void 0===n?void 0:n.length)&&this.processQueue()}catch(e){}},this.retryQueue=[],window.addEventListener("storage",this.handleStorageChange)}}}}]);
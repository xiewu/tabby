(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7650],{23975:function(e,r,t){Promise.resolve().then(t.bind(t,20403))},20403:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return M}});var n=t(57437),s=t(2265),i=t(70349),a=t(72937),l=t(24033),o=t(71424),d=t(99109),c=t(61985),u=t(7820),f=t(57166),m=t(29155),x=t(93023),p=t(86110),v=t(12609),h=t(84168),j=t(32553),g=t(70825),b=t(93111),N=t(60106);let y=(0,N.BX)("\n    mutation UpdateGithubProvidedRepositoryActive($id: ID!, $active: Boolean!) {\n      updateGithubProvidedRepositoryActive(id: $id, active: $active)\n    }\n  "),w=(0,N.BX)("\n    mutation UpdateGitlabProvidedRepositoryActive($id: ID!, $active: Boolean!) {\n      updateGitlabProvidedRepositoryActive(id: $id, active: $active)\n    }\n  ");var R=t(38110),C=t(61865),k=t(74578),P=t(39311),S=t(36523),G=t(41315),z=t(25831);let D=k.Ry({id:k.Z_()});function I(e){let{kind:r,onCreated:t,onCancel:a,repositories:l,providerStatus:o}=e,[d,c]=s.useState(!1),f=(0,C.cI)({resolver:(0,R.F)(D)}),{isSubmitting:m}=f.formState,p=s.useMemo(()=>{switch(o){case i.zo.Pending:return"Awaiting the next data synchronization";case i.zo.Error:return"Synchronizing error. Please check if the access token is still valid";default:return"No repository found"}},[o]),v=(0,u.D)(y,{onCompleted(e){(null==e?void 0:e.updateGithubProvidedRepositoryActive)&&(f.reset({id:void 0}),null==t||t())},form:f}),j=(0,u.D)(w,{onCompleted(e){(null==e?void 0:e.updateGitlabProvidedRepositoryActive)&&(f.reset({id:void 0}),null==t||t())},form:f});return(0,n.jsx)(G.l0,{...f,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:f.handleSubmit(e=>r===i.vW.Github?v({id:e.id,active:!0}):r===i.vW.Gitlab?j({id:e.id,active:!0}):void 0),children:[(0,n.jsx)(G.Wi,{control:f.control,name:"id",render:e=>{var r,t;let{field:s}=e;return(0,n.jsxs)(G.xJ,{className:"flex flex-col",children:[(0,n.jsxs)(z.J2,{open:d,onOpenChange:c,children:[(0,n.jsx)(z.xo,{asChild:!0,children:(0,n.jsx)(G.NI,{children:(0,n.jsxs)(x.z,{variant:"outline",role:"combobox",className:(0,P.cn)("justify-between font-normal",!s.value&&"text-muted-foreground"),children:[s.value?null==l?void 0:null===(t=l.find(e=>e.node.id===s.value))||void 0===t?void 0:null===(r=t.node)||void 0===r?void 0:r.gitUrl:"Select repository",(0,n.jsx)(h.IconChevronUpDown,{})]})})}),(0,n.jsx)(z.yk,{className:"w-[var(--radix-popover-trigger-width)] p-0",align:"start",side:"bottom",children:(0,n.jsxs)(S.mY,{children:[(0,n.jsx)(S.sZ,{placeholder:"Search repository..."}),(0,n.jsxs)(S.e8,{className:"max-h-60",children:[(0,n.jsx)(S.rb,{children:p}),(0,n.jsx)(S.fu,{children:o!==i.zo.Pending&&(null==l?void 0:l.map(e=>(0,n.jsxs)(S.di,{onSelect:()=>{f.setValue("id",e.node.id),c(!1)},children:[(0,n.jsx)(h.IconCheck,{className:(0,P.cn)("mr-2",e.node.id===s.value?"opacity-100":"opacity-0")}),e.node.gitUrl]},e.node.id)))})]})]})})]}),(0,n.jsx)(G.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,n.jsx)(x.z,{type:"button",variant:"ghost",disabled:m,onClick:a,children:"Cancel"}),(0,n.jsx)(x.z,{type:"submit",disabled:m,children:"Add"})]})]}),(0,n.jsx)(G.zG,{className:"text-center"})]})})}var A=t(34356);let Y=(0,N.BX)("\n  mutation DeleteGithubRepositoryProvider($id: ID!) {\n    deleteGithubRepositoryProvider(id: $id)\n  }\n"),E=(0,N.BX)("\n  mutation UpdateGithubRepositoryProvider(\n    $input: UpdateRepositoryProviderInput!\n  ) {\n    updateGithubRepositoryProvider(input: $input)\n  }\n"),$=e=>{let{defaultValues:r,onSuccess:t,onDelete:s,id:i}=e,a=(0,A.fB)(r),l=(0,u.D)(Y),d=(0,u.D)(E,{form:a,onCompleted(e){(null==e?void 0:e.updateGithubRepositoryProvider)&&(o.A.success("Updated GitHub repository provider successfully"),null==a||a.reset(null==a?void 0:a.getValues()),null==t||t())}}),c=async e=>{await d({input:{id:i,...e}})},f=async()=>{var e,r;let t=await l({id:i});(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.deleteGithubRepositoryProvider)?null==s||s():o.A.error((null==t?void 0:null===(r=t.error)||void 0===r?void 0:r.message)||"Failed to delete GitHub repository provider")};return(0,n.jsx)(A.Kb,{onSubmit:c,onDelete:f,deletable:!0,cancleable:!1,form:a})},O=e=>{let{data:r,onDelete:t,providerStatus:a}=e,l=(0,u.D)(y,{onCompleted(e){(null==e?void 0:e.updateGithubProvidedRepositoryActive)&&(null==t||t())},onError(e){o.A.error(e.message||"Failed to delete")}}),d=async e=>{l({id:e,active:!1})},[c,f]=s.useState(!1),m=(0,s.useMemo)(()=>null==r?void 0:r.filter(e=>e.node.active),[r]),p=(0,s.useMemo)(()=>null==r?void 0:r.filter(e=>!e.node.active),[r]);return(0,n.jsxs)(j.iA,{children:[(0,n.jsx)(j.xD,{children:(0,n.jsxs)(j.SC,{children:[(0,n.jsx)(j.ss,{className:"w-[25%]",children:"Name"}),(0,n.jsx)(j.ss,{className:"w-[45%]",children:"URL"}),(0,n.jsx)(j.ss,{className:"text-right",children:(0,n.jsxs)(v.Vq,{open:c,onOpenChange:f,children:[(0,n.jsxs)(v.cZ,{children:[(0,n.jsxs)(v.fK,{className:"gap-3",children:[(0,n.jsx)(v.$N,{children:"Add new repository"}),(0,n.jsx)(v.Be,{children:"Add new GitHub repository from this provider"})]}),(0,n.jsx)(I,{onCancel:()=>f(!1),onCreated:()=>{f(!1)},repositories:p,kind:i.vW.Github,providerStatus:a})]}),(0,n.jsx)(v.hg,{asChild:!0,children:(0,n.jsx)(x.z,{variant:"ghost",size:"icon",children:(0,n.jsx)(h.IconPlus,{})})})]})})]})}),(0,n.jsx)(j.RM,{children:(null==m?void 0:m.length)?(0,n.jsx)(n.Fragment,{children:null==m?void 0:m.map(e=>(0,n.jsxs)(j.SC,{children:[(0,n.jsx)(j.pj,{children:e.node.name}),(0,n.jsx)(j.pj,{children:e.node.gitUrl}),(0,n.jsx)(j.pj,{className:"flex justify-end",children:(0,n.jsx)("div",{className:"flex gap-1",children:(0,n.jsx)(x.z,{size:"icon",variant:"hover-destructive",onClick:r=>d(e.node.id),children:(0,n.jsx)(h.IconTrash,{})})})})]},e.node.id))}):(0,n.jsx)(j.SC,{children:(0,n.jsx)(j.pj,{colSpan:3,className:"h-[100px] text-center",children:"No repositories yet."})})})]})};var Z=()=>{var e,r,t,a,o;let u=(0,l.useSearchParams)(),v=(0,l.useRouter)(),j=null!==(o=null===(e=u.get("id"))||void 0===e?void 0:e.toString())&&void 0!==o?o:"",[{data:N,fetching:y}]=(0,d.aM)({query:f.hC,variables:{ids:[j]},pause:!j}),w=null==N?void 0:null===(a=N.githubRepositoryProviders)||void 0===a?void 0:null===(t=a.edges)||void 0===t?void 0:null===(r=t[0])||void 0===r?void 0:r.node,[R,C]=function(e){var r,t;let[n,i]=(0,s.useState)({providerIds:[e],first:c.L}),[a,l]=(0,s.useState)(!e),[{data:o,fetching:u}]=(0,d.aM)({query:f.Vt,variables:n,pause:!e});return(0,s.useEffect)(()=>{if(!a&&!u&&o){var r;let t=null==o?void 0:null===(r=o.githubRepositories)||void 0===r?void 0:r.pageInfo;(null==t?void 0:t.hasNextPage)?i({providerIds:[e],first:c.L,after:t.endCursor}):l(!0)}},[u,o]),[null!==(t=null==o?void 0:null===(r=o.githubRepositories)||void 0===r?void 0:r.edges)&&void 0!==t?t:[],!a]}(j);return j&&(!j||y||w)?(0,n.jsxs)(g.Z,{loading:y,children:[(0,n.jsxs)(p.ll,{className:"flex items-center gap-4",children:[(0,n.jsxs)("div",{className:"-ml-1 flex items-center",children:[(0,n.jsx)(x.z,{onClick:()=>v.back(),variant:"ghost",className:"h-6 px-1",children:(0,n.jsx)(h.IconChevronLeft,{className:"h-5 w-5"})}),(0,n.jsx)("span",{className:"ml-2",children:null==w?void 0:w.displayName})]}),(0,n.jsx)("div",{className:"flex items-center gap-2 text-base",children:(0,n.jsx)("div",{className:"ml-1",children:w&&function(e){switch(e){case i.zo.Ready:return(0,n.jsx)(m.C,{variant:"successful",children:"Ready"});case i.zo.Error:return(0,n.jsx)(m.C,{variant:"destructive",children:"Error"});case i.zo.Error:return(0,n.jsx)(m.C,{children:"Pending"})}}(w.status)})})]}),(0,n.jsx)(p.aY,{className:"mt-8",children:(0,n.jsx)(g.Z,{loading:y,fallback:(0,n.jsx)(b.cg,{}),children:(0,n.jsx)($,{defaultValues:w,onDelete:()=>{v.back()},id:j})})}),(0,n.jsx)("div",{className:"p-4",children:(0,n.jsx)(g.Z,{loading:C,children:(0,n.jsx)(O,{data:R,providerStatus:null==w?void 0:w.status})})})]}):(0,n.jsx)("div",{className:"flex h-[250px] w-full items-center justify-center rounded-lg border",children:"Provider not found"})};let _=(0,N.BX)("\n  mutation DeleteGitlabRepositoryProvider($id: ID!) {\n    deleteGitlabRepositoryProvider(id: $id)\n  }\n"),V=(0,N.BX)("\n  mutation UpdateGitlabRepositoryProvider(\n    $input: UpdateRepositoryProviderInput!\n  ) {\n    updateGitlabRepositoryProvider(input: $input)\n  }\n"),B=e=>{let{defaultValues:r,onSuccess:t,onDelete:s,id:i}=e,a=(0,A.fB)(r),l=(0,u.D)(_),d=(0,u.D)(V,{form:a,onCompleted(e){(null==e?void 0:e.updateGitlabRepositoryProvider)&&(o.A.success("Updated GitLab repository provider successfully"),null==a||a.reset(null==a?void 0:a.getValues()),null==t||t())}}),c=async e=>{await d({input:{id:i,...e}})},f=async()=>{var e,r;let t=await l({id:i});(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.deleteGitlabRepositoryProvider)?null==s||s():o.A.error((null==t?void 0:null===(r=t.error)||void 0===r?void 0:r.message)||"Failed to delete GitHub repository provider")};return(0,n.jsx)(A.Kb,{onSubmit:c,onDelete:f,deletable:!0,cancleable:!1,form:a})},U=e=>{let{data:r,onDelete:t,providerStatus:a}=e,l=(0,u.D)(w,{onCompleted(e){(null==e?void 0:e.updateGitlabProvidedRepositoryActive)&&(null==t||t())},onError(e){o.A.error(e.message||"Failed to delete")}}),d=async e=>{l({id:e,active:!1})},[c,f]=s.useState(!1),m=(0,s.useMemo)(()=>null==r?void 0:r.filter(e=>e.node.active),[r]),p=(0,s.useMemo)(()=>null==r?void 0:r.filter(e=>!e.node.active),[r]);return(0,n.jsxs)(j.iA,{children:[(0,n.jsx)(j.xD,{children:(0,n.jsxs)(j.SC,{children:[(0,n.jsx)(j.ss,{className:"w-[25%]",children:"Name"}),(0,n.jsx)(j.ss,{className:"w-[45%]",children:"URL"}),(0,n.jsx)(j.ss,{className:"text-right",children:(0,n.jsxs)(v.Vq,{open:c,onOpenChange:f,children:[(0,n.jsxs)(v.cZ,{children:[(0,n.jsxs)(v.fK,{className:"gap-3",children:[(0,n.jsx)(v.$N,{children:"Add new repository"}),(0,n.jsx)(v.Be,{children:"Add new GitLab repository from this provider"})]}),(0,n.jsx)(I,{onCancel:()=>f(!1),onCreated:()=>{f(!1)},repositories:p,kind:i.vW.Gitlab,providerStatus:a})]}),(0,n.jsx)(v.hg,{asChild:!0,children:(0,n.jsx)(x.z,{variant:"ghost",size:"icon",children:(0,n.jsx)(h.IconPlus,{})})})]})})]})}),(0,n.jsx)(j.RM,{children:(null==m?void 0:m.length)?(0,n.jsx)(n.Fragment,{children:null==m?void 0:m.map(e=>(0,n.jsxs)(j.SC,{children:[(0,n.jsx)(j.pj,{children:e.node.name}),(0,n.jsx)(j.pj,{children:e.node.gitUrl}),(0,n.jsx)(j.pj,{className:"flex justify-end",children:(0,n.jsx)("div",{className:"flex gap-1",children:(0,n.jsx)(x.z,{size:"icon",variant:"hover-destructive",onClick:r=>d(e.node.id),children:(0,n.jsx)(h.IconTrash,{})})})})]},e.node.id))}):(0,n.jsx)(j.SC,{children:(0,n.jsx)(j.pj,{colSpan:3,className:"h-[100px] text-center",children:"No repositories yet."})})})]})};var L=()=>{var e,r,t,a,o;let u=(0,l.useSearchParams)(),v=(0,l.useRouter)(),j=null!==(o=null===(e=u.get("id"))||void 0===e?void 0:e.toString())&&void 0!==o?o:"",[{data:N,fetching:y}]=(0,d.aM)({query:f.cO,variables:{ids:[j]},pause:!j}),w=null==N?void 0:null===(a=N.gitlabRepositoryProviders)||void 0===a?void 0:null===(t=a.edges)||void 0===t?void 0:null===(r=t[0])||void 0===r?void 0:r.node,[R,C]=function(e){var r,t;let[n,i]=(0,s.useState)({providerIds:[e],first:c.L}),[a,l]=(0,s.useState)(!e),[{data:o,fetching:u}]=(0,d.aM)({query:f.Zr,variables:n,pause:!e});return(0,s.useEffect)(()=>{if(!a&&!u&&o){var r;let t=null==o?void 0:null===(r=o.gitlabRepositories)||void 0===r?void 0:r.pageInfo;(null==t?void 0:t.hasNextPage)?i({providerIds:[e],first:c.L,after:t.endCursor}):l(!0)}},[u,o]),[null!==(t=null==o?void 0:null===(r=o.gitlabRepositories)||void 0===r?void 0:r.edges)&&void 0!==t?t:[],!a]}(j);return j&&(!j||y||w)?(0,n.jsxs)(g.Z,{loading:y,children:[(0,n.jsxs)(p.ll,{className:"flex items-center gap-4",children:[(0,n.jsxs)("div",{className:"-ml-1 flex items-center",children:[(0,n.jsx)(x.z,{onClick:()=>v.back(),variant:"ghost",className:"h-6 px-1",children:(0,n.jsx)(h.IconChevronLeft,{className:"h-5 w-5"})}),(0,n.jsx)("span",{className:"ml-2",children:null==w?void 0:w.displayName})]}),(0,n.jsx)("div",{className:"flex items-center gap-2 text-base",children:(0,n.jsx)("div",{className:"ml-1",children:w&&function(e){switch(e){case i.zo.Ready:return(0,n.jsx)(m.C,{variant:"successful",children:"Ready"});case i.zo.Error:return(0,n.jsx)(m.C,{variant:"destructive",children:"Error"});case i.zo.Error:return(0,n.jsx)(m.C,{children:"Pending"})}}(w.status)})})]}),(0,n.jsx)(p.aY,{className:"mt-8",children:(0,n.jsx)(g.Z,{loading:y,fallback:(0,n.jsx)(b.cg,{}),children:(0,n.jsx)(B,{defaultValues:w,onDelete:()=>{v.back()},id:j})})}),(0,n.jsx)("div",{className:"p-4",children:(0,n.jsx)(g.Z,{loading:C,children:(0,n.jsx)(U,{data:R,providerStatus:null==w?void 0:w.status})})})]}):(0,n.jsx)("div",{className:"flex h-[250px] w-full items-center justify-center rounded-lg border",children:"Provider not found"})},M=()=>{let e=(0,a.Y)();return e===i.vW.Github?(0,n.jsx)(Z,{}):e===i.vW.Gitlab?(0,n.jsx)(L,{}):(0,n.jsx)("div",{children:"404"})}},70825:function(e,r,t){"use strict";var n=t(57437),s=t(2265),i=t(36850),a=t(93111);r.Z=e=>{let{loading:r,fallback:t,delay:l,children:o}=e,[d,c]=s.useState(!r),[u]=(0,i.n)(d,null!=l?l:200);return(s.useEffect(()=>{r||d||c(!0)},[r]),u)?o:t||(0,n.jsx)(a.cg,{})}},93111:function(e,r,t){"use strict";t.d(r,{PF:function(){return o},cg:function(){return a},tB:function(){return l}});var n=t(57437),s=t(39311),i=t(25645);let a=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("space-y-3",r),...t,children:[(0,n.jsx)(i.O,{className:"h-4 w-full"}),(0,n.jsx)(i.O,{className:"h-4 w-full"}),(0,n.jsx)(i.O,{className:"h-4 w-full"}),(0,n.jsx)(i.O,{className:"h-4 w-full"})]})},l=e=>{let{className:r,...t}=e;return(0,n.jsx)(i.O,{className:(0,s.cn)("h-4 w-full",r),...t})},o=e=>{let{className:r,...t}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",r),...t,children:[(0,n.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(i.O,{className:"h-4 w-full"}),(0,n.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(i.O,{className:"h-4 w-full"})]})}},29155:function(e,r,t){"use strict";t.d(r,{C:function(){return l}});var n=t(57437);t(2265);var s=t(7404),i=t(39311);let a=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",successful:"border-transparent bg-successful text-successful-foreground hover:bg-successful/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l(e){let{className:r,variant:t,...s}=e;return(0,n.jsx)("div",{className:(0,i.cn)(a({variant:t}),r),...s})}},86110:function(e,r,t){"use strict";t.d(r,{Ol:function(){return l},Zb:function(){return a},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var n=t(57437),s=t(2265),i=t(39311);let a=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});a.displayName="Card";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",t),...s})});l.displayName="CardHeader";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("h3",{ref:r,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});o.displayName="CardTitle";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",t),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("p-6 pt-0",t),...s})});c.displayName="CardContent";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",t),...s})});u.displayName="CardFooter"},36523:function(e,r,t){"use strict";t.d(r,{di:function(){return x},e8:function(){return c},fu:function(){return f},mY:function(){return o},rb:function(){return u},sZ:function(){return d},zz:function(){return m}});var n=t(57437),s=t(2265),i=t(83126),a=t(41827),l=t(39311);t(12609);let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.mY,{ref:r,className:(0,l.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",t),...s})});o.displayName=i.mY.displayName;let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,n.jsx)(a.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,n.jsx)(i.mY.Input,{ref:r,className:(0,l.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",t),...s})]})});d.displayName=i.mY.Input.displayName;let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.mY.List,{ref:r,className:(0,l.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",t),...s})});c.displayName=i.mY.List.displayName;let u=s.forwardRef((e,r)=>(0,n.jsx)(i.mY.Empty,{ref:r,className:"py-6 text-center text-sm",...e}));u.displayName=i.mY.Empty.displayName;let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.mY.Group,{ref:r,className:(0,l.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",t),...s})});f.displayName=i.mY.Group.displayName;let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.mY.Separator,{ref:r,className:(0,l.cn)("-mx-1 h-px bg-border",t),...s})});m.displayName=i.mY.Separator.displayName;let x=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.mY.Item,{ref:r,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",t),...s})});x.displayName=i.mY.Item.displayName},12609:function(e,r,t){"use strict";t.d(r,{$N:function(){return p},Be:function(){return v},Vq:function(){return o},cN:function(){return x},cZ:function(){return f},fK:function(){return m},hg:function(){return d}});var n=t(57437),s=t(2265),i=t(43452),a=t(39311),l=t(84168);let o=i.fC,d=i.xz,c=e=>{let{className:r,children:t,...s}=e;return(0,n.jsx)(i.h_,{className:(0,a.cn)(r),...s,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:t})})};c.displayName=i.h_.displayName;let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.aV,{ref:r,className:(0,a.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",t),...s})});u.displayName=i.aV.displayName;let f=s.forwardRef((e,r)=>{let{className:t,children:s,...o}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(u,{}),(0,n.jsxs)(i.VY,{ref:r,className:(0,a.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",t),...o,children:[s,(0,n.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(l.IconClose,{}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=i.VY.displayName;let m=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("flex flex-col space-y-1.5 text-center sm:text-left",r),...t})};m.displayName="DialogHeader";let x=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,a.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...t})};x.displayName="DialogFooter";let p=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.Dx,{ref:r,className:(0,a.cn)("text-lg font-semibold leading-none tracking-tight",t),...s})});p.displayName=i.Dx.displayName;let v=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(i.dk,{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});v.displayName=i.dk.displayName},25831:function(e,r,t){"use strict";t.d(r,{J2:function(){return l},i9:function(){return c},tW:function(){return u},xo:function(){return o},xp:function(){return d},yk:function(){return f}});var n=t(57437),s=t(2265),i=t(65050),a=t(39311);let l=i.fC,o=i.xz,d=i.x8,c=i.h_,u=i.ee,f=s.forwardRef((e,r)=>{let{className:t,sideOffset:s=4,...l}=e;return(0,n.jsx)(i.VY,{ref:r,sideOffset:s,className:(0,a.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...l})});f.displayName=i.VY.displayName},25645:function(e,r,t){"use strict";t.d(r,{O:function(){return i}});var n=t(57437),s=t(39311);function i(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},32553:function(e,r,t){"use strict";t.d(r,{RM:function(){return o},SC:function(){return c},iA:function(){return a},pj:function(){return f},ss:function(){return u},xD:function(){return l}});var n=t(57437),s=t(2265),i=t(39311);let a=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("table",{ref:r,className:(0,i.cn)("w-full caption-bottom text-sm",t),...s})});a.displayName="Table";let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("thead",{ref:r,className:(0,i.cn)("[&_tr]:border-b",t),...s})});l.displayName="TableHeader";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tbody",{ref:r,className:(0,i.cn)("[&_tr:last-child]:border-0",t),...s})});o.displayName="TableBody";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tfoot",{ref:r,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})});d.displayName="TableFooter";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tr",{ref:r,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});c.displayName="TableRow";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("th",{ref:r,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});u.displayName="TableHead";let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("td",{ref:r,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});f.displayName="TableCell";let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("caption",{ref:r,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",t),...s})});m.displayName="TableCaption"},61985:function(e,r,t){"use strict";t.d(r,{L:function(){return s},o:function(){return n}});let n="name@yourcompany.com",s=20},36850:function(e,r,t){"use strict";t.d(r,{S:function(){return l},n:function(){return o}});var n=t(2265),s=t(50976),i=t(15357);let a=e=>{let r=(0,i.d)(e);n.useEffect(()=>()=>{r.current()},[])};function l(e,r,t){let l=(0,i.d)(e),o=n.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return l.current(...r)},r,t),[]);return a(()=>o.cancel()),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,r,t){let[s,i]=n.useState(e),{run:a}=l(()=>{i(e)},r,t);return n.useEffect(()=>{a()},[e]),[s,i]}},15357:function(e,r,t){"use strict";t.d(r,{d:function(){return s}});var n=t(2265);function s(e){let r=n.useRef(e);return r.current=e,r}}},function(e){e.O(0,[768,9109,584,3072,1396,1424,2699,7070,5414,2553,7463,3452,6630,5050,9081,8138,7753,4168,2445,4356,2971,7864,1744],function(){return e(e.s=23975)}),_N_E=e.O()}]);
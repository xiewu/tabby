(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6969,4553,5083],{70652:function(e,t,r){e.exports=r(54007)},67635:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3546),o=r(94348),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,a=n.useRef,s=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var d=a(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var p=i(e,(d=c(function(){function e(e){if(!s){if(s=!0,i=e,e=n(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return a=t}return a=e}if(t=a,l(i,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(i=e,a=r)}var i,a,s=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,o]))[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}},52635:function(e,t,r){"use strict";e.exports=r(67635)},50778:function(e,t,r){"use strict";r.d(t,{Ns:function(){return q},fC:function(){return $},gb:function(){return y},l_:function(){return j},q4:function(){return x}});var n=r(65122),o=r(3546),l=r(72205),i=r(96497),a=r(47091),s=r(79869),c=r(17957),u=r(57541),d=r(65292),f=r(54491),p=r(65727);let h="ScrollArea",[v,g]=(0,a.b)(h),[m,w]=v(h),b=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:i="hover",dir:a,scrollHideDelay:c=600,...d}=e,[f,p]=(0,o.useState)(null),[h,v]=(0,o.useState)(null),[g,w]=(0,o.useState)(null),[b,S]=(0,o.useState)(null),[E,y]=(0,o.useState)(null),[T,C]=(0,o.useState)(0),[R,z]=(0,o.useState)(0),[P,_]=(0,o.useState)(!1),[D,L]=(0,o.useState)(!1),A=(0,s.e)(t,e=>p(e)),W=(0,u.gm)(a);return(0,o.createElement)(m,{scope:r,type:i,dir:W,scrollHideDelay:c,scrollArea:f,viewport:h,onViewportChange:v,content:g,onContentChange:w,scrollbarX:b,onScrollbarXChange:S,scrollbarXEnabled:P,onScrollbarXEnabledChange:_,scrollbarY:E,onScrollbarYChange:y,scrollbarYEnabled:D,onScrollbarYEnabledChange:L,onCornerWidthChange:C,onCornerHeightChange:z},(0,o.createElement)(l.WV.div,(0,n.Z)({dir:W},d,{ref:A,style:{position:"relative","--radix-scroll-area-corner-width":T+"px","--radix-scroll-area-corner-height":R+"px",...e.style}})))}),S=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:i,...a}=e,c=w("ScrollAreaViewport",r),u=(0,o.useRef)(null),d=(0,s.e)(t,u,c.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},a,{ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},i)))}),E="ScrollAreaScrollbar",y=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,i=w(E,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:s}=i,c="horizontal"===e.orientation;return(0,o.useEffect)(()=>(c?a(!0):s(!0),()=>{c?a(!1):s(!1)}),[c,a,s]),"hover"===i.type?(0,o.createElement)(T,(0,n.Z)({},l,{ref:t,forceMount:r})):"scroll"===i.type?(0,o.createElement)(C,(0,n.Z)({},l,{ref:t,forceMount:r})):"auto"===i.type?(0,o.createElement)(R,(0,n.Z)({},l,{ref:t,forceMount:r})):"always"===i.type?(0,o.createElement)(z,(0,n.Z)({},l,{ref:t})):null}),T=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=w(E,e.__scopeScrollArea),[s,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=a.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),c(!0)},n=()=>{t=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),(0,o.createElement)(i.z,{present:r||s},(0,o.createElement)(R,(0,n.Z)({"data-state":s?"visible":"hidden"},l,{ref:t})))}),C=(0,o.forwardRef)((e,t)=>{var r;let{forceMount:l,...a}=e,s=w(E,e.__scopeScrollArea),c="horizontal"===e.orientation,u=k(()=>f("SCROLL_END"),100),[d,f]=(r={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},"hidden"));return(0,o.useEffect)(()=>{if("idle"===d){let e=window.setTimeout(()=>f("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,s.scrollHideDelay,f]),(0,o.useEffect)(()=>{let e=s.viewport,t=c?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t],o=r!==n;o&&(f("SCROLL"),u()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[s.viewport,c,f,u]),(0,o.createElement)(i.z,{present:l||"hidden"!==d},(0,o.createElement)(z,(0,n.Z)({"data-state":"hidden"===d?"hidden":"visible"},a,{ref:t,onPointerEnter:(0,p.M)(e.onPointerEnter,()=>f("POINTER_ENTER")),onPointerLeave:(0,p.M)(e.onPointerLeave,()=>f("POINTER_LEAVE"))})))}),R=(0,o.forwardRef)((e,t)=>{let r=w(E,e.__scopeScrollArea),{forceMount:l,...a}=e,[s,c]=(0,o.useState)(!1),u="horizontal"===e.orientation,d=k(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;c(u?e:t)}},10);return F(r.viewport,d),F(r.content,d),(0,o.createElement)(i.z,{present:l||s},(0,o.createElement)(z,(0,n.Z)({"data-state":s?"visible":"hidden"},a,{ref:t})))}),z=(0,o.forwardRef)((e,t)=>{let{orientation:r="vertical",...l}=e,i=w(E,e.__scopeScrollArea),a=(0,o.useRef)(null),s=(0,o.useRef)(0),[c,u]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=N(c.viewport,c.content),f={...l,sizes:c,onSizesChange:u,hasThumb:!!(d>0&&d<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:e=>s.current=e};function p(e,t){return function(e,t,r,n="ltr"){let o=U(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),s=r.content-r.viewport,c=X([i,a],"ltr"===n?[0,s]:[-1*s,0]);return c(e)}(e,s.current,c,t)}return"horizontal"===r?(0,o.createElement)(P,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollLeft,t=V(e,c,i.dir);a.current.style.transform=`translate3d(${t}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=p(e,i.dir))}})):"vertical"===r?(0,o.createElement)(_,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=i.viewport.scrollTop,t=V(e,c);a.current.style.transform=`translate3d(0, ${t}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=p(e))}})):null}),P=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=w(E,e.__scopeScrollArea),[c,u]=(0,o.useState)(),d=(0,o.useRef)(null),f=(0,s.e)(t,d,a.onScrollbarXChange);return(0,o.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,o.createElement)(A,(0,n.Z)({"data-orientation":"horizontal"},i,{ref:f,sizes:r,style:{bottom:0,left:"rtl"===a.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===a.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":U(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&l({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:M(c.paddingLeft),paddingEnd:M(c.paddingRight)}})}}))}),_=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=w(E,e.__scopeScrollArea),[c,u]=(0,o.useState)(),d=(0,o.useRef)(null),f=(0,s.e)(t,d,a.onScrollbarYChange);return(0,o.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,o.createElement)(A,(0,n.Z)({"data-orientation":"vertical"},i,{ref:f,sizes:r,style:{top:0,right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":U(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&l({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:M(c.paddingTop),paddingEnd:M(c.paddingBottom)}})}}))}),[D,L]=v(E),A=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:i,hasThumb:a,onThumbChange:u,onThumbPointerUp:d,onThumbPointerDown:f,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:g,onResize:m,...b}=e,S=w(E,r),[y,T]=(0,o.useState)(null),C=(0,s.e)(t,e=>T(e)),R=(0,o.useRef)(null),z=(0,o.useRef)(""),P=S.viewport,_=i.content-i.viewport,L=(0,c.W)(g),A=(0,c.W)(h),W=k(m,10);function x(e){if(R.current){let t=e.clientX-R.current.left,r=e.clientY-R.current.top;v({x:t,y:r})}}return(0,o.useEffect)(()=>{let e=e=>{let t=e.target,r=null==y?void 0:y.contains(t);r&&L(e,_)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[P,y,_,L]),(0,o.useEffect)(A,[i,A]),F(y,W),F(S.content,W),(0,o.createElement)(D,{scope:r,scrollbar:y,hasThumb:a,onThumbChange:(0,c.W)(u),onThumbPointerUp:(0,c.W)(d),onThumbPositionChange:A,onThumbPointerDown:(0,c.W)(f)},(0,o.createElement)(l.WV.div,(0,n.Z)({},b,{ref:C,style:{position:"absolute",...b.style},onPointerDown:(0,p.M)(e.onPointerDown,e=>{if(0===e.button){let t=e.target;t.setPointerCapture(e.pointerId),R.current=y.getBoundingClientRect(),z.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),x(e)}}),onPointerMove:(0,p.M)(e.onPointerMove,x),onPointerUp:(0,p.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=z.current,S.viewport&&(S.viewport.style.scrollBehavior=""),R.current=null})})))}),W="ScrollAreaThumb",x=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=L(W,e.__scopeScrollArea);return(0,o.createElement)(i.z,{present:r||a.hasThumb},(0,o.createElement)(I,(0,n.Z)({ref:t},l)))}),I=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:i,...a}=e,c=w(W,r),u=L(W,r),{onThumbPositionChange:d}=u,f=(0,s.e)(t,e=>u.onThumbChange(e)),h=(0,o.useRef)(),v=k(()=>{h.current&&(h.current(),h.current=void 0)},100);return(0,o.useEffect)(()=>{let e=c.viewport;if(e){let t=()=>{if(v(),!h.current){let t=Y(e,d);h.current=t,d()}};return d(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[c.viewport,v,d]),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-state":u.hasThumb?"visible":"hidden"},a,{ref:f,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:(0,p.M)(e.onPointerDownCapture,e=>{let t=e.target,r=t.getBoundingClientRect(),n=e.clientX-r.left,o=e.clientY-r.top;u.onThumbPointerDown({x:n,y:o})}),onPointerUp:(0,p.M)(e.onPointerUp,u.onThumbPointerUp)}))}),Z="ScrollAreaCorner",O=(0,o.forwardRef)((e,t)=>{let r=w(Z,e.__scopeScrollArea),l=!!(r.scrollbarX&&r.scrollbarY),i="scroll"!==r.type&&l;return i?(0,o.createElement)(H,(0,n.Z)({},e,{ref:t})):null}),H=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,...i}=e,a=w(Z,r),[s,c]=(0,o.useState)(0),[u,d]=(0,o.useState)(0);return F(a.scrollbarX,()=>{var e;let t=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(t),d(t)}),F(a.scrollbarY,()=>{var e;let t=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(t),c(t)}),s&&u?(0,o.createElement)(l.WV.div,(0,n.Z)({},i,{ref:t,style:{width:s,height:u,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}})):null});function M(e){return e?parseInt(e,10):0}function N(e,t){let r=e/t;return isNaN(r)?0:r}function U(e){let t=N(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-r)*t;return Math.max(n,18)}function V(e,t,r="ltr"){let n=U(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a="ltr"===r?[0,i]:[-1*i,0],s=(0,f.u)(e,a),c=X([0,i],[0,l-n]);return c(s)}function X(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}let Y=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function k(e,t){let r=(0,c.W)(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function F(e,t){let r=(0,c.W)(t);(0,d.b)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}let $=b,j=S,q=O},74225:function(e,t,r){"use strict";r.d(t,{f:function(){return u}});var n=r(65122),o=r(3546),l=r(72205);let i="horizontal",a=["horizontal","vertical"],s=(0,o.forwardRef)((e,t)=>{let{decorative:r,orientation:a=i,...s}=e,u=c(a)?a:i;return(0,o.createElement)(l.WV.div,(0,n.Z)({"data-orientation":u},r?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},s,{ref:t}))});function c(e){return a.includes(e)}s.propTypes={orientation(e,t,r){let n=e[t],o=String(n);return n&&!c(n)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};let u=s},82030:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(94219),o=r(79204),l=(0,r(43285).Z)(function(e,t){return null==e?{}:(0,n.Z)(e,t,function(t,r){return(0,o.Z)(e,r)})})},12978:function(e,t,r){"use strict";var n=r(51722),o=r(19108);t.Z=function(e,t){return e&&e.length?(0,o.Z)(e,(0,n.Z)(t,2)):[]}},27257:function(e,t,r){"use strict";r.d(t,{Ue:function(){return f},oR:function(){return u}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=n?n:"object"!=typeof o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,l={setState:n,getState:o,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,o,l),l},o=e=>e?n(e):n;var l=r(3546),i=r(52635);let{useDebugValue:a}=l,{useSyncExternalStoreWithSelector:s}=i,c=!1;function u(e,t=e.getState,r){r&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let n=s(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return a(n),n}let d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,r=(e,r)=>u(t,e,r);return Object.assign(r,t),r},f=e=>e?d(e):d},85654:function(e,t,r){"use strict";r.d(t,{tJ:function(){return i}});let n=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>n(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>n(t)(e)}}},o=(e,t)=>(r,o,l)=>{let i,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,u=new Set,d=new Set;try{i=s.getStorage()}catch(e){}if(!i)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},o,l);let f=n(s.serialize),p=()=>{let e;let t=s.partialize({...o()}),r=f({state:t,version:s.version}).then(e=>i.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return r},h=l.setState;l.setState=(e,t)=>{h(e,t),p()};let v=e((...e)=>{r(...e),p()},o,l),g=()=>{var e;if(!i)return;c=!1,u.forEach(e=>e(o()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,o()))||void 0;return n(i.getItem.bind(i))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=o())?t:v),!0),p()}).then(()=>{null==t||t(a,void 0),c=!0,d.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return l.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(i=e.getStorage())},clearStorage:()=>{null==i||i.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>c,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},g(),a||v},l=(e,t)=>(r,o,l)=>{let i,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let o=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),l=null!=(n=r.getItem(e))?n:null;return l instanceof Promise?l.then(o):o(l)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,c=new Set,u=new Set,d=a.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},o,l);let f=()=>{let e=a.partialize({...o()});return d.setItem(a.name,{state:e,version:a.version})},p=l.setState;l.setState=(e,t)=>{p(e,t),f()};let h=e((...e)=>{r(...e),f()},o,l),v=()=>{var e,t;if(!d)return;s=!1,c.forEach(e=>{var t;return e(null!=(t=o())?t:h)});let l=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=o())?e:h))||void 0;return n(d.getItem.bind(d))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(i=a.merge(e,null!=(t=o())?t:h),!0),f()}).then(()=>{null==l||l(i,void 0),i=o(),s=!0,u.forEach(e=>e(i))}).catch(e=>{null==l||l(void 0,e)})};return l.persist={setOptions:e=>{a={...a,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>v(),hasHydrated:()=>s,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},a.skipHydration||v(),i||h},i=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),o(e,t)):l(e,t)}}]);
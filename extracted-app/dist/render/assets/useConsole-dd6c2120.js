import{ep as de,ba as ne,f as O,d as D,g as X,e as ae,b as le,j as U,m as re,b9 as fe,bb as he,dV as ge,eq as me,c as ve,c2 as pe,er as be,b8 as ye,e0 as J,a2 as Re,aq as Te,dK as H,aY as I,b1 as V,es as $e,et as xe,eu as Q,ev as je}from"./main-8b08e1d6.js";import{i as se,c as j,d as E,b as f,m as Y,w as W,z as M,h as d,p as Ce,N as Le,n as Z,S as we,X as _e,u as Se}from"./_plugin-vue_export-helper-b059e461.js";function ie(t,e){const l=se(de,null);return j(()=>t.hljs||(l==null?void 0:l.mergedHljsRef.value))}const Pe=t=>{const{textColor2:e,fontSize:l,fontWeightStrong:r,textColor3:s}=t;return{textColor:e,fontSize:l,fontWeightStrong:r,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:s}},ke={name:"Code",common:ne,self:Pe},ce=ke,ze=O([D("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[X("show-line-numbers",`
 display: flex;
 `),ae("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),X("word-wrap",[O("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),O("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),O("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:t})=>{const e=`${t.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]),Ne=Object.assign(Object.assign({},U.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),He=E({name:"Code",props:Ne,setup(t,{slots:e}){const{internalNoHighlight:l}=t,{mergedClsPrefixRef:r,inlineThemeDisabled:s}=le(),h=f(null),T=l?{value:void 0}:ie(t),m=(i,c,p)=>{const{value:b}=T;return!b||!(i&&b.getLanguage(i))?null:b.highlight(p?c.trim():c,{language:i}).value},C=j(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),v=()=>{if(e.default)return;const{value:i}=h;if(!i)return;const{language:c}=t,p=t.uri?window.decodeURIComponent(t.code):t.code;if(c){const o=m(c,p,t.trim);if(o!==null){if(t.inline)i.innerHTML=o;else{const n=i.querySelector(".__code__");n&&i.removeChild(n);const a=document.createElement("pre");a.className="__code__",a.innerHTML=o,i.appendChild(a)}return}}if(t.inline){i.textContent=p;return}const b=i.querySelector(".__code__");if(b)b.textContent=p;else{const o=document.createElement("pre");o.className="__code__",o.textContent=p,i.innerHTML="",i.appendChild(o)}};Y(v),W(M(t,"language"),v),W(M(t,"code"),v),l||W(T,v);const _=U("Code","-code",ze,ce,t,r),$=j(()=>{const{common:{cubicBezierEaseInOut:i,fontFamilyMono:c},self:{textColor:p,fontSize:b,fontWeightStrong:o,lineNumberTextColor:n,"mono-3":a,"hue-1":u,"hue-2":y,"hue-3":g,"hue-4":P,"hue-5":z,"hue-5-2":N,"hue-6":L,"hue-6-2":R}}=_.value,{internalFontSize:G}=t;return{"--n-font-size":G?`${G}px`:b,"--n-font-family":c,"--n-font-weight-strong":o,"--n-bezier":i,"--n-text-color":p,"--n-mono-3":a,"--n-hue-1":u,"--n-hue-2":y,"--n-hue-3":g,"--n-hue-4":P,"--n-hue-5":z,"--n-hue-5-2":N,"--n-hue-6":L,"--n-hue-6-2":R,"--n-line-number-text-color":n}}),x=s?re("code",j(()=>`${t.internalFontSize||"a"}`),$,t):void 0;return{mergedClsPrefix:r,codeRef:h,mergedShowLineNumbers:C,lineNumbers:j(()=>{let i=1;const c=[];let p=!1;for(const b of t.code)b===`
`?(p=!0,c.push(i++)):p=!1;return p||c.push(i++),c.join(`
`)}),cssVars:s?void 0:$,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){var t,e;const{mergedClsPrefix:l,wordWrap:r,mergedShowLineNumbers:s,onRender:h}=this;return h==null||h(),d("code",{class:[`${l}-code`,this.themeClass,r&&`${l}-code--word-wrap`,s&&`${l}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},s?d("pre",{class:`${l}-code__line-numbers`},this.lineNumbers):null,(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t))}}),Ie=t=>{const{textColor2:e,modalColor:l,borderColor:r,fontSize:s,primaryColor:h}=t;return{loaderFontSize:s,loaderTextColor:e,loaderColor:l,loaderBorder:`1px solid ${r}`,loadingColor:h}},Be=fe({name:"Log",common:ne,peers:{Scrollbar:he,Code:ce},self:Ie}),Ae=Be,Oe=E({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:ge("Log").localeRef}},render(){const{clsPrefix:t}=this;return d("div",{class:`${t}-log-loader`},d(me,{clsPrefix:t,strokeWidth:24,scale:.85}),d("span",{class:`${t}-log-loader__content`},this.locale.loading))}}),ue=ve("n-log"),Me=E({props:{line:{type:String,default:""}},setup(t){const{trimRef:e,highlightRef:l,languageRef:r,mergedHljsRef:s}=se(ue),h=f(null),T=j(()=>e.value?t.line.trim():t.line);function m(){h.value&&(h.value.innerHTML=C(r.value,T.value))}function C(v,_){const{value:$}=s;return $&&v&&$.getLanguage(v)?$.highlight(_,{language:v}).value:_}return Y(()=>{l.value&&m()}),W(M(t,"line"),()=>{l.value&&m()}),{highlight:l,selfRef:h,maybeTrimmedLines:T}},render(){const{highlight:t,maybeTrimmedLines:e}=this;return d("pre",{ref:"selfRef"},t?null:e)}}),Ee=D("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[O("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),D("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[pe(),ae("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),D("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),Fe=Object.assign(Object.assign({},U.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),qe=E({name:"Log",props:Fe,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:l}=le(t),r=f(!1),s=j(()=>t.language!==void 0),h=j(()=>`calc(${Math.round(t.rows*t.lineHeight*t.fontSize)}px)`),T=j(()=>{const{log:n}=t;return n?n.split(`
`):t.lines}),m=f(null),C=U("Log","-log",Ee,Ae,t,e);function v(n){const a=n.target,u=a.firstElementChild;if(r.value){Z(()=>{r.value=!1});return}const y=a.offsetHeight,g=a.scrollTop,P=u.offsetHeight,z=g,N=P-g-y;if(z<=t.offsetTop){const{onReachTop:L,onRequireMore:R}=t;R&&R("top"),L&&L()}if(N<=t.offsetBottom){const{onReachBottom:L,onRequireMore:R}=t;R&&R("bottom"),L&&L()}}const _=be($,300);function $(n){if(r.value){Z(()=>{r.value=!1});return}if(m.value){const{containerRef:a,contentRef:u}=m.value;if(a&&u){const y=a.offsetHeight,g=a.scrollTop,P=u.offsetHeight,z=g,N=P-g-y,L=n.deltaY;if(z===0&&L<0){const{onRequireMore:R}=t;R&&R("top")}if(N<=0&&L>0){const{onRequireMore:R}=t;R&&R("bottom")}}}}function x(n){const{value:a}=m;if(!a)return;const{slient:u,top:y,position:g}=n;u&&(r.value=!0),y!==void 0?a.scrollTo({left:0,top:y}):(g==="bottom"||g==="top")&&a.scrollTo({position:g})}function i(n=!1){J("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),x({position:"top",slient:n})}function c(n=!1){J("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),x({position:"bottom",slient:n})}Ce(ue,{languageRef:M(t,"language"),mergedHljsRef:ie(t),trimRef:M(t,"trim"),highlightRef:s});const p={scrollTo:x},b=j(()=>{const{self:{loaderFontSize:n,loaderTextColor:a,loaderColor:u,loaderBorder:y,loadingColor:g},common:{cubicBezierEaseInOut:P}}=C.value;return{"--n-bezier":P,"--n-loader-font-size":n,"--n-loader-border":y,"--n-loader-color":u,"--n-loader-text-color":a,"--n-loading-color":g}}),o=l?re("log",void 0,b,t):void 0;return Object.assign(Object.assign({},p),{mergedClsPrefix:e,scrollbarRef:m,mergedTheme:C,styleHeight:h,mergedLines:T,scrollToTop:i,scrollToBottom:c,handleWheel:_,handleScroll:v,cssVars:l?void 0:b,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender})},render(){const{mergedClsPrefix:t,mergedTheme:e,onRender:l}=this;return l==null||l(),d("div",{class:[`${t}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[d(ye,{ref:"scrollbarRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>d(He,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:e.peers.Code,themeOverrides:e.peerOverrides.Code},{default:()=>this.mergedLines.map((r,s)=>d(Me,{key:s,line:r}))})}),d(Le,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?d(Oe,{clsPrefix:t}):null})])}}),De=E({__name:"ProfileLog",props:{runId:{type:String},profileId:{type:Number}},setup(t){const e=t,{logLoading:l,defaultTaskRunParams:r,getTaskRunProfileLogs:s}=We(),h=f(null),T=f([]),m=j(()=>T.value.join(`
`)),C=()=>{l.value||r.value.offset&&s(e.runId,r.value.offset)};return Y(async()=>{T.value=await s(e.runId,e.profileId)}),(v,_)=>{const $=qe;return we(),_e($,{ref_key:"logRef",ref:h,row:"20",log:Se(m),trim:"",language:"script-log",class:"select-text",onReachTop:C},null,8,["log"])}}}),K=f([]),F=f([]),ee=f([]),B=f([]),q=f({page:1,limit:25}),w=f({page:1,limit:25,order:"asc",orderBy:"updatedAt",name:"",tag:null,status:null}),te=f({page:1,limit:25,current_offset:0,next_offset:0,total_items:0}),oe=f({page:1,limit:25,current_offset:0,next_offset:0,total_items:0}),S=f(null),k=f(!1),A=f(!1),We=()=>{const t=f("log"),{t:e}=Re(),{duration:l,formatDateTime:r}=Te(),s=async o=>{try{S.value=o,k.value=!0;const{data:{data:n}}=await je(o,q.value);K.value=n.items,te.value=n.pagination}catch{K.value=[]}finally{k.value=!1}},h=async o=>{q.value.page=o,await s(S.value)},T=async o=>{q.value.page=1,q.value.limit=o,await s(S.value)},m=f({createdAt:"descend",finishedAt:!1}),C=j(()=>[{type:"selection",width:"3%"},{title:"#",width:"5%",key:"key",render:(o,n)=>`${n+1}`},{width:"12%",title:e("Page.Profiles.Label.Name"),key:"name",render(o){const{profileName:n}=o;return d("div",[d("div",{class:"flex items-center"},[d("span",n)])])}},{width:"20%",title:e("Page.AutomationRuns.Label.ProfileStartedAt"),key:"updatedAt",sorter:!0,sortOrder:m.value.updatedAt,render(o){return o.updatedAt?r(o.updatedAt):"-"}},{width:"20%",title:e("Page.AutomationRuns.Label.ProfileFinishedAt"),key:"finishedAt",sorter:!0,sortOrder:m.value.createdAt,render(o){return o.finishedAt?r(o.finishedAt):"-"}},{width:"10%",title:e("Page.AutomationRuns.Label.ProfileDuration"),key:"duration",render(o){return o.status!==H.PENDING?l.value(o.updatedAt,o.finishedAt):"-"}},{width:"10%",title:"Tag",key:"tag",render(o){return o.tag?d(I,{},{default:()=>o.tag}):"-"}},{width:"10%",title:e("Page.AutomationRuns.Label.ProfileStatus"),key:"status",render(o){const{status:n}=o;if(n===H.SUCCESS)return d(I,{type:"success",bordered:!1},{default:()=>e("Common.Label.Success")});if(n===H.RUNNING)return d(I,{type:"warning",bordered:!1},{default:()=>e("Common.Label.Running")});if(n===H.ABORTED)return d(I,{type:"error",bordered:!1},{default:()=>e("Common.Label.Aborted")});if(n===H.FAIL)return d(I,{type:"error",bordered:!1},{default:()=>e("Common.Label.Failed")})}},{width:"6%",type:"expand",title:"Logs",renderExpand:o=>d(De,{key:o.profileId,runId:o.runId,profileId:o.profileId})}]),v=V(async o=>{try{S.value=o,k.value=!0;const{data:{data:n}}=await $e(o,w.value);F.value=n.items,oe.value=n.pagination}catch{F.value=[]}finally{k.value=!1}},200),_=V(async o=>{try{S.value=o;const{data:{data:n}}=await xe(o);ee.value=n.filter(a=>!!a.value)}catch{F.value=[]}finally{k.value=!1}},200),$=async o=>{w.value.page=o,await v(S.value)},x=async o=>{w.value.page=1,w.value.limit=o,await v(S.value)},i=async o=>{const{order:n,columnKey:a}=o;w.value.order==="desc"&&n!=="descend"?(w.value.order="asc",m.value[a]="ascend"):(w.value.order="desc",m.value[a]="descend"),w.value.orderBy=a,w.value.page=1,await v(S.value)},c=f({runId:"",offset:0,profileId:null}),p=V(async(o,n=0)=>{try{A.value=!0,c.value.profileId=null,c.value.offset=n;const{data:a}=await Q(o,c.value.profileId,c.value.offset);a.data.pagination.current_offset===0?B.value=a.data.items.map(u=>`${u.createdAt} ${u.content}`):B.value=[...a.data.items.map(u=>`${u.createdAt} ${u.content}`),...B.value],c.value.offset=a.data.pagination.next_offset}catch{B.value=[]}finally{A.value=!1}},200);return{loading:k,logLoading:A,storageData:K,profiles:F,tags:ee,scriptLogs:B,activeTab:t,defaultProfilesParams:w,storagePagination:te,profilePagination:oe,taskProfileColumns:C,defaultTaskRunParams:c,getStorageData:s,getTaskRunProfiles:v,getTaskRunTags:_,getTaskRunLogs:p,getTaskRunProfileLogs:async(o,n,a=0)=>{try{A.value=!0,c.value.offset=a;const{data:u}=await Q(o,n);c.value.offset=u.data.pagination.next_offset;const y=u.data.items.map(g=>g.content);return u.data.pagination.current_offset===0?y:[...u.data.items.map(g=>g.content),...y]}catch{return[]}finally{A.value=!1}},onStorageDataPageUpdate:h,onStorageDataPageSizeUpdate:T,onTaskRunProfilesPageUpdate:$,onTaskRunProfilesPageSizeUpdate:x,onSortChange:i}};export{qe as _,He as a,We as u};

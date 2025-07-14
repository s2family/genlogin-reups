import{d as C,b as h,c as v,w as Y,n as z,z as R,h as r,O as A,m as I,N as _}from"./_plugin-vue_export-helper-b059e461.js";import{f as s,b$ as M,d as f,c0 as W,g as d,e as F,c1 as L,w as X,ba as D,c2 as B,b as V,j as k,c3 as q,c4 as j,c5 as U,m as Z,c6 as G,c7 as H,c8 as K}from"./main-8b08e1d6.js";import{g as J}from"./Select-f7c79767.js";const O=C({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const o=h(null),i=h(e.value),l=h(e.value),t=h("up"),a=h(!1),m=v(()=>a.value?`${e.clsPrefix}-base-slot-machine-current-number--${t.value}-scroll`:null),g=v(()=>a.value?`${e.clsPrefix}-base-slot-machine-old-number--${t.value}-scroll`:null);Y(R(e,"value"),(n,u)=>{i.value=u,l.value=n,z(N)});function N(){const n=e.newOriginalNumber,u=e.oldOriginalNumber;u===void 0||n===void 0||(n>u?w("up"):u>n&&w("down"))}function w(n){t.value=n,a.value=!1,z(()=>{var u;(u=o.value)===null||u===void 0||u.offsetWidth,a.value=!0})}return()=>{const{clsPrefix:n}=e;return r("span",{ref:o,class:`${n}-base-slot-machine-number`},i.value!==null?r("span",{class:[`${n}-base-slot-machine-old-number ${n}-base-slot-machine-old-number--top`,g.value]},i.value):null,r("span",{class:[`${n}-base-slot-machine-current-number`,m.value]},r("span",{ref:"numberWrapper",class:[`${n}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${n}-base-slot-machine-current-number__inner--not-number`]},l.value)),i.value!==null?r("span",{class:[`${n}-base-slot-machine-old-number ${n}-base-slot-machine-old-number--bottom`,g.value]},i.value):null)}}}),{cubicBezierEaseOut:x}=M;function Q({duration:e=".2s"}={}){return[s("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${x},
 max-width ${e} ${x},
 transform ${e} ${x}
 `}),s("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${x},
 max-width ${e} ${x},
 transform ${e} ${x}
 `}),s("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),s("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),s("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),s("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const ee=s([s("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),s("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),s("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),s("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),f("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[f("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Q({duration:".2s"}),W({duration:".2s",delay:"0s"}),f("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[d("top",{transform:"translateY(-100%)"}),d("bottom",{transform:"translateY(100%)"}),d("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),d("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),f("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[d("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),d("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),F("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[d("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),ae=C({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){L("-base-slot-machine",ee,R(e,"clsPrefix"));const o=h(),i=h(),l=v(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const t=[];let a=e.value;for(e.max!==void 0&&(a=Math.min(e.max,a));a>=1;)t.push(a%10),a/=10,a=Math.floor(a);return t.reverse(),t});return Y(R(e,"value"),(t,a)=>{typeof t=="string"?(i.value=void 0,o.value=void 0):typeof a=="string"?(i.value=t,o.value=void 0):(i.value=t,o.value=a)}),()=>{const{value:t,clsPrefix:a}=e;return typeof t=="number"?r("span",{class:`${a}-base-slot-machine`},r(A,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>l.value.map((m,g)=>r(O,{clsPrefix:a,key:l.value.length-g-1,oldOriginalNumber:o.value,newOriginalNumber:i.value,value:m}))}),r(X,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<t?r(O,{clsPrefix:a,value:"+"}):null})):r("span",{class:`${a}-base-slot-machine`},t)}}}),te=e=>{const{errorColor:o,infoColor:i,successColor:l,warningColor:t,fontFamily:a}=e;return{color:o,colorInfo:i,colorSuccess:l,colorError:o,colorWarning:t,fontSize:"12px",fontFamily:a}},ne={name:"Badge",common:D,self:te},oe=ne,ie=s([s("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),f("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[d("as-is",[f("badge-sup",{position:"static",transform:"translateX(0)"},[B({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),d("dot",[f("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[s("::before","border-radius: 4px;")])]),f("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[B({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),f("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),s("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),re=Object.assign(Object.assign({},k.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),ce=C({name:"Badge",props:re,setup(e,{slots:o}){const{mergedClsPrefixRef:i,inlineThemeDisabled:l,mergedRtlRef:t}=V(e),a=k("Badge","-badge",ie,oe,e,i),m=h(!1),g=()=>{m.value=!0},N=()=>{m.value=!1},w=v(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!q(o.value)));I(()=>{w.value&&(m.value=!0)});const n=j("Badge",t,i),u=v(()=>{const{type:b,color:c}=e,{common:{cubicBezierEaseInOut:p,cubicBezierEaseOut:S},self:{[U("color",b)]:$,fontFamily:P,fontSize:T}}=a.value;return{"--n-font-size":T,"--n-font-family":P,"--n-color":c||$,"--n-ripple-color":c||$,"--n-bezier":p,"--n-ripple-bezier":S}}),y=l?Z("badge",v(()=>{let b="";const{type:c,color:p}=e;return c&&(b+=c[0]),p&&(b+=G(p)),b}),u,e):void 0,E=v(()=>{const{offset:b}=e;if(!b)return;const[c,p]=b,S=typeof c=="number"?`${c}px`:c,$=typeof p=="number"?`${p}px`:p;return{transform:`translate(calc(${n!=null&&n.value?"50%":"-50%"} + ${S}), ${$})`}});return{rtlEnabled:n,mergedClsPrefix:i,appeared:m,showBadge:w,handleAfterEnter:g,handleAfterLeave:N,cssVars:l?void 0:u,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,offsetStyle:E}},render(){var e;const{mergedClsPrefix:o,onRender:i,themeClass:l,$slots:t}=this;i==null||i();const a=(e=t.default)===null||e===void 0?void 0:e.call(t);return r("div",{class:[`${o}-badge`,this.rtlEnabled&&`${o}-badge--rtl`,l,{[`${o}-badge--dot`]:this.dot,[`${o}-badge--as-is`]:!a}],style:this.cssVars},a,r(_,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?r("sup",{class:`${o}-badge-sup`,title:J(this.value),style:this.offsetStyle},H(t.value,()=>[this.dot?null:r(ae,{clsPrefix:o,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?r(K,{clsPrefix:o}):null):null}))}});export{ce as _};

import{u as Ho,t as Bo,a as eo,c as it,b as Ee,i as Vo,d as U,e as x,f as L,g as I,k as Fe,h as xt,j as $e,l as Fo,m as Ct,n as jo,V as Dt,r as Ht,o as Uo,p as Be,q as Ve,s as Ae,N as Ko,v as _t,_ as to,w as qo,x as Go,y as zt,z as et,A as Xo,B as Wo,C as Yo,D as ge,E as Zo,F as Qo,G as St,H as we,I as ue,J as Jo,K as en,L as tn,M as Re,O as on,P as nn,Q as rn,R as an,S as ln,T as sn,U as tt,W as Bt,X as cn,Y as dn,Z as un,$ as vn,a0 as mn,a1 as pn,a2 as je,a3 as Vt,a4 as wt,a5 as fn,a6 as oo,a7 as lt,a8 as no,a9 as ro,aa as ao,ab as io,ac as hn,ad as lo,ae as le,af as gn,ag as xn,ah as ke,ai as _n,aj as wn,ak as bn,al as yn,am as Cn,an as zn,ao as Sn,ap as Ft,aq as Pn,ar as In,as as Rn,at as kn,au as An,av as $n,aw as Nn,ax as pt,ay as En,az as Tn,aA as Mn,aB as Ln,aC as On}from"./main-8b08e1d6.js";import{d as Y,h as w,R as so,p as Ne,i as de,b as q,a6 as Dn,c as z,m as me,I as co,z as bt,M as at,a7 as Hn,w as _e,J as Bn,Q as Vn,N as Fn,a8 as jn,n as yt,F as Ue,S as V,U as Q,V as R,a4 as Un,X as re,Y as A,D as _,u as n,a9 as jt,aa as Kn,q as ve,E as se,ab as uo,ac as vo,a1 as Te,r as mo,$ as te,a2 as ne,ad as qn,ae as Ut}from"./_plugin-vue_export-helper-b059e461.js";import{_ as Gn,a as Xn}from"./LayoutSider-73b42742.js";import{c as Wn,f as Yn}from"./firefox-icon-2ab5a045.js";import{_ as Zn}from"./SelectGroups.vue_vue_type_script_setup_true_lang-32234823.js";import{M as po}from"./Modal-0f4a5102.js";import{_ as fo}from"./FormItem-52ed65a1.js";import{_ as Qn}from"./InputNumber-c85d5887.js";import{_ as Jn}from"./Checkbox-ce86da58.js";import{_ as ho}from"./Input-96fa4693.js";import{_ as go}from"./Form-e484375f.js";import{_ as er}from"./Select-f7c79767.js";import{_ as tr}from"./Progress-0b0a0198.js";import{_ as or,a as nr}from"./Updater.vue_vue_type_script_setup_true_lang-91d65d78.js";import{c as rr}from"./_createCompounder-4af3bdce.js";import{l as ar,p as ir,a as lr,_ as Kt}from"./Layout-a5efc6cd.js";import{L as sr,a as cr}from"./Line2-15247ba5.js";import{_ as dr}from"./Badge-93754219.js";import"./lodash-6114c6d4.js";import"./axios-1e30d922.js";import"./xlsx-f5126985.js";import"./Divider-65f3d898.js";import"./Remove-be3cc84a.js";import"./Suffix-fc59bb7a.js";function ur(e){return Ho(Bo(e).toLowerCase())}var vr=rr(function(e,t,o){return t=t.toLowerCase(),e+(o?ur(t):t)});const qt=vr,mr=Y({name:"ChevronDownFilled",render(){return w("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function pr(e){const{length:t}=e;return t>1&&(e.push(Gt(e[0],0,"append")),e.unshift(Gt(e[t-1],t-1,"prepend"))),e}function Gt(e,t,o){return so(e,{key:`carousel-item-duplicate-${t}-${o}`})}function Xt(e,t,o){return o?e===0?t-3:e===t-1?0:e-1:e}function ft(e,t){return t?e+1:e}function fr(e,t,o){return e<0?null:e===0?o?t-1:null:e-1}function hr(e,t,o){return e>t-1?null:e===t-1?o?0:null:e+1}function gr(e,t){return t&&e>3?e-2:e}function Wt(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Yt(e,t){let{offsetWidth:o,offsetHeight:i}=e;if(t){const s=getComputedStyle(e);o=o-parseFloat(s.getPropertyValue("padding-left"))-parseFloat(s.getPropertyValue("padding-right")),i=i-parseFloat(s.getPropertyValue("padding-top"))-parseFloat(s.getPropertyValue("padding-bottom"))}return{width:o,height:i}}function ot(e,t,o){return e<t?t:e>o?o:e}function xr(e){if(e===void 0)return 0;if(typeof e=="number")return e;const t=/^((\d+)?\.?\d+?)(ms|s)?$/,o=e.match(t);if(o){const[,i,,s="ms"]=o;return Number(i)*(s==="ms"?1:1e3)}return 0}const xo=it("n-carousel-methods"),_r=e=>{Ne(xo,e)},Pt=(e="unknown",t="component")=>{const o=de(xo);return o||eo(e,`\`${t}\` must be placed inside \`n-carousel\`.`),o},wr={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},br=Y({name:"CarouselDots",props:wr,setup(e){const{mergedClsPrefixRef:t}=Ee(e),o=q([]),i=Pt();function s(p,y){switch(p.key){case"Enter":case" ":p.preventDefault(),i.to(y);return}e.keyboard&&v(p)}function l(p){e.trigger==="hover"&&i.to(p)}function c(p){e.trigger==="click"&&i.to(p)}function v(p){var y;if(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)return;const C=(y=document.activeElement)===null||y===void 0?void 0:y.nodeName.toLowerCase();if(C==="input"||C==="textarea")return;const{code:b}=p,M=b==="PageUp"||b==="ArrowUp",F=b==="PageDown"||b==="ArrowDown",B=b==="PageUp"||b==="ArrowRight",j=b==="PageDown"||b==="ArrowLeft",O=i.isVertical(),P=O?M:B,D=O?F:j;!P&&!D||(p.preventDefault(),P&&!i.isNextDisabled()?(i.next(),h(i.currentIndexRef.value)):D&&!i.isPrevDisabled()&&(i.prev(),h(i.currentIndexRef.value)))}function h(p){var y;(y=o.value[p])===null||y===void 0||y.focus()}return Dn(()=>o.value.length=0),{mergedClsPrefix:t,dotEls:o,handleKeydown:s,handleMouseenter:l,handleClick:c}},render(){const{mergedClsPrefix:e,dotEls:t}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Vo(this.total,o=>{const i=o===this.currentIndex;return w("div",{"aria-selected":i,ref:s=>t.push(s),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,i&&`${e}-carousel__dot--active`],key:o,onClick:()=>{this.handleClick(o)},onMouseenter:()=>{this.handleMouseenter(o)},onKeydown:s=>{this.handleKeydown(s,o)}})}))}}),yr=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Cr=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),zr=Y({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:t}=Ee(e),{isVertical:o,isPrevDisabled:i,isNextDisabled:s,prev:l,next:c}=Pt();return{mergedClsPrefix:t,isVertical:o,isPrevDisabled:i,isNextDisabled:s,prev:l,next:c}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},yr),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Cr))}}),rt="CarouselItem",Sr=e=>{var t;return((t=e.type)===null||t===void 0?void 0:t.name)===rt},Pr=Y({name:rt,setup(e){const{mergedClsPrefixRef:t}=Ee(e),o=Pt(qt(rt),`n-${qt(rt)}`),i=q(),s=z(()=>{const{value:y}=i;return y?o.getSlideIndex(y):-1}),l=z(()=>o.isPrev(s.value)),c=z(()=>o.isNext(s.value)),v=z(()=>o.isActive(s.value)),h=z(()=>o.getSlideStyle(s.value));me(()=>{o.addSlide(i.value)}),co(()=>{o.removeSlide(i.value)});function p(y){const{value:C}=s;C!==void 0&&(o==null||o.onCarouselItemClick(C,y))}return{mergedClsPrefix:t,selfElRef:i,isPrev:l,isNext:c,isActive:v,index:s,style:h,handleClick:p}},render(){var e;const{$slots:t,mergedClsPrefix:o,isPrev:i,isNext:s,isActive:l,index:c,style:v}=this,h=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:l,[`${o}-carousel__slide--prev`]:i,[`${o}-carousel__slide--next`]:s}];return w("div",{ref:"selfElRef",class:h,role:"option",tabindex:"-1","data-index":c,"aria-hidden":!l,style:v,onClickCapture:this.handleClick},(e=t.default)===null||e===void 0?void 0:e.call(t,{isPrev:i,isNext:s,isActive:l,index:c}))}}),Ir=U("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[x("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[x("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[L("> img",`
 display: block;
 `)])]),x("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[I("dot",[x("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[L("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),I("active",`
 background-color: var(--n-dot-color-active);
 `)])]),I("line",[x("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[L("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),I("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),x("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[L("svg",`
 height: 1em;
 width: 1em;
 `),L("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),I("vertical",`
 touch-action: pan-x;
 `,[x("slides",`
 flex-direction: column;
 `),I("fade",[x("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),I("card",[x("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[I("current",`
 transform: translateY(-50%) translateZ(0);
 `),I("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),I("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),I("usercontrol",[x("slides",[L(">",[L("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),I("left",[x("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[I("line",[x("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[I("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),x("dot",`
 margin: 4px 0;
 `)]),x("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),I("vertical",[x("arrow",`
 transform: rotate(90deg);
 `)]),I("show-arrow",[I("bottom",[x("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),I("top",[x("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),I("left",[x("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),I("right",[x("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),I("left",[x("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[L("> *:first-child",`
 margin-bottom: 12px;
 `)])]),I("right",[x("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[I("line",[x("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[I("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),x("dot",`
 margin: 4px 0;
 `),x("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[L("> *:first-child",`
 margin-bottom: 12px;
 `)])]),I("top",[x("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[I("line",[x("dot",`
 margin: 0 4px;
 `)])]),x("dot",`
 margin: 0 4px;
 `),x("arrow-group",`
 top: 12px;
 right: 12px;
 `,[L("> *:first-child",`
 margin-right: 12px;
 `)])]),I("bottom",[x("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[I("line",[x("dot",`
 margin: 0 4px;
 `)])]),x("dot",`
 margin: 0 4px;
 `),x("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[L("> *:first-child",`
 margin-right: 12px;
 `)])]),I("fade",[x("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[I("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),I("card",[x("slides",`
 perspective: 1000px;
 `),x("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[I("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),I("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),I("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Rr=["transitionDuration","transitionTimingFunction"],kr=Object.assign(Object.assign({},$e.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let ht=!1;const Ar=Y({name:"Carousel",props:kr,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ee(e),i=q(null),s=q(null),l=q([]),c={value:[]},v=z(()=>e.direction==="vertical"),h=z(()=>v.value?"height":"width"),p=z(()=>v.value?"bottom":"right"),y=z(()=>e.effect==="slide"),C=z(()=>e.loop&&e.slidesPerView===1&&y.value),b=z(()=>e.effect==="custom"),M=z(()=>!y.value||e.centeredSlides?1:e.slidesPerView),F=z(()=>b.value?1:e.slidesPerView),B=z(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),j=q({width:0,height:0}),O=z(()=>{const{value:a}=l;if(!a.length)return[];const{value:m}=B;if(m)return a.map(W=>Yt(W));const{value:S}=F,{value:T}=j,{value:H}=h;let N=T[H];if(S!=="auto"){const{spaceBetween:W}=e,ae=N-(S-1)*W,Je=1/Math.max(1,S);N=ae*Je}const G=Object.assign(Object.assign({},T),{[H]:N});return a.map(()=>G)}),P=z(()=>{const{value:a}=O;if(!a.length)return[];const{centeredSlides:m,spaceBetween:S}=e,{value:T}=h,{[T]:H}=j.value;let N=0;return a.map(({[T]:G})=>{let W=N;return m&&(W+=(G-H)/2),N+=G+S,W})}),D=q(!1),J=z(()=>{const{transitionStyle:a}=e;return a?Fe(a,Rr):{}}),K=z(()=>b.value?0:xr(J.value.transitionDuration)),X=z(()=>{const{value:a}=l;if(!a.length)return[];const m=!(B.value||F.value===1),S=G=>{if(m){const{value:W}=h;return{[W]:`${O.value[G][W]}px`}}};if(b.value)return a.map((G,W)=>S(W));const{effect:T,spaceBetween:H}=e,{value:N}=p;return a.reduce((G,W,ae)=>{const Je=Object.assign(Object.assign({},S(ae)),{[`margin-${N}`]:`${H}px`});return G.push(Je),D.value&&(T==="fade"||T==="card")&&Object.assign(Je,J.value),G},[])}),$=z(()=>{const{value:a}=M,{length:m}=l.value;if(a!=="auto")return Math.max(m-a,0)+1;{const{value:S}=O,{length:T}=S;if(!T)return m;const{value:H}=P,{value:N}=h,G=j.value[N];let W=S[S.length-1][N],ae=T;for(;ae>1&&W<G;)ae--,W+=H[ae]-H[ae-1];return ot(ae+1,1,T)}}),f=z(()=>gr($.value,C.value)),g=ft(e.defaultIndex,C.value),r=q(Xt(g,$.value,C.value)),d=xt(bt(e,"currentIndex"),r),k=z(()=>ft(d.value,C.value));function E(a){var m,S;a=ot(a,0,$.value-1);const T=Xt(a,$.value,C.value),{value:H}=d;T!==d.value&&(r.value=T,(m=e["onUpdate:currentIndex"])===null||m===void 0||m.call(e,T,H),(S=e.onUpdateCurrentIndex)===null||S===void 0||S.call(e,T,H))}function Z(a=k.value){return fr(a,$.value,e.loop)}function ee(a=k.value){return hr(a,$.value,e.loop)}function u(a){const m=ze(a);return m!==null&&Z()===m}function be(a){const m=ze(a);return m!==null&&ee()===m}function oe(a){return k.value===ze(a)}function pe(a){return d.value===a}function Le(){return Z()===null}function Oe(){return ee()===null}function ye(a){const m=ot(ft(a,C.value),0,$.value);(a!==d.value||m!==k.value)&&E(m)}function Ce(){const a=Z();a!==null&&E(a)}function fe(){const a=ee();a!==null&&E(a)}function qe(){(!ie||!C.value)&&Ce()}function Ge(){(!ie||!C.value)&&fe()}let ie=!1,he=0;const st=q({});function Xe(a,m=0){st.value=Object.assign({},J.value,{transform:v.value?`translateY(${-a}px)`:`translateX(${-a}px)`,transitionDuration:`${m}ms`})}function De(a=0){y.value?ct(k.value,a):he!==0&&(!ie&&a>0&&(ie=!0),Xe(he=0,a))}function ct(a,m){const S=Et(a);S!==he&&m>0&&(ie=!0),he=Et(k.value),Xe(S,m)}function Et(a){let m;return a>=$.value-1?m=Tt():m=P.value[a]||0,m}function Tt(){if(M.value==="auto"){const{value:a}=h,{[a]:m}=j.value,{value:S}=P,T=S[S.length-1];let H;if(T===void 0)H=m;else{const{value:N}=O;H=T+N[N.length-1][a]}return H-m}else{const{value:a}=P;return a[$.value-1]||0}}const He={currentIndexRef:d,to:ye,prev:qe,next:Ge,isVertical:()=>v.value,isHorizontal:()=>!v.value,isPrev:u,isNext:be,isActive:oe,isPrevDisabled:Le,isNextDisabled:Oe,getSlideIndex:ze,getSlideStyle:Po,addSlide:zo,removeSlide:So,onCarouselItemClick:Io};_r(He);function zo(a){a&&l.value.push(a)}function So(a){if(!a)return;const m=ze(a);m!==-1&&l.value.splice(m,1)}function ze(a){return typeof a=="number"?a:a?l.value.indexOf(a):-1}function Po(a){const m=ze(a);if(m!==-1){const S=[X.value[m]],T=He.isPrev(m),H=He.isNext(m);return T&&S.push(e.prevSlideStyle||""),H&&S.push(e.nextSlideStyle||""),jn(S)}}function Io(a,m){let S=!ie&&!Ze&&!mt;e.effect==="card"&&S&&!oe(a)&&(ye(a),S=!1),S||(m.preventDefault(),m.stopPropagation())}let We=null;function Ye(){We&&(clearInterval(We),We=null)}function Se(){Ye(),!e.autoplay||f.value<2||(We=window.setInterval(fe,e.interval))}let dt=0,ut=0,ce=0,vt=0,Ze=!1,mt=!1;function Mt(a){var m;if(ht||!(!((m=s.value)===null||m===void 0)&&m.contains(Uo(a))))return;ht=!0,Ze=!0,mt=!1,vt=Date.now(),Ye(),a.type!=="touchstart"&&!a.target.isContentEditable&&a.preventDefault();const S=Wt(a)?a.touches[0]:a;v.value?ut=S.clientY:dt=S.clientX,e.touchable&&(Be("touchmove",document,Qe,{passive:!0}),Be("touchend",document,Pe),Be("touchcancel",document,Pe)),e.draggable&&(Be("mousemove",document,Qe),Be("mouseup",document,Pe))}function Qe(a){const{value:m}=v,{value:S}=h,T=Wt(a)?a.touches[0]:a,H=m?T.clientY-ut:T.clientX-dt,N=j.value[S];ce=ot(H,-N,N),a.cancelable&&a.preventDefault(),y.value&&Xe(he-ce,0)}function Pe(){const{value:a}=k;let m=a;if(!ie&&ce!==0&&y.value){const S=he-ce,T=[...P.value.slice(0,$.value-1),Tt()];let H=null;for(let N=0;N<T.length;N++){const G=Math.abs(T[N]-S);if(H!==null&&H<G)break;H=G,m=N}}if(m===a){const S=Date.now()-vt,{value:T}=h,H=j.value[T];ce>H/2||ce/S>.4?m=Z(a):(ce<-H/2||ce/S<-.4)&&(m=ee(a))}m!==null&&m!==a?(mt=!0,E(m),yt(()=>{(!C.value||r.value!==d.value)&&De(K.value)})):De(K.value),Lt(),Se()}function Lt(){Ze&&(ht=!1),Ze=!1,dt=0,ut=0,ce=0,vt=0,Ve("touchmove",document,Qe),Ve("touchend",document,Pe),Ve("touchcancel",document,Pe),Ve("mousemove",document,Qe),Ve("mouseup",document,Pe)}function Ro(){if(y.value&&ie){const{value:a}=k;ct(a,0)}else Se();y.value&&(st.value.transitionDuration="0ms"),ie=!1}function ko(a){if(a.preventDefault(),ie)return;let{deltaX:m,deltaY:S}=a;a.shiftKey&&!m&&(m=S);const T=-1,H=1,N=(m||S)>0?H:T;let G=0,W=0;v.value?W=N:G=N;const ae=10;(W*S>=ae||G*m>=ae)&&(N===H&&!Oe()?fe():N===T&&!Le()&&Ce())}function Ao(){j.value=Yt(i.value,!0),Se()}function $o(){var a,m;B.value&&((m=(a=O.effect).scheduler)===null||m===void 0||m.call(a),O.effect.run())}function No(){e.autoplay&&Ye()}function Eo(){e.autoplay&&Se()}me(()=>{at(Se),requestAnimationFrame(()=>D.value=!0)}),co(()=>{Lt(),Ye()}),Hn(()=>{const{value:a}=l,{value:m}=c,S=new Map,T=N=>S.has(N)?S.get(N):-1;let H=!1;for(let N=0;N<a.length;N++){const G=m.findIndex(W=>W.el===a[N]);G!==N&&(H=!0),S.set(a[N],G)}H&&a.sort((N,G)=>T(N)-T(G))}),_e(k,(a,m)=>{if(a!==m)if(Se(),y.value){if(C.value&&f.value>2){const{value:S}=$;a===S-2&&m===1?a=0:a===1&&m===S-2&&(a=S-1)}ct(a,K.value)}else De()},{immediate:!0}),_e([C,M],()=>void yt(()=>{E(k.value)})),_e(P,()=>{y.value&&De()},{deep:!0}),_e(y,a=>{a?De():(ie=!1,Xe(he=0))});const To=z(()=>({onTouchstartPassive:e.touchable?Mt:void 0,onMousedown:e.draggable?Mt:void 0,onWheel:e.mousewheel?ko:void 0})),Mo=z(()=>Object.assign(Object.assign({},Fe(He,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:f.value,currentIndex:d.value})),Lo=z(()=>({total:f.value,currentIndex:d.value,to:He.to})),Oo={getCurrentIndex:()=>d.value,to:ye,prev:Ce,next:fe},Do=$e("Carousel","-carousel",Ir,Fo,e,t),Ot=z(()=>{const{common:{cubicBezierEaseInOut:a},self:{dotSize:m,dotColor:S,dotColorActive:T,dotColorFocus:H,dotLineWidth:N,dotLineWidthActive:G,arrowColor:W}}=Do.value;return{"--n-bezier":a,"--n-dot-color":S,"--n-dot-color-focus":H,"--n-dot-color-active":T,"--n-dot-size":m,"--n-dot-line-width":N,"--n-dot-line-width-active":G,"--n-arrow-color":W}}),Ie=o?Ct("carousel",void 0,Ot,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:t,selfElRef:i,slidesElRef:s,slideVNodes:c,duplicatedable:C,userWantsControl:b,autoSlideSize:B,displayIndex:d,realIndex:k,slideStyles:X,translateStyle:st,slidesControlListeners:To,handleTransitionEnd:Ro,handleResize:Ao,handleSlideResize:$o,handleMouseenter:No,handleMouseleave:Eo,isActive:pe,arrowSlotProps:Mo,dotSlotProps:Lo},Oo),{cssVars:o?void 0:Ot,themeClass:Ie==null?void 0:Ie.themeClass,onRender:Ie==null?void 0:Ie.onRender})},render(){var e;const{mergedClsPrefix:t,showArrow:o,userWantsControl:i,slideStyles:s,dotType:l,dotPlacement:c,slidesControlListeners:v,transitionProps:h={},arrowSlotProps:p,dotSlotProps:y,$slots:{default:C,dots:b,arrow:M}}=this,F=C&&jo(C())||[];let B=$r(F);return B.length||(B=F.map(j=>w(Pr,null,{default:()=>so(j)}))),this.duplicatedable&&(B=pr(B)),this.slideVNodes.value=B,this.autoSlideSize&&(B=B.map(j=>w(Dt,{onResize:this.handleSlideResize},{default:()=>j}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${t}-carousel`,this.direction==="vertical"&&`${t}-carousel--vertical`,this.showArrow&&`${t}-carousel--show-arrow`,`${t}-carousel--${c}`,`${t}-carousel--${this.direction}`,`${t}-carousel--${this.effect}`,i&&`${t}-carousel--usercontrol`],style:this.cssVars},v,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Dt,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${t}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},i?B.map((j,O)=>w("div",{style:s[O],key:O},Bn(w(Fn,Object.assign({},h),{default:()=>j}),[[Vn,this.isActive(O)]]))):B)}),this.showDots&&y.total>1&&Ht(b,y,()=>[w(br,{key:l+c,total:y.total,currentIndex:y.currentIndex,dotType:l,trigger:this.trigger,keyboard:this.keyboard})]),o&&Ht(M,p,()=>[w(zr,null)]))}});function $r(e){return e.reduce((t,o)=>(Sr(o)&&t.push(o),t),[])}const Nr=U("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[I("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),I("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Er={position:ir,inverted:Boolean,bordered:{type:Boolean,default:!1}},Tr=Y({name:"LayoutHeader",props:Object.assign(Object.assign({},$e.props),Er),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ee(e),i=$e("Layout","-layout-header",Nr,ar,e,t),s=z(()=>{const{common:{cubicBezierEaseInOut:c},self:v}=i.value,h={"--n-bezier":c};return e.inverted?(h["--n-color"]=v.headerColorInverted,h["--n-text-color"]=v.textColorInverted,h["--n-border-color"]=v.headerBorderColorInverted):(h["--n-color"]=v.headerColor,h["--n-text-color"]=v.textColor,h["--n-border-color"]=v.headerBorderColor),h}),l=o?Ct("layout-header",z(()=>e.inverted?"a":"b"),s,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),w("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Ke=it("n-menu"),It=it("n-submenu"),Rt=it("n-menu-item-group"),nt=8;function kt(e){const t=de(Ke),{props:o,mergedCollapsedRef:i}=t,s=de(It,null),l=de(Rt,null),c=z(()=>o.mode==="horizontal"),v=z(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),h=z(()=>{var b;return Math.max((b=o.collapsedIconSize)!==null&&b!==void 0?b:o.iconSize,o.iconSize)}),p=z(()=>{var b;return!c.value&&e.root&&i.value&&(b=o.collapsedIconSize)!==null&&b!==void 0?b:o.iconSize}),y=z(()=>{if(c.value)return;const{collapsedWidth:b,indent:M,rootIndent:F}=o,{root:B,isGroup:j}=e,O=F===void 0?M:F;if(B)return i.value?b/2-h.value/2:O;if(l)return M/2+l.paddingLeftRef.value;if(s)return(j?M/2:M)+s.paddingLeftRef.value}),C=z(()=>{const{collapsedWidth:b,indent:M,rootIndent:F}=o,{value:B}=h,{root:j}=e;return c.value||!j||!i.value?nt:(F===void 0?M:F)+B+nt-(b+B)/2});return{dropdownPlacement:v,activeIconSize:p,maxIconSize:h,paddingLeft:y,iconMarginRight:C,NMenu:t,NSubmenu:s}}const At={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},_o=Object.assign(Object.assign({},At),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Mr=Y({name:"MenuOptionGroup",props:_o,setup(e){Ne(It,null);const t=kt(e);Ne(Rt,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:i}=de(Ke);return function(){const{value:s}=o,l=t.paddingLeft.value,{nodeProps:c}=i,v=c==null?void 0:c(e.tmNode.rawNode);return w("div",{class:`${s}-menu-item-group`,role:"group"},w("div",Object.assign({},v,{class:[`${s}-menu-item-group-title`,v==null?void 0:v.class],style:[(v==null?void 0:v.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),Ae(e.title),e.extra?w(Ue,null," ",Ae(e.extra)):null),w("div",null,e.tmNodes.map(h=>$t(h,i))))}}}),wo=Y({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=de(Ke);return{menuProps:t,style:z(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:z(()=>{const{maxIconSize:o,activeIconSize:i,iconMarginRight:s}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${i}px`,marginRight:`${s}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:i,renderExtra:s,expandIcon:l}}=this,c=o?o(t.rawNode):Ae(this.icon);return w("div",{onClick:v=>{var h;(h=this.onClick)===null||h===void 0||h.call(this,v)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&w("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),w("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(t.rawNode):Ae(this.title),this.extra||s?w("span",{class:`${e}-menu-item-content-header__extra`}," ",s?s(t.rawNode):Ae(this.extra)):null),this.showArrow?w(Ko,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):w(mr,null)}):null)}}),bo=Object.assign(Object.assign({},At),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Lr=Y({name:"Submenu",props:bo,setup(e){const t=kt(e),{NMenu:o,NSubmenu:i}=t,{props:s,mergedCollapsedRef:l,mergedThemeRef:c}=o,v=z(()=>{const{disabled:b}=e;return i!=null&&i.mergedDisabledRef.value||s.disabled?!0:b}),h=q(!1);Ne(It,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:v}),Ne(Rt,null);function p(){const{onClick:b}=e;b&&b()}function y(){v.value||(l.value||o.toggleExpand(e.internalKey),p())}function C(b){h.value=b}return{menuProps:s,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:h,paddingLeft:t.paddingLeft,mergedDisabled:v,mergedValue:o.mergedValueRef,childActive:_t(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:z(()=>s.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:z(()=>!v.value&&(s.mode==="horizontal"||l.value)),handlePopoverShowChange:C,handleClick:y}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:i}}=this,s=()=>{const{isHorizontal:c,paddingLeft:v,collapsed:h,mergedDisabled:p,maxIconSize:y,activeIconSize:C,title:b,childActive:M,icon:F,handleClick:B,menuProps:{nodeProps:j},dropdownShow:O,iconMarginRight:P,tmNode:D,mergedClsPrefix:J}=this,K=j==null?void 0:j(D.rawNode);return w("div",Object.assign({},K,{class:[`${J}-menu-item`,K==null?void 0:K.class],role:"menuitem"}),w(wo,{tmNode:D,paddingLeft:v,collapsed:h,disabled:p,iconMarginRight:P,maxIconSize:y,activeIconSize:C,title:b,extra:this.extra,showArrow:!c,childActive:M,clsPrefix:J,icon:F,hover:O,onClick:B}))},l=()=>w(qo,null,{default:()=>{const{tmNodes:c,collapsed:v}=this;return v?null:w("div",{class:`${t}-submenu-children`,role:"menu"},c.map(h=>$t(h,this.menuProps)))}});return this.root?w(to,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:i}),{default:()=>w("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},s(),this.isHorizontal?null:l())}):w("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},s(),l())}}),yo=Object.assign(Object.assign({},At),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Or=Y({name:"MenuOption",props:yo,setup(e){const t=kt(e),{NSubmenu:o,NMenu:i}=t,{props:s,mergedClsPrefixRef:l,mergedCollapsedRef:c}=i,v=o?o.mergedDisabledRef:{value:!1},h=z(()=>v.value||e.disabled);function p(C){const{onClick:b}=e;b&&b(C)}function y(C){h.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),p(C))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:s,dropdownEnabled:_t(()=>e.root&&c.value&&s.mode!=="horizontal"&&!h.value),selected:_t(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:h,handleClick:y}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:i,nodeProps:s}}=this,l=s==null?void 0:s(o.rawNode);return w("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),w(Go,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(o.rawNode):Ae(this.title),trigger:()=>w(wo,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Dr=Y({name:"MenuDivider",setup(){const e=de(Ke),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:w("div",{class:`${t.value}-menu-divider`})}}),Hr=zt(_o),Br=zt(yo),Vr=zt(bo);function Co(e){return e.type==="divider"||e.type==="render"}function Fr(e){return e.type==="divider"}function $t(e,t){const{rawNode:o}=e,{show:i}=o;if(i===!1)return null;if(Co(o))return Fr(o)?w(Dr,Object.assign({key:e.key},o.props)):null;const{labelField:s}=t,{key:l,level:c,isGroup:v}=e,h=Object.assign(Object.assign({},o),{title:o.title||o[s],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:c,root:c===0,isGroup:v});return e.children?e.isGroup?w(Mr,Fe(h,Hr,{tmNode:e,tmNodes:e.children,key:l})):w(Lr,Fe(h,Vr,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):w(Or,Fe(h,Br,{key:l,tmNode:e}))}const Zt=[L("&::before","background-color: var(--n-item-color-hover);"),x("arrow",`
 color: var(--n-arrow-color-hover);
 `),x("icon",`
 color: var(--n-item-icon-color-hover);
 `),U("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[L("a",`
 color: var(--n-item-text-color-hover);
 `),x("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Qt=[x("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),U("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[L("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),x("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],jr=L([U("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[I("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[U("submenu","margin: 0;"),U("menu-item","margin: 0;"),U("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[L("&::before","display: none;"),I("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),U("menu-item-content",[I("selected",[x("icon","color: var(--n-item-icon-color-active-horizontal);"),U("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[L("a","color: var(--n-item-text-color-active-horizontal);"),x("extra","color: var(--n-item-text-color-active-horizontal);")])]),I("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[U("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[L("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),x("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),x("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),et("disabled",[et("selected, child-active",[L("&:focus-within",Qt)]),I("selected",[xe(null,[x("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),U("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[L("a","color: var(--n-item-text-color-active-hover-horizontal);"),x("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),I("child-active",[xe(null,[x("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),U("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[L("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),x("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),xe("border-bottom: 2px solid var(--n-border-color-horizontal);",Qt)]),U("menu-item-content-header",[L("a","color: var(--n-item-text-color-horizontal);")])])]),I("collapsed",[U("menu-item-content",[I("selected",[L("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),U("menu-item-content-header","opacity: 0;"),x("arrow","opacity: 0;"),x("icon","color: var(--n-item-icon-color-collapsed);")])]),U("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),U("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[L("> *","z-index: 1;"),L("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),I("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),I("collapsed",[x("arrow","transform: rotate(0);")]),I("selected",[L("&::before","background-color: var(--n-item-color-active);"),x("arrow","color: var(--n-arrow-color-active);"),x("icon","color: var(--n-item-icon-color-active);"),U("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[L("a","color: var(--n-item-text-color-active);"),x("extra","color: var(--n-item-text-color-active);")])]),I("child-active",[U("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[L("a",`
 color: var(--n-item-text-color-child-active);
 `),x("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),x("arrow",`
 color: var(--n-arrow-color-child-active);
 `),x("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),et("disabled",[et("selected, child-active",[L("&:focus-within",Zt)]),I("selected",[xe(null,[x("arrow","color: var(--n-arrow-color-active-hover);"),x("icon","color: var(--n-item-icon-color-active-hover);"),U("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[L("a","color: var(--n-item-text-color-active-hover);"),x("extra","color: var(--n-item-text-color-active-hover);")])])]),I("child-active",[xe(null,[x("arrow","color: var(--n-arrow-color-child-active-hover);"),x("icon","color: var(--n-item-icon-color-child-active-hover);"),U("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[L("a","color: var(--n-item-text-color-child-active-hover);"),x("extra","color: var(--n-item-text-color-child-active-hover);")])])]),I("selected",[xe(null,[L("&::before","background-color: var(--n-item-color-active-hover);")])]),xe(null,Zt)]),x("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),x("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),U("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[L("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[L("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),U("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[U("menu-item-content",`
 height: var(--n-item-height);
 `),U("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Xo({duration:".2s"})])]),U("menu-item-group",[U("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),U("menu-tooltip",[L("a",`
 color: inherit;
 text-decoration: none;
 `)]),U("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function xe(e,t){return[I("hover",e,t),L("&:hover",e,t)]}const Ur=Object.assign(Object.assign({},$e.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Kr=Y({name:"Menu",props:Ur,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Ee(e),i=$e("Menu","-menu",jr,Zo,e,t),s=de(lr,null),l=z(()=>{var f;const{collapsed:g}=e;if(g!==void 0)return g;if(s){const{collapseModeRef:r,collapsedRef:d}=s;if(r.value==="width")return(f=d.value)!==null&&f!==void 0?f:!1}return!1}),c=z(()=>{const{keyField:f,childrenField:g,disabledField:r}=e;return Wo(e.items||e.options,{getIgnored(d){return Co(d)},getChildren(d){return d[g]},getDisabled(d){return d[r]},getKey(d){var k;return(k=d[f])!==null&&k!==void 0?k:d.name}})}),v=z(()=>new Set(c.value.treeNodes.map(f=>f.key))),{watchProps:h}=e,p=q(null);h!=null&&h.includes("defaultValue")?at(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;const y=bt(e,"value"),C=xt(y,p),b=q([]),M=()=>{b.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(C.value,{includeSelf:!1}).keyPath};h!=null&&h.includes("defaultExpandedKeys")?at(M):M();const F=Yo(e,["expandedNames","expandedKeys"]),B=xt(F,b),j=z(()=>c.value.treeNodes),O=z(()=>c.value.getPath(C.value).keyPath);Ne(Ke,{props:e,mergedCollapsedRef:l,mergedThemeRef:i,mergedValueRef:C,mergedExpandedKeysRef:B,activePathRef:O,mergedClsPrefixRef:t,isHorizontalRef:z(()=>e.mode==="horizontal"),invertedRef:bt(e,"inverted"),doSelect:P,toggleExpand:J});function P(f,g){const{"onUpdate:value":r,onUpdateValue:d,onSelect:k}=e;d&&ge(d,f,g),r&&ge(r,f,g),k&&ge(k,f,g),p.value=f}function D(f){const{"onUpdate:expandedKeys":g,onUpdateExpandedKeys:r,onExpandedNamesChange:d,onOpenNamesChange:k}=e;g&&ge(g,f),r&&ge(r,f),d&&ge(d,f),k&&ge(k,f),b.value=f}function J(f){const g=Array.from(B.value),r=g.findIndex(d=>d===f);if(~r)g.splice(r,1);else{if(e.accordion&&v.value.has(f)){const d=g.findIndex(k=>v.value.has(k));d>-1&&g.splice(d,1)}g.push(f)}D(g)}const K=f=>{const g=c.value.getPath(f??C.value,{includeSelf:!1}).keyPath;if(!g.length)return;const r=Array.from(B.value),d=new Set([...r,...g]);e.accordion&&v.value.forEach(k=>{d.has(k)&&!g.includes(k)&&d.delete(k)}),D(Array.from(d))},X=z(()=>{const{inverted:f}=e,{common:{cubicBezierEaseInOut:g},self:r}=i.value,{borderRadius:d,borderColorHorizontal:k,fontSize:E,itemHeight:Z,dividerColor:ee}=r,u={"--n-divider-color":ee,"--n-bezier":g,"--n-font-size":E,"--n-border-color-horizontal":k,"--n-border-radius":d,"--n-item-height":Z};return f?(u["--n-group-text-color"]=r.groupTextColorInverted,u["--n-color"]=r.colorInverted,u["--n-item-text-color"]=r.itemTextColorInverted,u["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,u["--n-item-text-color-active"]=r.itemTextColorActiveInverted,u["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,u["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,u["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,u["--n-item-icon-color"]=r.itemIconColorInverted,u["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,u["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,u["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,u["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,u["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,u["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,u["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,u["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,u["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,u["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,u["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,u["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,u["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,u["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,u["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,u["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,u["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,u["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,u["--n-arrow-color"]=r.arrowColorInverted,u["--n-arrow-color-hover"]=r.arrowColorHoverInverted,u["--n-arrow-color-active"]=r.arrowColorActiveInverted,u["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,u["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,u["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,u["--n-item-color-hover"]=r.itemColorHoverInverted,u["--n-item-color-active"]=r.itemColorActiveInverted,u["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,u["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(u["--n-group-text-color"]=r.groupTextColor,u["--n-color"]=r.color,u["--n-item-text-color"]=r.itemTextColor,u["--n-item-text-color-hover"]=r.itemTextColorHover,u["--n-item-text-color-active"]=r.itemTextColorActive,u["--n-item-text-color-child-active"]=r.itemTextColorChildActive,u["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,u["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,u["--n-item-icon-color"]=r.itemIconColor,u["--n-item-icon-color-hover"]=r.itemIconColorHover,u["--n-item-icon-color-active"]=r.itemIconColorActive,u["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,u["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,u["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,u["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,u["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,u["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,u["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,u["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,u["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,u["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,u["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,u["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,u["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,u["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,u["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,u["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,u["--n-arrow-color"]=r.arrowColor,u["--n-arrow-color-hover"]=r.arrowColorHover,u["--n-arrow-color-active"]=r.arrowColorActive,u["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,u["--n-arrow-color-child-active"]=r.arrowColorChildActive,u["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,u["--n-item-color-hover"]=r.itemColorHover,u["--n-item-color-active"]=r.itemColorActive,u["--n-item-color-active-hover"]=r.itemColorActiveHover,u["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),u}),$=o?Ct("menu",z(()=>e.inverted?"a":"b"),X,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:F,uncontrolledExpanededKeys:b,mergedExpandedKeys:B,uncontrolledValue:p,mergedValue:C,activePath:O,tmNodes:j,mergedTheme:i,mergedCollapsed:l,cssVars:o?void 0:X,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender,showOption:K}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:i}=this;return i==null||i(),w("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(s=>$t(s,this.$props)))}});function qr(){const e=de(Qo,null);return e===null&&eo("use-notification","No outer `n-notification-provider` found."),e}const Gr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Xr=R("path",{d:"M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Wr=R("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 336l80-80l-80-80"},null,-1),Yr=R("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 256h256"},null,-1),Zr=[Xr,Wr,Yr],Qr=Y({name:"LogOutOutline",render:function(t,o){return V(),Q("svg",Gr,Zr)}}),Jr=Y({__name:"LayoutContent",setup(e){const{route:t}=St(),o=z(()=>t.name==="main.scriptEditor"?"":"padding: 12px 24px");return(i,s)=>{const l=Un("router-view"),c=Gn;return V(),re(c,{"content-style":n(o),class:"mb-20"},{default:A(()=>[_(l,null,{default:A(({Component:v})=>[n(t).meta.disableKeepAlive?(V(),re(jt(v),{key:0})):(V(),re(Kn,{key:1},[(V(),re(jt(v)))],1024))]),_:1})]),_:1},8,["content-style"])}}}),Nt=e=>(uo("data-v-fdc2e258"),e=e(),vo(),e),ea={class:"flex items-center gap-8px"},ta=["src"],oa=Nt(()=>R("div",null,"Gen Browser",-1)),na={class:"flex items-center gap-8px"},ra=["src"],aa=Nt(()=>R("div",null,"Nightly",-1)),ia={class:"flex gap-16px"},la={class:"flex gap-16px"},sa={class:"flex gap-16px"},ca={class:"w-full flex items-center justify-between"},da=Nt(()=>R("div",null,"Screen",-1)),ua={class:"flex gap-16px"},va={class:"flex gap-16px"},ma={class:"flex gap-16px"},pa=Y({__name:"QuickAdd",props:{modelShow:{type:Boolean,default:!1}},emits:["update:modelShow","success"],setup(e,{emit:t}){const o=we(),{user:i,planExpired:s}=ue(o),l=Jo(i.value.plan.id),{quickProfileConfig:c,randomFingerprint:v}=en(),h=tn("active-profile-table-tab","cloud"),p=q(1),y=q(null),C=q(!0),b=q(!1),M=q(Re.CHROME),F=()=>{p.value=1,c.value.version=Bt,c.value.platform=null,t("update:modelShow",!1)},B=async()=>{const O=new Set;try{if(s.value){window.$message.error("Your plan expired.");return}isNaN(p.value)&&(p.value=1);let P=!1;h.value==="cloud"&&(P=!0);const D=Array.from({length:p.value},(X,$)=>$);b.value=!0;const J=await Promise.all(D.map(async X=>({profile_data:await v(M.value,!0),share_status:P}))),K=cn(J,l);for(const X of K){const{data:{data:{profile_ids:$}}}=await dn(X.chunk);$.forEach(f=>O.add(f))}y.value&&O.size>0&&await un(y.value,{add_profile_ids:[...O]}),window.$message.success("Profiles created!"),t("success",!0),F()}catch{}finally{b.value=!1,O.clear()}},j=O=>{O===Re.CHROME?c.value.version=Bt:Re.FIREFOX&&(c.value.version=vn)};return(O,P)=>{const D=mn,J=pn,K=fo,X=er,$=Qn,f=Jn,g=ho,r=go;return V(),re(po,{"is-show":e.modelShow,header:"Quickly add profiles",icon:"quick","submit-label":"Add","action-submit":B,loading:n(b),onClose:F},{body:A(()=>[_(r,{class:"form"},{default:A(()=>[_(K,{label:"Browser"},{default:A(()=>[_(J,{value:n(M),"onUpdate:value":P[0]||(P[0]=d=>ve(M)?M.value=d:null),size:"medium",type:"segment",onUpdateValue:j},{default:A(()=>[_(D,{name:n(Re).CHROME},{tab:A(()=>[R("div",ea,[R("img",{class:"w-16px h-16px",src:n(Wn)},null,8,ta),oa])]),_:1},8,["name"]),_(D,{name:n(Re).FIREFOX},{tab:A(()=>[R("div",na,[R("img",{class:"w-16px h-16px",src:n(Yn)},null,8,ra),aa])]),_:1},8,["name"])]),_:1},8,["value"])]),_:1}),R("div",ia,[_(K,{class:"w-full",label:"Version"},{default:A(()=>[_(X,{value:n(c).version,"onUpdate:value":P[1]||(P[1]=d=>n(c).version=d),options:n(M)===n(Re).CHROME?n(on):n(nn),placeholder:""},null,8,["value","options"])]),_:1}),_(K,{class:"w-full",label:"Platform"},{default:A(()=>[_(X,{value:n(c).platform,"onUpdate:value":P[2]||(P[2]=d=>n(c).platform=d),options:n(rn),clearable:"",filterable:"",placeholder:"Default","render-label":n(an)},null,8,["value","options","render-label"])]),_:1})]),R("div",la,[_(K,{class:"w-full",label:"Profile number (max - 50)"},{default:A(()=>[_($,{value:n(p),"onUpdate:value":P[3]||(P[3]=d=>ve(p)?p.value=d:null),max:50},null,8,["value"])]),_:1}),_(K,{class:"w-full",label:"Group"},{default:A(()=>[_(Zn,{"model-value":n(y),"onUpdate:modelValue":[P[4]||(P[4]=d=>ve(y)?y.value=d:null),P[5]||(P[5]=d=>y.value=d)],placeholder:"Select Group"},null,8,["model-value"])]),_:1})]),R("div",sa,[_(K,{class:"w-full"},{label:A(()=>[R("div",ca,[da,_(f,{checked:n(C),"onUpdate:checked":[P[6]||(P[6]=d=>ve(C)?C.value=d:null),P[7]||(P[7]=d=>n(c).screen="")]},{default:A(()=>[se(" Random ")]),_:1},8,["checked"])])]),default:A(()=>[_(X,{value:n(c).screen,"onUpdate:value":P[8]||(P[8]=d=>n(c).screen=d),disabled:n(C),placeholder:"Random",size:"large",options:n(ln).screenResolution},null,8,["value","disabled","options"])]),_:1}),_(K,{class:"w-full",label:"Canvas"},{default:A(()=>[_(X,{value:n(c).hardware.canvas,"onUpdate:value":P[9]||(P[9]=d=>n(c).hardware.canvas=d),size:"large",options:n(sn)},null,8,["value","options"])]),_:1})]),R("div",ua,[_(K,{class:"w-full",label:"Client Rects"},{default:A(()=>[_(X,{value:n(c).hardware.clientRects,"onUpdate:value":P[10]||(P[10]=d=>n(c).hardware.clientRects=d),size:"large",options:n(tt)},null,8,["value","options"])]),_:1}),_(K,{class:"w-full",label:"Audio Context"},{default:A(()=>[_(X,{value:n(c).hardware.audioContext,"onUpdate:value":P[11]||(P[11]=d=>n(c).hardware.audioContext=d),size:"large",options:n(tt)},null,8,["value","options"])]),_:1})]),R("div",va,[_(K,{class:"w-full",label:"WebGL"},{default:A(()=>[_(X,{value:n(c).hardware.webGL,"onUpdate:value":P[12]||(P[12]=d=>n(c).hardware.webGL=d),size:"large",options:n(tt)},null,8,["value","options"])]),_:1}),_(K,{class:"w-full",label:"Font"},{default:A(()=>[_(X,{value:n(c).hardware.font,"onUpdate:value":P[13]||(P[13]=d=>n(c).hardware.font=d),size:"large",options:n(tt)},null,8,["value","options"])]),_:1})]),R("div",ma,[_(K,{class:"w-full",label:"Start Url"},{default:A(()=>[_(g,{value:n(c).other.startUrl,"onUpdate:value":P[14]||(P[14]=d=>n(c).other.startUrl=d),clearable:"",placeholder:"https://genlogin.com"},null,8,["value"])]),_:1})])]),_:1})]),_:1},8,["is-show","loading"])}}}),fa=Te(pa,[["__scopeId","data-v-fdc2e258"]]),ha=""+new URL("download-34a9d087.png",import.meta.url).href,Jt={chrome:{version:"",percent:0},firefox:{version:"",percent:0},proxyTool:{version:"",percent:0},imageFinder:{version:"",percent:0}},ga=()=>{const{t:e}=je(),t=q(!1),o=mo(Vt(Jt)),i=z(()=>Object.keys(o).filter(s=>o[s].version).every(s=>o[s].percent>=100));return _e(i,s=>{s&&setTimeout(()=>{t.value=!1,window.$message.success(e("Modal.DownloadResources.Msg.ResourceDownloaded")),Object.assign(o,Vt(Jt))},5e3)}),{showModal:t,state:o,downloaded:i}},xa={class:"text-center mt-24px"},_a={class:"m-auto w-200px h-162px"},wa=["src"],ba={class:"font-semibold text-xl mb-16px mt-24px"},ya={class:"flex mt-32px flex-col gap-16px"},Ca={key:0},za={key:1},Sa={key:2},Pa={key:3},Ia=Y({__name:"DownloadModal",setup(e){const{isLoggedIn:t}=ue(we()),{t:o}=je(),i=oo(),{showModal:s,state:l}=ga();return i.on(wt.DOWNLOAD_INFO,({name:c,version:v})=>{l[c].version=v,s.value=!0}),i.on(wt.UPDATE_DOWNLOAD_PROGRESS,({name:c,percent:v})=>{l[c].percent=parseInt(v,10)}),me(async()=>{t.value&&await fn()}),(c,v)=>{const h=lt,p=tr,y=no,C=ro;return V(),re(C,{show:n(s),"onUpdate:show":v[0]||(v[0]=b=>ve(s)?s.value=b:null),class:"modal-upload w-520px"},{default:A(()=>[_(y,{title:"Modal",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:A(()=>[R("div",xa,[R("div",_a,[R("img",{class:"w-full",src:n(ha)},null,8,wa)]),R("div",ba,te(n(o)("Modal.DownloadResources.Label.Title")),1),_(h,{depth:"3"},{default:A(()=>[se(te(n(o)("Modal.DownloadResources.Label.SubTitle")),1)]),_:1})]),R("div",ya,[n(l).chrome.version?(V(),Q("div",Ca,[se(" Titan Browser "+te(n(l).chrome.version)+" ",1),_(p,{type:"line",processing:"",percentage:n(l).chrome.percent},null,8,["percentage"])])):ne("",!0),n(l).firefox.version?(V(),Q("div",za,[se(" Nightly "+te(n(l).firefox.version)+" ",1),_(p,{type:"line",processing:"",percentage:n(l).firefox.percent},null,8,["percentage"])])):ne("",!0),n(l).proxyTool.version?(V(),Q("div",Sa,[se(" Proxy tool "),_(p,{type:"line",percentage:n(l).proxyTool.percent},null,8,["percentage"])])):ne("",!0),n(l).imageFinder.version?(V(),Q("div",Pa,[se(" Image finder "),_(p,{type:"line",percentage:n(l).imageFinder.percent},null,8,["percentage"])])):ne("",!0)])]),_:1})]),_:1},8,["show"])}}}),Ra=Te(Ia,[["__scopeId","data-v-26afe53c"]]),ka=["src","onClick"],Aa=Y({__name:"HeaderBanner",setup(e){const t=ao(),{otherBanner:o}=ue(t);return(i,s)=>{const l=Ar;return n(o).length?(V(),re(l,{key:0,class:"w-xl banner-carousel",autoplay:"","show-dots":!1,interval:8e3},{default:A(()=>[(V(!0),Q(Ue,null,qn(n(o),(c,v)=>(V(),Q("img",{key:v,class:"carousel-img rounded-lg",src:c.image_url,onClick:h=>n(io)(c.target_url)},null,8,ka))),128))]),_:1})):ne("",!0)}}}),$a=Te(Aa,[["__scopeId","data-v-e149fcb7"]]),Na={class:"flex items-center justify-between w-full"},Ea={class:"font-bold text-2xl"},Ta={class:"flex items-center gap-32px"},Ma={class:"flex items-center gap-8px cursor-pointer"},La=Y({__name:"LayoutHeader",setup(e){const{t}=je(),{settings:o}=hn(),i=lo(),s=we(),{route:l,refreshRoute:c}=St(),{userInfo:v}=ue(s),{title:h,setTitle:p}=_n(),y=q(!1),C=z(()=>{var $,f;return![le.AIRDROP,le.FREE].includes((f=($=v.value)==null?void 0:$.plan)==null?void 0:f.id)}),b=q(!1),M=$=>()=>w(wn,null,{default:()=>w($)}),F=z(()=>[{label:t("Common.Button.ChangePassword"),key:"change",icon:M(bn)},{label:t("Common.Button.Logout"),key:"logout",icon:M(Qr)}]),B=async()=>{await s.getAllProfiles(),c()},j=async $=>{switch($){case"logout":await s.logout(),i.setTheme(null);break;case"change":y.value=!0;break}},O=q(null),P=gn(),D=mo({oldPassword:"",newPassword:"",rePassword:"",submitting:!1}),J={invalid:t("Common.Msg.InvalidData"),incorrect:t("Common.Msg.IncorrectData"),notmatch:t("Common.Msg.PasswordNotMatch")},K={oldPassword:{required:!0,trigger:"blur",validator:($,f)=>new Promise((g,r)=>{f?g():r(Error(J.invalid))})},newPassword:{required:!0,trigger:"blur",validator:($,f)=>new Promise((g,r)=>{f?g():r(Error(J.invalid))})},rePassword:{required:!0,trigger:"input",validator:($,f)=>new Promise((g,r)=>{f?f!==D.newPassword?r(Error(J.notmatch)):g():r(Error(J.invalid))})}},X=async()=>{var f;const $={email:v.value.email,old_password:D.oldPassword,new_password:D.newPassword};(f=O.value)==null||f.validate(async g=>{if(g)P.error(J.invalid);else try{D.submitting=!0;const r=await yn($);if(r){const{success:d,data:k}=r.data;d?(window.$message.success(t("Page.ForgotPassword.Msg.PasswordChanged")),y.value=!1,Object.assign(D,{oldPassword:"",newPassword:"",rePassword:""})):window.$message.error(k)}}catch{}finally{D.submitting=!1}})};return _e(l,()=>{l.meta.name&&p(l.meta.name)}),me(async()=>{await xn(o.value.backendServer)}),($,f)=>{const g=lt,r=Cn,d=zn,k=to,E=Tr,Z=ho,ee=fo,u=go,be=Sn;return V(),Q(Ue,null,[_(E,null,{default:A(()=>[R("div",Na,[R("div",Ea,[_(g,null,{default:A(()=>[se(te(n(h)),1)]),_:1})]),_(or),R("div",Ta,[_($a),n(C)?(V(),re(r,{key:0,ghost:"",type:"primary",class:"!m-0",onClick:f[0]||(f[0]=oe=>b.value=!0)},{icon:A(()=>[_(ke,{type:"quick"})]),default:A(()=>[se(" "+te(n(t)("Common.Button.QuickAdd")),1)]),_:1})):ne("",!0),_(nr),_(k,{class:"cursor-pointer w-250px",trigger:"click",size:"large",options:n(F),onSelect:j},{default:A(()=>{var oe,pe;return[R("div",Ma,[_(d,{size:"small",src:`https://api.dicebear.com/7.x/avataaars/svg?seed=${(oe=n(v))==null?void 0:oe.id}`},null,8,["src"]),se(" "+te((pe=n(v))==null?void 0:pe.email)+" ",1),_(ke,{type:"arrowDropdown",size:"20"})])]}),_:1},8,["options"])])]),_(fa,{"model-show":n(b),"onUpdate:modelShow":f[1]||(f[1]=oe=>ve(b)?b.value=oe:null),onSuccess:B},null,8,["model-show"]),_(n(Ra))]),_:1}),_(po,{"is-show":n(y),header:n(t)("Common.Button.ChangePassword"),icon:"password","submit-label":n(t)("Common.Button.Submit"),"action-submit":X,onClose:f[5]||(f[5]=oe=>y.value=!1)},{body:A(()=>[_(be,{show:n(D).submitting},{default:A(()=>[se(te(n(t)("Page.Header.Label.ChangePasswordSubTitle"))+" ",1),_(u,{ref_key:"formRef",ref:O,class:"mt-24px",model:n(D),rules:K},{default:A(()=>[_(ee,{size:"large",label:"Old password",path:"oldPassword"},{default:A(()=>[_(Z,{value:n(D).oldPassword,"onUpdate:value":f[2]||(f[2]=oe=>n(D).oldPassword=oe),size:"large",type:"password","show-password-on":"mousedown",placeholder:n(t)("Page.Header.Label.OldPassword")},null,8,["value","placeholder"])]),_:1}),_(ee,{size:"large",label:n(t)("Page.ForgotPassword.Label.NewPassword"),path:"newPassword"},{default:A(()=>[_(Z,{value:n(D).newPassword,"onUpdate:value":f[3]||(f[3]=oe=>n(D).newPassword=oe),size:"large",type:"password","show-password-on":"mousedown",placeholder:n(t)("Page.ForgotPassword.Label.NewPassword")},null,8,["value","placeholder"])]),_:1},8,["label"]),_(ee,{size:"large",label:n(t)("Page.Header.Label.ConfirmPassword"),path:"rePassword"},{default:A(()=>[_(Z,{value:n(D).rePassword,"onUpdate:value":f[4]||(f[4]=oe=>n(D).rePassword=oe),size:"large",type:"password","show-password-on":"mousedown",placeholder:n(t)("Page.Header.Label.ConfirmPassword"),disabled:!n(D).newPassword},null,8,["value","placeholder","disabled"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["show"])]),_:1},8,["is-show","header","submit-label"])],64)}}}),Oa=Te(La,[["__scopeId","data-v-6ac6257b"]]),Da=""+new URL("nameDark-8ad026a9.svg",import.meta.url).href,Ha=""+new URL("nameLight-0a2f3068.svg",import.meta.url).href,gt=""+new URL("airdrop-3c96f9ba.svg",import.meta.url).href,Ba=Y({__name:"AppExpireSoon",setup(e){const t=qr(),o=q(null),{getListAppExpireSoon:i}=Ft(),{listAppExpireSoon:s}=ue(Ft()),{user:l}=ue(we()),{dayjs:c}=Pn(),{t:v}=je(),{goAppDetails:h}=In(),p=c(),y=()=>{o.value=t.create({title:v("Page.AutomationApps.Label.ExpireSoon"),type:"warning",content:()=>w("div",{style:{"max-height":"640px",overflow:"scroll"},class:"flex flex-col gap-2"},s.value.map((C,b)=>{const M=c(C.expiredAt).diff(p,"day");return w("div",{class:"flex flex-col"},[w(lt,{class:"cursor-pointer",type:"primary",strong:!0,onClick:()=>h(C.id)},{default:()=>`${b+1}. ${C.name}`}),w("span",M<0?v("Common.Label.Expired"):v("Page.AutomationApps.Label.ExpiresIn",{day:M}))])}))})};return _e(s,C=>{C.length&&y()}),me(async()=>{await i(l.value.id)}),(C,b)=>(V(),Q("div"))}}),Me=e=>(uo("data-v-377dd907"),e=e(),vo(),e),Va=["src"],Fa=["src"],ja=["src"],Ua=["src"],Ka=["src"],qa=["src"],Ga=["src"],Xa={class:"flex items-center"},Wa={class:"icon-header mr-8px"},Ya={class:"font-semibold plan-title"},Za={class:"plan-desc flex items-center justify-between mt-12px"},Qa={key:0},Ja={key:1},ei={key:5,class:"plan-desc flex text-sm items-center justify-between mt-8px"},ti={key:6,class:"plan-desc flex text-sm items-center justify-between mt-8px"},oi={class:"btn-view cursor-pointer flex items-center gap-8px mt-22px p-6px justify-center"},ni=Me(()=>R("div",{class:"circle1"},null,-1)),ri=Me(()=>R("div",{class:"circle2"},null,-1)),ai=Me(()=>R("div",{class:"circle3"},null,-1)),ii=Me(()=>R("div",{class:"circle4"},null,-1)),li=Me(()=>R("div",{class:"circle5"},null,-1)),si=Me(()=>R("div",{class:"circle6"},null,-1)),ci=Y({__name:"LayoutSidebar",setup(e){const{t}=je(),o=Rn(),{route:i}=St(),s=lo(),l=q(kn),{subAccounts:c}=An(),{getAllProfiles:v,getProxyExpireSoon:h}=we(),{user:p,accessToken:y,disableSubAccountFeature:C,totalProfiles:b,proxyExpireSoon:M}=ue(we()),F=q(!1),B=g=>{const r=new Date,d=new Date(g);return r>d?"Expired":En(g).fromNow()},j=async()=>{const g=window.$message.create("",{type:"loading"});await Ln(),g.destroy()};function O(g){var d,k;C.value&&(g=g.filter(E=>E.name!=="main.teamMembers")),((k=(d=p.value)==null?void 0:d.plan)==null?void 0:k.id)===le.AIRDROP&&(g=g.filter(E=>!["main.createProfile","main.profiles","main.proxy","main.myApp","main.store","main.schedule","main.synchronizer","affiliate","main.extensions"].includes(E.name)));const r=E=>{let Z;const ee=E.i18n?t(E.i18n):E.label;if(E.functional){if(E.name==="settings")Z=w("div",{onClick:o.openModal},ee);else if(E.name==="help")Z=w("div",{onClick:()=>window.open("https://login-gen.gitbook.io/genlogin-help-center-3.0/")},ee);else if(E.name==="accountManager")Z=w("div",{onClick:()=>j()},ee);else if(E.name==="affiliate"){const u=new URL(Tn);u.searchParams.set("origin","app"),u.searchParams.set("token",y.value),Z=w("div",{onClick:()=>window.open(u)},ee)}}else if(E.name&&!E.functional&&(Z=w(pt,{to:E},{default:()=>ee}),E.name==="main.proxy")){const u=w(Mn,{trigger:"hover"},{trigger:()=>w(dr,{value:M.value.count,type:"warning",class:"self-center"}),default:()=>t("Page.Proxy.Label.ProxyCountExpireSoon",{day:M.value.day,count:M.value.count})});Z=w("div",{class:"flex gap-2"},{default:()=>[u,w(pt,{to:E},{default:()=>ee})]})}return()=>Z};return g.map(E=>({...E,key:E.name,label:r(E),icon:E.icon!=null?()=>w(ke,{type:E.icon}):void 0,children:E.children&&O(E.children),onClick:E.label==="Settings"?o.openModal:()=>{}}))}const P=q(""),D=q([]),J=z(()=>l.value?O(l.value):[]);function K(g){return i.name===g.name&&(g.params==null||JSON.stringify(i.params)===JSON.stringify(g.params))}function X(g){let r=!1;for(const d of g)d.children!=null&&X(d.children)&&D.value.push(d.name),K(d)&&(P.value=d.name,r=!0);return r}const $=z(()=>{if(p){const g=$n.find(r=>{var d,k;return r.id===((k=(d=p.value)==null?void 0:d.plan)==null?void 0:k.id)});return(g==null?void 0:g.value)||""}return""}),f=z(()=>{var g,r;return[le.AIRDROP,le.AIRDROP_DEVICE].includes((r=(g=p.value)==null?void 0:g.plan)==null?void 0:r.id)});return at(()=>{l.value&&X(l.value),i.name==="main.scriptEditor"?F.value=!0:F.value=!1}),me(async()=>{var g,r;await Promise.all([((r=(g=p.value)==null?void 0:g.plan)==null?void 0:r.id)!==le.AIRDROP&&v(),h()])}),(g,r)=>{const d=no;return V(),Q(Ue,null,[_(n(Xn),{collapsed:n(F),"onUpdate:collapsed":r[0]||(r[0]=k=>ve(F)?F.value=k:null),width:220,"native-scrollbar":!1,"collapsed-width":48,"collapse-mode":"width","show-trigger":"arrow-circle",bordered:"",class:"relative sidebar flex flex-col justify-between h-screen"},{default:A(()=>{var k;return[R("div",null,[_(n(lt),{class:"flex justify-center items-center mt-16px mb-24px gap-6px"},{default:A(()=>[R("img",{class:"logo mb-4px",src:n(Nn),alt:""},null,8,Va),n(F)?ne("",!0):(V(),Q("img",{key:0,src:n(s).isDarkMode?n(Ha):n(Da),class:"w-110px"},null,8,Fa))]),_:1}),_(n(Kr),{class:Ut(["mb-10px",n(F)?"":"px-12px"]),value:((k=n(i).meta)==null?void 0:k.alias)||n(i).name,"default-expanded-keys":n(D),options:n(J),"root-indent":18},null,8,["class","value","default-expanded-keys","options"])]),n(F)?ne("",!0):(V(),re(d,{key:0,class:Ut(["plan",n($)])},{default:A(()=>{var E,Z,ee,u,be,oe,pe,Le,Oe,ye,Ce,fe,qe,Ge;return[n($)==="company"?(V(),Q("img",{key:0,class:"company-child z-1",alt:"",src:n(sr)},null,8,ja)):ne("",!0),n($)==="company"?(V(),Q("img",{key:1,class:"company-item z-1",alt:"",src:n(cr)},null,8,Ua)):ne("",!0),n(f)?(V(),Q("img",{key:2,class:"airdrop-item z-1",alt:"",src:n(gt)},null,8,Ka)):ne("",!0),n(f)?(V(),Q("img",{key:3,class:"airdrop-item-1 z-1",alt:"",src:n(gt)},null,8,qa)):ne("",!0),n(f)?(V(),Q("img",{key:4,class:"airdrop-item-2 z-1",alt:"",src:n(gt)},null,8,Ga)):ne("",!0),R("div",Xa,[R("div",Wa,[n(f)?(V(),re(ke,{key:0,type:"moneyAttach",size:"24px",class:"icon-upgrade",color:"black"})):(V(),re(ke,{key:1,type:"upgrade",class:"icon-upgrade",color:"white"}))]),R("div",Ya,te(n(p).plan.name),1)]),R("div",Za,[R("div",null,te(n(t)("Page.Sidebar.Label.ExpiredLater")),1),(Z=(E=n(p))==null?void 0:E.plan)!=null&&Z.plan_expired_at?(V(),Q("div",Qa,te(B((u=(ee=n(p))==null?void 0:ee.plan)==null?void 0:u.plan_expired_at)),1)):(V(),Q("div",Ja,te(n(t)("Page.Sidebar.Label.Unlimited")),1))]),((oe=(be=n(p))==null?void 0:be.plan)==null?void 0:oe.id)!==n(le).AIRDROP?(V(),Q("div",ei,[R("div",null,te(n(t)("Page.Sidebar.Label.BrowserProfiles")),1),R("div",null,te(n(b))+"/"+te(n(p).plan.profile_limit),1)])):ne("",!0),((Le=(pe=n(p))==null?void 0:pe.plan)==null?void 0:Le.id)===n(le).TEAM||((ye=(Oe=n(p))==null?void 0:Oe.plan)==null?void 0:ye.id)===n(le).COMPANY||((fe=(Ce=n(p))==null?void 0:Ce.plan)==null?void 0:fe.id)===n(le).AIRDROP?(V(),Q("div",ti,[R("div",null,te(n(t)("Page.Sidebar.Label.TeamMembers")),1),R("div",null,te(n(c).length||0)+"/"+te(n(p).plan.sub_account_limit),1)])):ne("",!0),((Ge=(qe=n(p))==null?void 0:qe.plan)==null?void 0:Ge.id)!==n(le).AIRDROP?(V(),re(n(pt),{key:7,class:"relative z-1",to:{name:"main.plan"}},{default:A(()=>[R("div",oi,[_(ke,{type:"up",class:""}),R("div",null,te(n(t)("Page.Sidebar.Label.UpgradeNow")),1)])]),_:1},8,["to"])):ne("",!0),ni,ri,ai,ii,li,si]}),_:1},8,["class"]))]}),_:1},8,["collapsed"]),_(Ba)],64)}}}),di=Te(ci,[["__scopeId","data-v-377dd907"]]),ui=["src"],vi=Y({__name:"Banner",setup(e){const t=ao(),{popupBanner:o}=ue(t),i=q(!1);return me(async()=>{await Promise.all([t.getBanners(),t.getNotis()]),o.value&&(i.value=!0)}),(s,l)=>{const c=ro;return V(),re(c,{show:n(i),"onUpdate:show":l[1]||(l[1]=v=>ve(i)?i.value=v:null),role:"dialog",style:{height:"75%",width:"auto",position:"fixed",right:"0",left:"0"}},{default:A(()=>[R("img",{class:"carousel-img cursor-pointer",src:n(o).image_url,onClick:l[0]||(l[0]=()=>n(io)(n(o).target_url))},null,8,ui)]),_:1},8,["show"])}}});const mi=Te(vi,[["__scopeId","data-v-0c8197eb"]]),Di=Y({__name:"LayoutMain",setup(e){const t=oo();return ue(we()),t.on(wt.EMIT_NOTI,async o=>{window.$message.create(o.msg,{type:o.type})}),me(async()=>{yt(async()=>{await On()})}),(o,i)=>(V(),Q(Ue,null,[_(n(Kt),{position:"absolute","has-sider":""},{default:A(()=>[_(n(di)),_(n(Kt),null,{default:A(()=>[_(n(Oa)),_(n(Jr))]),_:1})]),_:1}),_(mi)],64))}});export{Di as default};

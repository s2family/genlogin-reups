import{c as M,dA as O,h as H,v as $,b as j,D as _,d as D,g as h,e as i,f as b,z as K,j as B,ff as N,c5 as I,c4 as G,m as L,cy as W}from"./main-8b08e1d6.js";import{b as p,i as Y,z as q,d as J,c as P,h as v}from"./_plugin-vue_export-helper-b059e461.js";const Q={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},X=M("n-radio-group");function Z(o){const e=O(o,{mergedSize(a){const{size:r}=o;if(r!==void 0)return r;if(n){const{mergedSizeRef:{value:c}}=n;if(c!==void 0)return c}return a?a.mergedSize.value:"medium"},mergedDisabled(a){return!!(o.disabled||n!=null&&n.disabledRef.value||a!=null&&a.disabled.value)}}),{mergedSizeRef:l,mergedDisabledRef:d}=e,s=p(null),x=p(null),n=Y(X,null),u=p(o.defaultChecked),t=q(o,"checked"),g=H(t,u),m=$(()=>n?n.valueRef.value===o.value:g.value),R=$(()=>{const{name:a}=o;if(a!==void 0)return a;if(n)return n.nameRef.value}),f=p(!1);function k(){if(n){const{doUpdateValue:a}=n,{value:r}=o;_(a,r)}else{const{onUpdateChecked:a,"onUpdate:checked":r}=o,{nTriggerFormInput:c,nTriggerFormChange:y}=e;a&&_(a,!0),r&&_(r,!0),c(),y(),u.value=!0}}function C(){d.value||m.value||k()}function w(){C()}function z(){f.value=!1}function S(){f.value=!0}return{mergedClsPrefix:n?n.mergedClsPrefixRef:j(o).mergedClsPrefixRef,inputRef:s,labelRef:x,mergedName:R,mergedDisabled:d,uncontrolledChecked:u,renderSafeChecked:m,focus:f,mergedSize:l,handleRadioInputChange:w,handleRadioInputBlur:z,handleRadioInputFocus:S}}const ee=D("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[h("checked",[i("dot",`
 background-color: var(--n-color-active);
 `)]),i("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),D("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),i("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[b("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),h("checked",{boxShadow:"var(--n-box-shadow-active)"},[b("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),i("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),K("disabled",`
 cursor: pointer;
 `,[b("&:hover",[i("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),h("focus",[b("&:not(:active)",[i("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),h("disabled",`
 cursor: not-allowed;
 `,[i("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[b("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),h("checked",`
 opacity: 1;
 `)]),i("label",{color:"var(--n-text-color-disabled)"}),D("radio-input",`
 cursor: not-allowed;
 `)])]),ne=J({name:"Radio",props:Object.assign(Object.assign({},B.props),Q),setup(o){const e=Z(o),l=B("Radio","-radio",ee,N,o,e.mergedClsPrefix),d=P(()=>{const{mergedSize:{value:g}}=e,{common:{cubicBezierEaseInOut:m},self:{boxShadow:R,boxShadowActive:f,boxShadowDisabled:k,boxShadowFocus:C,boxShadowHover:w,color:z,colorDisabled:S,colorActive:a,textColor:r,textColorDisabled:c,dotColorActive:y,dotColorDisabled:A,labelPadding:F,labelLineHeight:U,labelFontWeight:E,[I("fontSize",g)]:T,[I("radioSize",g)]:V}}=l.value;return{"--n-bezier":m,"--n-label-line-height":U,"--n-label-font-weight":E,"--n-box-shadow":R,"--n-box-shadow-active":f,"--n-box-shadow-disabled":k,"--n-box-shadow-focus":C,"--n-box-shadow-hover":w,"--n-color":z,"--n-color-active":a,"--n-color-disabled":S,"--n-dot-color-active":y,"--n-dot-color-disabled":A,"--n-font-size":T,"--n-radio-size":V,"--n-text-color":r,"--n-text-color-disabled":c,"--n-label-padding":F}}),{inlineThemeDisabled:s,mergedClsPrefixRef:x,mergedRtlRef:n}=j(o),u=G("Radio",n,x),t=s?L("radio",P(()=>e.mergedSize.value[0]),d,o):void 0;return Object.assign(e,{rtlEnabled:u,cssVars:s?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender})},render(){const{$slots:o,mergedClsPrefix:e,onRender:l,label:d}=this;return l==null||l(),v("label",{class:[`${e}-radio`,this.themeClass,{[`${e}-radio--rtl`]:this.rtlEnabled,[`${e}-radio--disabled`]:this.mergedDisabled,[`${e}-radio--checked`]:this.renderSafeChecked,[`${e}-radio--focus`]:this.focus}],style:this.cssVars},v("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),v("div",{class:`${e}-radio__dot-wrapper`}," ",v("div",{class:[`${e}-radio__dot`,this.renderSafeChecked&&`${e}-radio__dot--checked`]})),W(o.default,s=>!s&&!d?null:v("div",{ref:"labelRef",class:`${e}-radio__label`},s||d)))}});export{ne as _,X as r};

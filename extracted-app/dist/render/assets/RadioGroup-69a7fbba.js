import{r as J}from"./Radio-c980589e.js";import{d as z,e as u,g as h,f as C,z as F,dA as Q,b as W,j as $,ff as X,h as Y,c4 as Z,c5 as I,m as oo,n as eo,fg as to,D as V}from"./main-8b08e1d6.js";import{d as ro,b as S,z as T,p as no,c as E,h as A}from"./_plugin-vue_export-helper-b059e461.js";const ao=z("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[u("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[h("checked",{backgroundColor:"var(--n-button-border-color-active)"}),h("disabled",{opacity:"var(--n-opacity-disabled)"})]),h("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[z("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),u("splitor",{height:"var(--n-height)"})]),z("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[z("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),u("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),C("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[u("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),C("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[u("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),F("disabled",`
 cursor: pointer;
 `,[C("&:hover",[u("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),F("checked",{color:"var(--n-button-text-color-hover)"})]),h("focus",[C("&:not(:active)",[u("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),h("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),h("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function io(o,a,e){var s;const t=[];let c=!1;for(let i=0;i<o.length;++i){const d=o[i],l=(s=d.type)===null||s===void 0?void 0:s.name;l==="RadioButton"&&(c=!0);const p=d.props;if(l!=="RadioButton"){t.push(d);continue}if(i===0)t.push(d);else{const f=t[t.length-1].props,m=a===f.value,v=f.disabled,x=a===p.value,g=p.disabled,w=(m?2:0)+(v?0:1),_=(x?2:0)+(g?0:1),k={[`${e}-radio-group__splitor--disabled`]:v,[`${e}-radio-group__splitor--checked`]:m},B={[`${e}-radio-group__splitor--disabled`]:g,[`${e}-radio-group__splitor--checked`]:x},R=w<_?B:k;t.push(A("div",{class:[`${e}-radio-group__splitor`,R]}),d)}}return{children:t,isButtonGroup:c}}const so=Object.assign(Object.assign({},$.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),bo=ro({name:"RadioGroup",props:so,setup(o){const a=S(null),{mergedSizeRef:e,mergedDisabledRef:s,nTriggerFormChange:t,nTriggerFormInput:c,nTriggerFormBlur:i,nTriggerFormFocus:d}=Q(o),{mergedClsPrefixRef:l,inlineThemeDisabled:p,mergedRtlRef:f}=W(o),m=$("Radio","-radio-group",ao,X,o,l),v=S(o.defaultValue),x=T(o,"value"),g=Y(x,v);function w(r){const{onUpdateValue:n,"onUpdate:value":y}=o;n&&V(n,r),y&&V(y,r),v.value=r,t(),c()}function _(r){const{value:n}=a;n&&(n.contains(r.relatedTarget)||d())}function k(r){const{value:n}=a;n&&(n.contains(r.relatedTarget)||i())}no(J,{mergedClsPrefixRef:l,nameRef:T(o,"name"),valueRef:g,disabledRef:s,mergedSizeRef:e,doUpdateValue:w});const B=Z("Radio",f,l),R=E(()=>{const{value:r}=e,{common:{cubicBezierEaseInOut:n},self:{buttonBorderColor:y,buttonBorderColorActive:D,buttonBorderRadius:U,buttonBoxShadow:G,buttonBoxShadowFocus:H,buttonBoxShadowHover:j,buttonColorActive:P,buttonTextColor:M,buttonTextColorActive:N,buttonTextColorHover:O,opacityDisabled:K,[I("buttonHeight",r)]:L,[I("fontSize",r)]:q}}=m.value;return{"--n-font-size":q,"--n-bezier":n,"--n-button-border-color":y,"--n-button-border-color-active":D,"--n-button-border-radius":U,"--n-button-box-shadow":G,"--n-button-box-shadow-focus":H,"--n-button-box-shadow-hover":j,"--n-button-color-active":P,"--n-button-text-color":M,"--n-button-text-color-hover":O,"--n-button-text-color-active":N,"--n-height":L,"--n-opacity-disabled":K}}),b=p?oo("radio-group",E(()=>e.value[0]),R,o):void 0;return{selfElRef:a,rtlEnabled:B,mergedClsPrefix:l,mergedValue:g,handleFocusout:k,handleFocusin:_,cssVars:p?void 0:R,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var o;const{mergedValue:a,mergedClsPrefix:e,handleFocusin:s,handleFocusout:t}=this,{children:c,isButtonGroup:i}=io(eo(to(this)),a,e);return(o=this.onRender)===null||o===void 0||o.call(this),A("div",{onFocusin:s,onFocusout:t,ref:"selfElRef",class:[`${e}-radio-group`,this.rtlEnabled&&`${e}-radio-group--rtl`,this.themeClass,i&&`${e}-radio-group--button-group`],style:this.cssVars},c)}});export{bo as _};

import{d as c,b as d,j as r,eC as m,m as u}from"./main-8b08e1d6.js";import{d as h,c as f,h as p}from"./_plugin-vue_export-helper-b059e461.js";const v=c("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),C=Object.assign({},r.props),b=h({name:"A",props:C,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=d(e),a=r("Typography","-a",v,m,e,o),t=f(()=>{const{common:{cubicBezierEaseInOut:i},self:{aTextColor:l}}=a.value;return{"--n-text-color":l,"--n-bezier":i}}),s=n?u("a",void 0,t,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:t,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{b as _};

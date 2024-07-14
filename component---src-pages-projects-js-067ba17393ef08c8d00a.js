"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[853],{2374:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),o=a(582);var i=function(e){let{breadcrumbPath:t}=e;return r.createElement("section",{className:"container"},r.createElement("div",{id:"breadcrumbs"},t.map(((e,a)=>{const o="Home"===e?"":e;return a===t.length-1?r.createElement("a",{key:a,href:"/"+o},e):r.createElement("div",{key:a,className:"breadcrumb-link"},r.createElement("a",{href:"/"+o},e),r.createElement("div",null,">"))}))))};var n=e=>{let{breadcrumbPath:t,children:a}=e;return r.createElement(r.Fragment,null,r.createElement(i,{breadcrumbPath:t}),r.createElement("main",null,a),r.createElement(o.x7,{toastOptions:{style:{backgroundColor:"#5998c5",color:"#fff"}}}))}},9357:function(e,t,a){var r=a(1883),o=a(7294);t.Z=function(e){var t;let{description:a,title:i,children:n}=e;const{site:s}=(0,r.useStaticQuery)("63159454"),l=a||s.siteMetadata.description,c=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return o.createElement(o.Fragment,null,o.createElement("title",null,c?i+" | "+c:i),o.createElement("meta",{name:"description",content:l}),o.createElement("meta",{property:"og:title",content:i}),o.createElement("meta",{property:"og:description",content:l}),o.createElement("meta",{property:"og:type",content:"website"}),n)}},7219:function(e,t,a){a.r(t),a.d(t,{Head:function(){return n}});var r=a(7294),o=a(2374),i=a(9357);const n=()=>r.createElement(i.Z,{title:"Projects"});t.default=()=>r.createElement(o.Z,{breadcrumbPath:["Home","Projects"]},r.createElement("section",{id:"projects",className:"container"},r.createElement("h1",{className:"heading"},"Projects"),r.createElement("div",{id:"project-links"},r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://ak-yoga.vercel.app/",target:"_blank",rel:"noreferrer"},r.createElement("h2",null,"Anna Kelly Yoga")))))))},582:function(e,t,a){a.d(t,{x7:function(){return ae},ZP:function(){return re}});var r=a(7294);let o={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let a="",r="",o="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":r+="f"==i[1]?c(n,i):i+"{"+c(n,"k"==i[1]?"":t)+"}":"object"==typeof n?r+=c(n,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(i,n):i+":"+n+";")}return a+(t&&o?t+"{"+o+"}":o)+r},d={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},p=(e,t,a,r,o)=>{let i=u(e),p=d[i]||(d[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!d[p]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=n.exec(e.replace(s,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[p]=c(o?{["@keyframes "+p]:t}:t,a?"":"."+p)}let m=a&&d.g?d.g:null;return a&&(d.g=d[p]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(d[p],t,r,m),p},m=(e,t,a)=>e.reduce(((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),"");function f(e){let t=this||{},a=e.call?e(t.p):e;return p(a.unshift?a.raw?m(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,i(t.target),t.g,t.o,t.k)}f.bind({g:1});let g,y,h,b=f.bind({k:1});function v(e,t){let a=this||{};return function(){let r=arguments;function o(i,n){let s=Object.assign({},i),l=s.className||o.className;a.p=Object.assign({theme:y&&y()},s),a.o=/ *go\d+/.test(l),s.className=f.apply(a,r)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),h&&c[0]&&h(s),g(c,s)}return t?t(o):o}}var x=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,E=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),k=new Map,$=e=>{if(k.has(e))return;let t=setTimeout((()=>{k.delete(e),C({type:4,toastId:e})}),1e3);k.set(e,t)},j=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=k.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?j(e,{type:1,toast:a}):j(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?$(r):e.toasts.forEach((e=>{$(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},P=[],N={toasts:[],pausedAt:void 0},C=e=>{N=j(N,e),P.forEach((e=>{e(N)}))},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||E()}))(t,e,a);return C({type:2,toast:r}),r.id},A=(e,t)=>z("blank")(e,t);A.error=z("error"),A.success=z("success"),A.loading=z("loading"),A.custom=z("custom"),A.dismiss=e=>{C({type:3,toastId:e})},A.remove=e=>C({type:4,toastId:e}),A.promise=(e,t,a)=>{let r=A.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(A.success(x(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{A.error(x(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var D=(e,t)=>{C({type:1,toast:{id:e,height:t}})},H=()=>{C({type:5,time:Date.now()})},I=e=>{let{toasts:t,pausedAt:a}=((e={})=>{let[t,a]=(0,r.useState)(N);(0,r.useEffect)((()=>(P.push(a),()=>{let e=P.indexOf(a);e>-1&&P.splice(e,1)})),[t]);let o=t.toasts.map((t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:o}})(e);(0,r.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>A.dismiss(t.id)),a);t.visible&&A.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let o=(0,r.useCallback)((()=>{a&&C({type:6,time:Date.now()})}),[a]),i=(0,r.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},n=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),s=n.findIndex((t=>t.id===e.id)),l=n.filter(((e,t)=>t<s&&e.visible)).length;return n.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+o),0)}),[t]);return{toasts:t,handlers:{updateHeight:D,startPause:H,endPause:o,calculateOffset:i}}},M=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Z=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,S=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Z} 1s linear infinite;
`,L=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Y=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=v("div")`
  position: absolute;
`,B=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,R=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return void 0!==t?"string"==typeof t?r.createElement(Q,null,t):t:"blank"===a?null:r.createElement(B,null,r.createElement(S,{...o}),"loading"!==a&&r.createElement(q,null,"error"===a?r.createElement(T,{...o}):r.createElement(Y,{...o})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,V=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=r.memo((({toast:e,position:t,style:a,children:o})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,o]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),J(a)];return{animation:t?`${b(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(R,{toast:e}),s=r.createElement(W,{...e.ariaProps},x(e.message,e));return r.createElement(V,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof o?o({icon:n,message:s}):r.createElement(r.Fragment,null,n,s))}));!function(e,t,a,r){c.p=t,g=e,y=a,h=r}(r.createElement);var ee=({id:e,className:t,style:a,onHeightUpdate:o,children:i})=>{let n=r.useCallback((t=>{if(t){let a=()=>{let a=t.getBoundingClientRect().height;o(e,a)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,o]);return r.createElement("div",{ref:n,className:t,style:a},i)},te=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ae=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:i,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:c}=I(a);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((a=>{let n=a.position||t,s=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...o}})(n,c.calculateOffset(a,{reverseOrder:e,gutter:o,defaultPosition:t}));return r.createElement(ee,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?te:"",style:s},"custom"===a.type?x(a.message,a):i?i(a):r.createElement(X,{toast:a,position:n}))})))},re=A}}]);
//# sourceMappingURL=component---src-pages-projects-js-067ba17393ef08c8d00a.js.map
"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[853],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,n=new RegExp("^"+i.source),o=new RegExp(i.source+s.source,"gu"),l=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,s)=>{let i=!1,n=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=n,n=!0,l++):n&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=n,n=!1,i=!0):(i=r(c)===c&&s(c)!==c,o=n,n=s(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(n,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return W},_:function(){return o},a:function(){return n},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(7294),s=(a(3204),a(5697)),i=a.n(s);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(s[a]=e[a]);return s}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,s){return void 0===s&&(s={}),n({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:n({},s,{opacity:t?1:0})})}function u(e,t,a,r,s,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(m,n({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:s,alt:i="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",n({},c,{decoding:"async",loading:s,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,n({},i,t,{sizes:l,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:l})})),c):c};var w;b.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},y.displayName="Picture",y.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const v=["fallback"],x=function(e){let{fallback:t}=e,a=o(e,v);return t?r.createElement(y,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",n({},a))};x.displayName="Placeholder",x.propTypes={fallback:s.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,n({},e)),r.createElement("noscript",null,r.createElement(y,n({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],A=["style","className"],N=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),n=3;n<r;n++)s[n-3]=arguments[n];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:S},j=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],I=new Set;let L,P;const T=function(e){let{as:t="div",image:s,style:i,backgroundColor:d,className:u,class:p,onStartLoad:m,onLoad:g,onError:f}=e,h=o(e,j);const{width:b,height:y,layout:w}=s,v=c(b,y,w),{style:x,className:E}=v,k=o(v,O),A=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);p&&(u=p);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,y);return(0,r.useEffect)((()=>{L||(L=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(N);if(P&&I.has(N))return;let t,r;return L.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;A.current&&(A.current.innerHTML=a(n({isLoading:!0,isLoaded:I.has(N),image:s},h)),I.has(N)||(t=requestAnimationFrame((()=>{A.current&&(r=o(A.current,N,I,i,m,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{I.has(N)&&P&&(A.current.innerHTML=P(n({isLoading:I.has(N),isLoaded:I.has(N),image:s},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[s]),(0,r.createElement)(t,n({},k,{style:n({},x,i,{backgroundColor:d}),className:E+(u?" "+u:""),ref:A,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));M.propTypes=C,M.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function Z(e){return function(t){let{src:a,__imageData:s,__error:i}=t,l=o(t,R);return i&&console.warn(i),s?r.createElement(e,n({image:s},l)):(console.warn("Image not loaded",a),null)}}const D=Z((function(e){let{as:t="div",className:a,class:s,style:i,image:l,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),f=n({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:v,height:S,layout:C,images:j,placeholder:O,backgroundColor:I}=l,L=c(v,S,C),{style:P,className:T}=L,M=o(L,A),R={fallback:void 0,sources:[]};return j.fallback&&(R.fallback=n({},j.fallback,{srcSet:j.fallback.srcSet?N(j.fallback.srcSet):void 0})),j.sources&&(R.sources=j.sources.map((e=>n({},e,{srcSet:N(e.srcSet)})))),r.createElement(t,n({},M,{style:n({},P,i,{backgroundColor:h}),className:T+(a?" "+a:"")}),r.createElement(g,{layout:C,width:v,height:S},r.createElement(x,n({},u(O,!1,C,v,S,I,b,y))),r.createElement(E,n({"data-gatsby-image-ssr":"",className:m},w,d("eager"===p,!1,R,p,f)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:S,width:z,height:z,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};D.displayName="StaticImage",D.propTypes=F;const W=Z(M);W.displayName="StaticImage",W.propTypes=F},2374:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),s=a(582);var i=function(e){let{breadcrumbPath:t}=e;return r.createElement("section",{className:"container"},r.createElement("div",{id:"breadcrumbs"},t.map(((e,a)=>{const s="home"===e?"":e;return a===t.length-1?r.createElement("a",{key:a,href:"/"+s},e):r.createElement("div",{key:a,className:"breadcrumb-link"},r.createElement("a",{href:"/"+s},e),r.createElement("div",null,">"))}))))};var n=e=>{let{breadcrumbPath:t,children:a}=e;return r.createElement(r.Fragment,null,r.createElement(i,{breadcrumbPath:t}),r.createElement("main",null,a),r.createElement(s.x7,{toastOptions:{style:{backgroundColor:"#5998c5",color:"#fff"}}}))}},9357:function(e,t,a){var r=a(1883),s=a(7294);t.Z=function(e){var t;let{description:a,title:i,children:n}=e;const{site:o}=(0,r.useStaticQuery)("63159454"),l=a||o.siteMetadata.description,c=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return s.createElement(s.Fragment,null,s.createElement("title",null,c?i+" | "+c:i),s.createElement("meta",{name:"description",content:l}),s.createElement("meta",{property:"og:title",content:i}),s.createElement("meta",{property:"og:description",content:l}),s.createElement("meta",{property:"og:type",content:"website"}),n)}},7219:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var r=a(8032),s=a(7294),i=a(2374),n=a(9357);const o=()=>s.createElement(n.Z,{title:"Projects"});t.default=()=>s.createElement(i.Z,{breadcrumbPath:["home","projects"]},s.createElement("section",{className:"container"},s.createElement("h1",{className:"heading"},"Projects"),s.createElement("p",{className:"subheading"},"Creations I have worked on in my free time."),s.createElement("div",{className:"projects-container"},s.createElement("div",{className:"project-card"},s.createElement("div",{className:"project-image"},s.createElement(r.S,{src:"../images/musaic.png",alt:"screenshot of the musiac website",placeholder:"blurred",width:450,height:360,__imageData:a(1609)})),s.createElement("div",{className:"project-details"},s.createElement("h2",{className:"project-title"},"Musaic"),s.createElement("p",{className:"project-description"},"Web app to create a mosaic of your favourite albums."),s.createElement("div",{className:"project-links"},s.createElement("a",{href:"https://musaic-grid.vercel.app/",target:"_blank",rel:"noreferrer",className:"project-link"},"website"),s.createElement("a",{href:"https://github.com/lukemcdowell/musaic",target:"_blank",rel:"noreferrer",className:"project-link"},"github")))),s.createElement("div",{className:"project-card"},s.createElement("div",{className:"project-image"},s.createElement(r.S,{src:"../images/ak_yoga.png",alt:"screenshot of the musiac website",placeholder:"blurred",width:450,height:360,__imageData:a(8662)})),s.createElement("div",{className:"project-details"},s.createElement("h2",{className:"project-title"},"AK Yoga"),s.createElement("p",{className:"project-description"},"Website to promote yoga classes and workshops."),s.createElement("div",{className:"project-links"},s.createElement("a",{href:"https://ak-yoga.vercel.app/",target:"_blank",rel:"noreferrer",className:"project-link"},"website")))))))},582:function(e,t,a){a.d(t,{x7:function(){return ae},ZP:function(){return re}});var r=a(7294);let s={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,o=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let a="",r="",s="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":r+="f"==i[1]?c(n,i):i+"{"+c(n,"k"==i[1]?"":t)+"}":"object"==typeof n?r+=c(n,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=c.p?c.p(i,n):i+":"+n+";")}return a+(t&&s?t+"{"+s+"}":s)+r},d={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e},p=(e,t,a,r,s)=>{let i=u(e),p=d[i]||(d[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!d[p]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=n.exec(e.replace(o,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);d[p]=c(s?{["@keyframes "+p]:t}:t,a?"":"."+p)}let m=a&&d.g?d.g:null;return a&&(d.g=d[p]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(d[p],t,r,m),p},m=(e,t,a)=>e.reduce(((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),"");function g(e){let t=this||{},a=e.call?e(t.p):e;return p(a.unshift?a.raw?m(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,i(t.target),t.g,t.o,t.k)}g.bind({g:1});let f,h,b,y=g.bind({k:1});function w(e,t){let a=this||{};return function(){let r=arguments;function s(i,n){let o=Object.assign({},i),l=o.className||s.className;a.p=Object.assign({theme:h&&h()},o),a.o=/ *go\d+/.test(l),o.className=g.apply(a,r)+(l?" "+l:""),t&&(o.ref=n);let c=e;return e[0]&&(c=o.as||e,delete o.as),b&&c[0]&&b(o),f(c,o)}return t?t(s):s}}var v=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,x=(()=>{let e=0;return()=>(++e).toString()})(),E=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),k=new Map,A=e=>{if(k.has(e))return;let t=setTimeout((()=>{k.delete(e),j({type:4,toastId:e})}),1e3);k.set(e,t)},N=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=k.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return e.toasts.find((e=>e.id===a.id))?N(e,{type:1,toast:a}):N(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?A(r):e.toasts.forEach((e=>{A(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+s})))}}},S=[],C={toasts:[],pausedAt:void 0},j=e=>{C=N(C,e),S.forEach((e=>{e(C)}))},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||x()}))(t,e,a);return j({type:2,toast:r}),r.id},L=(e,t)=>I("blank")(e,t);L.error=I("error"),L.success=I("success"),L.loading=I("loading"),L.custom=I("custom"),L.dismiss=e=>{j({type:3,toastId:e})},L.remove=e=>j({type:4,toastId:e}),L.promise=(e,t,a)=>{let r=L.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then((e=>(L.success(v(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e))).catch((e=>{L.error(v(t.error,e),{id:r,...a,...null==a?void 0:a.error})})),e};var P=(e,t)=>{j({type:1,toast:{id:e,height:t}})},T=()=>{j({type:5,time:Date.now()})},M=e=>{let{toasts:t,pausedAt:a}=((e={})=>{let[t,a]=(0,r.useState)(C);(0,r.useEffect)((()=>(S.push(a),()=>{let e=S.indexOf(a);e>-1&&S.splice(e,1)})),[t]);let s=t.toasts.map((t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:s}})(e);(0,r.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>L.dismiss(t.id)),a);t.visible&&L.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let s=(0,r.useCallback)((()=>{a&&j({type:6,time:Date.now()})}),[a]),i=(0,r.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=a||{},n=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),o=n.findIndex((t=>t.id===e.id)),l=n.filter(((e,t)=>t<o&&e.visible)).length;return n.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+s),0)}),[t]);return{toasts:t,handlers:{updateHeight:P,startPause:T,endPause:s,calculateOffset:i}}},R=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Z=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Z} 0.15s ease-out forwards;
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
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${q} 1s linear infinite;
`,W=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G=y`
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
}`,H=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
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
`,J=w("div")`
  position: absolute;
`,Y=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?r.createElement(B,null,t):t:"blank"===a?null:r.createElement(Y,null,r.createElement(F,{...s}),"loading"!==a&&r.createElement(J,null,"error"===a?r.createElement(z,{...s}):r.createElement(H,{...s})))},U=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,X=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Q=w("div")`
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
`,_=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$=r.memo((({toast:e,position:t,style:a,children:s})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[U(a),X(a)];return{animation:t?`${y(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(K,{toast:e}),o=r.createElement(_,{...e.ariaProps},v(e.message,e));return r.createElement(Q,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof s?s({icon:n,message:o}):r.createElement(r.Fragment,null,n,o))}));!function(e,t,a,r){c.p=t,f=e,h=a,b=r}(r.createElement);var ee=({id:e,className:t,style:a,onHeightUpdate:s,children:i})=>{let n=r.useCallback((t=>{if(t){let a=()=>{let a=t.getBoundingClientRect().height;s(e,a)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,s]);return r.createElement("div",{ref:n,className:t,style:a},i)},te=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ae=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:i,containerStyle:n,containerClassName:o})=>{let{toasts:l,handlers:c}=M(a);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((a=>{let n=a.position||t,o=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...s}})(n,c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return r.createElement(ee,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?te:"",style:o},"custom"===a.type?v(a.message,a):i?i(a):r.createElement($,{toast:a,position:n}))})))},re=L},8662:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADaElEQVR42nVSW1NbVRg9f8M3/0DfdHxxxmf1hdHO1NEXZzrqS73Vjh2oDKYZoSAXa8dCoNjSkKS0iJFYyKgtilgskJA4KZA25EJOTnJOrudAoLku1z4N0zqDe2bN2vvb37f2t75zpL6tKHo3ia2nuLC5fSQL9LXQG46Z3L2xjaGojMFHCQyEo5BEcPBhHP1M6GdggDxk7p+yuB9o7b9uiV0KhHB11YfRFR8+uOXB4IMIbBSWRMKNHQUzcoachj2hwEV2kCcTKTh5dz2ewq1k2jxfZCffsmZ0cQl9P3kweXcRx94/jZP2aUypeUi9tGO5vw7ragDWtSDOky0rAZxfWec+iG7GrPf9GAhu4HIkwS6SGNlOwjrnhWXSiXMTkzhhvYB3xiZwu2A8EbT6Q2bxV+shdBO9LO4LPMDQP5smLvI8SrFr7NROOGQVXXzk1PgYXv70I7zW2YkroS14s0VIYjbfMPlSZAeX+botJmOMRd/T8gRhT2bgpICLfJNjmU6pcKc1zGpFDPuDaL/hwpU1PxZLe7iTLUAa2d7BKIXGKSQ6ECITPNsJB+GKJXEzLmOa85vhPGflNH4mvBT+gxbvGftY1sv4q6Dj7xItHwpdp5CDH8PF4U+x0MmHOn70oOMHN7rcHlhmb6Nzxg2LZw5zFFzQ8ljKl7BMoZWiAZ++h4BRhuRRNMxlcvCqOfzCpN+IBc7i91wRd9NZLBCLvFtqYZm2grtlhPYOsLG3j00iXD5AZP8xogcVSLVGA9V6A4IFmoCJerNpngULiNjhqtVFTR31Vv7hEntJ392FomrI5vNIk4slHbphoHywj5SqQs1mTc7mC7wr4XGlgjxZ1GRyOZR0g/m7Zl21VoNUKBYRicUhpxRkNA0qkaGIbujYkWUTSUWBls1RPGd2laFYQk6ZNUlCVtJQMioavJOawpKw1ni2ebZvxptMapoWn10GXeXYcaFYgnBYrVVRqVTNGunhowDm5x0I+e5AifigxQNIhVcRDvyKewtT8M7bEYv6TaFG87+PHrWk70Z60H7qVczYvoDb9hn+dHbAMfQeus++gq4PX8TJ48/DZvv8yYfih2i2RP9PWhoe7sdbx19A+5k30NZ2DF1nTmD8y7dx9VwbPn73Jbz5+nPo6fkEMf4u82trSHDGhyM5SvBf7jBN9HucZooAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/b1c10902fac9ba55eecc7efdb77aa416/41169/ak_yoga.png","srcSet":"/static/b1c10902fac9ba55eecc7efdb77aa416/ca6f5/ak_yoga.png 113w,\\n/static/b1c10902fac9ba55eecc7efdb77aa416/18f1d/ak_yoga.png 225w,\\n/static/b1c10902fac9ba55eecc7efdb77aa416/41169/ak_yoga.png 450w,\\n/static/b1c10902fac9ba55eecc7efdb77aa416/e05fa/ak_yoga.png 900w","sizes":"(min-width: 450px) 450px, 100vw"},"sources":[{"srcSet":"/static/b1c10902fac9ba55eecc7efdb77aa416/863bf/ak_yoga.webp 113w,\\n/static/b1c10902fac9ba55eecc7efdb77aa416/3cd9b/ak_yoga.webp 225w,\\n/static/b1c10902fac9ba55eecc7efdb77aa416/d8309/ak_yoga.webp 450w,\\n/static/b1c10902fac9ba55eecc7efdb77aa416/291f0/ak_yoga.webp 900w","type":"image/webp","sizes":"(min-width: 450px) 450px, 100vw"}]},"width":450,"height":360}')},1609:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEX0lEQVR42iWT2VOTBxTFP2JCEokghSqxATSoLMWyhSCoECCERLZAcUEIEAkGlLAYgRJlkU0Wi9sgRqRAGwyMS0tH0S5Obceq1ZnaGd/6Vv+RX7+MD3fmvNwz59x7jqAK2Uz6J0HkpCVjNJooNBhI3hWDXBAIlUiQSoIIEnFgJEFBSAMj4pBgGZHhYShDw8iJ2cqp1AiC5QqEkM1Kdmui0MZEY7bkkm/OJ6qgFJXegFyfiz7PQInZjNlkIq+gkDRjCSmmcnQl1ezURKNSKNgRpiBTHYJSqUQIlkopM1s4Zq+nxWXDeroJ5dgyyRPzKGf8LD5/jffqFJNTE/zx6g2eAQ+3rl3l8s3LxGpjqYvREKsOQxCVh4puBbnIWpn2BbPd3fzw7R26zvWj7PCR7p5FaF5i/ulrLjiO46ou49mzZ1gPpnK7x0a/vZJo9TaqtqsxpexEqpSyJaBQKt1Eu8OOu+0Uwx4XHa4uhKJB5I0+hLKbzPifMt7fw0V3O2t3V7AkJuCqMOC0FhAXGYE+NJx9mk/ZGrqZEKV4Q7lo2VJqoXegh/MXHJiMeUhU4YREaZCFq7G1WBnx9tI310fnxdOMdttYu92Pb96DITuV+Ph4EuO0qCMiPxIqZFKMZgMj4wM4HTVkpOwm94AeW91RkpOSONpcyx2/k5Gbdlo89SxcdvP88RJXFmbI3J8uEu4mJymOPaFbCDxYkMuCKS7N4dpIJ23OSjIyNSTtiSMlJZGI8EiKW6u5sTHE6u+DDF1tpetUDa7xMWxfeUhITiAzOY58fSKx0Z+hChAqZDJKrOW42ptpcZ7AWl1K9n49RcYCsjJ1FH9ZgOFoIcZjuVQcN9PT2yqep5dLV8Y52WTDVntc3HNgLchCESxFUMplGMSsdbrsdLXU0u7qwOv1Mjk5xfv370lP1SERJGjCE1BHxdJ8wcOjt2+ZXPbxnd/PNwsLzM/Ps3h9mk1BgvhlsQ3NTXYmBt04aytwnWnh3bt3DA4O8vD+fXT7c2hIz2d9cJw0vY7J215+/OsN075V/Pcf4D7bxejYKGsilogNEmRibOz1tZzrOE19/QkaGurZ2Njgw38fWPH5SErTk6r5nMbMPGL2aplZWmJ2dZX5ew+5NDVFRoaOQ7kG+kXlgZoKIQo5ifv2YjhsYaghj2kxsL6xa3TaT/Lb3AqrTjvrnhN876lj9kgBdzoq8NZZWHIWMzxwnt6OY1zsqaWtvR3ZJgmCShGMWqtlvMnEy7NZDJTnc2tgAsthE//e/YV/ptvwX2rGP+3mxdd1PHIcYVhv5nF9FT+tr/D3n0949es9hkeHRIWiZZUYxnjtdh4067hRs4OS7GS8fcNUVJSy3DfKDe8i63PdvPD1M7c4wnprFTO5Fp44q7g+0MrGvWVe/rxG5xnHR4UBy+ptavL27CNDE0OCdi+2ohIqDYUcySvkQGUdnY1mek+aKBb77K7U01uWjceaRXXRIWrKK2isrsSYf1CMjYz/AWlNeuewogeaAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/a102e320df4701f1dbbb1d5add94d713/41169/musaic.png","srcSet":"/static/a102e320df4701f1dbbb1d5add94d713/ca6f5/musaic.png 113w,\\n/static/a102e320df4701f1dbbb1d5add94d713/18f1d/musaic.png 225w,\\n/static/a102e320df4701f1dbbb1d5add94d713/41169/musaic.png 450w,\\n/static/a102e320df4701f1dbbb1d5add94d713/e05fa/musaic.png 900w","sizes":"(min-width: 450px) 450px, 100vw"},"sources":[{"srcSet":"/static/a102e320df4701f1dbbb1d5add94d713/863bf/musaic.webp 113w,\\n/static/a102e320df4701f1dbbb1d5add94d713/3cd9b/musaic.webp 225w,\\n/static/a102e320df4701f1dbbb1d5add94d713/d8309/musaic.webp 450w,\\n/static/a102e320df4701f1dbbb1d5add94d713/291f0/musaic.webp 900w","type":"image/webp","sizes":"(min-width: 450px) 450px, 100vw"}]},"width":450,"height":360}')}}]);
//# sourceMappingURL=component---src-pages-projects-js-b14e56b2ffb3a58a817b.js.map
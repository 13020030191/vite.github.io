import{r as e,c as t,w as r,T as n,o,a as s,b as i,d as a,M as c,l,e as d,V as u,f as p}from"./vendor.deabeb2c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m={name:"App",components:{}};m.render=function(i,a,c,l,d,u){const p=e("router-view");return o(),t(n,{name:"fadesd",mode:"out-in"},{default:r((()=>[s(p)])),_:1})};const f={},h=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in f)return;f[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},g=[{path:"/",component:()=>h((()=>import("./index.f09266e6.js")),["static/index.f09266e6.js","static/vendor.deabeb2c.js"]),redirect:"/",children:[{name:"index",path:"/",component:()=>h((()=>import("./index.fad169c3.js")),["static/index.fad169c3.js","static/index.f09a60fd.css","static/vendor.deabeb2c.js"]),meta:{title:"首页"}},{name:"Aboutus",path:"/aboutus",component:()=>h((()=>import("./index.d8391d99.js")),["static/index.d8391d99.js","static/index.5ddd42de.css","static/vendor.deabeb2c.js"]),meta:{title:"关于我们"}}]}],v=i({history:a(),routes:g});v.beforeEach(((e,t,r)=>{e&&e.meta?(e.meta.title&&(document.title=e.meta.title),r()):r()}));const y=()=>!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);function b(e){return["carbon/uploadFile"].includes(e)}var _={requestSuccess:e=>{const t=e=>{e&&Object.keys(e).forEach((t=>{null!==e[t]&&void 0!==e[t]||(e[t]="")}))};let r=null;if(b(e.url)&&(r=new FormData,r.append("file",e.data.file),delete e.data.file),"post"===e.method){const n=JSON.parse(JSON.stringify(e.data||{}));if(n.app_key="h5_kd",n.timestamp=(new Date).getTime(),n.token="",n.sign=(e=>{var t=(e=>{var t=[];for(var r in e)t.push([r,e[r]]);return((e,t)=>{for(var r=0;r<e.length-1;r++){for(var n=!0,o=0;o<e.length-1-r;o++)if(t(e[o],e[o+1])>0){var s=e[o];e[o]=e[o+1],e[o+1]=s,n=!1}if(n)return!1}})(t,(function(e,t){return e[0]>t[0]})),t})(e),r="";for(let o=0;o<t.length;o++)r+=t[o][0]+""+(null===t[o][1]||void 0===t[o][1]?"":t[o][1]);const n="16819ac97191b202c29253058e0f70e1";return c(n+r+n).toLowerCase()})(n),b(e.url))return Object.keys(n).forEach((e=>{r.append(e,n[e])})),t(n),e.data=r,e;t(n),e.data=l.stringify(n)}return e},requestFail:e=>Promise.reject(e),responseSuccess:e=>e.data,responseFail:e=>Promise.reject(e)},w={timeout:2e4,baseURL:"https://alpha-mcs-qq.gokuaidian.com/services/v3/",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}};let P={};P=d.create(w),P.interceptors.request.use(_.requestSuccess,_.requestFail),P.interceptors.response.use(_.responseSuccess,_.responseFail);var E=P,k={getChargePrefer:()=>E.post("user/getChargePrefer",{})};let L=new u;const O=p(m);O.use(v),console.log("环境变量:--\x3e","development"),O.use(L),O.config.globalProperties.$api=k,window.vm=O.mount("#app");export{y as _};
//# sourceMappingURL=index.46f49cb0.js.map

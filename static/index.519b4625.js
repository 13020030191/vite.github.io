import{r as e,c as t,w as r,o as n,a as o,b as s,T as i,d as a,e as c,M as l,l as d,f as u,V as p,g as m}from"./vendor.15e507f6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f={name:"App",components:{}};f.render=function(a,c,l,d,u,p){const m=e("router-view");return n(),t(m,null,{default:r((({Component:e})=>[o(i,null,{default:r((()=>[(n(),t(s(e)))])),_:2},1024)])),_:1})};const h={},g=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in h)return;h[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},_=[{path:"/",component:()=>g((()=>import("./index.1ba984b7.js")),["static/index.1ba984b7.js","static/vendor.15e507f6.js"]),redirect:"/",children:[{name:"index",path:"/",component:()=>g((()=>import("./index.3a10cd95.js")),["static/index.3a10cd95.js","static/index.f09a60fd.css","static/vendor.15e507f6.js"]),meta:{title:"首页"}},{name:"Aboutus",path:"/aboutus",component:()=>g((()=>import("./index.31e77956.js")),["static/index.31e77956.js","static/index.5ddd42de.css","static/vendor.15e507f6.js"]),meta:{title:"关于我们"}},{name:"general",path:"/article/:locationCode/:codes",component:()=>g((()=>import("./index.d41aadf0.js")),["static/index.d41aadf0.js","static/index.948bf8a8.css","static/vendor.15e507f6.js"]),meta:{title:""}}]}],v=a({history:c(),routes:_});v.beforeEach(((e,t,r)=>{e&&e.meta?(e.meta.title&&(document.title=e.meta.title),r()):r()}));const b=()=>!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);function y(e){return["carbon/uploadFile"].includes(e)}var w={requestSuccess:e=>{const t=e=>{e&&Object.keys(e).forEach((t=>{null!==e[t]&&void 0!==e[t]||(e[t]="")}))};let r=null;if(y(e.url)&&(r=new FormData,r.append("file",e.data.file),delete e.data.file),"post"===e.method){const n=JSON.parse(JSON.stringify(e.data||{}));if(n.app_key="h5_kd",n.timestamp=(new Date).getTime(),n.token="",n.sign=(e=>{var t=(e=>{var t=[];for(var r in e)t.push([r,e[r]]);return((e,t)=>{for(var r=0;r<e.length-1;r++){for(var n=!0,o=0;o<e.length-1-r;o++)if(t(e[o],e[o+1])>0){var s=e[o];e[o]=e[o+1],e[o+1]=s,n=!1}if(n)return!1}})(t,(function(e,t){return e[0]>t[0]})),t})(e),r="";for(let o=0;o<t.length;o++)r+=t[o][0]+""+(null===t[o][1]||void 0===t[o][1]?"":t[o][1]);const n="16819ac97191b202c29253058e0f70e1";return l(n+r+n).toLowerCase()})(n),y(e.url))return Object.keys(n).forEach((e=>{r.append(e,n[e])})),t(n),e.data=r,e;t(n),e.data=d.stringify(n)}return e},requestFail:e=>Promise.reject(e),responseSuccess:e=>e.data,responseFail:e=>Promise.reject(e)},P={timeout:2e4,baseURL:"https://alpha-mcs-qq.gokuaidian.com/services/v3/",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}};let E={};E=u.create(P),E.interceptors.request.use(w.requestSuccess,w.requestFail),E.interceptors.response.use(w.responseSuccess,w.responseFail);var L=E,O={getChargePrefer:()=>L.post("user/getChargePrefer",{}),getArticlePublispList:e=>L.post("cms/getArticlePublispList",e)};let k=new p;const A=m(f);A.use(v),console.log("环境变量:---\x3e","development"),A.use(k),A.config.globalProperties.$apis=O,window.vm=A.mount("#app");export{b as _};

import{c as e,w as r,T as s,o as t,i as o,t as n,q as a,p as i,h as m,r as c,j as l,a as d}from"./vendor.c9c32ea2.js";const u={data:()=>({Errormes:{txt:"",show:!1}}),methods:{ErrormesFun(e){this.Errormes.txt=e,this.Errormes.show=!0,setTimeout((()=>{this.Errormes.show=!1}),2e3)}}},h={key:0,class:"Errormes"};u.render=function(i,m,c,l,d,u){return t(),e(s,{name:"fades"},{default:r((()=>[d.Errormes.show?(t(),o("div",h,n(d.Errormes.txt),1)):a("",!0)])),_:1})};const E={name:"general",components:{Errormes:u},data:()=>({contentHtml:""}),mounted(){this.$apis.getArticlePublispList({publishLocationCode:202001,publishChannelCodes:6}).then((e=>{if(200===e.code){const r=e&&e.result;document.title=r.articleTitle,this.contentHtml=r.contentHtml}else this.$refs.Errormes.ErrormesFun(e.message)}))}};i("data-v-926ea96a");const f={class:"container"},p=["innerHTML"];m(),E.render=function(e,r,s,n,a,i){const m=c("Errormes");return t(),o("div",f,[l("article",{innerHTML:a.contentHtml},null,8,p),d(m,{ref:"Errormes"},null,512)])},E.__scopeId="data-v-926ea96a";export{E as default};
//# sourceMappingURL=index.cf0e48bd.js.map

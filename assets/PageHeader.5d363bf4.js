import{_ as n,o as c,c as l,b as t,t as d,p,e as _}from"./index.97662d81.js";const g={name:"PageHeader",props:{title:String,backUrl:String},methods:{back(){this.$router.push(this.backUrl)}}},s=e=>(p("data-v-9594142c"),e=e(),_(),e),h={class:"page-header-content"},f=["v-if"],v=s(()=>t("i",{class:"van-icon van-icon-arrow-left page-header-icon"},null,-1)),b=s(()=>t("span",{class:"page-header-left-text"},"\u8FD4\u56DE",-1)),m=[v,b],k={class:"page-header-title van-ellipsis"};function w(e,a,i,x,u,o){return c(),l("div",h,[t("div",{class:"page-header-left","v-if":i.backUrl,onClick:a[0]||(a[0]=(...r)=>o.back&&o.back(...r))},m,8,f),t("div",k,d(i.title),1)])}var S=n(g,[["render",w],["__scopeId","data-v-9594142c"]]);export{S as P};

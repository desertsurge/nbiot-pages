import{_ as g,C as m,U as _,g as n,o as u,c as p,h as o,H as h,al as f,b as l}from"./index.f1265cac.js";const v={mounted(){},methods:{},setup(){const{getters:t,dispatch:a}=f();let s=m(()=>t["User/getRandomImg"]),e=_(!1);return{img:s,loading:e,getImg:async()=>{e.value=!0,await a("User/setRandomImg"),e.value=!1}}}},x=l("br",null,null,-1),I=l("br",null,null,-1);function b(t,a,s,e,r,y){const i=n("van-loading"),c=n("van-image"),d=n("van-button");return u(),p("div",null,[o(c,{round:"","lazy-load":"",width:"200",height:"200",src:e.img},{loading:h(()=>[o(i,{type:"spinner",size:"30"})]),_:1},8,["src"]),x,I,o(d,{type:"primary",icon:"search",zise:"mini",text:"\u968F\u673Adog",loading:e.loading,onClick:e.getImg,color:"linear-gradient(to right, #ff6034, #ee0a24)","loading-text":"loading..."},null,8,["loading","onClick"])])}var k=g(v,[["render",b]]);export{k as default};

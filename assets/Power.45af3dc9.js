import{P as i}from"./PageHeader.94a31fad.js";import{_ as c,g as l,o as u,c as b,h as m,b as o,w as s,v as a}from"./index.a46f1a2d.js";const p={components:{PageHeader:i},data(){return{dbm:"",w:""}},created(){},methods:{toDbm(){this.w&&(this.dbm=(10*Math.log10(this.w*1e3)).toFixed(2))},toW(){this.dbm&&(this.w=(Math.pow(10,this.dbm/10)/1e3).toFixed(10))},reset(){this.dbm="",this.w=""}}},f={class:"wrapper"},v={class:"content"},g={class:"convert-btns"};function _(w,e,h,x,n,r){const d=l("page-header");return u(),b("div",f,[m(d,{backUrl:"grid",title:"\u529F\u7387\u6362\u7B97"}),o("div",v,[s(o("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=t=>n.dbm=t),placeholder:"\u8BF7\u8F93\u5165dBm\u503C",class:"input input-top"},null,512),[[a,n.dbm]]),o("div",g,[o("div",{class:"btn convert iconfont",onClick:e[1]||(e[1]=(...t)=>r.toW&&r.toW(...t))},"\u8F6C\u6362\u6210\u74E6"),o("div",{class:"btn reset iconfont",onClick:e[2]||(e[2]=(...t)=>r.reset&&r.reset(...t))},"\u91CD\u7F6E"),o("div",{class:"btn convert iconfont",onClick:e[3]||(e[3]=(...t)=>r.toDbm&&r.toDbm(...t))},"\u8F6C\u6362\u6210Dbm")]),s(o("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=t=>n.w=t),placeholder:"\u8BF7\u8F93\u5165\u74E6\u6570",class:"input input-bottom"},null,512),[[a,n.w]])])])}var C=c(p,[["render",_],["__scopeId","data-v-53b3f7c9"]]);export{C as default};

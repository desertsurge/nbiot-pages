import{l as c}from"./localStorage.42bb8409.js";import{P as g}from"./PageHeader.5d363bf4.js";import{_ as m,g as v,o as a,c as s,h as w,b as o,F as p,r as _,t as r,w as k,v as F,d as n,n as b,p as B,e as y,f as x}from"./index.97662d81.js";const C={33:{down:{low:1900,high:1920,off:36e3}},34:{down:{low:2010,high:2025,off:36200}},35:{down:{low:1850,high:1910,off:36350}},36:{down:{low:1930,high:1990,off:36950}},37:{down:{low:1910,high:1930,off:37550}},38:{down:{low:2570,high:2620,off:37750}},39:{down:{low:1880,high:1920,off:38250}},40:{down:{low:2300,high:2400,off:38650}},41:{down:{low:2496,high:2690,off:39650}},42:{down:{low:3400,high:3600,off:41590}},43:{down:{low:3600,high:3800,off:43590}},44:{down:{low:703,high:803,off:45590}}},H={data(){return{bands:[33,34,35,36,37,38,39,40,41,42,43,44],role:{low:0,high:0,off:0},selectedBand:0,showAlert:!1,value:"",curHomeBackTriggerTimes:1,maxHomeBackTriggerTimes:2,statusBarHeight:40,touchBarHeight:20}},components:{PageHeader:g},created(){let e=this,l=c.getItem("tdd.band.select");l?e.bandClick(l):e.bandClick(33)},computed:{result(){let e=this.changeShowAlert();return e==""?e:(this.value-this.role.low)*10+this.role.off},itemHeight(){return this.scrollHeight/this.bands.length},scrollHeight(){let e=window.outerHeight;return this.realPx(e)-50}},methods:{bandClick(e){let l=C[e];this.selectedBand=e,this.role=l.down,c.setItem("tdd.band.select",e)},realPx(e){return e},changeShowAlert(){return this.showAlert=!1,!this.value||(this.value+"").length<3?"":this.value<this.role.low||this.value>this.role.high?(this.showAlert=!0,""):null}}},h=e=>(B("data-v-be04bfb2"),e=e(),y(),e),A={class:"wrapper"},S={class:"band-ctt"},z=["onClick"],T={class:"band-name"},I={key:0,class:"icon-right"},D={class:"main-ctt"},N={class:"label"},P={class:"alert information"},V={key:0,class:"alert danger"},E=h(()=>o("div",null,"\u8F93\u5165\u6570\u503C\u5FC5\u987B\u5728\u8303\u56F4\u4E4B\u5185\uFF1A",-1)),U={class:"result-ctt"},L=h(()=>o("div",{class:"result-title"},"ARFCN",-1)),M={key:0,class:"result-body"};function O(e,l,R,j,t,d){const f=v("page-header");return a(),s("div",A,[w(f,{backUrl:"grid",title:"TDD\u9891\u70B9"}),o("div",{class:"main",style:b({height:d.scrollHeight+"px"})},[o("div",S,[(a(!0),s(p,null,_(t.bands,(i,u)=>(a(),s("div",{onClick:q=>d.bandClick(i),class:x(["band-item",t.selectedBand==i?"active":""]),key:u,style:b({height:d.itemHeight+"px",lineHeight:d.itemHeight+"px"})},[o("div",T,"Band "+r(i),1),t.selectedBand==i?(a(),s("div",I)):n("",!0)],14,z))),128))]),o("div",D,[o("div",N,"\u9891\u6BB5\uFF1ABand "+r(t.selectedBand),1),k(o("input",{class:"input",type:"number","onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),placeholder:"\u5B9E\u9645\u9891\u70B9\u503C"},null,512),[[F,t.value]]),o("div",P,"\u8303\u56F4\uFF1A\uFF08"+r(t.role.low)+" - "+r(t.role.high)+"\uFF09 OFF:"+r(t.role.off),1),t.showAlert?(a(),s("div",V,[E,o("div",null,"\uFF08"+r(t.role.low)+" - "+r(t.role.high)+"\uFF09",1)])):n("",!0),o("div",U,[L,d.result?(a(),s("div",M,r(d.result),1)):n("",!0)])])],4)])}var Q=m(H,[["render",O],["__scopeId","data-v-be04bfb2"]]);export{Q as default};

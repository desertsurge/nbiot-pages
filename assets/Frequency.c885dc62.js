import{l as h}from"./localStorage.42bb8409.js";import{_ as g,o as a,c as s,b as t,F as w,r as m,t as r,w as b,v,d as n,n as f,p,e as _,f as k}from"./index.f1265cac.js";const F={1:{down:{low:2110,high:2170,off:0}},2:{down:{low:1930,high:1990,off:600}},3:{down:{low:1805,high:1880,off:1200}},4:{down:{low:2110,high:2155,off:1950}},5:{down:{low:869,high:894,off:2400}},6:{down:{low:875,high:885,off:2650}},7:{down:{low:2620,high:2690,off:2750}},8:{down:{low:925,high:960,off:3450}},9:{down:{low:1844.9,high:1879.9,off:3800}},10:{down:{low:2110,high:2170,off:4150}},11:{down:{low:1475.9,high:1495,off:4750}},12:{down:{low:729,high:746,off:5010}},13:{down:{low:746,high:756,off:5180}},14:{down:{low:758,high:768,off:5280}},17:{down:{low:734,high:746,off:5730}},18:{down:{low:860,high:875,off:5850}},19:{down:{low:875,high:890,off:6e3}},20:{down:{low:791,high:821,off:6150}},21:{down:{low:1495.9,high:1510.9,off:6450}},22:{down:{low:3510,high:3590,off:6600}},23:{down:{low:2180,high:2200,off:7500}},24:{down:{low:1525,high:1559,off:7700}},25:{down:{low:1930,high:1995,off:8040}},26:{down:{low:859,high:894,off:8690}},27:{down:{low:852,high:869,off:9040}},28:{down:{low:758,high:803,off:9210}}},y={data(){return{bands:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,22,23,24,25,26,27,28],role:{low:0,high:0,off:0},selectedBand:0,showAlert:!1,value:"",curHomeBackTriggerTimes:1,maxHomeBackTriggerTimes:2,statusBarHeight:40,touchBarHeight:20}},components:{},created(){let e=this,l=h.getItem("band.select");l?e.bandClick(l):e.bandClick(1)},computed:{result(){let e=this.changeShowAlert();return e==""?e:(this.value-this.role.low)*10+this.role.off},itemHeight(){return this.scrollHeight/this.bands.length},scrollHeight(){let e=window.outerHeight;return this.realPx(e)-50}},methods:{bandClick(e){let l=F[e];this.selectedBand=e,this.role=l.down,h.setItem("band.select",e)},realPx(e){return e},changeShowAlert(){return this.showAlert=!1,!this.value||(this.value+"").length<3?"":this.value<this.role.low||this.value>this.role.high?(this.showAlert=!0,""):null}}},c=e=>(p("data-v-06f70246"),e=e(),_(),e),B={class:"wrapper"},x={class:"band-ctt"},C=["onClick"],H={class:"band-name"},A={key:0,class:"icon-right"},S={class:"main-ctt"},z={class:"label"},I={class:"alert information"},T={key:0,class:"alert danger"},E=c(()=>t("div",null,"\u8F93\u5165\u6570\u503C\u5FC5\u987B\u5728\u8303\u56F4\u4E4B\u5185\uFF1A",-1)),N={class:"result-ctt"},V=c(()=>t("div",{class:"result-title"},"ARFCN",-1)),q={key:0,class:"result-body"};function D(e,l,P,L,o,i){return a(),s("div",B,[t("div",{class:"main",style:f({height:i.scrollHeight+"px"})},[t("div",x,[(a(!0),s(w,null,m(o.bands,(d,u)=>(a(),s("div",{onClick:M=>i.bandClick(d),class:k(["band-item",o.selectedBand==d?"active":""]),key:u,style:f({height:i.itemHeight+"px",lineHeight:i.itemHeight+"px"})},[t("div",H,"Band "+r(d),1),o.selectedBand==d?(a(),s("div",A)):n("",!0)],14,C))),128))]),t("div",S,[t("div",z,"\u9891\u6BB5\uFF1ABand "+r(o.selectedBand),1),b(t("input",{class:"input",type:"number","onUpdate:modelValue":l[0]||(l[0]=d=>o.value=d),placeholder:"\u5B9E\u9645\u9891\u70B9\u503C"},null,512),[[v,o.value]]),t("div",I,"\u8303\u56F4\uFF1A\uFF08"+r(o.role.low)+" - "+r(o.role.high)+"\uFF09 OFF:"+r(o.role.off),1),o.showAlert?(a(),s("div",T,[E,t("div",null,"\uFF08"+r(o.role.low)+" - "+r(o.role.high)+"\uFF09",1)])):n("",!0),t("div",N,[V,i.result?(a(),s("div",q,r(i.result),1)):n("",!0)])])],4)])}var U=g(y,[["render",D],["__scopeId","data-v-06f70246"]]);export{U as default};

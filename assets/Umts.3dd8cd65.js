import{l as c}from"./localStorage.42bb8409.js";import{P as m}from"./PageHeader.c20f2aa0.js";import{_ as b,g as w,o as a,c as s,h as v,b as t,F as p,r as _,t as r,w as k,v as F,d as n,n as h,p as B,e as y,f as x}from"./index.003f1055.js";const C={1:{down:{low:2112.4,high:2167.6,off:0}},2:{down:{low:1932.4,high:1987.6,off:0}},3:{down:{low:1807.4,high:1877.6,off:1575}},4:{down:{low:2112.4,high:2152.6,off:1805}},5:{down:{low:871.4,high:891.6,off:0}},6:{down:{low:877.4,high:882.6,off:0}},7:{down:{low:2622.4,high:2687.6,off:2175}},8:{down:{low:927.4,high:957.6,off:340}},9:{down:{low:1847.4,high:1877.4,off:0}},10:{down:{low:2112.4,high:2167.6,off:1490}},11:{down:{low:1478.4,high:1493.4,off:736}},12:{down:{low:731.4,high:743.6,off:-37}},13:{down:{low:748.4,high:753.6,off:-55}},14:{down:{low:760.4,high:765.6,off:-63}},19:{down:{low:877.4,high:887.6,off:735}},20:{down:{low:793.4,high:818.6,off:-109}},21:{down:{low:1498.4,high:1508.4,off:1326}},22:{down:{low:3512.4,high:3587.6,off:2580}},25:{down:{low:1932.4,high:1992.6,off:910}},26:{down:{low:861.4,high:891.6,off:-291}},32:{down:{low:1454.4,high:1493.6,off:131}}},H={data(){return{bands:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,20,21,22,25,26,32],role:{low:0,high:0,off:0},selectedBand:0,showAlert:!1,value:"",curHomeBackTriggerTimes:1,maxHomeBackTriggerTimes:2,statusBarHeight:40,touchBarHeight:20}},components:{PageHeader:m},created(){let e=this,d=c.getItem("umts.band.select");d?e.bandClick(d):e.bandClick(1)},computed:{result(){let e=this.changeShowAlert();return e==""?e:(this.value-this.role.off)*5},itemHeight(){return this.scrollHeight/this.bands.length},scrollHeight(){let e=window.outerHeight;return this.realPx(e)-50}},methods:{bandClick(e){let d=C[e];this.selectedBand=e,this.role=d.down,c.setItem("umts.band.select",e)},realPx(e){return e},changeShowAlert(){return this.showAlert=!1,!this.value||(this.value+"").length<3?"":this.value<this.role.low||this.value>this.role.high?(this.showAlert=!0,""):null}}},f=e=>(B("data-v-35d84b72"),e=e(),y(),e),A={class:"wrapper"},S={class:"band-ctt"},z=["onClick"],I={class:"band-name"},T={key:0,class:"icon-right"},U={class:"main-ctt"},N={class:"label"},P={class:"alert information"},V={key:0,class:"alert danger"},E=f(()=>t("div",null,"\u8F93\u5165\u6570\u503C\u5FC5\u987B\u5728\u8303\u56F4\u4E4B\u5185\uFF1A",-1)),D={class:"result-ctt"},M=f(()=>t("div",{class:"result-title"},"ARFCN",-1)),L={key:0,class:"result-body"};function O(e,d,R,j,o,l){const u=w("page-header");return a(),s("div",A,[v(u,{backUrl:"grid",title:"UMTS\u9891\u70B9"}),t("div",{class:"main",style:h({height:l.scrollHeight+"px"})},[t("div",S,[(a(!0),s(p,null,_(o.bands,(i,g)=>(a(),s("div",{onClick:q=>l.bandClick(i),class:x(["band-item",o.selectedBand==i?"active":""]),key:g,style:h({height:l.itemHeight+"px",lineHeight:l.itemHeight+"px"})},[t("div",I,"Band "+r(i),1),o.selectedBand==i?(a(),s("div",T)):n("",!0)],14,z))),128))]),t("div",U,[t("div",N,"\u9891\u6BB5\uFF1ABand "+r(o.selectedBand),1),k(t("input",{class:"input",type:"number","onUpdate:modelValue":d[0]||(d[0]=i=>o.value=i),placeholder:"\u5B9E\u9645\u9891\u70B9\u503C"},null,512),[[F,o.value]]),t("div",P,"\u8303\u56F4\uFF1A\uFF08"+r(o.role.low)+" - "+r(o.role.high)+"\uFF09 OFF:"+r(o.role.off),1),o.showAlert?(a(),s("div",V,[E,t("div",null,"\uFF08"+r(o.role.low)+" - "+r(o.role.high)+"\uFF09",1)])):n("",!0),t("div",D,[M,l.result?(a(),s("div",L,r(l.result),1)):n("",!0)])])],4)])}var Q=b(H,[["render",O],["__scopeId","data-v-35d84b72"]]);export{Q as default};

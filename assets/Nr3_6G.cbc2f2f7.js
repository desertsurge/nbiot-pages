import{P as s}from"./PageHeader.9cbf9d52.js";import{_ as c,g as a,o as B,c as F,h as e,H as i}from"./index.f1265cac.js";import{F as f,C as h,a as v}from"./index.f875f630.js";const S={name:"nr",components:{PageHeader:s,vanField:f,vanCellGroup:h,vanCell:v},data(){return{ctype:1,a:3510,b:100,c:.03,d:273,e:0,f:48}},computed:{computedM(){return this.ctype==1?3:1},computedArf(){return Math.round(6e5+(this.a-3e3)/.015)},computedG(){return Number((this.a-this.d*12*this.c/2).toFixed(2))},computedSSBN(){let o=this.computedG;return this.f==24?this.roundUp((o+12*10*this.c-3e3)/1.44):this.f==48?this.roundUp((o+12*12*this.c+12*10*this.c-3e3)/1.44):0},computedGSCN(){return 7499+this.computedSSBN},computedH(){return Number((this.computedSSBN*1.44+3e3).toFixed(2))},computedPointA(){return this.computedG-this.e*this.c*12},computedKSSB(){return Math.round((this.computedH-12*10*this.c-this.computedPointA)/.015%24)},computedOffsetToPointA(){return Math.round((this.computedH-10*12*this.c-this.computedKSSB*.015-this.computedPointA)/(.015*12))},computedSSBAbs(){return this.roundUp(6e5+Math.round((this.computedH-3e3)/.015))},computedPointAAbs(){return this.roundUp(6e5+(this.computedPointA-3e3)/.015)}},methods:{roundUp(o){return o<0?Math.floor(o):Math.floor(o)==o?o:Math.floor(o)+1}}},_={class:"nr"};function b(o,u,C,V,t,r){const p=a("page-header"),d=a("van-field"),m=a("van-cell-group"),n=a("van-cell");return B(),F("div",_,[e(p,{backUrl:"grid",title:"3G-6G\u9891\u70B9"}),e(m,{title:"\u914D\u7F6E\u53C2\u6570",class:"settings"},{default:i(()=>[e(d,{modelValue:t.a,"onUpdate:modelValue":u[0]||(u[0]=l=>t.a=l),type:"number",label:"\u4E2D\u5FC3\u9891\u70B9",placeholder:"\u8BF7\u8F93\u5165\u4E2D\u5FC3\u9891\u70B9"},null,8,["modelValue"]),e(d,{modelValue:t.b,"onUpdate:modelValue":u[1]||(u[1]=l=>t.b=l),type:"number",label:"\u7CFB\u7EDF\u5E26\u5BBD",placeholder:"\u8BF7\u8F93\u5165\u7CFB\u7EDF\u5E26\u5BBD"},null,8,["modelValue"]),e(d,{modelValue:t.c,"onUpdate:modelValue":u[2]||(u[2]=l=>t.c=l),type:"number",label:"\u5B50\u8F7D\u6CE2\u95F4\u9694",placeholder:"\u8BF7\u8F93\u5165\u5B50\u8F7D\u6CE2\u95F4\u9694"},null,8,["modelValue"]),e(d,{modelValue:t.d,"onUpdate:modelValue":u[3]||(u[3]=l=>t.d=l),type:"number",label:"\u6700\u5927RB\u6570",placeholder:"\u8BF7\u8F93\u5165\u6700\u5927RB\u6570"},null,8,["modelValue"]),e(d,{modelValue:t.e,"onUpdate:modelValue":u[4]||(u[4]=l=>t.e=l),type:"number",label:"offsetToCarrier",placeholder:"\u8BF7\u8F93\u5165offsetToCarrier"},null,8,["modelValue"]),e(d,{modelValue:t.f,"onUpdate:modelValue":u[5]||(u[5]=l=>t.f=l),type:"number",label:"Coreset #0 RB\u6570",placeholder:"\u8BF7\u8F93\u5165Coreset #0 RB\u6570"},null,8,["modelValue"])]),_:1}),e(m,{title:"\u8F93\u51FA",class:"output-container"},{default:i(()=>[e(n,{title:"arfcnValueNr",value:r.computedArf},null,8,["value"]),e(n,{title:"\u7CFB\u7EDF\u6700\u4F4E\u9891\u70B9",value:r.computedG},null,8,["value"]),e(n,{title:"\u6700\u4F4E\u9891SSB\u7684N",value:r.computedSSBN},null,8,["value"]),e(n,{title:"\u6700\u4F4E\u9891SSB\u7684GSCN",value:r.computedGSCN},null,8,["value"]),e(n,{title:"SSB\u4E2D\u5FC3\u9891\u70B9H",value:r.computedH},null,8,["value"]),e(n,{title:"\u7EDD\u5BF9\u9891\u70B9point A",value:r.computedPointA},null,8,["value"]),e(n,{title:"OffsetToPointA",value:r.computedOffsetToPointA},null,8,["value"]),e(n,{title:"KSSB",value:r.computedKSSB},null,8,["value"]),e(n,{title:"SSB\u7EDD\u5BF9\u9891\u70B9",value:r.computedSSBAbs},null,8,["value"]),e(n,{title:"PointA\u7EDD\u5BF9\u9891\u70B9",value:r.computedPointAAbs},null,8,["value"])]),_:1})])}var N=c(S,[["render",b]]);export{N as default};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2b72a46"],{"75ad":function(t,e,i){},8207:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grid"},[i("van-grid",{attrs:{clickable:"","column-num":2}},[i("van-grid-item",{attrs:{icon:"gold-coin",text:"功率换算",to:"/power"}}),i("van-grid-item",{attrs:{icon:"gift",text:"NB频点换算",to:"/frequency"}}),i("van-grid-item",{attrs:{icon:"eye",text:"3G以下频点",to:"/nr"}}),i("van-grid-item",{attrs:{icon:"medal",text:"3G-6G频点",to:"/nr36"}}),i("van-grid-item",{attrs:{icon:"underway",text:"GSM频点",to:"/gsm"}}),i("van-grid-item",{attrs:{icon:"gem",text:"UMTS频点",to:"/umts"}}),i("van-grid-item",{attrs:{icon:"award",text:"FDD频点",to:"/Fdd"}}),i("van-grid-item",{attrs:{icon:"diamond",text:"TDD频点",to:"/Tdd"}}),i("van-grid-item",{attrs:{icon:"fire",text:"峰值速率",to:"/PeakRate"}}),i("van-grid-item",{attrs:{icon:"bag",text:"SSB互转",to:"/SsbFrequency"}}),i("van-grid-item",{attrs:{icon:"point-gift",text:"Location & Bandwidth",to:"/riv"}})],1)],1)},r=[],a=(i("68ef"),i("9d70"),i("3743"),i("e15d"),i("c31d")),o=i("d282"),s=i("ea8e"),c=i("b1d2"),d=i("48f4"),u=i("9884"),l=i("6f2f"),g=i("ad06"),m=Object(o["a"])("grid-item"),h=m[0],f=m[1],b=h({mixins:[Object(u["a"])("vanGrid")],props:Object(a["a"])({},d["c"],{dot:Boolean,text:String,icon:String,iconPrefix:String,info:[Number,String],badge:[Number,String]}),computed:{style:function(){var t=this.parent,e=t.square,i=t.gutter,n=t.columnNum,r=100/n+"%",a={flexBasis:r};if(e)a.paddingTop=r;else if(i){var o=Object(s["a"])(i);a.paddingRight=o,this.index>=n&&(a.marginTop=o)}return a},contentStyle:function(){var t=this.parent,e=t.square,i=t.gutter;if(e&&i){var n=Object(s["a"])(i);return{right:n,bottom:n,height:"auto"}}}},methods:{onClick:function(t){this.$emit("click",t),Object(d["b"])(this.$router,this)},genIcon:function(){var t,e=this.$createElement,i=this.slots("icon"),n=null!=(t=this.badge)?t:this.info;return i?e("div",{class:f("icon-wrapper")},[i,e(l["a"],{attrs:{dot:this.dot,info:n}})]):this.icon?e(g["a"],{attrs:{name:this.icon,dot:this.dot,badge:n,size:this.parent.iconSize,classPrefix:this.iconPrefix},class:f("icon")}):void 0},getText:function(){var t=this.$createElement,e=this.slots("text");return e||(this.text?t("span",{class:f("text")},[this.text]):void 0)},genContent:function(){var t=this.slots();return t||[this.genIcon(),this.getText()]}},render:function(){var t,e=arguments[0],i=this.parent,n=i.center,r=i.border,a=i.square,o=i.gutter,s=i.direction,d=i.clickable;return e("div",{class:[f({square:a})],style:this.style},[e("div",{style:this.contentStyle,attrs:{role:d?"button":null,tabindex:d?0:null},class:[f("content",[s,{center:n,square:a,clickable:d,surround:r&&o}]),(t={},t[c["a"]]=r,t)],on:{click:this.onClick}},[this.genContent()])])}}),v=(i("75ad"),Object(o["a"])("grid")),p=v[0],x=v[1],S=p({mixins:[Object(u["b"])("vanGrid")],props:{square:Boolean,gutter:[Number,String],iconSize:[Number,String],direction:String,clickable:Boolean,columnNum:{type:[Number,String],default:4},center:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},computed:{style:function(){var t=this.gutter;if(t)return{paddingLeft:Object(s["a"])(t)}}},render:function(){var t,e=arguments[0];return e("div",{style:this.style,class:[x(),(t={},t[c["c"]]=this.border&&!this.gutter,t)]},[this.slots()])}}),y={name:"grid",components:{vanGrid:S,vanGridItem:b}},k=y,w=i("2877"),j=Object(w["a"])(k,n,r,!1,null,null,null);e["default"]=j.exports},e15d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-e2b72a46.2dcd6175.js.map
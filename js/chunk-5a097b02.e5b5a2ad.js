(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a097b02"],{"39ea":function(t,e,o){"use strict";var i=o("80eb"),n=o.n(i);n.a},"5d77":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"main",style:{height:t.scrollHeight+"px"}},[o("div",{staticClass:"band-ctt"},t._l(t.bands,(function(e,i){return o("div",{key:i,class:["band-item",t.selectedBand==e?"active":""],style:{height:t.itemHeight+"px",lineHeight:t.itemHeight+"px"},on:{click:function(o){return t.bandClick(e)}}},[o("div",{staticClass:"band-name"},[t._v("Band "+t._s(e))]),t.selectedBand==e?o("div",{staticClass:"icon-right"}):t._e()])})),0),o("div",{staticClass:"main-ctt"},[o("div",{staticClass:"label"},[t._v("频段：Band "+t._s(t.selectedBand))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",attrs:{type:"number",placeholder:"实际频点值"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),o("div",{staticClass:"alert information"},[t._v("范围：（"+t._s(t.role.low)+" - "+t._s(t.role.high)+"） OFF:"+t._s(t.role.off))]),t.showAlert?o("div",{staticClass:"alert danger"},[o("div",[t._v("输入数值必须在范围之内：")]),o("div",[t._v("（"+t._s(t.role.low)+" - "+t._s(t.role.high)+"）")])]):t._e(),o("div",{staticClass:"result-ctt"},[o("div",{staticClass:"result-title"},[t._v("ARFCN")]),t.result?o("div",{staticClass:"result-body"},[t._v(t._s(t.result))]):t._e()])])])])},n=[],s=o("b702a"),l=o.n(s),a={1:{down:{low:2112.4,high:2167.6,off:0}},2:{down:{low:1932.4,high:1987.6,off:0}},3:{down:{low:1807.4,high:1877.6,off:1575}},4:{down:{low:2112.4,high:2152.6,off:1805}},5:{down:{low:871.4,high:891.6,off:0}},6:{down:{low:877.4,high:882.6,off:0}},7:{down:{low:2622.4,high:2687.6,off:2175}},8:{down:{low:927.4,high:957.6,off:340}},9:{down:{low:1847.4,high:1877.4,off:0}},10:{down:{low:2112.4,high:2167.6,off:1490}},11:{down:{low:1478.4,high:1493.4,off:736}},12:{down:{low:731.4,high:743.6,off:-37}},13:{down:{low:748.4,high:753.6,off:-55}},14:{down:{low:760.4,high:765.6,off:-63}},19:{down:{low:877.4,high:887.6,off:735}},20:{down:{low:793.4,high:818.6,off:-109}},21:{down:{low:1498.4,high:1508.4,off:1326}},22:{down:{low:3512.4,high:3587.6,off:2580}},25:{down:{low:1932.4,high:1992.6,off:910}},26:{down:{low:861.4,high:891.6,off:-291}},32:{down:{low:1454.4,high:1493.6,off:131}}},h={data:function(){return{bands:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,19,20,21,22,25,26,32],role:{low:0,high:0,off:0},selectedBand:0,showAlert:!1,value:"",curHomeBackTriggerTimes:1,maxHomeBackTriggerTimes:2,statusBarHeight:40,touchBarHeight:20}},components:{},created:function(){var t=this,e=l.a.getItem("umts.band.select");e?t.bandClick(e):t.bandClick(1)},computed:{result:function(){var t=this.changeShowAlert();return""==t?t:5*(this.value-this.role.off)},itemHeight:function(){return this.scrollHeight/this.bands.length},scrollHeight:function(){var t=window.outerHeight;return this.realPx(t)-50}},methods:{bandClick:function(t){var e=a[t];this.selectedBand=t,this.role=e.down,l.a.setItem("umts.band.select",t)},realPx:function(t){return t},changeShowAlert:function(){return this.showAlert=!1,!this.value||(this.value+"").length<3?"":this.value<this.role.low||this.value>this.role.high?(this.showAlert=!0,""):null}}},r=h,c=(o("39ea"),o("e90a")),d=Object(c["a"])(r,i,n,!1,null,"6120bb9f",null);e["default"]=d.exports},"80eb":function(t,e,o){},b702a:function(t,e,o){(function(e){(function(){"use strict";var o;function i(){}o=i,o.prototype.getItem=function(t){return this.hasOwnProperty(t)?String(this[t]):null},o.prototype.setItem=function(t,e){this[t]=String(e)},o.prototype.removeItem=function(t){delete this[t]},o.prototype.clear=function(){var t=this;Object.keys(t).forEach((function(e){t[e]=void 0,delete t[e]}))},o.prototype.key=function(t){return t=t||0,Object.keys(this)[t]},o.prototype.__defineGetter__("length",(function(){return Object.keys(this).length})),e.localStorage?t.exports=localStorage:t.exports=new i})()}).call(this,o("9edd"))}}]);
//# sourceMappingURL=chunk-5a097b02.e5b5a2ad.js.map
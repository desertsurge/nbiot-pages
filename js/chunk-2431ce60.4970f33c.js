(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2431ce60"],{"1c33":function(t,e,n){},3875:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("1325"),i=10;function a(t,e){return t>e&&t>i?"horizontal":e>t&&e>i?"vertical":""}var r={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX<0?0:e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||a(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},bindTouchEvent:function(t){var e=this.onTouchStart,n=this.onTouchMove,i=this.onTouchEnd;Object(o["b"])(t,"touchstart",e),Object(o["b"])(t,"touchmove",n),i&&(Object(o["b"])(t,"touchend",i),Object(o["b"])(t,"touchcancel",i))}}}},"45e9":function(t,e,n){"use strict";n("1c33")},"4d75":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var o=n("1d80"),i=n("5899"),a="["+i+"]",r=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},6605:function(t,e,n){"use strict";n.d(e,"b",(function(){return T})),n.d(e,"a",(function(){return $}));var o={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]}},i=n("c31d"),a=n("2638"),r=n.n(a),c=n("d282"),s=n("a142"),l=n("ba31"),u=n("1325"),d=Object(c["a"])("overlay"),h=d[0],f=d[1];function p(t){Object(u["c"])(t,!0)}function v(t,e,n,o){var a=Object(i["a"])({zIndex:e.zIndex},e.customStyle);return Object(s["c"])(e.duration)&&(a.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",r()([{directives:[{name:"show",value:e.show}],style:a,class:[f(),e.className],on:{touchmove:e.lockScroll?p:s["h"]}},Object(l["b"])(o,!0)]),[null==n.default?void 0:n.default()])])}v.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}};var m=h(v);function b(t){var e=t.parentNode;e&&e.removeChild(t)}var S={className:"",customStyle:{}};function y(t){return Object(l["c"])(m,{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function g(t){var e=o.find(t);if(e){var n=t.$el,a=e.config,r=e.overlay;n&&n.parentNode&&n.parentNode.insertBefore(r.$el,n),Object(i["a"])(r,S,a,{show:!0})}}function O(t,e){var n=o.find(t);if(n)n.config=e;else{var i=y(t);o.stack.push({vm:t,config:e,overlay:i})}g(t)}function k(t){var e=o.find(t);e&&(e.overlay.show=!1)}function C(t){var e=o.find(t);e&&b(e.overlay.$el)}var N=n("a8c1"),I=n("3875");function B(t){return"string"===typeof t?document.querySelector(t):t()}function x(t){var e=void 0===t?{}:t,n=e.ref,o=e.afterPortal;return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,e=this.getContainer,i=n?this.$refs[n]:this.$el;e?t=B(e):this.$parent&&(t=this.$parent.$el),t&&t!==i.parentNode&&t.appendChild(i),o&&o.call(this)}}}}var j=0;function A(t){var e="binded_"+j++;function n(){this[e]||(t.call(this,u["b"],!0),this[e]=!0)}function o(){this[e]&&(t.call(this,u["a"],!1),this[e]=!1)}return{mounted:n,activated:n,deactivated:o,beforeDestroy:o}}var P={mixins:[A((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{onPopstate:function(){this.close(),this.shouldReopen=!1},handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?u["b"]:u["a"];e(window,"popstate",this.onPopstate)}}}},T={transitionAppear:Boolean,value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function $(t){return void 0===t&&(t={}),{mixins:[I["a"],P,x({afterPortal:function(){this.overlay&&g()}})],props:T,data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var n=e?"open":"close";this.inited=this.inited||this.value,this[n](),t.skipToggleEvent||this.$emit(n)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){C(this),this.opened&&this.removeLock(),this.getContainer&&b(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(o.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock())},addLock:function(){this.lockScroll&&(Object(u["b"])(document,"touchstart",this.touchStart),Object(u["b"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.add("van-overflow-hidden"),o.lockCount++)},removeLock:function(){this.lockScroll&&o.lockCount&&(o.lockCount--,Object(u["a"])(document,"touchstart",this.touchStart),Object(u["a"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(k(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(N["b"])(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,a=n.scrollTop,r="11";0===a?r=i>=o?"00":"01":a+i>=o&&(r="10"),"11"===r||"vertical"!==this.direction||parseInt(r,2)&parseInt(e,2)||Object(u["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?O(t,{zIndex:o.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):k(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++o.zIndex+t}}}}},7156:function(t,e,n){var o=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var a,r;return i&&"function"==typeof(a=e.constructor)&&a!==n&&o(r=a.prototype)&&r!==n.prototype&&i(t,r),t}},"7a2c":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("page-header",{attrs:{backUrl:"grid",title:"3G以下频点"}}),n("div",{staticClass:"nr"},[n("van-cell-group",{staticClass:"settings",attrs:{title:"配置参数"}},[n("van-field",{attrs:{type:"number",label:"中心频点",placeholder:"请输入中心频点"},model:{value:t.a,callback:function(e){t.a=e},expression:"a"}}),n("van-field",{attrs:{type:"number",label:"系统带宽",placeholder:"请输入系统带宽"},model:{value:t.b,callback:function(e){t.b=e},expression:"b"}}),n("van-field",{attrs:{type:"number",label:"子载波间隔",placeholder:"请输入子载波间隔"},model:{value:t.c,callback:function(e){t.c=e},expression:"c"}}),n("van-field",{attrs:{type:"number",label:"最大RB数",placeholder:"请输入最大RB数"},model:{value:t.d,callback:function(e){t.d=e},expression:"d"}}),n("van-field",{attrs:{type:"number",label:"offsetToCarrier",placeholder:"请输入offsetToCarrier"},model:{value:t.e,callback:function(e){t.e=e},expression:"e"}}),n("van-field",{attrs:{type:"number",label:"Coreset #0 RB数",placeholder:"请输入Coreset #0 RB数"},model:{value:t.f,callback:function(e){t.f=e},expression:"f"}})],1),n("van-cell-group",{staticClass:"output-container",attrs:{title:"输出"}},[n("van-cell",{attrs:{title:"arfcnValueNr",value:1e3*t.a/5}}),n("van-cell",{attrs:{title:"系统最低频点",value:t.computedG}}),n("van-cell",{attrs:{title:"最低频SSB的N",value:t.computedSSBN}}),n("van-cell",{attrs:{title:"最低频SSB的GSCN",value:t.computedGSCN}}),n("van-cell",{attrs:{title:"SSB中心频点H",value:t.computedH}}),n("van-cell",{attrs:{title:"绝对频点point A",value:t.computedPointA}}),n("van-cell",{attrs:{title:"OffsetToPointA",value:t.computedOffsetToPointA}}),n("van-cell",{attrs:{title:"KSSB",value:t.computedKSSB}}),n("van-cell",{attrs:{title:"SSB绝对频点",value:t.computedSSBAbs}}),n("van-cell",{attrs:{title:"PointA绝对频点",value:t.computedPointAAbs}})],1)],1)],1)},i=[],a=(n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("872c"),n("c31d")),r=n("2b0e"),c=n("2638"),s=n.n(c),l=n("d282"),u=n("ba31"),d=n("6605"),h=n("e41f"),f=Object(l["a"])("notify"),p=f[0],v=f[1];function m(t,e,n,o){var i={color:e.color,background:e.background};return t(h["a"],s()([{attrs:{value:e.value,position:"top",overlay:!1,duration:.2,lockScroll:!1},style:i,class:[v([e.type]),e.className]},Object(u["b"])(o,!0)]),[(null==n.default?void 0:n.default())||e.message])}m.props=Object(a["a"])({},d["b"],{color:String,message:[Number,String],duration:[Number,String],className:null,background:String,getContainer:[String,Function],type:{type:String,default:"danger"}});var b,S,y=p(m),g=n("a142");function O(t){return Object(g["e"])(t)?t:{message:t}}function k(t){if(!g["g"])return S||(S=Object(u["c"])(y,{on:{click:function(t){S.onClick&&S.onClick(t)},close:function(){S.onClose&&S.onClose()},opened:function(){S.onOpened&&S.onOpened()}}})),t=Object(a["a"])({},k.currentOptions,O(t)),Object(a["a"])(S,t),clearTimeout(b),t.duration&&t.duration>0&&(b=setTimeout(k.clear,t.duration)),S}function C(){return{type:"danger",value:!0,message:"",color:void 0,background:void 0,duration:3e3,className:"",onClose:null,onClick:null,onOpened:null}}k.clear=function(){S&&(S.value=!1)},k.currentOptions=C(),k.setDefaultOptions=function(t){Object(a["a"])(k.currentOptions,t)},k.resetDefaultOptions=function(){k.currentOptions=C()},k.install=function(){r["a"].use(y)},k.Component=y,r["a"].prototype.$notify=k;var N=k,I=(n("c194"),n("7744")),B=(n("0653"),n("34e9")),x=(n("be7f"),n("565f")),j=(n("a9e3"),n("b680"),n("36ad")),A={name:"nr",components:{PageHeader:j["a"],vanField:x["a"],vanCellGroup:B["a"],vanCell:I["a"]},data:function(){return{ctype:1,a:2565,b:100,c:.03,d:273,e:0,f:48}},computed:{computedM:function(){return this.mod(this.a-.005)?1:this.mod(this.a)?3:this.mod(this.a-.01)?5:(N({type:"danger",message:"频点错误: ".concat(this.a)}),-1)},computedG:function(){var t=this.a-12*this.d*this.c/2;return Number(t.toFixed(2))},computedSSBN:function(){var t=this.computedG,e=this.computedM;return-1===e?0:24==this.f?this.roundUp((t+120*this.c-.05*e)/1.2):48==this.f?this.roundUp((t+144*this.c+120*this.c-.05*e)/1.2):0},computedGSCN:function(){return 3*this.computedSSBN},computedH:function(){return-1===this.computedM?0:Number((1.2*this.computedSSBN+.05*this.computedM).toFixed(2))},computedPointA:function(){return this.computedG-this.e*this.c*12},computedKSSB:function(){return Math.round((this.computedH-120*this.c-this.computedPointA)/.015%24)},computedOffsetToPointA:function(){return Math.round((this.computedH-120*this.c-.015*this.computedKSSB-this.computedPointA)/.18)},computedSSBAbs:function(){return Math.round(200*this.computedH)},computedPointAAbs:function(){return 200*this.computedPointA}},methods:{roundUp:function(t){return t<0?Math.floor(t):Math.floor(t)==t?t:Math.floor(t)+1},mod:function(t){return 1e3*t%15===0}}},P=A,T=(n("45e9"),n("2877")),$=Object(T["a"])(P,o,i,!1,null,null,null);e["default"]=$.exports},"872c":function(t,e,n){},a71a:function(t,e,n){},a9e3:function(t,e,n){"use strict";var o=n("83ab"),i=n("da84"),a=n("94ca"),r=n("6eeb"),c=n("5135"),s=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),h=n("7c73"),f=n("241c").f,p=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,b="Number",S=i[b],y=S.prototype,g=s(h(y))==b,O=function(t){var e,n,o,i,a,r,c,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+l}for(a=l.slice(2),r=a.length,c=0;c<r;c++)if(s=a.charCodeAt(c),s<48||s>i)return NaN;return parseInt(a,o)}return+l};if(a(b,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var k,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(g?d((function(){y.valueOf.call(n)})):s(n)!=b)?l(new S(O(e)),n,C):O(e)},N=o?f(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;N.length>I;I++)c(S,k=N[I])&&!c(C,k)&&v(C,k,p(S,k));C.prototype=y,y.constructor=C,r(i,b,C)}},c194:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04")},e41f:function(t,e,n){"use strict";var o=n("d282"),i=n("a142"),a=n("6605"),r=n("ad06"),c=Object(o["a"])("popup"),s=c[0],l=c[1];e["a"]=s({mixins:[Object(a["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},methods:{onClickCloseIcon:function(t){this.$emit("click-close-icon",t),this.close()}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,o=this.position,a=this.duration,c="center"===o,s=this.transition||(c?"van-fade":"van-popup-slide-"+o),u={};if(Object(i["c"])(a)){var d=c?"animationDuration":"transitionDuration";u[d]=a+"s"}return e("transition",{attrs:{appear:this.transitionAppear,name:s},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:u,class:l((t={round:n},t[o]=o,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(r["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.onClickCloseIcon}})])])}}})}}]);
//# sourceMappingURL=chunk-2431ce60.4970f33c.js.map
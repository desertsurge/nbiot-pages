import{P as Oe}from"./PageHeader.a306bab4.js";import{K as Se,Q as ue,i as Q,l as H,a7 as N,J as Y,a8 as Ee,k as $,a9 as Ce,U as J,T as De,aa as Be,z as Fe,W as ye,X as j,h as i,a1 as ke,ab as ae,m as G,j as pe,x as _e,R as we,C as I,u as xe,ac as Ne,ad as He,ae as ie,af as Re,s as se,ag as Le,I as Ue,q as Ae,ah as ze,E as Ke,_ as Ge,ai as Ye,g as T,o as D,c as B,H as y,w as re,aj as ce,b as de,F as me,r as fe,t as ve,a2 as W}from"./index.3a78486b.js";import{F as $e,C as Je,a as je}from"./index.1aef0284.js";function q(e){if(!Se(e))return e;if(Array.isArray(e))return e.map(a=>q(a));if(ue(e)){const a={};return Object.keys(e).forEach(c=>{a[c]=q(e[c])}),a}return e}const he=200,be=300,qe=15,[Pe,oe]=Q("picker-column");function Qe(e){const{transform:a}=window.getComputedStyle(e),c=a.slice(7,a.length-1).split(", ")[5];return Number(c)}const Te=Symbol(Pe),le=e=>ue(e)&&e.disabled;var We=H({name:Pe,props:{textKey:N(String),readonly:Boolean,allowHtml:Boolean,className:Y,itemHeight:N(Number),defaultIndex:Ee(0),swipeDuration:N($),initialOptions:Ce(),visibleItemCount:N($)},emits:["change"],setup(e,{emit:a,slots:c}){let f,s,u,h,b;const k=J(),n=De({index:e.defaultIndex,offset:0,duration:0,options:q(e.initialOptions)}),p=Be(),v=()=>n.options.length,g=()=>e.itemHeight*(+e.visibleItemCount-1)/2,F=o=>{o=ae(o,0,v());for(let d=o;d<v();d++)if(!le(n.options[d]))return d;for(let d=o-1;d>=0;d--)if(!le(n.options[d]))return d},r=(o,d)=>{o=F(o)||0;const C=-o*e.itemHeight,_=()=>{o!==n.index&&(n.index=o,d&&a("change",o))};f&&C!==n.offset?b=_:_(),n.offset=C},x=o=>{JSON.stringify(o)!==JSON.stringify(n.options)&&(n.options=q(o),r(e.defaultIndex))},O=o=>{f||e.readonly||(b=null,n.duration=he,r(o,!0))},S=o=>ue(o)&&e.textKey in o?o[e.textKey]:o,V=o=>ae(Math.round(-o/e.itemHeight),0,v()-1),R=(o,d)=>{const C=Math.abs(o/d);o=n.offset+C/.003*(o<0?-1:1);const _=V(o);n.duration=+e.swipeDuration,r(_,!0)},L=()=>{f=!1,n.duration=0,b&&(b(),b=null)},E=o=>{if(!e.readonly){if(p.start(o),f){const d=Qe(k.value);n.offset=Math.min(0,d-g()),s=n.offset}else s=n.offset;n.duration=0,u=Date.now(),h=s,b=null}},X=o=>{if(e.readonly)return;p.move(o),p.isVertical()&&(f=!0,ke(o,!0)),n.offset=ae(s+p.deltaY.value,-(v()*e.itemHeight),e.itemHeight);const d=Date.now();d-u>be&&(u=d,h=n.offset)},U=()=>{if(e.readonly)return;const o=n.offset-h,d=Date.now()-u;if(d<be&&Math.abs(o)>qe){R(o,d);return}const _=V(n.offset);n.duration=he,r(_,!0),setTimeout(()=>{f=!1},0)},A=()=>{const o={height:`${e.itemHeight}px`};return n.options.map((d,C)=>{const _=S(d),K=le(d),te={role:"button",style:o,tabindex:K?-1:0,class:oe("item",{disabled:K,selected:C===n.index}),onClick:()=>O(C)},ne={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:_};return i("li",te,[c.option?c.option(d):i("div",ne,null)])})},Z=o=>{const{options:d}=n;for(let C=0;C<d.length;C++)if(S(d[C])===o)return r(C)},z=()=>n.options[n.index],ee=()=>n.options.length;return r(n.index),Fe(Te),ye({state:n,setIndex:r,getValue:z,setValue:Z,setOptions:x,hasOptions:ee,stopMomentum:L}),j(()=>e.initialOptions,x),j(()=>e.defaultIndex,o=>r(o)),()=>i("div",{class:[oe(),e.className],onTouchstart:E,onTouchmove:X,onTouchend:U,onTouchcancel:U},[i("ul",{ref:k,style:{transform:`translate3d(0, ${n.offset+g()}px, 0)`,transitionDuration:`${n.duration}ms`,transitionProperty:n.duration?"all":"none"},class:oe("wrapper"),onTransitionend:L},[A()])])}});const[Xe,w,ge]=Q("picker"),Ze={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:G(44),showToolbar:pe,swipeDuration:G(1e3),visibleItemCount:G(6),cancelButtonText:String,confirmButtonText:String},et=_e({},Ze,{columns:Ce(),valueKey:String,defaultIndex:G(0),toolbarPosition:we("top"),columnsFieldNames:Object});var tt=H({name:Xe,props:et,emits:["confirm","cancel","change"],setup(e,{emit:a,slots:c}){const f=J(!1),s=J([]),u=I(()=>{const{columnsFieldNames:t}=e;return{text:(t==null?void 0:t.text)||e.valueKey||"text",values:(t==null?void 0:t.values)||"values",children:(t==null?void 0:t.children)||"children"}}),{children:h,linkChildren:b}=xe(Te);b();const k=I(()=>Ne(e.itemHeight)),n=I(()=>{const t=e.columns[0];if(typeof t=="object"){if(u.value.children in t)return"cascade";if(u.value.values in t)return"object"}return"plain"}),p=()=>{var t;const l=[];let m={[u.value.children]:e.columns};for(;m&&m[u.value.children];){const P=m[u.value.children];let M=(t=m.defaultIndex)!=null?t:+e.defaultIndex;for(;P[M]&&P[M].disabled;)if(M<P.length-1)M++;else{M=0;break}l.push({[u.value.values]:m[u.value.children],className:m.className,defaultIndex:M}),m=P[M]}s.value=l},v=()=>{const{columns:t}=e;n.value==="plain"?s.value=[{[u.value.values]:t}]:n.value==="cascade"?p():s.value=t,f.value=s.value.some(l=>l[u.value.values]&&l[u.value.values].length!==0)||h.some(l=>l.hasOptions)},g=()=>h.map(t=>t.state.index),F=(t,l)=>{const m=h[t];m&&(m.setOptions(l),f.value=!0)},r=t=>{let l={[u.value.children]:e.columns};const m=g();for(let P=0;P<=t;P++)l=l[u.value.children][m[P]];for(;l&&l[u.value.children];)t++,F(t,l[u.value.children]),l=l[u.value.children][l.defaultIndex||0]},x=t=>h[t],O=t=>{const l=x(t);if(l)return l.getValue()},S=(t,l)=>{const m=x(t);m&&(m.setValue(l),n.value==="cascade"&&r(t))},V=t=>{const l=x(t);if(l)return l.state.index},R=(t,l)=>{const m=x(t);m&&(m.setIndex(l),n.value==="cascade"&&r(t))},L=t=>{const l=x(t);if(l)return l.state.options},E=()=>h.map(t=>t.getValue()),X=t=>{t.forEach((l,m)=>{S(m,l)})},U=t=>{t.forEach((l,m)=>{R(m,l)})},A=t=>{n.value==="plain"?a(t,O(0),V(0)):a(t,E(),g())},Z=t=>{n.value==="cascade"&&r(t),n.value==="plain"?a("change",O(0),V(0)):a("change",E(),t)},z=()=>{h.forEach(t=>t.stopMomentum()),A("confirm")},ee=()=>A("cancel"),o=()=>{if(c.title)return c.title();if(e.title)return i("div",{class:[w("title"),"van-ellipsis"]},[e.title])},d=()=>{const t=e.cancelButtonText||ge("cancel");return i("button",{type:"button",class:[w("cancel"),ie],onClick:ee},[c.cancel?c.cancel():t])},C=()=>{const t=e.confirmButtonText||ge("confirm");return i("button",{type:"button",class:[w("confirm"),ie],onClick:z},[c.confirm?c.confirm():t])},_=()=>{if(e.showToolbar){const t=c.toolbar||c.default;return i("div",{class:w("toolbar")},[t?t():[d(),o(),C()]])}},K=()=>s.value.map((t,l)=>{var m;return i(We,{textKey:u.value.text,readonly:e.readonly,allowHtml:e.allowHtml,className:t.className,itemHeight:k.value,defaultIndex:(m=t.defaultIndex)!=null?m:+e.defaultIndex,swipeDuration:e.swipeDuration,initialOptions:t[u.value.values],visibleItemCount:e.visibleItemCount,onChange:()=>Z(l)},{option:c.option})}),te=t=>{if(f.value){const l={height:`${k.value}px`},m={backgroundSize:`100% ${(t-k.value)/2}px`};return[i("div",{class:w("mask"),style:m},null),i("div",{class:[Re,w("frame")],style:l},null)]}},ne=()=>{const t=k.value*+e.visibleItemCount,l={height:`${t}px`};return i("div",{class:w("columns"),style:l,onTouchmove:ke},[K(),te(t)])};return j(()=>e.columns,v,{immediate:!0}),ye({confirm:z,getValues:E,setValues:X,getIndexes:g,setIndexes:U,getColumnIndex:V,setColumnIndex:R,getColumnValue:O,setColumnValue:S,getColumnValues:L,setColumnValues:F}),()=>{var t,l;return i("div",{class:w()},[e.toolbarPosition==="top"?_():null,e.loading?i(He,{class:w("loading")},null):null,(t=c["columns-top"])==null?void 0:t.call(c),ne(),(l=c["columns-bottom"])==null?void 0:l.call(c),e.toolbarPosition==="bottom"?_():null])}}});const nt=se(tt),[Me,at]=Q("radio-group"),ot={disabled:Boolean,iconSize:$,direction:String,modelValue:Y,checkedColor:String},Ve=Symbol(Me);var lt=H({name:Me,props:ot,emits:["change","update:modelValue"],setup(e,{emit:a,slots:c}){const{linkChildren:f}=xe(Ve),s=u=>a("update:modelValue",u);return j(()=>e.modelValue,u=>a("change",u)),f({props:e,updateValue:s}),Le(()=>e.modelValue),()=>{var u;return i("div",{class:at([e.direction]),role:"radiogroup"},[(u=c.default)==null?void 0:u.call(c)])}}});const ut=se(lt),Ie={name:Y,shape:we("round"),disabled:Boolean,iconSize:$,modelValue:Y,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var st=H({props:_e({},Ie,{bem:N(Function),role:String,parent:Object,checked:Boolean,bindGroup:pe}),emits:["click","toggle"],setup(e,{emit:a,slots:c}){const f=J(),s=v=>{if(e.parent&&e.bindGroup)return e.parent.props[v]},u=I(()=>s("disabled")||e.disabled),h=I(()=>s("direction")),b=I(()=>{const v=e.checkedColor||s("checkedColor");if(v&&e.checked&&!u.value)return{borderColor:v,backgroundColor:v}}),k=v=>{const{target:g}=v,F=f.value,r=F===g||(F==null?void 0:F.contains(g));!u.value&&(r||!e.labelDisabled)&&a("toggle"),a("click",v)},n=()=>{const{bem:v,shape:g,checked:F}=e,r=e.iconSize||s("iconSize");return i("div",{ref:f,class:v("icon",[g,{disabled:u.value,checked:F}]),style:{fontSize:Ae(r)}},[c.icon?c.icon({checked:F,disabled:u.value}):i(Ue,{name:"success",style:b.value},null)])},p=()=>{if(c.default)return i("span",{class:e.bem("label",[e.labelPosition,{disabled:u.value}])},[c.default()])};return()=>{const v=e.labelPosition==="left"?[p(),n()]:[n(),p()];return i("div",{role:e.role,class:e.bem([{disabled:u.value,"label-disabled":e.labelDisabled},h.value]),tabindex:u.value?void 0:0,"aria-checked":e.checked,onClick:k},[v])}}});const[it,rt]=Q("radio");var ct=H({name:it,props:Ie,emits:["update:modelValue"],setup(e,{emit:a,slots:c}){const{parent:f}=Fe(Ve),s=()=>(f?f.props.modelValue:e.modelValue)===e.name,u=()=>{f?f.updateValue(e.name):a("update:modelValue",e.name)};return()=>i(st,Ke({bem:rt,role:"radio",parent:f,checked:s(),onToggle:u},e),ze(c,["default","icon"]))}});const dt=se(ct);const mt={name:"Peak-rate",components:{vanField:$e,vanCellGroup:Je,vanRadioGroup:ut,vanRadio:dt,vanPicker:nt,vanPopup:Ye,vanCell:je,PageHeader:Oe},data(){return{type:"up",layer:"1",showLayerPicker:!1,module:"7.40624",bandwidth:273,bandwidthOpts:[{key:"100M",value:273},{key:"90M",value:245},{key:"80M",value:217},{key:"70M",value:189},{key:"60M",value:162},{key:"50M",value:133},{key:"40M",value:106},{key:"30M",value:78},{key:"20M",value:51},{key:"15M",value:38},{key:"10M",value:24}],frame:1,frameOpt:[{key:"2.5ms\u5355\uFF0811\uFF0C1\uFF0C2\uFF09",value:1,up:6400,down:21200},{key:"2.5ms\u5355\uFF0810\uFF0C2\uFF0C2\uFF09",value:2,up:6400,down:20800},{key:"2.5ms\u53CC\uFF0811\uFF0C1\uFF0C2\uFF09",value:3,up:9200,down:18400},{key:"2.5ms\u53CC\uFF0810\uFF0C2\uFF0C2\uFF09",value:4,up:9200,down:18e3},{key:"2ms\u5355\uFF0811\uFF0C1\uFF0C2\uFF09",value:5,up:8e3,down:19500},{key:"2ms\u5355\uFF0810\uFF0C2\uFF0C2\uFF09",value:6,up:8e3,down:19e3},{key:"5ms\u5355\uFF0811\uFF0C1\uFF0C2\uFF09",value:7,up:6e3,down:21800},{key:"5ms\u5355\uFF0810\uFF0C2\uFF0C2\uFF09",value:8,up:6e3,down:21600},{key:"5ms\u5355\uFF086\uFF0C4\uFF0C4\uFF09",value:9,up:6400,down:20800}]}},computed:{layerColumns(){return this.type=="up"?[1,2]:[1,2,3,4]},oh(){return this.type=="up"?.08:.14},finalResult(){var e=this.result;if(e===0)return"0 B";var a=1024,c=["bps","Kbps","Mbps","Gbps","Tbps","Pbps","Ebps","Zbps","Ybps"],f=Math.floor(Math.log(e)/Math.log(a));return(e/Math.pow(a,f)).toFixed(3)+" "+c[f]},result(){var e;for(let a=0;a<this.frameOpt.length;a++)if(this.frameOpt[a].value==this.frame){e=this.frameOpt[a];break}return window.console.log(`${this.layer}, ${this.module}, ${this.bandwidth}, ${e[this.type]}, ${this.oh}, `),this.layer*this.module*this.bandwidth*12*e[this.type]*(1-this.oh)}},methods:{onLayerConfirm(e){this.layer=e,this.showLayerPicker=!1},roundUp(e){return e<0?Math.floor(e):Math.floor(e)==e?e:Math.floor(e)+1}}},ft={class:"peak-rate"},vt=W("\u4E0A\u884C"),ht=W("\u4E0B\u884C"),bt=W("256"),gt=W("64"),Ct=["value"],Ft=["value"];function yt(e,a,c,f,s,u){const h=T("page-header"),b=T("van-radio"),k=T("van-radio-group"),n=T("van-field"),p=T("van-picker"),v=T("van-popup"),g=T("van-cell"),F=T("van-cell-group");return D(),B("div",ft,[i(h,{backUrl:"grid",title:"\u5CF0\u503C\u901F\u7387"}),i(F,{title:"\u914D\u7F6E\u53C2\u6570",class:"settings"},{default:y(()=>[i(n,{name:"type",label:"\u6A21\u5F0F"},{"right-icon":y(()=>[i(k,{modelValue:s.type,"onUpdate:modelValue":a[0]||(a[0]=r=>s.type=r),direction:"horizontal"},{default:y(()=>[i(b,{name:"up"},{default:y(()=>[vt]),_:1}),i(b,{name:"down"},{default:y(()=>[ht]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(n,{readonly:"",clickable:"",name:"layer",value:s.layer,label:"\u5C42\u6570",placeholder:"\u70B9\u51FB\u9009\u62E9\u5C42\u6570",onClick:a[1]||(a[1]=r=>s.showLayerPicker=!0)},null,8,["value"]),i(v,{modelValue:s.showLayerPicker,"onUpdate:modelValue":a[3]||(a[3]=r=>s.showLayerPicker=r),position:"bottom"},{default:y(()=>[i(p,{"show-toolbar":"",columns:u.layerColumns,onConfirm:u.onLayerConfirm,onCancel:a[2]||(a[2]=r=>s.showLayerPicker=!1)},null,8,["columns","onConfirm"])]),_:1},8,["modelValue"]),i(n,{name:"module",label:"\u8C03\u5236\u65B9\u6CD5"},{"right-icon":y(()=>[i(k,{modelValue:s.module,"onUpdate:modelValue":a[4]||(a[4]=r=>s.module=r),direction:"horizontal"},{default:y(()=>[i(b,{name:"7.40624"},{default:y(()=>[bt]),_:1}),i(b,{name:"5.55468"},{default:y(()=>[gt]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(g,{title:"\u5E26\u5BBD",value:s.bandwidth},{default:y(()=>[re(de("select",{name:"bandwidth","onUpdate:modelValue":a[5]||(a[5]=r=>s.bandwidth=r),class:"form-control"},[(D(!0),B(me,null,fe(s.bandwidthOpts,r=>(D(),B("option",{key:r.value,value:r.value},ve(r.key),9,Ct))),128))],512),[[ce,s.bandwidth]])]),_:1},8,["value"]),i(g,{title:"\u5E27\u7ED3\u6784",value:s.frame},{default:y(()=>[re(de("select",{name:"frame","onUpdate:modelValue":a[6]||(a[6]=r=>s.frame=r),class:"form-control"},[(D(!0),B(me,null,fe(s.frameOpt,r=>(D(),B("option",{key:r.value,value:r.value},ve(r.key),9,Ft))),128))],512),[[ce,s.frame]])]),_:1},8,["value"])]),_:1}),i(F,{title:"\u8F93\u51FA",class:"output-container"},{default:y(()=>[i(g,{title:"\u5CF0\u503C\u901F\u7387",value:u.finalResult,class:"finalResult"},null,8,["value"])]),_:1})])}var wt=Ge(mt,[["render",yt]]);export{wt as default};

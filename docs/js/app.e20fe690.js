(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/drinkbar_form/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"1d8e":function(t,e,n){},"223a":function(t,e,n){"use strict";var a=n("b03b"),r=n.n(a);r.a},"367b":function(t,e,n){},"4ec5":function(t,e,n){},6860:function(t,e,n){},8220:function(t,e,n){},"85ec":function(t,e,n){},"8baf":function(t,e,n){"use strict";var a=n("6860"),r=n.n(a);r.a},"9f19":function(t,e,n){t.exports=n.p+"img/cafe.b75170b3.jpg"},b03b:function(t,e,n){},b787:function(t,e,n){"use strict";var a=n("8220"),r=n.n(a);r.a},bb56:function(t,e,n){},be07:function(t,e,n){"use strict";var a=n("1d8e"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("main",{staticClass:"mt-9"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"9"}},[n("h1",{staticClass:"text-center"},[t._v("10°DrinkBar")]),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8"}},[n("h3",{staticClass:"text-center mt-4"},[t._v("ご使用方法")])]),n("ol",[n("li",{staticClass:"mb-2"},[t._v("チェックボックスをタップするとカートに商品が入ります")]),n("li",{staticClass:"mb-2"},[t._v("カートを確認の上、注文ボタンを押してください")]),n("li",[t._v("ご注文後のキャンセルはお早めにラインにてご連絡ください。")])])],1),n("p")],1)],1),n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-tabs",{attrs:{grow:"",color:"white"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.menus,(function(e){return n("v-tab",{key:e},[t._v(t._s(e))])})),1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("Drinks",{on:{addDrink:t.addDrink}})],1)],1)],1)],1)],1)],1)],1),n("Cart",{attrs:{drinksProp:t.drinks},on:{err:t.catchErr}})],1),n("Footer")],1)},s=[],i=n("9ab4"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("v-card",{attrs:{width:"100%"}},[a("v-app-bar",{attrs:{absolute:"",color:"#fcb69f",dark:"","shrink-on-scroll":"",src:n("9f19"),"scroll-target":"#scrolling-techniques-2"},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[a("v-img",t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])},[a("v-toolbar-title",[t._v("10°CAFE DrinkBar")]),a("v-spacer")],1),a("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-2","max-height":"600"}},[a("v-container",{staticStyle:{height:"130px"}})],1)],1)],1)},c=[],l={},u=l,d=(n("8baf"),n("b787"),n("2877")),f=n("6544"),v=n.n(f),p=n("40dc"),b=n("b0af"),m=n("a523"),h=n("adda"),g=n("8dd9"),k=n("2fa4"),y=n("2a7f"),_=Object(d["a"])(u,o,c,!1,null,"6f28eb32",null),x=_.exports;v()(_,{VAppBar:p["a"],VCard:b["a"],VContainer:m["a"],VImg:h["a"],VSheet:g["a"],VSpacer:k["a"],VToolbarTitle:y["a"]});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"text-center contact"},[n("strong",[t._v("Contact info")]),n("p",[t._v("03-6912-6109")]),n("p",[t._v("10docafe@gmail.com")]),n("a",{attrs:{href:"https://twitter.com/10docafe",target:"_blank"}},[n("v-icon",{staticClass:"twitter",attrs:{color:"#55acee",size:"70px"}},[t._v("mdi-twitter")])],1),n("a",{attrs:{href:"https://www.instagram.com/10docafe",target:"_blank"}},[n("v-icon",{staticClass:"instagram",attrs:{color:"#d93177",size:"70px"}},[t._v("mdi-instagram")])],1),n("hr",{staticClass:"socket"}),n("span",[t._v("©10°CAFE All Rights Reserved.")])])])],1)],1)},C=[],V={},j=V,O=(n("cee6"),n("62ad")),S=n("132d"),I=n("0fd9"),A=Object(d["a"])(j,w,C,!1,null,"45ea31b4",null),E=A.exports;v()(A,{VCol:O["a"],VIcon:S["a"],VRow:I["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",t._l(t.drinks,(function(e){return n("v-list-group",{key:e.genre,attrs:{"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.genre)}})],1)]},proxy:!0}],null,!0)},t._l(e.data,(function(e){return n("v-list-item",{key:e.name},[n("v-list-item-content",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"d-flex flex-row align-center",attrs:{cols:"8"}},[n("v-row",{attrs:{justify:"center"}},[n("h4",{staticClass:"pt-3"},[t._v(t._s(e.name))])])],1),n("v-row",{attrs:{justify:"center"}},[n("v-row",{staticClass:"pt-3",attrs:{justify:"center"}},[n("v-btn",{on:{click:function(n){return t.addItem(e.name)}}},[t._v("追加")])],1)],1)],1)],1)],1)})),1)})),1)},T=[],D=[{name:"Hコーヒー"},{name:"Iコーヒー"},{name:"Hカフェラテ"},{name:"Iカフェラテ"},{name:"Hカフェオレ"},{name:"Iカフェオレ"},{name:"Hアメリカーノ"},{name:"Iアメリカーノ"}],H=[{name:"Hストレートティー"},{name:"Iストレートティー"},{name:"Hミルクティー"},{name:"Iミルクティー"},{name:"Hレモンティー"},{name:"Iレモンティー"}],L=[{name:"Iほうじ茶ラテ"},{name:"Hほうじ茶ラテ"},{name:"Hレモネード"},{name:"Iレモネード"}],R=[{name:"オレンジジュース"}],B=[{name:"メロンソーダ"}],$=[{genre:"COFFEE",data:D},{genre:"TEA",data:H},{genre:"OTHERS",data:L},{genre:"SOFT DRINKS",data:R},{genre:"SPECIALTY",data:B}],z=a["a"].extend({name:"Drink",data:function(){return{drinks:$,selected:""}},methods:{addItem:function(t,e){this.$emit("addDrink",{name:t,price:e})}}}),M=z,F=(n("dec4"),n("8336")),J=n("8860"),N=n("56b0"),q=n("da13"),K=n("5d23"),Q=Object(d["a"])(M,P,T,!1,null,null,null),U=Q.exports;v()(Q,{VBtn:F["a"],VCol:O["a"],VList:J["a"],VListGroup:N["a"],VListItem:q["a"],VListItemContent:K["a"],VListItemTitle:K["b"],VRow:I["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-card-title",[n("v-row",{attrs:{justify:"center"}},[n("h3",[t._v("注文内容")])])],1),t.drinks.length>0?n("v-card-text",{attrs:{c:""}},[[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"}),n("th",{staticClass:"text-left"},[t._v("商品")]),n("th",{staticClass:"text-left"},[t._v("値段")])])]),n("tbody",t._l(t.drinks,(function(e,a){return n("tr",{key:a},[n("v-btn",{staticClass:"pt-3",attrs:{icon:""},on:{click:function(e){return t.deleteItem(a,"drink")}}},[n("v-icon",[t._v("mdi-delete")])],1),n("td",[t._v(t._s(e.name))]),n("td",[t._v("0")])],1)})),0)]},proxy:!0}],null,!1,101072025)})]],2):t._e(),t.drinks.length<=0?[n("v-row",{attrs:{justify:"center"}},[n("h4",[t._v("注文内容はありません。")])])]:t._e(),t.drinks.length>0?[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"}),n("th",{staticClass:"text-left"}),n("th",{staticClass:"text-left"})])]),n("tbody",[n("tr",[n("td"),n("td",[t._v("合計")]),n("td",[t._v("0")])])])]},proxy:!0}],null,!1,149508315)})]:t._e(),t.drinks.length>0?n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"8",sm:"6"}},[n("v-select",{attrs:{items:t.seats,outlined:"",label:"席番号(ビラに書いてあります)"},model:{value:t.selectedSeat,callback:function(e){t.selectedSeat=e},expression:"selectedSeat"}})],1)],1):t._e(),n("v-card-actions",[t.drinks.length>0&&t.selectedSeat.length>0?n("v-row",{attrs:{justify:"center"}},[n("Dialog",{on:{doOrder:t.doOrder}})],1):t._e()],1)],2)],1)],1),t._v(" "+t._s(t.name)+" ")],1)},Y=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-btn",{on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v("注文する")]),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-text",[n("v-row",{staticClass:"pt-4",attrs:{justify:"center"}},[n("h3",[t._v("注文してよろしいですか？")])])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("戻る")]),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.decideOrder}},[t._v("はい")])],1)],1)],1)],1)},X=[],Z=a["a"].extend({name:"Dialog",data:function(){return{dialog:!1}},methods:{decideOrder:function(){this.$emit("doOrder"),this.dialog=!1}}}),tt=Z,et=n("99d9"),nt=n("169a"),at=Object(d["a"])(tt,G,X,!1,null,"7a7c5040",null),rt=at.exports;v()(at,{VBtn:F["a"],VCard:b["a"],VCardActions:et["a"],VCardText:et["b"],VDialog:nt["a"],VRow:I["a"],VSpacer:k["a"]});var st=n("fd32"),it=n.n(st),ot={type:"flex",altText:"ドリンクバー注文",contents:{type:"bubble",header:{type:"box",layout:"horizontal",contents:[{type:"text",text:"ご注文内容",size:"sm",weight:"bold",color:"#AAAAAA"},{type:"separator"}]},body:{type:"box",layout:"vertical",spacing:"md",contents:[{type:"box",layout:"vertical",contents:[{type:"text",text:"ドリンクメニュー",size:"sm",weight:"bold",gravity:"top"}]}]}}},ct=n("bc3a"),lt=n.n(ct),ut=a["a"].extend({name:"Cart",components:{Dialog:rt},props:{drinksProp:{type:Array}},data:function(){return{drinks:this.drinksProp,mainPrice:0,sidesPrice:0,drinkPrice:0,name:"",seats:["1","2","3","4","5","6","7","8","9","10","A1","A2","A3","A4","A5","A6","A7","A8","B1","B2","B3","B4","C1","C2","D1","D2","E1","E2","F1"],selectedSeat:""}},watch:{drinks:function(){var t=this;this.drinkPrice=0,this.drinks.forEach((function(e){t.drinkPrice+=e.price}))}},computed:{total:function(){return this.drinkPrice}},methods:{createMsg:function(t){ot.contents.header.contents[0].text="ご注文内容("+this.selectedSeat+")",t.item.drink.length>0&&t.item.drink.forEach((function(t){var e,n={type:"text",text:t.name,size:"xs",gravity:"top",weight:"regular"};null===(e=ot.contents.body.contents[0].contents)||void 0===e||e.push(n)}))},sendMessages:function(t){return Object(i["a"])(this,void 0,void 0,(function(){var e,n,a,r,s=this;return Object(i["b"])(this,(function(i){switch(i.label){case 0:return this.createMsg(t),console.log(ot),[4,it.a.sendMessages([JSON.parse(JSON.stringify(ot))]).then((function(){it.a.closeWindow(),console.log("message sent")})).catch((function(t){s.$emit("err",t),console.log("error",t)}))];case 1:return i.sent(),e=it.a.getIDToken(),n="https://script.google.com/macros/s/AKfycbwEralJ8lY_5ErR2rkE8e3Q38xH3aI1WH6ASbqXpQkoE_4E9qU/exec",a=new URLSearchParams,r=this.drinks.map((function(t){return t.name})),a.append("token",e),a.append("drinks",JSON.stringify(r)),[4,lt.a.post(n,a).catch((function(t){return console.log(t)}))];case 2:return i.sent(),[2]}}))}))},doOrder:function(){var t={price:this.total,item:{drink:this.drinks}};this.sendMessages(t)},deleteItem:function(t,e){"drink"===e&&this.drinks.splice(t,1)}}}),dt=ut,ft=(n("223a"),n("be07"),n("b974")),vt=n("1f4f"),pt=Object(d["a"])(dt,W,Y,!1,null,"780f435e",null),bt=pt.exports;v()(pt,{VBtn:F["a"],VCard:b["a"],VCardActions:et["a"],VCardText:et["b"],VCardTitle:et["c"],VCol:O["a"],VContainer:m["a"],VIcon:S["a"],VRow:I["a"],VSelect:ft["a"],VSimpleTable:vt["a"]});var mt=a["a"].extend({name:"App",components:{Header:x,Footer:E,Drinks:U,Cart:bt},data:function(){return{tab:"tab",menus:["DRINK"],drinks:[],loggedIn:!1,inClient:!1,apiLoading:!1}},created:function(){return Object(i["a"])(this,void 0,void 0,(function(){return Object(i["b"])(this,(function(t){switch(t.label){case 0:return[4,this.initializeLiff()];case 1:return t.sent(),[2]}}))}))},methods:{initializeLiff:function(){return Object(i["a"])(this,void 0,Promise,(function(){var t;return Object(i["b"])(this,(function(e){switch(e.label){case 0:this.apiLoading=!0,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,it.a.init({liffId:"1654570764-zyxPpadK"})];case 2:return e.sent(),this.apiLoading=!1,[3,4];case 3:throw t=e.sent(),new Error(t);case 4:return[2]}}))}))},addDrink:function(t){this.drinks.push(t)},catchErr:function(t){alert("エラーが発生いたしました。\n      もう一度ご注文をお願い致します。\n      "+t)}}}),ht=mt,gt=(n("034f"),n("cdd4"),n("7496")),kt=n("71a3"),yt=n("c671"),_t=n("fe57"),xt=n("aac8"),wt=Object(d["a"])(ht,r,s,!1,null,"5013f52e",null),Ct=wt.exports;v()(wt,{VApp:gt["a"],VCard:b["a"],VCol:O["a"],VContainer:m["a"],VRow:I["a"],VTab:kt["a"],VTabItem:yt["a"],VTabs:_t["a"],VTabsItems:xt["a"]});var Vt=n("2f62");a["a"].use(Vt["a"]);var jt=new Vt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ot=n("f309");a["a"].use(Ot["a"]);var St=new Ot["a"]({});a["a"].config.productionTip=!1,new a["a"]({store:jt,vuetify:St,render:function(t){return t(Ct)}}).$mount("#app")},cdd4:function(t,e,n){"use strict";var a=n("bb56"),r=n.n(a);r.a},cee6:function(t,e,n){"use strict";var a=n("367b"),r=n.n(a);r.a},dec4:function(t,e,n){"use strict";var a=n("4ec5"),r=n.n(a);r.a}});
//# sourceMappingURL=app.e20fe690.js.map
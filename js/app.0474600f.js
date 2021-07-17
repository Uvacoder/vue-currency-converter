(function(e){function t(t){for(var o,u,c=t[0],i=t[1],l=t[2],s=0,b=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a69c1df8"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-currency-converter/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},b29b:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},a=[],u=n("d4ec"),c=n("262e"),i=n("2caf"),l=n("9ab4"),s=n("1b40"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"bg-white shadow"},[n("nav",{staticClass:"container mx-auto px-3 py-3"},[n("router-link",{staticClass:"mx-2",attrs:{to:"/"}},[e._v("Home")]),n("router-link",{staticClass:"mx-2",attrs:{to:"/about"}},[e._v("About")])],1)])},b=[],m=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return n}(s["d"]);m=Object(l["a"])([s["a"]],m);var p=m,y=p,v=n("2877"),f=Object(v["a"])(y,d,b,!1,null,null,null),h=f.exports,j=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return n}(s["d"]);j=Object(l["a"])([Object(s["a"])({components:{Header:h}})],j);var O=j,g=O,S=Object(v["a"])(g,r,a,!1,null,null,null),C=S.exports,A=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container mx-auto"},[e.symbols&&e.currencyValue?n("CurrencyConverter",{attrs:{symbols:e.symbols,currencyValue:e.currencyValue}}):e._e()],1)},w=[],x=n("bee2"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("CurrencySelector",{attrs:{amount:e.originAmount,selectedSymbol:e.originSymbolCode,symbols:e.symbols},on:{"update:amount":function(t){return e.updateAmountAndConvert(t,"origin")},"update:selectedSymbol":function(t){return e.updateSymbolCodeAndConvert(t,"origin")}}}),n("CurrencySelector",{attrs:{amount:e.destinationAmount,selectedSymbol:e.destinationSymbolCode,symbols:e.symbols},on:{"update:amount":function(t){return e.updateAmountAndConvert(t,"destination")},"update:selectedSymbol":function(t){return e.updateSymbolCodeAndConvert(t,"destination")}}})],1)},E=[],P=(n("98db"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.syncedSelectedSymbol,expression:"syncedSelectedSymbol"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.syncedSelectedSymbol=t.target.multiple?n:n[0]}}},e._l(e.symbols,(function(t){return n("option",{key:t.code,domProps:{value:t.code}},[e._v(" "+e._s(t.description)+" ")])})),0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.syncedAmount,expression:"syncedAmount"}],attrs:{type:"number"},domProps:{value:e.syncedAmount},on:{input:function(t){t.target.composing||(e.syncedAmount=t.target.value)}}})])}),V=[],T=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return n}(s["d"]);Object(l["a"])([Object(s["b"])()],T.prototype,"symbols",void 0),Object(l["a"])([Object(s["c"])("amount")],T.prototype,"syncedAmount",void 0),Object(l["a"])([Object(s["c"])("selectedSymbol")],T.prototype,"syncedSelectedSymbol",void 0),T=Object(l["a"])([s["a"]],T);var $=T,M=$,R=Object(v["a"])(M,P,V,!1,null,null,null),H=R.exports,L=function(){function e(){Object(u["a"])(this,e)}return Object(x["a"])(e,null,[{key:"calculateRateToEuro",value:function(e,t){return t/e}},{key:"calculateRateFromEuro",value:function(e,t){return t*e}},{key:"convert",value:function(t,n,o,r){var a=t.rates[n],u=t.rates[o];if(n!==t.base){var c=e.calculateRateToEuro(a,r);return e.convert(t,t.base,o,c)}var i=e.calculateRateFromEuro(u,r);return Math.round(100*i)/100}}]),e}(),F=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.originAmount=0,e.destinationAmount=0,e.originSymbolCode="",e.destinationSymbolCode="",e}return Object(x["a"])(n,[{key:"created",value:function(){this.originSymbolCode=this.symbols["EUR"].code,this.destinationSymbolCode=this.symbols["USD"].code,this.originAmount=1,this.convert("origin")}},{key:"updateAmountAndConvert",value:function(e,t){"origin"===t?this.originAmount=e:this.destinationAmount=e,this.convert(t)}},{key:"updateSymbolCodeAndConvert",value:function(e,t){"origin"===t?this.originSymbolCode=e:this.destinationSymbolCode=e,this.convert("origin")}},{key:"convert",value:function(e){"origin"===e?this.destinationAmount=L.convert(this.currencyValue,this.originSymbolCode,this.destinationSymbolCode,this.originAmount):this.originAmount=L.convert(this.currencyValue,this.destinationSymbolCode,this.originSymbolCode,this.destinationAmount)}}]),n}(s["d"]);Object(l["a"])([Object(s["b"])()],F.prototype,"symbols",void 0),Object(l["a"])([Object(s["b"])()],F.prototype,"currencyValue",void 0),F=Object(l["a"])([Object(s["a"])({components:{CurrencySelector:H}})],F);var J=F,N=J,U=Object(v["a"])(N,k,E,!1,null,null,null),q=U.exports,D=n("bc3a"),z=n.n(D),B="https://api.exchangerate.host",G="".concat(B,"/symbols"),I=function(){return z.a.get(G)},K="".concat(B,"/latest"),Q=function(){return z.a.get(K)},W={getSymbols:I,getLatest:Q},X=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.symbols=null,e.currencyValue=null,e}return Object(x["a"])(n,[{key:"created",value:function(){var e=this;W.getSymbols().then((function(t){e.symbols=t.data.symbols})),W.getLatest().then((function(t){e.currencyValue=t.data}))}}]),n}(s["d"]);X=Object(l["a"])([Object(s["a"])({components:{CurrencyConverter:q}})],X);var Y=X,Z=Y,ee=Object(v["a"])(Z,_,w,!1,null,null,null),te=ee.exports;o["a"].use(A["a"]);var ne=[{path:"/",name:"Home",component:te},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],oe=new A["a"]({mode:"history",base:"/vue-currency-converter/",routes:ne}),re=oe;n("b29b");o["a"].config.productionTip=!1,new o["a"]({router:re,render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.0474600f.js.map
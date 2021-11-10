/*! For license information please see main.51f83a43.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-ts-app"]=this["webpackJsonpreact-ts-app"]||[]).push([[0],{250:function(e,t,n){"use strict";(function(e){function c(e){var t=[];return e.forEach((function(e){return t.push(e)})),t}n.d(t,"a",(function(){return c}))}).call(this,n(23).Buffer)},284:function(e,t){},286:function(e,t){},296:function(e,t){},298:function(e,t){},325:function(e,t){},326:function(e,t){},331:function(e,t){},333:function(e,t){},340:function(e,t){},359:function(e,t){},487:function(e,t,n){},488:function(e,t,n){"use strict";n.r(t);var c,r,o,a,i,s=n(46),u=n.n(s),l=n(21),p=n(17),j=n(26),d=n(559),b=n(0),f=n.n(b),h=function(){return Object(l.c)()},O=l.d,m=n(34),x=n.n(m),g=n(52),v=n(25),y=["welcomePage","count","spinLogo","bitcoin","configPage","siteMap","helpPage"],S={openMenu:!1,component:void 0},w=Object(v.c)({name:"app",initialState:S,reducers:{setOpenMenu:function(e,t){e.openMenu=t.payload},setComponent:function(e,t){e.component=t.payload},parseJSON:function(e,t){e.component=y[0],JSON.parse(t.payload,(function(t,n){"openMenu"===t&&"boolean"===typeof n?e.openMenu=n:"component"===t&&y.find((function(e){return e===n}))&&(e.component=n)}))}}}),C=w.actions,k=w.reducer,L=n(62),P=function(){var e=Object(g.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){setTimeout((function(){Math.random()<t/100&&e(!0),c(new Error)}),1e3*n)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=Object(v.b)("lastcount/fetch",function(){var e=Object(g.a)(x.a.mark((function e(t,n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(N.setProgress(!0)),e.next=3,P(t.percent,t.second).catch((function(){return!1}));case 3:if(c=e.sent,n.dispatch(N.setProgress(!1)),!c){e.next=7;break}return e.abrupt("return",{count:t.value});case 7:throw new Error("fetch count error");case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),E=M,z=Object(v.c)({name:"count",initialState:{message:"",progress:!1,count:0,percent:50},reducers:{setShowingPercent:function(e,t){e.percent=t.payload},setProgress:function(e,t){e.progress=t.payload},setMessasge:function(e,t){e.message=t.payload},setCount:function(e,t){e.count=t.payload},increment:function(e){e.count+=1},decrement:function(e){e.count-=1},incrementByAmount:function(e,t){e.count+=t.payload},parseJSON:function(e,t){JSON.parse(t.payload,(function(t,n){"count"===t&&"number"===typeof n?e.count=n:"percent"===t&&"number"===typeof n&&(e.percent=n)}))}},extraReducers:function(e){e.addCase(E.pending,(function(e,t){return Object(L.a)(Object(L.a)({},e),{},{message:"\u5224\u5b9a\u4e2d\u3067\u3059\u3002".concat(t.meta.arg.second,"\u79d2\u5f8c\u306b").concat(t.meta.arg.percent,"%\u306e\u78ba\u7387\u3067").concat(t.meta.arg.value,"\u5897\u3048\u307e\u3059\u3002")})})),e.addCase(E.fulfilled,(function(e,t){return Object(L.a)(Object(L.a)({},e),{},{count:e.count+t.payload.count,message:"\u5224\u5b9a\u306b\u6210\u529f\u3057\u307e\u3057\u305f\u3002".concat(t.payload.count,"\u5897\u3048\u307e\u3057\u305f\u3002")})})),e.addCase(E.rejected,(function(e){return Object(L.a)(Object(L.a)({},e),{},{message:"\u5224\u5b9a\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u30021\u6e1b\u308a\u307e\u3057\u305f\u3002",count:e.count-1})}))}}),N=z.actions,A=z.reducer,J=Object(v.c)({name:"spinLogo",initialState:{spin:!1,logoColor:"#61DAFB"},reducers:{setSpinLogo:function(e,t){e.spin=t.payload},setLogoColor:function(e,t){e.logoColor=t.payload},parseJSON:function(e,t){JSON.parse(t.payload,(function(t,n){"logoColor"===t&&"string"===typeof n?e.logoColor=n:"spin"===t&&"boolean"===typeof n&&(e.spin=n)}))}}}),B=J.actions,K=J.reducer,F="study-react/",I=["".concat(F,"appState"),"".concat(F,"countState"),"".concat(F,"spinLogoState")],W=Object(v.b)("localStorage/loadLocalStorage",function(){var e=Object(g.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:["".concat(F,"countState"),"".concat(F,"spinLogoState")].forEach((function(e){var t=localStorage.getItem(e);null!==t&&(e==="".concat(F,"countState")?n.dispatch(N.parseJSON(t)):e==="".concat(F,"spinLogoState")&&n.dispatch(B.parseJSON(t)))}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),T=Object(v.b)("localStorage/loadLocalStorage",function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.appState&&localStorage.setItem("".concat(F,"appState"),JSON.stringify(t.appState)),t.countState&&localStorage.setItem("".concat(F,"countState"),JSON.stringify(t.countState)),t.spinLogoState&&localStorage.setItem("".concat(F,"spinLogoState"),JSON.stringify(t.spinLogoState));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=Object(v.b)("localStorage/loadLocalStorage",Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.forEach((function(e){return localStorage.removeItem(e)}));case 1:case"end":return e.stop()}}),e)})))),R=Object(v.b)("localStorage/loadLocalStorage",function(){var e=Object(g.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.dispatch(C.setComponent(y[0])),I.forEach((function(e){var t=localStorage.getItem(e);t&&(e==="".concat(F,"appState")?n.dispatch(C.parseJSON(t)):e==="".concat(F,"countState")?n.dispatch(N.parseJSON(t)):e==="".concat(F,"spinLogoState")&&n.dispatch(B.parseJSON(t)))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),U=n(536),V=n(532),q=n(555),D=n(558),H=n(560),Q=n(552),X=n(529),Y=n(530),Z=n(531),$=n(533),_=n(534),ee=n(535),te=n(546),ne=n(549),ce=(j.a.div(c||(c=Object(p.a)(["\n\tcursor: pointer;\n\ttext-decoration: underline;\n\tdisplay: inline-block;\n"]))),j.a.div(r||(r=Object(p.a)(["\n\tborder-top: 1px solid black;\n"])))),re=(j.a.div(o||(o=Object(p.a)(["\n\ttext-align: center;\n\tjustify-content: center;\n\tdisplay: flex;\n"]))),j.a.p(a||(a=Object(p.a)(["\n\tword-break: break-word;\n"])))),oe=Object(j.a)(ne.a)(i||(i=Object(p.a)(["\n\tmargin: 30px auto;\n\ttext-align: left;\n\twidth: fit-content;\n"]))),ae=n(74),ie=n.n(ae),se=n(91),ue=n.n(se),le=Object(v.c)({name:"bitcoin",initialState:{publicKey:[],secretKey:[],bitcoinAddress:"",wif:""},reducers:{setPublicKey:function(e,t){e.publicKey=t.payload},setSecretKey:function(e,t){e.secretKey=t.payload},setWif:function(e,t){e.wif=t.payload},setBitcoinAddress:function(e,t){e.bitcoinAddress=t.payload}}}),pe=le.actions,je=le.reducer;function de(e){for(var t="",n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return t}var be="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",fe={ipfs:be,btc:be,xmr:be,flickr:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",xrp:"rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"};function he(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ipfs",c=n.toLowerCase();if(0===e.length)return"";if(t="string"===typeof e?"undefined"!==typeof TextEncoder?(new TextEncoder).encode(e):new Uint8Array(e.split("").map((function(e){return e.charCodeAt(0)}))):e,"xmr"===c){for(var r="",o=0;o<t.length+3;o+=8){var a=t.slice(o,o+8);r+=he(a).padStart(8===a.length?11:7,"1")}return r}if(!fe.hasOwnProperty(c))throw new Error("invalid type");for(var i=fe[c],s=BigInt("0x".concat(de(t))),u=[];s>0;){var l=Number(s%58n);s/=58n,u.push(i[l])}for(var p=0;0===t[p];p++)u.push(i[0]);return u.reverse().join("")}function Oe(e){return ie.a.createHash("sha256").update(e).digest()}function me(e){var t=new Uint8Array(e.length+4);return t.set(e),t.set(function(e){return Oe(Oe(e)).slice(0,4)}(e),e.length),he(t)}function xe(e){if(65!==e.length)throw new Error("publicKey is not 65 byte length Exception");var t,n=Oe(e),c=(t=n,ie.a.createHash("ripemd160").update(t).digest()),r=new Uint8Array(21);return r.set([0]),r.set(c,1),me(r)}var ge,ve,ye,Se,we=n(250),Ce=function(){var e=h();return Object(b.useCallback)((function(){var t,n=Object(ae.randomBytes)(32);do{t=Object(ae.randomBytes)(32)}while(!ue.a.privateKeyVerify(t));var c=ue.a.publicKeyCreate(t,!1),r=ue.a.ecdsaSign(n,t);ue.a.ecdsaVerify(r.signature,n,c)?(e(pe.setPublicKey(Object(we.a)(c))),e(pe.setBitcoinAddress(xe(c))),e(pe.setWif(function(e){var t=new Uint8Array(e.length+1);return t.set([128]),t.set(e,1),me(t)}(t)))):(e(pe.setPublicKey([])),e(pe.setBitcoinAddress("")),e(pe.setWif("")),pe.setBitcoinAddress("\u30a8\u30e9\u30fc\u767a\u751f"))}),[e])},ke=n(1),Le=function(){var e=O((function(e){return e}),l.b).bitcoinState;return Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsx)(te.a,{color:"secondary",onClick:Ce(),variant:"contained",children:"\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3\u30a2\u30c9\u30ec\u30b9\u751f\u6210"}),Object(ke.jsx)("p",{children:"\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3\u30a2\u30c9\u30ec\u30b9(BASE58(P2PKH)\u5f62\u5f0f)\uff1a"}),Object(ke.jsx)(re,{children:e.bitcoinAddress}),Object(ke.jsx)("p",{children:"\u79d8\u5bc6\u9375(WIF\u5f62\u5f0f)\uff1a"}),Object(ke.jsx)(re,{children:e.wif})]})},Pe=n(538),Me=n(550),Ee=n(544),ze=n(553),Ne=n(541),Ae=n(256),Je=/^#(?:[0-9a-fA-F]{3}){1,2}$/,Be=n(15),Ke=Object(j.a)(Pe.a)(ge||(ge=Object(p.a)(["\n\tmargin: 8px;\n"]))),Fe=Object(j.a)(Me.a)(ve||(ve=Object(p.a)(["\n\tmargin: 0;\n\tmax-height: unset;\n\tmax-width: unset;\n"]))),Ie=function(){var e,t=O((function(e){return e}),l.b),n=t.countState,c=t.spinLogoState,r=t.appState,o=h(),a=function(){var e=Object(b.useState)(!1),t=Object(Be.a)(e,2);return{showColorPicker:t[0],setShowColorPicker:t[1]}}(),i=a.showColorPicker,s=a.setShowColorPicker;return Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsx)(Q.a,{children:"\u8a2d\u5b9a"}),Object(ke.jsxs)(ce,{children:[Object(ke.jsx)(Q.a,{children:"\u30ed\u30b4\u307e\u308f\u3057"}),Object(ke.jsx)(Ke,{error:(e=c.logoColor,!Je.test(e)),label:"\u30ed\u30b4\u306e\u8272",onChange:function(e){return o(B.setLogoColor(e.currentTarget.value))},onClick:function(){return s(!0)},required:!0,type:"text",value:c.logoColor}),Object(ke.jsx)(Ee.a,{PaperComponent:Fe,onClose:function(){s(!1)},open:i,children:Object(ke.jsx)(Ae.a,{color:c.logoColor,onChange:function(e){return o(B.setLogoColor(e.hex))}})}),Object(ke.jsx)("br",{}),Object(ke.jsx)(ze.a,{control:Object(ke.jsx)(Ne.a,{checked:c.spin,onChange:function(e){return o(B.setSpinLogo(e.currentTarget.checked))}}),label:"\u307e\u308f\u3063\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u30d5\u30e9\u30b0"})]}),Object(ke.jsxs)(ce,{children:[Object(ke.jsx)(Q.a,{children:"\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7"}),Object(ke.jsx)(Ke,{label:"\u30ab\u30a6\u30f3\u30c8",onChange:function(e){return o(N.setCount(Number(e.currentTarget.value)))},required:!0,type:"number",value:n.count}),Object(ke.jsx)("br",{}),Object(ke.jsx)(Ke,{label:"\u30d1\u30fc\u30bb\u30f3\u30c8",onChange:function(e){return o(N.setShowingPercent(Number(e.currentTarget.value)))},required:!0,type:"number",value:n.percent})]}),Object(ke.jsxs)(ce,{children:[Object(ke.jsx)(Q.a,{children:"\u8a2d\u5b9a\u306e\u4fdd\u5b58\u3068\u5fa9\u5143"}),Object(ke.jsx)(te.a,{color:"primary",onClick:function(){return o(T({appState:r,spinLogoState:c,countState:n}))},variant:"contained",children:"\u8a2d\u5b9a\u306e\u4fdd\u5b58"}),Object(ke.jsx)("br",{}),Object(ke.jsx)(te.a,{color:"primary",onClick:function(){return o(W())},variant:"contained",children:"\u8a2d\u5b9a\u306e\u30ed\u30fc\u30c9"}),Object(ke.jsx)("br",{}),Object(ke.jsx)(te.a,{color:"error",onClick:function(){return o(G())},variant:"contained",children:"\u8a2d\u5b9a\u306e\u30af\u30ea\u30a2"})]})]})},We=n(542),Te=n(554),Ge=Object(j.a)(We.a)(ye||(ye=Object(p.a)(["\n\tmax-width: 50%;\n"]))),Re=function(){var e=O((function(e){return e}),l.b).countState,t=h();return Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsx)("p",{children:e.count}),Object(ke.jsxs)("p",{children:[Object(ke.jsx)(te.a,{color:"primary",onClick:function(){t(N.increment())},variant:"contained",children:"\u5897\u3084\u3059"}),Object(ke.jsx)(te.a,{color:"secondary",onClick:function(){t(N.decrement())},variant:"contained",children:"\u6e1b\u3089\u3059"})]}),Object(ke.jsxs)(Q.a,{id:"percent-slider-label",children:["\u78ba\u7387\uff1a",e.percent,"%"]}),Object(ke.jsx)(Ge,{"aria-labelledby":"percent-slider-label",disabled:e.progress,max:100,min:0,onChange:function(e,n){"number"===typeof n&&t(N.setShowingPercent(n))},value:e.percent,valueLabelDisplay:"off"}),Object(ke.jsx)("p",{children:Object(ke.jsx)(te.a,{color:"info",disabled:e.progress,onClick:function(){t(E({percent:e.percent,value:100,second:3}))},variant:"contained",children:"\u975e\u540c\u671f"})}),Object(ke.jsx)(Q.a,{color:"error",children:e.message}),e.progress&&Object(ke.jsx)(Te.a,{})]})},Ue=function(){return Object(ke.jsxs)(ke.Fragment,{children:["\u300c",Object(ke.jsx)("a",{href:"https://github.com/nishidemasami/study-react",children:"https://github.com/nishidemasami/study-react"}),"\u300d\u3092\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044"]})},Ve=n(556),qe=n(557),De=function(){var e=h();return Object(ke.jsx)(q.a,{sx:{flexGrow:1,overflow:"hidden",px:3},children:y.map((function(e){return{menu:e,site:it[e]}})).map((function(t){var n=t.menu,c=t.site;return Object(ke.jsxs)(oe,{sx:{minWidth:275,maxWidth:"75%",flexGrow:1,overflow:"hidden",px:3},children:[Object(ke.jsxs)(Ve.a,{children:[Object(ke.jsx)(Q.a,{color:"text.secondary",gutterBottom:!0,sx:{fontSize:14},children:"\u30da\u30fc\u30b8"}),Object(ke.jsxs)(Q.a,{component:"div",variant:"h5",children:[c.icon,c.name]}),Object(ke.jsx)(Q.a,{variant:"body2",children:c.description})]}),Object(ke.jsx)(qe.a,{children:Object(ke.jsx)(te.a,{onClick:function(){return e(C.setComponent(n))},onKeyPress:function(){return e(C.setComponent(n))},size:"small",children:"\u79fb\u52d5"})})]},c.name)}))})},He=n(50),Qe=["title","titleId"];function Xe(){return Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},Xe.apply(this,arguments)}function Ye(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ze(e,t){var n=e.title,c=e.titleId,r=Ye(e,Qe);return b.createElement("svg",Xe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",ref:t,"aria-labelledby":c},r),n?b.createElement("title",{id:c},n):null,Se||(Se=b.createElement("g",null,b.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),b.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),b.createElement("path",{d:"M520.5 78.1z"}))))}var $e,_e,et,tt,nt=b.forwardRef(Ze),ct=(n.p,Object(He.c)($e||($e=Object(p.a)(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"])))),rt=Object(j.a)(nt)(_e||(_e=Object(p.a)(['\n\theight: 40vmin;\n\tpointer-events: none;\n\n\t&[data-spinning="true"] {\n\t\tanimation: '," infinite 1s linear;\n\t}\n\n\tfill: ",";\n"])),ct,(function(e){return e.logoColor})),ot=function(){var e=O((function(e){return e}),l.b).spinLogoState,t=h();return Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsx)("p",{children:Object(ke.jsx)(rt,{"data-spinning":e.spin,logoColor:e.logoColor})}),Object(ke.jsx)("p",{children:Object(ke.jsx)(te.a,{color:"primary",onClick:function(){t(B.setSpinLogo(!e.spin))},variant:"contained",children:e.spin?"\u6b62\u3081\u308b":"\u307e\u308f\u3059"})}),Object(ke.jsx)("p",{children:Object(ke.jsx)(te.a,{color:"primary",onClick:function(){t(B.setLogoColor("#".concat(Math.floor(16777216*Math.random()).toString(16).padStart(6,"0"))))},variant:"contained",children:"\u8272\u3092\u30e9\u30f3\u30c0\u30e0\u306b\u5909\u3048\u308b"})})]})},at=function(){var e=h();return Object(ke.jsxs)(ke.Fragment,{children:[Object(ke.jsxs)(ce,{children:[Object(ke.jsx)(Q.a,{children:"\u3053\u306e\u30da\u30fc\u30b8\u306fReact\u7df4\u7fd2\u7528\u30da\u30fc\u30b8\u3067\u3059\u3002"}),Object(ke.jsx)(Q.a,{children:"\u5de6\u4e0a\u306e\u30e1\u30cb\u30e5\u30fc\u30dc\u30bf\u30f3\u3001\u3082\u3057\u304f\u306f\u4ee5\u4e0b\u306e\u4e00\u89a7\u304b\u3089\u5404\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"})]}),Object(ke.jsxs)(ce,{children:[Object(ke.jsx)(Q.a,{children:"\u6a5f\u80fd\u4e00\u89a7"}),Object(ke.jsx)(q.a,{sx:{flexGrow:1,overflow:"hidden",px:3},children:y.map((function(e){return{menu:e,site:it[e]}})).map((function(t){var n=t.menu,c=t.site;return Object(ke.jsxs)(oe,{sx:{minWidth:275,maxWidth:"75%",flexGrow:1,overflow:"hidden",px:3},children:[Object(ke.jsxs)(Ve.a,{children:[Object(ke.jsx)(Q.a,{color:"text.secondary",gutterBottom:!0,sx:{fontSize:14},children:"\u30da\u30fc\u30b8"}),Object(ke.jsxs)(Q.a,{component:"div",variant:"h5",children:[c.icon,c.name]}),Object(ke.jsx)(Q.a,{variant:"body2",children:c.description})]}),Object(ke.jsx)(qe.a,{children:Object(ke.jsx)(te.a,{onClick:function(){return e(C.setComponent(n))},onKeyPress:function(){return e(C.setComponent(n))},size:"small",children:"\u79fb\u52d5"})})]},c.name)}))})]}),Object(ke.jsx)(ce,{children:Object(ke.jsxs)(Q.a,{children:["\u8a73\u3057\u304f\u306f\u300c",Object(ke.jsx)("a",{href:"https://github.com/nishidemasami/study-react",children:"https://github.com/nishidemasami/study-react"}),"\u300d\u3092\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044\u3002"]})})]})},it={count:{component:Object(ke.jsx)(Re,{}),name:"\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7",icon:Object(ke.jsx)(X.a,{}),description:"\u6570\u3092\u6570\u3048\u308b\u30da\u30fc\u30b8\u3067\u3059\u3002"},spinLogo:{component:Object(ke.jsx)(ot,{}),name:"\u30ed\u30b4\u307e\u308f\u3057",icon:Object(ke.jsx)(Y.a,{}),description:"React\u306e\u30ed\u30b4\u3092\u307e\u308f\u3059\u30da\u30fc\u30b8\u3067\u3059\u3002"},helpPage:{component:Object(ke.jsx)(Ue,{}),name:"\u30d8\u30eb\u30d7",icon:Object(ke.jsx)(Z.a,{}),description:"\u30d8\u30eb\u30d7\u30da\u30fc\u30b8\u3067\u3059\u3002"},welcomePage:{component:Object(ke.jsx)(at,{}),name:"\u3088\u3046\u3053\u305d",icon:Object(ke.jsx)(V.a,{}),description:Object(ke.jsxs)(ke.Fragment,{children:["\u6700\u521d\u306b\u8868\u793a\u3055\u308c\u308b\u30da\u30fc\u30b8\u3067\u3059\u3002",Object(ke.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u521d\u671f\u30da\u30fc\u30b8\u3067\u3059\u3002"]})},configPage:{component:Object(ke.jsx)(Ie,{}),name:"\u8a2d\u5b9a",icon:Object(ke.jsx)($.a,{}),description:"State\u306e\u5024\u3092\u76f4\u63a5\u5909\u66f4\u3059\u308b\u30da\u30fc\u30b8\u3067\u3059\u3002"},siteMap:{component:Object(ke.jsx)(De,{}),name:"\u30b5\u30a4\u30c8\u30de\u30c3\u30d7",icon:Object(ke.jsx)(_.a,{}),description:"\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3067\u3059\u3002"},bitcoin:{component:Object(ke.jsx)(Le,{}),name:"\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3",icon:Object(ke.jsx)(ee.a,{}),description:Object(ke.jsxs)(ke.Fragment,{children:["\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3\u30a2\u30c9\u30ec\u30b9\u3092",Object(ke.jsx)("br",{}),"\u751f\u6210\u3059\u308b\u30da\u30fc\u30b8\u3067\u3059\u3002"]})}},st=function(){var e=O((function(e){return e}),l.b).appState,t=h();return Object(ke.jsx)(q.a,{sx:{flexGrow:1},children:Object(ke.jsx)(D.a,{position:"fixed",children:Object(ke.jsxs)(d.a,{children:[Object(ke.jsx)(H.a,{"aria-label":"menu",color:"inherit",edge:"start",onClick:function(){return t(C.setOpenMenu(!e.openMenu))},size:"medium",sx:{mr:2},children:Object(ke.jsx)(U.a,{})}),Object(ke.jsx)(Q.a,{component:"div",sx:{flexGrow:1},variant:"h6",children:e.component&&it[e.component].name}),Object(ke.jsx)(H.a,{"aria-label":"menu",color:"inherit",edge:"start",onClick:function(){return t(C.setComponent(y[0]))},size:"medium",sx:{mr:2},children:Object(ke.jsx)(V.a,{})})]})})})},ut=n(537),lt=n(548),pt=n(551),jt=n(543),dt=n(561),bt=n(562),ft=n(563),ht=function(){var e=O((function(e){return e}),l.b).appState,t=h();return Object(ke.jsx)(lt.a,{anchor:"left",onClose:function(){return t(C.setOpenMenu(!1))},open:e.openMenu,children:Object(ke.jsxs)("div",{onKeyDown:function(){return t(C.setOpenMenu(!1))},role:"presentation",children:[Object(ke.jsx)(pt.a,{children:Object(ke.jsxs)(jt.a,{button:!0,onClick:function(){t(C.setOpenMenu(!1))},children:[Object(ke.jsx)(dt.a,{children:Object(ke.jsx)(ut.a,{})}),Object(ke.jsx)(bt.a,{primary:"\u9589\u3058\u308b"})]})}),Object(ke.jsx)(ft.a,{}),Object(ke.jsx)(pt.a,{children:y.map((function(e){return Object(ke.jsxs)(jt.a,{button:!0,onClick:function(){t(C.setComponent(e)),t(C.setOpenMenu(!1))},children:[Object(ke.jsx)(dt.a,{children:it[e].icon}),Object(ke.jsx)(bt.a,{primary:it[e].name})]},e)}))})]})})},Ot=j.a.div(et||(et=Object(p.a)(["\n\ttext-align: center;\n\tp {\n\t\tmargin: 2px;\n\t}\n\ta {\n\t\tcolor: #004457;\n\t}\n"]))),mt=j.a.div(tt||(tt=Object(p.a)(["\n\tposition: absolute;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: black;\n"]))),xt=function(){var e=O((function(e){return e}),l.b),t=e.appState,n=e.countState,c=e.spinLogoState,r=h();return f.a.useEffect((function(){r(R())}),[r]),f.a.useEffect((function(){r(T({appState:t,countState:n,spinLogoState:c}))}),[r,t,n,c]),Object(ke.jsxs)(f.a.StrictMode,{children:[Object(ke.jsx)(st,{}),Object(ke.jsxs)(Ot,{children:[Object(ke.jsx)(d.a,{}),Object(ke.jsx)(mt,{children:t.component&&it[t.component].component})]}),Object(ke.jsx)(ht,{})]})},gt=(n(487),Object(v.a)({reducer:{countState:A,appState:k,spinLogoState:K,bitcoinState:je}}));u.a.render(Object(ke.jsx)(l.a,{store:gt,children:Object(ke.jsx)(xt,{})}),document.getElementById("root"))}},[[488,1,2]]]);
//# sourceMappingURL=main.51f83a43.chunk.js.map
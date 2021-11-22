/*! For license information please see main.2e5e2db6.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-ts-app"]=this["webpackJsonpreact-ts-app"]||[]).push([[0],{256:function(e,t,n){"use strict";(function(e){function r(e){var t=[];return e.forEach((function(e){return t.push(e)})),t}n.d(t,"a",(function(){return r}))}).call(this,n(26).Buffer)},290:function(e,t){},292:function(e,t){},302:function(e,t){},304:function(e,t){},331:function(e,t){},332:function(e,t){},337:function(e,t){},339:function(e,t){},346:function(e,t){},365:function(e,t){},493:function(e,t,n){},494:function(e,t,n){"use strict";n.r(t);var r,c,o,a,i,s=n(48),u=n.n(s),l=n(20),d=n(17),p=n(24),j=n(574),f=n(0),b=n.n(f),h=function(){return Object(l.c)()},x=l.d,O=n(34),g=n.n(O),m=n(54),v=n(22),y=["welcomePage","count","spinLogo","whiteNoise","bitcoin","configPage","siteMap","helpPage"],w={openMenu:!1,component:void 0,backgroundColor:"#e6eeff"},S=Object(v.c)({name:"app",initialState:w,reducers:{setOpenMenu:function(e,t){e.openMenu=t.payload},setComponent:function(e,t){e.component=t.payload},setBackgroundColor:function(e,t){e.backgroundColor=t.payload},parseJSON:function(e,t){e.component=y[0],JSON.parse(t.payload,(function(t,n){"openMenu"===t&&"boolean"===typeof n?e.openMenu=n:"component"===t&&y.find((function(e){return e===n}))&&(e.component=n)}))}}}),C=S.actions,k=S.reducer,P=n(64),A=function(){var e=Object(m.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){setTimeout((function(){Math.random()<t/100&&e(!0),r(new Error)}),1e3*n)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=Object(v.b)("lastcount/fetch",function(){var e=Object(m.a)(g.a.mark((function e(t,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(N.setProgress(!0)),e.next=3,A(t.percent,t.second).catch((function(){return!1}));case 3:if(r=e.sent,n.dispatch(N.setProgress(!1)),!r){e.next=7;break}return e.abrupt("return",{count:t.value});case 7:throw new Error("fetch count error");case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),L=E,M=Object(v.c)({name:"count",initialState:{message:"",progress:!1,count:0,percent:50},reducers:{setShowingPercent:function(e,t){e.percent=t.payload},setProgress:function(e,t){e.progress=t.payload},setMessasge:function(e,t){e.message=t.payload},setCount:function(e,t){e.count=t.payload},increment:function(e){e.count+=1},decrement:function(e){e.count-=1},incrementByAmount:function(e,t){e.count+=t.payload},parseJSON:function(e,t){JSON.parse(t.payload,(function(t,n){"count"===t&&"number"===typeof n?e.count=n:"percent"===t&&"number"===typeof n&&(e.percent=n)}))}},extraReducers:function(e){e.addCase(L.pending,(function(e,t){return Object(P.a)(Object(P.a)({},e),{},{message:"\u5224\u5b9a\u4e2d\u3067\u3059\u3002".concat(t.meta.arg.second,"\u79d2\u5f8c\u306b").concat(t.meta.arg.percent,"%\u306e\u78ba\u7387\u3067").concat(t.meta.arg.value,"\u5897\u3048\u307e\u3059\u3002")})})),e.addCase(L.fulfilled,(function(e,t){return Object(P.a)(Object(P.a)({},e),{},{count:e.count+t.payload.count,message:"\u5224\u5b9a\u306b\u6210\u529f\u3057\u307e\u3057\u305f\u3002".concat(t.payload.count,"\u5897\u3048\u307e\u3057\u305f\u3002")})})),e.addCase(L.rejected,(function(e){return Object(P.a)(Object(P.a)({},e),{},{message:"\u5224\u5b9a\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u30021\u6e1b\u308a\u307e\u3057\u305f\u3002",count:e.count-1})}))}}),N=M.actions,z=M.reducer,B=Object(v.c)({name:"spinLogo",initialState:{spin:!1,logoColor:"#61DAFB"},reducers:{setSpinLogo:function(e,t){e.spin=t.payload},setLogoColor:function(e,t){e.logoColor=t.payload},parseJSON:function(e,t){JSON.parse(t.payload,(function(t,n){"logoColor"===t&&"string"===typeof n?e.logoColor=n:"spin"===t&&"boolean"===typeof n&&(e.spin=n)}))}}}),q=B.actions,J=B.reducer,W="study-react/",F=["".concat(W,"appState"),"".concat(W,"countState"),"".concat(W,"spinLogoState")],K=Object(v.b)("localStorage/loadLocalStorage",function(){var e=Object(m.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:["".concat(W,"countState"),"".concat(W,"spinLogoState")].forEach((function(e){var t=localStorage.getItem(e);null!==t&&(e==="".concat(W,"countState")?n.dispatch(N.parseJSON(t)):e==="".concat(W,"spinLogoState")&&n.dispatch(q.parseJSON(t)))}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),I=Object(v.b)("localStorage/loadLocalStorage",function(){var e=Object(m.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.appState&&localStorage.setItem("".concat(W,"appState"),JSON.stringify(t.appState)),t.countState&&localStorage.setItem("".concat(W,"countState"),JSON.stringify(t.countState)),t.spinLogoState&&localStorage.setItem("".concat(W,"spinLogoState"),JSON.stringify(t.spinLogoState));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),H=Object(v.b)("localStorage/loadLocalStorage",Object(m.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F.forEach((function(e){return localStorage.removeItem(e)}));case 1:case"end":return e.stop()}}),e)})))),T=Object(v.b)("localStorage/loadLocalStorage",function(){var e=Object(m.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.dispatch(C.setComponent(y[0])),F.forEach((function(e){var t=localStorage.getItem(e);t&&(e==="".concat(W,"appState")?n.dispatch(C.parseJSON(t)):e==="".concat(W,"countState")?n.dispatch(N.parseJSON(t)):e==="".concat(W,"spinLogoState")&&n.dispatch(q.parseJSON(t)))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),D=n(548),G=n(544),U=n(570),V=n(573),R=n(575),Q=n(567),X=n(540),Y=n(541),Z=n(542),$=n(543),_=n(545),ee=n(546),te=n(547),ne=n(559),re=n(563),ce=(p.a.div(r||(r=Object(d.a)(["\n\tcursor: pointer;\n\ttext-decoration: underline;\n\tdisplay: inline-block;\n"]))),p.a.div(c||(c=Object(d.a)(["\n\tborder-top: 1px solid black;\n"])))),oe=(p.a.div(o||(o=Object(d.a)(["\n\ttext-align: center;\n\tjustify-content: center;\n\tdisplay: flex;\n"]))),p.a.p(a||(a=Object(d.a)(["\n\tword-break: break-word;\n"])))),ae=Object(p.a)(re.a)(i||(i=Object(d.a)(["\n\tmargin: 30px auto;\n\ttext-align: left;\n\twidth: fit-content;\n"]))),ie=n(77),se=n.n(ie),ue=n(95),le=n.n(ue),de=Object(v.c)({name:"bitcoin",initialState:{publicKey:[],secretKey:[],bitcoinAddress:"",bitcoinAddressBECH32:"",wif:""},reducers:{setPublicKey:function(e,t){e.publicKey=t.payload},setSecretKey:function(e,t){e.secretKey=t.payload},setWif:function(e,t){e.wif=t.payload},setBitcoinAddress:function(e,t){e.bitcoinAddress=t.payload},setBitcoinAddressBECH32:function(e,t){e.bitcoinAddressBECH32=t.payload}}}),pe=de.actions,je=de.reducer;function fe(e){for(var t="",n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return t}var be="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",he={ipfs:be,btc:be,xmr:be,flickr:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",xrp:"rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"};function xe(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ipfs",r=n.toLowerCase();if(0===e.length)return"";if(t="string"===typeof e?"undefined"!==typeof TextEncoder?(new TextEncoder).encode(e):new Uint8Array(e.split("").map((function(e){return e.charCodeAt(0)}))):e,"xmr"===r){for(var c="",o=0;o<t.length+3;o+=8){var a=t.slice(o,o+8);c+=xe(a).padStart(8===a.length?11:7,"1")}return c}if(!he.hasOwnProperty(r))throw new Error("invalid type");for(var i=he[r],s=BigInt("0x".concat(fe(t))),u=[];s>0;){var l=Number(s%58n);s/=58n,u.push(i[l])}for(var d=0;0===t[d];d++)u.push(i[0]);return u.reverse().join("")}for(var Oe="qpzry9x8gf2tvdw0s3jn54khce6mua7l",ge={},me=0;me<Oe.length;me++){var ve=Oe.charAt(me);ge[ve]=me}function ye(e){var t=e>>25;return(33554431&e)<<5^996825010&-(t>>0&1)^642813549&-(t>>1&1)^513874426&-(t>>2&1)^1027748829&-(t>>3&1)^705979059&-(t>>4&1)}function we(e){for(var t=1,n=0;n<e.length;++n){var r=e.charCodeAt(n);if(r<33||r>126)return"Invalid prefix (".concat(e,")");t=ye(t)^r>>5}t=ye(t);for(var c=0;c<e.length;++c){var o=e.charCodeAt(c);t=ye(t)^31&o}return t}function Se(e,t,n,r){for(var c=0,o=0,a=(1<<n)-1,i=[],s=0;s<e.length;++s)for(c=c<<t|e[s],o+=t;o>=n;)o-=n,i.push(c>>o&a);if(r)o>0&&i.push(c<<n-o&a);else{if(o>=t)throw new Error("Excess padding");if(c<<n-o&a)throw new Error("Non-zero padding")}return i}function Ce(e){return Se(e,8,5,!0)}function ke(e){var t=Se(e,5,8,!1);if(Array.isArray(t))return t;throw new Error(t)}function Pe(e){var t;return t="bech32"===e?1:734539939,{decode:function(e,n){var r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:90;if(e.length<8)return"".concat(e," too short");if(e.length>n)return"Exceeds length limit";var r=e.toLowerCase(),c=e.toUpperCase();if(e!==r&&e!==c)return"Mixed-case string ".concat(e);var o=r,a=o.lastIndexOf("1");if(-1===a)return"No separator character for ".concat(o);if(0===a)return"Missing prefix for ".concat(o);var i=o.slice(0,a),s=o.slice(a+1);if(s.length<6)return"Data too short";var u=we(i);if("string"===typeof u)return u;for(var l=[],d=0;d<s.length;++d){var p=s.charAt(d),j=ge[p];if(void 0===j)return"Unknown character ".concat(p);u=ye(u)^j,d+6>=s.length||l.push(j)}return u!==t?"Invalid checksum for ".concat(o):{prefix:i,words:l}}(e,n);if("object"===typeof r)return r;throw new Error(r)},encode:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:90;if(e.length+7+n.length>r)throw new TypeError("Exceeds length limit");var c=e.toLowerCase(),o=we(c);if("string"===typeof o)throw new Error(o);for(var a="".concat(c,"1"),i=0;i<n.length;++i){var s=n[i];if(s>>5!==0)throw new Error("Non 5-bit word: ".concat(s));o=ye(o)^s,a+=Oe.charAt(s)}for(var u=0;u<6;++u)o=ye(o);o^=t;for(var l=0;l<6;++l){var d=o>>5*(5-l)&31;a+=Oe.charAt(d)}return a},toWords:Ce,fromWords:ke}}Pe("bech32"),Pe("bech32m");function Ae(e){return se.a.createHash("sha256").update(e).digest()}function Ee(e){return se.a.createHash("ripemd160").update(e).digest()}function Le(e){var t=new Uint8Array(e.length+4);return t.set(e),t.set(function(e){return Ae(Ae(e)).slice(0,4)}(e),e.length),xe(t)}var Me,Ne,ze,Be,qe=n(256),Je=function(){var e=h();return Object(f.useCallback)((function(){var t,n=Object(ie.randomBytes)(32);do{t=Object(ie.randomBytes)(32)}while(!le.a.privateKeyVerify(t));var r=le.a.publicKeyCreate(t,!1),c=le.a.ecdsaSign(n,t);le.a.ecdsaVerify(c.signature,n,r)?(e(pe.setPublicKey(Object(qe.a)(r))),e(pe.setBitcoinAddress(function(e){if(65!==e.length)throw new Error("publicKey is not 65 byte length Exception");var t=Ee(Ae(e)),n=new Uint8Array(21);return n.set([0]),n.set(t,1),Le(n)}(r))),e(pe.setWif(function(e){var t=new Uint8Array(e.length+1);return t.set([128]),t.set(e,1),Le(t)}(t)))):(e(pe.setPublicKey([])),e(pe.setBitcoinAddress("")),e(pe.setWif("")),pe.setBitcoinAddress("\u30a8\u30e9\u30fc\u767a\u751f"))}),[e])},We=n(1),Fe=function(){var e=x((function(e){return e}),l.b).bitcoinState;return Object(We.jsxs)(We.Fragment,{children:[Object(We.jsx)(ne.a,{color:"secondary",onClick:Je(),variant:"contained",children:"\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3\u30a2\u30c9\u30ec\u30b9\u751f\u6210"}),Object(We.jsx)("p",{children:"\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3\u30a2\u30c9\u30ec\u30b9(BASE58(P2PKH)\u5f62\u5f0f)\uff1a"}),Object(We.jsx)(oe,{children:e.bitcoinAddress}),Object(We.jsx)("p",{children:"\u79d8\u5bc6\u9375(WIF\u5f62\u5f0f)\uff1a"}),Object(We.jsx)(oe,{children:e.wif})]})},Ke=n(550),Ie=n(564),He=n(561),Te=n(568),De=n(554),Ge=n(170),Ue=/^#(?:[0-9a-fA-F]{3}){1,2}$/,Ve=function(e){return Ue.test(e)},Re=n(15),Qe=function(){var e=Object(f.useState)(!1),t=Object(Re.a)(e,2);return{showColorPicker:t[0],setShowColorPicker:t[1]}},Xe=Object(p.a)(Ke.a)(Me||(Me=Object(d.a)(["\n\tmargin: 8px;\n"]))),Ye=Object(p.a)(Ie.a)(Ne||(Ne=Object(d.a)(["\n\tmargin: 0;\n\tmax-height: unset;\n\tmax-width: unset;\n"]))),Ze=function(){var e=x((function(e){return e}),l.b),t=e.countState,n=e.spinLogoState,r=e.appState,c=h(),o=Qe(),a=o.showColorPicker,i=o.setShowColorPicker,s=Qe(),u=s.showColorPicker,d=s.setShowColorPicker;return Object(We.jsxs)(We.Fragment,{children:[Object(We.jsx)(Q.a,{children:"\u8a2d\u5b9a"}),Object(We.jsxs)(ce,{children:[Object(We.jsx)(Q.a,{children:"\u5168\u4f53"}),Object(We.jsx)(Xe,{error:!Ve(r.backgroundColor),label:"\u80cc\u666f\u8272",onChange:function(e){return c(C.setBackgroundColor(e.currentTarget.value))},onClick:function(){return d(!0)},required:!0,type:"text",value:r.backgroundColor}),Object(We.jsx)(He.a,{PaperComponent:Ye,onClose:function(){d(!1)},open:u,children:Object(We.jsx)(Ge.a,{color:r.backgroundColor,onChange:function(e){return c(C.setBackgroundColor(e.hex))}})})]}),Object(We.jsxs)(ce,{children:[Object(We.jsx)(Q.a,{children:"\u30ed\u30b4\u307e\u308f\u3057"}),Object(We.jsx)(Xe,{error:!Ve(n.logoColor),label:"\u30ed\u30b4\u306e\u8272",onChange:function(e){return c(q.setLogoColor(e.currentTarget.value))},onClick:function(){return i(!0)},required:!0,type:"text",value:n.logoColor}),Object(We.jsx)(He.a,{PaperComponent:Ye,onClose:function(){i(!1)},open:a,children:Object(We.jsx)(Ge.a,{color:n.logoColor,onChange:function(e){return c(q.setLogoColor(e.hex))}})}),Object(We.jsx)("br",{}),Object(We.jsx)(Te.a,{control:Object(We.jsx)(De.a,{checked:n.spin,onChange:function(e){return c(q.setSpinLogo(e.currentTarget.checked))}}),label:"\u307e\u308f\u3063\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u30d5\u30e9\u30b0"})]}),Object(We.jsxs)(ce,{children:[Object(We.jsx)(Q.a,{children:"\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7"}),Object(We.jsx)(Xe,{label:"\u30ab\u30a6\u30f3\u30c8",onChange:function(e){return c(N.setCount(Number(e.currentTarget.value)))},required:!0,type:"number",value:t.count}),Object(We.jsx)("br",{}),Object(We.jsx)(Xe,{label:"\u30d1\u30fc\u30bb\u30f3\u30c8",onChange:function(e){return c(N.setShowingPercent(Number(e.currentTarget.value)))},required:!0,type:"number",value:t.percent})]}),Object(We.jsxs)(ce,{children:[Object(We.jsx)(Q.a,{children:"\u8a2d\u5b9a\u306e\u4fdd\u5b58\u3068\u5fa9\u5143"}),Object(We.jsx)(ne.a,{color:"primary",onClick:function(){return c(I({appState:r,spinLogoState:n,countState:t}))},variant:"contained",children:"\u8a2d\u5b9a\u306e\u4fdd\u5b58"}),Object(We.jsx)("br",{}),Object(We.jsx)(ne.a,{color:"primary",onClick:function(){return c(K())},variant:"contained",children:"\u8a2d\u5b9a\u306e\u30ed\u30fc\u30c9"}),Object(We.jsx)("br",{}),Object(We.jsx)(ne.a,{color:"error",onClick:function(){return c(H())},variant:"contained",children:"\u8a2d\u5b9a\u306e\u30af\u30ea\u30a2"})]})]})},$e=n(555),_e=n(569),et=Object(p.a)($e.a)(ze||(ze=Object(d.a)(["\n\tmax-width: 50%;\n"]))),tt=function(){var e=x((function(e){return e}),l.b).countState,t=h();return Object(We.jsxs)(We.Fragment,{children:[Object(We.jsx)("p",{children:e.count}),Object(We.jsxs)("p",{children:[Object(We.jsx)(ne.a,{color:"primary",onClick:function(){t(N.increment())},variant:"contained",children:"\u5897\u3084\u3059"}),Object(We.jsx)(ne.a,{color:"secondary",onClick:function(){t(N.decrement())},variant:"contained",children:"\u6e1b\u3089\u3059"})]}),Object(We.jsxs)(Q.a,{id:"percent-slider-label",children:["\u78ba\u7387\uff1a",e.percent,"%"]}),Object(We.jsx)(et,{"aria-labelledby":"percent-slider-label",disabled:e.progress,max:100,min:0,onChange:function(e,n){"number"===typeof n&&t(N.setShowingPercent(n))},value:e.percent,valueLabelDisplay:"off"}),Object(We.jsx)("p",{children:Object(We.jsx)(ne.a,{color:"info",disabled:e.progress,onClick:function(){t(L({percent:e.percent,value:100,second:3}))},variant:"contained",children:"\u975e\u540c\u671f"})}),Object(We.jsx)(Q.a,{color:"error",children:e.message}),e.progress&&Object(We.jsx)(_e.a,{})]})},nt=function(){return Object(We.jsxs)(We.Fragment,{children:["\u300c",Object(We.jsx)("a",{href:"https://github.com/nishidemasami/study-react",children:"https://github.com/nishidemasami/study-react"}),"\u300d\u3092\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044"]})},rt=n(571),ct=n(572),ot=function(){var e=h();return Object(We.jsx)(U.a,{sx:{flexGrow:1,overflow:"hidden",px:3},children:y.map((function(e){return{menu:e,site:qt[e]}})).map((function(t){var n=t.menu,r=t.site;return Object(We.jsxs)(ae,{sx:{minWidth:275,maxWidth:"75%",flexGrow:1,overflow:"hidden",px:3},children:[Object(We.jsxs)(rt.a,{children:[Object(We.jsx)(Q.a,{color:"text.secondary",gutterBottom:!0,sx:{fontSize:14},children:"\u30da\u30fc\u30b8"}),Object(We.jsxs)(Q.a,{component:"div",variant:"h5",children:[r.icon,r.name]}),Object(We.jsx)(Q.a,{variant:"body2",children:r.description})]}),"siteMap"===n?null:Object(We.jsx)(ct.a,{children:Object(We.jsx)(ne.a,{onClick:function(){return e(C.setComponent(n))},onKeyPress:function(){return e(C.setComponent(n))},size:"small",children:"\u79fb\u52d5"})})]},r.name)}))})},at=n(52),it=["title","titleId"];function st(){return st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},st.apply(this,arguments)}function ut(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function lt(e,t){var n=e.title,r=e.titleId,c=ut(e,it);return f.createElement("svg",st({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",ref:t,"aria-labelledby":r},c),n?f.createElement("title",{id:r},n):null,Be||(Be=f.createElement("g",null,f.createElement("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),f.createElement("circle",{cx:420.9,cy:296.5,r:45.7}),f.createElement("path",{d:"M520.5 78.1z"}))))}var dt,pt,jt,ft,bt,ht,xt=f.forwardRef(lt),Ot=(n.p,Object(at.c)(dt||(dt=Object(d.a)(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"])))),gt=Object(p.a)(xt)(pt||(pt=Object(d.a)(['\n\theight: 40vmin;\n\tpointer-events: none;\n\n\t&[data-spinning="true"] {\n\t\tanimation: '," infinite 1s linear;\n\t}\n\n\tfill: ",";\n"])),Ot,(function(e){return e.logoColor})),mt=function(){var e=x((function(e){return e}),l.b).spinLogoState,t=h();return Object(We.jsxs)(We.Fragment,{children:[Object(We.jsx)("p",{children:Object(We.jsx)(gt,{"data-spinning":e.spin,logoColor:e.logoColor})}),Object(We.jsx)("p",{children:Object(We.jsx)(ne.a,{color:"primary",onClick:function(){t(q.setSpinLogo(!e.spin))},variant:"contained",children:e.spin?"\u6b62\u3081\u308b":"\u307e\u308f\u3059"})}),Object(We.jsx)("p",{children:Object(We.jsx)(ne.a,{color:"primary",onClick:function(){t(q.setLogoColor("#".concat(Math.floor(16777216*Math.random()).toString(16).padStart(6,"0"))))},variant:"contained",children:"\u8272\u3092\u30e9\u30f3\u30c0\u30e0\u306b\u5909\u3048\u308b"})})]})},vt=function(){var e=h();return Object(We.jsxs)(We.Fragment,{children:[Object(We.jsxs)(ce,{children:[Object(We.jsx)(Q.a,{children:"\u3053\u306e\u30da\u30fc\u30b8\u306fReact\u7df4\u7fd2\u7528\u30da\u30fc\u30b8\u3067\u3059\u3002"}),Object(We.jsx)(Q.a,{children:"\u5de6\u4e0a\u306e\u30e1\u30cb\u30e5\u30fc\u30dc\u30bf\u30f3\u3001\u3082\u3057\u304f\u306f\u4ee5\u4e0b\u306e\u4e00\u89a7\u304b\u3089\u5404\u6a5f\u80fd\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"})]}),Object(We.jsxs)(ce,{children:[Object(We.jsx)(Q.a,{children:"\u6a5f\u80fd\u4e00\u89a7"}),Object(We.jsx)(U.a,{sx:{flexGrow:1,overflow:"hidden",px:3},children:y.map((function(e){return{menu:e,site:qt[e]}})).map((function(t){var n=t.menu,r=t.site;return Object(We.jsxs)(ae,{sx:{minWidth:275,maxWidth:"75%",flexGrow:1,overflow:"hidden",px:3},children:[Object(We.jsxs)(rt.a,{children:[Object(We.jsx)(Q.a,{color:"text.secondary",gutterBottom:!0,sx:{fontSize:14},children:"\u30da\u30fc\u30b8"}),Object(We.jsxs)(Q.a,{component:"div",variant:"h5",children:[r.icon,r.name]}),Object(We.jsx)(Q.a,{variant:"body2",children:r.description})]}),"welcomePage"===n?null:Object(We.jsx)(ct.a,{children:Object(We.jsx)(ne.a,{onClick:function(){return e(C.setComponent(n))},onKeyPress:function(){return e(C.setComponent(n))},size:"small",children:"\u79fb\u52d5"})})]},r.name)}))})]}),Object(We.jsx)(ce,{children:Object(We.jsxs)(Q.a,{children:["\u8a73\u3057\u304f\u306f\u300c",Object(We.jsx)("a",{href:"https://github.com/nishidemasami/study-react",children:"https://github.com/nishidemasami/study-react"}),"\u300d\u3092\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044\u3002"]})})]})},yt=n(538),wt=n(539),St=n(565),Ct=n(532),kt=n(557),Pt=n(553),At=["WhiteNoise","Sine","Square"],Et=Object(v.c)({name:"whiteNoise",initialState:{volume:25,playing:!1,wave:"Sine",frequency:880},reducers:{setVolume:function(e,t){e.volume=t.payload},setPlaying:function(e,t){e.playing=t.payload},setWave:function(e,t){e.wave=t.payload},setFrequency:function(e,t){e.frequency=t.payload}}}),Lt=Et.actions,Mt=Et.reducer,Nt=function(e){var t=x((function(e){return e}),l.b).whiteNoiseState,n=h(),r=b.a.useContext(Ut),c=r.audioContext,o=r.setSource,a=r.source;return b.a.useCallback((function(){if(a&&(a.stop(),a.buffer=null),!t.playing){for(var r=c.sampleRate,i=4*r,s=c.createBuffer(1,i,r),u=0;u<1;u+=1){var l=s.getChannelData(u);if("WhiteNoise"===t.wave)for(var d=0;d<i;d+=1)l[d]=2*Math.random()-1;else if("Sine"===t.wave)for(var p=2*t.frequency/r*Math.PI,j=0;j<i;j+=1)l[j]=Math.sin(p*j);else if("Square"===t.wave)for(var f=r/t.frequency,b=f/2,h=0;h<i;h+=1)l[h]=h%f<b?1:0}e.gain.value=t.volume/100;var x=c.createBufferSource();o(x),x.buffer=s,x.loop=!0,x.connect(e).connect(c.destination),x.start()}n(Lt.setPlaying(!t.playing))}),[a,t.playing,t.volume,t.wave,t.frequency,n,c,e,o])},zt=Object(p.a)($e.a)(jt||(jt=Object(d.a)(["\n\tmax-width: 50%;\n"]))),Bt=function(){var e=x((function(e){return e}),l.b).whiteNoiseState,t=h(),n=b.a.useContext(Ut).audioContext,r=b.a.useState(n.createGain()),c=Object(Re.a)(r,1)[0];return Object(We.jsxs)(We.Fragment,{children:[Object(We.jsx)("p",{children:Object(We.jsxs)(ne.a,{color:e.playing?"warning":"primary",onClick:Nt(c),variant:"contained",children:["WhiteNoise"===e.wave?"\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba":"Sine"===e.wave?"\u30b5\u30a4\u30f3\u6ce2(".concat(e.frequency,"Hz)"):"\u77e9\u5f62\u6ce2(".concat(e.frequency,"Hz)"),e.playing?"\u505c\u6b62":"\u518d\u751f"]})}),Object(We.jsx)("p",{children:"\u97f3\u91cf"}),Object(We.jsxs)("p",{children:[Object(We.jsx)(yt.a,{}),Object(We.jsx)(zt,{"aria-labelledby":"continuous-slider",max:100,min:0,onChange:function(e,n){"number"===typeof n&&(t(Lt.setVolume(n)),c&&(c.gain.value=n/100))},value:e.volume,valueLabelDisplay:"auto"}),Object(We.jsx)(wt.a,{})]}),Object(We.jsxs)(St.a,{component:"fieldset",children:[Object(We.jsx)(Ct.a,{component:"legend",children:"\u518d\u751f\u3059\u308b\u97f3\u306e\u7a2e\u985e"}),Object(We.jsxs)(kt.a,{"aria-label":"wave",name:"radio-buttons-group",onChange:function(e,n){At.includes(n)&&t(Lt.setWave(n))},value:e.wave,children:[Object(We.jsx)(Te.a,{control:Object(We.jsx)(Pt.a,{}),disabled:e.playing,label:"\u30b5\u30a4\u30f3\u6ce2(".concat(e.frequency,"Hz)"),value:"Sine"}),Object(We.jsx)(Te.a,{control:Object(We.jsx)(Pt.a,{}),disabled:e.playing,label:"\u77e9\u5f62\u6ce2(".concat(e.frequency,"Hz)"),value:"Square"}),Object(We.jsx)(Te.a,{control:Object(We.jsx)(Pt.a,{}),disabled:e.playing,label:"\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba",value:"WhiteNoise"})]})]}),Object(We.jsx)("p",{children:"\u5468\u6ce2\u6570"}),Object(We.jsx)(Ke.a,{disabled:e.playing,label:"\u5468\u6ce2\u6570",onChange:function(e){return t(Lt.setFrequency(Number(e.currentTarget.value)))},required:!0,type:"number",value:e.frequency}),Object(We.jsx)("p",{children:Object(We.jsx)(zt,{"aria-labelledby":"continuous-slider",disabled:e.playing,max:4186,min:27.5,onChange:function(e,n){"number"===typeof n&&t(Lt.setFrequency(n))},value:e.frequency,valueLabelDisplay:"auto"})})]})},qt={count:{component:Object(We.jsx)(tt,{}),name:"\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7",icon:Object(We.jsx)(X.a,{}),description:"\u6570\u3092\u6570\u3048\u308b\u30da\u30fc\u30b8\u3067\u3059\u3002"},spinLogo:{component:Object(We.jsx)(mt,{}),name:"\u30ed\u30b4\u307e\u308f\u3057",icon:Object(We.jsx)(Y.a,{}),description:"React\u306e\u30ed\u30b4\u3092\u307e\u308f\u3059\u30da\u30fc\u30b8\u3067\u3059\u3002"},whiteNoise:{component:Object(We.jsx)(Bt,{}),name:"\u97f3\u306e\u518d\u751f",icon:Object(We.jsx)(Z.a,{}),description:"\u30b5\u30a4\u30f3\u6ce2\u3084\u30db\u30ef\u30a4\u30c8\u30ce\u30a4\u30ba\u306a\u3069\u3092\u518d\u751f\u3057\u307e\u3059\u3002"},helpPage:{component:Object(We.jsx)(nt,{}),name:"\u30d8\u30eb\u30d7",icon:Object(We.jsx)($.a,{}),description:"\u30d8\u30eb\u30d7\u30da\u30fc\u30b8\u3067\u3059\u3002"},welcomePage:{component:Object(We.jsx)(vt,{}),name:"\u3088\u3046\u3053\u305d",icon:Object(We.jsx)(G.a,{}),description:Object(We.jsxs)(We.Fragment,{children:["\u6700\u521d\u306b\u8868\u793a\u3055\u308c\u308b\u30da\u30fc\u30b8\u3067\u3059\u3002",Object(We.jsx)("br",{}),"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u521d\u671f\u30da\u30fc\u30b8\u3067\u3059\u3002"]})},configPage:{component:Object(We.jsx)(Ze,{}),name:"\u8a2d\u5b9a",icon:Object(We.jsx)(_.a,{}),description:"State\u306e\u5024\u3092\u76f4\u63a5\u5909\u66f4\u3059\u308b\u30da\u30fc\u30b8\u3067\u3059\u3002"},siteMap:{component:Object(We.jsx)(ot,{}),name:"\u30b5\u30a4\u30c8\u30de\u30c3\u30d7",icon:Object(We.jsx)(ee.a,{}),description:"\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u3067\u3059\u3002"},bitcoin:{component:Object(We.jsx)(Fe,{}),name:"\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3",icon:Object(We.jsx)(te.a,{}),description:Object(We.jsxs)(We.Fragment,{children:["\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3\u30a2\u30c9\u30ec\u30b9\u3092",Object(We.jsx)("br",{}),"\u751f\u6210\u3059\u308b\u30da\u30fc\u30b8\u3067\u3059\u3002"]})}},Jt=function(){var e=x((function(e){return e}),l.b).appState,t=h();return Object(We.jsx)(U.a,{sx:{flexGrow:0},children:Object(We.jsx)(V.a,{position:"fixed",children:Object(We.jsxs)(j.a,{children:[Object(We.jsx)(R.a,{"aria-label":"menu",color:"inherit",edge:"start",onClick:function(){return t(C.setOpenMenu(!e.openMenu))},size:"medium",sx:{mr:2},children:Object(We.jsx)(D.a,{})}),Object(We.jsx)(Q.a,{component:"div",sx:{flexGrow:1},variant:"h6",children:e.component&&qt[e.component].name}),Object(We.jsx)(R.a,{"aria-label":"menu",color:"inherit",edge:"start",onClick:function(){return t(C.setComponent(y[0]))},size:"medium",sx:{mr:2},children:Object(We.jsx)(G.a,{})})]})})})},Wt=n(549),Ft=n(562),Kt=n(566),It=n(556),Ht=n(576),Tt=n(577),Dt=n(578),Gt=function(){var e=x((function(e){return e}),l.b).appState,t=h();return Object(We.jsx)(Ft.a,{anchor:"left",onClose:function(){return t(C.setOpenMenu(!1))},open:e.openMenu,children:Object(We.jsxs)("div",{onKeyDown:function(){return t(C.setOpenMenu(!1))},role:"presentation",children:[Object(We.jsx)(Kt.a,{children:Object(We.jsxs)(It.a,{button:!0,onClick:function(){t(C.setOpenMenu(!1))},children:[Object(We.jsx)(Ht.a,{children:Object(We.jsx)(Wt.a,{})}),Object(We.jsx)(Tt.a,{primary:"\u9589\u3058\u308b"})]})}),Object(We.jsx)(Dt.a,{}),Object(We.jsx)(Kt.a,{children:y.map((function(e){return Object(We.jsxs)(It.a,{button:!0,onClick:function(){t(C.setComponent(e)),t(C.setOpenMenu(!1))},children:[Object(We.jsx)(Ht.a,{children:qt[e].icon}),Object(We.jsx)(Tt.a,{primary:qt[e].name})]},e)}))})]})})},Ut=b.a.createContext({}),Vt=p.a.div(ft||(ft=Object(d.a)(["\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n\tp {\n\t\tmargin: 2px;\n\t}\n\ta {\n\t\tcolor: #004457;\n\t}\n"]))),Rt=p.a.div(bt||(bt=Object(d.a)(["\n\twidth: 100%;\n\theight: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: black;\n\tbackground-color: ",";\n\tflex-grow: 1;\n"])),(function(e){return e.backgroundColor})),Qt=Object(p.a)(j.a)(ht||(ht=Object(d.a)(["\n\tflex-grow: 0;\n\tpadding: 0;\n\tmargin: 0;\n"]))),Xt=function(){var e=x((function(e){return e}),l.b),t=e.appState,n=e.countState,r=e.spinLogoState,c=h();b.a.useEffect((function(){c(T())}),[c]),b.a.useEffect((function(){c(I({appState:t,countState:n,spinLogoState:r}))}),[c,t,n,r]);var o=function(){var e=b.a.useState(new(window.AudioContext||window.webkitAudioContext)),t=Object(Re.a)(e,1)[0],n=b.a.useState(),r=Object(Re.a)(n,2),c=r[0],o=r[1];return{audioContext:t,source:c,setSource:function(e){c&&(c.stop(),c.buffer=null),o(e)}}}();return Object(We.jsx)(b.a.StrictMode,{children:Object(We.jsxs)(Ut.Provider,{value:o,children:[Object(We.jsx)(Jt,{}),Object(We.jsxs)(Vt,{children:[Object(We.jsx)(Qt,{}),Object(We.jsx)(Rt,{backgroundColor:t.backgroundColor,children:t.component&&qt[t.component].component})]}),Object(We.jsx)(Gt,{})]})})};n(493);var Yt={absolute:0,alpha:0,beta:0,gamma:0,degrees:0,deviceOrientationPermitted:"iphone"!==(navigator.userAgent.indexOf("iPhone")>0||navigator.userAgent.indexOf("iPad")>0||navigator.userAgent.indexOf("Macintosh")>0||navigator.userAgent.indexOf("iPod")>0?"iphone":navigator.userAgent.indexOf("Android")>0?"android":"pc")},Zt=Object(v.c)({name:"count",initialState:Yt,reducers:{setAbsolute:function(e,t){e.absolute=t.payload},setAlpha:function(e,t){e.alpha=t.payload},setBeta:function(e,t){e.beta=t.payload},setGamma:function(e,t){e.gamma=t.payload},setDegrees:function(e,t){e.degrees=t.payload},setDeviceOrientationPermitted:function(e,t){e.deviceOrientationPermitted=t.payload}}}),$t=(Zt.actions,Zt.reducer),_t=Object(v.a)({reducer:{appState:k,bitcoinState:je,countState:z,cubeState:$t,spinLogoState:J,whiteNoiseState:Mt}});u.a.render(Object(We.jsx)(l.a,{store:_t,children:Object(We.jsx)(Xt,{})}),document.getElementById("root"))}},[[494,1,2]]]);
//# sourceMappingURL=main.2e5e2db6.chunk.js.map
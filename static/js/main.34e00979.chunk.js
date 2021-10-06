(this["webpackJsonpreact-ts-app"]=this["webpackJsonpreact-ts-app"]||[]).push([[0],{76:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);var c,r,a,o,i,s=t(9),u=t.n(s),p=t(15),j=t(20),d=t(0),l=t.n(d),b=t(21),f=t(104),O=t(111),m=t(106),h=t(113),x=t(107),g=t(109),v=t(110),y=t(105),w=t(108),k=function(){return Object(p.c)()},S=p.d,C=t(17),M=["count","spinLogo"],L=Object(C.c)({name:"app",initialState:{openMenu:!1,component:"count"},reducers:{setOpenMenu:function(n,e){n.openMenu=e.payload},setComponent:function(n,e){n.component=e.payload}}}),P=L.actions,F=L.reducer,A=t(102),E=t(103),B=t(112),D=t(100),J=t(39),z=t(101),I=t(26),K=t(34),R=t.n(K),T=t(43),q=function(){var n=Object(T.a)(R.a.mark((function n(e,t){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,c){setTimeout((function(){Math.random()<e/100&&n(!0),c(new Error)}),1e3*t)})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),G=Object(C.b)("lastcount/fetch",function(){var n=Object(T.a)(R.a.mark((function n(e,t){var c;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.dispatch(Q.setProgress(!0)),n.next=3,q(e.percent,e.second).catch((function(){return!1}));case 3:if(c=n.sent,t.dispatch(Q.setProgress(!1)),!c){n.next=7;break}return n.abrupt("return",{count:e.value});case 7:throw new Error("fetch count error");case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),H=G,N=Object(C.c)({name:"count",initialState:{message:"",progress:!1,count:0,percent:50},reducers:{setShowingPercent:function(n,e){n.percent=e.payload},setProgress:function(n,e){n.progress=e.payload},setMessasge:function(n,e){n.message=e.payload},increment:function(n){n.count+=1},decrement:function(n){n.count-=1},incrementByAmount:function(n,e){n.count+=e.payload}},extraReducers:function(n){n.addCase(H.pending,(function(n,e){return Object(I.a)(Object(I.a)({},n),{},{message:"\u5224\u5b9a\u4e2d\u3067\u3059\u3002".concat(e.meta.arg.second,"\u79d2\u5f8c\u306b").concat(e.meta.arg.percent,"%\u306e\u78ba\u7387\u3067").concat(e.meta.arg.value,"\u5897\u3048\u307e\u3059\u3002")})})),n.addCase(H.fulfilled,(function(n,e){return Object(I.a)(Object(I.a)({},n),{},{count:n.count+e.payload.count,message:"\u5224\u5b9a\u306b\u6210\u529f\u3057\u307e\u3057\u305f\u3002".concat(e.payload.count,"\u5897\u3048\u307e\u3057\u305f\u3002")})})),n.addCase(H.rejected,(function(n){return Object(I.a)(Object(I.a)({},n),{},{message:"\u5224\u5b9a\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u30021\u6e1b\u308a\u307e\u3057\u305f\u3002",count:n.count-1})}))}}),Q=N.actions,U=N.reducer,V=t(2),W=Object(b.a)(B.a)(c||(c=Object(j.a)(["\n\tmax-width: 40vmin;\n"]))),X=function(){var n=S((function(n){return n}),p.b).countState,e=k();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("p",{children:n.count}),Object(V.jsxs)("p",{children:[Object(V.jsx)(D.a,{color:"primary",onClick:function(){e(Q.increment())},variant:"contained",children:"\u5897\u3084\u3059"}),Object(V.jsx)(D.a,{color:"secondary",onClick:function(){e(Q.decrement())},variant:"contained",children:"\u6e1b\u3089\u3059"})]}),Object(V.jsxs)(J.a,{id:"percent-slider-label",children:["\u78ba\u7387\uff1a",n.percent,"%"]}),Object(V.jsx)(W,{"aria-labelledby":"percent-slider-label",disabled:n.progress,max:100,min:0,onChange:function(n,t){return e(Q.setShowingPercent(t))},value:n.percent,valueLabelDisplay:"off"}),Object(V.jsx)("p",{children:Object(V.jsx)(D.a,{color:"default",disabled:n.progress,onClick:function(){e(H({percent:n.percent,value:100,second:3}))},variant:"contained",children:"\u975e\u540c\u671f"})}),Object(V.jsx)(J.a,{color:"error",children:n.message}),n.progress&&Object(V.jsx)(z.a,{})]})},Y=Object(C.c)({name:"spinLogo",initialState:{spin:!1},reducers:{setSpinLogo:function(n,e){n.spin=e.payload}}}),Z=Y.actions,$=Y.reducer,_=t.p+"static/media/logo.6ce24c58.svg",nn=b.a.img(r||(r=Object(j.a)(['\n\theight: 40vmin;\n\tpointer-events: none;\n\n\t&[data-spinning="true"] {\n\t\tanimation: App-logo-spin infinite 1s linear;\n\t}\n\n\t@keyframes App-logo-spin {\n\t\tfrom {\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\tto {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n']))),en=function(){var n=S((function(n){return n}),p.b).spinLogoState,e=k();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(nn,{alt:"logo","data-spinning":n.spin,src:_}),Object(V.jsx)("p",{children:Object(V.jsx)(D.a,{color:"primary",onClick:function(){e(Z.setSpinLogo(!n.spin))},variant:"contained",children:n.spin?"\u6b62\u3081\u308b":"\u307e\u308f\u3059"})})]})},tn={count:{component:Object(V.jsx)(X,{}),name:"\u30ab\u30a6\u30f3\u30c8\u30a2\u30c3\u30d7",icon:Object(V.jsx)(A.a,{})},spinLogo:{component:Object(V.jsx)(en,{}),name:"\u30ed\u30b4\u307e\u308f\u3057",icon:Object(V.jsx)(E.a,{})}},cn=b.a.div(a||(a=Object(j.a)(["\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n"]))),rn=function(){var n=S((function(n){return n}),p.b).appState,e=k();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(cn,{children:Object(V.jsx)(f.a,{onClick:function(){return e(P.setOpenMenu(!n.openMenu))},children:Object(V.jsx)(y.a,{})})}),Object(V.jsx)(O.a,{anchor:"left",onClose:function(){return e(P.setOpenMenu(!1))},open:n.openMenu,children:Object(V.jsxs)("div",{onKeyDown:function(){return e(P.setOpenMenu(!1))},role:"presentation",children:[Object(V.jsx)(m.a,{children:Object(V.jsxs)(h.a,{button:!0,onClick:function(){e(P.setOpenMenu(!1))},children:[Object(V.jsx)(x.a,{children:Object(V.jsx)(w.a,{})}),Object(V.jsx)(g.a,{primary:"\u9589\u3058\u308b"})]})}),Object(V.jsx)(v.a,{}),Object(V.jsx)(m.a,{children:M.map((function(n){return Object(V.jsxs)(h.a,{button:!0,onClick:function(){e(P.setComponent(n)),e(P.setOpenMenu(!1))},children:[Object(V.jsx)(x.a,{children:tn[n].icon}),Object(V.jsx)(g.a,{primary:tn[n].name})]},n)}))})]})})]})},an=b.a.div(o||(o=Object(j.a)(["\n\ttext-align: center;\n\tp {\n\t\tmargin: 2px;\n\t}\n\ta {\n\t\tcolor: #004457;\n\t}\n"]))),on=b.a.header(i||(i=Object(j.a)(["\n\tbackground-color: #e6eeff;\n\tposition: absolute;\n\twidth: 100vw;\n\theight: 100vh;\n\theight: -webkit-fill-available;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: black;\n"]))),sn=function(){var n=S((function(n){return n}),p.b).appState;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(l.a.StrictMode,{children:Object(V.jsx)(an,{children:Object(V.jsxs)(on,{children:["\u300c",Object(V.jsx)("a",{href:"https://github.com/nishidemasami/study-react",children:"https://github.com/nishidemasami/study-react"}),"\u300d\u3092\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044",tn[n.component].component]})})}),Object(V.jsx)(rn,{})]})},un=(t(76),Object(C.a)({reducer:{countState:U,appState:F,spinLogoState:$}}));u.a.render(Object(V.jsx)(p.a,{store:un,children:Object(V.jsx)(sn,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.34e00979.chunk.js.map
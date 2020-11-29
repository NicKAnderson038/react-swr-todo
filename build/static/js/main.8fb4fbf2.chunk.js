(this["webpackJsonpreact-swr-todo"]=this["webpackJsonpreact-swr-todo"]||[]).push([[0],{101:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(0),r=n.n(a),o=n(9),s=n.n(o),i=(n(101),n(19)),d=n(180),j=n(181),l=n(83),b=n.n(l),u=n(84),m=n(179),x=n(26),h=n.n(x),O=n(16),p=n(28),f=n.n(p),g=n(39),v=n(4),y=n(165),w=n(166),N=n(167),k=n(183),C=n(168),F=n(139),B=n(169),S=n(170),U=n(171),I=n(172),A=n(173),D=n(78),L=n.n(D),T=n(34),P=n(184),W="/react-swr-todo/",z=Object(v.a)((function(e){return{head:{backgroundColor:"#555454",color:e.palette.common.white},body:{fontSize:14}}}))(y.a),J=Object(v.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover},"&:hover, &:focus":{backgroundColor:"#5b67f37d"}}}}))(w.a),M=Object(N.a)({link:{textDecoration:"none"},text:{fontFamily:"bungee",fontWeight:300}}),E=function(e){var t=e.commentsFromServer,n=Object(O.b)("/db.json",{initialData:t}).data,a=M();return Object(c.jsx)(k.a,{marginTop:2,children:Object(c.jsx)(C.a,{component:F.a,children:Object(c.jsxs)(B.a,{"aria-label":"simple table",children:[Object(c.jsx)(S.a,{children:Object(c.jsxs)(J,{children:[Object(c.jsx)(z,{className:a.text,children:"Id"}),Object(c.jsx)(z,{className:a.text,children:"Comment"}),Object(c.jsx)(z,{className:a.text,align:"right",children:"Actions"})]})}),Object(c.jsx)(U.a,{children:null===n||void 0===n?void 0:n.map((function(e){return Object(c.jsxs)(J,{children:[Object(c.jsx)(i.a,{className:a.link,to:Object(T.isUndefined)(e.id)?W:"".concat(W,"user/").concat(e.id),children:Object(c.jsxs)(z,{component:"th",scope:"row",className:a.text,children:[Object(T.isUndefined)(e.id)&&Object(c.jsx)(I.a,{size:15}),e.id]})}),Object(c.jsx)(i.a,{className:a.link,to:Object(T.isUndefined)(e.id)?W:"".concat(W,"user/").concat(e.id),children:Object(c.jsx)(z,{className:a.text,children:e.comment})}),Object(c.jsx)(z,{align:"right",children:Object(c.jsx)(A.a,{variant:"contained",color:"secondary",className:a.text,startIcon:Object(c.jsx)(L.a,{}),onClick:Object(g.a)(f.a.mark((function t(){var c,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="/comments/"+e.id,a="/comments",Object(O.c)(a,n.filter((function(t){return t.id!==e.id})),!1),t.next=5,h.a.delete(c);case 5:Object(O.d)(a);case 6:case"end":return t.stop()}}),t)}))),children:"Delete"})})]},Object(P.a)())}))})]})})})};E.getInitialProps=function(){var e=Object(g.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("/comments");case 2:return n=e.sent,c=n.data,e.abrupt("return",{commentsFromServer:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var K=E,R=n(85),V=n(174),q=n(182),G=n(53),H=n(81),Q="/db.json",X=Object(N.a)({text:{fontFamily:"bungee"}});var Y=function(){var e=Object(O.b)(Q).data,t=X();return Object(c.jsx)(k.a,{marginTop:2,children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{className:t.text,children:["Number Of Comments: ",null===e||void 0===e?void 0:e.length]}),Object(c.jsx)(G.c,{initialValues:{comment:""},onSubmit:function(){var t=Object(g.a)(f.a.mark((function t(n,c){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.body=Object(H.loremIpsum)({count:1,format:"plain",paragraphLowerBound:3,paragraphUpperBound:7,random:Math.random,sentenceLowerBound:5,sentenceUpperBound:10,suffix:"\n",units:"sentences"}),Object(O.c)(Q,[].concat(Object(R.a)(e),[n]),!1),t.next=4,h.a.post(Q,n);case 4:Object(O.d)(Q),c.resetForm();case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),children:Object(c.jsxs)(G.b,{children:[Object(c.jsx)(V.a,{children:Object(c.jsx)(G.a,{autoComplete:"off",as:q.a,name:"comment",label:"Comment"})}),Object(c.jsx)(k.a,{marginTop:1,children:Object(c.jsx)(A.a,{className:t.text,type:"submit",variant:"contained",color:"primary",children:"Add Comment"})})]})})]})})},Z=n(175),$=n(176),_=n(177),ee=n(185),te=n(178),ne=n(82),ce=n.n(ne),ae=Object(N.a)({root:{justifyContent:"center",display:"grid"},card:{minWidth:400,maxWidth:600},text:{fontFamily:"bungee"},large:{width:"60px",height:"60px"},link:{textDecoration:"none"},loader:{display:"inline"}});var re=function(e){var t=e.id,n=Object(O.b)("/db.json").data,a=ae(),r=null===n||void 0===n?void 0:n.filter((function(e){return"".concat(e.id)===t})).pop();return Object(c.jsxs)("div",{className:a.root,children:[Object(c.jsx)("br",{}),Object(c.jsx)(Z.a,{color:"primary","aria-label":"Add",children:Object(c.jsxs)(i.a,{to:"/react-swr-todo/",children:[" ",Object(c.jsx)(ce.a,{style:{color:"white"}})]})}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)($.a,{className:a.card,children:Object(T.isUndefined)(r)?Object(c.jsx)(_.a,{children:Object(c.jsx)(I.a,{className:a.loader,size:100})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_.a,{children:Object(c.jsx)(ee.a,{className:a.large,src:"https://i.pravatar.cc/150?img=".concat(t)})}),Object(c.jsx)(_.a,{children:Object(c.jsx)(te.a,{className:a.text,color:"textPrimary",gutterBottom:!0,children:"".concat(r.id,": ").concat(r.comment)})}),Object(c.jsx)(_.a,{children:Object(c.jsx)(te.a,{className:a.text,color:"textSecondary",gutterBottom:!0,children:r.body})})]})})]})};n(135);h.a.defaults.baseURL="https://github.com/NicKAnderson038/react-swr-todo";var oe="/react-swr-todo/",se=Object(u.a)({palette:{primary:{main:"#556cd6"},error:{main:b.a.A400},background:{default:"beige"}}});var ie=function(){return Object(c.jsxs)(m.a,{theme:se,children:[Object(c.jsx)(d.a,{}),Object(c.jsx)(O.a,{value:{fetcher:function(e){return h()(e).then((function(e){return e.data}))}},children:Object(c.jsx)(j.a,{maxWidth:!1,children:Object(c.jsxs)(i.c,{children:[Object(c.jsxs)(i.b,{path:oe,children:[Object(c.jsx)(Y,{}),Object(c.jsx)(K,{})]}),Object(c.jsx)(i.b,{path:"".concat(oe,"user/:id"),children:function(e){return Object(c.jsx)(re,{id:e.id})}}),Object(c.jsx)(i.b,{children:"404, Not Found!"})]})})})]})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(ie,{})}),document.getElementById("root")),de()}},[[136,1,2]]]);
//# sourceMappingURL=main.8fb4fbf2.chunk.js.map
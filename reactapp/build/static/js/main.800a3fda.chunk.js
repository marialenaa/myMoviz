(this.webpackJsonpmymoviz=this.webpackJsonpmymoviz||[]).push([[0],{44:function(e,t,a){e.exports=a(79)},49:function(e,t,a){},56:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(12),r=a.n(o),l=(a(49),a(43)),i=a(21),s=a.n(i),m=a(40),u=a(10),g=a(89),d=a(90),v=a(91),f=a(92),E=a(93),b=a(97),p=a(94),h=a(95),y=a(82),k=a(83),j=a(85),O=a(96),C=a(81),w=a(13),S=a(14),M=a(84),x=a(86),z=a(87),L=a(88);function A(e){var t=[],a=[],o=[],r=Object(n.useState)(!1),l=Object(u.a)(r,2),i=l[0],s=l[1],m=Object(n.useState)(0),g=Object(u.a)(m,2),d=g[0],v=g[1],f=Object(n.useState)(0),E=Object(u.a)(f,2),b=E[0],p=E[1],h=Object(n.useState)(0),O=Object(u.a)(h,2),A=O[0],P=O[1],R="";e.isAlreadyLiked&&(console.log("color"),R="#e74c3c");var N={margin:"0 5px",cursor:"pointer",color:"".concat(R)},D="";i&&(D="#e74c3c");for(var I=Math.floor(e.globalRating),B=b?(b+I)/2:I,W=0;W<10;W++)W<B?t.push(c.a.createElement(w.a,{icon:S.b,size:"sm",color:"#efc300"})):t.push(c.a.createElement(w.a,{icon:S.b,size:"sm"}));for(var J=function(){G="",F<b&&(G="#efc300");var e=F+1;o.push(c.a.createElement(w.a,{onClick:function(){return $(e)},size:"sm",icon:S.b,color:"".concat(G)}))},F=0;F<10;F++){var G;J()}var $=function(e){p(e),P(1)},q=e.globalCountRating+A;return c.a.createElement(C.a,{style:{marginBottom:5},xs:"12",md:"8",lg:"4"},c.a.createElement(y.a,null,c.a.createElement(k.a,{top:!0,width:"100%",src:"/img".concat(e.movieImg),alt:"RdN"}),c.a.createElement(M.a,{style:{padding:10}},c.a.createElement(j.a,{onClick:function(){return t=e.movieName,a=e.movieImg,void(e.isAlreadyLiked?e.handleClickDeleteMovieParent(t):e.handleClickAddMovieParent(t,a));var t,a}},"Like",c.a.createElement(w.a,{style:N,icon:S.a})),c.a.createElement(x.a,null," Nombre de vues",c.a.createElement(w.a,{onClick:function(){return s(!0),void v(d+1)},style:{margin:"0 5px",cursor:"pointer",color:"".concat(D)},icon:S.c}),c.a.createElement(z.a,null,d)),c.a.createElement(L.a,null," Mon avis :",c.a.createElement(z.a,{onClick:function(){P(1),p(b>0?b-1:0)},style:{cursor:"pointer"},size:"sm"},"-"),o,c.a.createElement(z.a,{onClick:function(){P(1),p(b<10?b+1:10)},style:{cursor:"pointer"},size:"sm"},"+")),c.a.createElement(L.a,null," Moyenne ",a),c.a.createElement(L.a,null," Global avis ",t,c.a.createElement(z.a,null,q)),c.a.createElement(L.a,null," ",e.movieName),c.a.createElement(L.a,null," ",e.desc," "))))}a(56);var P=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/newmovies");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a.movies),console.log(t,a,"yeeeeeeeeeeeeeeeeeeeeeeeeah");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){return function(){console.log("App is detruit")}}),[]);var r=Object(n.useState)(0),i=Object(u.a)(r,2),C=i[0],w=i[1],S=Object(n.useState)(!1),M=Object(u.a)(S,2),x=M[0],z=M[1],L=Object(n.useState)([]),P=Object(u.a)(L,2),R=P[0],N=P[1],D=function(e,t){N([].concat(Object(l.a)(R),[{name:e,img:t}])),w(C+1)},I=function(e){N(R.filter((function(t){return t.name!==e}))),w(C-1)};return c.a.createElement("div",{style:{height:"100vh",backgroundColor:"#3b4754"}},c.a.createElement(g.a,null,c.a.createElement(d.a,{pills:!0,style:{padding:15}},c.a.createElement(v.a,null,c.a.createElement("img",{style:{heigth:"100%"},src:"/img/logo.png",alt:"logo"})),c.a.createElement(v.a,null,c.a.createElement(f.a,{style:{listStyle:"none"}},"Last Releases")),c.a.createElement(v.a,null,c.a.createElement(E.a,{id:"Popover1",type:"button"},C," Films"),c.a.createElement(b.a,{trigger:"legacy",placement:"bottom",isOpen:x,target:"Popover1",toggle:function(){return z(!x)}},c.a.createElement(p.a,null,"WishList"),c.a.createElement(h.a,{style:{backgroundColor:"#333",borderColor:"#333",color:"white"}},0===R.length?"Liste vide":"",R.map((function(e,t){return c.a.createElement(y.a,{body:!0,key:t},c.a.createElement(k.a,{top:!0,width:"20%",src:"/img".concat(e.img),alt:"Card image cap"}),c.a.createElement(j.a,{style:{color:"black"}},e.name),c.a.createElement(E.a,{onClick:function(){return I(e.name)}},"Delete"))})))))),c.a.createElement(O.a,null,a.map((function(e,t){var a=R.find((function(t){return t.name===e.name}));console.log(a);var n=!1;return void 0!==a&&(n=!0),c.a.createElement(A,{key:t,handleClickDeleteMovieParent:I,isAlreadyLiked:n,handleClickAddMovieParent:D,movieName:e.name,movieDesc:e.desc,movieImg:e.img,globalRating:e.note,globalCountRating:e.vote})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.800a3fda.chunk.js.map
(this.webpackJsonpatest=this.webpackJsonpatest||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),r=c(11),s=c.n(r),u=c(10),j=c(55),i=c(52);var l=function(e){var t=e.value;return Object(n.jsx)("div",{children:Object(n.jsx)(i.a,{component:"p",children:t>=0&&t<=9?"0".concat(t):t})})},b=c(54),d=c(53);var O=function(e){var t=e.value,c=e.handleFunc,a=e.disabled,r=Object(d.a)("(max-width:250px)");return Object(n.jsx)("div",{children:Object(n.jsx)(b.a,{variant:"contained",color:"secondary",size:r?"small":"medium",onClick:c,disabled:a,children:t})})};var o=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(0),i=Object(u.a)(s,2),b=i[0],d=i[1],o=Object(a.useState)(0),v=Object(u.a)(o,2),f=v[0],x=v[1],h=Object(a.useState)(!1),m=Object(u.a)(h,2),p=m[0],S=m[1],y=Object(a.useState)(!0),F=Object(u.a)(y,2),I=F[0],N=F[1],k=Object(a.useState)(!0),w=Object(u.a)(k,2),z=w[0],E=w[1],J=Object(a.useRef)(null),R=Object(a.useRef)(!0);return Object(a.useEffect)((function(){0!==f||R.current||d((function(e){return 59===e?0:e+1}))}),[0===f]),Object(a.useEffect)((function(){0!==b||R.current||r((function(e){return e+1}))}),[0===b]),Object(n.jsxs)(j.a,{className:"timer",raised:!0,children:[Object(n.jsxs)("div",{className:"timer_content",children:[Object(n.jsx)(l,{value:c})," ",Object(n.jsx)("span",{style:{fontSize:"5.25rem"},children:":"}),Object(n.jsx)(l,{value:b})," ",Object(n.jsx)("span",{style:{fontSize:"5.25rem"},children:":"}),Object(n.jsx)(l,{value:f})]}),Object(n.jsxs)("div",{className:"timer_button",children:[Object(n.jsx)(O,{value:"start",handleFunc:function(){J.current=setInterval((function(){x((function(e){return 59===e?0:e+1}))}),1e3),R.current=!1,S(!0),N(!1),E(!1)},disabled:p}),Object(n.jsx)(O,{value:"stop",handleFunc:function(){clearInterval(J.current),S(!1),N(!0),E(!1),0===c&&0===b&&0===f&&(S(!1),N(!0),E(!0))},disabled:I}),Object(n.jsx)(O,{value:"reset",handleFunc:function(){clearInterval(J.current),r(0),d(0),x(0),R.current=!0,S(!1),N(!0),E(!0)},disabled:z})]})]})};var v=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(o,{})})};c(32);s.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b3f7fbc4.chunk.js.map
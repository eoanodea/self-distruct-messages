(this.webpackJsonpsdm=this.webpackJsonpsdm||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(6),o=n.n(r),i=(n(12),n(2)),u=n.p+"static/media/logo.b3fb271f.gif",l=n.p+"static/media/unlocked.a97ea20a.gif",p=n.p+"static/media/loading.d428528c.gif",d=(n(13),n(3)),j=n.n(d),h=n(5),b="https://self-destruct-message-server.herokuapp.com",m="/api/",f=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b).concat(m,"messages/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b).concat(m,"messages/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 3:return n=e.sent,e.abrupt("return",n.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var O=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],r=c.a.useState(""),o=Object(i.a)(r,2),d=o[0],j=o[1],h=c.a.useState(null),b=Object(i.a)(h,2),m=b[0],O=b[1],x=c.a.useState(!1),v=Object(i.a)(x,2),A=v[0],N=v[1],k=c.a.useState(null),y=Object(i.a)(k,2),w=y[0],C=y[1];return n?Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:A?p:l,className:"App-logo",alt:"logo"}),Object(a.jsx)("p",{children:"Secure Message:"}),Object(a.jsx)("p",{className:"message",children:w}),Object(a.jsx)("button",{disabled:A,className:"erase-button",onClick:function(){N(!0),g(d).then((function(e){if(N(!1),!e||e.error)return O("Could not destroy message");s(!1),C(null),j("")}))},children:"Destroy"})]})}):Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:A?p:u,className:"App-logo",alt:"logo"}),Object(a.jsx)("p",{children:"Enter your passphrase to continue"}),Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsx)("input",{type:"text",id:"passcode",value:d,onChange:function(e){return j(e.target.value)},placeholder:"Passphrase"}),Object(a.jsx)("button",{className:"submit-button",disabled:A,onClick:function(){if(""===d)return O("Passphrase cannot be blank");N(!0),O(null),f(d).then((function(e){if(N(!1),!e||e.error)return O("Passphrase is not correct");s(!0),C(e.message.message)}))},children:"Enter"})]}),m&&Object(a.jsxs)("p",{className:"error",children:[" ",m]})]})})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4f360f0b.chunk.js.map
"use strict";(self.webpackChunk_goit_react_hw_05_movies=self.webpackChunk_goit_react_hw_05_movies||[]).push([[779],{9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,u,c,i,s=e(5861),o=e(885),p=e(7757),f=e.n(p),l=e(2791),h=e(470),v=e(168),d=e(6444),x=d.ZP.p(r||(r=(0,v.Z)(["\n  font-size: 16px;\n"]))),g=d.ZP.ul(a||(a=(0,v.Z)(["\n  padding-left: 18px;\n  margin: 13px auto;\n"]))),m=d.ZP.li(u||(u=(0,v.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 7px;\n  }\n"]))),w=d.ZP.h3(c||(c=(0,v.Z)(["\n  font-size: 14px;\n  line-height: 1.18;\n  margin: 11px 0;\n"]))),Z=d.ZP.p(i||(i=(0,v.Z)(["\n  font-size: 14px;\n"]))),k=e(9364),_=e(9245),y=e(184),b=function(){var n=(0,l.useState)(!1),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)(null),u=(0,o.Z)(a,2),c=u[0],i=u[1],p=(0,h.UO)().id;return(0,l.useEffect)((function(){function n(){return(n=(0,s.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,k.tx(p,1);case 4:t=n.sent,i(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,r(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[p]),(0,y.jsxs)(y.Fragment,{children:[e&&(0,y.jsx)(_.Z,{}),c&&0===c.total_pages&&(0,y.jsx)(x,{children:"We don't have any reviews for this movie."}),c&&c.results.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,y.jsx)(g,{children:(0,y.jsxs)(m,{children:[(0,y.jsxs)(w,{children:["Author: ",e]}),(0,y.jsx)(Z,{children:r})]},t)})}))]})}},9364:function(n,t,e){e.d(t,{Df:function(){return o},M1:function(){return l},Qu:function(){return p},TP:function(){return f},tx:function(){return h}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c),s="4bd87f9a1e1db4e219812f040092082f";i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/week?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.c26e771b.chunk.js.map
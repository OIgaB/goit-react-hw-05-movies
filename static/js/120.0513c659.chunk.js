"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[120],{854:function(e,t,r){var n=r(691),a=r(184);t.Z=function(){return(0,a.jsx)(n.ko,{height:"90",width:"90",ariaLabel:"progress-bar-loading",wrapperStyle:{position:"fixed",top:"20%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"progress-bar-wrapper",borderColor:"#f4e02e",barColor:"#515dff"})}},972:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),c=r(757),s=r.n(c),o=r(689),u=r(791),i=r(714),p=r(854),h=r(184),f=function(e){var t=e.reviews;return(0,h.jsxs)(h.Fragment,{children:[0===t.length&&(0,h.jsx)("p",{children:"We don't have any reviews for this movie"}),(0,h.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.author,n=e.content,a=e.created_at,c=e.updated_at,s=new Date(a).toLocaleString(),o=new Date(c).toLocaleString();return(0,h.jsxs)("li",{children:[(0,h.jsxs)("p",{children:["Author: ",(0,h.jsx)("span",{children:r})]}),(0,h.jsx)("p",{children:n}),(0,h.jsxs)("p",{children:["Created: ",(0,h.jsx)("span",{children:s})]}),s!==o&&(0,h.jsxs)("p",{children:["Updated: ",(0,h.jsx)("span",{children:o})]})]},t)}))})]})},l=function(){var e=(0,o.UO)().movieId,t=(0,u.useState)([]),r=(0,a.Z)(t,2),c=r[0],l=r[1],d=(0,u.useState)(!1),v=(0,a.Z)(d,2),g=v[0],w=v[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r,n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,i.Z.fetchReviewByID(e);case 4:r=t.sent,n=r.data,a=n.results.map((function(e){return{id:e.id,author:e.author,content:e.content,created_at:e.created_at,updated_at:e.updated_at}})),l(a),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0.message);case 13:return t.prev=13,w(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,h.jsxs)(h.Fragment,{children:[g&&(0,h.jsx)(p.Z,{}),(0,h.jsx)(f,{reviews:c})]})}},714:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),s=r(243),o="https://api.themoviedb.org/",u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI1MGEwMzgzN2JjMWM0MGFkYTM4YjY3YjQxMzRlMyIsInN1YiI6IjY0N2FmOGQ2ZTMyM2YzMDBjNDI5ZDU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v-u6MiKiDbohMjislfmvIWqj_E9JTpeDNp3nEaFfpD0"}},i=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"3/trending/movie/day?language=en-US&page=1"),u);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"3/movie/").concat(t,"?language=en-US&page=1"),u);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"3/movie/").concat(t,"/credits?language=en-US&page=1"),u);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"3/movie/").concat(t,"/reviews?language=en-US&page=1"),u);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),l={fetchTrendingMovies:i,fetchMovieByID:p,fetchCastByID:h,fetchReviewByID:f};t.Z=l}}]);
//# sourceMappingURL=120.0513c659.chunk.js.map
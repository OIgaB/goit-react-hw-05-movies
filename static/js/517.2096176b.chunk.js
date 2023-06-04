"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[517],{854:function(e,r,t){var n=t(691),a=t(184);r.Z=function(){return(0,a.jsx)(n.ko,{height:"90",width:"90",ariaLabel:"progress-bar-loading",wrapperStyle:{position:"fixed",top:"20%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"progress-bar-wrapper",borderColor:"#f4e02e",barColor:"#515dff"})}},517:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(433),a=t(861),c=t(439),s=t(757),i=t.n(s),o=t(791),u=t(689),l=t(87),p=t(714),h=t(184),v=function(e){var r=e.movie,t=r.original_title,n=r.genres,a=r.overview,c=r.poster_path,s=r.vote_average,i=r.release_date,o=new Date(i);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:"visually-hidden",children:"Selected Movie"}),(0,h.jsxs)("section",{children:[c&&(0,h.jsx)("img",{alt:"movie poster",src:"https://image.tmdb.org/t/p/original/".concat(c),width:"250"}),(0,h.jsx)("h3",{children:t}),(0,h.jsxs)("p",{children:["(",o.getFullYear(),")"]}),s&&(0,h.jsxs)("p",{children:["User Score:",(0,h.jsxs)("span",{children:[10*s.toFixed(1),"%"]}),"   "]}),(0,h.jsx)("h4",{children:"Overview"}),(0,h.jsx)("p",{children:a}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:n&&n.map((function(e){return e.name})).join(", ")})]})]})},f=t(854),d=function(){var e,r,t=(0,o.useState)([]),s=(0,c.Z)(t,2),d=s[0],g=s[1],x=(0,o.useState)(!1),m=(0,c.Z)(x,2),w=m[0],j=m[1],y=(0,u.UO)().movieId,b=(0,u.s0)(),Z=(0,u.TH)(),k=(0,o.useRef)(null!==(e=null===(r=Z.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var r,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,p.Z.fetchMovieByID(y);case 4:r=e.sent,t=r.data,a=[t].map((function(e){return{id:e.id,original_title:e.original_title,genres:e.genres,overview:e.overview,poster_path:e.poster_path,vote_average:e.vote_average,release_date:e.release_date}})),g.apply(void 0,(0,n.Z)(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:return e.prev=13,j(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{type:"button",onClick:function(){b(k.current)},children:"Go back"}),w&&(0,h.jsx)(f.Z,{}),(0,h.jsx)(v,{movie:d}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loadin..."}),children:(0,h.jsx)(u.j3,{})})]})}},714:function(e,r,t){var n=t(861),a=t(757),c=t.n(a),s=t(243),i="https://api.themoviedb.org/",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI1MGEwMzgzN2JjMWM0MGFkYTM4YjY3YjQxMzRlMyIsInN1YiI6IjY0N2FmOGQ2ZTMyM2YzMDBjNDI5ZDU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v-u6MiKiDbohMjislfmvIWqj_E9JTpeDNp3nEaFfpD0"}},u=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"3/trending/movie/day?language=en-US&page=1"),o);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"3/movie/").concat(r,"?language=en-US&page=1"),o);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"3/movie/").concat(r,"/credits?language=en-US&page=1"),o);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"3/movie/").concat(r,"/reviews?language=en-US&page=1"),o);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"3/search/movie?query=").concat(r,"&include_adult=false&language=en-US&page=1"),o);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}(),f={fetchTrendingMovies:u,fetchMovieByID:l,fetchCastByID:p,fetchReviewByID:h,fetchCollectionByQuery:v};r.Z=f}}]);
//# sourceMappingURL=517.2096176b.chunk.js.map
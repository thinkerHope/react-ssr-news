!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-lazy-load-image-component")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){"use strict";r.r(t);r(14);var n=r(8),a=r.n(n),c=r(0),l=r.n(c),o=r(3),i=r(9),s=r.n(i),u=r(10),m=r(2),f=r(4),p=r(11),d=r.n(p),y=r(5),v=r(7),h=r(1),b=r.n(h),E=r(12),g=r.n(E),w={apikey:"enter-your-api-key"};function N(e,t,r,n,a,c,l){try{var o=e[c](l),i=o.value}catch(e){return void r(e)}o.done?t(i):Promise.resolve(i).then(n,a)}var O=function(e){return function(){var t,r=(t=regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e?"https://newsapi.org/v2/top-headlines?sources=".concat(e,"&apiKey=").concat(w.apikey):"https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(w.apikey),t.next=3,g.a.get(n);case 3:a=t.sent,r({type:"fetch_articles",payload:a.data.articles});case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var c=t.apply(e,r);function l(e){N(c,n,a,l,o,"next",e)}function o(e){N(c,n,a,l,o,"throw",e)}l(void 0)}))});return function(e){return r.apply(this,arguments)}}()},j=function(e){var t=e.handler,r=e.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"modal1",className:"modal",style:{zIndex:1003,display:"block",opacity:1,top:10,width:"95vw",height:"95vh",maxHeight:"95vh"}},l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",onClick:t,className:"modal-close waves-effect waves-green btn red"},"Close")),l.a.createElement("div",{className:"modal-content"},l.a.createElement("h4",null,r.title),l.a.createElement("img",{className:"responsive-img",src:r.urlToImage,alt:r.title}),l.a.createElement("p",null,r.description),l.a.createElement("p",null,r.content),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("a",{href:r.url,className:"waves-effect waves-light btn",target:"_blank",rel:"noopener noreferrer"},"Full Article")))),l.a.createElement("div",{role:"presentation",onClick:t,className:"modal-overlay",style:{zIndex:1002,display:"block",opacity:.5}}))};j.propTypes={data:b.a.objectOf(b.a.any),handler:b.a.func},j.defaultProps={data:null,handler:null};var k=j;function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=function(e){var t=S(Object(c.useState)(!1),2),r=t[0],n=t[1],a=S(Object(c.useState)({}),2),o=a[0],i=a[1],s=e.fetchArticles;return Object(c.useEffect)((function(){window.scrollTo(0,0),s()}),[s]),l.a.createElement("div",null,l.a.createElement(y.Helmet,{key:Math.random()},l.a.createElement("title",null,"SSR Daily News - ilker ALTIN"),l.a.createElement("meta",{property:"og:title",content:"SSR Daily News - ilker ALTIN"}),l.a.createElement("meta",{name:"description",content:"Breaking news,latest articles, popular articles from most popular news websites of the world"}),l.a.createElement("meta",{name:"robots",content:"index, follow"}),l.a.createElement("link",{rel:"canonical",href:"https://react-ssr-ilker.herokuapp.com"})),r?l.a.createElement(k,{handler:function(){n(!1)},data:o}):null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"section"},l.a.createElement("h3",null,"Popular Articles")),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"row"},e.articles.map((function(e){return l.a.createElement("div",{className:"col s12 m6 l6 xl4",key:e.title},l.a.createElement("div",{className:"card large"},l.a.createElement("div",{className:"card-image"},l.a.createElement(v.LazyLoadImage,{alt:e.title,src:e.urlToImage})),l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},e.title)),l.a.createElement("div",{className:"card-action"},l.a.createElement("a",{className:"waves-effect waves-light",onClick:function(){return function(e){i(e),n(!0)}(e)}},"Read More"))))}))))))};P.propTypes={articles:b.a.arrayOf(b.a.any),fetchArticles:b.a.func},P.defaultProps={articles:[],fetchArticles:null};var A={component:Object(f.connect)((function(e){return{articles:e.articles}}),{fetchArticles:O})(P),loadData:function(e){return e.dispatch(O())}},T=function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,l.a.createElement("div",{className:"ui container"},l.a.createElement("h1",null,"Page Not Found!!!"),l.a.createElement("p",null,"Please try again!"))};T.propTypes={staticContext:b.a.objectOf(b.a.any)},T.defaultProps={staticContext:{}};var R={component:T};function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=function(e){var t=C(Object(c.useState)(!1),2),r=t[0],n=t[1],a=C(Object(c.useState)({}),2),o=a[0],i=a[1],s=e.articles,u=e.location,m=e.match,f=e&&s[0]&&s[0].source.name,p=e.fetchArticles;return Object(c.useEffect)((function(){window.scrollTo(0,0),m.params.id?p(m.params.id):p()}),[p,m.params.id]),l.a.createElement("div",null,l.a.createElement(y.Helmet,{key:Math.random()},l.a.createElement("title",null,"".concat(f," Articles")),l.a.createElement("meta",{property:"og:title",content:"".concat(f," Articles List")}),l.a.createElement("meta",{name:"description",content:"Latest ".concat(f," articles, popular articles from most popular news websites of the world")}),l.a.createElement("meta",{name:"robots",content:"index, follow"}),l.a.createElement("link",{rel:"canonical",href:"https://react-ssr-ilker.herokuapp.com".concat(u.pathname)})),r?l.a.createElement(k,{handler:function(){n(!1)},data:o}):null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"section"},l.a.createElement("h3",null,f)),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"row"},e.articles.map((function(e){return l.a.createElement("div",{className:"col s12 m6 l6 xl4",key:e.title},l.a.createElement("div",{className:"card large"},l.a.createElement("div",{className:"card-image"},l.a.createElement(v.LazyLoadImage,{alt:e.title,src:e.urlToImage})),l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},e.title)),l.a.createElement("div",{className:"card-action"},l.a.createElement("a",{className:"waves-effect waves-light",onClick:function(){return function(e){i(e),n(!0)}(e)}},"Read More"))))}))))))};L.propTypes={articles:b.a.arrayOf(b.a.any),location:b.a.objectOf(b.a.any),match:b.a.objectOf(b.a.any),fetchArticles:b.a.func},L.defaultProps={articles:[],location:null,match:null,fetchArticles:null};var _={component:Object(f.connect)((function(e){return{articles:e.articles}}),{fetchArticles:O})(L),loadData:function(e,t){return e.dispatch(O(t))}};function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=H(e);if(t){var a=H(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return F(this,r)}}function F(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(c,e);var t,r,n,a=z(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={error:null,errorInfo:null},t}return t=c,(r=[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=this.props.children;return e.errorInfo?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Something went wrong."),l.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},e.error&&e.error.toString(),l.a.createElement("br",null),e.errorInfo.componentStack)):t}}])&&M(t.prototype,r),n&&M(t,n),c}(l.a.Component);W.propTypes={children:b.a.oneOfType([b.a.arrayOf(b.a.node),b.a.node]).isRequired};var B=W;function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var K=function(){var e=U(Object(c.useState)(!1),2),t=e[0],r=e[1],n=function(){return r(!t)};return l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"red"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("a",{href:"/",className:"brand-logo"},"SSR News"),l.a.createElement("a",{onClick:n,className:"sidenav-trigger waves-effect right"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("div",{className:"sidenav-overlay",style:t?{display:"block",opacity:1}:null,onClick:n}),l.a.createElement("ul",{id:"slide-out",className:"sidenav",style:t?{transform:"translateX(0px)"}:null},l.a.createElement("li",null,l.a.createElement("a",{className:"subheader"},"Menu")),l.a.createElement("li",null,l.a.createElement("div",{className:"divider"})),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/",className:"item",onClick:n},"Home")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/techradar",className:"item",onClick:n},"Tech Radar")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/mashable",className:"item",onClick:n},"Mashable")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/the-verge",className:"item",onClick:n},"The Verge")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/the-next-web",className:"item",onClick:n},"TNW")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/wired",className:"item",onClick:n},"Wired")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/recode",className:"item",onClick:n},"Recode"))),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/techradar",className:"item"},"Tech Radar")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/mashable",className:"item"},"Mashable")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/the-verge",className:"item"},"The Verge")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/the-next-web",className:"item"},"TNW")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/wired",className:"item"},"Wired")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/articles/recode",className:"item"},"Recode")))))))},V=function(){return l.a.createElement("footer",{className:"page-footer red"},l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("div",{className:"container"},"© 2019 SSR Daily News - ilker ALTIN",l.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/ilkeraltin/react-ssr-news"},"Source Code"))))},X=function(e){var t=e.route;return l.a.createElement("div",null,l.a.createElement(K,null),l.a.createElement("div",{className:"container"},l.a.createElement(B,null,Object(o.renderRoutes)(t.routes))),l.a.createElement(V,null))};function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}X.propTypes={route:b.a.objectOf(b.a.any)},X.defaultProps={route:null};var Q=[G(G({},{component:X}),{},{routes:[G(G({},A),{},{path:"/",exact:!0}),G({path:"/articles/:id"},_),G({},R)]})],Z=r(6),ee=r(13),te=r.n(ee),re=Object(Z.combineReducers)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_articles":return t.payload;default:return e}}}),ne=a()();ne.use(s()({level:2,filter:function(e,t){return!e.headers["x-no-compression"]&&s.a.filter(e,t)}}));var ae=process.env.PORT||3e3;ne.use(a.a.static("public")),ne.get("*",(function(e,t){var r=e.params[0].split("/")[2],n=Object(Z.createStore)(re,{},Object(Z.applyMiddleware)(te.a)),a=Object(o.matchRoutes)(Q,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(n,r):null})).map((function(e){return e?new Promise((function(t,r){e.then(t).catch(t)})):null}));Promise.all(a).then((function(){var r={},a=function(e,t,r){var n=Object(u.renderToString)(l.a.createElement(f.Provider,{store:t},l.a.createElement(m.StaticRouter,{location:e.path,context:r},l.a.createElement("div",null,Object(o.renderRoutes)(Q))))),a=y.Helmet.renderStatic();return"<!DOCTYPE html>\n            <head>\n                ".concat(a.title.toString(),"\n                ").concat(a.meta.toString(),"\n                ").concat(a.link.toString(),'\n                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n            </head>\n            <body>\n                <div id="root">').concat(n,"</div>\n                <script>\n                    window.__PRELOADED_STATE__ = ").concat(d()(t.getState()).replace(/</g,"\\u003c"),'\n                <\/script>\n                <script src="/bundle.js"><\/script>\n                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n            </body>\n    </html>')}(e,n,r);r.notFound&&t.status(404),t.send(a)}))})),ne.listen(ae,(function(){console.log("Listening on port: ".concat(ae))}))}]);
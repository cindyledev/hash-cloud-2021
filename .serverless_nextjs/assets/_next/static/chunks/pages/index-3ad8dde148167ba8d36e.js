_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(s.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},s=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,s=e.hasQuery,a=void 0!==s&&s;return n||i&&a}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),o=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var s=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?s=!1:e.add(o)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var d=f[c];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?s=!1:n.add(d);else{var u=i.props[d],m=r[d]||new Set;"name"===d&&a||!m.has(u)?(m.add(u),r[d]=m):s=!1}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,i.useContext)(a.AmpStateContext),r=(0,i.useContext)(o.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=i},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),s=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||i(e)||s(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n("nKUr"),i=n("g4pe"),s=n.n(i),a=n("q1tI"),o=n("YFqc"),c=n.n(o);function l(){return Object(r.jsx)("div",{className:"bg-gray-800",children:Object(r.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",children:"Home"})}),Object(r.jsx)(c.a,{href:"/services",children:Object(r.jsx)("a",{className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Services"})}),Object(r.jsx)(c.a,{href:"/contact",children:Object(r.jsx)("a",{className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"Contact"})})]})})}function d(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return Object(r.jsxs)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden ".concat(t?"none":"block"),children:[Object(r.jsxs)("button",{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-expanded":"false",onClick:function(){n(!t)},children:[Object(r.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(r.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(r.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]}),Object(r.jsx)("div",{style:{display:t?"block":"none"},children:Object(r.jsx)(l,{})})]})}function u(){return Object(r.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(r.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[Object(r.jsx)("img",{className:"block lg:hidden h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Hash Cloud Solutions"}),Object(r.jsx)("img",{className:"hidden lg:block h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",alt:"Hash Cloud Solutions"})]}),Object(r.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(r.jsxs)("div",{className:"flex space-x-4",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{className:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",children:"Home"})}),Object(r.jsx)(c.a,{href:"/services",children:Object(r.jsx)("a",{className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Services"})}),Object(r.jsx)(c.a,{href:"/contact",children:Object(r.jsx)("a",{className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Contact"})})]})})]})}function f(){return Object(r.jsxs)("button",{className:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[Object(r.jsx)("span",{className:"sr-only",children:"View notifications"}),Object(r.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})]})}function m(){return Object(r.jsx)("div",{className:"ml-3 relative",children:Object(r.jsxs)("div",{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu",children:[Object(r.jsx)(c.a,{href:"/profile",children:Object(r.jsx)("a",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Your Profile"})}),Object(r.jsx)(c.a,{href:"/settings",children:Object(r.jsx)("a",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Settings"})}),Object(r.jsx)("a",{className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:"Sign out"})]})})}function p(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("button",{className:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",id:"user-menu","aria-haspopup":"true",onClick:function(){n(!t)},children:[Object(r.jsx)("span",{className:"sr-only",children:"Open user menu"}),Object(r.jsx)("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]}),Object(r.jsx)("div",{style:{display:t?"block":"none"},children:Object(r.jsx)(m,{})})]})}function h(){return Object(r.jsx)("nav",{className:"bg-gray-800",children:Object(r.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(r.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(r.jsx)(d,{}),Object(r.jsx)(u,{}),Object(r.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[Object(r.jsx)(f,{}),Object(r.jsx)("div",{className:"ml-3 relative",children:Object(r.jsx)(p,{})})]})]})})})}function x(){return Object(r.jsx)("header",{className:"bg-white shadow",children:Object(r.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:Object(r.jsx)("h1",{className:"text-3xl font-bold leading-tight text-gray-900",children:"Hash Cloud Solutions"})})})}var j=[{id:1,feature:"Competitive exchange rates",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."},{id:2,feature:"No hidden fees",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."},{id:3,feature:"Transfers are instant",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."},{id:4,feature:"Mobile notifications",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}];function b(){return Object(r.jsxs)("div",{className:"lg:text-center",children:[Object(r.jsx)("h2",{className:"text-base text-indigo-600 font-semibold tracking-wide uppercase",children:"Transactions"}),Object(r.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:"A better way to send money"}),Object(r.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."})]})}function g(e){var t=e.feature,n=e.description;e.icon;return Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)("div",{className:"flex-shrink-0",children:Object(r.jsx)("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white",children:Object(r.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})})})}),Object(r.jsxs)("div",{className:"ml-4",children:[Object(r.jsx)("dt",{className:"text-lg leading-6 font-medium text-gray-900",children:t}),Object(r.jsx)("dd",{className:"mt-2 text-base text-gray-500",children:n})]})]})}function v(){return Object(r.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between",children:[Object(r.jsxs)("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:[Object(r.jsx)("span",{className:"block",children:"Ready to dive in?"}),Object(r.jsx)("span",{className:"block text-indigo-600",children:"Start your free trial today."})]}),Object(r.jsxs)("div",{className:"mt-8 flex lg:mt-0 lg:flex-shrink-0",children:[Object(r.jsx)("div",{className:"inline-flex rounded-md shadow",children:Object(r.jsx)("a",{href:"#",className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",children:"Get started"})}),Object(r.jsx)("div",{className:"ml-3 inline-flex rounded-md shadow",children:Object(r.jsx)("a",{href:"#",className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50",children:"Learn more"})})]})]})}function y(){return Object(r.jsxs)("main",{children:[Object(r.jsx)("div",{className:"bg-gray-50",children:Object(r.jsx)(v,{})}),Object(r.jsx)("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:Object(r.jsxs)("div",{className:"px-4 py-6 sm:px-0",children:[Object(r.jsx)("div",{className:"py-12 bg-white",children:Object(r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(r.jsx)(b,{})})}),Object(r.jsx)("div",{className:"mt-10",children:Object(r.jsx)("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",children:j.map((function(e){return Object(r.jsx)(g,{id:e.id,feature:e.feature,description:e.description,icon:e.icon},e.id)}))})})]})})]})}function O(){return Object(r.jsx)("div",{className:"bg-gray-50 py-5",children:Object(r.jsx)("div",{className:"text-center",children:Object(r.jsxs)("p",{className:"text-sm text-gray-500 font-bold",children:["\xa9 ",(new Date).getFullYear()," Hash Cloud Solutions. All rights reserved."]})})})}function w(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:"Hash Cloud Solutions"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)(h,{}),Object(r.jsx)(x,{}),Object(r.jsx)(y,{}),Object(r.jsx)(O,{})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),i=n("lwsE"),s=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),o=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){a(n,e);var t=l(n);function n(e){var s;return i(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?i(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var s=i(n("q1tI")),a=n("elyg"),o=n("nOHt"),c=n("vNVm"),l={};function d(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),i=n&&n.pathname||"/",u=s.default.useMemo((function(){var t=(0,a.resolveHref)(i,e.href,!0),n=r(t,2),s=n[0],o=n[1];return{href:s,as:e.as?(0,a.resolveHref)(i,e.as):o||s}}),[i,e.href,e.as]),f=u.href,m=u.as,p=e.children,h=e.replace,x=e.shallow,j=e.scroll,b=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var g=s.Children.only(p),v=g&&"object"===typeof g&&g.ref,y=(0,c.useIntersection)({rootMargin:"200px"}),O=r(y,2),w=O[0],N=O[1],k=s.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);(0,s.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof b?b:n&&n.locale,i=l[f+"%"+m+(r?"%"+r:"")];e&&!i&&d(n,f,m,{locale:r})}),[m,f,N,b,t,n]);var M={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:s,locale:c,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,f,m,h,x,j,b)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),d(n,f,m,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var _="undefined"!==typeof b?b:n&&n.locale,C=(0,a.getDomainLocale)(m,_,n&&n.locales,n&&n.domainLocales);M.href=C||(0,a.addBasePath)((0,a.addLocale)(m,_,n&&n.defaultLocale))}return s.default.cloneElement(g,M)};t.default=u},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),i=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,i=(0,s.useRef)(),l=(0,s.useState)(!1),d=r(l,2),u=d[0],f=d[1],m=(0,s.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||u||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,s.useEffect)((function(){o||u||(0,a.default)((function(){return f(!0)}))}),[u]),[m,u]};var s=n("q1tI"),a=i(n("0G5g")),o="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);
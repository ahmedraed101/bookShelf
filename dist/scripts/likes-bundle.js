(()=>{var t={617:(t,e,r)=>{"use strict";r(666);var n=function(t){localStorage.setItem("lovedBooks",JSON.stringify(t))},o=function(){var t=localStorage.getItem("lovedBooks");return t?JSON.parse(t):[]};function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=c(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=function(t){var e="/showbook.html#".concat(t.id),r=s("i",["fas","fa-heart","heart"]);r.dataset.id=t.id;var n=document.createElement("img");n.setAttribute("src",t.formats["image/jpeg"]),n.setAttribute("alt","".concat(t.title," - cover"));var o=s("a",[],[n]);o.setAttribute("href",e);var i,a=s("div",["image"],[o]),c=s("h3",[],[],t.title),u=s("a",[],[c]);u.setAttribute("href",e);try{i=t.authors[0].name}catch(t){i="UNknowen"}var l=s("h4",[],[],"by - ".concat(i," -")),f=s("p",[],[],"Language: ".concat(t.languages[0].toUpperCase())),h=s("div",["info"],[u,l,f]);return s("div",["book"],[r,a,h])},s=function(t,e){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=document.createElement(t);i.innerText=o,(r=i.classList).add.apply(r,a(e));for(var c=0;c<n.length;c++)i.appendChild(n[c]);return i},f=document.querySelector("#books .container"),h=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(t.length){var n=t.filter((function(t){return t.title.toLowerCase().includes(r.toLowerCase())}));f.innerHTML="";var o,a=i(n);try{for(a.s();!(o=a.n()).done;){var c=o.value;f.appendChild(l(c))}}catch(t){a.e(t)}finally{a.f()}d()}else f.innerHTML='<h2 style="margin: o auto; font-family:sans-serif; color:var(--second-color);width: 100%;text-align: center;">no  results found  <a href="./index.html" style="color:var(--light-color); text-decoration:underline;"> browse here </a></h2>'},d=function(){var t=o();document.querySelectorAll(".heart").forEach((function(e){var r=t.includes(e.dataset.id);e.classList.toggle("loved",r),e.addEventListener("click",(function(e){var r=t.includes(e.target.dataset.id),o=e.target.dataset.id;r?(function(t,e){var r=e.indexOf(t);e.splice(r,1),n(e)}(o,t),e.target.classList.remove("loved")):(function(t,e){e.unshift(t),n(e)}(o,t),e.target.classList.add("loved")),"/likes.html"===location.pathname&&window.dispatchEvent(new Event("storage"))}))}))};function v(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var y,p=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="string"==typeof e?e:e.join(),t.next=3,fetch("".concat("https://gutendex.com/books/","?ids=").concat(r));case 3:if(200!==(n=t.sent).status){t.next=11;break}return t.next=7,n.json();case 7:return o=t.sent,t.abrupt("return",o);case 11:throw new Error("Error code: ".concat(n.status));case 12:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g,w,b,L,x,E=o();g=document.querySelector("#main"),w=document.querySelector("#footer"),document.querySelector("#tomain").addEventListener("click",(function(){g.scrollIntoView({behavior:"smooth",block:"start"})})),document.querySelector("#tofooter").addEventListener("click",(function(){w.scrollIntoView({behavior:"smooth",block:"start"})})),b=document.querySelector(".toggle-menu"),L=document.querySelector(".links"),document.addEventListener("click",(function(t){t.target!==b&&L.classList.remove("open-list"),t.target===b&&L.classList.toggle("open-list")})),x=document.querySelector(".up"),window.onscroll=function(){x.classList.toggle("show",this.scrollY>=1e3)},x.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),document.querySelector("form").addEventListener("input",(function(t){var e=t.target.value.toLowerCase();h(y,E,e)}));var S,k,j=(2,function(t){if(Array.isArray(t))return t}(S=(k=document.querySelector(".loading"),[function(){k.classList.remove("hide")},function(){k.classList.add("hide")}]))||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),2!==i.length);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(S)||function(t,e){if(t){if("string"==typeof t)return m(t,2);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,2):void 0}}(S)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=j[0],O=j[1];E.length?(A(),p(E).then((function(t){y=t.results,O(),h(y)}))):f.innerHTML='<h2 style="margin: o auto; font-family:sans-serif; color:var(--second-color);width: 100%;text-align: center;">no  loved books  <a href="./index.html" style="color:var(--light-color); text-decoration:underline;"> browse here </a></h2>',window.addEventListener("storage",(function(t){var e=o();e!==E&&(e.length?(A(),p(E=e).then((function(t){y=t.results,O(),h(y)}))):f.innerHTML='<h2 style="margin: o auto; font-family:sans-serif; color:var(--second-color);width: 100%;text-align: center;">no  loved books  <a href="./index.html" style="color:var(--light-color); text-decoration:underline;"> browse here </a></h2>')}))},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",v="completed",y={};function p(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(T([])));L&&L!==r&&n.call(L,i)&&(w=L);var x=g.prototype=p.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r(666),r(617)})();
//# sourceMappingURL=likes-bundle.js.map
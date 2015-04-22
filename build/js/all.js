/*!
 * Bootstrap without jQuery v0.6.1 for Bootstrap 3
 * By Daniel Davis under MIT License
 * https://github.com/tagawa/bootstrap-without-jquery
 */
!function(){"use strict";function e(){var e,t=document.createElement("div"),n={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(n.hasOwnProperty(e)&&void 0!==t.style[e])return n[e];return!1}function t(e){var t={};e=e||window.event,t.evTarget=e.currentTarget||e.srcElement;var n=t.evTarget.getAttribute("data-target");return t.dataTarget=n?document.querySelector(n):!1,t}function n(e){var t=e.style.height;e.style.height="auto";var n=getComputedStyle(e).height;return e.style.height=t,e.offsetHeight,n}function r(e,t){if(document.createEvent){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!1),e.dispatchEvent(n)}else e.fireEvent("on"+t)}function a(e,t){e.classList.remove("collapse"),e.classList.add("collapsing"),t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0),e.style.height=n(e),d?e.addEventListener(d,function(){s(e)},!1):s(e)}function i(e,t){e.classList.remove("collapse"),e.classList.remove("in"),e.classList.add("collapsing"),t.classList.add("collapsed"),t.setAttribute("aria-expanded",!1),e.style.height=getComputedStyle(e).height,e.offsetHeight,e.style.height="0px"}function s(e){e.classList.remove("collapsing"),e.classList.add("collapse"),e.setAttribute("aria-expanded",!1),"0px"!==e.style.height&&(e.classList.add("in"),e.style.height="auto")}function l(e){e.preventDefault();var n=t(e),r=n.dataTarget;return r.classList.contains("in")?i(r,n.evTarget):a(r,n.evTarget),!1}function o(e){function n(){try{i.parentNode.removeChild(i),r(i,"closed.bs.alert")}catch(e){window.console.error("Unable to remove alert")}}e.preventDefault();var a=t(e),i=a.dataTarget;if(!i){var s=a.evTarget.parentNode;s.classList.contains("alert")?i=s:s.parentNode.classList.contains("alert")&&(i=s.parentNode)}return r(i,"close.bs.alert"),i.classList.remove("in"),d&&i.classList.contains("fade")?i.addEventListener(d,function(){n()},!1):n(),!1}function c(e){e=e||window.event;var t=e.currentTarget||e.srcElement;return t.parentElement.classList.toggle("open"),!1}function u(e){e=e||window.event;var t=e.currentTarget||e.srcElement;return t.parentElement.classList.remove("open"),e.relatedTarget&&"dropdown"!==e.relatedTarget.getAttribute("data-toggle")&&e.relatedTarget.click(),!1}for(var d=e(),g=document.querySelectorAll("[data-toggle=collapse]"),h=0,f=g.length;f>h;h++)g[h].onclick=l;for(var m=document.querySelectorAll("[data-dismiss=alert]"),v=0,p=m.length;p>v;v++)m[v].onclick=o;for(var y,E=document.querySelectorAll("[data-toggle=dropdown]"),w=0,b=E.length;b>w;w++)y=E[w],y.setAttribute("tabindex","0"),y.onclick=c,y.onblur=u}();

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function _interopRequireWildcard(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
};

var _Modal = require('./modal');

var _Modal2 = _interopRequireWildcard(_Modal);

var _SmoothScroll = require('./smooth-scroll');

var _SmoothScroll2 = _interopRequireWildcard(_SmoothScroll);

var _ServicesModal = require('./services-modal');

var _ServicesModal2 = _interopRequireWildcard(_ServicesModal);

new _Modal2['default']();
new _SmoothScroll2['default']();
new _ServicesModal2['default']();

},{"./modal":2,"./services-modal":3,"./smooth-scroll":4}],2:[function(require,module,exports){
'use strict';

var _classCallCheck = function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});
// Polyfills:
// - classList

var Modal = (function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.body = document.getElementsByTagName('body')[0];
    this.modalButton = document.getElementById('modal-copyright-btn');
    this.modal = document.getElementById('modal-copyright');
    this.modalDialog = document.querySelector('.modal-dialog');
    this.modalBackdrop = this.modal.querySelector('.modal-backdrop');
    this.modalClose = this.modal.querySelectorAll('.js-modal-legal-close');

    this.init();
  }

  _createClass(Modal, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // Toggle modal from footer button
      this.modalButton.addEventListener('click', this.toggleLegalModal.bind(this), false);

      // Toggle the modal on click on the backdrop
      this.modalBackdrop.addEventListener('click', this.toggleLegalModal.bind(this), false);

      // Toggle modal from modal's close buttons
      [].forEach.call(this.modalClose, function (el) {
        el.addEventListener('click', _this.toggleLegalModal.bind(_this), false);
      });
    }
  }, {
    key: 'toggleLegalModal',
    value: function toggleLegalModal(e) {
      var _this2 = this;

      e && e.preventDefault();

      if (this.modal.classList.contains('in')) {

        // Remove 'modal-open' to restore body's scroll
        this.body.classList.remove('modal-open');

        // Manage the modal hiding
        this.modal.classList.remove('in');
        this.modalBackdrop.classList.remove('in');

        // Timeout needed to let the css animation finish
        setTimeout(function () {
          _this2.modal.style.display = 'none';
          _this2.modalBackdrop.style.display = 'none';
        }, 500);
      } else {
        // Add class to kill the body's scroll
        this.body.classList.add('modal-open');
        // Manage the modal showing
        this.modal.style.display = 'block';
        this.modalBackdrop.style.display = 'block';
        this.modalBackdrop.style.height = parseFloat(this.modalDialog.offsetHeight + 60) + 'px';
        this.modal.classList.add('in');
        this.modalBackdrop.classList.add('in');
      }
    }
  }]);

  return Modal;
})();

exports['default'] = Modal;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

var _classCallCheck = function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _closest = require('./utils');

var Modal = (function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.body = document.getElementsByTagName('body')[0];

    this.init();
  }

  _createClass(Modal, [{
    key: 'init',
    value: function init() {
      var servicesDetails = document.querySelector('.services');
      servicesDetails.addEventListener('click', this.showServiceDetails.bind(this), false);
    }
  }, {
    key: 'showServiceDetails',
    value: function showServiceDetails(e) {
      var _this = this;

      e && e.preventDefault();

      // Find the modal supposed to be shown
      var serviceSelected = this.selectModal(_closest.closest(e.target, 'li'));
      var modal = document.querySelector(serviceSelected);
      var modalBackdrop = modal.querySelector('.modal-backdrop');
      var modalClose = modal.querySelector('.js-modal-close');

      // Toggle the modal on click on the backdrop
      modalBackdrop.addEventListener('click', function () {
        _this.closeModal(modal, modalBackdrop);
        modalBackdrop.removeEventListener('click');
      }, false);

      // Toggle the modal on click the cross
      modalClose.addEventListener('click', function () {
        _this.closeModal(modal, modalBackdrop);
        modalClose.removeEventListener('click');
      }, false);

      this.openModal(modal, modalBackdrop);
    }
  }, {
    key: 'openModal',
    value: function openModal(modal, modalBackdrop) {
      var modalDialog = modal.querySelector('.modal-dialog');

      // Add class to kill the body's scroll
      this.body.classList.add('modal-open');
      // Manage the modal showing
      modal.style.display = 'block';
      modalBackdrop.style.display = 'block';
      modalBackdrop.style.height = parseFloat(modalDialog.offsetHeight + 60) + 'px';
      modal.classList.add('in');
      modalBackdrop.classList.add('in');
    }
  }, {
    key: 'closeModal',
    value: function closeModal(modal, modalBackdrop) {
      // Remove 'modal-open' to restore body's scroll
      this.body.classList.remove('modal-open');

      // Manage the modal hiding
      modal.classList.remove('in');
      modalBackdrop.classList.remove('in');

      // Timeout needed to let the css animation finish
      setTimeout(function () {
        modal.style.display = 'none';
        modalBackdrop.style.display = 'none';
      }, 500);
    }
  }, {
    key: 'selectModal',
    value: function selectModal(el) {
      var modalName = undefined;
      if (el.classList.contains('services__tech')) {
        return '#tech-modal';
      }
      if (el.classList.contains('services__newmarket')) {
        return '#newmarket-modal';
      }
      if (el.classList.contains('services__training')) {
        return '#training-modal';
      }
      if (el.classList.contains('services__positive')) {
        return '#positive-modal';
      }
    }
  }]);

  return Modal;
})();

exports['default'] = Modal;
module.exports = exports['default'];

},{"./utils":5}],4:[function(require,module,exports){
'use strict';

var _classCallCheck = function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

Object.defineProperty(exports, '__esModule', {
  value: true
});
// Polyfills:
// - classList

var Modal = (function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.init();
  }

  _createClass(Modal, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var navLinks = document.getElementsByClassName('js-smooth-link');

      [].forEach.call(navLinks, function (el) {
        el.addEventListener('click', function (ev) {
          ev.preventDefault();
          _this.smoothScroll(ev.target.href.split('#')[1]);
        }, false);
      });
    }
  }, {
    key: 'currentYPosition',
    value: function currentYPosition() {
      // Firefox, Chrome, Opera, Safari
      if (self.pageYOffset) {
        return self.pageYOffset;
      } // Internet Explorer 6 - standards mode
      if (document.documentElement && document.documentElement.scrollTop) {
        return document.documentElement.scrollTop;
      }
      // Internet Explorer 6, 7 and 8
      if (document.body.scrollTop) {
        return document.body.scrollTop;
      }return 0;
    }
  }, {
    key: 'elmYPosition',
    value: function elmYPosition(elId) {
      var elm = document.getElementById(elId);
      var y = elm.offsetTop;
      var node = elm;

      while (node.offsetParent && node.offsetParent !== document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
      }
      return y;
    }
  }, {
    key: 'smoothScroll',
    value: function smoothScroll(elId) {
      var startY = this.currentYPosition();
      var stopY = this.elmYPosition(elId);
      var distance = stopY > startY ? stopY - startY : startY - stopY;

      if (distance < 100) {
        scrollTo(0, stopY);return;
      }

      var speed = Math.round(distance / 100);

      if (speed >= 20) speed = 20;

      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;

      if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {

          setTimeout(function () {
            window.scrollTo(0, leapY);
          }, timer * speed);

          leapY += step;

          if (leapY > stopY) {
            leapY = stopY;timer++;
          }
        }
        return;
      }
      for (var i = startY; i > stopY; i -= step) {

        setTimeout(function () {
          window.scrollTo(0, leapY);
        }, timer * speed);

        leapY -= step;

        if (leapY < stopY) {
          leapY = stopY;timer++;
        }
      }
      return false;
    }
  }]);

  return Modal;
})();

exports['default'] = Modal;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * Get closest parent matching the selector
 *
 * Example:
 *  var el = document.querySelector('#some-element');
 *  var closest = getClosest(el, '.some-class');
 *  var closestExcludingElement = getClosest(el.parentNode, '.some-class');
 *
 * @param {DOMnode} el
 * @param {querySelector} selector
 * @return {DOMnode}
 */
exports.closest = closest;

function closest(el, selector) {

  var firstChar = selector.charAt(0);

  // Get closest match
  for (; el && el !== document; el = el.parentNode) {

    // If selector is a class
    if (firstChar === '.') {
      if (el.classList.contains(selector.substr(1))) {
        return el;
      }
    }

    // If selector is an ID
    if (firstChar === '#') {
      if (el.id === selector.substr(1)) {
        return el;
      }
    }

    // If selector is a data attribute
    if (firstChar === '[') {
      if (el.hasAttribute(selector.substr(1, selector.length - 2))) {
        return el;
      }
    }

    // If selector is a tag
    if (el.tagName.toLowerCase() === selector) {
      return el;
    }
  }

  return false;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdG9tL2JsYWFhc3QvYmxhYWFzdC5naXRodWIuaW8vanMvbWFpbi5qcyIsIi9Vc2Vycy90b20vYmxhYWFzdC9ibGFhYXN0LmdpdGh1Yi5pby9qcy9tb2RhbC5qcyIsIi9Vc2Vycy90b20vYmxhYWFzdC9ibGFhYXN0LmdpdGh1Yi5pby9qcy9zZXJ2aWNlcy1tb2RhbC5qcyIsIi9Vc2Vycy90b20vYmxhYWFzdC9ibGFhYXN0LmdpdGh1Yi5pby9qcy9zbW9vdGgtc2Nyb2xsLmpzIiwiL1VzZXJzL3RvbS9ibGFhYXN0L2JsYWFhc3QuZ2l0aHViLmlvL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOztBQUViLElBQUksdUJBQXVCLEdBQUcsaUNBQVUsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRSxDQUFDOztBQUUxRyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBSkYsU0FBUyxDQUFBLENBQUE7O0FBTTNCLElBQUksT0FBTyxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU5QyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBUEYsaUJBQWlCLENBQUEsQ0FBQTs7QUFTMUMsSUFBSSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRTVELElBQUksY0FBYyxHQUFHLE9BQU8sQ0FWRixrQkFBa0IsQ0FBQSxDQUFBOztBQVk1QyxJQUFJLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFWOUQsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLEVBQVcsQ0FBQztBQUNaLElBQUEsY0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFr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QUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7QUFHbkMsU0FBUSxFQUFFLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRzs7O0FBR2xELFFBQUssU0FBUyxLQUFLLEdBQUcsRUFBRztBQUN2QixVQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUUsRUFBRztBQUNqRCxlQUFPLEVBQUUsQ0FBQztPQUNYO0tBQ0Y7OztBQUdELFFBQUssU0FBUyxLQUFLLEdBQUcsRUFBRztBQUN2QixVQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRztBQUNsQyxlQUFPLEVBQUUsQ0FBQztPQUNYO0tBQ0Y7OztBQUdELFFBQUssU0FBUyxLQUFLLEdBQUcsRUFBRztBQUN2QixVQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBRSxFQUFHO0FBQ2hFLGVBQU8sRUFBRSxDQUFDO09BQ1g7S0FDRjs7O0FBR0QsUUFBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFBRztBQUMzQyxhQUFPLEVBQUUsQ0FBQztLQUNYO0dBRUY7O0FBRUQsU0FBTyxLQUFLLENBQUM7Q0FFZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4vc21vb3RoLXNjcm9sbCc7XG5pbXBvcnQgU2VydmljZXNNb2RhbCBmcm9tICcuL3NlcnZpY2VzLW1vZGFsJztcblxubmV3IE1vZGFsKCk7XG5uZXcgU21vb3RoU2Nyb2xsKCk7XG5uZXcgU2VydmljZXNNb2RhbCgpO1xuIiwiLy8gUG9seWZpbGxzOlxuLy8gLSBjbGFzc0xpc3RcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgdGhpcy5tb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1jb3B5cmlnaHQtYnRuJyk7XG4gICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1jb3B5cmlnaHQnKTtcbiAgICB0aGlzLm1vZGFsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpO1xuICAgIHRoaXMubW9kYWxCYWNrZHJvcCA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tkcm9wJyk7XG4gICAgdGhpcy5tb2RhbENsb3NlID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtbW9kYWwtbGVnYWwtY2xvc2UnKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBUb2dnbGUgbW9kYWwgZnJvbSBmb290ZXIgYnV0dG9uXG4gICAgdGhpcy5tb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlTGVnYWxNb2RhbC5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAvLyBUb2dnbGUgdGhlIG1vZGFsIG9uIGNsaWNrIG9uIHRoZSBiYWNrZHJvcFxuICAgIHRoaXMubW9kYWxCYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlTGVnYWxNb2RhbC5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAvLyBUb2dnbGUgbW9kYWwgZnJvbSBtb2RhbCdzIGNsb3NlIGJ1dHRvbnNcbiAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5tb2RhbENsb3NlLCAoZWwpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVMZWdhbE1vZGFsLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZUxlZ2FsTW9kYWwoZSkge1xuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbicpKSB7XG5cbiAgICAgIC8vIFJlbW92ZSAnbW9kYWwtb3BlbicgdG8gcmVzdG9yZSBib2R5J3Mgc2Nyb2xsXG4gICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuXG4gICAgICAvLyBNYW5hZ2UgdGhlIG1vZGFsIGhpZGluZ1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpbicpO1xuICAgICAgdGhpcy5tb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ2luJyk7XG5cbiAgICAgIC8vIFRpbWVvdXQgbmVlZGVkIHRvIGxldCB0aGUgY3NzIGFuaW1hdGlvbiBmaW5pc2hcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMubW9kYWxCYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgNTAwKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZGQgY2xhc3MgdG8ga2lsbCB0aGUgYm9keSdzIHNjcm9sbFxuICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgIC8vIE1hbmFnZSB0aGUgbW9kYWwgc2hvd2luZ1xuICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMubW9kYWxCYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMubW9kYWxCYWNrZHJvcC5zdHlsZS5oZWlnaHQgPSBwYXJzZUZsb2F0KHRoaXMubW9kYWxEaWFsb2cub2Zmc2V0SGVpZ2h0ICsgNjApICsgJ3B4JztcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICAgIHRoaXMubW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdpbicpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBjbG9zZXN0IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCBzZXJ2aWNlc0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXMnKTtcbiAgICBzZXJ2aWNlc0RldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dTZXJ2aWNlRGV0YWlscy5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gIH1cblxuICBzaG93U2VydmljZURldGFpbHMoZSkge1xuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gRmluZCB0aGUgbW9kYWwgc3VwcG9zZWQgdG8gYmUgc2hvd25cbiAgICBsZXQgc2VydmljZVNlbGVjdGVkID0gdGhpcy5zZWxlY3RNb2RhbChjbG9zZXN0KGUudGFyZ2V0LCAnbGknKSk7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXJ2aWNlU2VsZWN0ZWQpO1xuICAgIGxldCBtb2RhbEJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tkcm9wJyk7XG4gICAgbGV0IG1vZGFsQ2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuanMtbW9kYWwtY2xvc2UnKTtcblxuICAgIC8vIFRvZ2dsZSB0aGUgbW9kYWwgb24gY2xpY2sgb24gdGhlIGJhY2tkcm9wXG4gICAgbW9kYWxCYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbChtb2RhbCwgbW9kYWxCYWNrZHJvcCk7XG4gICAgICBtb2RhbEJhY2tkcm9wLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBtb2RhbCBvbiBjbGljayB0aGUgY3Jvc3NcbiAgICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsLCBtb2RhbEJhY2tkcm9wKTtcbiAgICAgIG1vZGFsQ2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgICB0aGlzLm9wZW5Nb2RhbChtb2RhbCwgbW9kYWxCYWNrZHJvcCk7XG4gIH1cblxuICBvcGVuTW9kYWwobW9kYWwsIG1vZGFsQmFja2Ryb3ApIHtcbiAgICBsZXQgbW9kYWxEaWFsb2cgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nJyk7XG5cbiAgICAvLyBBZGQgY2xhc3MgdG8ga2lsbCB0aGUgYm9keSdzIHNjcm9sbFxuICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgLy8gTWFuYWdlIHRoZSBtb2RhbCBzaG93aW5nXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbW9kYWxCYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBtb2RhbEJhY2tkcm9wLnN0eWxlLmhlaWdodCA9IHBhcnNlRmxvYXQobW9kYWxEaWFsb2cub2Zmc2V0SGVpZ2h0ICsgNjApICsgJ3B4JztcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdpbicpO1xuICAgIG1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwobW9kYWwsIG1vZGFsQmFja2Ryb3ApIHtcbiAgICAvLyBSZW1vdmUgJ21vZGFsLW9wZW4nIHRvIHJlc3RvcmUgYm9keSdzIHNjcm9sbFxuICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG5cbiAgICAvLyBNYW5hZ2UgdGhlIG1vZGFsIGhpZGluZ1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2luJyk7XG4gICAgbW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdpbicpO1xuXG4gICAgLy8gVGltZW91dCBuZWVkZWQgdG8gbGV0IHRoZSBjc3MgYW5pbWF0aW9uIGZpbmlzaFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG1vZGFsQmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgc2VsZWN0TW9kYWwoZWwpIHtcbiAgICBsZXQgbW9kYWxOYW1lO1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlcnZpY2VzX190ZWNoJykpIHtcbiAgICAgIHJldHVybiAnI3RlY2gtbW9kYWwnO1xuICAgIH1cbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJ2aWNlc19fbmV3bWFya2V0JykpIHtcbiAgICAgIHJldHVybiAnI25ld21hcmtldC1tb2RhbCc7XG4gICAgfVxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlcnZpY2VzX190cmFpbmluZycpKSB7XG4gICAgICByZXR1cm4gJyN0cmFpbmluZy1tb2RhbCc7XG4gICAgfVxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlcnZpY2VzX19wb3NpdGl2ZScpKSB7XG4gICAgICByZXR1cm4gJyNwb3NpdGl2ZS1tb2RhbCc7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIFBvbHlmaWxsczpcbi8vIC0gY2xhc3NMaXN0XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IG5hdkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtc21vb3RoLWxpbmsnKTtcblxuICAgIFtdLmZvckVhY2guY2FsbChuYXZMaW5rcywgKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNtb290aFNjcm9sbChldi50YXJnZXQuaHJlZi5zcGxpdCgnIycpWzFdKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGN1cnJlbnRZUG9zaXRpb24oKSB7XG4gICAgLy8gRmlyZWZveCwgQ2hyb21lLCBPcGVyYSwgU2FmYXJpXG4gICAgaWYgKHNlbGYucGFnZVlPZmZzZXQpIHJldHVybiBzZWxmLnBhZ2VZT2Zmc2V0O1xuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYgLSBzdGFuZGFyZHMgbW9kZVxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYsIDcgYW5kIDhcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZWxtWVBvc2l0aW9uKGVsSWQpIHtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxJZCk7XG4gICAgbGV0IHkgPSBlbG0ub2Zmc2V0VG9wO1xuICAgIGxldCBub2RlID0gZWxtO1xuXG4gICAgd2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICB5ICs9IG5vZGUub2Zmc2V0VG9wO1xuICAgIH1cbiAgICByZXR1cm4geTtcbiAgfVxuXG4gIHNtb290aFNjcm9sbChlbElkKSB7XG4gICAgbGV0IHN0YXJ0WSA9IHRoaXMuY3VycmVudFlQb3NpdGlvbigpO1xuICAgIGxldCBzdG9wWSA9IHRoaXMuZWxtWVBvc2l0aW9uKGVsSWQpO1xuICAgIGxldCBkaXN0YW5jZSA9IHN0b3BZID4gc3RhcnRZID8gc3RvcFkgLSBzdGFydFkgOiBzdGFydFkgLSBzdG9wWTtcblxuICAgIGlmIChkaXN0YW5jZSA8IDEwMCkge1xuICAgICAgc2Nyb2xsVG8oMCwgc3RvcFkpOyByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNwZWVkID0gTWF0aC5yb3VuZChkaXN0YW5jZSAvIDEwMCk7XG5cbiAgICBpZiAoc3BlZWQgPj0gMjApIHNwZWVkID0gMjA7XG5cbiAgICBsZXQgc3RlcCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAyNSk7XG4gICAgbGV0IGxlYXBZID0gc3RvcFkgPiBzdGFydFkgPyBzdGFydFkgKyBzdGVwIDogc3RhcnRZIC0gc3RlcDtcbiAgICBsZXQgdGltZXIgPSAwO1xuXG4gICAgaWYgKHN0b3BZID4gc3RhcnRZKSB7XG4gICAgICBmb3IgKCBsZXQgaSA9IHN0YXJ0WTsgaSA8IHN0b3BZOyBpICs9IHN0ZXAgKSB7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGxlYXBZKTtcbiAgICAgICAgfSwgdGltZXIgKiBzcGVlZCk7XG5cbiAgICAgICAgbGVhcFkgKz0gc3RlcDtcblxuICAgICAgICBpZiAobGVhcFkgPiBzdG9wWSkge1xuICAgICAgICAgIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKCBsZXQgaSA9IHN0YXJ0WTsgaSA+IHN0b3BZOyBpIC09IHN0ZXAgKSB7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgbGVhcFkpO1xuICAgICAgfSwgdGltZXIgKiBzcGVlZCk7XG5cbiAgICAgIGxlYXBZIC09IHN0ZXA7XG5cbiAgICAgIGlmIChsZWFwWSA8IHN0b3BZKSB7XG4gICAgICAgIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iLCIvKipcbiAqIEdldCBjbG9zZXN0IHBhcmVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3JcbiAqXG4gKiBFeGFtcGxlOlxuICogIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb21lLWVsZW1lbnQnKTtcbiAqICB2YXIgY2xvc2VzdCA9IGdldENsb3Nlc3QoZWwsICcuc29tZS1jbGFzcycpO1xuICogIHZhciBjbG9zZXN0RXhjbHVkaW5nRWxlbWVudCA9IGdldENsb3Nlc3QoZWwucGFyZW50Tm9kZSwgJy5zb21lLWNsYXNzJyk7XG4gKlxuICogQHBhcmFtIHtET01ub2RlfSBlbFxuICogQHBhcmFtIHtxdWVyeVNlbGVjdG9yfSBzZWxlY3RvclxuICogQHJldHVybiB7RE9Nbm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yKSB7XG5cbiAgdmFyIGZpcnN0Q2hhciA9IHNlbGVjdG9yLmNoYXJBdCgwKTtcblxuICAvLyBHZXQgY2xvc2VzdCBtYXRjaFxuICBmb3IgKCA7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlICkge1xuXG4gICAgLy8gSWYgc2VsZWN0b3IgaXMgYSBjbGFzc1xuICAgIGlmICggZmlyc3RDaGFyID09PSAnLicgKSB7XG4gICAgICBpZiAoIGVsLmNsYXNzTGlzdC5jb250YWlucyggc2VsZWN0b3Iuc3Vic3RyKDEpICkgKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBzZWxlY3RvciBpcyBhbiBJRFxuICAgIGlmICggZmlyc3RDaGFyID09PSAnIycgKSB7XG4gICAgICBpZiAoIGVsLmlkID09PSBzZWxlY3Rvci5zdWJzdHIoMSkgKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBzZWxlY3RvciBpcyBhIGRhdGEgYXR0cmlidXRlXG4gICAgaWYgKCBmaXJzdENoYXIgPT09ICdbJyApIHtcbiAgICAgIGlmICggZWwuaGFzQXR0cmlidXRlKCBzZWxlY3Rvci5zdWJzdHIoMSwgc2VsZWN0b3IubGVuZ3RoIC0gMikgKSApIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHNlbGVjdG9yIGlzIGEgdGFnXG4gICAgaWYgKCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlbGVjdG9yICkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xuXG59XG4iXX0=

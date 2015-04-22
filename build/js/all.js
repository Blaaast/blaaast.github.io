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

      console.log('Selected: ', serviceSelected);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdG9tL2JsYWFhc3QvYmxhYWFzdC5naXRodWIuaW8vanMvbWFpbi5qcyIsIi9Vc2Vycy90b20vYmxhYWFzdC9ibGFhYXN0LmdpdGh1Yi5pby9qcy9tb2RhbC5qcyIsIi9Vc2Vycy90b20vYmxhYWFzdC9ibGFhYXN0LmdpdGh1Yi5pby9qcy9zZXJ2aWNlcy1tb2RhbC5qcyIsIi9Vc2Vycy90b20vYmxhYWFzdC9ibGFhYXN0LmdpdGh1Yi5pby9qcy9zbW9vdGgtc2Nyb2xsLmpzIiwiL1VzZXJzL3RvbS9ibGFhYXN0L2JsYWFhc3QuZ2l0aHViLmlvL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOztBQUViLElBQUksdUJBQXVCLEdBQUcsaUNBQVUsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRSxDQUFDOztBQUUxRyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBSkYsU0FBUyxDQUFBLENBQUE7O0FBTTNCLElBQUksT0FBTyxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU5QyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBUEYsaUJBQWlCLENBQUEsQ0FBQTs7QUFTMUMsSUFBSSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRTVELElBQUksY0FBYyxHQUFHLE9BQU8sQ0FWRixrQkFBa0IsQ0FBQSxDQUFBOztBQVk1QyxJQUFJLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFWOUQsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLEVBQVcsQ0FBQztBQUNaLElBQUEsY0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFr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QUFPLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRTs7QUFFcEMsTUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0FBR25DLFNBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUc7OztBQUdsRCxRQUFLLFNBQVMsS0FBSyxHQUFHLEVBQUc7QUFDdkIsVUFBSyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQUc7QUFDakQsZUFBTyxFQUFFLENBQUM7T0FDWDtLQUNGOzs7QUFHRCxRQUFLLFNBQVMsS0FBSyxHQUFHLEVBQUc7QUFDdkIsVUFBSyxFQUFFLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUc7QUFDbEMsZUFBTyxFQUFFLENBQUM7T0FDWDtLQUNGOzs7QUFHRCxRQUFLLFNBQVMsS0FBSyxHQUFHLEVBQUc7QUFDdkIsVUFBSyxFQUFFLENBQUMsWUFBWSxDQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUUsRUFBRztBQUNoRSxlQUFPLEVBQUUsQ0FBQztPQUNYO0tBQ0Y7OztBQUdELFFBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLEVBQUc7QUFDM0MsYUFBTyxFQUFFLENBQUM7S0FDWDtHQUVGOztBQUVELFNBQU8sS0FBSyxDQUFDO0NBRWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuL3Ntb290aC1zY3JvbGwnO1xuaW1wb3J0IFNlcnZpY2VzTW9kYWwgZnJvbSAnLi9zZXJ2aWNlcy1tb2RhbCc7XG5cbm5ldyBNb2RhbCgpO1xubmV3IFNtb290aFNjcm9sbCgpO1xubmV3IFNlcnZpY2VzTW9kYWwoKTtcbiIsIi8vIFBvbHlmaWxsczpcbi8vIC0gY2xhc3NMaXN0XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIHRoaXMubW9kYWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29weXJpZ2h0LWJ0bicpO1xuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29weXJpZ2h0Jyk7XG4gICAgdGhpcy5tb2RhbERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cnKTtcbiAgICB0aGlzLm1vZGFsQmFja2Ryb3AgPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZHJvcCcpO1xuICAgIHRoaXMubW9kYWxDbG9zZSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1vZGFsLWxlZ2FsLWNsb3NlJyk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gVG9nZ2xlIG1vZGFsIGZyb20gZm9vdGVyIGJ1dHRvblxuICAgIHRoaXMubW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUxlZ2FsTW9kYWwuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBtb2RhbCBvbiBjbGljayBvbiB0aGUgYmFja2Ryb3BcbiAgICB0aGlzLm1vZGFsQmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUxlZ2FsTW9kYWwuYmluZCh0aGlzKSwgZmFsc2UpO1xuXG4gICAgLy8gVG9nZ2xlIG1vZGFsIGZyb20gbW9kYWwncyBjbG9zZSBidXR0b25zXG4gICAgW10uZm9yRWFjaC5jYWxsKHRoaXMubW9kYWxDbG9zZSwgKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlTGVnYWxNb2RhbC5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVMZWdhbE1vZGFsKGUpIHtcbiAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaW4nKSkge1xuXG4gICAgICAvLyBSZW1vdmUgJ21vZGFsLW9wZW4nIHRvIHJlc3RvcmUgYm9keSdzIHNjcm9sbFxuICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcblxuICAgICAgLy8gTWFuYWdlIHRoZSBtb2RhbCBoaWRpbmdcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaW4nKTtcbiAgICAgIHRoaXMubW9kYWxCYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdpbicpO1xuXG4gICAgICAvLyBUaW1lb3V0IG5lZWRlZCB0byBsZXQgdGhlIGNzcyBhbmltYXRpb24gZmluaXNoXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLm1vZGFsQmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDUwMCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkIGNsYXNzIHRvIGtpbGwgdGhlIGJvZHkncyBzY3JvbGxcbiAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAvLyBNYW5hZ2UgdGhlIG1vZGFsIHNob3dpbmdcbiAgICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLm1vZGFsQmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLm1vZGFsQmFja2Ryb3Auc3R5bGUuaGVpZ2h0ID0gcGFyc2VGbG9hdCh0aGlzLm1vZGFsRGlhbG9nLm9mZnNldEhlaWdodCArIDYwKSArICdweCc7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2luJyk7XG4gICAgICB0aGlzLm1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgY2xvc2VzdCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgc2VydmljZXNEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzJyk7XG4gICAgc2VydmljZXNEZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93U2VydmljZURldGFpbHMuYmluZCh0aGlzKSwgZmFsc2UpO1xuICB9XG5cbiAgc2hvd1NlcnZpY2VEZXRhaWxzKGUpIHtcbiAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEZpbmQgdGhlIG1vZGFsIHN1cHBvc2VkIHRvIGJlIHNob3duXG4gICAgbGV0IHNlcnZpY2VTZWxlY3RlZCA9IHRoaXMuc2VsZWN0TW9kYWwoY2xvc2VzdChlLnRhcmdldCwgJ2xpJykpO1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VydmljZVNlbGVjdGVkKTtcbiAgICBsZXQgbW9kYWxCYWNrZHJvcCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZHJvcCcpO1xuICAgIGxldCBtb2RhbENsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmpzLW1vZGFsLWNsb3NlJyk7XG5cbiAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQ6ICcsIHNlcnZpY2VTZWxlY3RlZCk7XG5cbiAgICAvLyBUb2dnbGUgdGhlIG1vZGFsIG9uIGNsaWNrIG9uIHRoZSBiYWNrZHJvcFxuICAgIG1vZGFsQmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwobW9kYWwsIG1vZGFsQmFja2Ryb3ApO1xuICAgICAgbW9kYWxCYWNrZHJvcC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycpO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIC8vIFRvZ2dsZSB0aGUgbW9kYWwgb24gY2xpY2sgdGhlIGNyb3NzXG4gICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbChtb2RhbCwgbW9kYWxCYWNrZHJvcCk7XG4gICAgICBtb2RhbENsb3NlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgdGhpcy5vcGVuTW9kYWwobW9kYWwsIG1vZGFsQmFja2Ryb3ApO1xuICB9XG5cbiAgb3Blbk1vZGFsKG1vZGFsLCBtb2RhbEJhY2tkcm9wKSB7XG4gICAgbGV0IG1vZGFsRGlhbG9nID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZycpO1xuXG4gICAgLy8gQWRkIGNsYXNzIHRvIGtpbGwgdGhlIGJvZHkncyBzY3JvbGxcbiAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgIC8vIE1hbmFnZSB0aGUgbW9kYWwgc2hvd2luZ1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG1vZGFsQmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbW9kYWxCYWNrZHJvcC5zdHlsZS5oZWlnaHQgPSBwYXJzZUZsb2F0KG1vZGFsRGlhbG9nLm9mZnNldEhlaWdodCArIDYwKSArICdweCc7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaW4nKTtcbiAgICBtb2RhbEJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2luJyk7XG4gIH1cblxuICBjbG9zZU1vZGFsKG1vZGFsLCBtb2RhbEJhY2tkcm9wKSB7XG4gICAgLy8gUmVtb3ZlICdtb2RhbC1vcGVuJyB0byByZXN0b3JlIGJvZHkncyBzY3JvbGxcbiAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuXG4gICAgLy8gTWFuYWdlIHRoZSBtb2RhbCBoaWRpbmdcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpbicpO1xuICAgIG1vZGFsQmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnaW4nKTtcblxuICAgIC8vIFRpbWVvdXQgbmVlZGVkIHRvIGxldCB0aGUgY3NzIGFuaW1hdGlvbiBmaW5pc2hcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtb2RhbEJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHNlbGVjdE1vZGFsKGVsKSB7XG4gICAgbGV0IG1vZGFsTmFtZTtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJ2aWNlc19fdGVjaCcpKSB7XG4gICAgICByZXR1cm4gJyN0ZWNoLW1vZGFsJztcbiAgICB9XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnc2VydmljZXNfX25ld21hcmtldCcpKSB7XG4gICAgICByZXR1cm4gJyNuZXdtYXJrZXQtbW9kYWwnO1xuICAgIH1cbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJ2aWNlc19fdHJhaW5pbmcnKSkge1xuICAgICAgcmV0dXJuICcjdHJhaW5pbmctbW9kYWwnO1xuICAgIH1cbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJ2aWNlc19fcG9zaXRpdmUnKSkge1xuICAgICAgcmV0dXJuICcjcG9zaXRpdmUtbW9kYWwnO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvLyBQb2x5ZmlsbHM6XG4vLyAtIGNsYXNzTGlzdFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCBuYXZMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzLXNtb290aC1saW5rJyk7XG5cbiAgICBbXS5mb3JFYWNoLmNhbGwobmF2TGlua3MsIChlbCkgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zbW9vdGhTY3JvbGwoZXYudGFyZ2V0LmhyZWYuc3BsaXQoJyMnKVsxXSk7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBjdXJyZW50WVBvc2l0aW9uKCkge1xuICAgIC8vIEZpcmVmb3gsIENocm9tZSwgT3BlcmEsIFNhZmFyaVxuICAgIGlmIChzZWxmLnBhZ2VZT2Zmc2V0KSByZXR1cm4gc2VsZi5wYWdlWU9mZnNldDtcbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2IC0gc3RhbmRhcmRzIG1vZGVcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2LCA3IGFuZCA4XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGVsbVlQb3NpdGlvbihlbElkKSB7XG4gICAgbGV0IGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsSWQpO1xuICAgIGxldCB5ID0gZWxtLm9mZnNldFRvcDtcbiAgICBsZXQgbm9kZSA9IGVsbTtcblxuICAgIHdoaWxlIChub2RlLm9mZnNldFBhcmVudCAmJiBub2RlLm9mZnNldFBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgbm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuICAgICAgeSArPSBub2RlLm9mZnNldFRvcDtcbiAgICB9XG4gICAgcmV0dXJuIHk7XG4gIH1cblxuICBzbW9vdGhTY3JvbGwoZWxJZCkge1xuICAgIGxldCBzdGFydFkgPSB0aGlzLmN1cnJlbnRZUG9zaXRpb24oKTtcbiAgICBsZXQgc3RvcFkgPSB0aGlzLmVsbVlQb3NpdGlvbihlbElkKTtcbiAgICBsZXQgZGlzdGFuY2UgPSBzdG9wWSA+IHN0YXJ0WSA/IHN0b3BZIC0gc3RhcnRZIDogc3RhcnRZIC0gc3RvcFk7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCAxMDApIHtcbiAgICAgIHNjcm9sbFRvKDAsIHN0b3BZKTsgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzcGVlZCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAxMDApO1xuXG4gICAgaWYgKHNwZWVkID49IDIwKSBzcGVlZCA9IDIwO1xuXG4gICAgbGV0IHN0ZXAgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMjUpO1xuICAgIGxldCBsZWFwWSA9IHN0b3BZID4gc3RhcnRZID8gc3RhcnRZICsgc3RlcCA6IHN0YXJ0WSAtIHN0ZXA7XG4gICAgbGV0IHRpbWVyID0gMDtcblxuICAgIGlmIChzdG9wWSA+IHN0YXJ0WSkge1xuICAgICAgZm9yICggbGV0IGkgPSBzdGFydFk7IGkgPCBzdG9wWTsgaSArPSBzdGVwICkge1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBsZWFwWSk7XG4gICAgICAgIH0sIHRpbWVyICogc3BlZWQpO1xuXG4gICAgICAgIGxlYXBZICs9IHN0ZXA7XG5cbiAgICAgICAgaWYgKGxlYXBZID4gc3RvcFkpIHtcbiAgICAgICAgICBsZWFwWSA9IHN0b3BZOyB0aW1lcisrO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yICggbGV0IGkgPSBzdGFydFk7IGkgPiBzdG9wWTsgaSAtPSBzdGVwICkge1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGxlYXBZKTtcbiAgICAgIH0sIHRpbWVyICogc3BlZWQpO1xuXG4gICAgICBsZWFwWSAtPSBzdGVwO1xuXG4gICAgICBpZiAobGVhcFkgPCBzdG9wWSkge1xuICAgICAgICBsZWFwWSA9IHN0b3BZOyB0aW1lcisrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuIiwiLyoqXG4gKiBHZXQgY2xvc2VzdCBwYXJlbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXG4gKlxuICogRXhhbXBsZTpcbiAqICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29tZS1lbGVtZW50Jyk7XG4gKiAgdmFyIGNsb3Nlc3QgPSBnZXRDbG9zZXN0KGVsLCAnLnNvbWUtY2xhc3MnKTtcbiAqICB2YXIgY2xvc2VzdEV4Y2x1ZGluZ0VsZW1lbnQgPSBnZXRDbG9zZXN0KGVsLnBhcmVudE5vZGUsICcuc29tZS1jbGFzcycpO1xuICpcbiAqIEBwYXJhbSB7RE9Nbm9kZX0gZWxcbiAqIEBwYXJhbSB7cXVlcnlTZWxlY3Rvcn0gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0RPTW5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvcikge1xuXG4gIHZhciBmaXJzdENoYXIgPSBzZWxlY3Rvci5jaGFyQXQoMCk7XG5cbiAgLy8gR2V0IGNsb3Nlc3QgbWF0Y2hcbiAgZm9yICggOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSApIHtcblxuICAgIC8vIElmIHNlbGVjdG9yIGlzIGEgY2xhc3NcbiAgICBpZiAoIGZpcnN0Q2hhciA9PT0gJy4nICkge1xuICAgICAgaWYgKCBlbC5jbGFzc0xpc3QuY29udGFpbnMoIHNlbGVjdG9yLnN1YnN0cigxKSApICkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgc2VsZWN0b3IgaXMgYW4gSURcbiAgICBpZiAoIGZpcnN0Q2hhciA9PT0gJyMnICkge1xuICAgICAgaWYgKCBlbC5pZCA9PT0gc2VsZWN0b3Iuc3Vic3RyKDEpICkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgc2VsZWN0b3IgaXMgYSBkYXRhIGF0dHJpYnV0ZVxuICAgIGlmICggZmlyc3RDaGFyID09PSAnWycgKSB7XG4gICAgICBpZiAoIGVsLmhhc0F0dHJpYnV0ZSggc2VsZWN0b3Iuc3Vic3RyKDEsIHNlbGVjdG9yLmxlbmd0aCAtIDIpICkgKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBzZWxlY3RvciBpcyBhIHRhZ1xuICAgIGlmICggZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvciApIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcblxufVxuIl19

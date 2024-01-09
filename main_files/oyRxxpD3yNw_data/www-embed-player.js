(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function ja(a,b){a.raw=b;return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function la(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ma(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ma(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||pa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function x(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function xa(){this.A=!1;this.u=null;this.i=void 0;this.h=1;this.m=this.l=0;this.K=this.j=null}
function ya(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
xa.prototype.D=function(a){this.i=a};
function za(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.m}
xa.prototype.return=function(a){this.j={return:a};this.h=this.m};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.m:void 0!=b.B&&a.m<b.B?(a.h=b.B,a.j=null):a.h=a.m:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.u;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.u=null,za(a.h,g),Ga(a)}a.h.u=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ya(a.h);a.h.u?b=Fa(a,a.h.u.next,b,a.h.D):(a.h.D(b),b=Ga(a));return b};
this.throw=function(b){ya(a.h);a.h.u?b=Fa(a,a.h.u["throw"],b,a.h.D):(za(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.u)}};
b.prototype.ba=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.m(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.ka(h,g):this.m(g)};
b.prototype.u=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.K()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Xb(h.resolve,h.reject)};
b.prototype.ka=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(v){try{l(t(v))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Xb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),n=l.next();!n.done;n=l.next())d(n.value).Xb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(v){return function(y){t[v]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Xb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ma(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ma(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ma(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ma(k,g)&&ma(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ma(k,g)&&ma(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&ma(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||wa});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ma(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ma(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||ea});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ma(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){C.console&&C.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(a,b){this.h=a===Ab&&b||""}
zb.prototype.toString=function(){return this.h};
function Bb(a){return new zb(Ab,a)}
var Ab={};Bb("");var Cb={};function Db(a){this.h=a}
Db.prototype.toString=function(){return this.h.toString()};function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};
function Fb(a){if(a instanceof Eb&&a.constructor===Eb)return a.h;Na(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Hb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Eb(a,Gb)}
;var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Jb(a){this.h=a}
Jb.prototype.toString=function(){return this.h.toString()};
var Kb={},Lb=new Jb("about:invalid#zClosurez",Kb);var Mb=Ma(610401301,!1),Nb=Ma(572417392,!0);function Ob(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=C.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Mb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Mb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:F("Opera")}
function Ub(){return Sb()?!1:F("Trident")||F("MSIE")}
function Vb(){return F("Firefox")||F("FxiOS")}
function Wb(){return Sb()?Rb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Sb()?0:F("Edge"))||F("Silk")}
;function Xb(a){this.h=a}
Xb.prototype.toString=function(){return this.h.toString()};function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function ec(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function hc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function ic(a,b){b=hc(b);return ec(a,b)}
function jc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return ec(a,b+c)}
function kc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var lc=/#|$/,mc=/[?&]($|#)/;function nc(a,b){for(var c=a.search(lc),d=0,e,f=[];0<=(e=kc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(mc,"$1")}
;function oc(a){this.h=a}
;function pc(a,b,c){this.j=a;this.u=b;this.i=c||[];this.h=new Map}
m=pc.prototype;m.Md=function(a){var b=B.apply(1,arguments),c=this.xc(b);c?c.push(new oc(a)):this.zd(a,b)};
m.zd=function(a){var b=this.getKey(B.apply(1,arguments));this.h.set(b,[new oc(a)])};
m.xc=function(){var a=this.getKey(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.de=function(){var a=this.xc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.getKey=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function qc(a,b){pc.call(this,a,3,b)}
x(qc,pc);qc.prototype.l=function(a){var b=B.apply(1,arguments),c=0,d=this.de(b);d&&(c=d.h);this.zd(c+a,b)};function rc(a,b){pc.call(this,a,2,b)}
x(rc,pc);rc.prototype.record=function(a){this.Md(a,B.apply(1,arguments))};function sc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function tc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?tc.apply(null,d):sc(d)}}
;function G(){this.ob=this.ob;this.u=this.u}
m=G.prototype;m.ob=!1;m.Z=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function uc(a,b){a.addOnDisposeCallback(Wa(sc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.u||(this.u=[]),this.u.push(void 0!==b?Va(a,b):a))};
m.S=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function vc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
vc.prototype.stopPropagation=function(){this.j=!0};
vc.prototype.preventDefault=function(){this.defaultPrevented=!0};function wc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=xc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,yc[c])c=yc[c];else{c=String(c);if(!yc[c]){var f=/function\s+([^\(]+)/m.exec(c);yc[c]=f?f[1]:"[Anonymous]"}c=yc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function xc(a,b){b||(b={});b[zc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[zc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=xc(a,b));return c}
function zc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var yc={};var Ac=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Bc(){return Mb?!!Pb&&!!Pb.platform:!1}
function Cc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Dc(a){Dc[" "](a);return a}
Dc[" "]=function(){};var Ec=Tb(),Fc=Ub(),Gc=F("Edge"),Hc=F("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Ic=-1!=Ob().toLowerCase().indexOf("webkit")&&!F("Edge");Ic&&F("Mobile");Bc()||F("Macintosh");Bc()||F("Windows");(Bc()?"Linux"===Pb.platform:F("Linux"))||Bc()||F("CrOS");var Jc=Bc()?"Android"===Pb.platform:F("Android");Cc();F("iPad");F("iPod");Cc()||F("iPad")||F("iPod");Ob().toLowerCase().indexOf("kaios");
function Kc(){var a=C.document;return a?a.documentMode:void 0}
var Lc;a:{var Mc="",Nc=function(){var a=Ob();if(Hc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Gc)return/Edge\/([\d\.]+)/.exec(a);if(Fc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ic)return/WebKit\/(\S+)/.exec(a);if(Ec)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Nc&&(Mc=Nc?Nc[1]:"");if(Fc){var Oc=Kc();if(null!=Oc&&Oc>parseFloat(Mc)){Lc=String(Oc);break a}}Lc=Mc}var Rc=Lc,Sc;if(C.document&&Fc){var Tc=Kc();Sc=Tc?Tc:parseInt(Rc,10)||void 0}else Sc=void 0;var Uc=Sc;function Vc(a,b){vc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(Vc,vc);var Wc={2:"touch",3:"pen",4:"mouse"};
Vc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Hc){a:{try{Dc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Wc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Vc.Aa.preventDefault.call(this)};
Vc.prototype.stopPropagation=function(){Vc.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Vc.prototype.preventDefault=function(){Vc.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xc="closure_listenable_"+(1E6*Math.random()|0);var Yc=0;function Zc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++Yc;this.Nb=this.Wb=!1}
function $c(a){a.Nb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function ad(a){this.src=a;this.listeners={};this.h=0}
ad.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=bd(a,b,d,e);-1<g?(b=a[g],c||(b.Wb=!1)):(b=new Zc(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
ad.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=bd(e,b,c,d);return-1<b?($c(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function cd(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&($c(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function bd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Nb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var dd="closure_lm_"+(1E6*Math.random()|0),ed={},fd=0;function gd(a,b,c,d,e){if(d&&d.once)hd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)gd(a,b[f],c,d,e);else c=id(c),a&&a[Xc]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):jd(a,b,c,!1,d,e)}
function jd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=kd(a);h||(a[dd]=h=new ad(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ld();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ac||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(md(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");fd++}}
function ld(){function a(c){return b.call(a.src,a.listener,c)}
var b=nd;return a}
function hd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)hd(a,b[f],c,d,e);else c=id(c),a&&a[Xc]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):jd(a,b,c,!0,d,e)}
function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=id(c),a&&a[Xc])?a.h.remove(String(b),c,d,e):a&&(a=kd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=bd(b,c,d,e)),(c=-1<a?b[a]:null)&&pd(c))}
function pd(a){if("number"!==typeof a&&a&&!a.Nb){var b=a.src;if(b&&b[Xc])cd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(md(c),d):b.addListener&&b.removeListener&&b.removeListener(d);fd--;(c=kd(b))?(cd(c,a),0==c.h&&(c.src=null,b[dd]=null)):$c(a)}}}
function md(a){return a in ed?ed[a]:ed[a]="on"+a}
function nd(a,b){if(a.Nb)a=!0;else{b=new Vc(b,this);var c=a.listener,d=a.cc||a.src;a.Wb&&pd(a);a=c.call(d,b)}return a}
function kd(a){a=a[dd];return a instanceof ad?a:null}
var qd="__closure_events_fn_"+(1E9*Math.random()>>>0);function id(a){if("function"===typeof a)return a;a[qd]||(a[qd]=function(b){return a.handleEvent(b)});
return a[qd]}
;function rd(){G.call(this);this.h=new ad(this);this.Za=this;this.fa=null}
Ya(rd,G);rd.prototype[Xc]=!0;m=rd.prototype;m.addEventListener=function(a,b,c,d){gd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){od(this,a,b,c,d)};
function sd(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new vc(b,a):b instanceof vc?b.target=b.target||a:(e=b,b=new vc(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=td(g,c,!0,b)&&e}b.j||(g=b.h=a,e=td(g,c,!0,b)&&e,b.j||(e=td(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=td(g,c,!1,b)&&e}
m.S=function(){rd.Aa.S.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,$c(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function td(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Nb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Wb&&cd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ud(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ud.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function vd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function wd(a,b){return a+Math.random()*(b-a)}
;function xd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=xd.prototype;m.clone=function(){return new xd(this.x,this.y)};
m.equals=function(a){return a instanceof xd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function yd(a,b){this.width=a;this.height=b}
m=yd.prototype;m.clone=function(){return new yd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Hb=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function zd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ad(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Bd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Cd;function Dd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Ad("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Ed(a){C.setTimeout(function(){throw a;},0)}
;function Fd(){this.i=this.h=null}
Fd.prototype.add=function(a,b){var c=Gd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Fd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Gd=new ud(function(){return new Hd},function(a){return a.reset()});
function Hd(){this.next=this.scope=this.h=null}
Hd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Hd.prototype.reset=function(){this.next=this.scope=this.h=null};var Id,Jd=!1,Kd=new Fd;function Ld(a,b){Id||Md();Jd||(Id(),Jd=!0);Kd.add(a,b)}
function Md(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Id=function(){a.then(Nd)}}else Id=function(){var b=Nd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Sb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Cd||(Cd=Dd()),Cd(b)):C.setImmediate(b)}}
function Nd(){for(var a;a=Kd.remove();){try{a.h.call(a.scope)}catch(b){Ed(b)}vd(Gd,a)}Jd=!1}
;function Od(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Pd(b,2,c)},function(c){Pd(b,3,c)})}catch(c){Pd(this,3,c)}}
function Qd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Qd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Rd=new ud(function(){return new Qd},function(a){a.reset()});
function Sd(a,b,c){var d=Rd.get();d.i=a;d.h=b;d.context=c;return d}
function Td(a){return new Od(function(b,c){c(a)})}
Od.prototype.then=function(a,b,c){return Ud(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Od.prototype.$goog_Thenable=!0;m=Od.prototype;m.oc=function(a,b){return Ud(this,null,a,b)};
m.catch=Od.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new Vd(a);Ld(function(){Wd(this,b)},this)}};
function Wd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Wd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Xd(c),Yd(c,e,3,b)))}a.j=null}else Pd(a,3,b)}
function Zd(a,b){a.i||2!=a.h&&3!=a.h||$d(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Ud(a,b,c,d){var e=Sd(null,null,null);e.child=new Od(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Vd?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Zd(a,e);return e.child}
m.cf=function(a){this.h=0;Pd(this,2,a)};
m.df=function(a){this.h=0;Pd(this,3,a)};
function Pd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.cf,f=a.df;if(d instanceof Od){Zd(d,Sd(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){ae(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,$d(a),3!=b||c instanceof Vd||be(a,c))}}
function ae(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function $d(a){a.m||(a.m=!0,Ld(a.Yd,a))}
function Xd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.Yd=function(){for(var a;a=Xd(this);)Yd(this,a,this.h,this.A);this.m=!1};
function Yd(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.child)b.child.j=null,ce(b,c,d);else try{b.j?b.i.call(b.context):ce(b,c,d)}catch(e){ee.call(null,e)}vd(Rd,b)}
function ce(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function be(a,b){a.u=!0;Ld(function(){a.u&&ee.call(null,b)})}
var ee=Ed;function Vd(a){$a.call(this,a)}
Ya(Vd,$a);Vd.prototype.name="cancel";function fe(a,b){rd.call(this);this.j=a||1;this.i=b||C;this.l=Va(this.af,this);this.m=Xa()}
Ya(fe,rd);m=fe.prototype;m.enabled=!1;m.Fa=null;m.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
m.af=function(){if(this.enabled){var a=Xa()-this.m;0<a&&a<.8*this.j?this.Fa=this.i.setTimeout(this.l,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),sd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.l,this.j),this.m=Xa())};
m.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
m.S=function(){fe.Aa.S.call(this);this.stop();delete this.i};
function ge(a,b,c){if("function"===typeof a)c&&(a=Va(a,c));else if(a&&"function"==typeof a.handleEvent)a=Va(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function he(a){G.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new fe(this.flushInterval);this.h.listen("tick",this.lb,!1,this);uc(this,this.h)}
x(he,G);m=he.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ie(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.lb()}
m.lb=function(){var a=this.i.values();a=[].concat(la(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);je(a);this.j=0;this.h.enabled&&this.h.stop()};
m.sc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new qc(a,b))};
m.Wc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new rc(a,b))};
function ke(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.Rb=function(a){this.Ld.apply(this,[a,1].concat(la(B.apply(1,arguments))))};
m.Ld=function(a,b){var c=B.apply(2,arguments),d=ke(this,a);d&&d instanceof qc&&(d.l(b,c),ie(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=ke(this,a);d&&d instanceof rc&&(d.record(b,c),ie(this))};
function je(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function le(a){this.h=a;this.h.sc("/client_streamz/bg/fic",{Ca:3,Ba:"ke"})}
function me(a){this.h=a;this.h.sc("/client_streamz/bg/fiec",{Ca:3,Ba:"rk"},{Ca:3,Ba:"ke"},{Ca:2,Ba:"ec"},{Ca:3,Ba:"em"})}
function ne(a,b,c,d,e){a.h.Rb("/client_streamz/bg/fiec",b,c,d,e)}
function oe(a){this.h=a;this.h.Wc("/client_streamz/bg/fil",{Ca:3,Ba:"rk"},{Ca:3,Ba:"ke"})}
oe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function pe(a){this.h=a;this.h.sc("/client_streamz/bg/fsc",{Ca:3,Ba:"rk"},{Ca:3,Ba:"ke"})}
function qe(a){this.h=a;this.h.Wc("/client_streamz/bg/fsl",{Ca:3,Ba:"rk"},{Ca:3,Ba:"ke"})}
qe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var re={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function se(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=te(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ue(a,h),d+=ue(a,h+4),e+=ue(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return re.toString(e)}
function te(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ue(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Vb();var ve=Cc()||F("iPod"),we=F("iPad");!F("Android")||Wb()||Vb()||Tb()||F("Silk");Wb();var xe=F("Safari")&&!(Wb()||(Sb()?0:F("Coast"))||Tb()||(Sb()?0:F("Edge"))||(Sb()?Rb("Microsoft Edge"):F("Edg/"))||(Sb()?Rb("Opera"):F("OPR"))||Vb()||F("Silk")||F("Android"))&&!(Cc()||F("iPad")||F("iPod"));var ye={},ze=null;function Ae(a,b){Oa(a);void 0===b&&(b=0);Be();b=ye[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ce(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;De(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function De(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=ze[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Be();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Be(){if(!ze){ze={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ye[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ze[f]&&(ze[f]=e)}}}}
;var Ee="undefined"!==typeof Uint8Array,Fe=!Fc&&"function"===typeof btoa;function Ge(a){if(!Fe)return Ae(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var He=/[-_.]/g,Ie={"-":"+",_:"/",".":"="};function Je(a){return Ie[a]||""}
function Ke(a){return Ee&&null!=a&&a instanceof Uint8Array}
var Le={};var Me;function Ne(a){if(a!==Le)throw Error("illegal external caller");}
function Oe(a,b){Ne(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Oe.prototype.Hb=function(){return null==this.value_};
Oe.prototype.sizeBytes=function(){Ne(Le);var a=this.value_;if(null!=a&&!Ke(a))if("string"===typeof a)if(Fe){He.test(a)&&(a=a.replace(He,Je));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ce(a);else Na(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Pe(){return"function"===typeof BigInt}
var Qe=!Nb,Re=!Nb;function Se(a){return Array.prototype.slice.call(a)}
;var Te;Te="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,la(Object.values({Gf:1,Ef:2,Df:4,Jf:8,If:16,Hf:32,uf:64,Lf:128,Cf:256,Bf:512,Ff:1024,zf:2048,Kf:4096,Af:8192})));var Ue=Te?function(a,b){a[Te]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ve(a){var b=We(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Se(a)),Xe(a,b|1))}
function Ye(a,b,c){return c?a|b:a&~b}
var We=Te?function(a){return a[Te]|0}:function(a){return a.Sa|0},Ze=Te?function(a){return a[Te]}:function(a){return a.Sa},Xe=Te?function(a,b){a[Te]=b}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function $e(){var a=[];Ue(a,1);return a}
function af(a,b){Xe(b,(a|0)&-14591)}
function bf(a,b){Xe(b,(a|34)&-14557)}
function cf(a){a=a>>14&1023;return 0===a?536870912:a}
;var df={},ef={};function ff(a){return!(!a||"object"!==typeof a||a.Zf!==ef)}
function gf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var hf,jf=!Nb;function kf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Oe(a,Le):Me||(Me=new Oe(null,Le));else if(a.constructor!==Oe)if(Ke(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Oe(new Uint8Array(a),Le):Me||(Me=new Oe(null,Le));else throw Error();return a}
function lf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=We(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Xe(a,d|1);return!0}
var mf,nf=[];Xe(nf,55);mf=Object.freeze(nf);function of(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var pf=0,qf=0;function rf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(sf(c,a)),b=c.next().value,a=c.next().value,c=b);pf=c>>>0;qf=a>>>0}
function tf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Pe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+uf(c)+uf(a));return c}
function uf(a){a=String(a);return"0000000".slice(a.length)+a}
function vf(){var a=pf,b=qf;b&2147483648?Pe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(sf(a,b)),a=b.next().value,b=b.next().value,a="-"+tf(a,b)):a=tf(a,b);return a}
function sf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function wf(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function xf(a){return a.displayName||a.name||"unknown type name"}
function yf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var zf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Af(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:zf.test(a)}
function Bf(a){if(null!=a){if("number"!==typeof a)throw wf("int32");if(!Number.isFinite(a))throw wf("int32");a|=0}return a}
function Cf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Df(a){if(null!=a){var b=!!b;if(!Af(a))throw wf("int64");a="string"===typeof a?Ef(a):b?Ff(a):Gf(a)}return a}
function Hf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Gf(a){Af(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){rf(a);var b=pf,c=qf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Ff(a){Af(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Hf(b)?a=b:(rf(a),a=vf())}return a}
function Ef(a){Af(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Hf(a)){if(16>a.length)rf(Number(a));else if(Pe())a=BigInt(a),pf=Number(a&BigInt(4294967295))>>>0,qf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);qf=pf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),qf*=1E6,pf=1E6*pf+d,4294967296<=pf&&(qf+=Math.trunc(pf/4294967296),qf>>>=0,pf>>>=0);b&&(b=w(sf(pf,qf)),
a=b.next().value,b=b.next().value,pf=a,qf=b)}a=vf()}return a}
function If(a){if("string"!==typeof a)throw Error();return a}
function Jf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Kf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+xf(b)+" but got "+(a&&xf(a.constructor)));}
function Lf(a,b,c){if(null!=a&&"object"===typeof a&&a.Ic===df)return a;if(Array.isArray(a)){var d=We(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Xe(a,e);return new b(a)}}
;var Mf;function Nf(a,b){We(b);Mf=b;a=new a(b);Mf=void 0;return a}
function Of(a,b,c){null==a&&(a=Mf);Mf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=We(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(gf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}Xe(a,d);return a}
;function Pf(a,b){return Qf(b)}
function Qf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return jf||!lf(a,void 0,9999)?a:void 0;if(Ke(a))return Ge(a);if(a instanceof Oe){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Ge(b)}}}return a}
;function Rf(a,b,c){a=Se(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Sf(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&We(a)&1?void 0:f&&We(a)&2?a:Tf(a,b,c,void 0!==d,e,f);else if(gf(a)){var g={},h;for(h in a)g[h]=Sf(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Tf(a,b,c,d,e,f){var g=d||c?We(a):0;d=d?!!(g&32):void 0;a=Se(a);for(var h=0;h<a.length;h++)a[h]=Sf(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Uf(a){return a.Ic===df?a.toJSON():Qf(a)}
;function Vf(a,b,c){c=void 0===c?bf:c;if(null!=a){if(Ee&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=We(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Xe(a,(d|34)&-12293),a):Tf(a,Vf,d&4?bf:c,!0,!1,!0)}a.Ic===df&&(c=a.F,d=Ze(c),a=d&2?a:Nf(a.constructor,Wf(c,d,!0)));return a}}
function Wf(a,b,c){var d=c||b&2?bf:af,e=!!(b&32);a=Rf(a,b,function(f){return Vf(f,e,d)});
Ue(a,32|(c?2:0));return a}
function Xf(a){var b=a.F,c=Ze(b);return c&2?Nf(a.constructor,Wf(b,c,!1)):a}
;function Yf(a,b){a=a.F;return Zf(a,Ze(a),b)}
function Zf(a,b,c,d){if(-1===c)return null;if(c>=cf(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function K(a,b,c){var d=a.F,e=Ze(d);of(e);$f(d,e,b,c);return a}
function $f(a,b,c,d,e){gf(d);var f=cf(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Xe(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function ag(a){return void 0!==bg(a,cg,11,!1)}
function dg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function eg(a,b,c,d){var e=a.F,f=Ze(e);of(f);if(null==c)return $f(e,f,b),a;var g=We(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Se(c),h=0,g=fg(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=Se(c),h=0,g=fg(g,f,!0));g!==h&&Xe(c,g);$f(e,f,b,c);return a}
function gg(a,b,c,d){a=a.F;var e=Ze(a);of(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=Zf(a,f,k)&&(0!==g&&(f=$f(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=$f(a,e,c));$f(a,e,b,d)}
function bg(a,b,c,d){a=a.F;var e=Ze(a),f=Zf(a,e,c,d);b=Lf(f,b,e);b!==f&&null!=b&&$f(a,e,c,b,d);return b}
function hg(a,b,c,d){d=void 0===d?!1:d;b=bg(a,b,c,d);if(null==b)return b;a=a.F;var e=Ze(a);if(!(e&2)){var f=Xf(b);f!==b&&(b=f,$f(a,e,c,b,d))}return b}
function ig(a,b,c,d){null!=d?Kf(d,b):d=void 0;return K(a,c,d)}
function jg(a,b,c,d){var e=a.F,f=Ze(e);of(f);if(null==d)return $f(e,f,c),a;for(var g=We(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var v=d[r];Kf(v,b);k||(v=!!(We(v.F)&2),p&&(p=!v),t&&(t=v))}k||(g=Ye(g,5,!0),g=Ye(g,8,p),g=Ye(g,16,t));if(n||l&&g!==h)d=Se(d),h=0,g=fg(g,f,!0);g!==h&&Xe(d,g);$f(e,f,c,d);return a}
function fg(a,b,c){a=Ye(a,2,!!(2&b));a=Ye(a,32,!!(32&b)&&c);return a=Ye(a,2048,!1)}
function kg(a,b){a=Yf(a,b);var c;null==a?c=a:Af(a)?"number"===typeof a?c=Gf(a):c=Ef(a):c=void 0;return c}
function lg(a){a=Yf(a,1);var b=void 0===b?!1:b;b=null==a?a:Af(a)?"string"===typeof a?Ef(a):b?Ff(a):Gf(a):void 0;return b}
function mg(a){a=Yf(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function ng(a){return kf(a,!1)}
function og(a,b,c){if(null!=c){if(!Number.isFinite(c))throw wf("enum");c|=0}return K(a,b,c)}
;function pg(a,b,c){this.F=Of(a,b,c)}
m=pg.prototype;m.toJSON=function(){if(hf)var a=qg(this,this.F,!1);else a=Tf(this.F,Uf,void 0,void 0,!1,!1),a=qg(this,a,!0);return a};
m.serialize=function(){hf=!0;try{return JSON.stringify(this.toJSON(),Pf)}finally{hf=!1}};
function rg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Ue(b,32);return Nf(a,b)}
m.clone=function(){var a=this.F,b=Ze(a);return Nf(this.constructor,Wf(a,b,!1))};
m.Ic=df;m.toString=function(){return qg(this,this.F,!1).toString()};
function qg(a,b,c){var d=a.constructor.Ua,e=Ze(c?a.F:b),f=cf(e),g=!1;if(d&&jf){if(!c){b=Se(b);var h;if(b.length&&gf(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=Ze(a.F);a=cf(h);h=+!!(h&512)-1;for(var k,l,n=0;n<d.length;n++)if(l=d[n],l<a){l+=h;var p=f[l];null==p?f[l]=c?mf:$e():c&&p!==mf&&Ve(p)}else k||(p=void 0,f.length&&gf(p=f[f.length-1])?k=p:f.push(k={})),p=k[l],null==k[l]?k[l]=c?mf:$e():c&&p!==mf&&Ve(p)}k=b.length;if(!k)return b;var t;
if(gf(f=b[k-1])){a:{var r=f;c={};a=!1;for(var v in r){h=r[v];if(Array.isArray(h)){n=h;if(!Re&&lf(h,d,+v)||!Qe&&ff(h)&&0===h.size)h=null;h!=n&&(a=!0)}null!=h?c[v]=h:a=!0}if(a){for(var y in c){r=c;break a}r=null}}r!=f&&(t=!0);k--}for(e=+!!(e&512)-1;0<k;k--){v=k-1;f=b[v];if(!(null==f||!Re&&lf(f,d,v-e)||!Qe&&ff(f)&&0===f.size))break;var z=!0}if(!t&&!z)return b;var H;g?H=b:H=Array.prototype.slice.call(b,0,k);b=H;g&&(b.length=k);r&&b.push(r);return b}
;function sg(a){this.F=Of(a)}
x(sg,pg);var tg=[1,2,3];function ug(a){this.F=Of(a)}
x(ug,pg);var vg=[1,2,3];function wg(a){this.F=Of(a)}
x(wg,pg);wg.Ua=[1];function xg(a){this.F=Of(a)}
x(xg,pg);xg.Ua=[3,6,4];function yg(a){this.F=Of(a)}
x(yg,pg);yg.Ua=[1];function zg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ag(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],y=e[2],z=e[3],H=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var L=z^v&(y^z);var I=1518500249}else L=v^y^z,I=1859775393;else 60>r?(L=v&y|z&(v|y),I=2400959708):(L=v^y^z,I=3395469782);L=((p<<5|p>>>27)&4294967295)+L+H+I+t[r]&4294967295;H=z;z=y;y=(v<<30|v>>>2)&4294967295;v=p;p=L}e[0]=e[0]+p&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],v=0,y=p.length;v<y;++v)r.push(p.charCodeAt(v));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var v=24;0<=v;v-=8)p[t++]=e[r]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ud:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function Bg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Cg(zg(d),a,c||null)].join(" "):null}
function Cg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),Dg(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=Dg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Dg(a){var b=Ag();b.update(a);return b.Ud().toLowerCase()}
;var Eg={};function Fg(a){this.h=a||{cookie:""}}
m=Fg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Hb())return!0;this.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ig;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fc:0,path:b,domain:c});return d};
m.Ac=function(){return Gg(this).keys};
m.Hb=function(){return!this.h.cookie};
m.clear=function(){for(var a=Gg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Gg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Hg=new Fg("undefined"==typeof document?null:document);function Ig(a){return!!Eg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Jg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ig(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Fg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Ig(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Kg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Fg(document)).get(b));return a?Bg(a,c,d):null}
function Lg(a,b){b=void 0===b?!1:b;var c=zg(String(C.location.href)),d=[];if(Jg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Fg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Bg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ig(b)&&((b=Kg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Kg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Mg(a){this.F=Of(a)}
x(Mg,pg);Mg.Ua=[2];function Ng(a){rd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Xa()};
this.j=this.i()}
x(Ng,rd);Ng.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Ng.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Ng.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Ng.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),sd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Og(a){this.F=Of(a)}
x(Og,pg);function Pg(a){this.F=Of(a)}
x(Pg,pg);function Qg(a){this.h=this.i=this.j=a}
Qg.prototype.reset=function(){this.h=this.i=this.j};
Qg.prototype.getValue=function(){return this.i};function Rg(a){this.F=Of(a)}
x(Rg,pg);Rg.prototype.Bc=function(){return mg(this)};function Sg(a){this.F=Of(a)}
x(Sg,pg);Sg.Ua=[1];function cg(a){this.F=Of(a)}
x(cg,pg);var Tg=["platform","platformVersion","architecture","model","uaFullVersion"];new Sg;function Ug(a){this.F=Of(a)}
x(Ug,pg);function Vg(a){this.F=Of(a,4)}
x(Vg,pg);function Wg(a){this.F=Of(a,35)}
x(Wg,pg);Wg.Ua=[3,20,27];function Xg(a){this.F=Of(a,19)}
x(Xg,pg);Xg.prototype.Ob=function(a){return og(this,2,a)};
Xg.Ua=[3,5];function Yg(a){this.F=Of(a,7)}
x(Yg,pg);var Zg=function(a){return function(b){return rg(a,b)}}(Yg);
Yg.Ua=[5,6];function $g(a){this.F=Of(a)}
x($g,pg);var ah;ah=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=hg;this.defaultValue=void 0}(175237375,{Uf:0},$g);function bh(a){G.call(this);var b=this;this.componentId="";this.j=[];this.ea="";this.fa=this.X=-1;this.ba=!1;this.A=this.experimentIds=null;this.T=this.m=0;this.ka=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Gb=a.Gb||function(){};
this.i=new ch(a.logSource,a.sb);this.network=a.network;this.Mb=a.Mb||null;this.bufferSize=1E3;this.ta=Wa(wd,0,1);this.K=a.ef||null;this.sessionIndex=a.sessionIndex||null;this.Eb=a.Eb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.ed;this.sb=a.sb||!1;var c=og(new Ug,1,1);dh(this.i,c);this.l=new Qg(1E4);this.h=new Ng(this.l.getValue());a=eh(this,a.Xc);gd(this.h,"tick",a,!1,this);this.D=new Ng(6E5);gd(this.D,"tick",a,!1,this);this.Eb||this.D.start();this.sb||(gd(document,"visibilitychange",
function(){"hidden"===document.visibilityState&&b.vc()}),gd(document,"pagehide",this.vc,!1,this))}
x(bh,G);function eh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=bh.prototype;m.S=function(){this.vc();this.h.stop();this.D.stop();G.prototype.S.call(this)};
function fh(a,b){a.l=new Qg(1>b?1:b);a.h.setInterval(a.l.getValue())}
m.log=function(a){a=a.clone();var b=this.ka++;a=K(a,21,Df(b));this.componentId&&K(a,26,Jf(this.componentId));if(!lg(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";K(b,1,Df(c))}null==kg(a,15)&&K(a,15,Df(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),ig(b,Mg,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Eb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.fa>d&&this.X<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.Bc?gh(this.i,this.network.Bc()):gh(this.i,0));var e=hh(this.i,this.j,this.m,this.T,this.Mb);d={};var f=this.Gb();f&&(d.Authorization=f);this.K||(this.K=.01>this.ta()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");var g=this.K;this.sessionIndex&&(d["X-Goog-AuthUser"]=
this.sessionIndex,g=jc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=jc(g,"pageId",this.pageId));if(f&&this.ea===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize(),k;this.A&&this.A.isSupported(h.length)&&(k=this.A.compress(h));var l={url:g,body:h,Qd:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.l.reset();c.h.setInterval(c.l.getValue());if(r){var v=
null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));v=Zg(y)}catch(H){}if(v){r=Number;y="-1";y=void 0===y?"0":y;var z=lg(v);r=r(null!=z?z:y);0<r&&(c.X=Date.now(),c.fa=c.X+r);v=ah.ctor?ah.i(v,ah.ctor,ah.h,!0):ah.i(v,ah.h,null,!0);if(r=null===v?void 0:v)v=-1,v=void 0===v?0:v,r=Cf(Yf(r,1)),v=null!=r?r:v,-1!==v&&(c.ba||fh(c,v))}}a&&a();c.T=0},p=function(r,v){var y=e.F;
var z=Ze(y),H=z,L=!(2&z),I=!!(2&H),T=I?1:2;z=1===T;T=2===T;L&&(L=!I);I=Zf(y,H,3);I=Array.isArray(I)?I:mf;var J=We(I),ha=!!(4&J);if(!ha){var M=J;0===M&&(M=fg(M,H,!1));M=Ye(M,1,!0);J=I;var Z=H,ca=!!(2&M);ca&&(Z=Ye(Z,2,!0));for(var na=!ca,oa=!0,tb=0,Pc=0;tb<J.length;tb++){var Qc=Lf(J[tb],Wg,Z);if(Qc instanceof Wg){if(!ca){var de=!!(We(Qc.F)&2);na&&(na=!de);oa&&(oa=de)}J[Pc++]=Qc}}Pc<tb&&(J.length=Pc);M=Ye(M,4,!0);M=Ye(M,16,oa);M=Ye(M,8,na);Xe(J,M);ca&&Object.freeze(J);J=M}M=!!(8&J)||z&&!I.length;if(L&&
!M){dg(J)&&(I=Se(I),J=fg(J,H,!1),H=$f(y,H,3,I));L=I;for(M=0;M<L.length;M++)Z=L[M],ca=Xf(Z),Z!==ca&&(L[M]=ca);J=Ye(J,8,!0);J=Ye(J,16,!L.length);Xe(L,J)}dg(J)||(L=J,z?J=Ye(J,!I.length||16&J&&(!ha||32&J)?2:2048,!0):J=Ye(J,32,!1),J!==L&&Xe(I,J),z&&Object.freeze(I));T&&dg(J)&&(I=Se(I),J=fg(J,H,!1),Xe(I,J),$f(y,H,3,I));y=I;H=kg(e,14);z=c.l;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.l.getValue());401===r&&f&&(c.ea=f);H&&(c.m+=H);void 0===v&&(v=c.isRetryable(r));
v&&(c.j=y.concat(c.j),c.Eb||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.T},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Oc["Content-Encoding"]="gzip";l.Oc["Content-Type"]="application/binary";l.body=r;l.Qd=2;t()},function(){t()}):t()}}}};
m.vc=function(){ih(this.i,!0);this.flush();ih(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function ch(a,b){this.sb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Xg;Number.isInteger(a)&&this.h.Ob(a);b||(this.locale=document.documentElement.getAttribute("lang"));dh(this,new Ug)}
ch.prototype.Ob=function(a){this.h.Ob(a);return this};
function dh(a,b){ig(a.h,Ug,1,b);mg(b)||og(b,1,1);if(!a.sb){b=jh(a);var c=Yf(b,5);(null==c||"string"===typeof c)&&c||K(b,5,Jf(a.locale))}a.uach&&(b=jh(a),hg(b,Sg,9)||ig(b,Sg,9,a.uach))}
function gh(a,b){ag(kh(a))&&(a=lh(a),og(a,1,b))}
function ih(a,b){ag(kh(a))&&(a=lh(a),K(a,2,yf(b)))}
function kh(a){return hg(a.h,Ug,1)}
function mh(a,b){var c=void 0===c?Tg:c;b(window,c).then(function(d){a.uach=d;d=jh(a);ig(d,Sg,9,a.uach);return!0}).catch(function(){return!1})}
function jh(a){a=kh(a);var b=hg(a,cg,11);b||(b=new cg,ig(a,cg,11,b));return b}
function lh(a){a=jh(a);var b=hg(a,Rg,10);b||(b=new Rg,K(b,2,yf(!1)),ig(a,Rg,10,b));return b}
function hh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(ag(kh(a))){var h=lh(a);K(h,3,Bf(d))}ag(kh(a))&&(d=lh(a),K(d,4,Bf(f)));ag(kh(a))&&(f=lh(a),K(f,5,Bf(g)));a=a.h.clone();g=Date.now().toString();a=K(a,4,Df(g));b=jg(a,Wg,3,b);e&&(a=new Og,e=K(a,13,Bf(e)),a=new Pg,e=ig(a,Og,2,e),a=new Vg,e=ig(a,Pg,1,e),e=og(e,2,9),ig(b,Vg,18,e));c&&K(b,14,Df(c));return b}
;function nh(){}
nh.prototype.serialize=function(a){var b=[];oh(this,a,b);return b.join("")};
function oh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),oh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ph(d,c),c.push(":"),oh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ph(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var qh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},rh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ph(a,b){b.push('"',a.replace(rh,function(c){var d=qh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),qh[c]=d);return d}),'"')}
;function sh(){}
sh.prototype.h=null;sh.prototype.getOptions=function(){var a;(a=this.h)||(a={},th(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var uh;function vh(){}
Ya(vh,sh);function wh(a){return(a=th(a))?new ActiveXObject(a):new XMLHttpRequest}
function th(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
uh=new vh;function xh(a){rd.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.K=this.J=null;this.l=this.ea="";this.j=this.ba=this.A=this.X=!1;this.m=0;this.D=null;this.Pa="";this.ka=this.ta=!1}
Ya(xh,rd);var yh=/^https?$/i,zh=["POST","PUT"],Ah=[];function Bh(a,b,c,d,e,f,g){var h=new xh;Ah.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Sd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.ta=g);h.send(a,c,d,e)}
m=xh.prototype;m.Sd=function(){this.dispose();jb(Ah,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.X=!1;this.i=!0;this.J=this.T?wh(this.T):wh(uh);this.K=this.T?this.T.getOptions():uh.getOptions();this.J.onreadystatechange=Va(this.qd,this);try{this.getStatus(),this.ba=!0,this.J.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Ch(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=db(zh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Pa&&(this.J.responseType=this.Pa);"withCredentials"in this.J&&this.J.withCredentials!==this.ta&&(this.J.withCredentials=this.ta);try{Dh(this),0<this.m&&(this.ka=Eh(this.J),this.getStatus(),this.ka?(this.J.timeout=this.m,this.J.ontimeout=Va(this.Ed,
this)):this.D=ge(this.Ed,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Ch(this,g)}};
function Eh(a){return Fc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Ed=function(){"undefined"!=typeof La&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),sd(this,"timeout"),this.abort(8))};
function Ch(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Fh(a);Gh(a)}
function Fh(a){a.X||(a.X=!0,sd(a,"complete"),sd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,sd(this,"complete"),sd(this,"abort"),Gh(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Gh(this,!0));xh.Aa.S.call(this)};
m.qd=function(){this.Z()||(this.ba||this.A||this.j?Hh(this):this.ze())};
m.ze=function(){Hh(this)};
function Hh(a){if(a.i&&"undefined"!=typeof La)if(a.K[1]&&4==Ih(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Ih(a))ge(a.qd,0,a);else if(sd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Jh(a))sd(a,"complete"),sd(a,"success");else{try{var b=2<Ih(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Fh(a)}}finally{Gh(a)}}}
function Gh(a,b){if(a.J){Dh(a);var c=a.J,d=a.K[0]?function(){}:null;
a.J=null;a.K=null;b||sd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Dh(a){a.J&&a.ka&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Ih(this)};
function Jh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=ac(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!yh.test(a?a.toLowerCase():"");c=b}return c}
function Ih(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Ih(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Kh(){}
Kh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Bh(a.url,function(d){d=d.target;if(Jh(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)};
Kh.prototype.Bc=function(){return 1};function Lh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Kh}
x(Lh,G);Lh.prototype.ed=function(){this.X=!0;return this};function Mh(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Lh(a,"0"),a.componentId=b,uc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),b=new bh({logSource:a.logSource,Gb:a.Gb?a.Gb:Lg,sessionIndex:a.sessionIndex,ef:a.i,sb:a.j,Eb:!1,ed:a.X,pageId:a.pageId,Xc:a.Xc,network:a.network?a.network:void 0}),uc(a,b),a.A&&dh(b.i,a.A),a.h&&(c=a.h,d=jh(b.i),K(d,7,Jf(c))),a.m&&
(b.A=a.m),a.componentId&&(b.componentId=a.componentId),a.Mb&&(b.Mb=a.Mb),a.l&&((d=a.l)?(b.experimentIds||(b.experimentIds=new Mg),c=b.experimentIds,d=d.serialize(),K(c,4,Jf(d))):b.experimentIds&&K(b.experimentIds,4)),a.K&&(c=a.K,b.experimentIds||(b.experimentIds=new Mg),eg(b.experimentIds,2,c,ng)),a.D&&(c=a.D,b.ba=!0,fh(b,c)),a.T&&mh(b.i,a.T),a.network.Ob&&a.network.Ob(a.logSource),a.network.Te&&a.network.Te(b),a=b);this.h=a}
x(Mh,G);
Mh.prototype.flush=function(a){var b=a||[];if(b.length){a=new yg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new xg;f=K(f,1,Jf(e.j));for(var g=[],h=0;h<e.i.length;h++)g.push(e.i[h].Ba);f=eg(f,3,g,If);g=[];h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.u;for(var p=e.xc(l)||[],t=[],r=0;r<p.length;r++){var v=p[r],y=v&&v.h;v=new ug;switch(n){case 3:y=Number(y);Number.isFinite(y)&&gg(v,1,vg,Df(y));break;case 2:y=Number(y);
if(null!=y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);gg(v,2,vg,y)}t.push(v)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new wg;t=ig(r,ug,2,t);r=l;v=[];y=[];for(var z=0;z<e.i.length;z++)y.push(e.i[z].Ca);for(z=0;z<y.length;z++){var H=y[z],L=r[z],I=new sg;switch(H){case 3:gg(I,1,tg,Jf(String(L)));break;case 2:H=Number(L);Number.isFinite(H)&&gg(I,2,tg,Bf(H));break;case 1:gg(I,3,tg,yf("true"===L))}v.push(I)}jg(t,sg,1,v);g.push(t)}}jg(f,wg,4,g);c.push(f);
e.clear()}jg(a,xg,1,c);b=this.h;a instanceof Wg?b.log(a):(c=new Wg,a=a.serialize(),a=K(c,8,Jf(a)),b.log(a));this.h.flush()}};function Nh(a,b){this.h=b;this.u=void 0;this.D=new Mh(1828,"","",!1,"",void 0,new Kh);this.i=new he(this.D);this.K=new oe(this.i);this.m=new pe(this.i);this.A=new qe(this.i);this.l=new me(this.i);this.j=se(a);(new le(this.i)).h.Rb("/client_streamz/bg/fic",this.h)}
function Oh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Ph(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Qh(a){function b(z,H,L){Promise.resolve().then(function(){var I;null!=(I=c.qa)&&void 0!==I.u&&I.K.record(Oh()-I.u,I.j,I.h);h.resolve({Od:z,We:H,dg:L})})}
var c=this;this.h=!1;var d=a.program;var e=a.ge;if(!1!==a.Fe){var f,g;this.qa=null!=(g=a.qa)?g:new Nh(e,null!=(f=a.cg)?f:"_")}var h=new Ph;this.i=h.promise;if(!C[e]){var k;null!=(k=this.qa)&&ne(k.l,k.j,k.h,1,"");var l;null!=(l=this.qa)&&l.i.lb()}else if(!C[e].a){var n;null!=(n=this.qa)&&ne(n.l,n.j,n.h,2,"");var p;null!=(p=this.qa)&&p.i.lb()}try{var t=C[e].a,r;null!=(r=this.qa)&&(r.u=Oh());this.j=w(t(d,b,!0,a.ng)).next().value;this.Ve=h.promise.then(function(){})}catch(z){var v;
null!=(v=this.qa)&&ne(v.l,v.j,v.h,4,z.message);var y;null!=(y=this.qa)&&y.i.lb();throw z;}}
Qh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=Oh(),d;null!=(d=this.qa)&&d.m.h.Rb("/client_streamz/bg/fsc",d.j,d.h);return this.i.then(function(e){var f=e.Od;return new Promise(function(g){f(function(h){var k;null!=(k=b.qa)&&k.A.record(Oh()-c,k.j,k.h);g(h)},[a.dd,
a.Xe,a.gf])})})};
Qh.prototype.Bd=function(a){if(this.h)throw Error("Already disposed");var b=Oh(),c;null!=(c=this.qa)&&c.m.h.Rb("/client_streamz/bg/fsc",c.j,c.h);a=this.j([a.dd,a.Xe,a.gf]);var d;null!=(d=this.qa)&&d.A.record(Oh()-b,d.j,d.h);return a};
Qh.prototype.dispose=function(){var a;null!=(a=this.qa)&&a.i.lb();this.h=!0;this.i.then(function(b){(b=b.We)&&b()})};
Qh.prototype.Z=function(){return this.h};var Rh=window;Bb("csi.gstatic.com");Bb("googleads.g.doubleclick.net");Bb("partner.googleadservices.com");Bb("pubads.g.doubleclick.net");Bb("securepubads.g.doubleclick.net");Bb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Sh=ia([""]),Th=ja(["\x00"],["\\0"]),Uh=ja(["\n"],["\\n"]),Vh=ja(["\x00"],["\\u0000"]);function Wh(a){return-1===a.toString().indexOf("`")}
Wh(function(a){return a(Sh)})||Wh(function(a){return a(Th)})||Wh(function(a){return a(Uh)})||Wh(function(a){return a(Vh)});function Xh(a){this.qe=a}
function Yh(a){return new Xh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Zh=[Yh("data"),Yh("http"),Yh("https"),Yh("mailto"),Yh("ftp"),new Xh(function(a){return/^[^:]*([/?#]|$)/.test(a)})],$h="function"===typeof URL;
function ai(a){if(a instanceof Jb)a instanceof Jb&&a.constructor===Jb?a=a.h:(Na(a),a="type_error:SafeUrl");else{b:if($h){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function bi(a,b){b=ai(b);void 0!==b&&(a.href=b)}
;var ci={};function di(){}
function ei(a){this.h=a}
x(ei,di);ei.prototype.toString=function(){return this.h};function fi(a){var b="true".toString(),c=[new ei(gi[0].toLowerCase(),ci)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ei)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function hi(){throw Error("unknown trace type");}
;var ii="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function ji(a,b){if(b instanceof Eb)a.href=Fb(b).toString();else{if(-1===ii.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=ai(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function ki(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function li(a){var b=ki(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function mi(a,b){a.src=Fb(b);li(a)}
;function ni(a){var b=oi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function pi(){var a=[];ni(function(b){a.push(b)});
return a}
var oi={hf:"allow-forms",jf:"allow-modals",kf:"allow-orientation-lock",lf:"allow-pointer-lock",mf:"allow-popups",nf:"allow-popups-to-escape-sandbox",pf:"allow-presentation",qf:"allow-same-origin",rf:"allow-scripts",sf:"allow-top-navigation",tf:"allow-top-navigation-by-user-activation"},qi=cb(function(){return pi()});
function ri(){var a=si(),b={};eb(qi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function si(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function ti(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ui=(new Date).getTime();function vi(a){rd.call(this);var b=this;this.A=this.j=0;this.Ea=null!=a?a:{na:function(e,f){return setTimeout(e,f)},
oa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(wi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||xi(this)}
x(vi,rd);function yi(){var a=zi;vi.h||(vi.h=new vi(a));return vi.h}
vi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Ea.oa(this.A);delete vi.h};
vi.prototype.wa=function(){return this.i};
function xi(a){a.A=a.Ea.na(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(wi(a),3):c.yield(wi(a),3);xi(a);c.h=0})},3E4)}
function wi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ea.na(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.l=0;h.m=0;a.m=void 0;a.j&&(a.Ea.oa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?sd(a,"networkstatus-online"):sd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function Ai(){this.data=[];this.h=-1}
Ai.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ai.prototype.get=function(a){return!!this.data[a]};
function Bi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Ci(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Ci.prototype[Symbol.iterator]=function(){return this};
Ci.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Di(a,b){return new Ci(a,b)}
;function Ei(){this.blockSize=-1}
;function Fi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(Fi,Ei);Fi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Gi(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Fi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(0==f)for(;d<=c;)Gi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Gi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Gi(this,e);f=0;break}}this.i=f;this.l+=b}};
Fi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Gi(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Hi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ii(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ji(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Hi(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Ki(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ji(a,"inverted-hdpi")&&Ii(a,Array.prototype.filter.call(a.classList?a.classList:Hi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Li(){}
Li.prototype.next=function(){return Mi};
var Mi={done:!0,value:void 0};function Ni(a){return{value:a,done:!1}}
Li.prototype.Ga=function(){return this};function Oi(a){if(a instanceof Pi||a instanceof Qi||a instanceof Ri)return a;if("function"==typeof a.next)return new Pi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Pi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Pi(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Pi(a){this.i=a}
Pi.prototype.Ga=function(){return new Qi(this.i())};
Pi.prototype[Symbol.iterator]=function(){return new Ri(this.i())};
Pi.prototype.h=function(){return new Ri(this.i())};
function Qi(a){this.i=a}
x(Qi,Li);Qi.prototype.next=function(){return this.i.next()};
Qi.prototype[Symbol.iterator]=function(){return new Ri(this.i)};
Qi.prototype.h=function(){return new Ri(this.i)};
function Ri(a){Pi.call(this,function(){return a});
this.j=a}
x(Ri,Pi);Ri.prototype.next=function(){return this.j.next()};function Si(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Si)for(c=a.Ac(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Si.prototype;m.Ac=function(){Ti(this);return this.h.concat()};
m.has=function(a){return Ui(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Vi;Ti(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Vi(a,b){return a===b}
m.Hb=function(){return 0==this.size};
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Ui(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&Ti(this),!0):!1};
function Ti(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Ui(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Ui(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Ui(this.i,a)?this.i[a]:b};
m.set=function(a,b){Ui(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Ac(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Si(this)};
m.keys=function(){return Oi(this.Ga(!0)).h()};
m.values=function(){return Oi(this.Ga(!1)).h()};
m.entries=function(){var a=this;return Di(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){Ti(this);var b=0,c=this.Wa,d=this,e=new Li;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Mi;var f=d.h[b++];return Ni(a?f:d.i[f])};
return e};
function Ui(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function N(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
Ya(N,G);m=N.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ab(a)}return!1};
m.Ab=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&jb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Wi(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ab(c)}}return 0!=e}return!1};
function Wi(a,b,c){Ld(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ab,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){N.Aa.S.call(this);this.clear();this.j.length=0};function Xi(a){this.h=a}
Xi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new nh).serialize(b))};
Xi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Xi.prototype.remove=function(a){this.h.remove(a)};function Yi(a){this.h=a}
Ya(Yi,Xi);function Zi(a){this.data=a}
function $i(a){return void 0===a||a instanceof Zi?a:new Zi(a)}
Yi.prototype.set=function(a,b){Yi.Aa.set.call(this,a,$i(b))};
Yi.prototype.i=function(a){a=Yi.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Yi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function aj(a){this.h=a}
Ya(aj,Yi);aj.prototype.set=function(a,b,c){if(b=$i(b)){if(c){if(c<Xa()){aj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}aj.Aa.set.call(this,a,b)};
aj.prototype.i=function(a){var b=aj.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())aj.prototype.remove.call(this,a);else return b}};function bj(){}
;function cj(){}
Ya(cj,bj);cj.prototype[Symbol.iterator]=function(){return Oi(this.Ga(!0)).h()};
cj.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function dj(a){this.h=a;this.i=null}
Ya(dj,cj);m=dj.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){ej(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){ej(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){ej(this);this.h.removeItem(a)};
m.Ga=function(a){ej(this);var b=0,c=this.h,d=new Li;d.next=function(){if(b>=c.length)return Mi;var e=c.key(b++);if(a)return Ni(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ni(e)};
return d};
m.clear=function(){ej(this);this.h.clear()};
m.key=function(a){ej(this);return this.h.key(a)};
function ej(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Ed(Error("Storage mechanism: Storage unavailable"))}
;function fj(){var a=null;try{a=C.localStorage||null}catch(b){}dj.call(this,a)}
Ya(fj,dj);function gj(a,b){this.i=a;this.h=null;var c;if(c=Fc)c=!(9<=Number(Uc));if(c){hj||(hj=new Si);this.h=hj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),hj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(gj,cj);var ij={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},hj=null;function jj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ij[b]})}
m=gj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(jj(a),b);kj(this)};
m.get=function(a){a=this.h.getAttribute(jj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(jj(a));kj(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Li;d.next=function(){if(b>=c.length)return Mi;var e=c[b++];if(a)return Ni(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ni(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);kj(this)};
function kj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function lj(a,b){this.i=a;this.h=b+"::"}
Ya(lj,cj);lj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
lj.prototype.get=function(a){return this.i.get(this.h+a)};
lj.prototype.remove=function(a){this.i.remove(this.h+a)};
lj.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Li;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ni(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},mj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var nj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},oj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
O.Ue=function(){mj?(O.kb=Uint8Array,O.Ia=Uint16Array,O.Kd=Int32Array,O.assign(O,nj)):(O.kb=Array,O.Ia=Array,O.Kd=Array,O.assign(O,oj))};
O.Ue();var pj=!0;try{new Uint8Array(1)}catch(a){pj=!1}
function qj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.kb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var rj={};rj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var sj={},tj,uj=[],vj=0;256>vj;vj++){tj=vj;for(var wj=0;8>wj;wj++)tj=tj&1?3988292384^tj>>>1:tj>>>1;uj[vj]=tj}sj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^uj[(a^b[d])&255];return a^-1};var xj={};xj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function yj(a){for(var b=a.length;0<=--b;)a[b]=0}
var zj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Aj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Bj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Cj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Dj=Array(576);yj(Dj);var Ej=Array(60);yj(Ej);var Fj=Array(512);yj(Fj);var Gj=Array(256);yj(Gj);var Hj=Array(29);yj(Hj);var Ij=Array(30);yj(Ij);function Jj(a,b,c,d,e){this.Cd=a;this.ae=b;this.Zd=c;this.Vd=d;this.we=e;this.ld=a&&a.length}
var Kj,Lj,Mj;function Nj(a,b){this.gd=a;this.wb=0;this.Va=b}
function Oj(a,b){a.W[a.pending++]=b&255;a.W[a.pending++]=b>>>8&255}
function Pj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Oj(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function Qj(a,b,c){Pj(a,c[2*b],c[2*b+1])}
function Rj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Sj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Rj(d[e]++,e))}
function Tj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ha[2*b]=0;a.ra[512]=1;a.Oa=a.zb=0;a.ya=a.matches=0}
function Uj(a){8<a.ga?Oj(a,a.ma):0<a.ga&&(a.W[a.pending++]=a.ma);a.ma=0;a.ga=0}
function Vj(a,b,c){Uj(a);Oj(a,c);Oj(a,~c);O.mb(a.W,a.window,b,c,a.pending);a.pending+=c}
function Wj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Xj(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Wj(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(Wj(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function Yj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.W[a.Db+2*d]<<8|a.W[a.Db+2*d+1];var f=a.W[a.Fc+d];d++;if(0===e)Qj(a,f,b);else{var g=Gj[f];Qj(a,g+256+1,b);var h=zj[g];0!==h&&(f-=Hj[g],Pj(a,f,h));e--;g=256>e?Fj[e]:Fj[256+(e>>>7)];Qj(a,g,c);h=Aj[g];0!==h&&(e-=Ij[g],Pj(a,e,h))}}while(d<a.ya)}Qj(a,256,b)}
function Zj(a,b){var c=b.gd,d=b.Va.Cd,e=b.Va.ld,f=b.Va.Vd,g,h=-1;a.Ma=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.Y[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.zb-=d[2*k+1])}b.wb=h;for(g=a.Ma>>1;1<=g;g--)Xj(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.Ma--],Xj(a,c,1),d=a.Y[1],a.Y[--a.qb]=g,a.Y[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,Xj(a,c,1);while(2<=a.Ma);a.Y[--a.qb]=
a.Y[1];g=b.gd;k=b.wb;d=b.Va.Cd;e=b.Va.ld;f=b.Va.ae;var l=b.Va.Zd,n=b.Va.we,p,t=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.Y[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var r=a.Y[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ja[p]++;var v=0;r>=l&&(v=f[r-l]);var y=g[2*r];a.Oa+=y*(p+v);e&&(a.zb+=y*(d[2*r+1]+v))}}if(0!==t){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ja[p];0!==r;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Sj(c,h,a.Ja)}
function ak(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ha[2*l]+=g:0!==l?(l!==e&&a.ha[2*l]++,a.ha[32]++):10>=g?a.ha[34]++:a.ha[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function bk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Qj(a,l,a.ha);while(0!==--g)}else 0!==l?(l!==e&&(Qj(a,l,a.ha),g--),Qj(a,16,a.ha),Pj(a,g-3,2)):10>=g?(Qj(a,17,a.ha),Pj(a,g-3,3)):(Qj(a,18,a.ha),Pj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function ck(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var dk=!1;function ek(a,b,c){a.W[a.Db+2*a.ya]=b>>>8&255;a.W[a.Db+2*a.ya+1]=b&255;a.W[a.Fc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(Gj[c]+256+1)]++,a.bb[2*(256>b?Fj[b]:Fj[256+(b>>>7)])]++);return a.ya===a.Jb-1}
;function fk(a,b){a.msg=xj[b];return b}
function gk(a){for(var b=a.length;0<=--b;)a[b]=0}
function hk(a){var b=a.state,c=b.pending;c>a.P&&(c=a.P);0!==c&&(O.mb(a.output,b.W,b.Lb,c,a.xb),a.xb+=c,b.Lb+=c,a.Sc+=c,a.P-=c,b.pending-=c,0===b.pending&&(b.Lb=0))}
function ik(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.I.uc&&(a.I.uc=ck(a));Zj(a,a.ec);Zj(a,a.Zb);ak(a,a.ra,a.ec.wb);ak(a,a.bb,a.Zb.wb);Zj(a,a.Yc);for(e=18;3<=e&&0===a.ha[2*Cj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Pj(a,b?1:0,3),Vj(a,c,d);else if(4===a.strategy||g===f)Pj(a,2+(b?1:0),3),Yj(a,Dj,Ej);else{Pj(a,4+(b?1:0),3);c=a.ec.wb+1;d=a.Zb.wb+1;e+=1;Pj(a,c-257,5);Pj(a,d-1,5);Pj(a,e-4,4);for(f=0;f<e;f++)Pj(a,a.ha[2*
Cj[f]+1],3);bk(a,a.ra,c-1);bk(a,a.bb,d-1);Yj(a,a.ra,a.bb)}Tj(a);b&&Uj(a);a.va=a.o;hk(a.I)}
function P(a,b){a.W[a.pending++]=b}
function jk(a,b){a.W[a.pending++]=b>>>8&255;a.W[a.pending++]=b&255}
function kk(a,b){var c=a.od,d=a.o,e=a.xa,f=a.pd,g=a.o>a.ja-262?a.o-(a.ja-262):0,h=a.window,k=a.Xa,l=a.Ha,n=a.o+258,p=h[d+e-1],t=h[d+e];a.xa>=a.kd&&(c>>=2);f>a.v&&(f=a.v);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.vb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.v?e:a.v}
function lk(a){var b=a.ja,c;do{var d=a.Id-a.v-a.o;if(a.o>=b+(b-262)){O.mb(a.window,a.window,b,b,0);a.vb-=b;a.o-=b;a.va-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.v;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,O.mb(c,e.input,e.gb,g,f),1===e.state.wrap?e.H=rj(e.H,c,g,f):2===e.state.wrap&&(e.H=sj(e.H,c,g,f)),e.gb+=g,e.jb+=g,c=g);a.v+=c;if(3<=a.v+a.sa)for(d=a.o-a.sa,a.M=a.window[d],
a.M=(a.M<<a.La^a.window[d+1])&a.Ka;a.sa&&!(a.M=(a.M<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Xa]=a.head[a.M],a.head[a.M]=d,d++,a.sa--,3>a.v+a.sa););}while(262>a.v&&0!==a.I.la)}
function mk(a,b){for(var c;;){if(262>a.v){lk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);0!==c&&a.o-c<=a.ja-262&&(a.R=kk(a,c));if(3<=a.R)if(c=ek(a,a.o-a.vb,a.R-3),a.v-=a.R,a.R<=a.Gc&&3<=a.v){a.R--;do a.o++,a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.M=a.window[a.o],a.M=(a.M<<a.La^a.window[a.o+1])&a.Ka;else c=ek(a,0,
a.window[a.o]),a.v--,a.o++;if(c&&(ik(a,!1),0===a.I.P))return 1}a.sa=2>a.o?a.o:2;return 4===b?(ik(a,!0),0===a.I.P?3:4):a.ya&&(ik(a,!1),0===a.I.P)?1:2}
function nk(a,b){for(var c,d;;){if(262>a.v){lk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);a.xa=a.R;a.sd=a.vb;a.R=2;0!==c&&a.xa<a.Gc&&a.o-c<=a.ja-262&&(a.R=kk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.vb)&&(a.R=2));if(3<=a.xa&&a.R<=a.xa){d=a.o+a.v-3;c=ek(a,a.o-1-a.sd,a.xa-3);a.v-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.M=(a.M<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.M],a.head[a.M]=a.o);
while(0!==--a.xa);a.eb=0;a.R=2;a.o++;if(c&&(ik(a,!1),0===a.I.P))return 1}else if(a.eb){if((c=ek(a,0,a.window[a.o-1]))&&ik(a,!1),a.o++,a.v--,0===a.I.P)return 1}else a.eb=1,a.o++,a.v--}a.eb&&(ek(a,0,a.window[a.o-1]),a.eb=0);a.sa=2>a.o?a.o:2;return 4===b?(ik(a,!0),0===a.I.P?3:4):a.ya&&(ik(a,!1),0===a.I.P)?1:2}
function ok(a,b){for(var c,d,e,f=a.window;;){if(258>=a.v){lk(a);if(258>=a.v&&0===b)return 1;if(0===a.v)break}a.R=0;if(3<=a.v&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.v&&(a.R=a.v)}3<=a.R?(c=ek(a,1,a.R-3),a.v-=a.R,a.o+=a.R,a.R=0):(c=ek(a,0,a.window[a.o]),a.v--,a.o++);if(c&&(ik(a,!1),0===a.I.P))return 1}a.sa=0;return 4===b?(ik(a,!0),0===a.I.P?3:4):
a.ya&&(ik(a,!1),0===a.I.P)?1:2}
function pk(a,b){for(var c;;){if(0===a.v&&(lk(a),0===a.v)){if(0===b)return 1;break}a.R=0;c=ek(a,0,a.window[a.o]);a.v--;a.o++;if(c&&(ik(a,!1),0===a.I.P))return 1}a.sa=0;return 4===b?(ik(a,!0),0===a.I.P?3:4):a.ya&&(ik(a,!1),0===a.I.P)?1:2}
function qk(a,b,c,d,e){this.he=a;this.ue=b;this.ye=c;this.te=d;this.ce=e}
var rk;rk=[new qk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.v){lk(a);if(0===a.v&&0===b)return 1;if(0===a.v)break}a.o+=a.v;a.v=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.v=a.o-d,a.o=d,ik(a,!1),0===a.I.P)return 1;if(a.o-a.va>=a.ja-262&&(ik(a,!1),0===a.I.P))return 1}a.sa=0;if(4===b)return ik(a,!0),0===a.I.P?3:4;a.o>a.va&&ik(a,!1);return 1}),
new qk(4,4,8,4,mk),new qk(4,5,16,8,mk),new qk(4,6,32,32,mk),new qk(4,4,16,16,nk),new qk(8,16,32,32,nk),new qk(8,16,128,128,nk),new qk(8,32,128,256,nk),new qk(32,128,258,1024,nk),new qk(32,258,258,4096,nk)];
function sk(){this.I=null;this.status=0;this.W=null;this.wrap=this.pending=this.Lb=this.za=0;this.G=null;this.Da=0;this.method=8;this.tb=-1;this.Xa=this.Uc=this.ja=0;this.window=null;this.Id=0;this.head=this.Ha=null;this.pd=this.kd=this.strategy=this.level=this.Gc=this.od=this.xa=this.v=this.vb=this.o=this.eb=this.sd=this.R=this.va=this.La=this.Ka=this.Cc=this.dc=this.M=0;this.ra=new O.Ia(1146);this.bb=new O.Ia(122);this.ha=new O.Ia(78);gk(this.ra);gk(this.bb);gk(this.ha);this.Yc=this.Zb=this.ec=
null;this.Ja=new O.Ia(16);this.Y=new O.Ia(573);gk(this.Y);this.qb=this.Ma=0;this.depth=new O.Ia(573);gk(this.depth);this.ga=this.ma=this.sa=this.matches=this.zb=this.Oa=this.Db=this.ya=this.Jb=this.Fc=0}
function tk(a,b){if(!a||!a.state||5<b||0>b)return a?fk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return fk(a,0===a.P?-5:-2);c.I=a;var d=c.tb;c.tb=b;if(42===c.status)if(2===c.wrap)a.H=0,P(c,31),P(c,139),P(c,8),c.G?(P(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),P(c,c.G.time&255),P(c,c.G.time>>8&255),P(c,c.G.time>>16&255),P(c,c.G.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(P(c,c.G.extra.length&255),P(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=sj(a.H,c.W,c.pending,0)),c.Da=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;jk(c,e+(31-e%31));0!==c.o&&(jk(c,a.H>>>16),jk(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Da<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.W,c.pending-e,e)),hk(a),e=c.pending,c.pending!==c.za));)P(c,c.G.extra[c.Da]&255),c.Da++;c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.W,c.pending-e,e));c.Da===c.G.extra.length&&(c.Da=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.W,c.pending-e,e)),hk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Da<c.G.name.length?c.G.name.charCodeAt(c.Da++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=sj(a.H,c.W,c.pending-e,e));0===f&&(c.Da=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.W,c.pending-e,e)),hk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Da<c.G.comment.length?c.G.comment.charCodeAt(c.Da++)&255:0;P(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=sj(a.H,c.W,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.za&&hk(a),c.pending+2<=c.za&&(P(c,a.H&
255),P(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(hk(a),0===a.P)return c.tb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return fk(a,-5);if(666===c.status&&0!==a.la)return fk(a,-5);if(0!==a.la||0!==c.v||0!==b&&666!==c.status){d=2===c.strategy?pk(c,b):3===c.strategy?ok(c,b):rk[c.level].ce(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.P&&(c.tb=-1),0;if(2===d&&(1===b?(Pj(c,2,3),Qj(c,256,Dj),16===c.ga?(Oj(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.W[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Pj(c,0,3),Vj(c,0,0),3===b&&(gk(c.head),0===c.v&&(c.o=0,c.va=0,c.sa=0))),hk(a),0===a.P))return c.tb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.H&255),P(c,a.H>>8&255),P(c,a.H>>16&255),P(c,a.H>>24&255),P(c,a.jb&255),P(c,a.jb>>8&255),P(c,a.jb>>16&255),P(c,a.jb>>24&255)):(jk(c,a.H>>>16),jk(c,a.H&65535));hk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var uk={};uk=function(){this.input=null;this.jb=this.la=this.gb=0;this.output=null;this.Sc=this.P=this.xb=0;this.msg="";this.state=null;this.uc=2;this.H=0};var vk=Object.prototype.toString;
function wk(a){if(!(this instanceof wk))return new wk(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new uk;this.I.P=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=fk(b,-2);else{8===e&&(e=9);var k=new sk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ja=1<<k.Uc;k.Xa=k.ja-1;k.Cc=f+7;k.dc=1<<k.Cc;k.Ka=k.dc-1;k.La=~~((k.Cc+3-1)/3);k.window=new O.kb(2*k.ja);k.head=new O.Ia(k.dc);k.Ha=new O.Ia(k.ja);k.Jb=1<<f+6;k.za=4*k.Jb;k.W=new O.kb(k.za);k.Db=1*k.Jb;k.Fc=3*k.Jb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.jb=b.Sc=0;b.uc=2;c=b.state;c.pending=0;c.Lb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.tb=0;if(!dk){d=Array(16);for(f=g=0;28>f;f++)for(Hj[f]=g,e=0;e<1<<zj[f];e++)Gj[g++]=f;Gj[g-1]=f;for(f=g=0;16>f;f++)for(Ij[f]=g,e=0;e<1<<Aj[f];e++)Fj[g++]=f;for(g>>=7;30>f;f++)for(Ij[f]=g<<7,e=0;e<1<<Aj[f]-7;e++)Fj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Dj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Dj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Dj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Dj[2*e+1]=8,e++,d[8]++;Sj(Dj,287,d);for(e=0;30>e;e++)Ej[2*e+1]=5,Ej[2*e]=Rj(e,5);Kj=new Jj(Dj,zj,257,286,15);Lj=new Jj(Ej,
Aj,0,30,15);Mj=new Jj([],Bj,0,19,7);dk=!0}c.ec=new Nj(c.ra,Kj);c.Zb=new Nj(c.bb,Lj);c.Yc=new Nj(c.ha,Mj);c.ma=0;c.ga=0;Tj(c);c=0}else c=fk(b,-2);0===c&&(b=b.state,b.Id=2*b.ja,gk(b.head),b.Gc=rk[b.level].ue,b.kd=rk[b.level].he,b.pd=rk[b.level].ye,b.od=rk[b.level].te,b.o=0,b.va=0,b.v=0,b.sa=0,b.R=b.xa=2,b.eb=0,b.M=0);b=c}}else b=-2;if(0!==b)throw Error(xj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=qj(a.dictionary):
"[object ArrayBuffer]"===vk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.v)b=-2;else{1===b&&(a.H=rj(a.H,f,g,0));l.wrap=0;g>=l.ja&&(0===b&&(gk(l.head),l.o=0,l.va=0,l.sa=0),c=new O.kb(l.ja),O.mb(c,f,g-l.ja,l.ja,0),f=c,g=l.ja);c=a.la;d=a.gb;e=a.input;a.la=g;a.gb=0;a.input=f;for(lk(l);3<=l.v;){f=l.o;g=l.v-2;do l.M=(l.M<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Xa]=l.head[l.M],l.head[l.M]=f,f++;while(--g);
l.o=f;l.v=2;lk(l)}l.o+=l.v;l.va=l.o;l.sa=l.v;l.v=0;l.R=l.xa=2;l.eb=0;a.gb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(xj[b]);this.Mf=!0}}
wk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=qj(a):"[object ArrayBuffer]"===vk.call(a)?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.la=c.input.length;do{0===c.P&&(c.output=new O.kb(d),c.xb=0,c.P=d);a=tk(c,e);if(1!==a&&0!==a)return xk(this,a),this.ended=!0,!1;if(0===c.P||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=O.Rc(c.output,c.xb);b=f;f=f.length;if(65537>f&&(b.subarray&&pj||!b.subarray))b=
String.fromCharCode.apply(null,O.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Rc(c.output,c.xb),this.chunks.push(b)}while((0<c.la||0===c.P)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=fk(c,-2):(c.state=null,a=113===d?fk(c,-3):0)):a=-2,xk(this,a),this.ended=!0,0===a;2===e&&(xk(this,0),c.P=0);return!0};
function xk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):O.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function yk(a,b){b=b||{};b.gzip=!0;b=new wk(b);b.push(a,!0);if(b.err)throw b.msg||xj[b.err];return b.result}
;function zk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Hb(a):b=null;return b}
;function Ak(a){return Hb(null===a?"null":void 0===a?"undefined":a)}
;function Bk(a){this.name=a}
;var Ck=new Bk("rawColdConfigGroup");var Dk=new Bk("rawHotConfigGroup");function Ek(a){this.F=Of(a)}
x(Ek,pg);var Fk=new Bk("continuationCommand");var Gk=new Bk("webCommandMetadata");var Hk=new Bk("signalServiceEndpoint");var Ik={yf:"EMBEDDED_PLAYER_MODE_UNKNOWN",vf:"EMBEDDED_PLAYER_MODE_DEFAULT",xf:"EMBEDDED_PLAYER_MODE_PFP",wf:"EMBEDDED_PLAYER_MODE_PFL"};var Jk=new Bk("feedbackEndpoint");function Kk(a){this.F=Of(a)}
x(Kk,pg);Kk.prototype.setTrackingParams=function(a){return K(this,1,kf(a,!0))};var Lk=new Bk("webPlayerShareEntityServiceEndpoint");var Mk=new Bk("playlistEditEndpoint");var Nk=new Bk("modifyChannelNotificationPreferenceEndpoint");var Ok=new Bk("unsubscribeEndpoint");var Pk=new Bk("subscribeEndpoint");function Qk(){var a=Rk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Sk(a){D("yt.ads.biscotti.lastId_",a)}
;function Tk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Uk=C.window,Vk,Wk,Xk=(null==Uk?void 0:null==(Vk=Uk.yt)?void 0:Vk.config_)||(null==Uk?void 0:null==(Wk=Uk.ytcfg)?void 0:Wk.data_)||{};D("yt.config_",Xk);function Yk(){Tk(Xk,arguments)}
function R(a,b){return a in Xk?Xk[a]:b}
function Zk(a){var b=Xk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var $k=[];function al(a){$k.forEach(function(b){return b(a)})}
function bl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){cl(b)}}:a}
function cl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Yk("ERRORS",b));al(a)}
function dl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Yk("ERRORS",f))}
;var el=/^[\w.]*$/,fl={q:!0,search_query:!0};function gl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=hl(f[0]||""),h=hl(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(gl);k.args=[{key:l,value:f[1],query:a,method:il==n?"unchanged":n}];fl.hasOwnProperty(l)||dl(k)}}return c}
var il=String(gl);function jl(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function kl(a){"?"==a.charAt(0)&&(a=a.substr(1));return gl(a,"&")}
function ll(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),kl(1<a.length?a[1]:a[0])):{}}
function ml(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=kl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ic(a,e)+d}
function nl(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)==d&&(Number(ac(4,b))||null)==(Number(ac(4,a))||null):!0;return a}
function hl(a){return a&&a.match(el)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ol(a){var b=pl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ui;e.flash="0";a:{try{var f=b.h.top.location.href}catch(oa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Rh:g;try{var h=g.history.length}catch(oa){h=0}e.u_his=h;var k;e.u_h=null==(k=Rh.screen)?void 0:k.height;var l;e.u_w=null==(l=Rh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Rh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Rh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Rh.screen)?void 0:t.colorDepth}catch(oa){}h=b.h;try{var r=h.screenX;var v=h.screenY}catch(oa){}try{var y=h.outerWidth;var z=h.outerHeight}catch(oa){}try{var H=h.innerWidth;var L=h.innerHeight}catch(oa){}try{var I=h.screenLeft;var T=h.screenTop}catch(oa){}try{H=h.innerWidth,L=h.innerHeight}catch(oa){}try{var J=h.screen.availWidth;var ha=h.screen.availTop}catch(oa){}r=[I,T,r,v,J,ha,y,z,H,L];try{var M=(b.h.top||window).document,Z="CSS1Compat"==
M.compatMode?M.documentElement:M.body;var ca=(new yd(Z.clientWidth,Z.clientHeight)).round()}catch(oa){ca=new yd(-12245933,-12245933)}M=ca;ca={};var na=void 0===na?C:na;Z=new Ai;"SVGElement"in na&&"createElementNS"in na.document&&Z.set(0);v=ri();v["allow-top-navigation-by-user-activation"]&&Z.set(1);v["allow-popups-to-escape-sandbox"]&&Z.set(2);na.crypto&&na.crypto.subtle&&Z.set(3);"TextDecoder"in na&&"TextEncoder"in na&&Z.set(4);na=Bi(Z);ca.bc=na;ca.bih=M.height;ca.biw=M.width;ca.brdim=r.join();b=
b.i;b=(ca.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ca.wgl=!!Rh.WebGLRenderingContext,ca);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return jl(ol(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");function S(a){a=ql(a);return"string"===typeof a&&"false"===a?!1:!!a}
function rl(a,b){a=ql(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ql(a){return R("EXPERIMENT_FLAGS",{})[a]}
function sl(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var tl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function ul(){if(!tl)return null;var a=tl();return"open"in a?a:null}
function vl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function wl(a,b){"function"===typeof a&&(a=bl(a));return window.setTimeout(a,b)}
;var xl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(la(xl),["client_dev_set_cookie"]);var yl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},zl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(la(xl)),Al=!1;
function Bl(a,b){b=void 0===b?{}:b;var c=nl(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in yl){var f=R(yl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&bc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&R("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());
if(c||!bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=jl(ol()));return b}
function Cl(a){var b=window.location.search,c=bc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&nl(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=kl(b),f={};eb(zl,function(g){e[g]&&(f[g]=e[g])});
return ml(a,f||{},!1)}
function Dl(a,b){var c=b.format||"JSON";a=El(a,b);var d=Fl(a,b),e=!1,f=Gl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=vl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Hl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=wl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function El(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ml(a,b||{},!0);return a}
function Fl(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=kl(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):hc(e));f=e||f&&!ob(f);!Al&&f&&"POST"!=b.method&&(Al=!0,cl(Error("AJAX request with postData should use POST")));return e}
function Hl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,dl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Il(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Jl(g)})}d&&Kl(e);
return e}
function Kl(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else Kl(a[b])}}
function Il(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Jl(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ll(a,b){b.method="POST";b.postParams||(b.postParams={});return Dl(a,b)}
function Gl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&bl(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=ul();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=Cl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Bl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Ml=[{Hc:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Hc:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Hc:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ol={Ta:[],Qa:[{callback:Nl,weight:500}]};function Nl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Pl(){this.Qa=[];this.Ta=[]}
var Ql;function Rl(){if(!Ql){var a=Ql=new Pl;a.Ta.length=0;a.Qa.length=0;Ol.Ta&&a.Ta.push.apply(a.Ta,Ol.Ta);Ol.Qa&&a.Qa.push.apply(a.Qa,Ol.Qa)}return Ql}
;var Sl=new N;function Tl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ul(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ul(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ul(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ul(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Vl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Wl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Tl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Wl(f+".ve",g,h,k):0;d+=f;d+=Wl(e,a[e],b,c);if(500<d)break}}else c[b]=Xl(a),d+=c[b].length;else c[b]=Xl(a),d+=c[b].length;return d}
function Wl(a,b,c,d){c+="."+a;a=Xl(b);d[c]=a;return c.length+a.length}
function Xl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Yl(){this.Ye=!0}
function Zl(){Yl.h||(Yl.h=new Yl);return Yl.h}
function $l(a,b){a={};var c=Lg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Xk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Xk&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var am={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function bm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function cm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function dm(a,b,c,d,e){Hg.set(""+a,b,{fc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function em(a){return Hg.get(""+a,void 0)}
function fm(a,b,c){Hg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function gm(){if(!Hg.isEnabled())return!1;if(!Hg.Hb())return!0;Hg.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==Hg.get("TESTCOOKIESENABLED"))return!1;Hg.remove("TESTCOOKIESENABLED");return!0}
;var hm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",hm);function im(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=em(this.h);a&&this.parse(a)}
var jm;function km(){jm||(jm=new im);return jm}
m=im.prototype;m.get=function(a,b){lm(a);mm(a);a=void 0!==hm[a]?hm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){lm(a);mm(a);if(null==b)throw Error("ExpectedNotNull");hm[a]=b.toString()};
function nm(a){return!!((om("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){lm(a);mm(a);delete hm[a]};
m.clear=function(){for(var a in hm)delete hm[a]};
function mm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function lm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function om(a){a=void 0!==hm[a]?hm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(hm[d]=c.toString())}};var pm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},qm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function rm(){var a=C.navigator;return a?a.connection:void 0}
function sm(){var a=rm();if(a){var b=pm[a.type||"unknown"]||"CONN_UNKNOWN";a=pm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function tm(){var a=rm();if(null!=a&&a.effectiveType)return qm.hasOwnProperty(a.effectiveType)?qm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(la(b))}
x(U,Error);function um(){try{return wm(),!0}catch(a){return!1}}
function wm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new U("Datasync ID not set",void 0===a?"unknown":a);}
;function xm(){}
function ym(a,b){return zi.ab(a,0,b)}
xm.prototype.na=function(a,b){return this.ab(a,1,b)};
xm.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var zm=rl("web_emulated_idle_callback_delay",300),Am=1E3/60-3,Bm=[8,5,4,3,2,1,0];
function Cm(a){a=void 0===a?{}:a;G.call(this);this.i=[];this.j={};this.ba=this.h=0;this.X=this.m=!1;this.K=[];this.T=this.ea=!1;for(var b=w(Bm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.qc=a.timeout||1;this.D=Am;this.A=0;this.ka=this.Ae.bind(this);this.pc=this.bf.bind(this);this.Pa=this.Nd.bind(this);this.Za=this.je.bind(this);this.Sb=this.De.bind(this);this.ta=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.fa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ka)}
x(Cm,G);m=Cm.prototype;m.Bb=function(a){var b=Xa();Dm(this,a);a=Xa()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.ba;if(10===b)return this.Bb(a),this.ba;var d=this.ba;this.j[d]=a;this.m&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.m||(0!==this.h&&Em(this)!==this.A&&this.stop(),this.start()));return d};
m.oa=function(a){delete this.j[a]};
function Fm(a){a.K.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Gm(a){return!a.isHidden()&&a.fa}
function Em(a){if(a.i[8].length){if(a.T)return 4;if(Gm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Gm(a)?3:2:1;return 0}
m.Kb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Dm(a,b){try{b()}catch(c){a.Kb(c)}}
function Hm(a){for(var b=w(Bm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.je=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Im(this,b);this.ea=!1};
m.bf=function(){Im(this)};
m.Nd=function(){Jm(this)};
m.De=function(a){this.T=!0;var b=Em(this);4===b&&b!==this.A&&(this.stop(),this.start());Im(this,void 0,a);this.T=!1};
m.Ae=function(){this.isHidden()||Jm(this);this.h&&(this.stop(),this.start())};
function Jm(a){a.stop();a.m=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Dm(a,e)}Km(a);a.m=!1;Hm(a)&&a.start();b=Xa()-b;a.D-=b}
function Km(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function Im(a,b,c){a.T&&4===a.A&&a.h||a.stop();a.m=!0;b=Xa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Kb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Dm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Dm(a,c)}while(c&&Xa()<b)}a.m=!1;Km(a);a.D=Am;Hm(a)&&a.start()}
m.start=function(){this.X=!1;if(0===this.h)switch(this.A=Em(this),this.A){case 1:var a=this.Za;this.h=this.ta?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,zm);break;case 2:this.h=window.setTimeout(this.pc,this.qc);break;case 3:this.h=window.requestAnimationFrame(this.Sb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
m.pause=function(){this.stop();this.X=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.ta?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Fm(this);this.stop();this.fa&&document.removeEventListener("visibilitychange",this.ka);G.prototype.S.call(this)};var Lm=E("yt.scheduler.instance.timerIdMap_")||{},Mm=rl("kevlar_tuner_scheduler_soft_state_timer_ms",800),Nm=0,Om=0;function Pm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Cm(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Qm(){Rm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(sc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Rm(){Fm(Pm());for(var a in Lm)Lm.hasOwnProperty(a)&&delete Lm[Number(a)]}
function Sm(a,b,c){if(!c)return c=void 0===c,-Pm().ab(a,b,c);var d=window.setTimeout(function(){var e=Pm().ab(a,b);Lm[d]=e},c);
return d}
function Tm(a){Pm().Bb(a)}
function Um(a){var b=Pm();if(0>a)b.oa(-a);else{var c=Lm[a];c?(b.oa(c),delete Lm[a]):window.clearTimeout(a)}}
function Vm(){Wm()}
function Wm(){window.clearTimeout(Nm);Pm().start()}
function Xm(){Pm().pause();window.clearTimeout(Nm);Nm=window.setTimeout(Vm,Mm)}
function Ym(){window.clearTimeout(Om);Om=window.setTimeout(function(){Zm(0)},Mm)}
function Zm(a){Ym();var b=Pm();b.l=a;b.start()}
function $m(a){Ym();var b=Pm();b.l>a&&(b.l=a,b.start())}
function an(){window.clearTimeout(Om);var a=Pm();a.l=0;a.start()}
function bn(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Qm),D("yt.scheduler.instance.addJob",Sm),D("yt.scheduler.instance.addImmediateJob",Tm),D("yt.scheduler.instance.cancelJob",Um),D("yt.scheduler.instance.cancelAllJobs",Rm),D("yt.scheduler.instance.start",Wm),D("yt.scheduler.instance.pause",Xm),D("yt.scheduler.instance.setPriorityThreshold",Zm),D("yt.scheduler.instance.enablePriorityThreshold",$m),D("yt.scheduler.instance.clearPriorityThreshold",an),D("yt.scheduler.initialized",
!0))}
;function cn(){xm.apply(this,arguments)}
x(cn,xm);function dn(){cn.h||(cn.h=new cn);return cn.h}
cn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):wl(a,c||0)};
cn.prototype.oa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
cn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
cn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var zi=dn();S("web_scheduler_auto_init")&&bn();function en(a){var b=new fj;(b=b.isAvailable()?a?new lj(b,a):b:null)||(a=new gj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new aj(a):null;this.i=document.domain||window.location.hostname}
en.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new nh).serialize(b))}catch(f){return}else e=escape(b);dm(a,e,c,this.i)};
en.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=em(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
en.prototype.remove=function(a){this.h&&this.h.remove(a);fm(a,"/",this.i)};var fn=function(){var a;return function(){a||(a=new en("ytidb"));return a}}();
function gn(){var a;return null==(a=fn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var hn=[],jn,kn=!1;function ln(){var a={};for(jn=new mn(void 0===a.handleError?nn:a.handleError,void 0===a.logEvent?on:a.logEvent);0<hn.length;)switch(a=hn.shift(),a.type){case "ERROR":jn.Kb(a.payload);break;case "EVENT":jn.logEvent(a.eventType,a.payload)}}
function pn(a){kn||(jn?jn.Kb(a):(hn.push({type:"ERROR",payload:a}),10<hn.length&&hn.shift()))}
function qn(a,b){kn||(jn?jn.logEvent(a,b):(hn.push({type:"EVENT",eventType:a,payload:b}),10<hn.length&&hn.shift()))}
;function rn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function sn(a){return a.substr(0,a.indexOf(":"))||a}
;var tn=ve||we;function un(a){var b=Ob();return b?0<=b.toLowerCase().indexOf(a):!1}
;var vn={},wn=(vn.AUTH_INVALID="No user identifier specified.",vn.EXPLICIT_ABORT="Transaction was explicitly aborted.",vn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",vn.MISSING_INDEX="Index not created.",vn.MISSING_OBJECT_STORES="Object stores not created.",vn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",vn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",vn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
vn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",vn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",vn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",vn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",vn),xn={},yn=(xn.AUTH_INVALID="ERROR",xn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",xn.EXPLICIT_ABORT="IGNORED",xn.IDB_NOT_SUPPORTED="ERROR",xn.MISSING_INDEX=
"WARNING",xn.MISSING_OBJECT_STORES="ERROR",xn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",xn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",xn.QUOTA_EXCEEDED="WARNING",xn.QUOTA_MAYBE_EXCEEDED="WARNING",xn.UNKNOWN_ABORT="WARNING",xn.INCOMPATIBLE_DB_VERSION="WARNING",xn),zn={},An=(zn.AUTH_INVALID=!1,zn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,zn.EXPLICIT_ABORT=!1,zn.IDB_NOT_SUPPORTED=!1,zn.MISSING_INDEX=!1,zn.MISSING_OBJECT_STORES=!1,zn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,zn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,zn.QUOTA_EXCEEDED=!1,zn.QUOTA_MAYBE_EXCEEDED=!0,zn.UNKNOWN_ABORT=!0,zn.INCOMPATIBLE_DB_VERSION=!1,zn);function Bn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?wn[a]:c;d=void 0===d?yn[a]:d;e=void 0===e?An[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Bn.prototype)}
x(Bn,U);function Cn(a,b){Bn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},wn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Cn.prototype)}
x(Cn,Bn);function Dn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Dn.prototype)}
x(Dn,Error);var En=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Fn(a,b,c,d){b=sn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Bn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Bn("QUOTA_EXCEEDED",a);if(xe&&"UnknownError"===e.name)return new Bn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Dn)return new Bn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&En.some(function(f){return e.message.includes(f)}))return new Bn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Bn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",rd:e.name})];e.level="WARNING";return e}
function Gn(a,b,c){var d=gn();return new Bn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Hn(a){if(!a)throw Error();throw a;}
function In(a){return a}
function Jn(a){this.h=a}
function Kn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Kn.all=function(a){return new Kn(new Jn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)Kn.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Kn.resolve=function(a){return new Kn(new Jn(function(b,c){a instanceof Kn?a.then(b,c):b(a)}))};
Kn.reject=function(a){return new Kn(new Jn(function(b,c){c(a)}))};
Kn.prototype.then=function(a,b){var c=this,d=null!=a?a:In,e=null!=b?b:Hn;return new Kn(new Jn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ln(c,c,d,f,g)}),c.i.push(function(){Mn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ln(c,c,d,f,g):"REJECTED"===c.state.status&&Mn(c,c,e,f,g)}))};
Kn.prototype.catch=function(a){return this.then(void 0,a)};
function Ln(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Kn?Nn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Mn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Kn?Nn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Nn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Kn?Nn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function On(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Pn(a){return new Promise(function(b,c){On(a,b,c)})}
function Qn(a){return new Kn(new Jn(function(b,c){On(a,b,c)}))}
;function Rn(a,b){return new Kn(new Jn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Sn=window,V=Sn.ytcsi&&Sn.ytcsi.now?Sn.ytcsi.now:Sn.performance&&Sn.performance.timing&&Sn.performance.now&&Sn.performance.timing.navigationStart?function(){return Sn.performance.timing.navigationStart+Sn.performance.now()}:function(){return(new Date).getTime()};function Tn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
m=Tn.prototype;m.add=function(a,b,c){return Un(this,[a],{mode:"readwrite",ia:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Un(this,[a],{mode:"readwrite",ia:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Un(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).count(b)})};
function Vn(a,b,c){a=a.h.createObjectStore(b,c);return new Wn(a)}
m.delete=function(a,b){return Un(this,[a],{mode:"readwrite",ia:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Un(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).get(b)})};
function Xn(a,b,c){return Un(a,[b],{mode:"readwrite",ia:!0},function(d){d=d.objectStore(b);return Qn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Un(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,v,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ia:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ia?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(V());Aa(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var L=new Yn(l);L=Zn(L,d);return H.call(z,L,7);case 7:return n=z.i,p=Math.round(V()),$n(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Ba(z);r=Math.round(V());v=Fn(t,
a.h.name,b.join(),a.h.version);if((y=v instanceof Bn&&!v.h)||g>=f)$n(a,k,r,g,v,b.join(),e),h=v;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function $n(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Bn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&qn("QUOTA_EXCEEDED",{dbName:sn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Bn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),qn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ao(a,!1,d,f,b,g.tag),pn(e)):ao(a,!0,d,f,b,g.tag)}
function ao(a,b,c,d,e,f){qn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Wn(a){this.h=a}
m=Wn.prototype;m.add=function(a,b){return Qn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Qn(this.h.clear()).then(function(){})};
function bo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Qn(this.h.count(a))};
function co(a,b){return eo(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?co(this,a):Qn(this.h.delete(a))};
m.get=function(a){return Qn(this.h.get(a))};
m.index=function(a){try{return new fo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Dn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function eo(a,b,c){a=a.h.openCursor(b.query,b.direction);return go(a).then(function(d){return Rn(d,c)})}
function Yn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Bn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Zn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Yn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Bn("EXPLICIT_ABORT");};
Yn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Wn(a),this.i.set(a,b));return b};
function fo(a){this.h=a}
m=fo.prototype;m.count=function(a){return Qn(this.h.count(a))};
m.delete=function(a){return ho(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Qn(this.h.get(a))};
m.getKey=function(a){return Qn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function ho(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return go(a).then(function(d){return Rn(d,c)})}
function io(a,b){this.request=a;this.cursor=b}
function go(a){return Qn(a).then(function(b){return b?new io(a,b):null})}
m=io.prototype;m.advance=function(a){this.cursor.advance(a);return go(this.request)};
m.continue=function(a){this.cursor.continue(a);return go(this.request)};
m.delete=function(){return Qn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Qn(this.cursor.update(a))};function jo(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Tn(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Pd,k=c.blocking,l=c.Ze,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&qn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:sn(a)});var v=f(),y=new Yn(g.transaction);
n&&n(v,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){qn("IDB_UNEXPECTEDLY_CLOSED",{dbName:sn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ko(a,b,c){c=void 0===c?{}:c;return jo(a,b,c)}
function lo(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Pd)&&c.addEventListener("blocked",function(){e()}),g.yield(Pn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),Fn(f,a,"",-1);})}
;function mo(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.l=0}
mo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return ko(a,b,c)};
mo.prototype.delete=function(a){a=void 0===a?{}:a;return lo(this.name,a)};
function no(a,b){return new Bn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function oo(a,b){if(!b)throw Gn("openWithToken",sn(a.name));return a.open()}
mo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,v;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=y.i,H=c.options,L=[],I=w(Object.keys(H.yb)),T=I.next();!T.done;T=I.next()){T=T.value;var J=H.yb[T],ha=void 0===J.Ge?Number.MAX_VALUE:J.Ge;!(z.h.version>=J.Cb)||z.h.version>=ha||z.h.objectStoreNames.contains(T)||L.push(T)}k=L;if(0===k.length){y.B(5);break}l=Object.keys(c.options.yb);n=h.objectStoreNames();
if(c.u<rl("ytidb_reopen_db_retries",0))return c.u++,h.close(),pn(new Bn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<rl("ytidb_remake_db_retries",1))){y.B(6);break}c.l++;return y.yield(c.delete(),7);case 7:return pn(new Bn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Cn(n,l);case 5:return y.return(h);case 2:p=Ba(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.B(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,no(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Fn(p,c.name,"",null!=(v=c.options.version)?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw no(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ze:b,upgrade:this.options.upgrade};return this.h=d=a()};var po=new mo("YtIdbMeta",{yb:{databases:{Cb:1}},upgrade:function(a,b){b(1)&&Vn(a,"databases",{keyPath:"actualName"})}});
function qo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(oo(po,b),2);c=d.i;return d.return(Un(c,["databases"],{ia:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Qn(f.h.put(a,void 0)).then(function(){})})}))})}
function ro(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(oo(po,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function so(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(oo(po,b),2)):3!=e.h?(d=e.i,e.yield(Un(d,["databases"],{ia:!0,mode:"readonly"},function(f){c.length=0;return eo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function to(a){return so(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function uo(a,b,c){return so(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function vo(a){var b,c;return A(function(d){if(1==d.h)return b=wm("YtIdbMeta hasAnyMeta other"),d.yield(so(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var wo,xo=new function(){}(new function(){});
function yo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=gn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=tn)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||Gc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(qo(d,xo),4);case 4:return e.yield(ro("yt-idb-test-do-not-use",xo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function zo(){if(void 0!==wo)return wo;kn=!0;return wo=yo().then(function(a){kn=!1;var b;if(null!=(b=fn())&&b.h){var c;b={hasSucceededOnce:(null==(c=gn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=fn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Ao(){return E("ytglobal.idbToken_")||void 0}
function Bo(){var a=Ao();return a?Promise.resolve(a):zo().then(function(b){(b=b?xo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Co=0;function Do(a,b){Co||(Co=zi.na(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Bo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(uo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(lo(f.actualName),7);case 7:return h.yield(ro(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),pn(g),d=!1;case 4:zi.oa(Co),Co=0,d&&Do(a,b),h.h=0}})}))}
function Eo(){var a;return A(function(b){return 1==b.h?b.yield(Bo(),2):(a=b.i)?b.return(vo(a)):b.return(!1)})}
new Ph;function Fo(a){if(!um())throw a=new Bn("AUTH_INVALID",{dbName:a}),pn(a),a;var b=wm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Go(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Bo(),2);case 2:g=n.i;if(!g)throw h=Gn("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),pn(h),h;rn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Fo(a);Aa(n,3);return n.yield(qo(k,g),5);case 5:return n.yield(ko(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(ro(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Ho(a,b,c){c=void 0===c?{}:c;return Go(a,b,!1,c)}
function Io(a,b,c){c=void 0===c?{}:c;return Go(a,b,!0,c)}
function Jo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Bo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();rn(a);d=Fo(a);return e.yield(lo(d.actualName,b),3)}return e.yield(ro(d.actualName,c),0)})}
function Ko(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(lo(d.actualName,b),2):e.yield(ro(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Lo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Bo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();rn("LogsDatabaseV2");return d.yield(to(b),3)}c=d.i;return d.yield(Ko(c,a,b),0)})}
function Mo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Bo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();rn(a);return d.yield(lo(a,b),3)}return d.yield(ro(a,c),0)})}
;function No(a,b){mo.call(this,a,b);this.options=b;rn(a)}
x(No,mo);function Oo(a,b){var c;return function(){c||(c=new No(a,b));return c}}
No.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Io:Ho)(a,b,Object.assign({},c))};
No.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Mo:Jo)(this.name,a)};
function Po(a,b){return Oo(a,b)}
;var Qo={},Ro=Po("ytGcfConfig",{yb:(Qo.coldConfigStore={Cb:1},Qo.hotConfigStore={Cb:1},Qo),nc:!1,upgrade:function(a,b){b(1)&&(bo(Vn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),bo(Vn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function So(a){return oo(Ro(),a)}
function To(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(So(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Xn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Uo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(So(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Xn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Vo(a){var b,c;return A(function(d){return 1==d.h?d.yield(So(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Un(b,["coldConfigStore"],{mode:"readwrite",ia:!0},function(e){return ho(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Wo(a){var b,c;return A(function(d){return 1==d.h?d.yield(So(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Un(b,["hotConfigStore"],{mode:"readwrite",ia:!0},function(e){return ho(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Xo(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(la(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(Xo,G);Xo.prototype.S=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;G.prototype.S.call(this)};function Yo(){this.h=0;this.i=new Xo}
function Zo(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:R("RAW_HOT_CONFIG_GROUP")}
function $o(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Ao();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(Wo(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(To(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function ap(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!S("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Ao())?c?h.B(4):h.yield(Vo(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(Uo(c,b,g,d),0)})}
function bp(){if(!Yo.h){var a=new Yo;Yo.h=a}a=Yo.h;var b=V()-a.h;if(!(0!==a.h&&b<rl("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Yo.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function cp(){return"INNERTUBE_API_KEY"in Xk&&"INNERTUBE_API_VERSION"in Xk}
function dp(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),ke:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Tf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),me:R("INNERTUBE_CONTEXT_HL"),le:R("INNERTUBE_CONTEXT_GL"),ne:R("INNERTUBE_HOST_OVERRIDE")||"",pe:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oe:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ep(a){var b={client:{hl:a.me,gl:a.le,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.ke}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=sl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=cm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=sm())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=tm())&&
b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=bp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(kl(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function fp(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Nf:(a=$l(Zl()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var gp="undefined"!==typeof TextEncoder?new TextEncoder:null,hp=gp?function(a){return gp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ip(a,b){this.version=a;this.args=b}
ip.prototype.serialize=function(){return{version:this.version,args:this.args}};function jp(a,b){this.topic=a;this.h=b}
jp.prototype.toString=function(){return this.topic};var kp=E("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Ab;N.prototype.publish=N.prototype.Ya;N.prototype.clear=N.prototype.clear;D("ytPubsub2Pubsub2Instance",kp);var lp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",lp);var mp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",mp);var np=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",np);
D("ytPubsub2Pubsub2SkipSubKey",null);function op(a,b){var c=pp();c&&c.publish.call(c,a.toString(),a,b)}
function qp(a){var b=rp,c=pp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(lp[d])try{if(f&&b instanceof jp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var v=Array(r);for(k=0;k<r;k++)v[k]=t[k];var y=v}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){cl(z)}},np[b.toString()]?E("yt.scheduler.instance")?zi.na(g):wl(g,0):g())});
lp[d]=!0;mp[b.toString()]||(mp[b.toString()]=[]);mp[b.toString()].push(d);return d}
function sp(){var a=tp,b=qp(function(c){a.apply(void 0,arguments);up(b)});
return b}
function up(a){var b=pp();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete lp[c]}))}
function pp(){return E("ytPubsub2Pubsub2Instance")}
;function vp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&op("meta_logging_csi_event",{timerName:a,mg:b})}
;var wp=void 0,xp=void 0;function yp(){xp||(xp=zk(R("WORKER_SERIALIZATION_URL")));return xp||void 0}
function zp(){var a=yp();wp||void 0===a||(wp=new Worker(Fb(a),void 0));return wp}
;var Ap=rl("max_body_size_to_compress",5E5),Bp=rl("min_body_size_to_compress",500),Cp=!0,Dp=0,Ep=0,Fp=rl("compression_performance_threshold_lr",250),Gp=rl("slow_compressions_before_abandon_count",4),Hp=!1,Ip=new Map,Jp=1,Kp=!0;function Lp(){if("function"===typeof Worker&&yp()&&!Hp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Ip.get(c.key);d&&(Mp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Ip.delete(c.key))}},b=zp();
b&&(b.addEventListener("message",a),b.onerror=function(){Ip.clear()},Hp=!0)}}
function Np(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Cp)try{var g=Op(b);if(null!=g&&(g>Ap||g<Bp))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Kp||!S("initial_gzip_use_main_thread"))){Hp||Lp();var h=zp();if(h&&!e){Ip.set(Jp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Jp});Jp++;return}}var k=yk(hp(b));Mp(k,f,a,c,d)}}catch(l){dl(l),d(a,c)}else d(a,c)}
function Mp(a,b,c,d,e){Kp=!1;var f=V();b.ticks.gelc=f;Ep++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Fp&&(Dp++,S("abandon_compression_after_N_slow_zips")?Ep===rl("compression_disable_point")&&Dp>Gp&&(Cp=!1):Cp=!1);Pp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Qp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Cp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Op(g);if(null!=h&&(h>Ap||h<Bp))return a;c=b?{level:1}:void 0;f=yk(hp(g),c);var k=V();e.ticks.gelc=k;if(b){Ep++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Fp)if(Dp++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Dp/Ep;var l=Gp/rl("compression_disable_point");0<Ep&&0===Ep%rl("compression_disable_point")&&b>=l&&(Cp=!1)}else Cp=!1;Pp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return dl(n),a}}else return a}
function Op(a){try{return(new Blob(a.split(""))).size}catch(b){return dl(b),null}}
function Pp(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||vp("gel_compression",a,{sampleRate:.1})}
;function Rp(a){a=Object.assign({},a);delete a.Authorization;var b=Lg();if(b){var c=new Fi;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Ae(c.digest(),3)}return a}
;var Sp;function Tp(){Sp||(Sp=new en("yt.innertube"));return Sp}
function Up(a,b,c,d){if(d)return null;d=Tp().get("nextId",!0)||1;var e=Tp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Rp(c),requestTime:Math.round(V())};Tp().set("nextId",d+1,86400,!0);Tp().set("requests",e,86400,!0);return d}
function Vp(a){var b=Tp().get("requests",!0)||{};delete b[a];Tp().set("requests",b,86400,!0)}
function Wp(a){var b=Tp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=Rp(fp(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Xp(a,d.method,e,{}));delete b[c]}}Tp().set("requests",b,86400,!0)}}
;function Yp(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Fb=!1;var b;this.Dd=null!=(b=a.Dd)?b:100;var c;this.xd=null!=(c=a.xd)?c:1;var d;this.vd=null!=(d=a.vd)?d:2592E6;var e;this.td=null!=(e=a.td)?e:12E4;var f;this.wd=null!=(f=a.wd)?f:5E3;var g;this.U=null!=(g=a.U)?g:void 0;this.ac=!!a.ac;var h;this.Yb=null!=(h=a.Yb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Fb&&(this.Fb=a.Fb);a.Vb&&(this.Vb=a.Vb);this.V=a.V;this.Ea=a.Ea;this.da=a.da;this.aa=a.aa;this.sendFn=a.sendFn;
this.Nc=a.Nc;this.Kc=a.Kc;Zp(this)&&(!this.V||this.V("networkless_logging"))&&$p(this)}
function $p(a){Zp(a)&&!a.Fb&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.da.Rd(a.U),aq(a),a.aa.wa()&&a.Qb(),a.aa.listen(a.Nc,a.Qb.bind(a)),a.aa.listen(a.Kc,a.Zc.bind(a)))}
m=Yp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Zp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.U).then(function(e){d.id=e;c.aa.wa()&&bq(c,d)}).catch(function(e){bq(c,d);
cq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Zp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.V&&this.V("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.V&&this.V("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.U).catch(function(l){cq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.U).catch(function(g){d.sendFn(a,b,e.skipRetry);
cq(d,g)})}else this.sendFn(a,b,this.V&&this.V("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Zp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.U):e=!0;c.aa.fb&&c.V&&c.V("vss_network_hint")&&c.aa.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.U).then(function(g){d.id=g;e&&c.da.nb(d.id,c.U)}).catch(function(g){cq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Qb=function(){var a=this;if(!Zp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.na(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.jd("NEW",a.U),2);if(3!=c.h)return b=c.i,b?c.yield(bq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Qb());c.h=0})},this.Dd))};
m.Zc=function(){this.Ea.oa(this.i);this.i=0};
function bq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Zp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.se(b.id,a.U),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(dq(a,b,a.vd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.U),5);case 5:return d.return();case 4:b.skipRetry||(b=eq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.U),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function eq(a,b){if(!Zp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=fq(f);(h=gq(f))&&a.V&&a.V("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.V&&a.V("nwl_consider_error_code")&&g||a.V&&!a.V("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.B(2);break}if(!a.aa.mc){n.B(3);break}return n.yield(a.aa.mc(),3);case 3:if(a.aa.wa()){n.B(2);break}c(e,f);if(!a.V||!a.V("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Pc(b.id,a.U,!1),6);case 6:return n.return();case 2:if(a.V&&a.V("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.xd?n.yield(a.da.Pc(b.id,a.U,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.U),8);case 12:a.Ea.na(function(){a.aa.wa()&&a.Qb()},a.wd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.U),2);a.aa.fb&&a.V&&a.V("vss_network_hint")&&a.aa.fb(!0);d(e,f);h.h=0})};
return b}
function dq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function aq(a){if(!Zp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.jd("QUEUED",a.U).then(function(b){b&&!dq(a,b,a.td)?a.Ea.na(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Pc(b.id,a.U),2);aq(a);c.h=0})}):a.aa.wa()&&a.Qb()})}
function cq(a,b){a.Jd&&!a.aa.wa()?a.Jd(b):a.handleError(b)}
function Zp(a){return!!a.U||a.Vb}
function fq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function gq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var hq;
function iq(){if(hq)return hq();var a={};hq=Po("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Cb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&Vn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),bo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return hq()}
;function jq(a){return oo(iq(),a)}
function kq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(jq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Xn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();lq(c);return g.return(f)})}
function mq(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(jq(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Un(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(n){return ho(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=V();lq(c);return l.return(k)})}
function nq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(jq(b),2);c=d.i;return d.return(Un(c,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Qn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function oq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(jq(b),2);e=f.i;return f.return(Un(e,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Qn(h.h.put(k,void 0)).then(function(){return k})):Kn.resolve(void 0)})}))})}
function pq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(jq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function qq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(jq(a),2);b=d.i;c=V()-2592E6;return d.yield(Un(b,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){return eo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function rq(){A(function(a){return a.yield(Lo(),0)})}
function lq(a){S("nwl_csi_killswitch")||vp("networkless_performance",a,{sampleRate:1})}
;var sq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495};var tq={},uq=Po("ServiceWorkerLogsDatabase",{yb:(tq.SWHealthLog={Cb:1},tq),nc:!0,upgrade:function(a,b){b(1)&&bo(Vn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function vq(a){return oo(uq(),a)}
function wq(a){var b,c;A(function(d){if(1==d.h)return d.yield(vq(a),2);b=d.i;c=V()-2592E6;return d.yield(Un(b,["SWHealthLog"],{mode:"readwrite",ia:!0},function(e){return eo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function xq(a){var b;return A(function(c){if(1==c.h)return c.yield(vq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var yq={},zq=0;function Aq(a){var b=new Image,c=""+zq++;yq[c]=b;b.onload=b.onerror=function(){delete yq[c]};
b.src=a}
;function Bq(){this.h=new Map;this.i=!1}
function Cq(){if(!Bq.h){var a=E("yt.networkRequestMonitor.instance")||new Bq;D("yt.networkRequestMonitor.instance",a);Bq.h=a}return Bq.h}
Bq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Bq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Bq.prototype.removeParams=function(a){return a.split("?")[0]};
Bq.prototype.removeParams=Bq.prototype.removeParams;Bq.prototype.isEndpointCFR=Bq.prototype.isEndpointCFR;Bq.prototype.requestComplete=Bq.prototype.requestComplete;Bq.getInstance=Cq;var Dq;function Eq(){Dq||(Dq=new en("yt.offline"));return Dq}
function Fq(a){if(S("offline_error_handling")){var b=Eq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Eq().set("errors",b,2592E3,!0)}}
;function Gq(){rd.call(this);var a=this;this.j=!1;this.i=yi();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Eq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;cl(d)}Eq().set("errors",{},2592E3,!0)}}})}
x(Gq,rd);function Hq(){if(!Gq.h){var a=E("yt.networkStatusManager.instance")||new Gq;D("yt.networkStatusManager.instance",a);Gq.h=a}return Gq.h}
m=Gq.prototype;m.wa=function(){return this.i.wa()};
m.fb=function(a){this.i.i=a};
m.ee=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Wd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.mc=function(a){a=wi(this.i,a);a.then(function(b){S("use_cfr_monitor")&&Cq().requestComplete("generate_204",b)});
return a};
Gq.prototype.sendNetworkCheckRequest=Gq.prototype.mc;Gq.prototype.listen=Gq.prototype.listen;Gq.prototype.enableErrorFlushing=Gq.prototype.Wd;Gq.prototype.getWindowStatus=Gq.prototype.ee;Gq.prototype.networkStatusHint=Gq.prototype.fb;Gq.prototype.isNetworkAvailable=Gq.prototype.wa;Gq.getInstance=Hq;function Iq(a){a=void 0===a?{}:a;rd.call(this);var b=this;this.i=this.m=0;this.j=Hq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Jq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Jq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){sd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){sd(b,"publicytnetworkstatus-offline")})))}
x(Iq,rd);Iq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Iq.prototype.fb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Iq.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Cq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Jq(a,b){a.rateLimit?a.i?(zi.oa(a.m),a.m=zi.na(function(){a.l!==b&&(sd(a,b),a.l=b,a.i=V())},a.rateLimit-(V()-a.i))):(sd(a,b),a.l=b,a.i=V()):sd(a,b)}
;var Kq;function Lq(){var a=Yp.call;Kq||(Kq=new Iq({Yf:!0,Rf:!0}));a.call(Yp,this,{da:{Rd:qq,nb:pq,jd:mq,se:nq,Pc:oq,set:kq},aa:Kq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;dl(new U(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else cl(b)},
pb:dl,sendFn:Mq,now:V,Jd:Fq,Ea:dn(),Nc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,jc:rl("potential_esf_error_limit",10),V:S,Fb:!(um()&&Nq())});this.j=new Ph;S("networkless_immediately_drop_all_requests")&&rq();Mo("LogsDatabaseV2")}
x(Lq,Yp);function Oq(){var a=E("yt.networklessRequestController.instance");a||(a=new Lq,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&Bo().then(function(b){a.U=b;$p(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.U&&wq(a.U);S("networkless_immediately_drop_sw_health_store")&&Pq(a)}));
return a}
Lq.prototype.writeThenSend=function(a,b){b||(b={});um()||(this.h=!1);Yp.prototype.writeThenSend.call(this,a,b)};
Lq.prototype.sendThenWrite=function(a,b,c){b||(b={});um()||(this.h=!1);Yp.prototype.sendThenWrite.call(this,a,b,c)};
Lq.prototype.sendAndWrite=function(a,b){b||(b={});um()||(this.h=!1);Yp.prototype.sendAndWrite.call(this,a,b)};
Lq.prototype.awaitInitialization=function(){return this.j.promise};
function Pq(a){var b;A(function(c){if(!a.U)throw b=Gn("clearSWHealthLogsDb"),b;return c.return(xq(a.U).catch(function(d){a.handleError(d)}))})}
function Mq(a,b,c,d){d=void 0===d?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Qq(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Gl(a,void 0,"POST",f);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
h)Gl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new ab({url:a});if(k.j&&k.i||k.l){var l=$b(ac(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(lc),t=kc(a,0,"ri",p);if(0>t)var r=null;else{var v=a.indexOf("&",t);if(0>v||v>p)v=p;r=decodeURIComponent(a.slice(t+3,-1!==v?v:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(H){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(H){}z=!1}c=z?!0:!1}else c=
!1;c||Aq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Np(a,b.postBody,b,Dl,d)):Np(a,JSON.stringify(b.postParams),b,Ll,d):Dl(a,b)}
function Qq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Cq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Cq().requestComplete(a,!0);d(e,f)}}
function Nq(){return"www.youtube-nocookie.com"!==bc(document.location.toString())}
;var Rq=!1,Sq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Rq};D("ytNetworklessLoggingInitializationOptions",Sq);function Tq(){var a;A(function(b){if(1==b.h)return b.yield(Bo(),2);a=b.i;if(!a||!um()&&!S("nwl_init_require_datasync_id_killswitch")||!Nq())return b.B(0);Rq=!0;Sq.isNwlInitialized=Rq;return b.yield(Oq().awaitInitialization(),0)})}
;function Uq(a){var b=this;this.config_=null;a?this.config_=a:cp()&&(this.config_=dp());ym(function(){Wp(b)},5E3)}
Uq.prototype.isReady=function(){!this.config_&&cp()&&(this.config_=dp());return!!this.config_};
function Xp(a,b,c,d){function e(v){v=void 0===v?!1:v;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(v||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Up(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(T,J){Vp(y);z(T,J)};
c.onFetchSuccess=function(T,J){Vp(y);H(T,J)}}try{if(v&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Oq().writeThenSend(r,g):Oq().sendAndWrite(r,g);
else if(d.compress){var L=!d.networklessOptions.writeThenSend;if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));Np(r,I,g,Dl,L)}else Np(r,JSON.stringify(g.postParams),g,Ll,L)}else S("web_all_payloads_via_jspb")?Dl(r,g):Ll(r,g)}catch(T){if("InvalidAccessError"==T.name)y&&(Vp(y),y=0),dl(Error("An extension is blocking network request."));else throw T;}y&&ym(function(){Wp(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&dl(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);cl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(v,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,y){if(d.onError)d.onError(y)},
onFetchError:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ne)&&(h=f);var k=a.config_.pe||!1,l=fp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.oe&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=ml(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Sq.isNwlInitialized:Rq)?zo().then(function(v){e(v)}):e(!1)}
;var Vq=0,Wq=Ic?"webkit":Hc?"moz":Fc?"ms":Ec?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Vq});var Xq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Yq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Zq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Yq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Yq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Yq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",nb);var $q=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",$q);
function ar(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var br=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function cr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ar(a,b,c,d);if(e)return e;e=++$q.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Yq(h);if(!Bd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Yq(h);
h.currentTarget=a;return c.call(a,h)};
g=bl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),br()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function dr(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?br()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;function er(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.T=cr(window,"mousemove",Va(this.X,this));a=Va(this.K,this);"function"===typeof a&&(a=bl(a));this.ba=window.setInterval(a,25)}
Ya(er,G);er.prototype.X=function(a){void 0===a.h&&Zq(a);var b=a.h;void 0===a.i&&Zq(a);this.h=new xd(b,a.i)};
er.prototype.K=function(){if(this.h){var a=V();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
er.prototype.S=function(){window.clearInterval(this.ba);dr(this.T)};var fr={};
function gr(a){var b=void 0===a?{}:a;a=void 0===b.Ce?!1:b.Ce;b=void 0===b.Xd?!0:b.Xd;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&hr();cr(document,"keydown",hr);cr(document,"keyup",hr);cr(document,"mousedown",hr);cr(document,"mouseup",hr);a?cr(window,"touchmove",function(){ir("touchmove",200)},{passive:!0}):(cr(window,"resize",function(){ir("resize",200)}),b&&cr(window,"scroll",function(){ir("scroll",200)}));
new er(function(){ir("mouse",100)});
cr(document,"touchstart",hr,{passive:!0});cr(document,"touchend",hr,{passive:!0})}}
function ir(a,b){fr[a]||(fr[a]=!0,zi.na(function(){hr();fr[a]=!1},b))}
function hr(){null==E("_lact",window)&&gr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function jr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var kr=C.ytPubsubPubsubInstance||new N,lr=C.ytPubsubPubsubSubscribedKeys||{},mr=C.ytPubsubPubsubTopicToKeys||{},nr=C.ytPubsubPubsubIsSynchronous||{};function or(a,b){var c=pr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){lr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{nr[a]?f():wl(f,0)}catch(g){cl(g)}},void 0);
lr[d]=!0;mr[a]||(mr[a]=[]);mr[a].push(d);return d}return 0}
function qr(a){var b=pr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete lr[c]}))}
function rr(a,b){var c=pr();c&&c.publish.apply(c,arguments)}
function sr(a){var b=pr();if(b)if(b.clear(a),a)tr(a);else for(var c in mr)tr(c)}
function pr(){return C.ytPubsubPubsubInstance}
function tr(a){mr[a]&&(a=mr[a],eb(a,function(b){lr[b]&&delete lr[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Ab;N.prototype.publish=N.prototype.Ya;N.prototype.clear=N.prototype.clear;D("ytPubsubPubsubInstance",kr);D("ytPubsubPubsubTopicToKeys",mr);D("ytPubsubPubsubIsSynchronous",nr);D("ytPubsubPubsubSubscribedKeys",lr);var ur=Symbol("injectionDeps");function vr(a){this.name=a}
vr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function wr(a){this.key=a}
function xr(){this.i=new Map;this.j=new Map;this.h=new Map}
function yr(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);c&&c.hg(a.resolve(b.lc))}
xr.prototype.resolve=function(a){return a instanceof wr?zr(this,a.key,[],!0):zr(this,a,[])};
function zr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Gd)var e=d.Gd;else if(d.ff)e=d[ur]?Ar(a,d[ur],c):[],e=d.ff.apply(d,la(e));else if(d.Fd){e=d.Fd;var f=e[ur]?Ar(a,e[ur],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(la(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.lg||a.h.set(b,e);return e}
function Ar(a,b,c){return b?b.map(function(d){return d instanceof wr?zr(a,d.key,c,!0):zr(a,d,c)}):[]}
;var Br;function Cr(){Br||(Br=new xr);return Br}
;var Dr=window;function Er(){var a,b;return"h5vcc"in Dr&&(null==(a=Dr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Dr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Dr&&Dr.performance.mark&&Dr.performance.measure?2:0}
function Fr(a){switch(Er()){case 1:Dr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Dr.performance.mark(a+"-start");break;case 0:break;default:hi()}}
function Gr(a){switch(Er()){case 1:Dr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Dr.performance.mark(c);Dr.performance.measure(a,b,c);break;case 0:break;default:hi()}}
;var Hr=S("web_enable_lifecycle_monitoring")&&0!==Er(),Ir=S("web_enable_lifecycle_monitoring");function Jr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?dn():d;this.j=c;this.scheduler=d;this.i=new Ph;this.h=a;for(a={cb:0};a.cb<this.h.length;a={ic:void 0,cb:a.cb},a.cb++)a.ic=this.h[a.cb],c=function(e){return function(){e.ic.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.ic,{Ec:c,
jobId:d})}
function Kr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.oa(c.jobId),a.scheduler.ab(c.Ec,10))}
Jr.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.oa(b.jobId),b.kc=!0;this.i.resolve()};
Jr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Lr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Hr&&Fr(this.state)}
m=Lr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Hr&&Gr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Kr(this.j),this.j=void 0);Mr(this,a,b);this.state=a;Hr&&Fr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Nr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Nr(a,b){var c=b.filter(function(e){return 10===Or(a,e)}),d=b.filter(function(e){return 10!==Or(a,e)});
return a.A.kg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Je.apply(a,[c].concat(la(e))),2);a.Ad.apply(a,[d].concat(la(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Ke.apply(a,[c].concat(la(e)));a.Ad.apply(a,[d].concat(la(e)))}}
m.Ke=function(a){for(var b=B.apply(1,arguments),c=dn(),d=w(a),e=d.next(),f={};!e.done;f={Ib:void 0},e=d.next())f.Ib=e.value,c.Bb(function(g){return function(){Pr(g.Ib.name);g.Ib.callback.apply(g.Ib,la(b));Qr(g.Ib.name)}}(f))};
m.Je=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=dn(),d=w(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.ub=e.value;f.Tb=void 0;g=function(k){return function(){Pr(k.ub.name);var l=k.ub.callback.apply(k.ub,la(b));"function"===typeof(null==l?void 0:l.then)?k.Tb=l.then(function(){Qr(k.ub.name)}):Qr(k.ub.name)}}(f);
c.Bb(g);return f.Tb?h.yield(f.Tb,3):h.B(3)}f={ub:void 0,Tb:void 0};e=d.next();return h.B(2)})};
m.Ad=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Pr(e.name);e.callback.apply(e,la(b));Qr(e.name)},
priority:Or(c,e)}});
d.length&&(this.j=new Jr(d))};
function Or(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Pr(a){Hr&&a&&Fr(a)}
function Qr(a){Hr&&a&&Gr(a)}
function Mr(a,b,c){Ir&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Lr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Rr(a){Lr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Sr;x(Rr,Lr);Rr.prototype.i=function(a,b){var c=this;this.h=ym(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Rr.prototype.u=function(a,b){this.h&&(zi.oa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Tr(){Sr||(Sr=new Rr);return Sr}
;var Ur=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Ur});function Vr(){this.store={};this.h={}}
Vr.prototype.storePayload=function(a,b){a=Wr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Vr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Xr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,la(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,la(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,la(this.smartExtractMatchingEntries(a))));return c};
Vr.prototype.extractMatchingEntries=function(a){a=Xr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,la(this.store[a[c]])),delete this.store[a[c]]);return b};
Vr.prototype.getSequenceCount=function(a){a=Xr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Xr(a,b){var c=Wr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Wr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Yr(b.auth,g[0])){var h=b.isJspb;Yr(void 0===h?"undefined":h?"true":"false",g[1])&&Yr(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Yr(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Yr(a,b){return void 0===a||"undefined"===a?!0:a===b}
Vr.prototype.getSequenceCount=Vr.prototype.getSequenceCount;Vr.prototype.extractMatchingEntries=Vr.prototype.extractMatchingEntries;Vr.prototype.smartExtractMatchingEntries=Vr.prototype.smartExtractMatchingEntries;Vr.prototype.storePayload=Vr.prototype.storePayload;function Wr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Zr(a,b){if(a)return a[b.name]}
;var $r=rl("initial_gel_batch_timeout",2E3),as=rl("gel_queue_timeout_max_ms",6E4),bs=Math.pow(2,16)-1,cs=rl("gel_min_batch_size",5),ds=void 0;function es(){this.l=this.h=this.i=0;this.j=!1}
var gs=new es,hs=new es,is=new es,js=new es,ks,ls=!0,ms=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",ms);var ns={};function ps(){var a=E("yt.logging.ims");a||(a=new Vr,D("yt.logging.ims",a));return a}
function qs(a,b){if("log_event"===a.endpoint){rs();var c=ss(a),d=ts(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=sq[d||""];var f,g,h,k=null==Cr().resolve(new wr(Yo))?void 0:null==(f=Zo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;k=us(e.tier);if(400===k){vs(a,b);return}}ns[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};ps().storePayload(e,a.payload);ws(b,c,e,"gelDebuggingEvent"===d)}}
function ws(a,b,c,d){function e(){xs({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(ds=new a);a=rl("tvhtml5_logging_max_batch_ads_fork")||rl("web_logging_max_batch")||100;var g=V(),h=ys(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=ps().getSequenceCount(c));1E3<=d?e():d>=a?ks||(ks=zs(function(){e();ks=void 0},0)):10<=g-k&&(As(f,c.tier),h.l=g)}
function vs(a,b){if("log_event"===a.endpoint){rs();var c=ss(a),d=new Map;d.set(c,[a.payload]);var e=ts(a.payload)||"";b&&(ds=new b);return new Od(function(f,g){ds&&ds.isReady()?Bs(d,ds,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function ss(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ms[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function xs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Od(function(e,f){var g=ys(c,d),h=g.j;g.j=!1;Cs(g.i);Cs(g.h);g.h=0;ds&&ds.isReady()?void 0===d&&S("enable_web_tiered_gel")?Ds(e,f,a,b,c,300,h):Ds(e,f,a,b,c,d,h):(As(c,d),e())})}
function Ds(a,b,c,d,e,f,g){var h=ds;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=S("enable_web_tiered_gel")?ps().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ps().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(ns)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?ps().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ps().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete ns[l];Bs(k,h,a,b,c,!1,g)}
function As(a,b){function c(){xs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=ys(a,b),e=d===js||d===is?5E3:as;S("web_gel_timeout_cap")&&!d.h&&(e=zs(function(){c()},e),d.h=e);
Cs(d.i);e=R("LOGGING_BATCH_TIMEOUT",rl("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&ls&&(e=$r);e=zs(function(){0<rl("gel_min_batch_size")?ps().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=cs&&c():c()},e);
d.i=e}
function Bs(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(V()),k=a.size,l=(void 0===g?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var n=a.next();for(g={};!n.done;g={Jc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Mc:void 0,Lc:void 0},n=a.next()){var p=w(n.value);n=p.next().value;p=p.next().value;g.batchRequest=ub({context:ep(b.config_||dp())});if(!Oa(p)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=ms[n])&&
Es(g.batchRequest,n,p);delete ms[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Fs(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Mc=function(t){S("start_client_gcf")&&zi.na(function(){return A(function(r){return r.yield(Gs(t),0)})});
k--;k||c()};
g.Jc=0;g.Lc=function(t){return function(){t.Jc++;if(e.bypassNetworkless&&1===t.Jc)try{Xp(b,l,t.batchRequest,Hs({writeThenSend:!0},t.dangerousLogToVisitorSession,t.Mc,t.Lc,f)),ls=!1}catch(r){cl(r),d()}k--;k||c()}}(g);
try{Xp(b,l,g.batchRequest,Hs(e,g.dangerousLogToVisitorSession,g.Mc,g.Lc,f)),ls=!1}catch(t){cl(t),d()}}}
function Hs(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Of:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Is()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Fs(a,b,c){Is()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*bs/2)),c++,c>bs&&(c=1),Yk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Es(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function rs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=ql("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Ur=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Ur),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Is(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function zs(a,b){return!1===S("embeds_transport_use_scheduler")?wl(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?ym(function(){if("none"===Tr().currentState)a();else{var c={};Tr().install((c.none={callback:a},c))}},b):ym(a,b)}
function Cs(a){S("transport_use_scheduler")?zi.oa(a):window.clearTimeout(a)}
function Gs(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Zr(d,Dk),g=null==(f=d)?void 0:f.hotHashData,h=Zr(d,Ck),l=null==(k=d)?void 0:k.coldHashData,(n=Cr().resolve(new wr(Yo)))?g?e?p.yield($o(n,g,e),2):p.yield($o(n,g),2):p.B(2):p.return()):l?h?p.yield(ap(n,l,h),0):p.yield(ap(n,l),0):p.B(0)})}
function ys(a,b){b=void 0===b?200:b;return a?300===b?js:hs:300===b?is:gs}
function ts(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,sq[b])return b}
function us(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Js=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Js);
function Ks(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=jr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Js[b]=b in Js?Js[b]+1:0,a.sequence={index:Js[b],groupKey:b},d.endOfSequence&&delete Js[d.sequenceGroup]);(d.sendIsolatedPayload?vs:qs)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function on(a,b,c){c=void 0===c?{}:c;var d=Uq;R("ytLoggingEventsDefaultDisabled",!1)&&Uq===Uq&&(d=null);S("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=jr(),c.timestamp=V());Ks(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Ls=new Set,Ms=0,Ns=0,Os=0,Ps=[],Qs=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function nn(a){Rs(a)}
function Ss(a){Rs(a,"WARNING")}
function Ts(a){a instanceof Error?Rs(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",Ss(a))}
function Rs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Ms))){d=Ps;var k=wc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Vl(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var v="params."+t,y=Xl(r[t]);c[v]=y;p+=v.length+y.length;if(500<p)break}}else c.params=Xl(r)}if(d.length)for(t=0;t<d.length&&!(p=Vl(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Rl();c=w(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.ag)){a=d.weight;break a}a=w(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=w(Ml);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[t.name])for(e=w(c.hc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Hc(f);break}t.params||(t.params={});a=Rl();t.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Bb("sample").constructor!==zb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Ls.has(t.message)){if(g&&S("web_enable_error_204"))Us(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Sl.Ya("handleError",t),S("record_app_crashed_web")&&0===Os&&1===t.sampleWeight&&(Os++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),on("appCrashed",g)),Ns++):"WARNING"===b&&Sl.Ya("handleWarning",t);if(S("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=w(Qs);for(c=a.next();!c.done;c=a.next())if(un(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Zk("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=w(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=w(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(on("clientError",h),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&xs(void 0,void 0,!1))}S("suppress_error_204_logging")||Us(b,t)}try{Ls.add(t.message)}catch(z){}Ms++}}}
function Us(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Dl(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Vs(){this.register=new Map}
function Ws(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.fg("ABORTED")}
Vs.prototype.clear=function(){Ws(this);this.register.clear()};
var Xs=new Vs;var Ys=Date.now().toString();
function Zs(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ys)for(a=1,b=0;b<Ys.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ys.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var $s,at=C.ytLoggingDocDocumentNonce_;at||(at=Zs(),D("ytLoggingDocDocumentNonce_",at));$s=at;function bt(a){this.h=a}
m=bt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Kk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&K(a,2,Bf(this.h.veType)),void 0!==this.h.veCounter&&K(a,6,Bf(this.h.veCounter)),void 0!==this.h.elementIndex&&K(a,3,Bf(this.h.elementIndex)),this.h.isCounterfactual&&K(a,5,yf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();ig(a,Kk,7,b)}void 0!==this.h.youtubeData&&ig(a,Ek,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function ct(a){return R("client-screen-nonce-store",{})[void 0===a?0:a]}
function dt(a,b){b=void 0===b?0:b;var c=R("client-screen-nonce-store");c||(c={},Yk("client-screen-nonce-store",c));c[b]=a}
function et(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ft(a){return R(et(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",ft);function gt(){var a=R("csn-to-ctt-auth-info");a||(a={},Yk("csn-to-ctt-auth-info",a));return a}
function ht(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function jt(a){a=ct(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",jt);function kt(a,b,c){var d=gt();(c=jt(c))&&delete d[c];b&&(d[a]=b)}
function lt(a){return gt()[a]}
D("yt_logging_screen.getCttAuthInfo",lt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==ct(c)||b!==R(et(c)))if(kt(a,d,c),dt(a,c),Yk(et(c),b),b=function(){setTimeout(function(){a&&on("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:$s,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var mt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",mt);function nt(a){Tk(mt,arguments)}
;function ot(){var a=sb(pt),b;return(new Od(function(c,d){a.onSuccess=function(e){vl(e)?c(new qt(e)):d(new rt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new rt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new rt("Request timed out","net.timeout",e))};
b=Dl("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){c instanceof Vd&&b.abort();
return Td(c)})}
function rt(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(rt,$a);function qt(a){this.xhr=a}
;function st(){this.h=0;this.value_=null}
st.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:tt(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:ut(a):this};
st.prototype.getValue=function(){return this.value_};
st.prototype.isRejected=function(){return 2==this.h};
st.prototype.$goog_Thenable=!0;function ut(a){var b=new st;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function tt(a){var b=new st;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function vt(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:nl(a)?"same-origin":"cors",credentials:nl(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function wt(){return Jg()||(ve||we)&&un("applewebkit")&&!un("version")&&(!un("safari")||un("gsa/"))||Jc&&un("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function xt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Ik)if(Ik[d]==c.embeddedPlayerMode){b=Ik[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function zt(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof At;this.isTimeout=a instanceof rt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Vd}
x(zt,$a);zt.prototype.name="BiscottiError";function At(){$a.call(this,"Biscotti ID is missing from server")}
x(At,$a);At.prototype.name="BiscottiMissingError";var pt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Bt=null;function Ct(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!wt())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==qb(a))return Error("Biscotti ID is not available in private embed mode");if(xt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Rk(){var a=Ct();if(void 0!==a)return Td(a);Bt||(Bt=ot().then(Dt).oc(function(b){return Et(2,b)}));
return Bt}
function Dt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new At;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new At;a=a.id;Sk(a);Bt=tt(a);Ft(18E5,2);return a}
function Et(a,b){b=new zt(b);Sk("");Bt=ut(b);0<a&&Ft(12E4,a-1);throw b;}
function Ft(a,b){wl(function(){ot().then(Dt,function(c){return Et(b,c)}).oc(bb)},a)}
function Gt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Rk()}catch(b){return Td(b)}}
;function Ht(a){if("1"!=qb(R("PLAYER_VARS",{}))){a&&Qk();try{Gt().then(function(){},function(){}),wl(Ht,18E5)}catch(b){cl(b)}}}
;var It=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Jt(){var a=void 0===a?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;$b(ac(5,a));try{var b=ll(a).theme;void 0===b&&S("parent_tools_enable_app_settings")&&(b=ll(a).color_theme);return It.get(b)||null}catch(c){}return null}
;function Kt(){this.h={};if(this.i=gm()){var a=em("CONSISTENCY");a&&Lt(this,{encryptedTokenJarContents:a})}}
Kt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Lt(this,a)}};
function Lt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&dm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Mt=window.location.hostname.split(".").slice(-2).join(".");function Nt(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=Ot(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Pt;function Qt(){Pt=E("yt.clientLocationService.instance");Pt||(Pt=new Nt,D("yt.clientLocationService.instance",Pt));return Pt}
m=Nt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=Ot(this))&&this.h.set("yt-location-playability-token",a,15552E3):dm("YT_CL",JSON.stringify({loctok:a}),15552E3,Mt,!0))};
function Ot(a){return void 0===a.h?new en("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Ot(this))&&this.h.remove("yt-location-playability-token"):fm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Rt(a,b){var c,d=null==(c=Zr(a,Hk))?void 0:c.signal;if(d&&b.Pb&&(c=b.Pb[d]))return c();var e;if((c=null==(e=Zr(a,Fk))?void 0:e.request)&&b.Td&&(e=b.Td[c]))return e();for(var f in a)if(b.cd[f]&&(a=b.cd[f]))return a()}
;function St(a){return function(){return new a}}
;var Tt={},Ut=(Tt.WEB_UNPLUGGED="^unplugged/",Tt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Tt.WEB_UNPLUGGED_OPS="^unplugged/",Tt.WEB_UNPLUGGED_PUBLIC="^unplugged/",Tt.WEB_CREATOR="^creator/",Tt.WEB_KIDS="^kids/",Tt.WEB_EXPERIMENTS="^experiments/",Tt.WEB_MUSIC="^music/",Tt.WEB_REMIX="^music/",Tt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Tt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Tt);
function Vt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Ut[b];if(c){var d=new RegExp(c),e=w(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Ut).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=w(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Wt(){}
Wt.prototype.u=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?am:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=ub(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;km();var l="USER_INTERFACE_THEME_LIGHT";nm(165)?l="USER_INTERFACE_THEME_DARK":nm(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:Jt()||l;h.userInterfaceTheme=k;if(!f){if(k=sm())h.connectionType=
k;S("web_log_effective_connection_type")&&(k=tm())&&(g.client.effectiveConnectionType=k)}var n;if(S("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}S("web_gcf_hashes_innertube")&&(k=bp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);p=ll(C.location.href);!S("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&bm.h&&(p=bm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=cm(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!S("web_lr_app_quality_killswitch")&&(p=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Z){}t=void 0}t&&(h.timeZone=t)}(t=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=sl();Kt.h||(Kt.h=new Kt);h=Kt.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!S("web_prequest_context_killswitch")&&(r=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=km();r=nm(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?e&&(f=jt())&&(g.clientScreenNonce=f):
!f&&(f=jt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Qt().setLocationOnInnerTubeContext(g);try{var v=ol(),y=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:y};var z=w(Object.entries(v));for(var H=z.next();!H.done;H=z.next()){var L=w(H.value),I=L.next().value,T=L.next().value;v=I;y=T;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:v,value:""+y})}var J;if(S("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==(J=
g.client)?void 0:J.clientName)){var ha=R("INNERTUBE_CONTEXT");ha.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ha.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=ha.adSignalsInfo.limitAdTracking)}}catch(Z){Rs(Z)}z=g}else Rs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var M;b="/youtubei/v1/"+Vt(this.j());(H=null==(M=Zr(a.commandMetadata,Gk))?void 0:M.apiUrl)&&(b=H);M=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(M=String(b)+String(cc(M)));
b={};b.key=R("INNERTUBE_API_KEY");S("json_condensed_response")&&(b.prettyPrint="false");M=ml(M,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:M,hb:vt(M),Na:z,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}Rs(new U("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(Wt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Xt(){}
x(Xt,Wt);Xt.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",hb:vt("/getDatasyncIdsEndpoint","GET"),Na:{}}};
Xt.prototype.j=function(){return[]};
Xt.prototype.h=function(){};
Xt.prototype.i=function(){};var Yt={},Zt=(Yt.GET_DATASYNC_IDS=St(Xt),Yt);var $t="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function au(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(0<=db(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),bi(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:jt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&bu(a,b,f)}else bu(a,b)}
function bu(a,b,c){a=cu(a);b=b?hc(b):"";c=c||5;wt()&&dm(a,b,c)}
function cu(a){for(var b=w($t),c=b.next();!c.done;c=b.next())a=nc(a,c.value);return"ST-"+Yb(a).toString(36)}
;function du(a){ip.call(this,1,arguments);this.csn=a}
x(du,ip);var rp=new jp("screen-created",du),eu=[],fu=0,gu=new Map,hu=new Map,iu=new Map;
function ju(a,b,c,d,e){e=void 0===e?!1:e;for(var f=ku({cttAuthInfo:lt(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ob(k)||!k.trackingParams&&!k.veType)&&Ss(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=lu(h,b);if(k.veType&&!hu.has(l)&&!iu.has(l)&&!e){gu.set(l,[a,b,c,h]);return}h=lu(c,b);gu.has(h)?mu(c,b):iu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:gb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?nu("visualElementAttached",f,c):a?Ks("visualElementAttached",c,a,f):on("visualElementAttached",c,f)}
function nu(a,b,c){eu.push({Be:a,payload:c,Vf:void 0,options:b});fu||(fu=sp())}
function tp(a){if(eu){for(var b=w(eu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,on(c.Be,c.payload,c.options));eu.length=0}fu=0}
function lu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function mu(a,b){a=lu(a,b);gu.has(a)&&(b=gu.get(a)||[],ju(b[0],b[1],b[2],[b[3]],!0),gu.delete(a))}
function ku(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function ou(){try{return!!self.localStorage}catch(a){return!1}}
;function pu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function qu(a){if(ou()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=pu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function ru(){if(!ou())return!1;var a=wm(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=pu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function su(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return S("copy_login_info_to_st_cookie")&&("WEB"===R("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===R("INNERTUBE_CLIENT_NAME"))&&a}
function tu(a){if(R("LOGGED_IN",!0)&&su()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);0<=db(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=cc(a),(b=dc(b))?(b=cu(b),b=(b=em(b)||null)?kl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;su()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&au(a,b)}}
;function uu(a){var b=B.apply(1,arguments);if(!vu(a)||b.some(function(d){return!vu(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())wu(a,c.value);return a}
function wu(a,b){for(var c in b)if(vu(b[c])){if(c in a&&!vu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});wu(a[c],b[c])}else if(xu(b[c])){if(c in a&&!xu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);yu(a[c],b[c])}else a[c]=b[c];return a}
function yu(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,vu(c)?a.push(wu({},c)):xu(c)?a.push(yu([],c)):a.push(c);return a}
function vu(a){return"object"===typeof a&&!Array.isArray(a)}
function xu(a){return"object"===typeof a&&Array.isArray(a)}
;function zu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Au(){var a=zu();a.info||(a.info={});return a.info}
function Bu(a){a=zu(a);a.metadata||(a.metadata={});return a.metadata}
function Cu(a){a=zu(a);a.tick||(a.tick={});return a.tick}
function Du(a){a=zu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Eu(a){a=Du(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Fu(a){var b=zu(a).nonce;b||(b=Zs(),zu(a).nonce=b);return b}
;function Gu(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Hu(a){a=a||"";var b=E("ytcsi.reference");b||(Gu(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Gu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Iu=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",
W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",
W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att=
"LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]=
"LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]=
"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),X={},Ju=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id=
"browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.ctop="creatorInfo.topEntityType",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid="requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",
X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.nav_type="kabukiInfo.navigationType",X.prev_browse_id="kabukiInfo.prevBrowseId",X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",
X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.rc="resourceInfo.resourceCache",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",
X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.aac_type="tvInfo.authAccessCredentialType",X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID=
"requestIds",X),Ku="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Lu={},Mu=(Lu.ccs="CANARY_STATE_",Lu.mver="MEASUREMENT_VERSION_",Lu.pis="PLAYER_INITIALIZED_STATE_",Lu.yt_pt="LATENCY_PLAYER_",Lu.pa="LATENCY_ACTION_",
Lu.ctop="TOP_ENTITY_TYPE_",Lu.yt_vst="VIDEO_STREAM_TYPE_",Lu),Nu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Ou(a,b,c){c=Du(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ju){c=Ju[a];0<=db(Ku,c)&&(b=!!b);a in Mu&&"string"===typeof b&&(b=Mu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return uu({},d)}0<=db(Nu,a)||Ss(new U("Unknown label logged with GEL CSI",a))}
;function Pu(a,b){ip.call(this,1,arguments);this.timer=b}
x(Pu,ip);var Qu=new jp("aft-recorded",Pu);var Ru=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Ru);function Su(){this.h=0}
function Tu(){Su.h||(Su.h=new Su);return Su.h}
Su.prototype.tick=function(a,b,c,d){Uu(this,"tick_"+a+"_"+b)||on("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Su.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Uu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,on("latencyActionInfo",a,{cttAuthInfo:c}))};
Su.prototype.jspbInfo=function(){};
Su.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Uu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,on("latencyActionSpan",a,{cttAuthInfo:c}))};
function Uu(a,b){Ru[b]=Ru[b]||{count:0};var c=Ru[b];c.count++;c.time=V();a.h||(a.h=ym(function(){var d=V(),e;for(e in Ru)Ru[e]&&6E4<d-Ru[e].time&&delete Ru[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ss(c)),!0):!1}
;var Vu=window;function Wu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Xu(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Yu(e.requestStart),e.responseEnd=Yu(e.responseEnd),e.redirectStart=Yu(e.redirectStart),e.redirectEnd=Yu(e.redirectEnd),e.domainLookupEnd=Yu(e.domainLookupEnd),e.connectStart=Yu(e.connectStart),e.connectEnd=
Yu(e.connectEnd),e.responseStart=Yu(e.responseStart),e.secureConnectionStart=Yu(e.secureConnectionStart),e.domainLookupStart=Yu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function Yu(a){return Math.round(Zu()+a)}
function Zu(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Vu.performance||Vu.mozPerformance||Vu.msPerformance||Vu.webkitPerformance||new Wu;var $u=!1,av=!1,bv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||bb,Y);function cv(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;Bu(c).loadType=e}(a=Ou(a,b,c))&&dv(a,c,d)}}
function dv(a,b){if(!S("web_csi_action_sampling_enabled")||!zu(b).actionDisabled){var c=Hu(b||"");uu(c.info,a);a.loadType&&(c=a.loadType,Bu(b).loadType=c);uu(Eu(b),a);c=Fu(b);b=zu(b).cttAuthInfo;Tu().info(a,c,b)}}
function ev(){var a,b,c,d;return(null!=(d=null==Cr().resolve(new wr(Yo))?void 0:null==(a=Zo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function fv(a,b,c){if(!S("web_csi_action_sampling_enabled")||!zu(c).actionDisabled){var d=Fu(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(null==Cr().resolve(new wr(Yo))?0:Zo())&&!av&&(av=!0,fv("gcfl",V(),c));var f,g,h;e=(null==Cr().resolve(new wr(Yo))?void 0:null==(f=Zo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=ev();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+
d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;zu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,dv(f,c));zu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=Hu(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Du(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Cu(c);e=b||V();S("log_repeated_ytcsi_ticks")?a in f||
(f[a]=e):f[a]=e;f=zu(c).cttAuthInfo;"_start"===a?(a=Tu(),Uu(a,"baseline_"+d)||on("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Tu().tick(a,d,b,f);gv(c);return e}}}
function hv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Wq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function iv(a){function b(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
var c={};a=w(Object.entries(a));for(var d=a.next();!d.done;d=a.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":b(c,d,e);break;case "GetGuide_rid":b(c,d,e);break;case "GetHome_rid":b(c,d,e);break;case "GetPlayer_rid":b(c,d,e);break;case "GetSearch_rid":b(c,d,e);break;case "GetSettings_rid":b(c,d,e);break;case "GetTrending_rid":b(c,d,e);break;case "GetWatchNext_rid":b(c,d,e);break;case "yt_red":c.isRedSubscriber=!!e;break;case "yt_ad":c.isMonetized=!!e}}return c}
function jv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ki(window)&&a.setAttribute("nonce",ki(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Zu(),fv("rsf_"+b,c+Math.round(a.fetchStart)),fv("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function kv(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(fv("wffs",Yu(b.startTime)),fv("wffe",Yu(b.responseEnd)))}
function lv(a){var b=mv("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=mv(b[d],a);if(e)return e}return NaN}
function mv(a,b){if(a=Cu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function gv(a){var b=mv("_start",a),c=lv(a);b&&c&&!$u&&(op(Qu,new Pu(Math.round(c-b),a)),$u=!0)}
function nv(a,b){for(var c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!nv(a[d],b[d]))return!1;return!0}
function ov(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return Yu(a.startTime)}a=Y.timing;
return a.xe?Math.max(0,a.xe):0}
;function pv(a,b){bl(function(){Hu("").info.actionType=a;b&&Yk("TIMING_AFT_KEYS",b);Yk("TIMING_ACTION",a);var c=R("TIMING_INFO",{});if(S("csi_config_handling_infra"))c=iv(c),0<Object.keys(c).length&&dv(c);else for(var d in c)c.hasOwnProperty(d)&&cv(d,c[d]);c={isNavigation:!0,actionType:Iu[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=R("PREVIOUS_ACTION"))c.previousAction=Iu[d]||"LATENCY_ACTION_UNKNOWN";if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=
d;(d=jt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=hv();if(1===d||-1===d)c.isVisible=!0;Bu();Au();c.loadType="cold";d=Au();var e=Xu(),f=Zu(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(fv("srt",e.responseStart),1!==d.prerender&&fv("_start",f,void 0));d=ov();0<d&&fv("fpt",d);d=Xu();d.isPerformanceNavigationTiming&&dv({performanceNavigationTiming:!0},void 0);fv("nreqs",d.requestStart,void 0);fv("nress",d.responseStart,void 0);fv("nrese",
d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(fv("nrs",d.redirectStart,void 0),fv("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(fv("ndnss",d.domainLookupStart,void 0),fv("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(fv("ntcps",d.connectStart,void 0),fv("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Zu()&&0<d.connectEnd-d.secureConnectionStart&&(fv("nstcps",d.secureConnectionStart,void 0),fv("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in
Y&&kv();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in bv)bv.hasOwnProperty(h)&&(e=bv[h],jv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});dv(c);h=Au();c=Du();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);d=c.preLoggedGelInfos;c=Eu();e=void 0;for(f=0;f<d.length;f++)if(g=d[f],g.loadType){e=g.loadType;break}if("cold"===Bu().loadType&&("cold"===h.yt_lt||"cold"===c.loadType||"cold"===e)){e=Cu();
f=Du();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var k in e)if(!(k in f))if("number"===typeof e[k])fv(k,mv(k));else if(S("log_repeated_ytcsi_ticks")){g=w(e[k]);for(var l=g.next();!l.done;l=g.next())l=l.value,fv(k.slice(1),l)}k={};e=!1;if(S("use_infogel_early_logging"))for(d=w(d),f=d.next();!f.done;f=d.next())e=f.value,uu(c,e),uu(k,e),e=!0;d=w(Object.keys(h));for(f=d.next();!f.done;f=d.next())f=f.value,(f=Ou(f,h[f]))&&!nv(Eu(),f)&&(uu(c,f),uu(k,f),e=!0);e&&dv(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");
E("ytglobal.timingready_")&&k&&qv()&&lv()&&gv()})()}
function rv(a,b,c,d){bl(cv)(a,b,c,d)}
function sv(a,b,c){bl(dv)(a,b,void 0===c?!1:c)}
function tv(a,b,c){return bl(fv)(a,b,c)}
function qv(){return bl(function(){return"_start"in Cu()})()}
function uv(){bl(function(){var a=Fu();requestAnimationFrame(function(){setTimeout(function(){a===Fu()&&tv("ol",void 0,void 0)},0)})})()}
var vv=window;vv.ytcsi&&(vv.ytcsi.info=rv,vv.ytcsi.infoGel=sv,vv.ytcsi.tick=tv);var wv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),xv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function yv(a,b,c,d){this.u=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Pb||(a.Pb={});a.Pb=Object.assign({},Zt,a.Pb)}
function zv(a,b,c,d){if(void 0!==yv.h){if(d=yv.h,a=[a!==d.u,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else yv.h=new yv(a,b,c,d)}
function Av(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?am:c;var d=Rt(b,a.u);if(!d)return Td(new U("Error: No request builder found for command.",b));var e=d.u(b,void 0,c);return e?(tu(e.input),new Od(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.hb)?void 0:g.mode)?"cors":void 0;if(a.l.Ye){var n=e.config,p;n=null==n?void 0:null==(p=n.Ub)?void 0:p.sessionIndex;p=$l(0,{sessionIndex:n});k=Object.assign({},Bv(h),p);return l.B(2)}return l.yield(Cv(e.config,
h),3)}2!=l.h&&(k=l.i);f(Dv(a,e,k));l.h=0})})):Td(new U("Error: Failed to build request for command.",b))}
function Ev(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=w(wv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Dv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,v,y,z,H,L,I,T,J,ha,M,Z,ca,na,oa,tb,Pc,Qc,de;return A(function(ka){switch(ka.h){case 1:ka.B(2);break;case 3:if((d=ka.i)&&!d.isExpired())return ka.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ka.B(4);break}g=b.Na.context;ka.B(5);break;case 5:h=w([]),k=h.next();case 7:if(k.done){ka.B(4);break}l=k.value;return ka.yield(l.eg(g),8);case 8:k=h.next();ka.B(7);break;case 4:if(null==(n=a.i)||!n.jg(b.input,b.Na)){ka.B(11);
break}return ka.yield(a.i.Xf(b.input,b.Na),12);case 12:return p=ka.i,S("kevlar_process_local_innertube_responses_killswitch")||Ev(a,p,b),ka.return(p);case 11:return(v=null==(r=b.config)?void 0:r.gg)&&a.h.has(v)&&S("web_memoize_inflight_requests")?t=a.h.get(v):(y=JSON.stringify(b.Na),L=null!=(H=null==(z=b.hb)?void 0:z.headers)?H:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},L,c)}),I=Object.assign({},b.hb),"POST"===b.hb.method&&(I=Object.assign({},I,{body:y})),(null==(T=b.config)?0:T.He)&&
tv(b.config.He),J=function(){return a.aa.fetch(b.input,I,b.config)},t=J(),v&&a.h.set(v,t)),ka.yield(t,13);
case 13:if((ha=ka.i)&&"error"in ha&&(null==(M=ha)?0:null==(Z=M.error)?0:Z.details))for(ca=ha.error.details,na=w(ca),oa=na.next();!oa.done;oa=na.next())tb=oa.value,(Pc=tb["@type"])&&-1<xv.indexOf(Pc)&&(delete tb["@type"],ha=tb);v&&a.h.has(v)&&a.h.delete(v);(null==(Qc=b.config)?0:Qc.Ie)&&tv(b.config.Ie);if(ha||null==(de=a.i)||!de.Pf(b.input,b.Na)){ka.B(14);break}return ka.yield(a.i.Wf(b.input,b.Na),15);case 15:ha=ka.i;case 14:return Ev(a,ha,b),ka.return(ha||void 0)}})}
function Cv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ub)?void 0:d.sessionIndex;var h=g.yield;var k=$l(0,{sessionIndex:e});if(!(k instanceof Od)){var l=new Od(bb);Pd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Bv(b),f)))})}
function Bv(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));R("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&
(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Fv=new vr("INNERTUBE_TRANSPORT_TOKEN");var Gv=["share/get_web_player_share_panel"],Hv=["feedback"],Iv=["notification/modify_channel_preference"],Jv=["browse/edit_playlist"],Kv=["subscription/subscribe"],Lv=["subscription/unsubscribe"];function Mv(){}
x(Mv,Wt);Mv.prototype.j=function(){return Kv};
Mv.prototype.h=function(a){return Zr(a,Pk)||void 0};
Mv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Mv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Nv(){}
x(Nv,Wt);Nv.prototype.j=function(){return Lv};
Nv.prototype.h=function(a){return Zr(a,Ok)||void 0};
Nv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Nv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ov(){}
x(Ov,Wt);Ov.prototype.j=function(){return Hv};
Ov.prototype.h=function(a){return Zr(a,Jk)||void 0};
Ov.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Ov.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Pv(){}
x(Pv,Wt);Pv.prototype.j=function(){return Iv};
Pv.prototype.h=function(a){return Zr(a,Nk)||void 0};
Pv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Qv(){}
x(Qv,Wt);Qv.prototype.j=function(){return Jv};
Qv.prototype.h=function(a){return Zr(a,Mk)||void 0};
Qv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Rv(){}
x(Rv,Wt);Rv.prototype.j=function(){return Gv};
Rv.prototype.h=function(a){return Zr(a,Lk)};
Rv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Sv=new vr("NETWORK_SLI_TOKEN");function Tv(a){this.h=a}
Tv.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h&&(e=$b(ac(5,nc(a,"key")))||"/UNKNOWN_PATH",d.h.start(e));f=b;S("wug_networking_gzip_request")&&(f=Qp(b));g=new window.Request(a,f);return h.return(fetch(g).then(function(k){return d.handleResponse(k,c)}).catch(function(k){Ss(k)}))})};
Tv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.re)&&a.ok?rg(b.re,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Sf(),c=c.then(function(d){Ss(new U("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Tv[ur]=[new wr(Sv)];var Uv=new vr("NETWORK_MANAGER_TOKEN");var Vv;function Wv(){var a,b,c;return A(function(d){if(1==d.h)return a=Cr().resolve(Fv),a?d.yield(Av(a),2):(Ss(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ss(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Qf;return d.return(c)}Ss(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Xv=C.caches,Yv;function Zv(a){var b=a.indexOf(":");return-1===b?{rd:a}:{rd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function $v(){return A(function(a){if(void 0!==Yv)return a.return(Yv);Yv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(Xv.open("test-only"),4);case 4:return d.yield(Xv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Yv)})}
function aw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield($v(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Xv.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Zv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Xv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function bw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield($v(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=wm("cache contains other");return h.yield(Xv.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Zv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function cw(){Wv().then(function(a){a&&(Do(a),aw(a),qu(a))})}
function dw(){var a=new Iq;zi.na(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=wm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Do(g);aw(g);qu(g);return f.return()}c=ru();return f.yield(bw(),3);case 3:return d=f.i,f.yield(Eo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?cw():a.h.add("publicytnetworkstatus-online",cw,!0,void 0,void 0),f.h=0}})})}
;var gi=ia(["data-"]);function ew(a){a&&(a.dataset?a.dataset[fw()]="true":fi(a))}
function gw(a){return a?a.dataset?a.dataset[fw()]:a.getAttribute("data-loaded"):null}
var hw={};function fw(){return hw.loaded||(hw.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var iw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,jw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function kw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(iw,""),c=c.replace(jw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else lw(a,b,c)}
function lw(a,b,c){c=void 0===c?null:c;var d=mw(a),e=document.getElementById(d),f=e&&gw(e),g=e&&!f;f?b&&b():(b&&(f=or(d,b),b=""+Qa(b),nw[b]=f),g||(e=ow(a,d,function(){if(!gw(e)){ew(e);rr(d);var h=Wa(sr,d);wl(h,0)}},c)))}
function ow(a,b,c,d){d=void 0===d?null:d;var e=Ad("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);mi(e,Ak(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function pw(a){a=mw(a);var b=document.getElementById(a);b&&(sr(a),b.parentNode.removeChild(b))}
function qw(a,b){a&&b&&(a=""+Qa(b),(a=nw[a])&&qr(a))}
function mw(a){var b=document.createElement("a");bi(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var nw={};var rw=[],sw=!1;function tw(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&wt()){var a=R("PLAYER_VARS",{});if("1"!=qb(a)&&!xt(a)){var b=function(){sw=!0;"google_ad_status"in window?Yk("DCLKSTAT",1):Yk("DCLKSTAT",2)};
try{kw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}rw.push(zi.na(function(){if(!(sw||"google_ad_status"in window)){try{qw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}sw=!0;Yk("DCLKSTAT",3)}},5E3))}}}
function uw(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function vw(a){Lr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(vw,Lr);vw.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
vw.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
vw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
vw.prototype.i=function(){this.h=new Map};function ww(a){Lr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(ww,Lr);ww.prototype.i=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
ww.prototype.h=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
ww.prototype.u=function(a,b){a(null==b?void 0:b.event)};
ww.prototype.m=function(a,b){a(null==b?void 0:b.event)};function xw(){this.l=new vw;this.u=new ww}
xw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.u.install(c)})};function yw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
yw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=jt(void 0===c?0:c)){a=this.client;d=new bt({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=lu(d,c);hu.set(f,!0);mu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=ku({cttAuthInfo:lt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?nu("visualElementGestured",f,d):a?Ks("visualElementGestured",d,a,f):on("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
yw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new bt({trackingParams:a}),b,void 0===c?0:c)};
yw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=jt(d);a||(a=(a=ft(void 0===d?0:d))?new bt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=ku({cttAuthInfo:lt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?nu("visualElementStateChanged",d,b):a?Ks("visualElementStateChanged",b,a,d):on("visualElementStateChanged",b,d))}};
function zw(a,b){if(void 0===b)for(var c=ht(),d=0;d<c.length;d++)void 0!==c[d]&&zw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&ju(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Aw(){xw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
x(Aw,xw);Aw.prototype.j=function(){on("finalPayload",{csn:jt()})};
Aw.prototype.h=function(){Ws(Xs)};
Aw.prototype.i=function(){var a=zw;yw.h||(yw.h=new yw);a(yw.h)};function Bw(){}
function Cw(){var a=E("ytglobal.storage_");a||(a=new Bw,D("ytglobal.storage_",a));return a}
Bw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Dw()):d.return()})};
function Dw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Bw);function mn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=rl("ytidb_transaction_ended_event_rate_limit_session",.2)}
mn.prototype.Kb=function(a){this.handleError(a)};
mn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ew(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=rl("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ew(a,b){Cw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Fw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Fw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Fw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Gw(a,b,c){G.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=db(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
x(Gw,G);Gw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){dl(d)}}};
Gw.prototype.S=function(){window.removeEventListener("message",this.A);G.prototype.S.call(this)};function Hw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Gw(!!R("WIDGET_ID_ENFORCE")),b=this.Ee.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=Hw.prototype;m.Ee=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Vc(a,b,c)};
m.Vc=function(){};
m.wc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.wc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.be=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.zc());this.sendMessage("onReady");eb(this.i,this.yd,this);this.i=[]};
m.zc=function(){return null};
function Iw(a,b){a.sendMessage("infoDelivery",b)}
m.yd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.yd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Jw={},Kw=(Jw["api.invalidparam"]=2,Jw.auth=150,Jw["drm.auth"]=150,Jw["heartbeat.net"]=150,Jw["heartbeat.servererror"]=150,Jw["heartbeat.stop"]=150,Jw["html5.unsupportedads"]=5,Jw["fmt.noneavailable"]=5,Jw["fmt.decode"]=5,Jw["fmt.unplayable"]=5,Jw["html5.missingapi"]=5,Jw["html5.unsupportedlive"]=5,Jw["drm.unavailable"]=5,Jw["mrm.blocked"]=151,Jw);var Lw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Mw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Nw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(Lw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Ow(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Pw(a){Hw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Qe.bind(this));this.addEventListener("onVolumeChange",this.Re.bind(this));this.addEventListener("onApiChange",this.Le.bind(this));this.addEventListener("onPlaybackQualityChange",this.Ne.bind(this));this.addEventListener("onPlaybackRateChange",this.Oe.bind(this));this.addEventListener("onStateChange",this.Pe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Se.bind(this))}
x(Pw,Hw);m=Pw.prototype;
m.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Mw(a)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Nw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Nw(e);break;case "loadPlaylist":case "cuePlaylist":e=Ow(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Mw(a)&&Iw(this,this.zc())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Hw.prototype.Dc.call(this,a,b)};
m.wc=function(a,b){var c=this,d=Hw.prototype.wc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.be.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Kw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.zc=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Pe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Iw(this,a)};
m.Ne=function(a){Iw(this,{playbackQuality:a})};
m.Oe=function(a){Iw(this,{playbackRate:a})};
m.Le=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Re=function(){Iw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Qe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Iw(this,a)};
m.Se=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Iw(this,a)};
m.dispose=function(){Hw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Qw(a){G.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.ud,this)}
x(Qw,G);m=Qw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.ib("RECEIVING"))};
m.ib=function(a,b){this.started&&!this.Z()&&this.connection.ib(a,b)};
m.ud=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Rw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Sw(a,c))&&this.ib(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Me.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Me=function(a,b){this.started&&!this.Z()&&this.connection.ib(a,this.yc(a,b))};
m.yc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.ud,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.S.call(this)};function Tw(a,b){Qw.call(this,b);this.api=a;this.start()}
x(Tw,Qw);Tw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Tw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Rw(a,b){switch(a){case "loadVideoById":return a=Nw(b),[a];case "cueVideoById":return a=Nw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Ow(b),[a];case "cuePlaylist":return a=Ow(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Sw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Tw.prototype.yc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Qw.prototype.yc.call(this,a,b)};
Tw.prototype.S=function(){Qw.prototype.S.call(this);delete this.api};function Uw(a){a=void 0===a?!1:a;G.call(this);this.h=new N(a);uc(this,this.h)}
Ya(Uw,G);Uw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Uw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
Uw.prototype.l=function(a,b){this.Z()||this.h.Ya.apply(this.h,arguments)};function Vw(a,b,c){Uw.call(this);this.j=a;this.i=b;this.id=c}
x(Vw,Uw);Vw.prototype.ib=function(a,b){this.Z()||this.j.ib(this.i,this.id,a,b)};
Vw.prototype.S=function(){this.i=this.j=null;Uw.prototype.S.call(this)};function Ww(a,b,c){G.call(this);this.h=a;this.origin=c;this.i=cr(window,"message",this.j.bind(this));this.connection=new Vw(this,a,b);uc(this,this.connection)}
x(Ww,G);Ww.prototype.ib=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Ww.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Ww.prototype.S=function(){dr(this.i);this.h=null;G.prototype.S.call(this)};function Xw(){this.state=1;this.h=null}
m=Xw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=yb())?d.createScript(f):f,f=new Db(f,Cb)):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=zk(a.interpreterSafeUrl).toString());Yw(this,d,e,a.program,b,c)}else Ss(Error("Cannot initialize botguard without program"))};
function Yw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,kw(c,function(){window[g]?Zw(a,d,g,e):(a.state=3,pw(c),Ss(new U("Unable to load Botguard","from "+c)))},f)):b?(f=Ad("SCRIPT"),b instanceof Db?(b instanceof Db&&b.constructor===Db?b=b.h:(Na(b),b="type_error:SafeScript"),f.textContent=b,li(f)):f.textContent=b,f.nonce=ki(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Zw(a,d,g,e):(a.state=4,Ss(new U("Unable to load Botguard from JS")))):Ss(new U("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function Zw(a,b,c,d){a.state=5;try{var e=new Qh({program:b,ge:c,Fe:S("att_web_record_metrics")});e.Ve.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Ss(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Hd({dd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Hd=function(a){return this.h.Bd(a)};
m.Qc=function(a){sc(this.h);this.h=a};function $w(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function ax(){Xw.apply(this,arguments)}
x(ax,Xw);ax.prototype.Qc=function(a){var b;null==(b=$w())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Bd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
ax.prototype.Tc=function(){return!!$w()};
ax.prototype.Hd=function(a){return $w().bgvmc(a)};var bx=new ax;function cx(){return bx.Tc()}
function dx(a){a=void 0===a?{}:a;return bx.invoke(a)}
;function ex(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ex.prototype.clone=function(){var a=new ex,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=sb(c):a[b]=c}return a};var fx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function gx(a){a=a||"";if(window.spf){var b=a.match(fx);spf.style.load(a,b?b[1]:"",void 0)}else hx(a)}
function hx(a){var b=ix(a),c=document.getElementById(b),d=c&&gw(c);d||c&&!d||(c=jx(a,b,function(){if(!gw(c)){ew(c);rr(b);var e=Wa(sr,b);wl(e,0)}}))}
function jx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ak(a);ji(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ix(a){var b=Ad("A");bi(b,new Jb(a,Kb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function kx(a,b,c,d,e){G.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.pc=e;this.Pa=!1;this.api={};this.fa=this.A=null;this.T=new N;this.h={};this.ba=this.ka=this.elementId=this.Za=this.config=null;this.X=!1;this.j=this.l=null;this.ta={};this.qc=["onReady"];this.lastError=null;this.Sb=NaN;this.K={};this.ea=0;this.i=this.m=a;uc(this,this.T);lx(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(mx(this),nx(this))}
x(kx,G);m=kx.prototype;m.getId=function(){return this.D};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof ex||(b=new ex(b));this.config=b;this.setConfig(a);nx(this);this.isReady()&&ox(this)}};
function mx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=px(a);mx(this);if(!this.ka){var b;this.ka=qx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=ti(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=ti(Number(a)||a))};
function ox(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function rx(a){var b=!0,c=sx(a);c&&a.config&&(b=c.dataset.version===tx(a));return b&&!!E("yt.player.Application.create")}
function nx(a){if(!a.Z()&&!a.X){var b=rx(a);if(b&&"html5"===(sx(a)?"html5":null))a.ba="html5",a.isReady()||ux(a);else if(vx(a),a.ba="html5",b&&a.j&&a.m)a.m.appendChild(a.j),ux(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.l=function(){c=!0;var d=wx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?px(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.pc);ux(a)};
a.X=!0;b?a.l():(b=tx(a),wx(a,"web_player_proxy_new_scriptloader")?xx(b,a.l):kw(tx(a),a.l),(b=yx(a))&&(wx(a,"web_player_proxy_new_styleloader")?zx(b):gx(b)),Ax(a)&&!c&&D("yt.player.Application.create",null))}}}
function sx(a){var b=zd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function ux(a){if(!a.Z()){var b=sx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!wx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Bx(a)}else a.Sb=setTimeout(function(){ux(a)},50)}}
function Bx(a){lx(a);a.Pa=!0;var b=sx(a);if(b){a.A=Cx(a,b,"addEventListener");a.fa=Cx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Cx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.A&&a.A(g,a.h[g]);ox(a);a.ka&&a.ka(a.api);a.T.Ya("onReady",a.api)}
function Cx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function lx(a){a.Pa=!1;if(a.fa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.fa(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.A=null;a.fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Pa};
m.addEventListener=function(a,b){var c=this,d=qx(this,b);d&&(0<=db(this.qc,a)||this.h[a]||(b=Dx(this,a),this.A&&this.A(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=qx(this,b))&&this.T.unsubscribe(a,b)};
function qx(a,b){var c=b;if("string"===typeof b){if(a.ta[b])return a.ta[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.ta[b]=c}return c?c:null}
function Dx(a,b){function c(d){var e=setTimeout(function(){if(!a.Z()){try{a.T.Ya(b,null!=d?d:void 0)}catch(h){var f=new U("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.D,data:d});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
pb(a.K,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.ba||(sx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function vx(a){a.cancel();lx(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=sx(a);b&&(rx(a)||!Ax(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){if(this.l)if(wx(this,"web_player_proxy_new_scriptloader")){var a=tx(this),b=this.l;a&&b&&(a=document.getElementById("ytp-"+a))&&a.removeEventListener("load",b)}else qw(tx(this),this.l);clearTimeout(this.Sb);this.X=!1};
m.S=function(){vx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.ta=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.m;delete this.i;G.prototype.S.call(this)};
function Ax(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function tx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function yx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function wx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function px(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
function zx(a){var b="ytp-"+a;if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;a=Ak(a);ji(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function xx(a,b){var c="ytp-"+a,d=document.getElementById(c);if(d)d.dataset.loaded?b():d.addEventListener("load",function(){b()});
else{var e=document.createElement("script");e.id=c;e.addEventListener("load",function(){e.dataset.loaded="true";b()});
a=Ak(a);mi(e,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild)}}
;var Ex={},Fx="player_uid_"+(1E9*Math.random()>>>0);function Gx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?zd(c):c;var e=Fx+"_"+Qa(c),f=Ex[e];if(f&&d)return Hx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new kx(c,e,a,b,void 0);Ex[e]=f;f.addOnDisposeCallback(function(){delete Ex[f.getId()]});
return f.api}
function Hx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ix=null,Jx=null,Kx=null;
function Lx(){uv();var a=km(),b=nm(119),c=1<window.devicePixelRatio;if(document.body&&Ji(document.body,"exp-invert-logo"))if(c&&!Ji(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ji(d,"inverted-hdpi")){var e=Hi(d);Ii(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ji(document.body,"inverted-hdpi")&&Ki();if(b!=c){b="f"+(Math.floor(119/31)+1);d=om(b)||0;d=c?d|67108864:d&-67108865;0===d?delete hm[b]:(c=d.toString(16),hm[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in hm)hm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(hm[f])));var f=d.join("&");dm(b,f,63072E3,a.i,c)}}
function Mx(){Nx()}
function Ox(){tv("ep_init_pr");Nx()}
function Nx(){var a=Ix.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Px(){Ix&&Ix.sendAbandonmentPing&&Ix.sendAbandonmentPing();R("PL_ATT")&&bx.dispose();for(var a=zi,b=0,c=rw.length;b<c;b++)a.oa(rw[b]);rw.length=0;pw("//static.doubleclick.net/instream/ad_status.js");sw=!1;Yk("DCLKSTAT",0);tc(Kx,Jx);Ix&&(Ix.removeEventListener("onVideoDataChange",Mx),Ix.destroy())}
;function Qx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&au(a,b);if(c)return!1;tu(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=ic(a,e);tu(a);f=a+f;var h=void 0===h?Zh:h;a:if(h=void 0===h?Zh:h,f instanceof Jb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof Xh&&b.qe(f)){h=new Jb(f,Kb);break a}h=void 0}g=g.location;h=ai(h||Lb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",Yk);D("yt.config.set",Yk);D("yt.setMsg",nt);D("yt.msgs.set",nt);D("yt.logging.errors.log",Rs);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Ht(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);pv("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ll(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&pv("watch",["pbs","pbu","pbp"]);Ix=Gx(a,c);Ix.addEventListener("onVideoDataChange",Mx);Ix.addEventListener("onReady",Ox);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Kx=new Pw(Ix):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Jx=new Ww(window.parent,a,b),Kx=new Tw(Ix,Jx.connection));tw();S("ytidb_create_logger_embed_killswitch")||ln();a={};Aw.h||(Aw.h=new Aw);
Aw.h.install((a.flush_logs={callback:function(){xs()}},a));
Tq();S("ytidb_clear_embedded_player")&&zi.na(function(){var f,g;if(!Vv){var h=Cr();yr(h,{lc:Uv,Fd:Tv});var k={cd:{feedbackEndpoint:St(Ov),modifyChannelNotificationPreferenceEndpoint:St(Pv),playlistEditEndpoint:St(Qv),subscribeEndpoint:St(Mv),unsubscribeEndpoint:St(Nv),webPlayerShareEntityServiceEndpoint:St(Rv)}},l=Qt(),n={};l&&(n.client_location=l);void 0===f&&(f=Zl());void 0===g&&(g=h.resolve(Uv));zv(k,g,f,n);yr(h,{lc:Fv,Gd:yv.h});Vv=h.resolve(Fv)}dw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||cx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||dx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||uw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Qx);D("yt.util.activity.init",E("yt.util.activity.init")||gr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||jr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||hr);window.addEventListener("load",bl(function(){Lx()}));
window.addEventListener("pageshow",bl(function(a){a.persisted||Lx()}));
window.addEventListener("pagehide",bl(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Px():a.persisted||Px()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Zk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new U(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Rs(e):Ss(e))};
ee=Ts;window.addEventListener("unhandledrejection",function(a){Ts(a.reason)});
eb(R("ERRORS")||[],function(a){Rs.apply(null,a)});
Yk("ERRORS",[]);S("embeds_web_enable_scheduler_to_player_binary")&&bn();}).call(this);

define(function(require){var e=require("underscore"),t={},i=8785925;return t.getGUID=function(e){return e=e||"esui",e+i++},t.inherits=function(e,t){var i=function(){};i.prototype=t.prototype;var n=e.prototype,r=e.prototype=new i;for(var a in n)r[a]=n[a];return e.prototype.constructor=e,e.superClass=t.prototype,e},t.clone=function(i){if(!i||"object"!=typeof i)return i;var n=i;if(e.isArray(i))n=e.clone(i);else if("[object Object]"==={}.toString.call(i)&&"isPrototypeOf"in i){n={};for(var r in i)if(i.hasOwnProperty(r))n[r]=t.deepClone(i[r])}return n},t.deepClone=t.clone,t.toDictionary=function(t){var i={};return e.each(t,function(e){i[e]=!0}),i},t.isArray=e.isArray,t.toArray=e.toArray,t.extend=e.extend,t.bind=e.bind,t.curry=e.partial,t.indexOf=e.indexOf,t.decodeHTML=e.unescape,t.encodeHTML=e.escape,t});
define(function(require){var e={};return e.constant=function(e){var t=arguments.callee.caller;return function(){if(e&&e.then)e.then(function(e){console.log(e)},function(e){console.log(e),console.log(t)});return e}},e.remote=function(e,t){return function(n){if(t=require("./util").mix({url:e,dataType:"json"},t),"function"==typeof t.data)t.data=t.data(n);var r=require("./ajax");return r.request(t)}},e.permission=function(e){return function(){var t=require("./permission");return t.isAllow(e)}},e.defaultValue=function(e,t){return function(n,r){if(!r.name&&!t)throw new Error("No property name specified to determine whether value exists in this model");var i=t||r.name;return n.hasValue(i)?n.get(i):e}},e.convertTo=function(e,t){return function(n,r){if(!r.name&&!t)throw new Error("No property name specified to convert");var i=t||r.name,o=n.get(i);switch(e){case"number":return parseInt(o,10);case"string":return o+"";case"boolean":return!!o;default:return o}}},e});
define(function(){var exports={};return exports.name="html",exports.insert=function(e,t){var i=document.createElement("div");i.innerHTML=t;var n=Array.prototype.slice.call(i.childNodes,0);e.insertElements(n)},exports});
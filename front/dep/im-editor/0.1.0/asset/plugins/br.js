define(function(){var exports={};return exports.name="br",exports.insert=function(e){var t=document.createElement("br");if(e.insertElements(t),/ chrome/i.test(navigator.userAgent)){for(t=t.nextSibling;t&&3==t.nodeType&&!t.nodeValue;)t=t.nextSibling;if(!t)e.insertElements(document.createElement("br"))}},exports});
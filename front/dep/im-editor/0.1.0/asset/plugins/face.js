define(function(){var e=25,t=25,exports={};return exports.name="face",exports.insert=function(i,n,r){var a=document.createElement("img");a.setAttribute("data-face-id",n),r.faceText&&a.setAttribute("data-face-text",r.faceText),a.width=e,a.height=t,a.src=r.urlPrefix+n+"."+r.extension,i.insertElements(a)},exports});
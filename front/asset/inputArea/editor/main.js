define(function(){var e,t,n,exports={};return exports.setBold=function(){n.setStyles({fontWeight:"bold"})},exports.clearBold=function(){n.setStyles({fontWeight:"normal"})},exports.setItalic=function(){n.setStyles({fontStyle:"italic"})},exports.clearItalic=function(){n.setStyles({fontStyle:"normal"})},exports.setUnderline=function(){n.setStyles({textDecoration:"underline"})},exports.clearUnderline=function(){n.setStyles({textDecoration:"none"})},exports.setColor=function(e){n.setStyles({color:e||"#000"})},exports.setFamily=function(e){n.setStyles({fontFamily:e})},exports.setSize=function(e){n.setStyles({fontSize:e})},exports.render=function(i,r,a,o){a.appendHTML(r.format(i.get("editor")),e),t=a.g("nbWebimLightEditor"),n=o({main:t,styles:{fontSize:"9pt"}}),n.focus()},exports.getInstance=function(){return n},exports.handleInput=function(e){if(13===e.keyCode){if(e.stop(),e.ctrlKey){if(!/ mac/i.test(navigator.userAgent))n.insert("br");return}exports.sendText()}},exports.send=function(e){},exports.sendText=function(e,t){var i=n.getContent();if(i&&e.isConnected())i=t.anchor(i),exports.send({id:"msg"+ +new Date,text:i,type:"text"}),n.clear()},exports.pasteUploadSuccess=function(e,n){var i=n.bcsName,r=document.getElementById(i);if(e.contain(r,t))r.setAttribute("data-uploaded",1);else exports.send({type:"uploaded",bcsName:i})},exports.insertFace=function(e,t,i,r){var a=e.staticDomain;n.insert("face",t,{urlPrefix:a+"/webim/resource/img/face/",width:19,height:19,faceText:i,extension:r})},exports.pasteShot=function(e,t,i,r){var a=t.uuid();n.insert("img",r.src,{"data-snap":1,"data-uploaded":0,"data-bcsName":a,id:a}),i.upload(e.getUploadUrl(a),r.blob,"file",function(){exports.pasteUploadSuccess({bcsName:a})})},exports.bindEvent=function(){n.on("keydown",exports.handleInput),n.on("screenshotpaste",exports.pasteShot)},exports.init=function(t,n,i){e=t.g("nbWebImLightContainer"),n.parse(i),exports.render(),exports.bindEvent()},exports});
define(function(require){return{"package":"nativeAbility",resource:{main:require("./main"),log4js:require("./log4js"),globalEmitter:require("./globalEmitter"),injection:require("./injection")},injection:[{id:"nativeAbility.log4js",method:{traceLogger:["jointPoint"]}},{id:"nativeAbility.main",method:{moveTo:["commonUtil.tween"],tweenResizeTo:["commonUtil.tween"]}}],aspect:[{id:"nativeAbility.main",pointCut:["login.Action.hide, ,hide","login.Action.show, ,show","login.View.show, ,show","workBench.View.showWindow, ,show","inputArea.View.preview, ,preview","messageContainer.View.preview, ,preview","initWindowTip.init.open, ,open"]},{id:"nativeAbility.log4js",pointCut:["*.*.*, traceLogger,"]}]}});
define(function(require,exports,module){function e(){t.apply(this,arguments)}var t=require("ef/UIView"),n=require("er/util");return require("esui/Button"),require("tpl!./main.tpl"),require("common/esuix/DualCachedPanel"),require("common/esuix/DropPanel"),require("common/esuix/Layout"),require("esui/Toast"),e.prototype.template="workBench",e.prototype.uiProperties={statusInfo:{duration:1/0,disposeOnHide:!1,hidden:!0,messageType:"alert"},layout:{layoutOptions:{type:"container",row:[{type:"ActionPanelX",height:70,id:"aaa1",url:"/iconMenu"},{type:"container",column:[{type:"ActionPanelX",width:300,minWidth:300,maxWidth:400,drag:"right",id:"aaa2",url:"/visitorList"},{type:"container",row:[{type:"container",column:[{type:"ActionPanelX",id:"aaa3",url:"/chatArea"},{type:"DropPanel",skin:"left",width:0,openWidth:350,id:"history",url:"/history"}]},{type:"DualCachedPanel",height:135,minHeight:135,maxHeight:300,drag:"top",id:"inputAreaPanel",url:"/inputArea"}]},{type:"DualCachedPanel",fold:"left",drag:"left",width:300,minWidth:300,maxWidth:400,id:"aaa5",url:"/visitorInfo"}]}]}}},e.prototype.showToast=function(e){var t=this.get("statusInfo");t.set("content",e),t.show()},e.prototype.hideToast=function(){var e=this.get("statusInfo");e.hide()},e.prototype.showWindow=function(){},e.prototype.uiEvents={},e.prototype.enterDocument=function(e){t.prototype.enterDocument.call(this,arguments),e.resizeTo(1024,600),e.setResizable(!0)},n.inherits(e,t),e});
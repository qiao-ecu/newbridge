define(function(require,exports,module){function e(){n.apply(this,arguments);var e=this.get("visitorId");if(e)this.datasource={messageList:a(i.data("vm:chatroom","history","all",{bid:this.get("visitorId")}))}}var t=require("er/util"),n=require("ef/UIModel"),i=requireNode("client-vm")(),r=require("er/datasource"),a=r.constant;return t.inherits(e,n),e});
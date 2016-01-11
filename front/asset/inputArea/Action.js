define(function(require){function e(e,t){this.modelType=e,this.viewType=t,n.apply(this,arguments)}var t=require("er/util"),n=require("er/Action"),i=requireNode("client-vm")(),r=require("underscore"),a=null;return e.prototype.insertHTML=function(e){this.view.insertHTML(e)},e.prototype.initBehavior=function(){function e(e){var n=e.name+", "+e.subViewName+", "+e.dynamicViewName;if("vm:visitor, onsite, chatting"===n){var i=t.model.get("visitorId");r.map(e.value,function(n){if(n.bid===i)if("delete"===e.type)a=!1,t.view.disable();else if("insert"===e.type)a=!0,t.view.enable()})}}a=this.model.get("isChatting");var t=this;this.on("switchtobackground",function(){var e=this.model.get("visitorId");if(e)i.action("vm:chatroom","typing","typing","cache","",{bid:this.model.get("visitorId"),content:this.view.getContent()});this.view.saveSettings()}),i.on("data",e),this.on("leave",function(){i.removeListener("data",e)}),this.view.on("send",function(){t.send()}),this.view.on("sendImageMessage",function(e){t.sendMessage(e.content)}),this.view.on("imageuploaded",function(e){t.sendImageUploadedNotify({bcsName:e.bcsName,status:e.status})})},e.prototype.sendImageUploadedNotify=function(e){var t=this.model.get("visitorId");if(t)i.action("vm:chatroom","typing","typing","imagenotify","",{bid:this.model.get("visitorId"),type:"img",bcsName:e.bcsName,status:e.status})},e.prototype.sendMessage=function(e){var e=e||this.view.getContent();return i.action("vm:chatroom","typing","typing","send","",{bid:this.model.get("visitorId"),content:e})},e.prototype.send=function(){var e=this;if(!this.view.isEmpty()&&a)this.sendMessage().then(function(){e.view.clear()})},t.inherits(e,n),e});
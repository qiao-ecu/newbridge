define(function(require){function e(e){var n=require("mini-event").fromEvent(e,{preserveData:!0,syncState:!0});n.type="action@"+e.type,this.fire(n)}function n(n){if(n.isChildAction&&n.container===this.main.id){if(this.action=n.action,"function"==typeof this.action.on)this.action.on("*",e,this);this.fire("actionattach")}}function t(e){if(e.isChildAction&&e.container===this.main.id)this.fire("actionloaded")}function o(e){if(e.isChildAction&&e.container===this.main.id)this.action=null,this.fire("actionloadfail",{failType:e.failType,reason:e.reason})}function i(e){if(e.isChildAction&&e.container===this.main.id)this.fire("actionloadabort")}var r=require("er/events"),a=require("esui/Panel"),exports={};exports.type="ActionPanel",exports.setContent=function(){},exports.actionType=null,exports.action=null,exports.initStructure=function(){r.on("enteraction",n,this),r.on("enteractioncomplete",t,this),r.on("actionnotfound",o,this),r.on("permissiondenied",o,this),r.on("actionfail",o,this),r.on("enteractionfail",o,this),r.on("actionabort",i,this)},exports.disposeAction=function(){var n=require("er/Deferred"),t=this.action;if(t){if(n.isPromise(t)&&"function"==typeof t.abort)t.abort();else{if("function"==typeof t.un)t.un("*",e,this);if("function"==typeof t.leave)t.leave()}this.action=null}},exports.repaint=require("esui/painters").createRepaint(a.prototype.repaint,{name:["url","actionOptions"],paint:function(e,n,t){if(e.disposeAction(),n)if(!e.lazy||!e.helper.isInStage("INITED")){var o=require("er/controller");if(e.action=o.renderChildAction(n,e.main.id,t),"function"!=typeof e.action.abort)e.action=null}}}),exports.dispose=function(){this.disposeAction(),r.un("enteraction",n,this),r.un("enteractioncomplete",t,this),r.un("actionnotfound",o,this),r.un("permissiondenied",o,this),r.un("actionfail",o,this),r.un("enteractionfail",o,this),r.un("actionabort",i,this),this.$super(arguments)},exports.reload=function(e){var n=this.url;this.url=null,this.setProperties({url:n,actionOptions:e})};var s=require("eoo").create(a,exports);return require("esui").register(s),s});
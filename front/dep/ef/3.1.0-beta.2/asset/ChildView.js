define(function(require){function e(e){var n=require("mini-event").fromEvent(e,{preserveData:!0,syncState:!0});n.type="view@"+e.type,this.fire(n)}var n=require("underscore"),t=require("esui/Control"),exports={};exports.type="ChildView",exports.repaint=require("esui/painters").createRepaint(t.prototype.repaint,{name:"viewType",paint:function(e,t){e.disposeView();var i=require("er/Deferred");e.view=i.require([t]),e.view.then(n.bind(e.fire,e,"viewloaded")),e.view.then(n.bind(e.renderView,e))}}),exports.disposeView=function(){var e=this.get("view");if(e&&"function"==typeof e.dispose)e.dispose();this.view=null},exports.renderView=function(n){if(this.helper.isInStage("RENDERED")){this.loadedViewModule=n;var t=this.view="function"==typeof n?new n:n;t.model=this.get("model"),t.container=this.main.id,t.render(),this.fire("viewrendered"),t.on("*",e,this)}},exports.refresh=function(){var e=this.get("loadedViewModule");if(!e)throw new Error("No view module loaded yet");this.disposeView(),this.renderView(e)};var i=require("eoo").create(t,exports);return require("esui").register(i),i});
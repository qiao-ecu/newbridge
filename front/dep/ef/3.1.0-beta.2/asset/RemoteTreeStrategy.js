define(function(require){function e(e,t,i){var o=i.node;if(o.children)return void e.expandNode(o.id);var r=e.workingRequests[o.id];if(r)r.abort();r=this.requestNodeData(o),e.workingRequests[o.id]=r,r.done(n.bind(e.expandNode,e,o.id))}var n=require("esui/lib"),t=require("esui/TreeStrategy"),exports={};exports.constructor=function(e){if(e.requestMethod)e.requestMethod=e.requestMethod.toLowerCase();t.apply(this,arguments),this.workingRequests={}},exports.urlTemplate="",exports.requestMethod="get",exports.getRequestURL=function(e){return n.format(this.urlTemplate,e)},exports.getRequestData=function(e){return null},exports.requestNodeData=function(e){var n=this.getRequestURL(e),t=this.getRequestData(e),i=require("er/ajax");return"get"===this.requestMethod?i.getJSON(n,t,this.useCache||!1):i.post(n,t,"json")},exports.enableToggleStrategy=function(t){t.on("expand",n.curry(e,t,this)),t.on("collapse",function(e){this.collapseNode(e.node.id,!1)})};var i=require("eoo").create(t,exports);return n.inherits(i,t),i});
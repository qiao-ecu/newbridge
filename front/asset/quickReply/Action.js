define(function(require){function e(e,t){this.modelType=e,this.viewType=t,n.apply(this,arguments)}var t=require("er/util"),n=require("er/Action"),i=require("underscore"),r=require("./datasourceUtil").listToTree,a=requireNode("client-vm")();return e.prototype.initBehavior=function(){var e=this,t=this.view,n=this.model,o=t.get("quickReplyList");t.on("update",function(e){var t=n.get("quickReplyList"),a=e.data;if(0===a){var s=i.filter(t,function(e){return 1!==e.apped});o.set("datasource",r(s))}else{var l=i.filter(t,function(e){return 0!==e.apped});o.set("datasource",r(l))}}),a.on("data",function(t){var n=t.name+","+t.subViewName+","+t.dynamicViewName;if("vm:settings,commonword,commonword"===n)e.reload()})},t.inherits(e,n),e});
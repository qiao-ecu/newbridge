define(function(require){var exports={},e=null,t=require("er/URL");return exports.createRuntimeAction=function(){var t=require("bull"),n=require("./actionConfig");t.init(n);var i=t.get("history.Action");return e=new i},exports.changeVisitor=function(n){var i=e.context.url,r=t.withQuery(i.getPath(),{visitorId:n});e.fire("dualcachedpanelredirect",r.toString())},exports.open=function(){e.open()},exports.close=function(){e.close()},exports.toggle=function(){e.toggle()},exports});
define(function(require){return{"package":"visitorList",resource:{Action:require("./Action"),Model:require("./Model"),View:require("./View"),tpl:require("tpl!./main.tpl"),entry:require("./entry")},injection:[{id:"visitorList.Action",method:{constructor:["visitorList.Model","visitorList.View"]}}],aspect:[{id:"visitorList.entry",pointCut:["enterNotify.message.select,,selectVistor"]}]}});
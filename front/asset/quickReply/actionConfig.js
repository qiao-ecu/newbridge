define(function(require){return{"package":"quickReply",resource:{Action:require("./Action"),Model:require("./Model"),View:require("./View"),tpl:require("tpl!./main.tpl")},injection:[{id:"quickReply.Action",method:{constructor:["quickReply.Model","quickReply.View"]}}]}});
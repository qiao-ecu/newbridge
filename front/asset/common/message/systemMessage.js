define(function(require){function e(e){i.apply(this,arguments)}var t=require("etpl"),n=(require("jquery"),require("esui/lib")),i=require("./MessageBase");return e.prototype.renderText=function(){return t.render("systemMessage",this.data)},n.inherits(e,i),e});
define(function(require){function e(){t.apply(this,arguments)}var t=require("../Extension");e.prototype.type="CustomData";var i=/^data[A-Z0-9]/;return e.prototype.activate=function(){t.prototype.activate.apply(this,arguments);var e=this.target.data;if("object"!=typeof e)e=require("../main").parseAttribute(this.target.data);for(var n in this.target)if(this.target.hasOwnProperty(n)&&i.test(n)){var r=n.charAt(4).toLowerCase()+n.slice(5);e[r]=this.target[n]}this.target.getData=function(t){return e[t]},this.target.setData=function(t,i){e[t]=i}},e.prototype.inactivate=function(){t.prototype.inactivate.apply(this,arguments),delete this.target.getData,delete this.target.setData},require("../lib").inherits(e,t),require("../main").registerExtension(e),e});
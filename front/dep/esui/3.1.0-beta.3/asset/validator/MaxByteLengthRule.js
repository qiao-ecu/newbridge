define(function(require){function e(){t.apply(this,arguments)}var t=require("./Rule"),i=require("./ValidityState");return e.prototype.type="maxByteLength",e.prototype.errorMessage="${title}不能超过${maxByteLength}个字符",e.prototype.check=function(e,t){var n=e.replace(/[^\x00-\xff]/g,"xx").length;return new i(n<=this.getLimitCondition(t),this.getErrorMessage(t))},require("../lib").inherits(e,t),require("../main").registerRule(e,100),e});
define(function(require,exports,module){function e(){n.apply(this,arguments)}var t=require("er/util"),n=require("er/Action");return t.inherits(e,n),t.mix(e.prototype,{modelType:require("./model"),viewType:require("./view")}),e});
define(function(require){function e(t){if(!(this instanceof e))return new e(t);else return void(this.data=t)}function t(t,n){if(!(n instanceof e))throw"param is not a Functor";return n.fmap(t)}return e.prototype.getData=function(){return this.data},e.prototype.fmap=function(e,t){throw"please implement fmap"},{Functor:e,fmap:t}});
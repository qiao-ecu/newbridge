define(function(require){var exports={};return exports.init=function(){var e=require("er/controller");e.registerAction({path:"/404",type:"notFound/entry"}),e.setNotFoundLocation("/404")},exports});
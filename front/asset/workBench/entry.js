define(function(require){var exports={};return exports.createRuntimeAction=function(){var e=require("bull"),t=require("./actionConfig");e.init(t);var n=e.get("workBench.Action");return new n},exports});
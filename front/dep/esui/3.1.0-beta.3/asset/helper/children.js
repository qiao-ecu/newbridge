define(function(require){var e=require("underscore"),t=require("../main"),i={};return i.initChildren=function(i,n){i=i||this.control.main,n=e.extend({},this.control.renderOptions,n),n.viewContext=this.control.viewContext,n.parent=this.control,t.init(i,n)},i.disposeChildren=function(){var t=this.control.children.slice();e.each(t,function(e){e.dispose()}),this.children=[],this.childrenIndex={}},i.disableChildren=function(){e.each(this.control.children,function(e){e.dispose()})},i.enableChildren=function(){e.each(this.control.children,function(e){e.enable()})},i});
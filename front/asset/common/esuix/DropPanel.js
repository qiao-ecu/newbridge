define(function(require){function e(){i.apply(this,arguments)}var t=require("esui/lib"),n=(require("esui/controlHelper"),require("esui/Control"),require("esui/main")),i=require("common/esuix/DualCachedPanel");e.prototype.type="DropPanel",e.prototype.close=function(){this.helper.removePartClasses("open",this.opener),this.helper.addPartClasses("close",this.opener)},e.prototype.open=function(){this.helper.removePartClasses("close",this.opener),this.helper.addPartClasses("open",this.opener)},e.prototype.toggle=function(){if(this.helper.isPart(this.opener,"open"))this.close();else this.open()},e.prototype.initStructure=function(){i.prototype.initStructure.apply(this,arguments),this.helper.addPartClasses("origin-container",this.main);var e=document.createElement("div");this.helper.addPartClasses("container",e);var t=document.createElement("div");this.opener=t,this.contentEl=this.main,this.helper.addPartClasses("opener",this.opener),this.helper.addPartClasses("close",this.opener),e.appendChild(t);var n=this.main.parentNode;t.appendChild(this.main),this.main.removeAttribute("data-ui"),this.main=e,n.appendChild(e)},e.prototype.initEvents=function(){i.prototype.initEvents.apply(this,arguments);var e=this;this.on("action@open",function(){e.open()}),this.on("action@close",function(){e.close()}),this.on("action@toggle",function(){e.toggle()})};var r=require("esui/painters");return e.prototype.repaint=r.createRepaint(i.prototype.repaint,{name:["openHeight","openWidth"],paint:function(e,t,n){if(t)e.contentEl.style.height=t+"px",e.opener.style.height=t+"px";if(n)e.contentEl.style.width=n+"px",e.opener.style.width=n+"px"}}),t.inherits(e,i),n.register(e),e});
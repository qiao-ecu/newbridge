define(function(require){function e(e){n.apply(this,arguments)}var t=require("./lib"),i=require("esui"),n=require("./Control");require("./TextBox"),require("./Button"),e.prototype.type="SearchBox",e.prototype.initOptions=function(e){var i={};if(t.extend(i,e),"false"===i.disabled)i.disabled=!1;if(t.isInput(this.main)){if(!i.placeholder)i.placeholder=t.getAttribute(this.main,"placeholder");if(!i.text)i.text=this.main.value;if(!i.maxLength&&(t.hasAttribute(this.main,"maxlength")||this.main.maxLength>0))i.maxLength=this.main.maxLength}else if(!i.text)i.text=t.getText(this.main);if(!i.title)i.title=this.main.title;n.prototype.initOptions.call(this,i)},e.prototype.initStructure=function(){var e={mode:"text",childName:"text",height:this.height,viewContext:this.viewContext,placeholder:this.placeholder};if(t.isInput(this.main))this.helper.replaceMain();var n=i.create("TextBox",e);n.appendTo(this.main),this.addChild(n);var r={main:document.createElement("span"),childName:"button",content:"搜索",viewContext:this.viewContext},a=i.create("Button",r);a.appendTo(this.main),this.addChild(a)},e.prototype.initEvents=function(){var e=this.getChild("text"),i=require("mini-event").delegate;i(e,this,"input"),i(e,"enter",this,"search"),e.on("keypress",function(e){if(13===e.keyCode)e.preventDefault()}),e.on("focus",t.bind(this.addState,this,"focus")),e.on("blur",t.bind(this.removeState,this,"focus"));var n=this.getChild("button");i(n,"click",this,"search")},e.prototype.getValue=function(){var e=this.getChild("text");return e.getValue()};var r=require("./painters");return e.prototype.repaint=r.createRepaint(n.prototype.repaint,r.attribute("title"),{name:["maxLength","placeholder","text","width","disabled","readOnly"],paint:function(e,t,i,n,r,a,o){var s={maxLength:t,placeholder:i,value:n,width:r,disabled:a,readOnly:o};e.getChild("text").setProperties(s)}},{name:"disabled",paint:function(e,t){if("false"===t)t=!1;var i=e.getChild("button");i.set("disabled",t)}},{name:"fitWidth",paint:function(e,t){var i=t?"addState":"removeState";e[i]("fit-width")}}),e.prototype.getTextProperty=function(){var e=this.getChild("text");return e?e.getValue():this.text},t.inherits(e,n),i.register(e),e});
define(function(require){function e(e){i.apply(this,arguments)}var t=require("underscore"),n=require("esui/lib"),i=require("esui/Control"),r=require("esui/main");return e.prototype.type="ShowMsgTip",e.prototype.initOptions=function(e){var n={msg:"",time:3e3,skin:"",style:{background:"",color:""}};t.extend(n,e),this.setProperties(n)},e.prototype.initStructure=function(){var e=this.style,t=this.skin,n="";for(var i in e)if(e[i])n+=i+":"+e[i]+";";if(t&&!n)var r='<span id="uiShowMsgTip" class="ui-show-msg-tip ui-show-msg-tip-'+t+' hide">'+this.msg+"</span>";else if(n)var r='<span id="uiShowMsgTip" class="ui-show-msg-tip hide" style="'+n+'">'+this.msg+"</span>";else var r='<span id="uiShowMsgTip" class="ui-show-msg-tip hide">'+this.msg+"</span>";this.main.innerHTML=r,this.tip=this.main.getElementsByTagName("span")[0]},e.prototype.initEvents=function(){},e.prototype.show=function(){if(this.tip.innerHTML=this.msg,this.tip.className=this.tip.className.replace(" hide",""),this.autoHide){var e=this;this.showTimer=setTimeout(function(){e.hide()},e.time)}},e.prototype.hide=function(){this.tip.innerHTML="",this.tip.className+=" hide"},e.prototype.setMessage=function(e){this.msg=e},n.inherits(e,i),r.register(e),e});
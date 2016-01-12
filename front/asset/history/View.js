define(function(require,exports,module){function e(){n.apply(this,arguments)}function t(e,t){e=e||[];var n=[];return a.map(e,function(e){e=r.chainClone(e);var i=r.htmlToText(e.content),a=new RegExp(".{0,8}("+t+").{0,8}"),o="";if(i.replace(a,function(e){o=e.replace(t,'<span class="suggest-highlight-history">'+t+"</span>")}),!o)o=i.substr(0,16+t.length);e.content=o;var l=e.id;e.id=0,s.get(e,"suggest").mApply(function(e){return n.push({text:e.renderText(),value:l}),d()})}),n}var n=require("ef/UIView"),i=require("er/util"),r=require("common/util/util"),a=require("underscore"),o=requireNode("client-vm")(),s=require("common/message/messageFactory"),l=require("jquery");require("tpl!./main.tpl"),require("common/esuix/Suggest"),require("esui/Calendar"),require("esui/Pager");var u=require("eff"),d=(u.Either.Left,u.Either.Right);u.Monad.mApply,u.Monad.flow;return e.prototype.template="history",e.prototype.renderUI=function(e){this.lock=!0;var t=e.pager||{};this.count=this.count||t.count,this.get("pager").setProperties({page:t.page,count:t.count});var n=e.date?new Date(e.date-0):new Date;this.get("calendar").set("rawValue",n),this.renderMessage(e.message),this.lock=!1},e.prototype.search=function(e){if(!this.lock){e.count=this.count;var t=this,n=this.model.get("visitorId");if(n)e.count=this.count,o.action("vm:chatroom","history","all","fetch",n,e).then(function(e){t.renderUI(e)})}},e.prototype.uiProperties={pager:{forwardText:"▶",backText:"◀",pageType:"plain",pageSizes:[10,20,50,100],pageSize:10,pageSize:10,forwardCount:1,backCount:1},calendar:{autoHideLayer:!0},suggest:{mode:"clickToSearch",placeholder:"搜索消息记录",skin:"history",width:276}},e.prototype.uiEvents={"calendar:change":function(){this.search({date:this.get("calendar").getRawValue()-0})},"pager:pagechange":function(){this.search({page:this.get("pager").get("page")})},"suggest:search":function(){this.search({id:this.get("suggest").getValue()})}},e.prototype.bindEvent=function(){var e=this,n=this.model.get("visitorId");if(n)this.get("suggest").handleChange=function(i,r){o.action("vm:chatroom","history","all","search",n,{text:i,count:e.count}).then(function(e){e=e||[],r(t(e,i))})};else this.get("suggest").handleChange=null},e.prototype.renderMessage=function(e){var t=l(".history-message",this.getContainerElement());t.html(""),a.map(e,function(e){s.get(e,"history").mApply(function(e){var n=e.render();return t.append(n),d()})})},e.prototype.enterDocument=function(){n.prototype.enterDocument.apply(this,arguments),this.bindEvent();var e=this.model.get("messageList")||[];e=e.length?e[0]:[],this.renderUI(e)},i.inherits(e,n),e});
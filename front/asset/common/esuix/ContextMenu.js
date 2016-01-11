define(function(require){function e(){m.apply(this,arguments)}function t(e){var t=e.control.helper.getPartClasses("layer-hidden");return t.unshift(c.getConfig("uiClassPrefix")+"-layer-hidden"),t}function n(e){this.layer.hide();for(var t=e.target;t!==e.currentTarget&&!p.hasAttribute(t,"data-index");)t=t.parentNode;if(t!==e.currentTarget)if(t&&!this.helper.isPart(t,"item-disabled")){var n=t.getAttribute("data-type"),i=+t.getAttribute("data-index"),r=this.main._menuId||"",a=this.menuOptions[r]||{},o=this.contextParam,s="";if(n&&y[n])s=y[n].call(this.main,this,o);if(a["on"+n])a["on"+n].call(this.main,this,s);var l=this.datasource[i];this.fire("select",{item:l,index:i})}}function i(){h.apply(this,arguments),this.contextParam={selectedText:"",textPos:0},this.memory="",this.menuOptions={},this.layer=new e(this)}function r(e,t){var n=e._menuId,i=t.menuOptions[n]||{},r=t.contextParam.selectedText,a={};if(!i.noDefault){if(a={COPY:!1,CUT:!1,PASTE:!1},i.readonly)a.CUT=!0,a.PASTE=!0;if(!r)a.CUT=!0,a.COPY=!0;if(t.getText(),""===contextMenuMemory)a.PASTE=!0}for(var o,s=0;o=i.datasource[s];s++)a[o.type]=o.getDisabled?o.getDisabled.call(t,e):o.disabled;return a}function a(e,t){for(;t;){if(e==t)return!0;t=t.parentNode}return!1}function o(){var e=s();if(window.getSelection&&!e)return window.getSelection().toString();else if(document.selection&&document.selection.createRange)return document.selection.createRange().text;return""}function s(){var e,t=navigator.userAgent.toLowerCase(),n=t.match(/msie ([\d.]+)/);if(n)e=n[1];return e}function l(e){var t=0;if(document.selection){e.focus();var n=document.selection.createRange(),i=n.text.length;n.moveStart("character",-e.value.length),t=n.text.length,t-=i}else if(e.selectionStart||"0"==e.selectionStart)t=e.selectionStart;return t}function u(e){var t=0;if(document.selection){var n=document.body.createTextRange();n.moveToElementText(e);var i=document.selection.createRange(),r=i.text.length;i.setEndPoint("StartToStart",n),t=i.text.length,t-=r}else if(e.selectionStart||"0"==e.selectionStart)t=e.selectionStart;return t}function d(e,t){e=e||window.event;var n=document.documentElement.scrollLeft||document.body.scrollLeft,i=document.documentElement.scrollTop||document.body.scrollTop,r=e.pageX||e.clientX+n,a=e.pageY||e.clientY+i,o=t.layer.getElement().offsetWidth,s=t.layer.getElement().offsetHeight,l=Math.max(document.body.scrollWidth,document.body.offsetWidth),u=Math.max(document.body.scrollHeight,document.body.offsetHeight);if(o+r>=l)r=l-o-5;if(s+a>=u)a=u-s-10;return{left:r,top:a}}var f=require("underscore"),c=require("esui/main"),p=require("esui/lib"),h=require("esui/Control"),m=require("esui/Layer"),g=require("common/util/clientInterface");window.contextMenuMemory="",p.inherits(e,m),e.prototype.nodeName="ul",e.prototype.render=function(e){for(var t="",n=0;n<this.control.datasource.length;n++){var i=this.control.datasource[n],r=this.control.helper.getPartClasses("item");if(i.disabled)r.push.apply(r,this.control.helper.getPartClasses("item-disabled"));t+='<li data-index="'+n+'" data-type='+i.type+' class="'+r.join(" ")+'">',t+=this.control.getItemHTML(this.control.datasource[n]),t+="</li>"}e.innerHTML=t},e.prototype.initBehavior=function(e){this.control.helper.addDOMEvent(e,"click",n)},e.prototype.show=function(){var e=this.getElement();e.style.zIndex=this.getZIndex();var n=t(this);p.removeClasses(e,n),this.control.addState("active")},e.prototype.setPosition=function(e){var t=this.getElement();t.style.top=e.top+"px",t.style.left=e.left+"px"};var y={CUT:function(e,t){var n=this.value;return n=e._getCutedValue(n),e.setText(t.selectedText),this.value=n,n},COPY:function(e,t){return e.setText(t.selectedText),t.selectedText},PASTE:function(e,t){var n=this.value;return n=e._getPastedValue(n),this.value=n,n}};i.prototype.type="ContextMenu",i.prototype.itemTemplate="<span>${text}</span>",i.prototype.getItemHTML=function(e){var t={text:f.escape(e.text)};return p.format(this.itemTemplate,t)},i.prototype.initOptions=function(e){var t={datasource:[{text:"剪切(X)",type:"CUT",disabled:!1},{text:"复制(C)",type:"COPY",disabled:!1},{text:"粘贴(V)",type:"PASTE",disabled:!0}],customMenu:{},noDefault:0};if(e.datasource){for(var n,i=0;n=e.datasource[i];i++)if(n.on)t.customMenu["on"+n.type]=n.on,delete n.on;t.customMenu.datasource=e.datasource,t.datasource=e.noDefault?e.datasource:f.union(t.datasource,e.datasource)}this.setProperties(t)},i.prototype.bind=function(e){var t=e.targetList||[];delete e.targetList;var n=this;if(e.datasource=[],f.extend(e,n.customMenu),"[object Array]"==Object.prototype.toString.call(t))for(var i=0,r=t.length;r>i;i++){var a=t[i];n._bindContextMenu(a,e)}else n._bindContextMenu(t,e)},i.prototype._bindContextMenu=function(e,t){var n=this,i=v();if(n.menuOptions[i]=t,!e)return!1;else return e.oncontextmenu=function(t){t=t||window.event,n.main=e,n.show(e,t);var i=n.layer;document.body.onmousedown=function(t){t=t||window.event;var r=t.target||t.srcElement,o=a(i,r);if(!o)n.hide();else e.onblur=null;document.body.onmousedown=null},window.onblur=function(){n.hide(),window.onblur=null},t.preventDefault()},void(e._menuId=i)},i.prototype._updateMenuStatus=function(e){for(var t,n=this,i=r(e,n),a=0;t=n.datasource[a];a++)t.disabled=i[t.type];this.set("datasource",n.datasource),this.layer.repaint()},i.prototype._getContextMessage=function(e){var t,n=o(),i=e.tagName.toLowerCase(),r={input:l,textarea:u};if(r[i])t=r[i](e);return{selectedText:n,cursorPos:t}},i.prototype._getCutedValue=function(e){var t=this;t.getText();var n=(this.memory=contextMenuMemory,t.contextParam),i=n.selectedText,r=n.cursorPos;if(i){var a=i.length;e=e.slice(0,r)+e.slice(r+a)}return e},i.prototype._getPastedValue=function(e){var t=this,n=t.contextParam;t.getText();var i,r=this.memory=contextMenuMemory,a=n.selectedText,o=n.cursorPos;if(a)i=a.length,e=e.slice(0,o)+r+e.slice(o+i);else i=a.length,e=e.slice(0,o)+r+e.slice(o);return e},i.prototype.hide=function(){this.layer.hide()},i.prototype.show=function(e,t){var n=this._getContextMessage(e,t);this.contextParam=n,this.layer.show();var i=d(t,this);this._updateMenuStatus(e),this.layer.setPosition(i)},i.prototype.getText=function(){g.notify("PasteTextData",{callbackName:"pasteCallback"})},window.pasteCallback=function(e){window.contextMenuMemory=e.data},i.prototype.setText=function(e){return this.memory=e,g.notify("TextData",{copytextdata:e}),this.memory},i.prototype.repaint=function(){h.prototype.repaint,{name:["datasource"],paint:function(e){e.layer.repaint()}}};var v=function(){var e=0;return function(){return e+=1,"id_"+e}}();return i.prototype.dispose=function(){if(!this.helper.isInStage("DISPOSED")){if(this.layer)this.layer.dispose(),this.layer=null;h.prototype.dispose.apply(this,arguments)}},p.inherits(i,h),c.register(i),i});
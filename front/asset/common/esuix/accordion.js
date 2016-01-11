define(function(require){function e(){n.apply(this,arguments)}var t=require("esui/lib"),n=(require("esui/controlHelper"),require("esui/Control")),i=(require("er/Deferred"),require("esui/main"),require("underscore"));return e.prototype.type="Accordion",e.prototype.toggleZipState=function(e){var n=this.helper.getPartClassName("zipped");i.map(n.split(" "),function(n){t.toggleClass(e,n)})},e.prototype.setTitle=function(e,n){var i=this.main.children[n];if(i)e=e||i.dataset.title,i.dataset.title=e,i.firstElementChild.innerHTML=t.formatSharp(e,{count:i.children[1].children.length-1})},e.prototype.itemTemplate="#{text}",e.prototype.insertBefore=function(e,n){var i=this.main.children[n],r=document.createElement("div");r.innerHTML=t.formatSharp(this.itemTemplate,e);var a=i.children[1].children[1],o=r.firstElementChild||r;return i.children[1].insertBefore(o,a),this.setTitle("",n),o},e.prototype.addItem=function(e,n){var i=this.main.children[n],r=document.createElement("div");r.innerHTML=t.formatSharp(this.itemTemplate,e),i.children[1].appendChild(r.firstElementChild||r),this.setTitle("",n)},e.prototype.editItem=function(e,n,i){var r=this.main.children[n],a=r.children[1],o=a.children[i+1],s=null;if(o){var l=document.createElement("div");l.innerHTML=t.formatSharp(this.itemTemplate,e),s=l.firstElementChild,o.parentNode.insertBefore(s,o),o.parentNode.removeChild(o),this.setTitle("",n)}return s},e.prototype.getList=function(e){var t=this.main.children[e],n=t.children[1],i=Array.prototype.slice;return i.call(n.children,1)},e.prototype.removeFirst=function(e){var t=this.remove(e,0);return this.setTitle("",e),t},e.prototype.removeLast=function(e){var t=this.main.children[e],n=this.remove(e,t.children.length-1);return this.setTitle("",e),n},e.prototype.remove=function(e,t){var n=this.main.children[e],i=n.children[1],r=i.children[t+1];if(r)i.removeChild(r);return this.setTitle("",e),r},e.prototype.getIndex=function(e,t){for(var n=0;n<this.main.children.length;n++)for(var i=this.main.children[n],r=i.children[1],a=1;a<r.children.length;a++)if(r.children[a].getAttribute(e)===t+"")return a-1},e.prototype.buildItem=function(e){var n=e.dataset.title,i=this.helper.getPartClassName("handler"),r=this.helper.getPartClassName("panel"),a=document.createElement("div"),o=t.formatSharp(n,{count:e.children.length});return a.className=this.helper.getPartClassName("item-container"),a.innerHTML='<div class="'+i+'">'+o+'</div><div class="'+r+'"></div>',a.getElementsByClassName(r)[0].appendChild(e),a.dataset.title=n,a},e.prototype.initStructure=function(){var e=this,t=Array.prototype.slice.call(e.main.children,0);i.map(t,function(t){e.main.appendChild(e.buildItem(t))}),e.helper.initChildren()},e.prototype.initEvents=function(){var e=this;i.map(e.main.children,function(n,i){function r(n,r){for(var a=n.target;a&&!t.hasClass(a,"visitor-list-wrapper");)a=a.parentNode;if(a)e.fire(r,{index:i,element:a})}e.helper.addDOMEvent(n.firstElementChild,"click",function(){e.toggleZipState(n)});var a=n.children[1],o=null;e.helper.addDOMEvent(a,"dblclick",function(e){clearTimeout(o),r(e,"dblclick")}),e.helper.addDOMEvent(a,"click",function(e){r(e,"select")})})},t.inherits(e,n),require("esui/main").register(e),e});
define(function(require){function e(e){u.apply(this,arguments)}function t(e){var t=[48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105],n=[8];if(t.indexOf(+e.keyCode)<0&&n.indexOf(+e.keyCode)<0)e.preventDefault()}function n(e){var t=e.target,n=parseInt(t.value,10);if(!o.isNumber(n)||isNaN(n))t.value=t.value.replace(/\D/,"");if(isNaN(n))t.value="";else if(t.value=n,this.maximum&&n>this.maximum)t.value=+this.maximum,this.fire("change");else if(this.minimum&&n<this.minimum)t.value=+this.minimum,this.fire("change")}function i(e,t){var n=s.g(e.inputId);if(!d){var i=e.helper.getPart("placeholder");if("boolean"!=typeof t)t=document.activeElement===n;if(!t&&!e.getRawValue())e.helper.removePartClasses("placeholder-hidden",i);else e.helper.addPartClasses("placeholder-hidden",i)}}function r(e){if(i(this,!0),this.autoSelect){var t=s.g(this.inputId);t.select()}this.fire("focus")}function a(e){i(this,!1),this.fire("blur")}var o=require("underscore"),s=require("esui/lib"),l=require("esui/main"),u=require("esui/InputControl"),d="placeholder"in document.createElement("input");return e.defaultProperties={width:200,step:1},e.prototype.type="RangeInput",e.prototype.initOptions=function(t){var n={mode:"text",placeholder:"",autoSelect:!1};if(o.extend(n,e.defaultProperties),!n.name)n.name=this.main.getAttribute("name");if(s.isInput(this.main)){var i=this.main.nodeName.toLowerCase();if("textarea"===i)n.mode="textarea";else{var r=this.main.type;n.mode="password"===r?"password":"text"}if(!n.placeholder)n.placeholder=this.main.getAttribute("placeholder");this.helper.extractOptionsFromInput(this.main,n)}if(!o.isNumber(+t.maximum)||isNaN(+t.maximum))t.maximum=null;if(!o.isNumber(+t.minimum)||isNaN(+t.minimum))t.minimum=null;var a=parseInt(t.value,10);if(!o.isNumber(a)||isNaN(a))t.value="";else{if(null!==t.minimum)t.value=+t.value<+t.minimum?+t.minimum:+t.value;if(null!==t.maximum)t.value=+t.value>+t.maximum?+t.maximum:+t.value}if(o.extend(n,t),!n.hasOwnProperty("title")&&this.main.title)n.title=this.main.title;this.setProperties(n)},e.prototype.getFocusTarget=function(){return s.g(this.inputId)},e.prototype.initStructure=function(){if(s.isInput(this.main)){var e=this.helper.replaceMain();if(s.removeAttribute(this.main,"tabindex"),this.inputId=e.id||this.helper.getId("input"),this.main.id)this.main.id=this.helper.getId();var t=e.cloneNode(!1);s.removeAttribute(t,l.getConfig("instanceAttr")),t.id=this.inputId,this.main.appendChild(t)}else{this.inputId=this.helper.getId("input");var n='<input type="number" placeholder="'+this.placeholder+'" id="'+this.inputId+'" step="'+this.step+'"';if(this.name)n+=' name="'+o.escape(this.name)+'"';if(n+=" />",this.main.innerHTML=n,this.unit){var i=document.createElement("div");if(i.className="unit",i.textContent=this.unit,this.height)i.style.height=+this.height+"px",i.style.lineHeight=+this.height+"px";this.main.appendChild(i)}}if(!d){var t=s.g(this.inputId),r=document.createElement("label");r.id=this.helper.getId("placeholder"),s.setAttribute(r,"for",t.id),this.helper.addPartClasses("placeholder",r),s.insertAfter(r,t)}},e.prototype.initEvents=function(){var e=s.g(this.inputId);this.helper.addDOMEvent(e,"keypress",t),this.helper.addDOMEvent(e,"keydown",t),this.helper.addDOMEvent(e,"focus",r),this.helper.addDOMEvent(e,"blur",a);var i="oninput"in e?"input":"propertychange";this.helper.addDOMEvent(e,i,n),this.helper.delegateDOMEvent(e,"change")},e.prototype.repaint=require("esui/painters").createRepaint(u.prototype.repaint,{name:"rawValue",paint:function(e,t){var r=s.g(e.inputId),a="oninput"in r?"input":"propertychange";e.helper.removeDOMEvent(r,a),r.value=e.stringifyValue(t),e.helper.addDOMEvent(r,a,n),i(e)}},{name:"title",paint:function(e,t){var n=s.g(e.inputId),i=e.helper.getPart("placeholder");if(t){if(s.setAttribute(e.main,"title",t),s.setAttribute(n,"title",t),i)s.setAttribute(i,"title",t)}else if(s.removeAttribute(e.main,"title"),s.removeAttribute(n,"title"),i)s.removeAttribute(i,"title")}},{name:"maxLength",paint:function(e,t){var n=s.g(e.inputId);if(t=parseInt(t,10),!t||0>=t){try{n.maxLength=void 0,delete n.maxLength}catch(i){}s.removeAttribute(n,"maxlength"),s.removeAttribute(n,"maxLength")}else n.maxLength=t,s.setAttribute(n,"maxlength",t)}},{name:["disabled","readOnly"],paint:function(e,t,n){var i=s.g(e.inputId);i.disabled=t,i.readOnly=n}},{name:"placeholder",paint:function(e,t){var n=s.g(e.inputId);if(d)if(t)s.setAttribute(n,"placeholder",t);else s.removeAttribute(n,"placeholder");else{var r=e.helper.getPart("placeholder");r.innerHTML=o.escape(t||"")}i(e)}},{name:["hint","hintType"],paint:function(e,t,n){var i=e.helper.getPart("hint");if(e.removeState("hint-prefix"),e.removeState("hint-suffix"),!t&&i)s.removeNode(i);if(t){if(!i)i=document.createElement("label"),i.id=e.helper.getId("hint"),e.helper.addPartClasses("hint",i),s.setAttribute(i,"for",e.inputId);i.innerHTML=o.escape(t),n="prefix"===n?"prefix":"suffix";var r="prefix"===n?"insertBefore":"insertAfter",a=s.g(e.inputId);s[r](i,a),e.addState("hint-"+n)}}},{name:["width","hint","hidden"],paint:function(e,t,n,i){if(!i&&!isNaN(t)){if(n){var r=e.helper.getPart("hint");if(r)t-=r.offsetWidth}var a=s.g(e.inputId);a.style.width=t+"px";var o=e.helper.getPart("placeholder");if(o)o.style.maxWidth=t+"px"}}},{name:"height",paint:function(e,t){if(!isNaN(t)){var n=e.helper.getPart("hint"),i=t+"px";if(n)n.style.height=i,n.style.lineHeight=i;var r=s.g(e.inputId);r.style.height=i;var a=e.helper.getPart("placeholder");if(a)a.style.height=i,a.style.lineHeight=i}}}),e.prototype.getValidityLabel=function(){var e=u.prototype.getValidityLabel.apply(this,arguments);if(e)e.set("targetType","textarea"===this.mode?"TextArea":"RangeInput");return e},e.prototype.getRawValue=function(){var e=s.g(this.inputId);return e?e.value:this.rawValue||this.value||""},e.prototype.getRawValueProperty=e.prototype.getRawValue,s.inherits(e,u),l.register(e),e});
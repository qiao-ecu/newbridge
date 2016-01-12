define(function(require){function e(e){if(e=e?t.extend({},e):{},e.main&&!e.name)e.name=e.main.getAttribute("name");i.call(this,e)}var t=require("./lib"),n=require("./controlHelper"),i=require("./Control"),r=require("./Validity"),o=require("./validator/Validity"),a=require("./main");return e.prototype={constructor:e,ignoreStates:i.prototype.ignoreStates.concat("read-only"),getCategory:function(){return"input"},getFocusTarget:function(){return null},getValue:function(){return this.stringifyValue(this.getRawValue())},setValue:function(e){var t=this.parseValue(e);this.setRawValue(t)},getRawValue:function(){return this.rawValue},setRawValue:function(e){this.setProperties({rawValue:e})},setProperties:function(e){var t=e.value;if(delete e.value,null!=t&&null==e.rawValue)e.rawValue=this.parseValue(t);if(this.hasOwnProperty("readOnly"))this.readOnly=!!this.readOnly;return i.prototype.setProperties.call(this,e)},repaint:n.createRepaint(i.prototype.repaint,{name:"disabled",paint:function(e,t){var n=e.main.nodeName.toLowerCase();if("input"===n||"select"===n||"textarea"===n)e.main.disabled=t}},{name:"readOnly",paint:function(e,t){var n=t?"addState":"removeState";e[n]("read-only");var i=e.main.nodeName.toLowerCase();if("input"===i||"select"===i||"textarea"===i)e.main.readOnly=t}},{name:"hidden",paint:function(e,i){var r=e.getValidityLabel(!0);if(r){var o=a.getConfig("uiClassPrefix"),s=[].concat(o+"-hidden",o+"-validity-hidden",n.getPartClasses(e,"validity-hidden")),u=e.isHidden()?"addClasses":"removeClasses";t[u](r,s)}}}),stringifyValue:function(e){return null!=e?e+"":""},parseValue:function(e){return e},setReadOnly:function(e){e=!!e,this[e?"addState":"removeState"]("read-only")},isReadOnly:function(){return this.hasState("read-only")},getValidationResult:function(){var e=new o,t={validity:e};t=this.fire("beforevalidate",t);for(var n=a.createRulesByControl(this),i=0,r=n.length;r>i;i++){var s=n[i];e.addState(s.getName(),s.check(this.getValue(),this))}if(!e.isValid())t=this.fire("invalid",t);return this.fire("aftervalidate",t),e},checkValidity:function(){var e=this.getValidationResult();return e.isValid()},validate:function(){var e=this.getValidationResult();return this.showValidity(e),e.isValid()},getValidityLabel:function(e){if(!n.isInStage(this,"RENDERED"))return null;var t=this.validityLabel&&this.viewContext.get(this.validityLabel);if(!t&&!e){var i={id:this.id+"-validity",viewContext:this.viewContext};if(t=new r(i),this.main.nextSibling)t.insertBefore(this.main.nextSibling);else t.appendTo(this.main.parentNode);this.validityLabel=t.id}return t},removeValidity:function(){if(this.validity)this.removeState("validity-"+this.validity.getValidState())},showValidity:function(e){if(this.validity)this.removeState("validity-"+this.validity.getValidState());this.validity=e,this.addState("validity-"+e.getValidState());var t=this.getValidityLabel();if(t){var n={target:this,focusTarget:this.getFocusTarget(),validity:e};t.setProperties(n)}},showValidationMessage:function(e,t){t=t||"";var n=new o;n.setCustomValidState(e),n.setCustomMessage(t),this.showValidity(n)},dispose:function(){if(!n.isInStage(this,"DISPOSED")){var e=this.getValidityLabel(!0);if(e)e.dispose();i.prototype.dispose.apply(this,arguments)}}},t.inherits(e,i),e});
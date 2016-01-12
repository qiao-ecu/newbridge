define(function(require){function e(e){if(e=e||{},this.helper=new r(this),this.helper.changeStage("NEW"),this.children=[],this.childrenIndex={},this.currentStates={},this.domEvents={},this.main=e.main?e.main:this.createMain(e),!this.id&&!e.id)this.id=t.getGUID();this.initOptions(e),this.helper.initViewContext(),this.helper.initExtensions(),this.helper.changeStage("INITED"),this.fire("init")}var t=require("./lib"),n=require("underscore"),i=require("./main"),r=require("./Helper");e.prototype={constructor:e,ignoreStates:["disabled"],getCategory:function(){return"control"},initOptions:function(e){e=e||{},this.setProperties(e)},createMain:function(){if(!this.type)return document.createElement("div");var e=this.type.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()});return document.createElement(i.getConfig("customElementPrefix")+"-"+e.slice(1))},initStructure:function(){},initEvents:function(){},render:function(){if(this.helper.isInStage("INITED")){if(this.fire("beforerender"),this.domIDPrefix=this.viewContext.id,this.initStructure(),this.initEvents(),!this.main.id)this.main.id=this.helper.getId();if(this.main.setAttribute(i.getConfig("instanceAttr"),this.id),this.main.setAttribute(i.getConfig("viewContextAttr"),this.viewContext.id),this.helper.addPartClasses(),this.states)this.states="string"==typeof this.states?this.states.split(" "):this.states,n.each(this.states,this.addState,this)}if(this.repaint(),this.helper.isInStage("INITED"))this.helper.changeStage("RENDERED"),this.fire("afterrender")},repaint:function(e,t){if(!t||t.hasOwnProperty("disabled")){var n=this.disabled?"addState":"removeState";this[n]("disabled")}if(!t||t.hasOwnProperty("hidden")){var n=this.hidden?"addState":"removeState";this[n]("hidden")}},appendTo:function(t){if(t instanceof e)t=t.main;if(t.appendChild(this.main),this.helper.isInStage("NEW")||this.helper.isInStage("INITED"))this.render()},insertBefore:function(t){if(t instanceof e)t=t.main;if(t.parentNode.insertBefore(this.main,t),this.helper.isInStage("NEW")||this.helper.isInStage("INITED"))this.render()},dispose:function(){if(!this.helper.isInStage("DISPOSED"))this.helper.beforeDispose(),this.helper.dispose(),this.helper.afterDispose()},destroy:function(){var e=this.main;this.dispose(),t.removeNode(e)},get:function(e){var n=this["get"+t.pascalize(e)];if("function"==typeof n)return n.call(this);else return this[e]},set:function(e,n){var i=this["set"+t.pascalize(e)];if("function"==typeof i)return i.call(this,n);var r={};r[e]=n,this.setProperties(r)},isPropertyChanged:function(e,t,n){return n!==t},setProperties:function(e){if(!this.stage){if(e.hasOwnProperty("id"))this.id=e.id;if(e.hasOwnProperty("group"))this.group=e.group;if(e.hasOwnProperty("skin"))this.skin=e.skin}if(delete e.id,delete e.group,delete e.skin,e.hasOwnProperty("viewContext"))this.setViewContext(e.viewContext),delete e.viewContext;if(this.hasOwnProperty("disabled"))this.disabled=!!this.disabled;if(this.hasOwnProperty("hidden"))this.hidden=!!this.hidden;var n=[],i={};for(var r in e)if(e.hasOwnProperty(r)){var o=e[r],a="get"+t.pascalize(r)+"Property",s=this[a]?this[a]():this[r],u=this.isPropertyChanged(r,o,s);if(u){this[r]=o;var c={name:r,oldValue:s,newValue:o};n.push(c),i[r]=c}}if(n.length&&this.helper.isInStage("RENDERED"))this.repaint(n,i);return i},setViewContext:function(e){var t=this.viewContext;if(t!=e){if(t)this.viewContext=null,t.remove(this);this.viewContext=e,e&&e.add(this);var n=this.children;if(n)for(var r=0,o=n.length;o>r;r++)n[r].setViewContext(e);if(this.viewContext&&this.helper.isInStage("RENDERED"))this.main.setAttribute(i.getConfig("viewContextAttr"),this.viewContext.id)}},setDisabled:function(e){this[e?"disable":"enable"]()},disable:function(){this.addState("disabled")},enable:function(){this.removeState("disabled")},isDisabled:function(){return this.hasState("disabled")},show:function(){this.removeState("hidden")},hide:function(){this.addState("hidden")},toggle:function(){this[this.isHidden()?"show":"hide"]()},isHidden:function(){return this.hasState("hidden")},addState:function(e){if(!this.hasState(e)){this.currentStates[e]=!0,this.helper.addStateClasses(e);var t={},n=e.replace(/-(\w)/,function(e,t){return t.toUpperCase()});t[n]=!0,this.setProperties(t)}},removeState:function(e){if(this.hasState(e)){this.currentStates[e]=!1,this.helper.removeStateClasses(e);var t={},n=e.replace(/-(\w)/,function(e,t){return t.toUpperCase()});t[n]=!1,this.setProperties(t)}},toggleState:function(e){var t=this.hasState(e)?"removeState":"addState";this[t](e)},hasState:function(e){return!!this.currentStates[e]},addChild:function(e,t){if(t=t||e.childName,e.parent)e.parent.removeChild(e);if(this.children.push(e),e.parent=this,t)e.childName=t,this.childrenIndex[t]=e;if(this.viewContext!=e.viewContext)e.setViewContext(this.viewContext)},removeChild:function(e){for(var t=this.children,n=t.length;n--;)if(t[n]===e)t.splice(n,1);var i=e.childName;if(i)this.childrenIndex[i]=null;e.parent=null},disposeChildren:function(){for(var e=this.children.slice(),t=0;t<e.length;t++)e[t].dispose();this.children=[],this.childrenIndex={}},getChild:function(e){return this.childrenIndex[e]||null},getChildSafely:function(e){var t=this.getChild(e);if(!t){var n=require("./SafeWrapper");if(t=new n,t.childName=e,t.parent=this,this.viewContext)t.viewContext=this.viewContext}return t},initChildren:function(e,t){this.helper.initChildren(e,t)}};var o=require("mini-event/EventTarget");return t.inherits(e,o),e});
define(function(require){function e(){c.apply(this,arguments)}function t(){u.apply(this,arguments),this.layer=new e(this)}function n(){var e=this.getChild("monthView"),t=e.getRawValue();if(t)this.rawValue=t,r(this),this.fire("change")}function r(e){var t=e.helper.getPart("text");t.innerHTML=i.escape(e.getValue())}require("./MonthView");var i=require("underscore"),o=require("moment"),a=require("./lib"),s=require("./main"),u=require("./InputControl"),c=require("./Layer");return a.inherits(e,c),e.prototype.render=function(e){document.body.appendChild(e),e.innerHTML='<div data-ui-type="MonthView" data-ui-child-name="monthView"></div>';var t=this.control;t.helper.initChildren(e);var r=t.getChild("monthView");if(r.setProperties({rawValue:t.rawValue,range:t.range}),r.on("change",n,t),t.autoHideLayer)r.on("itemclick",i.bind(t.layer.toggle,t.layer))},e.prototype.toggle=function(){var e=this.getElement();if(!e||this.control.helper.isPart(e,"layer-hidden")){var t=this.control,n=t.getChild("monthView");n.setProperties({rawValue:t.rawValue,range:t.range}),this.show()}else this.hide()},t.prototype={type:"Calendar",initOptions:function(e){var t=new Date,n={range:{begin:new Date(1983,8,3),end:new Date(2046,10,4)},dateFormat:"YYYY-MM-DD",paramFormat:"YYYY-MM-DD",rawValue:t,autoHideLayer:!1};if("false"===e.autoHideLayer)e.autoHideLayer=!1;if(i.extend(n,e),a.isInput(this.main))this.helper.extractOptionsFromInput(this.main,n);if(this.paramFormat=n.paramFormat,n.value)n.rawValue=this.parseValue(n.value);var r=n.range;if("string"==typeof r){var o=r.split(","),s=this.parseValue(o[0]),u=this.parseValue(o[1]);n.range={begin:s,end:u}}this.setProperties(n)},initStructure:function(){if(a.isInput(this.main))this.helper.replaceMain();var e=['<div class="${classes}" id="${id}">${value}</div>','<div class="${arrow}"></div>'];this.main.innerHTML=a.format(e.join(""),{classes:this.helper.getPartClassName("text"),id:this.helper.getId("text"),arrow:this.helper.getPartClassName("arrow")})},initEvents:function(){this.helper.addDOMEvent(this.main,"click",i.bind(this.layer.toggle,this.layer))},repaint:require("./painters").createRepaint(u.prototype.repaint,{name:["rawValue","range"],paint:function(e,t,n){if(!e.disabled&&!e.readOnly){r(e);var i=e.getChild("monthView");if(i)i.setProperties({rawValue:t,range:n})}}},{name:["disabled","hidden","readOnly"],paint:function(e,t,n,r){if(t||n||r)e.layer.hide()}}),setRange:function(e){this.setProperties({range:e})},stringifyValue:function(e){return o(e).format(this.dateFormat)||""},parseValue:function(e){var t=o(e,this.paramFormat).toDate();return t},dispose:function(){if(!this.helper.isInStage("DISPOSED")){if(this.layer)this.layer.dispose(),this.layer=null;u.prototype.dispose.apply(this,arguments)}}},a.inherits(t,u),s.register(t),t});
define(function(require){function e(){S.apply(this,arguments)}function t(e,t){var n=new Date(e),i=new Date,r=e.split(" ")[0],o=null;if(n+""=="Invalid Date"){if(-1===i.toJSON().indexOf(r))o=new Date(r+" 23:59:59");else o=new Date;if("begin"===t)o=new Date(r+" 00:00:00")}else o=n;return o}function n(e,t){e.view.begin=t.begin,e.view.end=t.end,e.value=e.convertToParam(t),g(e,"begin",t.begin),g(e,"end",t.end);var n=h(e,e.view);d(e,n);var i;if(!t.end)i=!0;else i=!1;e.setProperties({isEndless:i})}function i(t){this.now=new Date,P.apply(this,arguments),this.layer=new e(this)}function r(e){var t='<div class="${shortCutClass}" id="${shortcutId}">${shortCut}</div><div class="${bodyClass}">${beginCalendar}${endCalendar}</div><div class="${footClass}"><div class="${okBtnClass}" data-ui="type:Button;childName:okBtn;">确定</div><div class="${cancelBtnClass}" data-ui="type:Button;childName:cancelBtn;">取消</div></div><div data-ui="type:Button;childName:closeBtn;skin:layerClose;height:12;">X</div>';return x.format(t,{bodyClass:e.helper.getPartClassName("body"),shortcutId:e.helper.getId("shortcut"),shortCutClass:e.helper.getPartClassName("shortcut"),shortCut:l(e),beginCalendar:u(e,"begin"),endCalendar:u(e,"end"),footClass:e.helper.getPartClassName("foot"),okBtnClass:e.helper.getPartClassName("okBtn"),cancelBtnClass:e.helper.getPartClassName("cancelBtn")})}function o(e){return k(e).startOf("day").toDate()}function a(e){return k(e).endOf("day").toDate()}function s(e,t){var n=e.range,i=t.getValue.call(e);if(o(n.begin)>o(n.begin)||a(i.end)<a(i.end))return!0;else return!1}function l(e){for(var t=e.shownShortCut.split(","),n={},i=0;i<t.length;i++)n[t[i]]=!0;for(var r='<span data-index="${shortIndex}" class="'+e.helper.getPartClassName("shortcut-item")+' ${shortClass}" id="${shortId}">${shortName}</span>',o=e.shortCutItems,a=o.length,l=[],u=0;a>u;u++){var c=o[u];if(n[c.name]){var f=c.name,h=[];if(0===u)h=h.concat(e.helper.getPartClasses("shortcut-item-first"));var p=s(e,c);if(p)h=h.concat(e.helper.getPartClasses("shortcut-item-disabled"));var d=e.helper.getId("shortcut-item"+u);l.push(x.format(r,{shortIndex:u,shortClass:h.join(" "),shortId:d,shortName:f}))}}return l.join("")}function u(e,t){var n="";if(e.endlessCheck&&"end"===t)n='<input type="checkbox" title="不限结束" data-ui-type="CheckBox" data-ui-child-name="endlessCheck" />';var i='<div class="${frameClass}"><div class="${labelClass}"><h3>${labelTitle}</h3>'+n+'</div><div class="${calClass}"><div data-ui="type:MonthView;childName:${calName}"></div></div></div>';return x.format(i,{frameClass:e.helper.getPartClassName(t),labelClass:e.helper.getPartClassName("label"),labelTitle:"begin"===t?"开始日期":"结束日期",titleId:e.helper.getId(t+"Label"),calClass:e.helper.getPartClassName(t+"-cal"),calName:t+"Cal"})}function c(e){var t=e.getChild("endCal"),n=e.helper.getPart("shortcut");if(this.isChecked())e.isEndless=!0,t.disable(),e.view.end=null,e.helper.addPartClasses("shortcut-disabled",n);else e.isEndless=!1,t.enable(),m.apply(e,[t,"end"]),e.helper.removePartClasses("shortcut-disabled",n)}function f(e,t){if(!e&&t||e&&!t)return!1;else if(!e&&!t)return!0;return k(e).isSame(t,"day")}function h(e,t){for(var n=e.shortCutItems,i=n.length,r=0;i>r;r++){var o=n[r],a=o.getValue.call(e);if(f(t.begin,a.begin)&&f(t.end,a.end))return r}return-1}function p(e,t){var n=e,i=e.shortCutItems;if(!(0>t||t>=i.length)){var r=i[t].getValue.call(n),o=r.begin,a=r.end;e.view={begin:o,end:a},g(e,"begin",o),g(e,"end",a),d(n,t)}}function d(e,t){var n=e.shortCutItems,i=e.miniMode;if(null!==i&&i!==t)e.helper.removePartClasses("shortcut-item-selected",e.helper.getPart("shortcut-item"+i));if(e.miniMode=t,t>=0)e.helper.addPartClasses("shortcut-item-selected",e.helper.getPart("shortcut-item"+t)),e.curMiniName=n[t].name;else e.curMiniName=null}function g(e,t,n,i){var r=e.getChild(t+"Cal");if(r)if(r.setProperties({rawValue:n,range:e.range}),i===!0)r.on("change",I.bind(m,e,r,t))}function v(e){if(!this.isEndless)for(var t=e.target||e.srcElement,n=this.helper.getPartClasses("shortcut-item"),i=this.helper.getPartClasses("shortcut-item-disabled");t&&t!==document.body;){if(x.hasClass(t,n[0])&&!x.hasClass(t,i[0])){var r=t.getAttribute("data-index");return void p(this,r)}t=t.parentNode}}function m(e,t){var n=e.getRawValue();if(n){var i=this.view[t];i.setFullYear(n.getFullYear()),i.setMonth(n.getMonth()),i.setDate(n.getDate());var r=h(this,this.view);d(this,r)}}function y(e){var t=e,n=e.view,i=n.begin,r=n.end;if(e.isEndless)r=null;var o=r-i;if(!r)o=i;var a;if(o>0)a={begin:i,end:r};else if(null!==r)a={begin:r,end:i};var s=t.fire("beforechange",{value:a});if(s.isDefaultPrevented())return!1;else return t.rawValue=a,t.value=t.convertToParam(a),w(t,a),t.layer.hide(),void t.fire("change",a)}function w(e,t){var n=e.helper.getPart("text");n.innerHTML=b(e,t)}function b(e,t){var n=C(e,t);if(e.isEndless&&n)return n;if(!e.curMiniName&&null!==e.miniMode&&e.miniMode>=0&&e.miniMode<e.shortCutItems.length)e.curMiniName=e.shortCutItems[e.miniMode].name;if(n)return n;else return""}function C(e,t){t=t||e.getRawValue();var n=t.begin,i=t.end,r=e.dateFormat,o="";if(n&&i){o=k(n).format(r);var a=k(i).format(r);return o=o.split(" ")[0]+("YYYY-MM-DD"===r?"":'<span data-type="begin">'+o.split(" ")[1])+"</span>",a=a.split(" ")[0]+("YYYY-MM-DD"===r?"":'<span data-type="end">'+a.split(" ")[1])+"</span>",o+" 至 "+a}else if(!i)return o=k(n).format(r),o=o.split(" ")[0]+"<span>"+o.split(" ")[1]+"</span>",o+" 起 ";return""}require("./Button"),require("./MonthView"),require("./CheckBox"),require("./Label");var x=require("./lib"),P=require("./InputControl"),E=require("./controlHelper"),S=require("./Layer"),T=require("./main"),k=require("moment"),I=require("underscore"),M=require("jquery");return x.inherits(e,S),e.prototype.render=function(e){var t=this.control;document.body.appendChild(e),e.innerHTML=r(t),t.helper.initChildren(e);var n=t.helper.getPart("shortcut");E.addDOMEvent(t,n,"click",v),g(t,"begin",t.view.begin,!0),g(t,"end",t.view.end,!0);var i=h(t,t.view);d(t,i);var o=t.getChild("endlessCheck");if(o)if(o.on("change",x.curry(c,t)),t.isEndless)o.setChecked(!0),t.helper.addPartClasses("shortcut-disabled",t.helper.getPart(t));var a=t.getChild("okBtn");a.on("click",x.curry(y,t));var s=t.getChild("cancelBtn");s.on("click",I.bind(t.layer.hide,t.layer));var l=t.getChild("closeBtn");l.on("click",I.bind(t.layer.hide,t.layer))},e.prototype.toggle=function(e){var i=e.target||e.srcElement,r=this.control;if("SPAN"===i.nodeName&&this.control.dateFormat.split(" ")){var o=M(i).attr("data-type"),a=M('<input data-ui="childName:timeInput" data-type=" '+o+'" value="'+M(i).text()+'">').attr("data-oldTime",M(i).text());return M(i).replaceWith(a),a.bind("change",function(){var e=r.getRawValue(),n="";if("begin"===o)n=r.value.split(",")[0]+" "+a.val(),e.begin=t(n,"begin"),r.view.begin=e.begin;else if("end"===o)n=r.value.split(",")[1]+" "+a.val(),e.end=t(n,"end"),r.view.end=e.end;r.setRawValue(e),y(r)}),!1}else if("INPUT"===i.nodeName)return!1;var s=this.getElement();if(!s||this.control.helper.isPart(s,"layer-hidden"))n(r,r.rawValue),this.show();else this.hide()},i.prototype.convertToParam=function(e){var t=e.begin,n=e.end,i=[];if(i.push(k(t).format("YYYY-MM-DD")),n)i.push(k(n).format("YYYY-MM-DD"));return i.join(",")},i.prototype.convertToRaw=function(e){var t=e.split(",");if(1===t.length)t.push("2046-11-04");else if(""===t[0])t[0]="1983-09-03";else if(""===t[1])t[1]="2046-11-04";return{begin:k(t[0],"YYYY-MM-DD").toDate(),end:k(t[1],"YYYY-MM-DD").toDate()}},i.defaultProperties={dateFormat:"YYYY/MM/DD",endlessCheck:!1,shortCutItems:[{name:"昨天",value:0,getValue:function(){var e=new Date(this.now.getTime());return e.setDate(e.getDate()-1),{begin:e,end:e}}},{name:"最近7天",value:1,getValue:function(){var e=k(this.now);return{begin:e.clone().subtract("day",7).toDate(),end:e.clone().subtract("day",1).toDate()}}},{name:"上周",value:2,getValue:function(){var e=this.now,t=new Date(e.getTime()),n=new Date(e.getTime()),i=1;if(t.getDay()<i%7)t.setDate(t.getDate()-14+i-t.getDay());else t.setDate(t.getDate()-7-t.getDay()+i%7);return t.setHours(0,0,0,0),n.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()+6),n.setHours(0,0,0,0),{begin:t,end:n}}},{name:"本月",value:3,getValue:function(){return{begin:k(this.now).startOf("month").toDate(),end:k(this.now).toDate()}}},{name:"上个月",value:4,getValue:function(){var e=k(this.now).subtract("month",1).startOf("month").toDate(),t=k(this.now).startOf("month").subtract("day",1).toDate();return{begin:e,end:t}}},{name:"上个季度",value:5,getValue:function(){var e=this.now,t=k(e).subtract("month",e.getMonth()%3+3).startOf("month").toDate(),n=k(e).subtract("month",e.getMonth()%3).startOf("month").subtract("day",1).toDate();return{begin:t,end:n}}}]},i.prototype.type="RangeCalendar",i.prototype.initOptions=function(e){var t=this.now,n={begin:t,end:t},r={range:{begin:new Date(1983,8,3),end:new Date(2046,10,4)},rawValue:n,view:I.clone(n),value:this.convertToParam(n),shownShortCut:"昨天,最近7天,上周,本月,上个月,上个季度"};if(x.extend(r,i.defaultProperties),E.extractValueFromInput(this,e),e.value)e.rawValue=this.convertToRaw(e.value),e.view={begin:e.rawValue.begin,end:e.rawValue.end},e.miniMode=null;else if(e.rawValue)e.miniMode=null;else if(!e.rawValue&&null!=e.miniMode){var o=r.shortCutItems[e.miniMode];if(o)e.rawValue=o.getValue.call(this),e.miniMode=parseInt(e.miniMode,10);else e.miniMode=null}if(x.extend(r,e),r.range&&"string"==typeof r.range)r.range=this.convertToRaw(r.range);if("false"===r.endlessCheck)r.endlessCheck=!1;if(r.endlessCheck){if("false"===r.isEndless)r.isEndless=!1}else if(!r.rawValue.end)r.endlessCheck=!0,r.isEndless=!0;if(r.isEndless)r.endlessCheck=!0,r.rawValue.end=null,r.view.end=null,r.view.value=this.convertToParam({begin:t,end:null});this.setProperties(r)},i.prototype.initStructure=function(){if(x.isInput(this.main))E.replaceMain(this);var e=['<div class="${className}" id="${id}"></div>','<div class="${arrow}"></div>'];this.main.innerHTML=x.format(e.join("\n"),{className:this.helper.getPartClassName("text"),id:E.getId(this,"text"),arrow:this.helper.getPartClassName("arrow")})},i.prototype.initEvents=function(){this.helper.addDOMEvent(this.main,"mousedown",I.bind(this.layer.toggle,this.layer))},i.prototype.repaint=E.createRepaint(P.prototype.repaint,{name:["rawValue","range"],paint:function(e,t,i){if(i){if("string"==typeof i)i=e.convertToRaw(i);if(!i.begin)i.begin=new Date(1983,8,3);else if(!i.end)i.end=new Date(2046,10,4);e.range=i}if(t)w(e,t);if(e.layer)n(e,t)}},{name:["disabled","hidden","readOnly"],paint:function(e,t,n,i){if(t||n||i)e.layer.hide()}},{name:"isEndless",paint:function(e,t){if(!e.endlessCheck)e.isEndless=!1;else{var n=e.getChild("endlessCheck");if(n)n.setChecked(t)}}}),i.prototype.setRawValue=function(e){this.setProperties({rawValue:e})},i.prototype.getRawValue=function(){return this.rawValue},i.prototype.stringifyValue=function(e){return this.convertToParam(e)||""},i.prototype.parseValue=function(e){return this.convertToRaw(e)},i.prototype.dispose=function(){if(!E.isInStage(this,"DISPOSED")){if(this.layer)this.layer.dispose(),this.layer=null;P.prototype.dispose.apply(this,arguments)}},x.inherits(i,P),T.register(i),i});
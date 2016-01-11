define(function(require){function e(e){$.apply(this,arguments)}function t(e){for(var t=e.viewRange||e.range,n=[],i=t.end.getFullYear(),r=t.begin.getFullYear();i>=r;r++)n.push({text:r,value:r});return n}function n(e,t){var n=e.viewRange||e.range,i=[],r=11,o=0;if(t==n.begin.getFullYear())o=n.begin.getMonth();if(t==n.end.getFullYear())r=n.end.getMonth();for(;r>=o;o++)i.push({text:o+1,value:o});return i}function i(e){var t=['<div class="${headClass}"><table><tr>','<td width="40" align="left">','<div class="${monthBackClass}"',' data-ui-type="Button"',' data-ui-child-name="monthBack"',' data-ui-id="${monthBackId}"',"></div>","</td>","<td>",'<div class="${yearSelectClass}"',' data-ui="type:Select;childName:yearSel;',' id:${yearSelId};"></div>',"</td>","<td>",'<div class="${monthSelectClass}"',' data-ui="type:Select;childName:monthSel;',' id:${monthSelId};"></div>',"</td>",'<td width="40" align="right">','<div class="${monthForClass}"',' data-ui-type="Button"',' data-ui-child-name="monthForward"',' data-ui-id="${monthForwardId}"',"></div>","</td>","</tr></table></div>",'<div id="${monthMainId}" class="${monthMainClass}"></div>'];return t=t.join(""),q.format(t,{headClass:e.helper.getPartClassName("head"),monthBackId:e.helper.getId("monthBack"),monthForwardId:e.helper.getId("monthForward"),yearSelId:e.helper.getId("yearSel"),monthSelId:e.helper.getId("monthSel"),monthMainId:e.helper.getId("monthMain"),monthMainClass:e.helper.getPartClassName("month"),monthBackClass:e.helper.getPartClassName("month-back"),monthForClass:e.helper.getPartClassName("month-forward"),yearSelectClass:e.helper.getPartClassName("year-select"),monthSelectClass:e.helper.getPartClassName("month-select")})}function r(e){var t=[];if("multi"===e.mode)t.push("");t=t.concat(["一","二","三","四","五","六","日"]);var n='<table border="0" cellpadding="0" cellspacing="0" class="${className}"><thead><tr>',i=[];i.push(q.format(n,{className:e.helper.getPartClassName("month-main")}));for(var r='<td id="${id}" data-index="${index}" class="${className}">${text}</td>',a=e.helper.getPartClassName("month-title"),s=e.helper.getId("month-title"),u=e.helper.getPartClassName("month-select-all"),l=t.length,c=0;l>c;c++)i.push(q.format(r,{className:""===t[c]?u:a,text:t[c],index:c,id:s+"-"+c}));i.push("</tr></thead><tbody><tr>");var f='<td data-year="${year}" data-month="${month}" data-date="${date}" class="${className}" id="${id}">${date}</td>',h=e.helper.getPartClassName("month-row-select"),p=e.helper.getId("row-select"),d=0,v='<td id="${id}" class="'+h+'">&gt;</td>',g=0,m=e.year,y=e.month,w=new Date(m,y,1),b=new Date(m,y+1,1),C=1-(w.getDay()+6)%7;w.setDate(C);var x=e.helper.getPartClassName("month-item"),P=e.helper.getPartClassName("month-item-today"),E=e.helper.getPartClassName("month-item-virtual"),S=e.helper.getPartClassName("month-item-disabled"),T=e.range;if("multi"===e.mode)i.push(q.format(v,{id:p+"-"+d++}));for(;b-w>0||g%7!==0;){if(C>1&&g%7===0)if(i.push("</tr><tr>"),"multi"===e.mode)i.push(q.format(v,{id:p+"-"+d++}));var O=w.getMonth()!=y,k=!1;if(w<T.begin)k=!0;else if(w>T.end)k=!0;var A=x;if(O)A+=" "+E;else if(H().isSame(w,"day"))A+=" "+P;if(k)A+=" "+S;i.push(q.format(f,{year:w.getFullYear(),month:w.getMonth(),date:w.getDate(),className:A,id:o(e,w)})),w=new Date(m,y,++C),g++}return e.rowTagNum=d,i.push("</tr></tbody></table>"),i.join("")}function o(e,t){return e.helper.getId(t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate())}function a(e){for(var t=e.target||e.srcElement,n=B.getPartClasses(this,"month-select-all"),i=B.getPartClasses(this,"month-title"),r=B.getPartClasses(this,"month-item"),o=B.getPartClasses(this,"month-row-select"),a=B.getPartClasses(this,"month-item-virtual"),s=B.getPartClasses(this,"month-item-disabled");t&&t!=document.body;){if(q.hasClass(t,r[0])&&!q.hasClass(t,a[0])&&!q.hasClass(t,s[0]))return void E(this,t);else if("multi"===this.mode){if(q.hasClass(t,o[0]))return void g(this,t);if(q.hasClass(t,i[0]))return void h(this,t);if(q.hasClass(t,n[0]))return void y(this)}t=t.parentNode}}function s(e){var t=e.rawValue;e.viewValue={};for(var n=0;n<t.length;n++){var i=t[n],r=i.getFullYear(),o=i.getMonth(),a=i.getDate(),s=r+"-"+o+"-"+a;e.viewValue[s]={isSelected:!0,value:new Date(r,o,a)}}}function u(e,t){var n=B.getPartClasses(e,"month-item-virtual"),i=B.getPartClasses(e,"month-item-disabled");if(!q.hasClass(t,n[0])&&!q.hasClass(t,i[0]))return 1;else if(q.hasClass(t,n[0])&&!q.hasClass(t,i[0]))return-1;return 0}function l(e,t,n){if(B.removePartClasses(e,"month-row-select-selected",t),n)B.addPartClasses(e,"month-row-select-selected",t)}function c(e){for(var t=e.rowTagNum,n=B.getId(e,"row-select"),i=0;t>i;i++){var r=q.g(n+"-"+i);f(e,r)}}function f(e,t){for(var n=B.getPartClasses(e,"month-item-selected"),i=t.nextSibling,r=!0,o=0;i;){if(1===u(e,i))if(++o,!q.hasClass(i,n[0])){r=!1;break}i=i.nextSibling}if(0===o)r=!1;l(e,t,r)}function h(e,t){var n=t.getAttribute("data-index"),i=B.getPartClasses(e,"month-title-selected"),r=!0;if(q.hasClass(t,i[0]))r=!1,B.removePartClasses(e,"month-title-selected",t);else B.addPartClasses(e,"month-title-selected",t);for(var o=e.rowTagNum,a=B.getId(e,"row-select"),s=e.viewValue,l=[],f=0;o>f;f++){var h=q.g(a+"-"+f),p=h.parentNode.children[n];if(1===u(e,p)){var d=p.getAttribute("data-date"),v=p.getAttribute("data-month"),g=p.getAttribute("data-year"),y=g+"-"+v+"-"+d;s[y]={isSelected:r,value:new Date(g,v,d)},l.push(y)}}if(l&&l.length>0)w(e),b(e,l,r),c(e),m(e)}function p(e,t,n){if(B.removePartClasses(e,"month-title-selected",t),n)B.addPartClasses(e,"month-title-selected",t)}function d(e){for(var t=B.getId(e,"month-title"),n=1;7>=n;n++){var i=q.g(t+"-"+n);v(e,i)}}function v(e,t){for(var n=B.getPartClasses(e,"month-item-selected"),i=t.getAttribute("data-index"),r=!0,o=0,a=e.rowTagNum,s=B.getId(e,"row-select"),l=0;a>l;l++){var c=q.g(s+"-"+l),f=c.parentNode.children[i];if(1===u(e,f))if(++o,!q.hasClass(f,n[0])){r=!1;break}}if(0===o)r=!1;p(e,t,r)}function g(e,t){var n=t.parentNode,i=B.getPartClasses(e,"month-row-select"),r=B.getPartClasses(e,"month-row-select-selected"),o=B.getPartClasses(e,"month-item-virtual"),a=B.getPartClasses(e,"month-item-disabled"),s=!0;if(q.hasClass(t,r[0]))s=!1,B.removePartClasses(e,"month-row-select-selected",t);else B.addPartClasses(e,"month-row-select-selected",t);for(var u=n.children,l=e.viewValue,c=[],f=0;f<u.length;f++){var h=u[f];if(1===h.nodeType&&!q.hasClass(h,i[0])&&!q.hasClass(h,o[0])&&!q.hasClass(h,a[0])){var p=h.getAttribute("data-date"),v=h.getAttribute("data-month"),g=h.getAttribute("data-year"),y=g+"-"+v+"-"+p;l[y]={isSelected:s,value:new Date(g,v,p)},c.push(y)}}if(c&&c.length>0)w(e),b(e,c,s),d(e),m(e)}function m(e){for(var t=e.rowTagNum,n=B.getId(e,"row-select"),i=q.g(B.getId(e,"month-title-0")),r=B.getPartClasses(e,"month-row-select-selected"),o=0,a=0;t>a;a++){var s=q.g(n+"-"+a);if(q.hasClass(s,r[0]))o++}if(o===t)B.addPartClasses(e,"month-select-all-selected",i);else B.removePartClasses(e,"month-select-all-selected",i)}function y(e){for(var t=e.rowTagNum,n=B.getId(e,"row-select"),i=0;t>i;i++){var r=q.g(n+"-"+i);B.removePartClasses(e,"month-row-select-selected",r),g(e,r)}}function w(e){var t=[];for(var n in e.viewValue)if(e.viewValue[n].isSelected)t.push(e.viewValue[n].value);t.sort(function(e,t){return e-t}),e.rawValue=t,e.fire("change")}function b(e,t,n){if(n)x(e,t);else C(e,t)}function C(e,t){for(var n=e,i=0;i<t.length;i++){var r=B.getId(e,t[i]),o=q.g(r);if(o)q.removeClasses(o,B.getPartClasses(n,"month-item-selected"))}}function x(e,t){for(var n=e,i=0;i<t.length;i++){var r=B.getId(e,t[i]),o=q.g(r);if(o)q.addClasses(o,B.getPartClasses(n,"month-item-selected"))}}function P(e,t,n){if(!t)return!1;var i=B.getPartClasses(e,n);if(q.hasClass(t,i[0]))return B.removePartClasses(e,n,t),!1;else return B.addPartClasses(e,n,t),!0}function E(e,t){var n=t.getAttribute("data-date"),i=t.getAttribute("data-month"),r=t.getAttribute("data-year"),o=r+"-"+i+"-"+n;if("multi"===e.mode){var a=P(e,t,"month-item-selected");e.viewValue[o]={isSelected:a,value:new Date(r,i,n)},w(e);var s=t.parentNode.firstChild;f(e,s),d(e),m(e)}else{var u=B.getPartClasses(e,"month-item-selected");if(q.hasClass(t,u[0]))return;var l=new Date(r,i,n);O(e,e.rawValue,l),e.rawValue=l,e.fire("change"),e.fire("itemclick")}}function S(e,t,n){var i=e,r=i.viewRange||i.range,o=12*r.begin.getFullYear()+r.begin.getMonth(),a=12*r.end.getFullYear()+r.end.getMonth(),s=12*t+n,u=new Date(t,n,1);if(n=u.getMonth(),o-s>0)n+=o-s;else if(s-a>0)n-=s-a;return u.setMonth(n),n=u.getMonth(),t=u.getFullYear(),{year:t,month:n}}function T(e,n,i){if(null==n)n=e.year;if(null==i)i=e.month;var r=e,o=S(r,n,i);r.month=o.month,r.year=o.year;var a=r.getChild("yearSel"),s=a.getValue();if(a.setProperties({datasource:t(r),value:r.year}),s==r.year)a.fire("change")}function O(e,t,n){if(t!==n){if(t){var i=q.g(o(e,t));if(i)P(e,i,"month-item-selected")}var r=q.g(o(e,n));if(r)if(u(e,r))P(e,r,"month-item-selected");else return e.rawValue=null,null}return n}function k(e){var t=new Date(e.year,e.month,1),n=H(t).add("month",1);T(e,n.year(),n.month())}function A(e){var t=new Date(e.year,e.month,1),n=H(t).subtract("month",1);T(e,n.year(),n.month())}function I(e,t){var i=parseInt(t.getValue(),10);e.year=i;var r=e.month,o=S(e,i,r);r=o.month,e.month=r;var a=e.getChild("monthSel"),s=a.setProperties({datasource:n(e,e.year),value:e.month});if(!s.hasOwnProperty("rawValue"))M(e,a);e.fire("changeyear")}function M(e,t){var n=parseInt(t.getValue(),10);e.month=n,N(e),e.fire("changemonth")}function N(e){var t=B.getId(e,"monthMain"),n=q.g(t);n.innerHTML=r(e);var i=n.getElementsByTagName("tr"),o=i[i.length-1];B.addPartClasses(e,"last-row",o),L(e)}function D(e){var t,n;if("string"==typeof e){var i=e.split(",");t=V(i[0]),n=V(i[1])}else t=e.begin,n=e.end;if(t>n)return{begin:n,end:t};else return{begin:t,end:n}}function V(e){function t(e){var t=e.split("-");if(t)return new Date(parseInt(t[0],10),parseInt(t[1],10)-1,parseInt(t[2],10));else return null}e+="";var n=e.split(" "),i=t(n[0]);if(n[1]){var r=n[1].split(":");i.setHours(r[0]),i.setMinutes(r[1]),i.setSeconds(r[2])}return i}function R(e,t){if("single"===t)return V(e);else{for(var n=e.split(","),i=[],r=0;r<n.length-1;r+=2){var o,a=V(n[r]),s=V(n[r+1]);if(a&&s)if(a-s===0)i.push(a);else for(o=a;s>=o;)i.push(o),o=new Date(o.getFullYear(),o.getMonth(),o.getDate()+1);else;}return i}}function L(e){if("multi"===e.mode){var t=e.viewValue;for(var n in t){var i=q.g(B.getId(e,n));if(i){var r=u(e,i);if(1===r)if(t[n].isSelected)B.addPartClasses(e,"month-item-selected",i);else B.removePartClasses(e,"month-item-selected",i);else if(0===r)t[n].isSelected=!1,w(e)}}c(e),d(e),m(e)}else O(e,null,e.rawValue)}require("./Button"),require("./Select"),require("./Panel");var q=require("./lib"),B=require("./controlHelper"),$=require("./Control"),F=require("./main"),H=require("moment");return e.prototype={type:"MonthView",initOptions:function(e){var t={range:{begin:new Date(1982,10,4),end:new Date(2046,10,4)},dateFormat:"YYYY-MM-DD",paramFormat:"YYYY-MM-DD",viewValue:{},mode:"single"};q.extend(t,e),this.setProperties(t)},setProperties:function(e){if(e.range)e.range=D(e.range);var t=new Date,n=e.mode||this.mode;if(null==e.rawValue)if(e.value)e.rawValue=R(e.value,n);else if(null==this.rawValue)if("single"===n)e.rawValue=t;else e.rawValue=[];var i=e.year,r=e.month;if(!i&&null==r)if("single"===n){if(e.rawValue)i=e.rawValue.getFullYear(),r=e.rawValue.getMonth()+1}else i=t.getFullYear(),r=t.getMonth()+1;if(i&&r)e.year=parseInt(i,10),e.month=parseInt(r,10)-1;else if(e.hasOwnProperty("year")){if(null==this.month)delete e.year}else if(e.hasOwnProperty("month"))if(null==this.year)delete e.month;else e.month=parseInt(r,10)-1;var o=$.prototype.setProperties.apply(this,arguments);if(o.hasOwnProperty("rawValue"))this.fire("change");return o},initStructure:function(){if(this.main.innerHTML=i(this),this.initChildren(this.main),"multi"===this.mode)this.addState("multi-select")},initEvents:function(){var e=this.getChild("monthBack");e.on("click",q.curry(A,this));var t=this.getChild("monthForward");t.on("click",q.curry(k,this));var n=this.getChild("monthSel");n.on("change",q.curry(M,this,n));var i=this.getChild("yearSel");i.on("change",q.curry(I,this,i));var r=this.helper.getPart("monthMain");B.addDOMEvent(this,r,"click",a)},repaint:B.createRepaint($.prototype.repaint,{name:["range","rawValue","year","month"],paint:function(e,t,n,i,r){if(n)if("multi"===e.mode)s(e);T(e,e.year,e.month)}},{name:"disabled",paint:function(e,t){var n=e.getChild("monthBack");n.setProperties({disabled:t});var i=e.getChild("monthForward");i.setProperties({disabled:t});var r=e.getChild("monthSel");r.setProperties({disabled:t});var o=e.getChild("yearSel");o.setProperties({disabled:t})}}),disable:function(){this.setProperties({disabled:!0}),this.addState("disabled")},enable:function(){this.setProperties({disabled:!1}),this.removeState("disabled")},setRange:function(e){this.setProperties({range:e})},setRawValue:function(e){this.setProperties({rawValue:e})},getRawValue:function(){return this.rawValue},getValue:function(){return this.stringifyValue(this.rawValue)},stringifyValue:function(e){if("single"===this.mode)return q.date.format(e,this.paramFormat)||"";else{for(var t=[],n=864e5,i=0;i<e.length;i++)if(0===i)t.push(q.date.format(e[i],this.paramFormat));else if(e[i]-e[i-1]>n)t.push(q.date.format(e[i-1],this.paramFormat)),t.push(q.date.format(e[i],this.paramFormat));else if(i==e.length-1)t.push(q.date.format(e[i],this.paramFormat));else continue;return t.join(",")}},parseValue:function(e){return R(e,this.mode)},setRawValueWithoutFireChange:function(e){this.rawValue=e,s(this)}},q.inherits(e,$),F.register(e),e});
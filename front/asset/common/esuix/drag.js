define(function(require){function e(e,t,n){if(n)o.addDOMEvent(e,t,"selectstart",function(e){e.preventDefault()});else o.removeDOMEvent(e,t,"selectstart")}function t(e,t){for(var n=1,i=arguments.length;i>n;n++)if(t=arguments[n]){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]}else;return e}function n(e,n){return n.moveHandler=function(i){a.event.getMousePosition(i);var r=(i.pageX-n.x)/n.width+n.offsetX,o=(i.pageY-n.y)/n.height+n.offsetY,s=t({},i);if(s.left=r=Math.min(Math.max(0,r),1),s.top=o=Math.min(Math.max(0,o),1),s.x=i.pageX-n.x,s.y=i.pageY-n.y,s.width=n.width,s.height=n.height,!e.ondragmove||e.ondragmove.call(this,s)!==!1){var l=n.target;l.style.left=100*r+"%",l.style.top=100*o+"%"}},n.moveHandler}function i(t,n){return n.endHandler=function(i){if(o.removeDOMEvent(this,document,"mousemove",n.moveHandler),o.removeDOMEvent(this,document,"mouseup",n.endHandler),e(this,document,!1),n.target=null,t.ondragend)t.ondragend.call(this,i)},n.endHandler}function r(r){return function(s){if(1===s.button||1===s.which){e(this,document,!0);var l=s.target||s.srcElement,u=l.offsetParent.clientWidth,d=l.offsetParent.clientHeight,c=l.offsetLeft;if(!isNaN(parseFloat(a.getStyle(l,"margin-left"))))c-=parseFloat(a.getStyle(l,"margin-left"));var f=l.offsetTop;if(!isNaN(parseFloat(a.getStyle(l,"margin-top"))))f-=parseFloat(a.getStyle(l,"margin-top"));a.event.getMousePosition(s);var h={x:s.pageX,y:s.pageY,offsetX:c/u,offsetY:f/d,target:l,width:u,height:d};if(o.addDOMEvent(this,document,"mousemove",n(r,h)),o.addDOMEvent(this,document,"mouseup",i(r,h)),r.ondragstart)r.ondragstart.call(this,t({},s,h))}}}var a=require("esui/lib"),o=require("esui/controlHelper");return function(e,t,n){o.addDOMEvent(e,t,"mousedown",r(n))}});
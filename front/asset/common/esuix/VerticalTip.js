define(function(require){function e(){n.apply(this,arguments)}var t=(require("underscore"),require("esui/lib")),n=require("esui/TipLayer"),i=require("esui/controlHelper");return e.prototype.type="VerticalTipLayer",e.prototype.autoPosition=function(e,n){var r=this,a=this.main;n=n||{left:"right",top:"top"};var o=e.getBoundingClientRect(),s=t.getOffset(e),l={top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.right-o.left,height:o.bottom-o.top},u=a.style.display;a.style.display="block";var d=a.offsetHeight,c=a.offsetWidth;a.style.display="none";var f=t.clone(n),h=t.page.getViewWidth(),p=t.page.getViewHeight(),m=l.right-l.width-c,g=h-l.left-c,v=p-l.bottom-d,y=l.top-d;if(g>=0)if(m>=0){if(!f.right&&!f.left)if(m>g)f.left=null,f.right="right";else f.left="left",f.right=null}else f.left="left",f.right=null;else f.left=null,f.right="right";if(v>=0)if(v>=0){if(!f.bottom&&!f.top)if(v>y)f.top="bottom",f.bottom=null;else f.top=null,f.bottom="top"}else f.top="bottom",f.bottom=null;else f.top=null,f.bottom="top";var _,b={};if(f.right)if(b.left=s.right-c,f.top)_="lt";else _="lb";else if(f.left)if(b.left=s.left,f.top)_="rt";else _="rb";if(f.top)b.top=s.bottom;else if(f.bottom)b.top=s.top-d;a.style.display=u,a.className=""+i.getPartClasses(r).join(" ")+" "+i.getPartClasses(r,_).join(" ");var x=t.g(i.getId(r,"arrow"));if(x)x.className=""+i.getPartClasses(r,"arrow").join(" ")+" "+i.getPartClasses(r,"arrow-"+_).join(" ");r.renderLayer(a,b)},t.inherits(e,n),require("esui/main").register(e),e});
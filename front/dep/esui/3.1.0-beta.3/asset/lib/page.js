define(function(require){var e=document.documentElement,t=document.body,i="BackCompat"==document.compatMode?t:e,n={};return n.getWidth=function(){return Math.max(e?e.scrollWidth:0,t?t.scrollWidth:0,i?i.clientWidth:0,0)},n.getHeight=function(){return Math.max(e?e.scrollHeight:0,t?t.scrollHeight:0,i?i.clientHeight:0,0)},n.getViewWidth=function(){return i?i.clientWidth:0},n.getViewHeight=function(){return i?i.clientHeight:0},n.getScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},n.getScrollLeft=function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0},n.getClientTop=function(){return document.documentElement.clientTop||document.body.clientTop||0},n.getClientLeft=function(){return document.documentElement.clientLeft||document.body.clientLeft||0},{page:n}});
define(function(require){var e=require("etpl/main");return e.merge=function(t,n,r){var i="";try{var i=e.render(n,r)}catch(o){console.log(o)}if(t)t.innerHTML=i;return i},e});
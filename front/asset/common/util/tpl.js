define(function(require){var e=require("er/ajax"),t=require("etpl");return{load:function(n,i,r,a){e.request({method:"GET",url:i.toUrl(n)}).then(function(e){t.parse(e),r(!0)},function(){r(!1)})}}});
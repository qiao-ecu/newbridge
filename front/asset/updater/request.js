define(function(require){var e=window.require,t=e("needle");return function(e,n,i,r,a){if("function"==typeof r)a=r,r=void 0;if("GET"===e)t.get(n,{headers:i,follow_max:5},function(e,t){console.log(t.body.toString()),a&&a(null,{statusCode:t.statusCode,headers:t.headers,body:t.body})});else if("POST"===e){console.log(r.toString()),console.log(i),myHeaders={};for(var o in i)if(i.hasOwnProperty(o))myHeaders[o]=i[o];myHeaders["Content-Length"]=r.length,t.post(n,r,{headers:myHeaders,follow_max:5},function(e,t){console.log(t.body.toString()),a&&a(null,{statusCode:t.statusCode,headers:t.headers,body:t.body})})}}});
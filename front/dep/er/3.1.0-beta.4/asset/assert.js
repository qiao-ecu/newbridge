define(function(){if(window.DEBUG){var e=function(e,t){if(!e)throw new Error(t)};return e.has=function(t,n){e(null!=t,n)},e.equals=function(t,n,r){e(t===n,r)},e.hasProperty=function(t,n,r){e(null!=t[n],r)},e.lessThan=function(t,n,r){e(n>t,r)},e.greaterThan=function(t,n,r){e(t>n,r)},e.lessThanOrEquals=function(t,n,r){e(n>=t,r)},e.greaterThanOrEquals=function(t,n,r){e(t>=n,r)},e}else{var e=function(){};return e.has=e,e.equals=e,e.hasProperty=e,e.lessThan=e,e.greaterThan=e,e.lessThanOrEquals=e,e.greaterThanOrEquals=e,e}});
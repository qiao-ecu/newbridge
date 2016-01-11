define(function(require,exports,module){(function(e){function t(e,t,n){switch(arguments.length){case 2:return null!=e?e:t;case 3:return null!=e?e:null!=t?t:n;default:throw new Error("Implement me")}}function n(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function i(e,t){function n(){if(fe.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn)console.warn("Deprecation warning: "+e)}var i=!0;return u(function(){if(i)n(),i=!1;return t.apply(this,arguments)},t)}function r(e,t){return function(n){return c(e.call(this,n),t)}}function a(e,t){return function(n){return this.lang().ordinal(e.call(this,n),t)}}function o(){}function s(e){T(e),u(this,e)}function l(e){var t=v(e),n=t.year||0,i=t.quarter||0,r=t.month||0,a=t.week||0,o=t.day||0,s=t.hour||0,l=t.minute||0,u=t.second||0,d=t.millisecond||0;this._milliseconds=+d+1e3*u+6e4*l+36e5*s,this._days=+o+7*a,this._months=+r+3*i+12*n,this._data={},this._bubble()}function u(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n];if(t.hasOwnProperty("toString"))e.toString=t.toString;if(t.hasOwnProperty("valueOf"))e.valueOf=t.valueOf;return e}function d(e){var t,n={};for(t in e)if(e.hasOwnProperty(t)&&Me.hasOwnProperty(t))n[t]=e[t];return n}function f(e){if(0>e)return Math.ceil(e);else return Math.floor(e)}function c(e,t,n){for(var i=""+Math.abs(e),r=e>=0;i.length<t;)i="0"+i;return(r?n?"+":"":"-")+i}function h(e,t,n,i){var r=t._milliseconds,a=t._days,o=t._months;if(i=null==i?!0:i,r)e._d.setTime(+e._d+r*n);if(a)se(e,"Date",oe(e,"Date")+a*n);if(o)ae(e,oe(e,"Month")+o*n);if(i)fe.updateOffset(e,a||o)}function p(e){return"[object Array]"===Object.prototype.toString.call(e)}function m(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function g(e,t,n){var i,r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),o=0;for(i=0;r>i;i++)if(n&&e[i]!==t[i]||!n&&w(e[i])!==w(t[i]))o++;return o+a}function y(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=Ke[e]||Qe[t]||t}return e}function v(e){var t,n,i={};for(n in e)if(e.hasOwnProperty(n))if(t=y(n))i[t]=e[n];return i}function _(t){var n,i;if(0===t.indexOf("week"))n=7,i="day";else if(0===t.indexOf("month"))n=12,i="month";else return;fe[t]=function(r,a){var o,s,l=fe.fn._lang[t],u=[];if("number"==typeof r)a=r,r=e;if(s=function(e){var t=fe().utc().set(i,e);return l.call(fe.fn._lang,t,r||"")},null!=a)return s(a);else{for(o=0;n>o;o++)u.push(s(o));return u}}}function w(e){var t=+e,n=0;if(0!==t&&isFinite(t))if(t>=0)n=Math.floor(t);else n=Math.ceil(t);return n}function x(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function b(e,t,n){return te(fe([e,11,31+t-n]),t,n).week}function M(e){return L(e)?366:365}function L(e){return e%4===0&&e%100!==0||e%400===0}function T(e){var t;if(e._a&&-2===e._pf.overflow){if(t=e._a[ge]<0||e._a[ge]>11?ge:e._a[ye]<1||e._a[ye]>x(e._a[me],e._a[ge])?ye:e._a[ve]<0||e._a[ve]>23?ve:e._a[_e]<0||e._a[_e]>59?_e:e._a[we]<0||e._a[we]>59?we:e._a[xe]<0||e._a[xe]>999?xe:-1,e._pf._overflowDayOfYear&&(me>t||t>ye))t=ye;e._pf.overflow=t}}function D(e){if(null==e._isValid)if(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict)e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length;return e._isValid}function k(e){return e?e.toLowerCase().replace("_","-"):e}function Y(e,t){return t._isUTC?fe(e).zone(t._offset||0):fe(e).local()}function C(e,t){if(t.abbr=e,!be[e])be[e]=new o;return be[e].set(t),be[e]}function S(e){delete be[e]}function E(e){var t,n,i,r,a=0,o=function(e){if(!be[e]&&Le)try{require("./lang/"+e)}catch(t){}return be[e]};if(!e)return fe.fn._lang;if(!p(e)){if(n=o(e))return n;e=[e]}for(;a<e.length;){for(r=k(e[a]).split("-"),t=r.length,i=k(e[a+1]),i=i?i.split("-"):null;t>0;){if(n=o(r.slice(0,t).join("-")))return n;if(i&&i.length>=t&&g(r,i,!0)>=t-1)break;t--}a++}return fe.fn._lang}function P(e){if(e.match(/\[[\s\S]/))return e.replace(/^\[|\]$/g,"");else return e.replace(/\\/g,"")}function I(e){var t,n,i=e.match(Ye);for(t=0,n=i.length;n>t;t++)if(rt[i[t]])i[t]=rt[i[t]];else i[t]=P(i[t]);return function(r){var a="";for(t=0;n>t;t++)a+=i[t]instanceof Function?i[t].call(r,e):i[t];return a}}function N(e,t){if(!e.isValid())return e.lang().invalidDate();if(t=j(t,e.lang()),!et[t])et[t]=I(t);return et[t](e)}function j(e,t){function n(e){return t.longDateFormat(e)||e}var i=5;for(Ce.lastIndex=0;i>=0&&Ce.test(e);)e=e.replace(Ce,n),Ce.lastIndex=0,i-=1;return e}function O(e,t){var n,i=t._strict;switch(e){case"Q":return Fe;case"DDDD":return $e;case"YYYY":case"GGGG":case"gggg":return i?We:Pe;case"Y":case"G":case"g":return qe;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return i?Be:Ie;case"S":if(i)return Fe;case"SS":if(i)return Ve;case"SSS":if(i)return $e;case"DDD":return Ee;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return je;case"a":case"A":return E(t._l)._meridiemParse;case"X":return He;case"Z":case"ZZ":return Oe;case"T":return Ae;case"SSSS":return Ne;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return i?Ve:Se;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Se;case"Do":return Re;default:return n=new RegExp(q(B(e.replace("\\","")),"i"))}}function A(e){e=e||"";var t=e.match(Oe)||[],n=t[t.length-1]||[],i=(n+"").match(Xe)||["-",0,0],r=+(60*i[1])+w(i[2]);return"+"===i[0]?-r:r}function H(e,t,n){var i,r=n._a;switch(e){case"Q":if(null!=t)r[ge]=3*(w(t)-1);break;case"M":case"MM":if(null!=t)r[ge]=w(t)-1;break;case"MMM":case"MMMM":if(i=E(n._l).monthsParse(t),null!=i)r[ge]=i;else n._pf.invalidMonth=t;break;case"D":case"DD":if(null!=t)r[ye]=w(t);break;case"Do":if(null!=t)r[ye]=w(parseInt(t,10));break;case"DDD":case"DDDD":if(null!=t)n._dayOfYear=w(t);break;case"YY":r[me]=fe.parseTwoDigitYear(t);break;case"YYYY":case"YYYYY":case"YYYYYY":r[me]=w(t);break;case"a":case"A":n._isPm=E(n._l).isPM(t);break;case"H":case"HH":case"h":case"hh":r[ve]=w(t);break;case"m":case"mm":r[_e]=w(t);break;case"s":case"ss":r[we]=w(t);break;case"S":case"SS":case"SSS":case"SSSS":r[xe]=w(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=A(t);break;case"dd":case"ddd":case"dddd":if(i=E(n._l).weekdaysParse(t),null!=i)n._w=n._w||{},n._w.d=i;else n._pf.invalidWeekday=t;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":if(e=e.substr(0,2),t)n._w=n._w||{},n._w[e]=w(t);break;case"gg":case"GG":n._w=n._w||{},n._w[e]=fe.parseTwoDigitYear(t)}}function R(e){var n,i,r,a,o,s,l,u;if(n=e._w,null!=n.GG||null!=n.W||null!=n.E)o=1,s=4,i=t(n.GG,e._a[me],te(fe(),1,4).year),r=t(n.W,1),a=t(n.E,1);else if(u=E(e._l),o=u._week.dow,s=u._week.doy,i=t(n.gg,e._a[me],te(fe(),o,s).year),r=t(n.w,1),null!=n.d){if(a=n.d,o>a)++r}else if(null!=n.e)a=n.e+o;else a=o;l=ne(i,r,a,s,o),e._a[me]=l.year,e._dayOfYear=l.dayOfYear}function F(e){var n,i,r,a,o=[];if(!e._d){if(r=$(e),e._w&&null==e._a[ye]&&null==e._a[ge])R(e);if(e._dayOfYear){if(a=t(e._a[me],r[me]),e._dayOfYear>M(a))e._pf._overflowDayOfYear=!0;i=Z(a,0,e._dayOfYear),e._a[ge]=i.getUTCMonth(),e._a[ye]=i.getUTCDate()}for(n=0;3>n&&null==e._a[n];++n)e._a[n]=o[n]=r[n];for(;7>n;n++)e._a[n]=o[n]=null==e._a[n]?2===n?1:0:e._a[n];if(e._d=(e._useUTC?Z:X).apply(null,o),null!=e._tzm)e._d.setUTCMinutes(e._d.getUTCMinutes()+e._tzm)}}function V(e){var t;if(!e._d)t=v(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],F(e)}function $(e){var t=new Date;if(e._useUTC)return[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()];else return[t.getFullYear(),t.getMonth(),t.getDate()]}function W(e){if(e._f===fe.ISO_8601)return void U(e);e._a=[],e._pf.empty=!0;var t,n,i,r,a,o=E(e._l),s=""+e._i,l=s.length,u=0;for(i=j(e._f,o).match(Ye)||[],t=0;t<i.length;t++){if(r=i[t],n=(s.match(O(r,e))||[])[0]){if(a=s.substr(0,s.indexOf(n)),a.length>0)e._pf.unusedInput.push(a);s=s.slice(s.indexOf(n)+n.length),u+=n.length}if(rt[r]){if(n)e._pf.empty=!1;else e._pf.unusedTokens.push(r);H(r,n,e)}else if(e._strict&&!n)e._pf.unusedTokens.push(r)}if(e._pf.charsLeftOver=l-u,s.length>0)e._pf.unusedInput.push(s);if(e._isPm&&e._a[ve]<12)e._a[ve]+=12;if(e._isPm===!1&&12===e._a[ve])e._a[ve]=0;F(e),T(e)}function B(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,r){return t||n||i||r})}function q(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function z(e){var t,i,r,a,o;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(NaN));for(a=0;a<e._f.length;a++)if(o=0,t=u({},e),t._pf=n(),t._f=e._f[a],W(t),D(t)){if(o+=t._pf.charsLeftOver,o+=10*t._pf.unusedTokens.length,t._pf.score=o,null==r||r>o)r=o,i=t}else;u(e,i||t)}function U(e){var t,n,i=e._i,r=ze.exec(i);if(r){for(e._pf.iso=!0,t=0,n=Ge.length;n>t;t++)if(Ge[t][1].exec(i)){e._f=Ge[t][0]+(r[6]||" ");break}for(t=0,n=Je.length;n>t;t++)if(Je[t][1].exec(i)){e._f+=Je[t][0];break}if(i.match(Oe))e._f+="Z";W(e)}else e._isValid=!1}function G(e){if(U(e),e._isValid===!1)delete e._isValid,fe.createFromInputFallback(e)}function J(t){var n=t._i,i=Te.exec(n);if(n===e)t._d=new Date;else if(i)t._d=new Date(+i[1]);else if("string"==typeof n)G(t);else if(p(n))t._a=n.slice(0),F(t);else if(m(n))t._d=new Date(+n);else if("object"==typeof n)V(t);else if("number"==typeof n)t._d=new Date(n);else fe.createFromInputFallback(t)}function X(e,t,n,i,r,a,o){var s=new Date(e,t,n,i,r,a,o);if(1970>e)s.setFullYear(e);return s}function Z(e){var t=new Date(Date.UTC.apply(null,arguments));if(1970>e)t.setUTCFullYear(e);return t}function K(e,t){if("string"==typeof e)if(!isNaN(e))e=parseInt(e,10);else if(e=t.weekdaysParse(e),"number"!=typeof e)return null;return e}function Q(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}function ee(e,t,n){var i=pe(Math.abs(e)/1e3),r=pe(i/60),a=pe(r/60),o=pe(a/24),s=pe(o/365),l=i<tt.s&&["s",i]||1===r&&["m"]||r<tt.m&&["mm",r]||1===a&&["h"]||a<tt.h&&["hh",a]||1===o&&["d"]||o<=tt.dd&&["dd",o]||o<=tt.dm&&["M"]||o<tt.dy&&["MM",pe(o/30)]||1===s&&["y"]||["yy",s];return l[2]=t,l[3]=e>0,l[4]=n,Q.apply({},l)}function te(e,t,n){var i,r=n-t,a=n-e.day();if(a>r)a-=7;if(r-7>a)a+=7;return i=fe(e).add("d",a),{week:Math.ceil(i.dayOfYear()/7),year:i.year()}}function ne(e,t,n,i,r){var a,o,s=Z(e,0,1).getUTCDay();return s=0===s?7:s,n=null!=n?n:r,a=r-s+(s>i?7:0)-(r>s?7:0),o=7*(t-1)+(n-r)+a+1,{year:o>0?e:e-1,dayOfYear:o>0?o:M(e-1)+o}}function ie(t){var n=t._i,i=t._f;if(null===n||i===e&&""===n)return fe.invalid({nullInput:!0});if("string"==typeof n)t._i=n=E().preparse(n);if(fe.isMoment(n))t=d(n),t._d=new Date(+n._d);else if(i)if(p(i))z(t);else W(t);else J(t);return new s(t)}function re(e,t){var n,i;if(1===t.length&&p(t[0]))t=t[0];if(!t.length)return fe();for(n=t[0],i=1;i<t.length;++i)if(t[i][e](n))n=t[i];return n}function ae(e,t){var n;if("string"==typeof t)if(t=e.lang().monthsParse(t),"number"!=typeof t)return e;return n=Math.min(e.date(),x(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function oe(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function se(e,t,n){if("Month"===t)return ae(e,n);else return e._d["set"+(e._isUTC?"UTC":"")+t](n)}function le(e,t){return function(n){if(null!=n)return se(this,e,n),fe.updateOffset(this,t),this;else return oe(this,e)}}function ue(e){fe.duration.fn[e]=function(){return this._data[e]}}function de(e,t){fe.duration.fn["as"+e]=function(){return+this/t}}for(var fe,ce,he="2.7.0",pe=("undefined"!=typeof global?global:this,Math.round),me=0,ge=1,ye=2,ve=3,_e=4,we=5,xe=6,be={},Me={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_tzm:null,_isUTC:null,_offset:null,_pf:null,_lang:null},Le="undefined"!=typeof module&&module.exports,Te=/^\/?Date\((\-?\d+)/i,De=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ke=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Ye=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Ce=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Se=/\d\d?/,Ee=/\d{1,3}/,Pe=/\d{1,4}/,Ie=/[+\-]?\d{1,6}/,Ne=/\d+/,je=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Oe=/Z|[\+\-]\d\d:?\d\d/gi,Ae=/T/i,He=/[\+\-]?\d+(\.\d{1,3})?/,Re=/\d{1,2}/,Fe=/\d/,Ve=/\d\d/,$e=/\d{3}/,We=/\d{4}/,Be=/[+-]?\d{6}/,qe=/[+-]?\d+/,ze=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ue="YYYY-MM-DDTHH:mm:ssZ",Ge=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Je=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Xe=/([\+\-]|\d\d)/gi,Ze=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),Ke={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Qe={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},et={},tt={s:45,m:45,h:22,dd:25,dm:45,dy:345},nt="DDD w W M D d".split(" "),it="M D H h m s w W".split(" "),rt={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return c(this.year()%100,2)},YYYY:function(){return c(this.year(),4)},YYYYY:function(){return c(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+c(Math.abs(e),6)},gg:function(){return c(this.weekYear()%100,2)},gggg:function(){return c(this.weekYear(),4)},ggggg:function(){return c(this.weekYear(),5)},GG:function(){return c(this.isoWeekYear()%100,2)},GGGG:function(){return c(this.isoWeekYear(),4)},GGGGG:function(){return c(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return w(this.milliseconds()/100)},SS:function(){return c(w(this.milliseconds()/10),2)},SSS:function(){return c(this.milliseconds(),3)},SSSS:function(){return c(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";if(0>e)e=-e,t="-";return t+c(w(e/60),2)+":"+c(w(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";if(0>e)e=-e,t="-";return t+c(w(e/60),2)+c(w(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},at=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nt.length;)ce=nt.pop(),rt[ce+"o"]=a(rt[ce],ce);for(;it.length;)ce=it.pop(),rt[ce+ce]=r(rt[ce],2);for(rt.DDDD=r(rt.DDD,3),u(o.prototype,{set:function(e){var t,n;for(n in e)if(t=e[n],"function"==typeof t)this[n]=t;else this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,i;if(!this._monthsParse)this._monthsParse=[];for(t=0;12>t;t++){if(!this._monthsParse[t])n=fe.utc([2e3,t]),i="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(i.replace(".",""),"i");if(this._monthsParse[t].test(e))return t}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,i;if(!this._weekdaysParse)this._weekdaysParse=[];for(t=0;7>t;t++){if(!this._weekdaysParse[t])n=fe([2e3,1]).day(t),i="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(i.replace(".",""),"i");if(this._weekdaysParse[t].test(e))return t}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];if(!t&&this._longDateFormat[e.toUpperCase()])t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t;return t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){if(e>11)return n?"pm":"PM";else return n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,i){var r=this._relativeTime[n];return"function"==typeof r?r(e,t,n,i):r.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return te(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),fe=function(t,i,r,a){var o;if("boolean"==typeof r)a=r,r=e;return o={},o._isAMomentObject=!0,o._i=t,o._f=i,o._l=r,o._strict=a,o._isUTC=!1,o._pf=n(),ie(o)},fe.suppressDeprecationWarnings=!1,fe.createFromInputFallback=i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i)}),fe.min=function(){var e=[].slice.call(arguments,0);return re("isBefore",e)},fe.max=function(){var e=[].slice.call(arguments,0);return re("isAfter",e)},fe.utc=function(t,i,r,a){var o;if("boolean"==typeof r)a=r,r=e;return o={},o._isAMomentObject=!0,o._useUTC=!0,o._isUTC=!0,o._l=r,o._i=t,o._f=i,o._strict=a,o._pf=n(),ie(o).utc()},fe.unix=function(e){return fe(1e3*e)},fe.duration=function(e,t){var n,i,r,a=e,o=null;if(fe.isDuration(e))a={ms:e._milliseconds,d:e._days,M:e._months};else if("number"==typeof e)if(a={},t)a[t]=e;else a.milliseconds=e;else if(o=De.exec(e))n="-"===o[1]?-1:1,a={y:0,d:w(o[ye])*n,h:w(o[ve])*n,m:w(o[_e])*n,s:w(o[we])*n,ms:w(o[xe])*n};else if(o=ke.exec(e))n="-"===o[1]?-1:1,r=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*n},a={y:r(o[2]),M:r(o[3]),d:r(o[4]),h:r(o[5]),m:r(o[6]),s:r(o[7]),w:r(o[8])};if(i=new l(a),fe.isDuration(e)&&e.hasOwnProperty("_lang"))i._lang=e._lang;return i},fe.version=he,fe.defaultFormat=Ue,fe.ISO_8601=function(){},fe.momentProperties=Me,fe.updateOffset=function(){},fe.relativeTimeThreshold=function(t,n){if(tt[t]===e)return!1;else return tt[t]=n,!0},fe.lang=function(e,t){var n;if(!e)return fe.fn._lang._abbr;if(t)C(k(e),t);else if(null===t)S(e),e="en";else if(!be[e])E(e);return n=fe.duration.fn._lang=fe.fn._lang=E(e),n._abbr},fe.langData=function(e){if(e&&e._lang&&e._lang._abbr)e=e._lang._abbr;return E(e)},fe.isMoment=function(e){return e instanceof s||null!=e&&e.hasOwnProperty("_isAMomentObject")},fe.isDuration=function(e){return e instanceof l},ce=at.length-1;ce>=0;--ce)_(at[ce]);fe.normalizeUnits=function(e){return y(e)},fe.invalid=function(e){var t=fe.utc(NaN);if(null!=e)u(t._pf,e);else t._pf.userInvalidated=!0;return t},fe.parseZone=function(){return fe.apply(null,arguments).parseZone()},fe.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)},u(fe.fn=s.prototype,{clone:function(){return fe(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=fe(this).utc();if(0<e.year()&&e.year()<=9999)return N(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");else return N(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return D(this)},isDSTShifted:function(){if(this._a)return this.isValid()&&g(this._a,(this._isUTC?fe.utc(this._a):fe(this._a)).toArray())>0;else return!1},parsingFlags:function(){return u({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(e){var t=N(this,e||fe.defaultFormat);return this.lang().postformat(t)},add:function(e,t){var n;if("string"==typeof e&&"string"==typeof t)n=fe.duration(isNaN(+t)?+e:+t,isNaN(+t)?t:e);else if("string"==typeof e)n=fe.duration(+t,e);else n=fe.duration(e,t);return h(this,n,1),this},subtract:function(e,t){var n;if("string"==typeof e&&"string"==typeof t)n=fe.duration(isNaN(+t)?+e:+t,isNaN(+t)?t:e);else if("string"==typeof e)n=fe.duration(+t,e);else n=fe.duration(e,t);return h(this,n,-1),this},diff:function(e,t,n){var i,r,a=Y(e,this),o=6e4*(this.zone()-a.zone());if(t=y(t),"year"===t||"month"===t){if(i=432e5*(this.daysInMonth()+a.daysInMonth()),r=12*(this.year()-a.year())+(this.month()-a.month()),r+=(this-fe(this).startOf("month")-(a-fe(a).startOf("month")))/i,r-=6e4*(this.zone()-fe(this).startOf("month").zone()-(a.zone()-fe(a).startOf("month").zone()))/i,"year"===t)r/=12}else i=this-a,r="second"===t?i/1e3:"minute"===t?i/6e4:"hour"===t?i/36e5:"day"===t?(i-o)/864e5:"week"===t?(i-o)/6048e5:i;return n?r:f(r)},from:function(e,t){return fe.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)},fromNow:function(e){return this.from(fe(),e)},calendar:function(e){var t=e||fe(),n=Y(t,this).startOf("day"),i=this.diff(n,"days",!0),r=-6>i?"sameElse":-1>i?"lastWeek":0>i?"lastDay":1>i?"sameDay":2>i?"nextDay":7>i?"nextWeek":"sameElse";return this.format(this.lang().calendar(r,this))},isLeapYear:function(){return L(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();if(null!=e)return e=K(e,this.lang()),this.add({d:e-t});else return t},month:le("Month",!0),startOf:function(e){switch(e=y(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}if("week"===e)this.weekday(0);else if("isoWeek"===e)this.isoWeekday(1);if("quarter"===e)this.month(3*Math.floor(this.month()/3));return this},endOf:function(e){return e=y(e),this.startOf(e).add("isoWeek"===e?"week":e,1).subtract("ms",1)},isAfter:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)>+fe(e).startOf(t)},isBefore:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)<+fe(e).startOf(t)},isSame:function(e,t){return t=t||"ms",+this.clone().startOf(t)===+Y(e,this).startOf(t)},min:i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){return e=fe.apply(null,arguments),this>e?this:e}),max:i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){return e=fe.apply(null,arguments),e>this?this:e}),zone:function(e,t){var n=this._offset||0;if(null!=e){if("string"==typeof e)e=A(e);if(Math.abs(e)<16)e=60*e;if(this._offset=e,this._isUTC=!0,n!==e)if(!t||this._changeInProgress)h(this,fe.duration(n-e,"m"),1,!1);else if(!this._changeInProgress)this._changeInProgress=!0,fe.updateOffset(this,!0),this._changeInProgress=null}else return this._isUTC?n:this._d.getTimezoneOffset();return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){if(this._tzm)this.zone(this._tzm);else if("string"==typeof this._i)this.zone(this._i);return this},hasAlignedHourOffset:function(e){if(!e)e=0;else e=fe(e).zone();return(this.zone()-e)%60===0},daysInMonth:function(){return x(this.year(),this.month())},dayOfYear:function(e){var t=pe((fe(this).startOf("day")-fe(this).startOf("year"))/864e5)+1;return null==e?t:this.add("d",e-t)},quarter:function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},weekYear:function(e){var t=te(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==e?t:this.add("y",e-t)},isoWeekYear:function(e){var t=te(this,1,4).year;return null==e?t:this.add("y",e-t)},week:function(e){var t=this.lang().week(this);return null==e?t:this.add("d",7*(e-t))},isoWeek:function(e){var t=te(this,1,4).week;return null==e?t:this.add("d",7*(e-t))},weekday:function(e){var t=(this.day()+7-this.lang()._week.dow)%7;return null==e?t:this.add("d",e-t)},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return b(this.year(),1,4)},weeksInYear:function(){var e=this._lang._week;return b(this.year(),e.dow,e.doy)},get:function(e){return e=y(e),this[e]()},set:function(e,t){if(e=y(e),"function"==typeof this[e])this[e](t);return this},lang:function(t){if(t===e)return this._lang;else return this._lang=E(t),this}}),fe.fn.millisecond=fe.fn.milliseconds=le("Milliseconds",!1),fe.fn.second=fe.fn.seconds=le("Seconds",!1),fe.fn.minute=fe.fn.minutes=le("Minutes",!1),fe.fn.hour=fe.fn.hours=le("Hours",!0),fe.fn.date=le("Date",!0),fe.fn.dates=i("dates accessor is deprecated. Use date instead.",le("Date",!0)),fe.fn.year=le("FullYear",!0),fe.fn.years=i("years accessor is deprecated. Use year instead.",le("FullYear",!0)),fe.fn.days=fe.fn.day,fe.fn.months=fe.fn.month,fe.fn.weeks=fe.fn.week,fe.fn.isoWeeks=fe.fn.isoWeek,fe.fn.quarters=fe.fn.quarter,fe.fn.toJSON=fe.fn.toISOString,u(fe.duration.fn=l.prototype,{_bubble:function(){var e,t,n,i,r=this._milliseconds,a=this._days,o=this._months,s=this._data;s.milliseconds=r%1e3,e=f(r/1e3),s.seconds=e%60,t=f(e/60),s.minutes=t%60,n=f(t/60),s.hours=n%24,a+=f(n/24),s.days=a%30,o+=f(a/30),s.months=o%12,i=f(o/12),s.years=i},weeks:function(){return f(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12)},humanize:function(e){var t=+this,n=ee(t,!e,this.lang());if(e)n=this.lang().pastFuture(t,n);return this.lang().postformat(n)},add:function(e,t){var n=fe.duration(e,t);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=fe.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=y(e),this[e.toLowerCase()+"s"]()},as:function(e){return e=y(e),this["as"+e.charAt(0).toUpperCase()+e.slice(1)+"s"]()},lang:fe.fn.lang,toIsoString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),i=Math.abs(this.hours()),r=Math.abs(this.minutes()),a=Math.abs(this.seconds()+this.milliseconds()/1e3);if(!this.asSeconds())return"P0D";else return(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(i||r||a?"T":"")+(i?i+"H":"")+(r?r+"M":"")+(a?a+"S":"")}});for(ce in Ze)if(Ze.hasOwnProperty(ce))de(ce,Ze[ce]),ue(ce.toLowerCase());if(de("Weeks",6048e5),fe.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},fe.lang("en",{ordinal:function(e){var t=e%10,n=1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),Le)module.exports=fe}).call(this)});
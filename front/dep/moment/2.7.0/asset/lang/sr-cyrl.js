!function(e){if("function"==typeof define&&define.amd)define(["moment"],e);else if("object"==typeof exports)module.exports=e(require("../moment"));else e(window.moment)}(function(e){var t={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&4>=e?t[1]:t[2]},translate:function(e,n,i){var r=t.words[i];if(1===i.length)return n?r[0]:r[1];else return e+" "+t.correctGrammaticalCase(e,r)}};return e.lang("sr-cyrl",{months:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],monthsShort:["јан.","феб.","мар.","апр.","мај","јун","јул","авг.","сеп.","окт.","нов.","дец."],weekdays:["недеља","понедељак","уторак","среда","четвртак","петак","субота"],weekdaysShort:["нед.","пон.","уто.","сре.","чет.","пет.","суб."],weekdaysMin:["не","по","ут","ср","че","пе","су"],longDateFormat:{LT:"H:mm",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var e=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"дан",dd:t.translate,M:"месец",MM:t.translate,y:"годину",yy:t.translate},ordinal:"%d.",week:{dow:1,doy:7}})});
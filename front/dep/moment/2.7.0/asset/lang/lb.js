!function(e){if("function"==typeof define&&define.amd)define(["moment"],e);else if("object"==typeof exports)module.exports=e(require("../moment"));else e(window.moment)}(function(e){function t(e,t,n,i){var r={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],dd:[e+" Deeg",e+" Deeg"],M:["ee Mount","engem Mount"],MM:[e+" Méint",e+" Méint"],y:["ee Joer","engem Joer"],yy:[e+" Joer",e+" Joer"]};return t?r[n][0]:r[n][1]}function n(e){var t=e.substr(0,e.indexOf(" "));if(o(t))return"a "+e;else return"an "+e}function i(e){var t=e.substr(0,e.indexOf(" "));if(o(t))return"viru "+e;else return"virun "+e}function r(e){var t=this.format("d");if(a(t))return"[Leschte] dddd [um] LT";else return"[Leschten] dddd [um] LT"}function a(e){switch(e=parseInt(e,10)){case 0:case 1:case 3:case 5:case 6:return!0;default:return!1}}function o(e){if(e=parseInt(e,10),isNaN(e))return!1;if(0>e)return!0;else if(10>e)if(e>=4&&7>=e)return!0;else return!1;else if(100>e){var t=e%10,n=e/10;if(0===t)return o(n);else return o(t)}else if(1e4>e){for(;e>=10;)e/=10;return o(e)}else return e/=1e3,o(e)}return e.lang("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:r},relativeTime:{future:n,past:i,s:"e puer Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:t,M:t,MM:t,y:t,yy:t},ordinal:"%d.",week:{dow:1,doy:4}})});
!function(e){if("function"==typeof define&&define.amd)define(["moment"],e);else if("object"==typeof exports)module.exports=e(require("../moment"));else e(window.moment)}(function(e){function t(e,t,n,i){if(t)return"kelios sekundės";else return i?"kelių sekundžių":"kelias sekundes"}function n(e,t,n,i){return t?r(n)[0]:i?r(n)[1]:r(n)[2]}function i(e){return e%10===0||e>10&&20>e}function r(e){return s[e].split("_")}function a(e,t,a,o){var s=e+" ";if(1===e)return s+n(e,t,a[0],o);else if(t)return s+(i(e)?r(a)[1]:r(a)[0]);else if(o)return s+r(a)[1];else return s+(i(e)?r(a)[1]:r(a)[2])}function o(e,t){var n=-1===t.indexOf("dddd HH:mm"),i=l[e.day()];return n?i:i.substring(0,i.length-2)+"į"}var s={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},l="sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");return e.lang("lt",{months:"sausio_vasario_kovo_balandžio_gegužės_biržėlio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:o,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:t,m:n,mm:a,h:n,hh:a,d:n,dd:a,M:n,MM:a,y:n,yy:a},ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}})});
define(function(require){var e={},t=require("underscore");if(/msie (\d+\.\d+)/i.test(navigator.userAgent))e.ie=document.documentMode||+RegExp.$1;return t.extend(e,require("./lib/attribute"),require("./lib/class"),require("./lib/date"),require("./lib/dom"),require("./lib/event"),require("./lib/lang"),require("./lib/page"),require("./lib/string")),e});
define(function(require){var e=window.require,exports={},t=e("events").EventEmitter;global.newBridgeEmitter=global.newBridgeEmitter||new t;var n=global.newBridgeEmitter;return exports.on=function(){n.on.apply(n,arguments)},exports.un=function(){n.removeListener.apply(n,arguments)},exports.once=function(){n.once.apply(n,arguments)},exports.emit=function(){n.emit.apply(n,arguments)},exports});
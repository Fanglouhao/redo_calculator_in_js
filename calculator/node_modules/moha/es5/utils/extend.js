"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
var extend = function extend(dest) {
  var objs = [].slice.call(_arguments, 1);

  for (var i = 0, len = objs.length; i < len; i++) {
    var obj = objs[i];
    for (var prop in obj) {
      dest[prop] = obj[prop];
    }
  }

  return dest;
};

exports.default = extend;
module.exports = exports['default'];
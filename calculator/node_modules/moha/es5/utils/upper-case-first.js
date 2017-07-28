'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  if (str == null) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.substr(1);
};

module.exports = exports['default'];
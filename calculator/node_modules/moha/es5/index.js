'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lifeExp = require('./things/life-exp');

var _lifeExp2 = _interopRequireDefault(_lifeExp);

var _bigNews = require('./things/big-news');

var _bigNews2 = _interopRequireDefault(_bigNews);

var _elder = require('./things/elder');

var _elder2 = _interopRequireDefault(_elder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  lifeExp: _lifeExp2.default,
  bigNews: _bigNews2.default,
  elder: _elder2.default
};
module.exports = exports['default'];
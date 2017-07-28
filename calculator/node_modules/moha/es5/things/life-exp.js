'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pangu = require('../modules/pangu');

var _pangu2 = _interopRequireDefault(_pangu);

var _extend = require('../utils/extend');

var _extend2 = _interopRequireDefault(_extend);

var _upperCaseFirst = require('../utils/upper-case-first');

var _upperCaseFirst2 = _interopRequireDefault(_upperCaseFirst);

var _expsDict = require('../stores/exps-dict');

var _expsDict2 = _interopRequireDefault(_expsDict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lifeExp = function lifeExp(talks) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  // Init exps
  var exps = talks;

  // Init options
  var defaultOptions = {
    isTrim: true,
    isWearGlasses: false
  };
  options = (0, _extend2.default)({}, defaultOptions, options);

  /* ==== Teaching ==== */

  // Replace text according to expsDict
  for (var pattern in _expsDict2.default) {
    exps = exps.replace(new RegExp(pattern, 'ig'), _expsDict2.default[pattern]);
  }

  // TODO: Wear glasses
  if (options.isWearGlasses) {}

  // Add space between Chinese and English characters
  exps = (0, _pangu2.default)(exps);

  // Remove leading and trailing excess spaces
  if (options.isTrim) {
    exps.trim();
  }

  // Upper case the first character of each sentence
  var endPunctuation = ['。', '！', '？', // Fullwidth
  '. ', '! ', '? ' // Halfwidth
  ];
  endPunctuation.forEach(function (mark) {
    exps = exps.split(mark).map(_upperCaseFirst2.default).join(mark);
  });

  return exps;
};

exports.default = lifeExp;
module.exports = exports['default'];
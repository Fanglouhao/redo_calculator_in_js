(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.moha = _index2.default;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./index":2}],2:[function(require,module,exports){
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

},{"./things/big-news":5,"./things/elder":6,"./things/life-exp":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (text) {
  var newText = text;

  /*
  \u2e80-\u2eff CJK Radicals Supplement
  \u2f00-\u2fdf Kangxi Radicals
  \u3040-\u309f Hiragana
  \u30a0-\u30ff Katakana
  \u3100-\u312f Bopomofo
  \u3200-\u32ff Enclosed CJK Letters and Months
  \u3400-\u4dbf CJK Unified Ideographs Extension A
  \u4e00-\u9fff CJK Unified Ideographs
  \uf900-\ufaff CJK Compatibility Ideographs
   http://unicode-table.com/en/
  https://github.com/vinta/pangu
  */

  // cjk_quote >> 跟 Go 版差了一個 '
  // quote_cjk >> 跟 Go 版差了一個 '
  // fix_quote
  // fix_single_quote
  newText = newText.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(["])/g, '$1 $2');
  newText = newText.replace(/(["])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g, '$1 $2');
  newText = newText.replace(/(["'\(\[\{<\u201c]+)(\s*)(.+?)(\s*)(["'\)\]\}>\u201d]+)/g, '$1$3$5');
  newText = newText.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])( )(')([A-Za-z])/g, '$1$3$4');

  // cjk_hash
  // hash_cjk
  newText = newText.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#(\S+))/g, '$1 $2');
  newText = newText.replace(/((\S+)#)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g, '$1 $3');

  // cjk_operator_ans
  // ans_operator_cjk
  newText = newText.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\+\-\*\/=&\\|<>])([A-Za-z0-9])/g, '$1 $2 $3');
  newText = newText.replace(/([A-Za-z0-9])([\+\-\*\/=&\\|<>])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g, '$1 $2 $3');

  // cjk_bracket_cjk
  // cjk_bracket
  // bracket_cjk
  // fix_bracket
  var oldText = newText;
  var tmpText = newText.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c]+(.*?)[\)\]\}>\u201d]+)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g, '$1 $2 $4');
  newText = tmpText;
  if (oldText === tmpText) {
    newText = newText.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c>])/g, '$1 $2');
    newText = newText.replace(/([\)\]\}>\u201d<])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g, '$1 $2');
  }
  newText = newText.replace(/([\(\[\{<\u201c]+)(\s*)(.+?)(\s*)([\)\]\}>\u201d]+)/g, '$1$3$5');

  // fix_symbol
  newText = newText.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([~!:,\.\?\u2026])([A-Za-z0-9])/g, '$1$2 $3');

  // cjk_ans
  // ans_cjk
  newText = newText.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([A-Za-z0-9`\$%\^&\*\-=\+\\\|/@\u00a1-\u00ff\u2022\u2027\u2150-\u218f])/g, '$1 $2');
  newText = newText.replace(/([A-Za-z0-9`~\$%\^&\*\-=\+\\\|/!;:,\.\?\u00a1-\u00ff\u2022\u2026\u2027\u2150-\u218f])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g, '$1 $2');

  return newText;
};

module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var expsDict = {
  // Chinese => Chinese
  '最': '坠',
  '好的': '吼滴',
  '好啊': '吼哇',
  '着急': '拙计',
  '粉丝': '膜法师',
  '支持|赞同': '兹瓷',
  '批评|指责|责备': '批判',
  '招惹|冒犯|挑衅': '得罪',
  '差错|错误|过失': '偏差',
  '赚钱|获利': '闷声发大财',
  '印点|内定[^钦点]': '钦点',
  '经验(丰富|多)': '身经百战',
  '(过来|老)(司机|人)': '长者',
  '人生(哲学|哲理)': '人生经验',
  '(绝对|肯定)(啦|呀)': '当然啦',
  '知不知道｜晓不晓得': '识得唔识得',
  '谈话|闲聊｜聊天|交流': '谈笑风生',
  '(见识|阅历)(丰富|多|广)': '见得多了',
  '不予置评|拒绝(回答|评论)': '无可奉告',
  '(坠|很|相当|非常)快': '比香港记者还快',
  '(按|讲)(原则|准则|规则|道理)': '讲基本法',
  '胡说|乱说|信口胡言|瞎扯|瞎说|胡扯': '一派胡言',
  '制造舆论|哗众取宠|一本道|故弄玄虚|夸大其词': '搞个大新闻',
  '(到|去|游览)过(许|很)多(地方|城市|国家)': '哪一个国家我没有去过',
  '233(3*)': function _(find, $1) {
    var multiH = $1.replace(/3/g, 'h');
    return 'hhh' + multiH;
  },
  '(呵|哈|嘻*)': function _(find, $1) {
    var multiH = $1.replace(/./g, '蛤');
    return '' + multiH;
  },

  // Chinese => English
  '我很生气': 'I\'m angry',
  '天真(的^|了?)': ' naive',
  '(太|很|非常?)年轻(的^|了?)': 'too young',
  '(太|很|非常?)简单(的^|了?)': 'too simple',
  '有(些|的?)时(候?)': 'sometimes',

  // English => English
  "great": 'excited'
};

exports.default = expsDict;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lifeExp = require('./life-exp');

var _lifeExp2 = _interopRequireDefault(_lifeExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Working only in browsers :(
var bigNews = function bigNews() {
  var $root = arguments.length <= 0 || arguments[0] === undefined ? document.querySelector('body') : arguments[0];
  var isIncludeTitle = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];


  // Replace title
  if (isIncludeTitle) {
    document.title = (0, _lifeExp2.default)(document.title);
  }

  // Replace body or other DOM
  if ($root !== null) {
    DOMTraversal($root, function (node) {
      if (node.nodeType === 1) {
        // Element
        tranAttr(node, ['title', 'alt', 'placeholder']);
      } else if (node.nodeType === 3) {
        // Text
        // FIXME: Disable converting code to halang
        node.data = (0, _lifeExp2.default)(node.data, { isTrim: false });
      }
    });
  }

  return $root;
};

/* ==== Private Functions ==== */
var DOMTraversal = function DOMTraversal(node, callback) {
  callback(node);
  node = node.firstChild;
  while (node) {
    DOMTraversal(node, callback);
    node = node.nextSibling;
  }
};

var tranAttr = function tranAttr(node, attr) {
  if (Array.isArray(attr)) {
    for (var i = 0; i < attr.length; i++) {
      tranAttr(node, attr[i]);
    }
  } else {
    var attrValue = node.getAttribute(attr);
    if (attrValue !== "" && attrValue !== null) {
      node.setAttribute(attr, (0, _lifeExp2.default)(attrValue, { isTrim: false }));
    }
  }
};

exports.default = bigNews;
module.exports = exports['default'];

},{"./life-exp":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var elder = function elder() {};

exports.default = elder;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
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

},{"../modules/pangu":3,"../stores/exps-dict":4,"../utils/extend":8,"../utils/upper-case-first":9}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9icm93c2VyLmpzIiwic3JjL3NjcmlwdHMvaW5kZXguanMiLCJzcmMvc2NyaXB0cy9tb2R1bGVzL3Bhbmd1LmpzIiwic3JjL3NjcmlwdHMvc3RvcmVzL2V4cHMtZGljdC5qcyIsInNyYy9zY3JpcHRzL3RoaW5ncy9iaWctbmV3cy5qcyIsInNyYy9zY3JpcHRzL3RoaW5ncy9lbGRlci5qcyIsInNyYy9zY3JpcHRzL3RoaW5ncy9saWZlLWV4cC5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL2V4dGVuZC5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3VwcGVyLWNhc2UtZmlyc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQTs7Ozs7O0FBRUEsT0FBTyxJQUFQOzs7Ozs7Ozs7OztBQ0ZBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2IsNEJBRGE7QUFFYiw0QkFGYTtBQUdiLHdCQUhhOzs7Ozs7Ozs7OztrQkNKQSxVQUFDLElBQUQsRUFBVTtBQUN2QixNQUFJLFVBQVUsSUFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEbUIsU0FzQnZCLEdBQVUsUUFBUSxPQUFSLENBQWdCLGlJQUFoQixFQUFtSixPQUFuSixDQUFWLENBdEJ1QjtBQXVCdkIsWUFBVSxRQUFRLE9BQVIsQ0FBZ0IsaUlBQWhCLEVBQW1KLE9BQW5KLENBQVYsQ0F2QnVCO0FBd0J2QixZQUFVLFFBQVEsT0FBUixDQUFnQiwwREFBaEIsRUFBNEUsUUFBNUUsQ0FBVixDQXhCdUI7QUF5QnZCLFlBQVUsUUFBUSxPQUFSLENBQWdCLDRJQUFoQixFQUE4SixRQUE5SixDQUFWOzs7O0FBekJ1QixTQTZCdkIsR0FBVSxRQUFRLE9BQVIsQ0FBZ0Isb0lBQWhCLEVBQXNKLE9BQXRKLENBQVYsQ0E3QnVCO0FBOEJ2QixZQUFVLFFBQVEsT0FBUixDQUFnQixvSUFBaEIsRUFBc0osT0FBdEosQ0FB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QVMsR0FBNUMsRUFBaUQ7QUFDL0MsUUFBSSxNQUFNLEtBQUssQ0FBTCxDQUFOLENBRDJDO0FBRS9DLFNBQUssSUFBSSxJQUFKLElBQVksR0FBakIsRUFBc0I7QUFDcEIsV0FBSyxJQUFMLElBQWEsSUFBSSxJQUFKLENBQWIsQ0FEb0I7S0FBdEI7R0FGRjs7QUFPQSxTQUFPLElBQVAsQ0FWcUI7Q0FBVjs7a0JBYUU7Ozs7Ozs7Ozs7a0JDYkEsVUFBQyxHQUFELEVBQVM7QUFDdEIsTUFBSSxPQUFPLElBQVAsRUFBYTtBQUNmLFdBQU8sRUFBUCxDQURlO0dBQWpCO0FBR0EsU0FBTyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsV0FBZCxLQUE4QixJQUFJLE1BQUosQ0FBVyxDQUFYLENBQTlCLENBSmU7Q0FBVCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgbW9oYSBmcm9tICcuL2luZGV4J1xuXG5nbG9iYWwubW9oYSA9IG1vaGFcbiIsImltcG9ydCBsaWZlRXhwIGZyb20gJy4vdGhpbmdzL2xpZmUtZXhwJ1xuaW1wb3J0IGJpZ05ld3MgZnJvbSAnLi90aGluZ3MvYmlnLW5ld3MnXG5pbXBvcnQgZWxkZXIgZnJvbSAnLi90aGluZ3MvZWxkZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlmZUV4cCxcbiAgYmlnTmV3cyxcbiAgZWxkZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICh0ZXh0KSA9PiB7XG4gIGxldCBuZXdUZXh0ID0gdGV4dFxuXG4gIC8qXG4gIFxcdTJlODAtXFx1MmVmZiBDSksgUmFkaWNhbHMgU3VwcGxlbWVudFxuICBcXHUyZjAwLVxcdTJmZGYgS2FuZ3hpIFJhZGljYWxzXG4gIFxcdTMwNDAtXFx1MzA5ZiBIaXJhZ2FuYVxuICBcXHUzMGEwLVxcdTMwZmYgS2F0YWthbmFcbiAgXFx1MzEwMC1cXHUzMTJmIEJvcG9tb2ZvXG4gIFxcdTMyMDAtXFx1MzJmZiBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzXG4gIFxcdTM0MDAtXFx1NGRiZiBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBBXG4gIFxcdTRlMDAtXFx1OWZmZiBDSksgVW5pZmllZCBJZGVvZ3JhcGhzXG4gIFxcdWY5MDAtXFx1ZmFmZiBDSksgQ29tcGF0aWJpbGl0eSBJZGVvZ3JhcGhzXG5cbiAgaHR0cDovL3VuaWNvZGUtdGFibGUuY29tL2VuL1xuICBodHRwczovL2dpdGh1Yi5jb20vdmludGEvcGFuZ3VcbiAgKi9cblxuICAvLyBjamtfcXVvdGUgPj4g6LefIEdvIOeJiOW3ruS6huS4gOWAiyAnXG4gIC8vIHF1b3RlX2NqayA+PiDot58gR28g54mI5beu5LqG5LiA5YCLICdcbiAgLy8gZml4X3F1b3RlXG4gIC8vIGZpeF9zaW5nbGVfcXVvdGVcbiAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZSgvKFtcXHUyZTgwLVxcdTJlZmZcXHUyZjAwLVxcdTJmZGZcXHUzMDQwLVxcdTMwOWZcXHUzMGEwLVxcdTMwZmZcXHUzMTAwLVxcdTMxMmZcXHUzMjAwLVxcdTMyZmZcXHUzNDAwLVxcdTRkYmZcXHU0ZTAwLVxcdTlmZmZcXHVmOTAwLVxcdWZhZmZdKShbXCJdKS9nLCAnJDEgJDInKVxuICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKC8oW1wiXSkoW1xcdTJlODAtXFx1MmVmZlxcdTJmMDAtXFx1MmZkZlxcdTMwNDAtXFx1MzA5ZlxcdTMwYTAtXFx1MzBmZlxcdTMxMDAtXFx1MzEyZlxcdTMyMDAtXFx1MzJmZlxcdTM0MDAtXFx1NGRiZlxcdTRlMDAtXFx1OWZmZlxcdWY5MDAtXFx1ZmFmZl0pL2csICckMSAkMicpXG4gIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoLyhbXCInXFwoXFxbXFx7PFxcdTIwMWNdKykoXFxzKikoLis/KShcXHMqKShbXCInXFwpXFxdXFx9PlxcdTIwMWRdKykvZywgJyQxJDMkNScpXG4gIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoLyhbXFx1MmU4MC1cXHUyZWZmXFx1MmYwMC1cXHUyZmRmXFx1MzA0MC1cXHUzMDlmXFx1MzBhMC1cXHUzMGZmXFx1MzEwMC1cXHUzMTJmXFx1MzIwMC1cXHUzMmZmXFx1MzQwMC1cXHU0ZGJmXFx1NGUwMC1cXHU5ZmZmXFx1ZjkwMC1cXHVmYWZmXSkoICkoJykoW0EtWmEtel0pL2csICckMSQzJDQnKVxuXG4gIC8vIGNqa19oYXNoXG4gIC8vIGhhc2hfY2prXG4gIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoLyhbXFx1MmU4MC1cXHUyZWZmXFx1MmYwMC1cXHUyZmRmXFx1MzA0MC1cXHUzMDlmXFx1MzBhMC1cXHUzMGZmXFx1MzEwMC1cXHUzMTJmXFx1MzIwMC1cXHUzMmZmXFx1MzQwMC1cXHU0ZGJmXFx1NGUwMC1cXHU5ZmZmXFx1ZjkwMC1cXHVmYWZmXSkoIyhcXFMrKSkvZywgJyQxICQyJylcbiAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZSgvKChcXFMrKSMpKFtcXHUyZTgwLVxcdTJlZmZcXHUyZjAwLVxcdTJmZGZcXHUzMDQwLVxcdTMwOWZcXHUzMGEwLVxcdTMwZmZcXHUzMTAwLVxcdTMxMmZcXHUzMjAwLVxcdTMyZmZcXHUzNDAwLVxcdTRkYmZcXHU0ZTAwLVxcdTlmZmZcXHVmOTAwLVxcdWZhZmZdKS9nLCAnJDEgJDMnKVxuXG4gIC8vIGNqa19vcGVyYXRvcl9hbnNcbiAgLy8gYW5zX29wZXJhdG9yX2Nqa1xuICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKC8oW1xcdTJlODAtXFx1MmVmZlxcdTJmMDAtXFx1MmZkZlxcdTMwNDAtXFx1MzA5ZlxcdTMwYTAtXFx1MzBmZlxcdTMxMDAtXFx1MzEyZlxcdTMyMDAtXFx1MzJmZlxcdTM0MDAtXFx1NGRiZlxcdTRlMDAtXFx1OWZmZlxcdWY5MDAtXFx1ZmFmZl0pKFtcXCtcXC1cXCpcXC89JlxcXFx8PD5dKShbQS1aYS16MC05XSkvZywgJyQxICQyICQzJylcbiAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZSgvKFtBLVphLXowLTldKShbXFwrXFwtXFwqXFwvPSZcXFxcfDw+XSkoW1xcdTJlODAtXFx1MmVmZlxcdTJmMDAtXFx1MmZkZlxcdTMwNDAtXFx1MzA5ZlxcdTMwYTAtXFx1MzBmZlxcdTMxMDAtXFx1MzEyZlxcdTMyMDAtXFx1MzJmZlxcdTM0MDAtXFx1NGRiZlxcdTRlMDAtXFx1OWZmZlxcdWY5MDAtXFx1ZmFmZl0pL2csICckMSAkMiAkMycpXG5cbiAgLy8gY2prX2JyYWNrZXRfY2prXG4gIC8vIGNqa19icmFja2V0XG4gIC8vIGJyYWNrZXRfY2prXG4gIC8vIGZpeF9icmFja2V0XG4gIGNvbnN0IG9sZFRleHQgPSBuZXdUZXh0XG4gIGNvbnN0IHRtcFRleHQgPSBuZXdUZXh0LnJlcGxhY2UoLyhbXFx1MmU4MC1cXHUyZWZmXFx1MmYwMC1cXHUyZmRmXFx1MzA0MC1cXHUzMDlmXFx1MzBhMC1cXHUzMGZmXFx1MzEwMC1cXHUzMTJmXFx1MzIwMC1cXHUzMmZmXFx1MzQwMC1cXHU0ZGJmXFx1NGUwMC1cXHU5ZmZmXFx1ZjkwMC1cXHVmYWZmXSkoW1xcKFxcW1xcezxcXHUyMDFjXSsoLio/KVtcXClcXF1cXH0+XFx1MjAxZF0rKShbXFx1MmU4MC1cXHUyZWZmXFx1MmYwMC1cXHUyZmRmXFx1MzA0MC1cXHUzMDlmXFx1MzBhMC1cXHUzMGZmXFx1MzEwMC1cXHUzMTJmXFx1MzIwMC1cXHUzMmZmXFx1MzQwMC1cXHU0ZGJmXFx1NGUwMC1cXHU5ZmZmXFx1ZjkwMC1cXHVmYWZmXSkvZywgJyQxICQyICQ0JylcbiAgbmV3VGV4dCA9IHRtcFRleHRcbiAgaWYgKG9sZFRleHQgPT09IHRtcFRleHQpIHtcbiAgICBuZXdUZXh0ID0gbmV3VGV4dC5yZXBsYWNlKC8oW1xcdTJlODAtXFx1MmVmZlxcdTJmMDAtXFx1MmZkZlxcdTMwNDAtXFx1MzA5ZlxcdTMwYTAtXFx1MzBmZlxcdTMxMDAtXFx1MzEyZlxcdTMyMDAtXFx1MzJmZlxcdTM0MDAtXFx1NGRiZlxcdTRlMDAtXFx1OWZmZlxcdWY5MDAtXFx1ZmFmZl0pKFtcXChcXFtcXHs8XFx1MjAxYz5dKS9nLCAnJDEgJDInKVxuICAgIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoLyhbXFwpXFxdXFx9PlxcdTIwMWQ8XSkoW1xcdTJlODAtXFx1MmVmZlxcdTJmMDAtXFx1MmZkZlxcdTMwNDAtXFx1MzA5ZlxcdTMwYTAtXFx1MzBmZlxcdTMxMDAtXFx1MzEyZlxcdTMyMDAtXFx1MzJmZlxcdTM0MDAtXFx1NGRiZlxcdTRlMDAtXFx1OWZmZlxcdWY5MDAtXFx1ZmFmZl0pL2csICckMSAkMicpXG4gIH1cbiAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZSgvKFtcXChcXFtcXHs8XFx1MjAxY10rKShcXHMqKSguKz8pKFxccyopKFtcXClcXF1cXH0+XFx1MjAxZF0rKS9nLCAnJDEkMyQ1JylcblxuICAvLyBmaXhfc3ltYm9sXG4gIG5ld1RleHQgPSBuZXdUZXh0LnJlcGxhY2UoLyhbXFx1MmU4MC1cXHUyZWZmXFx1MmYwMC1cXHUyZmRmXFx1MzA0MC1cXHUzMDlmXFx1MzBhMC1cXHUzMGZmXFx1MzEwMC1cXHUzMTJmXFx1MzIwMC1cXHUzMmZmXFx1MzQwMC1cXHU0ZGJmXFx1NGUwMC1cXHU5ZmZmXFx1ZjkwMC1cXHVmYWZmXSkoW34hOixcXC5cXD9cXHUyMDI2XSkoW0EtWmEtejAtOV0pL2csICckMSQyICQzJylcblxuICAvLyBjamtfYW5zXG4gIC8vIGFuc19jamtcbiAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZSgvKFtcXHUyZTgwLVxcdTJlZmZcXHUyZjAwLVxcdTJmZGZcXHUzMDQwLVxcdTMwOWZcXHUzMGEwLVxcdTMwZmZcXHUzMTAwLVxcdTMxMmZcXHUzMjAwLVxcdTMyZmZcXHUzNDAwLVxcdTRkYmZcXHU0ZTAwLVxcdTlmZmZcXHVmOTAwLVxcdWZhZmZdKShbQS1aYS16MC05YFxcJCVcXF4mXFwqXFwtPVxcK1xcXFxcXHwvQFxcdTAwYTEtXFx1MDBmZlxcdTIwMjJcXHUyMDI3XFx1MjE1MC1cXHUyMThmXSkvZywgJyQxICQyJylcbiAgbmV3VGV4dCA9IG5ld1RleHQucmVwbGFjZSgvKFtBLVphLXowLTlgflxcJCVcXF4mXFwqXFwtPVxcK1xcXFxcXHwvITs6LFxcLlxcP1xcdTAwYTEtXFx1MDBmZlxcdTIwMjJcXHUyMDI2XFx1MjAyN1xcdTIxNTAtXFx1MjE4Zl0pKFtcXHUyZTgwLVxcdTJlZmZcXHUyZjAwLVxcdTJmZGZcXHUzMDQwLVxcdTMwOWZcXHUzMGEwLVxcdTMwZmZcXHUzMTAwLVxcdTMxMmZcXHUzMjAwLVxcdTMyZmZcXHUzNDAwLVxcdTRkYmZcXHU0ZTAwLVxcdTlmZmZcXHVmOTAwLVxcdWZhZmZdKS9nLCAnJDEgJDInKVxuXG4gIHJldHVybiBuZXdUZXh0XG59XG4iLCJsZXQgZXhwc0RpY3QgPSB7XG4gIC8vIENoaW5lc2UgPT4gQ2hpbmVzZVxuICAn5pyAJzogJ+WdoCcsXG4gICflpb3nmoQnOiAn5ZC85ru0JyxcbiAgJ+WlveWViic6ICflkLzlk4cnLFxuICAn552A5oClJzogJ+aLmeiuoScsXG4gICfnsonkuJ0nOiAn6Iac5rOV5biIJyxcbiAgJ+aUr+aMgXzotZ7lkIwnOiAn5YW555O3JyxcbiAgJ+aJueivhHzmjIfotKN86LSj5aSHJzogJ+aJueWIpCcsXG4gICfmi5vmg7l85YaS54qvfOaMkeihhSc6ICflvpfnvaonLFxuICAn5beu6ZSZfOmUmeivr3zov4flpLEnOiAn5YGP5beuJyxcbiAgJ+i1mumSsXzojrfliKknOiAn6Ze35aOw5Y+R5aSn6LSiJyxcbiAgJ+WNsOeCuXzlhoXlrppbXumSpueCuV0nOiAn6ZKm54K5JyxcbiAgJ+e7j+mqjCjkuLDlr4x85aSaKSc6ICfouqvnu4/nmb7miJgnLFxuICAnKOi/h+adpXzogIEpKOWPuOacunzkuropJzogJ+mVv+iAhScsXG4gICfkurrnlJ8o5ZOy5a2mfOWTsueQhiknOiAn5Lq655Sf57uP6aqMJyxcbiAgJyjnu53lr7l86IKv5a6aKSjllaZ85ZGAKSc6ICflvZPnhLbllaYnLFxuICAn55+l5LiN55+l6YGT772c5pmT5LiN5pmT5b6XJzogJ+ivhuW+l+WUlOivhuW+lycsXG4gICfosIjor5186Zey6IGK772c6IGK5aSpfOS6pOa1gSc6ICfosIjnrJHpo47nlJ8nLFxuICAnKOingeivhnzpmIXljoYpKOS4sOWvjHzlpJp85bm/KSc6ICfop4HlvpflpJrkuoYnLFxuICAn5LiN5LqI572u6K+EfOaLkue7nSjlm57nrZR86K+E6K66KSc6ICfml6Dlj6/lpYnlkYonLFxuICAnKOWdoHzlvoh855u45b2TfOmdnuW4uCnlv6snOiAn5q+U6aaZ5riv6K6w6ICF6L+Y5b+rJyxcbiAgJyjmjIl86K6yKSjljp/liJl85YeG5YiZfOinhOWImXzpgZPnkIYpJzogJ+iusuWfuuacrOazlScsXG4gICfog6Hor7R85Lmx6K+0fOS/oeWPo+iDoeiogHznno7mia98556O6K+0fOiDoeaJryc6ICfkuIDmtL7og6HoqIAnLFxuICAn5Yi26YCg6IiG6K66fOWTl+S8l+WPluWuoHzkuIDmnKzpgZN85pWF5byE546E6JmafOWkuOWkp+WFtuivjSc6ICfmkJ7kuKrlpKfmlrDpl7snLFxuICAnKOWIsHzljrt85ri46KeIKei/hyjorrh85b6IKeWkmijlnLDmlrl85Z+O5biCfOWbveWutiknOiAn5ZOq5LiA5Liq5Zu95a625oiR5rKh5pyJ5Y676L+HJyxcbiAgJzIzMygzKiknOiAoZmluZCwgJDEpID0+IHtcbiAgICBsZXQgbXVsdGlIID0gJDEucmVwbGFjZSgvMy9nLCAnaCcpXG4gICAgcmV0dXJuIGBoaGgke211bHRpSH1gXG4gIH0sXG4gICco5ZG1fOWTiHzlmLsqKSc6IChmaW5kLCAkMSkgPT4ge1xuICAgIGxldCBtdWx0aUggPSAkMS5yZXBsYWNlKC8uL2csICfom6QnKVxuICAgIHJldHVybiBgJHttdWx0aUh9YFxuICB9LFxuXG4gIC8vIENoaW5lc2UgPT4gRW5nbGlzaFxuICAn5oiR5b6I55Sf5rCUJzogJ0lcXCdtIGFuZ3J5JyxcbiAgJ+WkqeecnyjnmoRefOS6hj8pJzogJyBuYWl2ZScsXG4gICco5aSqfOW+iHzpnZ7luLg/KeW5tOi9uyjnmoRefOS6hj8pJzogJ3RvbyB5b3VuZycsXG4gICco5aSqfOW+iHzpnZ7luLg/KeeugOWNlSjnmoRefOS6hj8pJzogJ3RvbyBzaW1wbGUnLFxuICAn5pyJKOS6m3znmoQ/KeaXtijlgJk/KSc6ICdzb21ldGltZXMnLFxuXG4gIC8vIEVuZ2xpc2ggPT4gRW5nbGlzaFxuICBcImdyZWF0XCI6ICdleGNpdGVkJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBleHBzRGljdFxuIiwiaW1wb3J0IGxpZmVFeHAgZnJvbSAnLi9saWZlLWV4cCdcblxuLy8gV29ya2luZyBvbmx5IGluIGJyb3dzZXJzIDooXG5sZXQgYmlnTmV3cyA9ICgkcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgaXNJbmNsdWRlVGl0bGUgPSB0cnVlKSA9PiB7XG5cbiAgLy8gUmVwbGFjZSB0aXRsZVxuICBpZiAoaXNJbmNsdWRlVGl0bGUpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IGxpZmVFeHAoZG9jdW1lbnQudGl0bGUpXG4gIH1cblxuICAvLyBSZXBsYWNlIGJvZHkgb3Igb3RoZXIgRE9NXG4gIGlmICgkcm9vdCAhPT0gbnVsbCkge1xuICAgIERPTVRyYXZlcnNhbCgkcm9vdCwgKG5vZGUpID0+IHtcbiAgICAgIGlmKG5vZGUubm9kZVR5cGUgPT09IDEpIHsgLy8gRWxlbWVudFxuICAgICAgICB0cmFuQXR0cihub2RlLCBbJ3RpdGxlJywgJ2FsdCcsICdwbGFjZWhvbGRlciddKVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7IC8vIFRleHRcbiAgICAgICAgLy8gRklYTUU6IERpc2FibGUgY29udmVydGluZyBjb2RlIHRvIGhhbGFuZ1xuICAgICAgICBub2RlLmRhdGEgPSBsaWZlRXhwKG5vZGUuZGF0YSwge2lzVHJpbTogZmFsc2V9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gJHJvb3RcblxufVxuXG4vKiA9PT09IFByaXZhdGUgRnVuY3Rpb25zID09PT0gKi9cbmxldCBET01UcmF2ZXJzYWwgPSAobm9kZSwgY2FsbGJhY2spID0+IHtcbiAgY2FsbGJhY2sobm9kZSlcbiAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZFxuICB3aGlsZSAobm9kZSkge1xuICAgIERPTVRyYXZlcnNhbChub2RlLCBjYWxsYmFjaylcbiAgICBub2RlID0gbm9kZS5uZXh0U2libGluZ1xuICB9XG59XG5cbmxldCB0cmFuQXR0ciA9IChub2RlLCBhdHRyKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KGF0dHIpKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGF0dHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyYW5BdHRyKG5vZGUsIGF0dHJbaV0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBhdHRyVmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyKVxuICAgIGlmIChhdHRyVmFsdWUgIT09IFwiXCIgJiYgYXR0clZhbHVlICE9PSBudWxsKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBsaWZlRXhwKGF0dHJWYWx1ZSwge2lzVHJpbTogZmFsc2V9KSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmlnTmV3c1xuIiwibGV0IGVsZGVyID0gKCkgPT4ge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsZGVyXG4iLCJpbXBvcnQgcGFuZ3UgZnJvbSAnLi4vbW9kdWxlcy9wYW5ndSdcbmltcG9ydCBleHRlbmQgZnJvbSAnLi4vdXRpbHMvZXh0ZW5kJ1xuaW1wb3J0IHVwcGVyQ2FzZUZpcnN0IGZyb20gJy4uL3V0aWxzL3VwcGVyLWNhc2UtZmlyc3QnXG5pbXBvcnQgZXhwc0RpY3QgZnJvbSAnLi4vc3RvcmVzL2V4cHMtZGljdCdcblxubGV0IGxpZmVFeHAgPSAodGFsa3MsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAvLyBJbml0IGV4cHNcbiAgbGV0IGV4cHMgPSB0YWxrc1xuXG4gIC8vIEluaXQgb3B0aW9uc1xuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgaXNUcmltOiB0cnVlLFxuICAgIGlzV2VhckdsYXNzZXM6IGZhbHNlXG4gIH1cbiAgb3B0aW9ucyA9IGV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG5cbiAgLyogPT09PSBUZWFjaGluZyA9PT09ICovXG5cbiAgLy8gUmVwbGFjZSB0ZXh0IGFjY29yZGluZyB0byBleHBzRGljdFxuICBmb3IgKGxldCBwYXR0ZXJuIGluIGV4cHNEaWN0KSB7XG4gICAgZXhwcyA9IGV4cHMucmVwbGFjZShuZXcgUmVnRXhwKHBhdHRlcm4sICdpZycpLCBleHBzRGljdFtwYXR0ZXJuXSlcbiAgfVxuXG4gIC8vIFRPRE86IFdlYXIgZ2xhc3Nlc1xuICBpZiAob3B0aW9ucy5pc1dlYXJHbGFzc2VzKSB7XG5cbiAgfVxuXG4gIC8vIEFkZCBzcGFjZSBiZXR3ZWVuIENoaW5lc2UgYW5kIEVuZ2xpc2ggY2hhcmFjdGVyc1xuICBleHBzID0gcGFuZ3UoZXhwcylcblxuICAvLyBSZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgZXhjZXNzIHNwYWNlc1xuICBpZiAob3B0aW9ucy5pc1RyaW0pIHtcbiAgICBleHBzLnRyaW0oKVxuICB9XG5cbiAgLy8gVXBwZXIgY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGVhY2ggc2VudGVuY2VcbiAgbGV0IGVuZFB1bmN0dWF0aW9uID0gW1xuICAgICfjgIInLCAn77yBJywgJ++8nycsIC8vIEZ1bGx3aWR0aFxuICAgICcuICcsICchICcsICc/ICcgLy8gSGFsZndpZHRoXG4gIF1cbiAgZW5kUHVuY3R1YXRpb24uZm9yRWFjaCgobWFyaykgPT4ge1xuICAgIGV4cHMgPSBleHBzLnNwbGl0KG1hcmspLm1hcCh1cHBlckNhc2VGaXJzdCkuam9pbihtYXJrKVxuICB9KVxuXG4gIHJldHVybiBleHBzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpZmVFeHBcbiIsImxldCBleHRlbmQgPSAoZGVzdCkgPT4ge1xuICBsZXQgb2JqcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvYmpzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbGV0IG9iaiA9IG9ianNbaV1cbiAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgZGVzdFtwcm9wXSA9IG9ialtwcm9wXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFxuIiwiZXhwb3J0IGRlZmF1bHQgKHN0cikgPT4ge1xuICBpZiAoc3RyID09IG51bGwpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKVxufVxuIl19

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
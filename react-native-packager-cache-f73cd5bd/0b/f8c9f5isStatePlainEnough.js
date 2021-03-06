'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _typeof = typeof Symbol === "function" && typeof (typeof Symbol === 'function' ? Symbol.iterator : '@@iterator') === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

exports.default = isStatePlainEnough;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function isStatePlainEnough(a) {
  if (!a) return false;
  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') return false;
  if (typeof a.mergeDeep === 'function') return false;
  if (!(0, _isPlainObject3.default)(a)) return false;
  return true;
}
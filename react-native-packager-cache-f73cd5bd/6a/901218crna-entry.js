'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _expo = require('expo');

var _expo2 = _interopRequireDefault(_expo);

var _App = require('../../../../App');

var _App2 = _interopRequireDefault(_App);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AwakeApp = function (_React$Component) {
  (0, _inherits3.default)(AwakeApp, _React$Component);

  function AwakeApp() {
    (0, _classCallCheck3.default)(this, AwakeApp);
    return (0, _possibleConstructorReturn3.default)(this, (AwakeApp.__proto__ || (0, _getPrototypeOf2.default)(AwakeApp)).apply(this, arguments));
  }

  (0, _createClass3.default)(AwakeApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNative.View, {
        style: {
          flex: 1
        }
      }, _react2.default.createElement(_App2.default, null), _react2.default.createElement(_expo2.default.KeepAwake, null));
    }
  }]);
  return AwakeApp;
}(_react2.default.Component);

_expo2.default.registerRootComponent(AwakeApp);
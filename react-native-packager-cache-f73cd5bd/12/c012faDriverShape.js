Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverShape = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DriverShape = exports.DriverShape = _react2.default.PropTypes.shape({
  value: _react2.default.PropTypes.instanceOf(_reactNative.Animated.Value)
});
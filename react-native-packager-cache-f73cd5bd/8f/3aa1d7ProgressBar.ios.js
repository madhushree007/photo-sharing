Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/loaders/ProgressBar.ios.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var ProgressBarNB = function (_Component) {
  babelHelpers.inherits(ProgressBarNB, _Component);

  function ProgressBarNB() {
    babelHelpers.classCallCheck(this, ProgressBarNB);
    return babelHelpers.possibleConstructorReturn(this, (ProgressBarNB.__proto__ || Object.getPrototypeOf(ProgressBarNB)).apply(this, arguments));
  }

  babelHelpers.createClass(ProgressBarNB, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_reactNative.ProgressViewIOS, babelHelpers.extends({}, this.props, {
        progress: this.props.progress ? this.props.progress / 100 : 0.5,
        progressTintColor: this.props.color ? this.props.color : '#FFF',
        trackTintColor: 'rgba(255,255,255,0.5)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }));
    }
  }]);
  return ProgressBarNB;
}(_react.Component);

exports.default = ProgressBarNB;
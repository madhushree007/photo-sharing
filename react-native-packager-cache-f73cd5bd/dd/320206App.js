Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _setup = require('./js/setup');

var _setup2 = babelHelpers.interopRequireDefault(_setup);

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      console.disableYellowBox = true;
      return _react2.default.createElement(_setup2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      });
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;
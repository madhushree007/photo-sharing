Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _AppNavigator = require('./AppNavigator');

var _AppNavigator2 = babelHelpers.interopRequireDefault(_AppNavigator);

var App = function (_Component) {
  babelHelpers.inherits(App, _Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AppNavigator2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      });
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;
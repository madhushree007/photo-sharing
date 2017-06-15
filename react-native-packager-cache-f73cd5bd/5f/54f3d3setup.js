Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/setup.js';

var _expo = require('expo');

var Expo = babelHelpers.interopRequireWildcard(_expo);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _App = require('./App');

var _App2 = babelHelpers.interopRequireDefault(_App);

var _configureStore = require('./configureStore');

var _configureStore2 = babelHelpers.interopRequireDefault(_configureStore);

var _components = require('../native-base-theme/components');

var _components2 = babelHelpers.interopRequireDefault(_components);

var _commonColor = require('../native-base-theme/variables/commonColor');

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Setup = function (_Component) {
  babelHelpers.inherits(Setup, _Component);

  function Setup() {
    babelHelpers.classCallCheck(this, Setup);

    var _this = babelHelpers.possibleConstructorReturn(this, (Setup.__proto__ || Object.getPrototypeOf(Setup)).call(this));

    _this.state = {
      isLoading: false,
      store: (0, _configureStore2.default)(function () {
        return _this.setState({ isLoading: false });
      }),
      isReady: false
    };
    return _this;
  }

  babelHelpers.createClass(Setup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      return regeneratorRuntime.async(function componentWillMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Expo.Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf')
              }));

            case 2:

              this.setState({ isReady: true });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.isReady) {
        return _react2.default.createElement(Expo.AppLoading, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        });
      }
      return _react2.default.createElement(
        _nativeBase.StyleProvider,
        { style: (0, _components2.default)(_commonColor2.default), __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: this.state.store, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          _react2.default.createElement(_App2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          })
        )
      );
    }
  }]);
  return Setup;
}(_react.Component);

exports.default = Setup;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/setup.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expo = require('expo');

var Expo = _interopRequireWildcard(_expo);

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _configureStore = require('./configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _components2 = require('../native-base-theme/components');

var _components3 = _interopRequireDefault(_components2);

var _commonColor = require('../native-base-theme/variables/commonColor');

var _commonColor2 = _interopRequireDefault(_commonColor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Setup: {
    displayName: 'Setup'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/setup.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Setup = _wrapComponent('Setup')(function (_Component) {
  _inherits(Setup, _Component);

  function Setup() {
    _classCallCheck(this, Setup);

    var _this = _possibleConstructorReturn(this, (Setup.__proto__ || Object.getPrototypeOf(Setup)).call(this));

    _this.state = {
      isLoading: false,
      store: (0, _configureStore2.default)(function () {
        return _this.setState({ isLoading: false });
      }),
      isReady: false
    };
    return _this;
  }

  _createClass(Setup, [{
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
        return _react3.default.createElement(Expo.AppLoading, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        });
      }
      return _react3.default.createElement(
        _nativeBase.StyleProvider,
        { style: (0, _components3.default)(_commonColor2.default), __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react3.default.createElement(
          _reactRedux.Provider,
          { store: this.state.store, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          _react3.default.createElement(_App2.default, {
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
}(_react2.Component));

exports.default = Setup;
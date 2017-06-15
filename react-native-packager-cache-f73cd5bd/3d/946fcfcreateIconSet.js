Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@expo/vector-icons/createIconSet.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (glyphMap, fontName, expoAssetId) {
  var _class, _temp2;

  var expoFontName = _expo.Font.style(fontName, {
    ignoreWarning: true
  }).fontFamily;
  var font = _defineProperty({}, fontName, expoAssetId);
  var RNVIconComponent = (0, _createIconSet2.default)(glyphMap, expoFontName);

  var Icon = _wrapComponent('Icon')((_temp2 = _class = function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Icon);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Icon.__proto__ || Object.getPrototypeOf(Icon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        fontIsLoaded: _expo.Font.isLoaded(fontName)
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Icon, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        return regeneratorRuntime.async(function componentWillMount$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.fontIsLoaded) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return regeneratorRuntime.awrap(_expo.Font.loadAsync(font));

              case 3:
                this.setState({ fontIsLoaded: true });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: 'setNativeProps',
      value: function setNativeProps(props) {
        if (this._icon) {
          this._icon.setNativeProps(props);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        if (!this.state.fontIsLoaded) {
          return _react3.default.createElement(_reactNative.Text, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          });
        }

        return _react3.default.createElement(RNVIconComponent, _extends({
          ref: function ref(view) {
            _this2._icon = view;
          }
        }, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }));
      }
    }]);

    return Icon;
  }(_react3.default.Component), _class.propTypes = RNVIconComponent.propTypes, _class.defaultProps = RNVIconComponent.defaultProps, _temp2));

  Icon.Button = (0, _iconButton2.default)(Icon);
  Icon.glyphMap = glyphMap;
  Icon.font = font;

  return Icon;
};

var _reactNative = require('react-native');

var _expo = require('expo');

var _createIconSet = require('react-native-vector-icons/lib/create-icon-set');

var _createIconSet2 = _interopRequireDefault(_createIconSet);

var _iconButton = require('react-native-vector-icons/lib/icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _components = {
  Icon: {
    displayName: 'Icon',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@expo/vector-icons/createIconSet.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}
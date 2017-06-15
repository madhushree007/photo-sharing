Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/login/index.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _commonColor = require('../../../native-base-theme/variables/commonColor');

var _commonColor2 = _interopRequireDefault(_commonColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Login: {
    displayName: 'Login'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/login/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var bg = require('../../../images/BG.png');
var logo = require('../../../images/logo.png');

var Login = _wrapComponent('Login')((_temp = _class = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      username: '',
      password: ''
    };
    _this.constructor.childContextTypes = {
      theme: _react3.default.PropTypes.object
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        _react3.default.createElement(_reactNative.StatusBar, {
          backgroundColor: _commonColor2.default.statusBarColor,
          barStyle: 'light-content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }),
        _react3.default.createElement(
          _nativeBase.Content,
          { scrollEnabled: true, bounces: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          _react3.default.createElement(
            _reactNative.Image,
            { source: bg, style: _styles2.default.background, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            _react3.default.createElement(_reactNative.Image, { source: logo, style: _reactNative.Platform.OS === 'android' ? _styles2.default.aShadow : _styles2.default.iosShadow, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            }),
            _react3.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.bg, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              },
              _react3.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { name: 'person', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                }),
                _react3.default.createElement(_nativeBase.Input, {
                  placeholder: 'Username',
                  onChangeText: function onChangeText(username) {
                    return _this2.setState({ username: username });
                  },
                  placeholderTextColor: '#FFF',
                  style: _styles2.default.input,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { name: 'unlock', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                }),
                _react3.default.createElement(_nativeBase.Input, {
                  placeholder: 'Password',
                  secureTextEntry: true,
                  placeholderTextColor: '#FFF',
                  onChangeText: function onChangeText(password) {
                    return _this2.setState({ password: password });
                  },
                  style: _styles2.default.input,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.Button,
                {
                  rounded: true, primary: true, block: true, large: true,
                  style: _styles2.default.loginBtn,
                  onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.walkthrough({ username: _this2.state.username, password: _this2.state.password });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { style: _reactNative.Platform.OS === 'android' ? { fontSize: 16, textAlign: 'center', top: -5 } : { fontSize: 16, fontWeight: '900' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    }
                  },
                  'Get Started'
                )
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.otherLinksContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Left,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: { alignSelf: 'flex-start' }, onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.signUp();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.helpBtns, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        }
                      },
                      'Create Account'
                    )
                  )
                ),
                _react3.default.createElement(
                  _nativeBase.Right,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: { alignSelf: 'flex-end' }, onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.needhelp();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.helpBtns, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 83
                        }
                      },
                      'Need Help?'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.Component), _class.propTypes = {
  navigation: _react3.default.PropTypes.shape({
    key: _react3.default.PropTypes.string
  })
}, _temp));

function bindActions(dispatch) {
  return {};
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    navigation: state.cardNavigation
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindActions)(Login);
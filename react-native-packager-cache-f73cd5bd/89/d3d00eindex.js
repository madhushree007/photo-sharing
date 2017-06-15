Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/sign-up/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _commonColor = require('../../../native-base-theme/variables/commonColor');

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var SignUp = function (_Component) {
  babelHelpers.inherits(SignUp, _Component);

  function SignUp(props) {
    babelHelpers.classCallCheck(this, SignUp);

    var _this = babelHelpers.possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

    _this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
    _this.constructor.childContextTypes = {
      theme: _react2.default.PropTypes.object
    };
    return _this;
  }

  babelHelpers.createClass(SignUp, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, {
          backgroundColor: _commonColor2.default.statusBarColor,
          barStyle: 'light-content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }),
        _react2.default.createElement(
          _reactNative.Image,
          { source: require('../../../images/BG-signUp.png'), style: _styles2.default.background, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          },
          _react2.default.createElement(
            _nativeBase.Content,
            { padder: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              { style: _styles2.default.signupHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              'CREATE ACCOUNT'
            ),
            _react2.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.signupContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              _react2.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'person', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                }),
                _react2.default.createElement(_nativeBase.Input, {
                  placeholder: 'Username', style: _styles2.default.input,
                  placeholderTextColor: '#FFF',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'mail-open', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                }),
                _react2.default.createElement(_nativeBase.Input, {
                  placeholder: 'Email', style: _styles2.default.input,
                  placeholderTextColor: '#FFF',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'unlock', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                }),
                _react2.default.createElement(_nativeBase.Input, {
                  placeholder: 'Password', secureTextEntry: true, style: _styles2.default.input,
                  placeholderTextColor: '#FFF',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                {
                  rounded: true, bordered: true, block: true,
                  onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  },
                  style: _styles2.default.signupBtn,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { style: { color: '#FFF' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  'Continue'
                )
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                { block: true, transparent: true, style: { marginTop: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { style: _styles2.default.termsText, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    }
                  },
                  'Terms & Conditions'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return SignUp;
}(_react.Component);

exports.default = (0, _reactRedux.connect)()(SignUp);
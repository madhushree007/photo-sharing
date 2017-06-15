Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/needhelp/index.js';

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

var NeedHelp = function (_Component) {
  babelHelpers.inherits(NeedHelp, _Component);

  function NeedHelp(props) {
    babelHelpers.classCallCheck(this, NeedHelp);

    var _this = babelHelpers.possibleConstructorReturn(this, (NeedHelp.__proto__ || Object.getPrototypeOf(NeedHelp)).call(this, props));

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

  babelHelpers.createClass(NeedHelp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, {
          backgroundColor: _commonColor2.default.statusBarColor,
          barStyle: 'light-content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }),
        _react2.default.createElement(
          _nativeBase.Content,
          { contentOffset: this.state.offset, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          _react2.default.createElement(
            _nativeBase.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            _react2.default.createElement(
              _reactNative.Image,
              { source: require('../../../images/BG-signUp.png'), style: _styles2.default.background, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              _react2.default.createElement(
                _nativeBase.Content,
                { padder: true, scrollEnabled: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { style: _styles2.default.signupHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  },
                  'Forgot Your Password?'
                ),
                _react2.default.createElement(
                  _nativeBase.View,
                  { style: _styles2.default.signupContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Item,
                    { rounded: true, style: _styles2.default.inputGrp, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: 'mail-open', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      }
                    }),
                    _react2.default.createElement(_nativeBase.Input, {
                      placeholder: 'Email', style: _styles2.default.input,
                      placeholderTextColor: '#FFF',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      }
                    })
                  ),
                  _react2.default.createElement(
                    _nativeBase.Button,
                    {
                      rounded: true, block: true, bordered: true,
                      onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.pop();
                      },
                      style: _styles2.default.signupBtn,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: { color: '#FFF' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        }
                      },
                      'Send Email'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.pop();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.termsText, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 58
                        }
                      },
                      'Back To Login'
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
  return NeedHelp;
}(_react.Component);

exports.default = (0, _reactRedux.connect)()(NeedHelp);
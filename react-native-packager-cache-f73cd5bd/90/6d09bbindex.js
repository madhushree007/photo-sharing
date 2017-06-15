Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/needhelp/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
  NeedHelp: {
    displayName: 'NeedHelp'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/needhelp/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var NeedHelp = _wrapComponent('NeedHelp')(function (_Component) {
  _inherits(NeedHelp, _Component);

  function NeedHelp(props) {
    _classCallCheck(this, NeedHelp);

    var _this = _possibleConstructorReturn(this, (NeedHelp.__proto__ || Object.getPrototypeOf(NeedHelp)).call(this, props));

    _this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
    _this.constructor.childContextTypes = {
      theme: _react3.default.PropTypes.object
    };
    return _this;
  }

  _createClass(NeedHelp, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        _react3.default.createElement(_reactNative.StatusBar, {
          backgroundColor: _commonColor2.default.statusBarColor,
          barStyle: 'light-content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }),
        _react3.default.createElement(
          _nativeBase.Content,
          { contentOffset: this.state.offset, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          _react3.default.createElement(
            _nativeBase.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            _react3.default.createElement(
              _reactNative.Image,
              { source: require('../../../images/BG-signUp.png'), style: _styles2.default.background, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              _react3.default.createElement(
                _nativeBase.Content,
                { padder: true, scrollEnabled: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { style: _styles2.default.signupHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  },
                  'Forgot Your Password?'
                ),
                _react3.default.createElement(
                  _nativeBase.View,
                  { style: _styles2.default.signupContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Item,
                    { rounded: true, style: _styles2.default.inputGrp, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      }
                    },
                    _react3.default.createElement(_nativeBase.Icon, { name: 'mail-open', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      }
                    }),
                    _react3.default.createElement(_nativeBase.Input, {
                      placeholder: 'Email', style: _styles2.default.input,
                      placeholderTextColor: '#FFF',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      }
                    })
                  ),
                  _react3.default.createElement(
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
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: { color: '#FFF' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        }
                      },
                      'Send Email'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.pop();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                      }
                    },
                    _react3.default.createElement(
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
}(_react2.Component));

exports.default = (0, _reactRedux.connect)()(NeedHelp);
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/feedback/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = babelHelpers.interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var primary = require('../../themes/variable').brandPrimary;

var Feedback = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Feedback, _Component);

  function Feedback(props) {
    babelHelpers.classCallCheck(this, Feedback);

    var _this = babelHelpers.possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).call(this, props));

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

  babelHelpers.createClass(Feedback, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        { contentOffset: this.state.offset, scrollEnabled: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        _react2.default.createElement(
          _reactNative.Image,
          { source: require('../../../images/BG-signUp.png'), style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react2.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: this.props.openDrawer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                })
              )
            ),
            _react2.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: require('../../../images/Header-Logo.png'), style: _styles2.default.imageHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              })
            ),
            _react2.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.login({ type: _reactNativeRouterFlux.ActionConst.RESET });
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'power', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.Content,
            { showsVerticalScrollIndicator: false, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles2.default.contentIconsContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: _styles2.default.roundedButton, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-call-outline', style: { fontSize: 30, width: 30, color: '#FFF' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      }
                    })
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 68
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: _styles2.default.roundedCustomButton, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-mail-outline', style: { fontSize: 28, color: primary, width: 22, marginLeft: 5 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      }
                    })
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: _styles2.default.roundedButton, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-pin-outline', style: { fontSize: 28, width: 30, color: '#FFF' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      }
                    })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles2.default.feedbackHeaderContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _styles2.default.feedbackHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                'SEND FEEDBACK'
              ),
              _react2.default.createElement(
                _nativeBase.Text,
                { note: true, style: _styles2.default.feedbackHead, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                'Your feedback is very important to us.'
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles2.default.feedbackContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              _react2.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'ios-person-outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  }
                }),
                _react2.default.createElement(_nativeBase.Input, { placeholder: 'Username', placeholderTextColor: 'rgba(255,255,255,0.5)', style: _styles2.default.input, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'ios-mail-outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  }
                }),
                _react2.default.createElement(_nativeBase.Input, { placeholder: 'Email', placeholderTextColor: 'rgba(255,255,255,0.5)', style: _styles2.default.input, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                })
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.feedbackInputBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Item,
                  { iconRight: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    }
                  },
                  _react2.default.createElement(_nativeBase.Input, { placeholder: 'Write something...', placeholderTextColor: 'rgba(255,255,255,0.5)', style: _styles2.default.input, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    }
                  }),
                  _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-forward', style: _styles2.default.forwardIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98
                    }
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Feedback;
}(_react.Component), _class.propTypes = {
  navigation: _react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string
  })
}, _temp);


function bindAction(dispatch) {
  return {
    openDrawer: function openDrawer() {
      return dispatch((0, _drawer.openDrawer)());
    }
  };
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    navigation: state.cardNavigation
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Feedback);
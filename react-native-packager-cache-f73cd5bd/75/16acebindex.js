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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/feedback/index.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = _interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Feedback: {
    displayName: 'Feedback'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/feedback/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var primary = require('../../themes/variable').brandPrimary;

var Feedback = _wrapComponent('Feedback')((_temp = _class = function (_Component) {
  _inherits(Feedback, _Component);

  function Feedback(props) {
    _classCallCheck(this, Feedback);

    var _this = _possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).call(this, props));

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

  _createClass(Feedback, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        { contentOffset: this.state.offset, scrollEnabled: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        _react3.default.createElement(
          _reactNative.Image,
          { source: require('../../../images/BG-signUp.png'), style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          _react3.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react3.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: this.props.openDrawer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                })
              )
            ),
            _react3.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: require('../../../images/Header-Logo.png'), style: _styles2.default.imageHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              })
            ),
            _react3.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.login({ type: _reactNativeRouterFlux.ActionConst.RESET });
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'power', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                })
              )
            )
          ),
          _react3.default.createElement(
            _nativeBase.Content,
            { showsVerticalScrollIndicator: false, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            _react3.default.createElement(
              _reactNative.View,
              { style: _styles2.default.contentIconsContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              _react3.default.createElement(
                _reactNativeEasyGrid.Grid,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: _styles2.default.roundedButton, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                      }
                    },
                    _react3.default.createElement(_nativeBase.Icon, { name: 'ios-call-outline', style: { fontSize: 30, width: 30, color: '#FFF' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      }
                    })
                  )
                ),
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 68
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: _styles2.default.roundedCustomButton, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                      }
                    },
                    _react3.default.createElement(_nativeBase.Icon, { name: 'ios-mail-outline', style: { fontSize: 28, color: primary, width: 22, marginLeft: 5 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      }
                    })
                  )
                ),
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: _styles2.default.roundedButton, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      }
                    },
                    _react3.default.createElement(_nativeBase.Icon, { name: 'ios-pin-outline', style: { fontSize: 28, width: 30, color: '#FFF' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      }
                    })
                  )
                )
              )
            ),
            _react3.default.createElement(
              _reactNative.View,
              { style: _styles2.default.feedbackHeaderContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              _react3.default.createElement(
                _nativeBase.Text,
                { style: _styles2.default.feedbackHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                'SEND FEEDBACK'
              ),
              _react3.default.createElement(
                _nativeBase.Text,
                { note: true, style: _styles2.default.feedbackHead, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                'Your feedback is very important to us.'
              )
            ),
            _react3.default.createElement(
              _reactNative.View,
              { style: _styles2.default.feedbackContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              _react3.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { name: 'ios-person-outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  }
                }),
                _react3.default.createElement(_nativeBase.Input, { placeholder: 'Username', placeholderTextColor: 'rgba(255,255,255,0.5)', style: _styles2.default.input, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { name: 'ios-mail-outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  }
                }),
                _react3.default.createElement(_nativeBase.Input, { placeholder: 'Email', placeholderTextColor: 'rgba(255,255,255,0.5)', style: _styles2.default.input, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                })
              ),
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.feedbackInputBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Item,
                  { iconRight: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    }
                  },
                  _react3.default.createElement(_nativeBase.Input, { placeholder: 'Write something...', placeholderTextColor: 'rgba(255,255,255,0.5)', style: _styles2.default.input, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    }
                  }),
                  _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-forward', style: _styles2.default.forwardIcon, __source: {
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
}(_react2.Component), _class.propTypes = {
  navigation: _react3.default.PropTypes.shape({
    key: _react3.default.PropTypes.string
  })
}, _temp));

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
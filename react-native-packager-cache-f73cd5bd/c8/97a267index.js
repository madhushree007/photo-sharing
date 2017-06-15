Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/settings/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var primary = require('../../themes/variable').brandPrimary;

var Settings = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Settings, _Component);

  function Settings(props) {
    babelHelpers.classCallCheck(this, Settings);

    var _this = babelHelpers.possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

    _this.state = {
      monSwitch: true,
      tueSwitch: false,
      wedSwitch: false,
      thuSwitch: false,
      friSwitch: false,
      satSwitch: false,
      sunSwitch: false,
      Username: '',
      email: '',
      password: '',
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

  babelHelpers.createClass(Settings, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        _react2.default.createElement(
          _nativeBase.Header,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { transparent: true, onPress: this.props.openDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              })
            )
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            _react2.default.createElement(_reactNative.Image, { source: require('../../../images/Header-Logo.png'), style: _styles2.default.imageHeader, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              {
                transparent: true,
                onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.login({ type: _reactNativeRouterFlux.ActionConst.RESET });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'power', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles2.default.bg, __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              { style: _styles2.default.signupHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              'SETTINGS'
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: { marginTop: 20 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 78
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: _styles2.default.roundedButton, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: 'cloud-upload', style: _reactNative.Platform.OS === 'android' ? { color: '#FFF', width: 23 } : { color: '#FFF', width: 22 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      }
                    })
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { style: { alignSelf: 'center' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      }
                    },
                    _react2.default.createElement(_nativeBase.Thumbnail, { source: require('../../../images/contacts/sanket.png'), style: _styles2.default.profilePic, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      }
                    })
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 88
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, style: _styles2.default.roundedButton, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: 'cloud-download', style: _reactNative.Platform.OS === 'android' ? { color: '#FFF', width: 23 } : { lineHeight: 0, color: '#FFF', width: 22 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                      }
                    })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles2.default.signupContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                }
              },
              _react2.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'ios-person-outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  }
                }),
                _react2.default.createElement(_nativeBase.Input, { placeholder: 'Username', placeholderTextColor: 'rgba(255,255,255,0.5)', style: _styles2.default.input, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'ios-mail-open-outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  }
                }),
                _react2.default.createElement(_nativeBase.Input, { placeholder: 'Email', placeholderTextColor: 'rgba(255,255,255,0.5)', style: _styles2.default.input, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Item,
                { rounded: true, style: _styles2.default.inputGrp, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'ios-unlock-outline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                }),
                _react2.default.createElement(_nativeBase.Input, { placeholder: 'Password', placeholderTextColor: 'rgba(255,255,255,0.5)', secureTextEntry: true, style: _styles2.default.input, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles2.default.notificationSwitchContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              { style: _styles2.default.notificationHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              'EMAIL NOTIFICATIONS'
            ),
            _react2.default.createElement(
              _reactNative.View,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              },
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchText : _styles2.default.switchText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      }
                    },
                    'Monday'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchContainer : _styles2.default.switchContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 117
                    }
                  },
                  _react2.default.createElement(_reactNative.Switch, {
                    onValueChange: function onValueChange(value) {
                      return _this2.setState({ monSwitch: value });
                    },
                    onTintColor: primary,
                    style: _styles2.default.switch,
                    thumbTintColor: '#ccc',
                    tintColor: '#aaa',
                    value: this.state.monSwitch,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118
                    }
                  })
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 129
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchText : _styles2.default.switchText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 130
                      }
                    },
                    'Tuesday'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchContainer : _styles2.default.switchContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 132
                    }
                  },
                  _react2.default.createElement(_reactNative.Switch, {
                    onValueChange: function onValueChange(value) {
                      return _this2.setState({ tueSwitch: value });
                    },
                    onTintColor: primary,
                    style: _styles2.default.switch,
                    thumbTintColor: '#ccc',
                    tintColor: '#aaa',
                    value: this.state.tueSwitch,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 133
                    }
                  })
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 144
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchText : _styles2.default.switchText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 145
                      }
                    },
                    'Wednesday'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchContainer : _styles2.default.switchContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 147
                    }
                  },
                  _react2.default.createElement(_reactNative.Switch, {
                    onValueChange: function onValueChange(value) {
                      return _this2.setState({ wedSwitch: value });
                    },
                    onTintColor: primary,
                    style: _styles2.default.switch,
                    thumbTintColor: '#ccc',
                    tintColor: '#aaa',
                    value: this.state.wedSwitch,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 148
                    }
                  })
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 159
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchText : _styles2.default.switchText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 160
                      }
                    },
                    'Thursday'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchContainer : _styles2.default.switchContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 162
                    }
                  },
                  _react2.default.createElement(_reactNative.Switch, {
                    onValueChange: function onValueChange(value) {
                      return _this2.setState({ thuSwitch: value });
                    },
                    onTintColor: primary,
                    style: _styles2.default.switch,
                    thumbTintColor: '#ccc',
                    tintColor: '#aaa',
                    value: this.state.thuSwitch,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 163
                    }
                  })
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 174
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchText : _styles2.default.switchText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 175
                      }
                    },
                    'Friday'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchContainer : _styles2.default.switchContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 177
                    }
                  },
                  _react2.default.createElement(_reactNative.Switch, {
                    onValueChange: function onValueChange(value) {
                      return _this2.setState({ friSwitch: value });
                    },
                    onTintColor: primary,
                    style: _styles2.default.switch,
                    thumbTintColor: '#ccc',
                    tintColor: '#aaa',
                    value: this.state.friSwitch,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 178
                    }
                  })
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 189
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchText : _styles2.default.switchText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 190
                      }
                    },
                    'Saturday'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchContainer : _styles2.default.switchContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 192
                    }
                  },
                  _react2.default.createElement(_reactNative.Switch, {
                    onValueChange: function onValueChange(value) {
                      return _this2.setState({ satSwitch: value });
                    },
                    onTintColor: primary,
                    style: _styles2.default.switch,
                    thumbTintColor: '#ccc',
                    tintColor: '#aaa',
                    value: this.state.satSwitch,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 193
                    }
                  })
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 204
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchText : _styles2.default.switchText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 205
                      }
                    },
                    'Sunday'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: _reactNative.Platform.OS === 'android' ? _styles2.default.aswitchContainer : _styles2.default.switchContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 207
                    }
                  },
                  _react2.default.createElement(_reactNative.Switch, {
                    onValueChange: function onValueChange(value) {
                      return _this2.setState({ sunSwitch: value });
                    },
                    onTintColor: primary,
                    style: _styles2.default.switch,
                    thumbTintColor: '#ccc',
                    tintColor: '#aaa',
                    value: this.state.sunSwitch,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 208
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
  return Settings;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Settings);
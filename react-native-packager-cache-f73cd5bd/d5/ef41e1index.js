Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/calendar/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _reactNativeCalendarPicker = require('react-native-calendar-picker');

var _reactNativeCalendarPicker2 = babelHelpers.interopRequireDefault(_reactNativeCalendarPicker);

var _drawer = require('../../actions/drawer');

var _headerContent = require('./../headerContent/');

var _headerContent2 = babelHelpers.interopRequireDefault(_headerContent);

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = babelHelpers.interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var headerLogo = require('../../../images/Header-Logo.png');

var Calendar = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Calendar, _Component);

  function Calendar(props) {
    babelHelpers.classCallCheck(this, Calendar);

    var _this = babelHelpers.possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = {
      date: new Date()
    };
    return _this;
  }

  babelHelpers.createClass(Calendar, [{
    key: 'onDateChange',
    value: function onDateChange(date) {
      this.setState({ date: date });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        _react2.default.createElement(
          _nativeBase.Header,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { transparent: true, style: _styles2.default.btnHeader, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.popTo('home');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              })
            )
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            _react2.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { transparent: true, style: _styles2.default.btnHeader, onPress: this.props.openDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: _styles2.default.bg, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            _react2.default.createElement(_reactNativeCalendarPicker2.default, {
              selectedDate: this.state.date,
              onDateChange: this.onDateChange.bind(this),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { backgroundColor: '#fff' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/1.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  'Flat App is focussed on a minimal use of simple elements.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                          }
                        },
                        'CDC'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 81
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                          }
                        },
                        'ENVIRONMENT'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/3.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    }
                  },
                  'So that the applications are able to load faster and reaize easily.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                          }
                        },
                        'SPACE.com'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 101
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 102
                          }
                        },
                        'SCIENCE'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/4.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  },
                  'But still look sharp on high-definition screens.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 117
                          }
                        },
                        'SKY.com'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 121
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 122
                          }
                        },
                        'WORLD'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 128
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/11.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 131
                    }
                  },
                  'Highly customizable widgets are part of our never ending mission.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 134
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 135
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 136
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 137
                          }
                        },
                        'ESPN'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 141
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 142
                          }
                        },
                        'SPORTS'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/13.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 151
                    }
                  },
                  'Ready to use components built using NativeBase.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 154
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 155
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 156
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 157
                          }
                        },
                        'EDU.com'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 160
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 161
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 162
                          }
                        },
                        'EDUCATION'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 168
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/12.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 169
                }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 171
                    }
                  },
                  'Theme your app with one single file.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 174
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 175
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 176
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 177
                          }
                        },
                        'ART.com'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 180
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 181
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 182
                          }
                        },
                        'ART'
                      )
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
  return Calendar;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Calendar);
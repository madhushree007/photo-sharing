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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/calendar/index.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _reactNativeCalendarPicker = require('react-native-calendar-picker');

var _reactNativeCalendarPicker2 = _interopRequireDefault(_reactNativeCalendarPicker);

var _drawer = require('../../actions/drawer');

var _headerContent = require('./../headerContent/');

var _headerContent2 = _interopRequireDefault(_headerContent);

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = _interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Calendar: {
    displayName: 'Calendar'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/calendar/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var headerLogo = require('../../../images/Header-Logo.png');

var Calendar = _wrapComponent('Calendar')((_temp = _class = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = {
      date: new Date()
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'onDateChange',
    value: function onDateChange(date) {
      this.setState({ date: date });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        _react3.default.createElement(
          _nativeBase.Header,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          _react3.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react3.default.createElement(
              _nativeBase.Button,
              { transparent: true, style: _styles2.default.btnHeader, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.popTo('home');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              })
            )
          ),
          _react3.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            _react3.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            })
          ),
          _react3.default.createElement(
            _nativeBase.Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            _react3.default.createElement(
              _nativeBase.Button,
              { transparent: true, style: _styles2.default.btnHeader, onPress: this.props.openDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              })
            )
          )
        ),
        _react3.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: _styles2.default.bg, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            _react3.default.createElement(_reactNativeCalendarPicker2.default, {
              selectedDate: this.state.date,
              onDateChange: this.onDateChange.bind(this),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            })
          ),
          _react3.default.createElement(
            _reactNative.View,
            { style: { backgroundColor: '#fff' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            _react3.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/1.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              }),
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  'Flat App is focussed on a minimal use of simple elements.'
                ),
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        }
                      },
                      _react3.default.createElement(
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
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 81
                        }
                      },
                      _react3.default.createElement(
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
            _react3.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/3.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              }),
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    }
                  },
                  'So that the applications are able to load faster and reaize easily.'
                ),
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        }
                      },
                      _react3.default.createElement(
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
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 101
                        }
                      },
                      _react3.default.createElement(
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
            _react3.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/4.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                }
              }),
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  },
                  'But still look sharp on high-definition screens.'
                ),
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        }
                      },
                      _react3.default.createElement(
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
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 121
                        }
                      },
                      _react3.default.createElement(
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
            _react3.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 128
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/11.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                }
              }),
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 131
                    }
                  },
                  'Highly customizable widgets are part of our never ending mission.'
                ),
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 134
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 135
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 136
                        }
                      },
                      _react3.default.createElement(
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
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 141
                        }
                      },
                      _react3.default.createElement(
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
            _react3.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/13.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                }
              }),
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 151
                    }
                  },
                  'Ready to use components built using NativeBase.'
                ),
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 154
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 155
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 156
                        }
                      },
                      _react3.default.createElement(
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
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 160
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 161
                        }
                      },
                      _react3.default.createElement(
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
            _react3.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 168
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: require('../../../images/NewsIcons/12.jpg'), style: _styles2.default.newsImage, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 169
                }
              }),
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 171
                    }
                  },
                  'Theme your app with one single file.'
                ),
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { marginTop: 25 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 174
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 175
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 176
                        }
                      },
                      _react3.default.createElement(
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
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 180
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 181
                        }
                      },
                      _react3.default.createElement(
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Calendar);
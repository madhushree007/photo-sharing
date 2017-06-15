Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/widgets/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = babelHelpers.interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var primary = require('../../themes/variable').brandPrimary;

var Widgets = function (_Component) {
  babelHelpers.inherits(Widgets, _Component);

  function Widgets() {
    babelHelpers.classCallCheck(this, Widgets);
    return babelHelpers.possibleConstructorReturn(this, (Widgets.__proto__ || Object.getPrototypeOf(Widgets)).apply(this, arguments));
  }

  babelHelpers.createClass(Widgets, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        _react2.default.createElement(
          _reactNative.Image,
          { source: require('../../../images/glow2.png'), style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            _react2.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: this.props.openDrawer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                })
              )
            ),
            _react2.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: require('../../../images/Header-Logo.png'), style: _styles2.default.imageHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              })
            ),
            _react2.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'add', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.Content,
            { showsVerticalScrollIndicator: false, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles2.default.overviewHeaderContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _styles2.default.overviewHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                'WIDGETS'
              )
            ),
            _react2.default.createElement(
              _reactNative.Image,
              { source: require('../../../images/Widgets/widget1.png'), style: _styles2.default.mainWidget, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: _styles2.default.mainWidgetContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-cloud-outline', style: { fontSize: 40 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  }),
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: { fontWeight: '700' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      }
                    },
                    'Mostly Cloudy'
                  ),
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: { opacity: 0.7, fontWeight: '700' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      }
                    },
                    'Bangalore'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: { alignItems: 'flex-end' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.View,
                    { style: { flexDirection: 'row' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.weather, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        }
                      },
                      '38'
                    ),
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-radio-button-off', style: { fontSize: 16, marginTop: 5 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                      }
                    })
                  )
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Grid,
                { style: _styles2.default.weatherInfoContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: { alignItems: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherInfo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    '30'
                  ),
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherTime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      }
                    },
                    '8 AM'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: { alignItems: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherInfo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                      }
                    },
                    '43'
                  ),
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherTime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                      }
                    },
                    '12 PM'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: { alignItems: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherInfo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      }
                    },
                    '39'
                  ),
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherTime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      }
                    },
                    '4 PM'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: { alignItems: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherInfo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      }
                    },
                    '37'
                  ),
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherTime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      }
                    },
                    '8 PM'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: { alignItems: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherInfo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                      }
                    },
                    '34'
                  ),
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherTime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      }
                    },
                    '12 AM'
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  { style: { alignItems: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherInfo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      }
                    },
                    '28'
                  ),
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.weatherTime, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                      }
                    },
                    '4 AM'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNativeEasyGrid.Grid,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              _react2.default.createElement(
                _reactNativeEasyGrid.Col,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                _react2.default.createElement(
                  _reactNative.Image,
                  { source: require('../../../images/Widgets/widget2.png'), style: _styles2.default.otherWidget, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 90
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.View,
                    { style: _styles2.default.otherWidgetContainer, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.widgetName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 92
                        }
                      },
                      'KUMAR SANKET'
                    ),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.blueRatingPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 95
                        }
                      },
                      '+0.51%'
                    ),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.ratingNum, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        }
                      },
                      '5,055.55'
                    ),
                    _react2.default.createElement(
                      _nativeBase.Button,
                      {
                        bordered: true,
                        rounded: true, small: true,
                        style: _styles2.default.detailsBtn,
                        textStyle: _reactNative.Platform.OS === 'android' ? { color: primary, fontSize: 12, fontWeight: '900', textAlign: 'center' } : { color: primary, fontSize: 12, fontWeight: '900', textAlign: 'center' },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 97
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                          }
                        },
                        'Details'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Col,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                },
                _react2.default.createElement(
                  _reactNative.Image,
                  { source: require('../../../images/Widgets/widget3.png'), style: _styles2.default.otherWidget, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.View,
                    { style: _styles2.default.otherWidgetContainer, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.widgetName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 113
                        }
                      },
                      'KUMAR PRATIK'
                    ),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.redRatingPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        }
                      },
                      '-0.31%'
                    ),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.ratingNum, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 117
                        }
                      },
                      '4,567.00'
                    ),
                    _react2.default.createElement(
                      _nativeBase.Button,
                      {
                        bordered: true,
                        rounded: true, small: true,
                        style: _styles2.default.detailsBtn,
                        textStyle: _reactNative.Platform.OS === 'android' ? { color: primary, fontSize: 12, fontWeight: '900', textAlign: 'center' } : { color: primary, fontSize: 12, fontWeight: '900', textAlign: 'center' },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 118
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 126
                          }
                        },
                        'Details'
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
  return Widgets;
}(_react.Component);

function bindAction(dispatch) {
  return {
    openDrawer: function openDrawer() {
      return dispatch((0, _drawer.openDrawer)());
    }
  };
}

exports.default = (0, _reactRedux.connect)(null, bindAction)(Widgets);
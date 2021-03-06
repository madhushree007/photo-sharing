Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/tabOne.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var TabOne = (_temp = _class = function (_Component) {
  babelHelpers.inherits(TabOne, _Component);

  function TabOne() {
    babelHelpers.classCallCheck(this, TabOne);
    return babelHelpers.possibleConstructorReturn(this, (TabOne.__proto__ || Object.getPrototypeOf(TabOne)).apply(this, arguments));
  }

  babelHelpers.createClass(TabOne, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        _react2.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            _react2.default.createElement(
              _reactNativeEasyGrid.Grid,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              _react2.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/9.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 31
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                          }
                        },
                        'FASHION'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/2.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          }
                        },
                        'SCIENCE'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/8.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 47
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                          }
                        },
                        'AUTO'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/7.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                          }
                        },
                        'TECHNOLOGY'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/6.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                          }
                        },
                        'FINANCES'
                      )
                    )
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
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/1.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 70
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                          }
                        },
                        'ENVIRONMENT'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/11.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 79
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                          }
                        },
                        'SPORTS'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/12.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 86
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                          }
                        },
                        'ART'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/10.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 95
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 96
                          }
                        },
                        'ANIMATION'
                      )
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
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/13.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                          }
                        },
                        'EDUCATION'
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
  return TabOne;
}(_react.Component), _class.propTypes = {
  navigation: _react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string
  })
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  return {
    navigation: state.cardNavigation
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TabOne);
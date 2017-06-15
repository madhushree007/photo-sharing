Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/tabThree.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _drawer = require('../../actions/drawer');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var TabThree = (_temp = _class = function (_Component) {
  babelHelpers.inherits(TabThree, _Component);

  function TabThree() {
    babelHelpers.classCallCheck(this, TabThree);
    return babelHelpers.possibleConstructorReturn(this, (TabThree.__proto__ || Object.getPrototypeOf(TabThree)).apply(this, arguments));
  }

  babelHelpers.createClass(TabThree, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react2.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            _react2.default.createElement(
              _reactNativeEasyGrid.Grid,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              _react2.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/11.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
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
                      lineNumber: 39
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/12.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
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
                    lineNumber: 47
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/8.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 50
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
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
                      lineNumber: 55
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/7.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 57
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 58
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
                    lineNumber: 63
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/6.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 66
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
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
                      lineNumber: 71
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/1.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 73
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
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
                    lineNumber: 79
                  }
                },
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
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/9.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 82
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
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
                      lineNumber: 87
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/2.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 89
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
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
                    lineNumber: 95
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/10.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 98
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99
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
                      lineNumber: 103
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/13.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 105
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelImgText : _styles2.default.ioschannelImgText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 106
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
  return TabThree;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TabThree);
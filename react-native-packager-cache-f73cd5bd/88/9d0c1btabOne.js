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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/tabOne.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TabOne: {
    displayName: 'TabOne'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/tabOne.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var TabOne = _wrapComponent('TabOne')((_temp = _class = function (_Component) {
  _inherits(TabOne, _Component);

  function TabOne() {
    _classCallCheck(this, TabOne);

    return _possibleConstructorReturn(this, (TabOne.__proto__ || Object.getPrototypeOf(TabOne)).apply(this, arguments));
  }

  _createClass(TabOne, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        _react3.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            _react3.default.createElement(
              _reactNativeEasyGrid.Grid,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/9.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 31
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/2.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        }
                      },
                      _react3.default.createElement(
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
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/8.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 47
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/7.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        }
                      },
                      _react3.default.createElement(
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
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/6.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 68
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/1.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 70
                        }
                      },
                      _react3.default.createElement(
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
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/11.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 79
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/12.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 86
                        }
                      },
                      _react3.default.createElement(
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
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/10.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 95
                        }
                      },
                      _react3.default.createElement(
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
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/13.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        }
                      },
                      _react3.default.createElement(
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
}(_react2.Component), _class.propTypes = {
  navigation: _react3.default.PropTypes.shape({
    key: _react3.default.PropTypes.string
  })
}, _temp));

var mapStateToProps = function mapStateToProps(state) {
  return {
    navigation: state.cardNavigation
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TabOne);
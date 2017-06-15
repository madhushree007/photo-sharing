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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/tabThree.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _drawer = require('../../actions/drawer');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TabThree: {
    displayName: 'TabThree'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/tabThree.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var TabThree = _wrapComponent('TabThree')((_temp = _class = function (_Component) {
  _inherits(TabThree, _Component);

  function TabThree() {
    _classCallCheck(this, TabThree);

    return _possibleConstructorReturn(this, (TabThree.__proto__ || Object.getPrototypeOf(TabThree)).apply(this, arguments));
  }

  _createClass(TabThree, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react3.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            _react3.default.createElement(
              _reactNativeEasyGrid.Grid,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/11.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/12.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41
                        }
                      },
                      _react3.default.createElement(
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
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/8.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 50
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/7.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 57
                        }
                      },
                      _react3.default.createElement(
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
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/6.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 66
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/1.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 73
                        }
                      },
                      _react3.default.createElement(
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
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                },
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
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/9.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 82
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/2.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 89
                        }
                      },
                      _react3.default.createElement(
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
              _react3.default.createElement(
                _reactNativeEasyGrid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/10.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 98
                        }
                      },
                      _react3.default.createElement(
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
                _react3.default.createElement(
                  _reactNativeEasyGrid.Col,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 103
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.channel();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.Image,
                      { source: require('../../../images/NewsIcons/13.jpg'), style: _styles2.default.channelImg, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 105
                        }
                      },
                      _react3.default.createElement(
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TabThree);
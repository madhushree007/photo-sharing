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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channel/index.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Channel: {
    displayName: 'Channel'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channel/index.js',
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
var primary = require('../../themes/variable').brandPrimary;

var Channel = _wrapComponent('Channel')((_temp = _class = function (_Component) {
  _inherits(Channel, _Component);

  function Channel() {
    _classCallCheck(this, Channel);

    return _possibleConstructorReturn(this, (Channel.__proto__ || Object.getPrototypeOf(Channel)).apply(this, arguments));
  }

  _createClass(Channel, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        _react3.default.createElement(
          _reactNative.Image,
          { source: require('../../../images/glow2.png'), style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          _react3.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            _react3.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  }
                })
              )
            ),
            _react3.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              })
            ),
            _react3.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: this.props.openDrawer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                })
              )
            )
          ),
          _react3.default.createElement(
            _nativeBase.Content,
            { showsVerticalScrollIndicator: false, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            _react3.default.createElement(
              _reactNative.View,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              _react3.default.createElement(
                _reactNative.Image,
                { source: require('../../../images/NewsIcons/2.jpg'), style: _styles2.default.newsPoster, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { style: _reactNative.Platform.OS === 'android' ? _styles2.default.achannelHeader : _styles2.default.ioschannelHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      }
                    },
                    'SCIENCE CHANNEL'
                  ),
                  _react3.default.createElement(
                    _nativeBase.Button,
                    {
                      rounded: true,
                      style: _styles2.default.followBtn,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      {
                        style: _reactNative.Platform.OS === 'android' ? { color: primary, fontSize: 13, fontWeight: '900', textAlign: 'center' } : { color: primary, fontSize: 13, fontWeight: '900' },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        }
                      },
                      'Following'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { style: { padding: 0 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.noOfFollowers, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 61
                        }
                      },
                      '234K Followers'
                    )
                  )
                )
              )
            ),
            _react3.default.createElement(
              _reactNative.View,
              { foregroundColor: 'white', style: { backgroundColor: '#fff' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              _react3.default.createElement(
                _reactNative.TouchableOpacity,
                { style: { flexDirection: 'row' }, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.story();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.newsContentWrap, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      }
                    },
                    'Earth formed around 4.54 billion years ago by accretion from the solar nebula.'
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Grid,
                    { style: _styles2.default.newsContent, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                      }
                    },
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      { style: { flexDirection: 'row' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 74
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                          }
                        },
                        _react3.default.createElement(
                          _nativeBase.Text,
                          { style: _styles2.default.newsLink, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 76
                            }
                          },
                          'CNN'
                        )
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 78
                        }
                      }),
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                          }
                        },
                        'May 24, 2016'
                      )
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.TouchableOpacity,
                { style: { flexDirection: 'row' }, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.story();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.newsContentWrap, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                      }
                    },
                    ' A "giant impact" collision is thought to have been responsible for forming the Moon.'
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Grid,
                    { style: _styles2.default.newsContent, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                      }
                    },
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      { style: { flexDirection: 'row' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 88
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89
                          }
                        },
                        _react3.default.createElement(
                          _nativeBase.Text,
                          { style: _styles2.default.newsLink, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 90
                            }
                          },
                          'SPACE.com'
                        )
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 92
                        }
                      }),
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 93
                          }
                        },
                        'Apr 17, 2016'
                      )
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.TouchableOpacity,
                { style: { flexDirection: 'row' }, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.story();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.newsContentWrap, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 99
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      }
                    },
                    'Living forms derived from photosynthesis appeared between 3.2 and 2.4 billion years ago.'
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Grid,
                    { style: _styles2.default.newsContent, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                      }
                    },
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      { style: { flexDirection: 'row' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 104
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                          }
                        },
                        _react3.default.createElement(
                          _nativeBase.Text,
                          { style: _styles2.default.newsLink, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 106
                            }
                          },
                          'CNN'
                        )
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 108
                        }
                      }),
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 109
                          }
                        },
                        'Feb 03, 2016'
                      )
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.TouchableOpacity,
                { style: { flexDirection: 'row' }, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.story();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.newsContentWrap, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 115
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 116
                      }
                    },
                    'Life remained mostly small and microscopic until about 580 million years ago.'
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Grid,
                    { style: _styles2.default.newsContent, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                      }
                    },
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      { style: { flexDirection: 'row' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 118
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 119
                          }
                        },
                        _react3.default.createElement(
                          _nativeBase.Text,
                          { style: _styles2.default.newsLink, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 120
                            }
                          },
                          'SKY.com'
                        )
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 122
                        }
                      }),
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 123
                          }
                        },
                        'Dec 17, 2015'
                      )
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.TouchableOpacity,
                { style: { flexDirection: 'row' }, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.story();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.newsContentWrap, __source: {
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
                    'The history of Earth is divided into four great eons.'
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Grid,
                    { style: _styles2.default.newsContent, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 132
                      }
                    },
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      { style: { flexDirection: 'row' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 133
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 134
                          }
                        },
                        _react3.default.createElement(
                          _nativeBase.Text,
                          { style: _styles2.default.newsLink, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 135
                            }
                          },
                          'SPACE.com'
                        )
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 137
                        }
                      }),
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 138
                          }
                        },
                        'Apr 17, 2016'
                      )
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.TouchableOpacity,
                { style: { flexDirection: 'row' }, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.story();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.newsContentWrap, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 144
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 145
                      }
                    },
                    'The Earth and Moon have the same oxygen isotopic signature.'
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Grid,
                    { style: _styles2.default.newsContent, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 148
                      }
                    },
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      { style: { flexDirection: 'row' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 149
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 150
                          }
                        },
                        _react3.default.createElement(
                          _nativeBase.Text,
                          { style: _styles2.default.newsLink, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 151
                            }
                          },
                          'CNN'
                        )
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 153
                        }
                      }),
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 154
                          }
                        },
                        'Feb 03, 2016'
                      )
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.TouchableOpacity,
                { style: { flexDirection: 'row' }, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.story();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.newsContentWrap, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 160
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 161
                      }
                    },
                    'Ice might have covered the oceans 3 billion years ago.'
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Grid,
                    { style: _styles2.default.newsContent, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 162
                      }
                    },
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      { style: { flexDirection: 'row' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 163
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 164
                          }
                        },
                        _react3.default.createElement(
                          _nativeBase.Text,
                          { style: _styles2.default.newsLink, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 165
                            }
                          },
                          'SKY.com'
                        )
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 167
                        }
                      }),
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 168
                          }
                        },
                        'Dec 17, 2015'
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

  return Channel;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Channel);
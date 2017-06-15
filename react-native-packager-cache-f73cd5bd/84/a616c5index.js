Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/story/index.js',
    _class,
    _temp;

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _reactNativeLightbox = require('react-native-lightbox');

var _reactNativeLightbox2 = _interopRequireDefault(_reactNativeLightbox);

var _reactNativeSimpleModal = require('react-native-simple-modal');

var _reactNativeSimpleModal2 = _interopRequireDefault(_reactNativeSimpleModal);

var _reactNativeSwiper = require('react-native-swiper');

var _reactNativeSwiper2 = _interopRequireDefault(_reactNativeSwiper);

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
  Story: {
    displayName: 'Story'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/story/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var deviceWidth = _reactNative.Dimensions.get('window').width;
var primary = require('../../themes/variable').brandPrimary;

var renderPagination = function renderPagination(index, total, context) {
  return _react3.default.createElement(
    _reactNative.View,
    { style: { position: 'absolute', bottom: -25, right: 10 }, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    },
    _react3.default.createElement(
      _nativeBase.Text,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      },
      _react3.default.createElement(
        _nativeBase.Text,
        { style: { color: '#007aff', fontSize: 20 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        index + 1
      ),
      '/',
      total
    )
  );
};

var Story = _wrapComponent('Story')((_temp = _class = function (_Component) {
  _inherits(Story, _Component);

  function Story(props) {
    _classCallCheck(this, Story);

    var _this = _possibleConstructorReturn(this, (Story.__proto__ || Object.getPrototypeOf(Story)).call(this, props));

    _this.state = {
      animationType: 'slideInDown',
      open: false,
      value: 0
    };
    return _this;
  }

  _createClass(Story, [{
    key: 'modalO',
    value: function modalO() {
      this.setState({ open: true });
    }
  }, {
    key: 'modalX',
    value: function modalX() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        _nativeBase.Container,
        { style: { backgroundColor: '#fff' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        _react3.default.createElement(
          _reactNative.Image,
          { source: require('../../../images/glow2.png'), style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          _react3.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            _react3.default.createElement(
              _nativeBase.Body,
              { style: { flexDirection: 'row', justifyContent: 'space-around' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', style: _styles2.default.headerIcons, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.comments();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { name: 'chatboxes', style: _styles2.default.headerIcons, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _this2.modalO();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  { style: _styles2.default.headerTextIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 68
                    }
                  },
                  'Aa'
                )
              ),
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { name: 'bookmarks', style: _styles2.default.headerIcons, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { name: 'download', style: _styles2.default.headerIcons, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                })
              )
            )
          ),
          _react3.default.createElement(
            _nativeBase.Content,
            { showsVerticalScrollIndicator: false, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            _react3.default.createElement(
              _reactNative.View,
              { style: { flex: 1 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              _react3.default.createElement(
                _reactNative.View,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                _react3.default.createElement(
                  _reactNative.Image,
                  { source: require('../../../images/NewsIcons/5.jpg'), style: _styles2.default.newsPoster, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 82
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.View,
                      { style: _styles2.default.newsPosterContent, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 84
                        }
                      },
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { numberOfLines: 2, style: _styles2.default.newsPosterHeader, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                          }
                        },
                        'Flat App Theme'
                      )
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.View,
                { style: { backgroundColor: '#fff' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  }
                },
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.newsContent, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Grid,
                    { style: { paddingBottom: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      }
                    },
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      { style: { flexDirection: 'row' }, __source: {
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
                          'CDC'
                        )
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 99
                        }
                      }),
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                          }
                        },
                        '1h ago'
                      )
                    ),
                    _react3.default.createElement(
                      _reactNativeEasyGrid.Col,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        { style: _styles2.default.newsTypeView, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                          }
                        },
                        _react3.default.createElement(
                          _nativeBase.Text,
                          { style: _styles2.default.newsTypeText, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 104
                            }
                          },
                          'ENVIRONMENT'
                        )
                      )
                    )
                  ),
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.newsHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                      }
                    },
                    'React Native Flat App Theme, a fascinating React Native starter kit with flat UI design, Redux and NativeBase components for your application.'
                  )
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: { padding: 20 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 113
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.View,
                    { style: _styles2.default.newsCommentContainer, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsComment, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 115
                        }
                      },
                      'It\u2019s a responsive theme with clean and modern look highly focussed on efficiency. The flat design enables resizing the contents easily to fit various screen devices. Eye soothing color makes the React Native Flat app theme simple yet eye catchy and smooth running.'
                    ),
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsComment, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 118
                        }
                      },
                      '- StrapMobile'
                    )
                  ),
                  _react3.default.createElement(
                    _nativeBase.Text,
                    { style: _styles2.default.newsHeader, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120
                      }
                    },
                    'The flat UI design adds an aesthetic touch to the native look and feel of React Native apps.'
                  ),
                  _react3.default.createElement(
                    _reactNative.View,
                    { style: { paddingBottom: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 124
                        }
                      },
                      'NativeBase is a free and open source framework that enables developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNative.View,
                    { style: { paddingBottom: 20, paddingTop: 10 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 129
                        }
                      },
                      'NativeBase builds a layer on top of React Native that provides you with basic set of components for mobile application development. This helps you to build world-class application experiences on native platforms.'
                    )
                  )
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: _styles2.default.wrapper, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 135
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeSwiper2.default,
                    {
                      height: 230,
                      width: deviceWidth + 5,
                      loop: true,
                      dot: _react3.default.createElement(_reactNative.View, { style: _styles2.default.swiperDot, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 140
                        }
                      }),
                      activeDot: _react3.default.createElement(_reactNative.View, {
                        style: _styles2.default.swiperActiveDot,
                        showsButtons: true,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 141
                        }
                      }),
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 136
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.View,
                      { style: _styles2.default.slide, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 146
                        }
                      },
                      _react3.default.createElement(_reactNative.Image, { style: _styles2.default.newsPoster, source: require('../../../images/NewsIcons/1.jpg'), __source: {
                          fileName: _jsxFileName,
                          lineNumber: 147
                        }
                      })
                    ),
                    _react3.default.createElement(
                      _reactNative.View,
                      { style: _styles2.default.slide, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 149
                        }
                      },
                      _react3.default.createElement(_reactNative.Image, { style: _styles2.default.newsPoster, source: require('../../../images/NewsIcons/3.jpg'), __source: {
                          fileName: _jsxFileName,
                          lineNumber: 150
                        }
                      })
                    ),
                    _react3.default.createElement(
                      _reactNative.View,
                      { style: _styles2.default.slide, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 152
                        }
                      },
                      _react3.default.createElement(_reactNative.Image, { style: _styles2.default.newsPoster, source: require('../../../images/NewsIcons/4.jpg'), __source: {
                          fileName: _jsxFileName,
                          lineNumber: 153
                        }
                      })
                    ),
                    _react3.default.createElement(
                      _reactNative.View,
                      { style: _styles2.default.slide, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 155
                        }
                      },
                      _react3.default.createElement(_reactNative.Image, { style: _styles2.default.newsPoster, source: require('../../../images/NewsIcons/5.jpg'), __source: {
                          fileName: _jsxFileName,
                          lineNumber: 156
                        }
                      })
                    )
                  )
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: { alignSelf: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 161
                    }
                  },
                  _react3.default.createElement(
                    _nativeBase.Button,
                    { transparent: true, iconRight: true, onPress: function onPress() {
                        return _reactNativeRouterFlux.Actions.popTo('home');
                      }, textStyle: { color: '#222', fontWeight: '700' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 162
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 163
                        }
                      },
                      'NEXT STORY'
                    ),
                    _react3.default.createElement(_nativeBase.Icon, { name: 'ios-arrow-forward', style: _styles2.default.forwardBtn, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                      }
                    })
                  )
                )
              )
            )
          ),
          _react3.default.createElement(
            _reactNativeSimpleModal2.default,
            {
              offset: this.state.offset,
              open: this.state.open,
              modalDidOpen: function modalDidOpen() {
                return console.log('modal did open');
              },
              modalDidClose: function modalDidClose() {
                return _this2.setState({ open: false });
              },
              onRequestClose: function onRequestClose() {
                return _this2.setState({ open: false });
              },
              style: _styles2.default.modal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 171
              }
            },
            _react3.default.createElement(
              _reactNative.View,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 180
                }
              },
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.modalContentBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { flex: 10, padding: 20 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 182
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { paddingLeft: 30 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 183
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Button,
                      { transparent: true, style: _styles2.default.dayButton, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 184
                        }
                      },
                      _react3.default.createElement(_nativeBase.Icon, {
                        name: 'ios-sunny-outline',
                        style: { color: primary, fontSize: 26 },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 185
                        }
                      })
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { paddingLeft: 80 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 191
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Button,
                      { transparent: true, style: _styles2.default.nightButton, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 192
                        }
                      },
                      _react3.default.createElement(_nativeBase.Icon, {
                        name: 'ios-moon-outline',
                        style: { fontSize: 26, color: '#fff' },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 193
                        }
                      })
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.View,
                { style: _styles2.default.modalContentBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { padding: 20, paddingBottom: 15, justifyContent: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 202
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 203
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      {
                        style: _reactNative.Platform.OS === 'android' ? { fontSize: 12, marginTop: 8 } : { fontSize: 12, marginTop: 8 },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 204
                        }
                      },
                      'CHOOSE TYPESPACE'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 212
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Button,
                      { transparent: true, iconRight: true, style: { marginTop: -5 }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 213
                        }
                      },
                      _react3.default.createElement(
                        _nativeBase.Text,
                        { style: { color: '#FFF' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 214
                          }
                        },
                        'SANS SERIF'
                      ),
                      _react3.default.createElement(_nativeBase.Icon, { name: 'ios-arrow-forward', style: { fontSize: 28 }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 215
                        }
                      })
                    )
                  )
                )
              ),
              _react3.default.createElement(
                _reactNative.View,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: { flexDirection: 'row', paddingTop: 20 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 221
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 222
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.modalSmallText, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 223
                        }
                      },
                      'A'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { alignSelf: 'flex-end' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 225
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.modalLargeText, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 226
                        }
                      },
                      'A'
                    )
                  )
                ),
                _react3.default.createElement(_reactNative.Slider, _extends({}, this.props, { minimumTrackTintColor: '#fff',
                  onValueChange: function onValueChange(value) {
                    return _this2.setState({ value: value });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                  }
                }))
              )
            )
          )
        )
      );
    }
  }]);

  return Story;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Story);
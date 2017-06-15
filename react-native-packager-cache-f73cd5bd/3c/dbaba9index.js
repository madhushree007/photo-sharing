Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/home/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _reactNativeSwiper = require('react-native-swiper');

var _reactNativeSwiper2 = babelHelpers.interopRequireDefault(_reactNativeSwiper);

var _drawer = require('../../actions/drawer');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var deviceWidth = _reactNative.Dimensions.get('window').width;
var headerLogo = require('../../../images/Header-Logo.png');

var Home = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Home, _Component);

  function Home() {
    babelHelpers.classCallCheck(this, Home);
    return babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  babelHelpers.createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        { style: { backgroundColor: '#fff' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        _react2.default.createElement(
          _nativeBase.Header,
          { style: { backgroundColor: '#ddd' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              {
                transparent: true,
                style: _styles2.default.btnHeader,
                onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.login({ type: _reactNativeRouterFlux.ActionConst.RESET });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'power', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              })
            )
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            _react2.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { transparent: true, style: _styles2.default.btnHeader, onPress: this.props.openDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              _react2.default.createElement(
                _reactNativeSwiper2.default,
                {
                  height: 330,
                  width: deviceWidth + 3,
                  loop: true,
                  dot: _react2.default.createElement(_reactNative.View, { style: _styles2.default.swiperDot, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  }),
                  activeDot: _react2.default.createElement(_reactNative.View, {
                    style: _styles2.default.swiperActiveDot,
                    showsButtons: true,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    }
                  }),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                _react2.default.createElement(
                  _reactNative.TouchableOpacity,
                  { activeOpacity: 1, onPress: function onPress() {
                      return _reactNativeRouterFlux.Actions.story();
                    }, style: _styles2.default.slide, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.Image,
                    { style: _styles2.default.newsPoster, source: require('../../../images/NewsIcons/1.jpg'), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.View,
                      { style: _styles2.default.swiperTextContent, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 66
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { numberOfLines: 2, style: _styles2.default.newsPosterHeader, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                          }
                        },
                        'Flat App is a style of interface design emphasizing minimal use of stylistic elements.'
                      ),
                      _react2.default.createElement(
                        _reactNativeEasyGrid.Grid,
                        { style: _styles2.default.swiperContentBox, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                          }
                        },
                        _react2.default.createElement(
                          _reactNativeEasyGrid.Col,
                          { style: { flexDirection: 'row' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 71
                            }
                          },
                          _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                              }
                            },
                            _react2.default.createElement(
                              _nativeBase.Text,
                              { style: _styles2.default.newsPosterLink, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 73
                                }
                              },
                              'SPACE.com'
                            )
                          ),
                          _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.headertimeIcon, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 75
                            }
                          }),
                          _react2.default.createElement(
                            _nativeBase.Text,
                            { style: _styles2.default.newsPosterLink, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                              }
                            },
                            '20m ago'
                          )
                        ),
                        _react2.default.createElement(
                          _reactNativeEasyGrid.Col,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 78
                            }
                          },
                          _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            { style: _styles2.default.newsPosterTypeView, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                              }
                            },
                            _react2.default.createElement(
                              _nativeBase.Text,
                              { style: _styles2.default.newsPosterTypeText, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 80
                                }
                              },
                              'SCIENCE'
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactNative.TouchableOpacity,
                  { activeOpacity: 1, onPress: function onPress() {
                      return _reactNativeRouterFlux.Actions.story();
                    }, style: _styles2.default.slide, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 88
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.Image,
                    { style: _styles2.default.newsPoster, source: require('../../../images/NewsIcons/3.jpg'), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.View,
                      { style: _styles2.default.swiperTextContent, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 90
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { numberOfLines: 2, style: _styles2.default.newsPosterHeader, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 91
                          }
                        },
                        'So that the applications are able to load faster and resize easily.'
                      ),
                      _react2.default.createElement(
                        _reactNativeEasyGrid.Grid,
                        { style: _styles2.default.swiperContentBox, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                          }
                        },
                        _react2.default.createElement(
                          _reactNativeEasyGrid.Col,
                          { style: { flexDirection: 'row' }, __source: {
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
                              { style: _styles2.default.newsPosterLink, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 97
                                }
                              },
                              'CDC'
                            )
                          ),
                          _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.headertimeIcon, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 99
                            }
                          }),
                          _react2.default.createElement(
                            _nativeBase.Text,
                            { style: _styles2.default.newsPosterLink, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 100
                              }
                            },
                            '2hr ago'
                          )
                        ),
                        _react2.default.createElement(
                          _reactNativeEasyGrid.Col,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 102
                            }
                          },
                          _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            { style: _styles2.default.newsPosterTypeView, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 103
                              }
                            },
                            _react2.default.createElement(
                              _nativeBase.Text,
                              { style: _styles2.default.newsPosterTypeText, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 104
                                }
                              },
                              'ENVIRONMENT'
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactNative.TouchableOpacity,
                  { activeOpacity: 1, onPress: function onPress() {
                      return _reactNativeRouterFlux.Actions.story();
                    }, style: _styles2.default.slide, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112
                    }
                  },
                  _react2.default.createElement(
                    _reactNative.Image,
                    { style: _styles2.default.newsPoster, source: require('../../../images/NewsIcons/4.jpg'), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.View,
                      { style: _styles2.default.swiperTextContent, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 114
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { numberOfLines: 2, style: _styles2.default.newsPosterHeader, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 115
                          }
                        },
                        'But still look sharp on high-definition screens.'
                      ),
                      _react2.default.createElement(
                        _reactNativeEasyGrid.Grid,
                        { style: _styles2.default.swiperContentBox, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118
                          }
                        },
                        _react2.default.createElement(
                          _reactNativeEasyGrid.Col,
                          { style: { flexDirection: 'row' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 119
                            }
                          },
                          _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 120
                              }
                            },
                            _react2.default.createElement(
                              _nativeBase.Text,
                              { style: _styles2.default.newsPosterLink, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 121
                                }
                              },
                              'SKY.com'
                            )
                          ),
                          _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.headertimeIcon, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 123
                            }
                          }),
                          _react2.default.createElement(
                            _nativeBase.Text,
                            { style: _styles2.default.newsPosterLink, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 124
                              }
                            },
                            '1day ago'
                          )
                        ),
                        _react2.default.createElement(
                          _reactNativeEasyGrid.Col,
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 126
                            }
                          },
                          _react2.default.createElement(
                            _reactNative.TouchableOpacity,
                            { style: _styles2.default.newsPosterTypeView, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 127
                              }
                            },
                            _react2.default.createElement(
                              _nativeBase.Text,
                              { style: _styles2.default.newsPosterTypeText, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 128
                                }
                              },
                              'WORLD'
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.Card,
            { style: { backgroundColor: '#fff', marginTop: 0, marginRight: 0 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              }
            },
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.story();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 140
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 142
                    }
                  },
                  'Flat App is focused on a minimal use of simple elements, typography and flat colors.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _styles2.default.swiperContentBox, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 145
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { flexDirection: 'row' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 146
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 147
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 148
                          }
                        },
                        'CDC'
                      )
                    ),
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 150
                      }
                    }),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsLink, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 151
                        }
                      },
                      '1h ago'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 153
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 154
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 155
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
                  return _reactNativeRouterFlux.Actions.story();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 162
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 164
                    }
                  },
                  'Highly customizable widgets are part of our never ending mission.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _styles2.default.swiperContentBox, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 167
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { flexDirection: 'row' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 168
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 169
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 170
                          }
                        },
                        'SPACE.com'
                      )
                    ),
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                      }
                    }),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsLink, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 173
                        }
                      },
                      '5h ago'
                    )
                  ),
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
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 176
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 177
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
                  return _reactNativeRouterFlux.Actions.story();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 184
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 186
                    }
                  },
                  'Ready to use components built using NativeBase.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _styles2.default.swiperContentBox, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 189
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { flexDirection: 'row' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 190
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 191
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 192
                          }
                        },
                        'SKY.com'
                      )
                    ),
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 194
                      }
                    }),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsLink, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 195
                        }
                      },
                      '2days ago'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 197
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 198
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 199
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
                  return _reactNativeRouterFlux.Actions.story();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 206
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 208
                    }
                  },
                  'Theme your app with one single file.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _styles2.default.swiperContentBox, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 211
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { flexDirection: 'row' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 212
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 213
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 214
                          }
                        },
                        'ESPN'
                      )
                    ),
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 216
                      }
                    }),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsLink, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 217
                        }
                      },
                      '12days ago'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 219
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 220
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 221
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
                  return _reactNativeRouterFlux.Actions.story();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 229
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 231
                    }
                  },
                  'It is easier with Flat App design to quickly convey information while still looking visually appealing and approachable.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _styles2.default.swiperContentBox, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 234
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { flexDirection: 'row' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 235
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 236
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 237
                          }
                        },
                        'ART.com'
                      )
                    ),
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 239
                      }
                    }),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsLink, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 240
                        }
                      },
                      '23days ago'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 242
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 243
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 244
                          }
                        },
                        'ART'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              { style: { flexDirection: 'row' }, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.story();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 251
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: _styles2.default.newsContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { numberOfLines: 2, style: _styles2.default.newsHeader, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 253
                    }
                  },
                  'NativeBase builds a layer on top of React Native that provides, basic set of components for mobile application development.'
                ),
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _styles2.default.swiperContentBox, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 256
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    { style: { flexDirection: 'row' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 257
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 258
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsLink, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 259
                          }
                        },
                        'Money.com'
                      )
                    ),
                    _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _styles2.default.timeIcon, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 261
                      }
                    }),
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.newsLink, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 262
                        }
                      },
                      '2months ago'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 264
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: _styles2.default.newsTypeView, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 265
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.newsTypeText, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 266
                          }
                        },
                        'FINANCE'
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
  return Home;
}(_react.Component), _class.propTypes = {
  openDrawer: _react2.default.PropTypes.func,
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Home);
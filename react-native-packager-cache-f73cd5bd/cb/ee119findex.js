Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/overview/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _ProgressBar = require('./../loaders/ProgressBar');

var _ProgressBar2 = babelHelpers.interopRequireDefault(_ProgressBar);

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = babelHelpers.interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var headerLogo = require('../../../images/Header-Logo.png');

var Overview = function (_Component) {
  babelHelpers.inherits(Overview, _Component);

  function Overview() {
    babelHelpers.classCallCheck(this, Overview);
    return babelHelpers.possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).apply(this, arguments));
  }

  babelHelpers.createClass(Overview, [{
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
          _reactNative.Image,
          { source: require('../../../images/glow2.png'), style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            _react2.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, style: _styles2.default.btnHeader, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  }
                })
              )
            ),
            _react2.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              _react2.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              })
            ),
            _react2.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, style: _styles2.default.btnHeader, onPress: this.props.openDrawer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.View,
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
              'OVERVIEW'
            ),
            _react2.default.createElement(
              _nativeBase.Text,
              { note: true, style: _styles2.default.overviewHead, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              },
              'What you are reading the most'
            )
          ),
          _react2.default.createElement(
            _nativeBase.Content,
            { showsVerticalScrollIndicator: false, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            _react2.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.overviewContent, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51
                        }
                      },
                      'FASHION'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        }
                      },
                      '26%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 34, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        }
                      },
                      'ENVIRONMENT'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 66
                        }
                      },
                      '20%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 28, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75
                        }
                      },
                      'TECHNOLOGY'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 78
                        }
                      },
                      '15%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        }
                      },
                      'AUTO'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 90
                        }
                      },
                      '12%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 98
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 99
                        }
                      },
                      'EDUCATION'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        }
                      },
                      '9%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 109
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 111
                        }
                      },
                      'SCIENCE'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 114
                        }
                      },
                      '7%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 121
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 123
                        }
                      },
                      'SPORTS'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 126
                        }
                      },
                      '5%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 133
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 135
                        }
                      },
                      'FINANCE'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 137
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 138
                        }
                      },
                      '3%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 145
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 146
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 147
                        }
                      },
                      'ART'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 149
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 150
                        }
                      },
                      '2%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 157
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 158
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 159
                        }
                      },
                      'ANIMATION'
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 161
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoPerc, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 162
                        }
                      },
                      '1%'
                    )
                  )
                ),
                _react2.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);
  return Overview;
}(_react.Component);

function bindAction(dispatch) {
  return {
    openDrawer: function openDrawer() {
      return dispatch((0, _drawer.openDrawer)());
    }
  };
}

exports.default = (0, _reactRedux.connect)(null, bindAction)(Overview);
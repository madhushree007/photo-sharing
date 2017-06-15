Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/overview/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _ProgressBar = require('./../loaders/ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = _interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Overview: {
    displayName: 'Overview'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/overview/index.js',
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

var Overview = _wrapComponent('Overview')(function (_Component) {
  _inherits(Overview, _Component);

  function Overview() {
    _classCallCheck(this, Overview);

    return _possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).apply(this, arguments));
  }

  _createClass(Overview, [{
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
          _reactNative.Image,
          { source: require('../../../images/glow2.png'), style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          _react3.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            _react3.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, style: _styles2.default.btnHeader, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  }
                })
              )
            ),
            _react3.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              _react3.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              })
            ),
            _react3.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              _react3.default.createElement(
                _nativeBase.Button,
                { transparent: true, style: _styles2.default.btnHeader, onPress: this.props.openDrawer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                })
              )
            )
          ),
          _react3.default.createElement(
            _nativeBase.View,
            { style: _styles2.default.overviewHeaderContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            _react3.default.createElement(
              _nativeBase.Text,
              { style: _styles2.default.overviewHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              'OVERVIEW'
            ),
            _react3.default.createElement(
              _nativeBase.Text,
              { note: true, style: _styles2.default.overviewHead, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              },
              'What you are reading the most'
            )
          ),
          _react3.default.createElement(
            _nativeBase.Content,
            { showsVerticalScrollIndicator: false, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            _react3.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.overviewContent, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51
                        }
                      },
                      'FASHION'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 34, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        }
                      },
                      'ENVIRONMENT'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 28, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75
                        }
                      },
                      'TECHNOLOGY'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        }
                      },
                      'AUTO'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 98
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 99
                        }
                      },
                      'EDUCATION'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 109
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 111
                        }
                      },
                      'SCIENCE'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 121
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 123
                        }
                      },
                      'SPORTS'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 133
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 135
                        }
                      },
                      'FINANCE'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 137
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 145
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 146
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 147
                        }
                      },
                      'ART'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 149
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                  }
                })
              ),
              _react3.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.overviewTopicsBox, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                  }
                },
                _react3.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  { style: _reactNative.Platform.OS === 'android' ? { paddingBottom: 0 } : { paddingBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 157
                    }
                  },
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 158
                      }
                    },
                    _react3.default.createElement(
                      _nativeBase.Text,
                      { style: _styles2.default.overviewInfoHeader, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 159
                        }
                      },
                      'ANIMATION'
                    )
                  ),
                  _react3.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 161
                      }
                    },
                    _react3.default.createElement(
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
                _react3.default.createElement(_ProgressBar2.default, { color: '#fff', progress: 3, __source: {
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
}(_react2.Component));

function bindAction(dispatch) {
  return {
    openDrawer: function openDrawer() {
      return dispatch((0, _drawer.openDrawer)());
    }
  };
}

exports.default = (0, _reactRedux.connect)(null, bindAction)(Overview);
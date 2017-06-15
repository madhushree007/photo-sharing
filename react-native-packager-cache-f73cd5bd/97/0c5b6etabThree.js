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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/comments/tabThree.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

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
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/comments/tabThree.js',
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
            lineNumber: 21
          }
        },
        _react3.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: { backgroundColor: '#FFF' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            _react3.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                _react3.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/sanket.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                }),
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    }
                  },
                  'Kumar Sanket'
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    }
                  },
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      }
                    },
                    'May 24, 11:00 AM'
                  ),
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      }
                    },
                    '12'
                  )
                )
              ),
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#000', paddingLeft: 10 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  },
                  'Life is one time offer! Use it well'
                )
              )
            ),
            _react3.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                _react3.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/saurav.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                }),
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  'Saurav Sahu'
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  },
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      }
                    },
                    'Feb 17, 04:30 PM'
                  ),
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      }
                    },
                    '5'
                  )
                )
              ),
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#000', paddingLeft: 10 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56
                    }
                  },
                  'Failure is the stepping stone for success.'
                )
              )
            ),
            _react3.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                _react3.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/atul.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                }),
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  'Atul Ranjan'
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    }
                  },
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                      }
                    },
                    'Feb 03, 01:00 PM'
                  ),
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                      }
                    },
                    '5'
                  )
                )
              ),
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#000', paddingLeft: 10 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    }
                  },
                  'Difficult road always lead to a beautiful destination.'
                )
              )
            ),
            _react3.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                _react3.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/varun.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                }),
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83
                    }
                  },
                  'Varun Sahu'
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84
                    }
                  },
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                      }
                    },
                    'Jan 12, 09:30 PM'
                  ),
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      }
                    },
                    '4'
                  )
                )
              ),
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#000', paddingLeft: 10 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  'Wish I had a Time machine.'
                )
              )
            ),
            _react3.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98
                }
              },
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                },
                _react3.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/sanket.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                }),
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    }
                  },
                  'Kumar Sanket'
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102
                    }
                  },
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 103
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                      }
                    },
                    'May 24, 11:00 AM'
                  ),
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                      }
                    },
                    '12'
                  )
                )
              ),
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                },
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#000', paddingLeft: 10 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  },
                  'Life is one time offer! Use it well'
                )
              )
            ),
            _react3.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                }
              },
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                  }
                },
                _react3.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/saurav.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                  }
                }),
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 121
                    }
                  },
                  'Saurav Sahu'
                ),
                _react3.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122
                    }
                  },
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 123
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124
                      }
                    },
                    'Feb 17, 04:30 PM'
                  ),
                  _react3.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 125
                    }
                  }),
                  _react3.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 126
                      }
                    },
                    '5'
                  )
                )
              ),
              _react3.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  }
                },
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#000', paddingLeft: 10 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 130
                    }
                  },
                  'Failure is the stepping stone for success.'
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
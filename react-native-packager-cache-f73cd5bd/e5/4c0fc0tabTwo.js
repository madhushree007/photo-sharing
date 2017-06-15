Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/comments/tabTwo.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _style = require('./style');

var _style2 = babelHelpers.interopRequireDefault(_style);

var TabTwo = (_temp = _class = function (_Component) {
  babelHelpers.inherits(TabTwo, _Component);

  function TabTwo() {
    babelHelpers.classCallCheck(this, TabTwo);
    return babelHelpers.possibleConstructorReturn(this, (TabTwo.__proto__ || Object.getPrototypeOf(TabTwo)).apply(this, arguments));
  }

  babelHelpers.createClass(TabTwo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        _react2.default.createElement(
          _nativeBase.Content,
          { showsVerticalScrollIndicator: false, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { backgroundColor: '#FFF' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            _react2.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                _react2.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/sanket.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    }
                  },
                  'Kumar Sanket'
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    }
                  }),
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                      }
                    },
                    'May 24, 11:00 AM'
                  ),
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
                    }
                  }),
                  _react2.default.createElement(
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
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                _react2.default.createElement(
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
            _react2.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                _react2.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/saurav.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  'Saurav Sahu'
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    }
                  }),
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      }
                    },
                    'Feb 17, 04:30 PM'
                  ),
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    }
                  }),
                  _react2.default.createElement(
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
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                _react2.default.createElement(
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
            _react2.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                _react2.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/atul.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  'Atul Ranjan'
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    }
                  }),
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                      }
                    },
                    'Feb 03, 01:00 PM'
                  ),
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69
                    }
                  }),
                  _react2.default.createElement(
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
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                _react2.default.createElement(
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
            _react2.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                _react2.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/varun.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 83
                    }
                  },
                  'Varun Sahu'
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    }
                  }),
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                      }
                    },
                    'Jan 12, 09:30 PM'
                  ),
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  }),
                  _react2.default.createElement(
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
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                _react2.default.createElement(
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
            _react2.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98
                }
              },
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                },
                _react2.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/sanket.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    }
                  },
                  'Kumar Sanket'
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 103
                    }
                  }),
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                      }
                    },
                    'May 24, 11:00 AM'
                  ),
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105
                    }
                  }),
                  _react2.default.createElement(
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
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                },
                _react2.default.createElement(
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
            _react2.default.createElement(
              _nativeBase.Card,
              { foregroundColor: '#222', style: _style2.default.card, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                }
              },
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardHeader, header: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                  }
                },
                _react2.default.createElement(_nativeBase.Thumbnail, { small: true, source: require('../../../images/contacts/saurav.png'), style: _reactNative.Platform.OS === 'android' ? { borderRadius: 40 } : {}, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                  }
                }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: _style2.default.cmtName, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 121
                    }
                  },
                  'Saurav Sahu'
                ),
                _react2.default.createElement(
                  _reactNative.View,
                  { style: { flexDirection: 'row', position: 'absolute', right: 0, top: 27 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 122
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-time-outline', style: _style2.default.timeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 123
                    }
                  }),
                  _react2.default.createElement(
                    _reactNative.Text,
                    { style: _style2.default.date, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124
                      }
                    },
                    'Feb 17, 04:30 PM'
                  ),
                  _react2.default.createElement(_nativeBase.Icon, { name: 'ios-heart-outline', style: _style2.default.likeIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 125
                    }
                  }),
                  _react2.default.createElement(
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
              _react2.default.createElement(
                _nativeBase.CardItem,
                { style: _style2.default.cardItem, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  }
                },
                _react2.default.createElement(
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
  return TabTwo;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TabTwo);
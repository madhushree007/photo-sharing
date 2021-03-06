Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/comments/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactNativeScrollableTabView = require('react-native-scrollable-tab-view');

var _reactNativeScrollableTabView2 = babelHelpers.interopRequireDefault(_reactNativeScrollableTabView);

var _nativeBase = require('native-base');

var _style = require('./style');

var _style2 = babelHelpers.interopRequireDefault(_style);

var _CustomTabBar = require('../channels/CustomTabBar');

var _CustomTabBar2 = babelHelpers.interopRequireDefault(_CustomTabBar);

var _tabOne = require('./tabOne');

var _tabOne2 = babelHelpers.interopRequireDefault(_tabOne);

var _tabTwo = require('./tabTwo');

var _tabTwo2 = babelHelpers.interopRequireDefault(_tabTwo);

var _tabThree = require('./tabThree');

var _tabThree2 = babelHelpers.interopRequireDefault(_tabThree);

var Comments = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Comments, _Component);

  function Comments(props) {
    babelHelpers.classCallCheck(this, Comments);

    var _this = babelHelpers.possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).call(this, props));

    _this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
    _this.constructor.childContextTypes = {
      theme: _react2.default.PropTypes.object
    };
    return _this;
  }

  babelHelpers.createClass(Comments, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        _react2.default.createElement(
          _reactNative.Image,
          { source: require('../../../images/glow2.png'), style: _style2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            _react2.default.createElement(
              _nativeBase.Body,
              { style: { flexDirection: 'row', justifyContent: 'space-around' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', style: _style2.default.headerIcons, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.comments();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'chatboxes', style: _style2.default.headerIcons, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { style: _style2.default.headerTextIcon, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54
                    }
                  },
                  'Aa'
                )
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'bookmarks', style: _style2.default.headerIcons, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                })
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'download', style: _style2.default.headerIcons, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: _style2.default.commentHeadbg, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              { style: _style2.default.commentHeader, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              '23 COMMENTS'
            ),
            _react2.default.createElement(
              _reactNativeScrollableTabView2.default,
              { renderTabBar: function renderTabBar() {
                  return _react2.default.createElement(_CustomTabBar2.default, { someProp: 'here', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    }
                  });
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              _react2.default.createElement(_tabOne2.default, { tabLabel: 'Best', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              }),
              _react2.default.createElement(_tabTwo2.default, { tabLabel: 'Newest', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              }),
              _react2.default.createElement(_tabThree2.default, { tabLabel: 'Oldest', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              })
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: _style2.default.commentBox, __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            _react2.default.createElement(
              _nativeBase.Item,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-attach', style: _style2.default.attachIcon, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              }),
              _react2.default.createElement(_nativeBase.Input, { placeholder: 'Write something...', placeholderTextColor: '#797979', style: _style2.default.input, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              }),
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-arrow-forward', style: _style2.default.arrowForwardIcon, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              })
            )
          )
        )
      );
    }
  }]);
  return Comments;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Comments);
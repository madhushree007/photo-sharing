Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/sideBar/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _drawer = require('../../actions/drawer');

var _style = require('./style');

var _style2 = babelHelpers.interopRequireDefault(_style);

var SideBar = (_temp = _class = function (_Component) {
  babelHelpers.inherits(SideBar, _Component);

  function SideBar() {
    babelHelpers.classCallCheck(this, SideBar);
    return babelHelpers.possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
  }

  babelHelpers.createClass(SideBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        _react2.default.createElement(
          _reactNative.Image,
          { source: require('../../../images/sid.png'), style: _style2.default.background, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          _react2.default.createElement(
            _nativeBase.Content,
            { style: _style2.default.drawerContent, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.home();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-grid-outline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  }
                },
                'NEWS'
              )
            ),
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.channels();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-keypad-outline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                'CHANNELS'
              )
            ),
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.overview();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-stats', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                },
                ' OVERVIEW'
              )
            ),
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.calendar();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-calendar-outline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                'CALENDAR'
              )
            ),
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.timeline();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-timer-outline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                'TIMELINE'
              )
            ),
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.profile();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-person-outline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                ' PROFILE'
              )
            ),
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.widgets();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-grid', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                'WIDGETS'
              )
            ),
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.settings();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-settings-outline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                },
                'SETTINGS'
              )
            ),
            _react2.default.createElement(
              _nativeBase.ListItem,
              { button: true, onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.feedback();_this2.props.closeDrawer();
                }, iconLeft: true, style: _style2.default.links, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-paper-outline', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _style2.default.linkText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                'FEEDBACK'
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: _style2.default.logoutContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: _style2.default.logoutbtn, foregroundColor: 'white', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  }
                },
                _react2.default.createElement(
                  _reactNativeEasyGrid.Grid,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    }
                  },
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { onPress: function onPress() {
                          _reactNativeRouterFlux.Actions.login({ type: _reactNativeRouterFlux.ActionConst.RESET });_this2.props.closeDrawer();
                        }, style: { alignSelf: 'flex-start' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 69
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: { fontWeight: 'bold', color: '#fff' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                          }
                        },
                        'LOG OUT'
                      ),
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { note: true, style: { color: '#fff' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                          }
                        },
                        'Kumar Sanket'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactNativeEasyGrid.Col,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      }
                    },
                    _react2.default.createElement(
                      _reactNative.TouchableOpacity,
                      { style: { alignSelf: 'flex-end' }, onPress: function onPress() {
                          _reactNativeRouterFlux.Actions.profile();_this2.props.closeDrawer();
                        }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75
                        }
                      },
                      _react2.default.createElement(_nativeBase.Thumbnail, { source: require('../../../images/contacts/sanket.png'), style: _style2.default.profilePic, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        }
                      })
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
  return SideBar;
}(_react.Component), _class.propTypes = {
  navigation: _react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string
  })
}, _temp);


function bindAction(dispatch) {
  return {
    closeDrawer: function closeDrawer() {
      return dispatch((0, _drawer.closeDrawer)());
    }
  };
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    navigation: state.cardNavigation
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(SideBar);
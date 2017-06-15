Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactNativeScrollableTabView = require('react-native-scrollable-tab-view');

var _reactNativeScrollableTabView2 = babelHelpers.interopRequireDefault(_reactNativeScrollableTabView);

var _nativeBase = require('native-base');

var _drawer = require('../../actions/drawer');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _tabOne = require('./tabOne');

var _tabOne2 = babelHelpers.interopRequireDefault(_tabOne);

var _tabTwo = require('./tabTwo');

var _tabTwo2 = babelHelpers.interopRequireDefault(_tabTwo);

var _tabThree = require('./tabThree');

var _tabThree2 = babelHelpers.interopRequireDefault(_tabThree);

var _CustomTabBar = require('./CustomTabBar');

var _CustomTabBar2 = babelHelpers.interopRequireDefault(_CustomTabBar);

var headerLogo = require('../../../images/Header-Logo.png');

var Channels = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Channels, _Component);

  function Channels() {
    babelHelpers.classCallCheck(this, Channels);
    return babelHelpers.possibleConstructorReturn(this, (Channels.__proto__ || Object.getPrototypeOf(Channels)).apply(this, arguments));
  }

  babelHelpers.createClass(Channels, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        _react2.default.createElement(
          _nativeBase.Header,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { transparent: true, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              })
            )
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            _react2.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { transparent: true, onPress: this.props.openDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          _reactNative.View,
          { style: _styles2.default.bgHead, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          _react2.default.createElement(
            _reactNativeScrollableTabView2.default,
            { renderTabBar: function renderTabBar() {
                return _react2.default.createElement(_CustomTabBar2.default, { someProp: 'here', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                });
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            _react2.default.createElement(_tabOne2.default, { tabLabel: 'Following', __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            }),
            _react2.default.createElement(_tabTwo2.default, { tabLabel: 'Popular', __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            }),
            _react2.default.createElement(_tabThree2.default, { tabLabel: 'Explore', __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            })
          )
        )
      );
    }
  }]);
  return Channels;
}(_react.Component), _class.propTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Channels);
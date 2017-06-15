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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/index.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactNativeScrollableTabView = require('react-native-scrollable-tab-view');

var _reactNativeScrollableTabView2 = _interopRequireDefault(_reactNativeScrollableTabView);

var _nativeBase = require('native-base');

var _drawer = require('../../actions/drawer');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _tabOne = require('./tabOne');

var _tabOne2 = _interopRequireDefault(_tabOne);

var _tabTwo = require('./tabTwo');

var _tabTwo2 = _interopRequireDefault(_tabTwo);

var _tabThree = require('./tabThree');

var _tabThree2 = _interopRequireDefault(_tabThree);

var _CustomTabBar = require('./CustomTabBar');

var _CustomTabBar2 = _interopRequireDefault(_CustomTabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Channels: {
    displayName: 'Channels'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/index.js',
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

var Channels = _wrapComponent('Channels')((_temp = _class = function (_Component) {
  _inherits(Channels, _Component);

  function Channels() {
    _classCallCheck(this, Channels);

    return _possibleConstructorReturn(this, (Channels.__proto__ || Object.getPrototypeOf(Channels)).apply(this, arguments));
  }

  _createClass(Channels, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        _react3.default.createElement(
          _nativeBase.Header,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          _react3.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            _react3.default.createElement(
              _nativeBase.Button,
              { transparent: true, onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.pop();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              })
            )
          ),
          _react3.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            _react3.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            })
          ),
          _react3.default.createElement(
            _nativeBase.Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            _react3.default.createElement(
              _nativeBase.Button,
              { transparent: true, onPress: this.props.openDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              },
              _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              })
            )
          )
        ),
        _react3.default.createElement(
          _reactNative.View,
          { style: _styles2.default.bgHead, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          _react3.default.createElement(
            _reactNativeScrollableTabView2.default,
            { renderTabBar: function renderTabBar() {
                return _react3.default.createElement(_CustomTabBar2.default, { someProp: 'here', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                });
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            _react3.default.createElement(_tabOne2.default, { tabLabel: 'Following', __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            }),
            _react3.default.createElement(_tabTwo2.default, { tabLabel: 'Popular', __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            }),
            _react3.default.createElement(_tabThree2.default, { tabLabel: 'Explore', __source: {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(Channels);
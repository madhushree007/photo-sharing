Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/AppNavigator.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _drawer = require('./actions/drawer');

var _login = require('./components/login/');

var _login2 = _interopRequireDefault(_login);

var _home = require('./components/home/');

var _home2 = _interopRequireDefault(_home);

var _signUp = require('./components/sign-up/');

var _signUp2 = _interopRequireDefault(_signUp);

var _feedback = require('./components/feedback/');

var _feedback2 = _interopRequireDefault(_feedback);

var _comments = require('./components/comments/');

var _comments2 = _interopRequireDefault(_comments);

var _ProfileNew = require('./components/ProfileNew/');

var _ProfileNew2 = _interopRequireDefault(_ProfileNew);

var _calendar = require('./components/calendar/');

var _calendar2 = _interopRequireDefault(_calendar);

var _walkthrough = require('./components/walkthrough/');

var _walkthrough2 = _interopRequireDefault(_walkthrough);

var _sideBar = require('./components/sideBar');

var _sideBar2 = _interopRequireDefault(_sideBar);

var _settings = require('./components/settings');

var _settings2 = _interopRequireDefault(_settings);

var _channel = require('./components/channel');

var _channel2 = _interopRequireDefault(_channel);

var _channels = require('./components/channels');

var _channels2 = _interopRequireDefault(_channels);

var _overview = require('./components/overview');

var _overview2 = _interopRequireDefault(_overview);

var _story = require('./components/story');

var _story2 = _interopRequireDefault(_story);

var _timeline = require('./components/timeline');

var _timeline2 = _interopRequireDefault(_timeline);

var _widgets = require('./components/widgets');

var _widgets2 = _interopRequireDefault(_widgets);

var _needhelp = require('./components/needhelp');

var _needhelp2 = _interopRequireDefault(_needhelp);

var _baseTheme = require('./themes/base-theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AppNavigator: {
    displayName: 'AppNavigator'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/AppNavigator.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var RouterWithRedux = (0, _reactRedux.connect)()(_reactNativeRouterFlux.Router);

var AppNavigator = _wrapComponent('AppNavigator')((_temp = _class = function (_Component) {
  _inherits(AppNavigator, _Component);

  function AppNavigator() {
    _classCallCheck(this, AppNavigator);

    return _possibleConstructorReturn(this, (AppNavigator.__proto__ || Object.getPrototypeOf(AppNavigator)).apply(this, arguments));
  }

  _createClass(AppNavigator, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.drawerState === 'opened') {
        this.openDrawer();
      }

      if (this.props.drawerState === 'closed') {
        this._drawer._root.close();
      }
    }
  }, {
    key: 'openDrawer',
    value: function openDrawer() {
      this._drawer._root.open();
    }
  }, {
    key: 'closeDrawer',
    value: function closeDrawer() {
      if (this.props.drawerState === 'opened') {
        this.props.closeDrawer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        _nativeBase.Drawer,
        {
          ref: function ref(_ref) {
            _this2._drawer = _ref;
          },
          type: 'overlay',
          tweenDuration: 150,
          content: _react3.default.createElement(_sideBar2.default, { navigator: this._navigator, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }),
          tapToClose: true,
          acceptPan: false,
          onClose: function onClose() {
            return _this2.closeDrawer();
          },
          openDrawerOffset: 0.2,
          panCloseMask: 0.2,
          styles: {
            drawer: {
              shadowColor: '#000000',
              shadowOpacity: 0.8,
              shadowRadius: 3
            }
          },
          tweenHandler: function tweenHandler(ratio) {
            return {
              drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
              main: {
                opacity: (2 - ratio) / 2
              }
            };
          },
          negotiatePan: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        },
        _react3.default.createElement(_reactNative.StatusBar, {
          backgroundColor: _baseTheme.statusBarColor,
          barStyle: 'light-content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }),
        _react3.default.createElement(
          RouterWithRedux,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          _react3.default.createElement(
            _reactNativeRouterFlux.Scene,
            { key: 'root', __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            },
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'login', component: _login2.default, hideNavBar: true, initial: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'signUp', component: _signUp2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'needhelp', component: _needhelp2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'home', component: _home2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'feedback', component: _feedback2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'comments', component: _comments2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'profile', component: _ProfileNew2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'walkthrough', component: _walkthrough2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'sideBar', component: _sideBar2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'settings', component: _settings2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'channel', component: _channel2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'channels', component: _channels2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'calendar', component: _calendar2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'overview', component: _overview2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'story', component: _story2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'timeline', component: _timeline2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            }),
            _react3.default.createElement(_reactNativeRouterFlux.Scene, { key: 'widgets', component: _widgets2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              }
            })
          )
        )
      );
    }
  }]);

  return AppNavigator;
}(_react2.Component), _class.propTypes = {
  drawerState: _react3.default.PropTypes.string,
  closeDrawer: _react3.default.PropTypes.func
}, _temp));

function bindAction(dispatch) {
  return {
    closeDrawer: function closeDrawer() {
      return dispatch((0, _drawer.closeDrawer)());
    }
  };
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    drawerState: state.drawer.drawerState
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(AppNavigator);
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-router-flux/src/Router.js';

var _reactNative = require('react-native');

var _reactNativeExperimentalNavigation = require('react-native-experimental-navigation');

var _reactNativeExperimentalNavigation2 = _interopRequireDefault(_reactNativeExperimentalNavigation);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _State = require('./State');

var _State2 = _interopRequireDefault(_State);

var _Reducer = require('./Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _DefaultRenderer = require('./DefaultRenderer');

var _DefaultRenderer2 = _interopRequireDefault(_DefaultRenderer);

var _Scene = require('./Scene');

var _Scene2 = _interopRequireDefault(_Scene);

var _ActionConst = require('./ActionConst');

var ActionConst = _interopRequireWildcard(_ActionConst);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Router: {
    displayName: 'Router'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-router-flux/src/Router.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NavigationRootContainer = _reactNativeExperimentalNavigation2.default.RootContainer;


var propTypes = {
  dispatch: _react2.PropTypes.func,
  backAndroidHandler: _react2.PropTypes.func,
  onBackAndroid: _react2.PropTypes.func,
  onExitApp: _react2.PropTypes.func
};

var Router = _wrapComponent('Router')((_temp = _class = function (_Component) {
  _inherits(Router, _Component);

  function Router(props) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

    _this.renderNavigation = _this.renderNavigation.bind(_this);
    _this.handleProps = _this.handleProps.bind(_this);
    _this.handleBackAndroid = _this.handleBackAndroid.bind(_this);
    var reducer = _this.handleProps(props);
    _this.state = { reducer: reducer };
    return _this;
  }

  _createClass(Router, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        routes: _Actions2.default
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactNative.BackAndroid.addEventListener('hardwareBackPress', this.handleBackAndroid);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var reducer = this.handleProps(props);
      this.setState({ reducer: reducer });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactNative.BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAndroid);
    }
  }, {
    key: 'handleBackAndroid',
    value: function handleBackAndroid() {
      var _props = this.props,
          backAndroidHandler = _props.backAndroidHandler,
          onBackAndroid = _props.onBackAndroid,
          onExitApp = _props.onExitApp;

      if (backAndroidHandler) {
        return backAndroidHandler();
      }

      try {
        _Actions2.default.androidBack();
        if (onBackAndroid) {
          onBackAndroid();
        }
        return true;
      } catch (err) {
        if (onExitApp) {
          return onExitApp();
        }

        return false;
      }
    }
  }, {
    key: 'handleProps',
    value: function handleProps(props) {
      var scenesMap = void 0;

      if (props.scenes) {
        scenesMap = props.scenes;
      } else {
        var _scenes = props.children;

        if (Array.isArray(props.children) || props.children.props.component) {
          _scenes = _react3.default.createElement(
            _Scene2.default,
            _extends({
              key: '__root',
              hideNav: true
            }, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            }),
            props.children
          );
        }
        scenesMap = _Actions2.default.create(_scenes, props.wrapBy);
      }

      var children = props.children,
          styles = props.styles,
          scenes = props.scenes,
          reducer = props.reducer,
          createReducer = props.createReducer,
          parentProps = _objectWithoutProperties(props, ['children', 'styles', 'scenes', 'reducer', 'createReducer']);

      scenesMap.rootProps = parentProps;

      var initialState = (0, _State2.default)(scenesMap);
      var reducerCreator = props.createReducer || _Reducer2.default;

      var routerReducer = props.reducer || reducerCreator({
        initialState: initialState,
        scenes: scenesMap
      });

      return routerReducer;
    }
  }, {
    key: 'renderNavigation',
    value: function renderNavigation(navigationState, onNavigate) {
      var _this2 = this;

      if (!navigationState) {
        return null;
      }
      _Actions2.default.get = function (key) {
        return (0, _Reducer.findElement)(navigationState, key, ActionConst.REFRESH);
      };
      _Actions2.default.callback = function (props) {
        var constAction = props.type && _Actions.ActionMap[props.type] ? _Actions.ActionMap[props.type] : null;
        if (_this2.props.dispatch) {
          if (constAction) {
            _this2.props.dispatch(_extends({}, props, { type: constAction }));
          } else {
            _this2.props.dispatch(props);
          }
        }
        return constAction ? onNavigate(_extends({}, props, { type: constAction })) : onNavigate(props);
      };

      return _react3.default.createElement(_DefaultRenderer2.default, { onNavigate: onNavigate, navigationState: navigationState, __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.reducer) return null;

      return _react3.default.createElement(NavigationRootContainer, {
        reducer: this.state.reducer,
        renderNavigation: this.renderNavigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      });
    }
  }]);

  return Router;
}(_react2.Component), _class.childContextTypes = {
  routes: _react2.PropTypes.object
}, _temp));

Router.propTypes = propTypes;

exports.default = Router;
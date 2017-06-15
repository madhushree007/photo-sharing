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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-router-flux/src/DefaultRenderer.js';

var _reactNative = require('react-native');

var _reactNativeExperimentalNavigation = require('react-native-experimental-navigation');

var _reactNativeExperimentalNavigation2 = _interopRequireDefault(_reactNativeExperimentalNavigation);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Util = require('./Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DefaultRenderer: {
    displayName: 'DefaultRenderer'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-router-flux/src/DefaultRenderer.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var SCREEN_WIDTH = _reactNative.Dimensions.get('window').width;

var NavigationAnimatedView = _reactNativeExperimentalNavigation2.default.AnimatedView,
    NavigationCard = _reactNativeExperimentalNavigation2.default.Card;
var NavigationCardStackPanResponder = NavigationCard.CardStackPanResponder,
    NavigationCardStackStyleInterpolator = NavigationCard.CardStackStyleInterpolator;


var styles = _reactNative.StyleSheet.create({
  animatedView: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  sceneStyle: {
    flex: 1
  }
});

function fadeInScene(props) {
  var position = props.position,
      scene = props.scene;


  var index = scene.index;
  var inputRange = [index - 1, index, index + 1];

  var opacity = position.interpolate({
    inputRange: inputRange,
    outputRange: [0, 1, 0.3]
  });

  var scale = position.interpolate({
    inputRange: inputRange,
    outputRange: [1, 1, 0.95]
  });

  var translateY = 0;
  var translateX = 0;

  return {
    opacity: opacity,
    transform: [{ scale: scale }, { translateX: translateX }, { translateY: translateY }]
  };
}

function leftToRight(props) {
  var position = props.position,
      scene = props.scene;


  var index = scene.index;
  var inputRange = [index - 1, index, index + 1];

  var translateX = position.interpolate({
    inputRange: inputRange,
    outputRange: [-SCREEN_WIDTH, 0, 0]
  });

  return {
    transform: [{ translateX: translateX }]
  };
}

var DefaultRenderer = _wrapComponent('DefaultRenderer')((_temp = _class = function (_Component) {
  _inherits(DefaultRenderer, _Component);

  _createClass(DefaultRenderer, null, [{
    key: 'getPanHandlers',
    value: function getPanHandlers(direction, props) {
      return direction === 'vertical' ? NavigationCardStackPanResponder.forVertical(props) : NavigationCardStackPanResponder.forHorizontal(props);
    }
  }, {
    key: 'dispatchFocusAction',
    value: function dispatchFocusAction(_ref) {
      var navigationState = _ref.navigationState;

      if (!navigationState || navigationState.component || navigationState.tabs) {
        return;
      }
      var scene = navigationState.children[navigationState.index];
      _Actions2.default.focus({ scene: scene });
    }
  }, {
    key: 'chooseInterpolator',
    value: function chooseInterpolator(direction, props) {
      switch (direction) {
        case 'vertical':
          return NavigationCardStackStyleInterpolator.forVertical(props);
        case 'fade':
          return fadeInScene(props);
        case 'leftToRight':
          return leftToRight(props);
        default:
          return NavigationCardStackStyleInterpolator.forHorizontal(props);
      }
    }
  }, {
    key: 'renderScene',
    value: function renderScene(props) {
      return _react3.default.createElement(DefaultRenderer, {
        key: props.scene.navigationState.key,
        onNavigate: props.onNavigate,
        navigationState: props.scene.navigationState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      });
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader(props) {
      var state = props.navigationState;
      var child = state.children[state.index];
      var selected = state.children[state.index];
      while ({}.hasOwnProperty.call(selected, 'children')) {
        selected = selected.children[selected.index];
      }
      if (child !== selected) {
        return null;
      }
      var hideNavBar = (0, _Util.deepestExplicitValueForKey)(state, 'hideNavBar');
      if (hideNavBar) {
        return null;
      }

      if (selected.component && selected.component.renderNavigationBar) {
        return selected.component.renderNavigationBar(_extends({}, props, selected));
      }

      var HeaderComponent = selected.navBar || child.navBar || state.navBar || _NavBar2.default;
      var navBarProps = _extends({}, state, child, selected);

      if (selected.component && selected.component.onRight) {
        navBarProps.onRight = selected.component.onRight;
      }

      if (selected.component && selected.component.onLeft) {
        navBarProps.onLeft = selected.component.onLeft;
      }

      if ((navBarProps.leftTitle || navBarProps.leftButtonImage) && navBarProps.onLeft) {
        delete navBarProps.leftButton;
      }

      if ((navBarProps.rightTitle || navBarProps.rightButtonImage) && navBarProps.onRight) {
        delete navBarProps.rightButton;
      }

      if (navBarProps.rightButton) {
        delete navBarProps.rightTitle;
        delete navBarProps.onRight;
        delete navBarProps.rightButtonImage;
      }

      if (navBarProps.leftButton) {
        delete navBarProps.leftTitle;
        delete navBarProps.onLeft;
        delete navBarProps.leftButtonImage;
      }
      delete navBarProps.style;

      var getTitle = selected.getTitle || function (opts) {
        return opts.title;
      };
      return _react3.default.createElement(HeaderComponent, _extends({}, props, navBarProps, { getTitle: getTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }));
    }
  }, {
    key: 'renderCard',
    value: function renderCard(props) {
      var _props$scene$navigati = props.scene.navigationState,
          key = _props$scene$navigati.key,
          direction = _props$scene$navigati.direction,
          animation = _props$scene$navigati.animation,
          getSceneStyle = _props$scene$navigati.getSceneStyle,
          getPanHandlers = _props$scene$navigati.getPanHandlers;


      var state = props.navigationState;
      var child = state.children[state.index];
      var selected = state.children[state.index];
      while ({}.hasOwnProperty.call(selected, 'children')) {
        selected = selected.children[selected.index];
      }
      var _selected = selected,
          panHandlers = _selected.panHandlers,
          animationStyle = _selected.animationStyle;

      var isActive = child === selected;
      var computedProps = { isActive: isActive };
      if (isActive) {
        computedProps.hideNavBar = (0, _Util.deepestExplicitValueForKey)(props.navigationState, 'hideNavBar');
        computedProps.hideTabBar = (0, _Util.deepestExplicitValueForKey)(props.navigationState, 'hideTabBar');
      }

      var style = getSceneStyle ? getSceneStyle(props, computedProps) : null;

      var animType = animation && !direction ? animation : direction;

      if (typeof animationStyle === 'undefined') {
        animationStyle = DefaultRenderer.chooseInterpolator(animType, props);
      }

      if (typeof animationStyle === 'function') {
        animationStyle = animationStyle(props);
      }

      if (typeof panHandlers === 'undefined') {
        panHandlers = getPanHandlers ? getPanHandlers(props, direction) : DefaultRenderer.getPanHandlers(direction, props);
      }
      return _react3.default.createElement(NavigationCard, _extends({}, props, {
        key: 'card_' + key,
        style: [animationStyle, style],
        panHandlers: panHandlers,
        renderScene: DefaultRenderer.renderScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }));
    }
  }]);

  function DefaultRenderer(props) {
    _classCallCheck(this, DefaultRenderer);

    var _this = _possibleConstructorReturn(this, (DefaultRenderer.__proto__ || Object.getPrototypeOf(DefaultRenderer)).call(this, props));

    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
    return _this;
  }

  _createClass(DefaultRenderer, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        navigationState: this.props.navigationState
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      DefaultRenderer.dispatchFocusAction(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.navigationState !== this.props.navigationState) {
        DefaultRenderer.dispatchFocusAction(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          navigationState = _props.navigationState,
          onNavigate = _props.onNavigate;


      if (!navigationState || !onNavigate) {
        console.error('navigationState and onNavigate property should be not null');
        return null;
      }

      var SceneComponent = navigationState.component;

      if (navigationState.tabs && !SceneComponent) {
        SceneComponent = _TabBar2.default;
      }

      if (SceneComponent) {
        return _react3.default.createElement(
          _reactNative.View,
          {
            style: [styles.sceneStyle, navigationState.sceneStyle],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298
            }
          },
          _react3.default.createElement(SceneComponent, _extends({}, this.props, navigationState, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            }
          }))
        );
      }

      var optionals = {};
      var selected = navigationState.children[navigationState.index];
      var applyAnimation = selected.applyAnimation || navigationState.applyAnimation;
      var style = selected.style || navigationState.style;

      if (applyAnimation) {
        optionals.applyAnimation = applyAnimation;
      } else {
        var duration = selected.duration;
        if (duration === null || duration === undefined) duration = navigationState.duration;
        if (duration !== null && duration !== undefined) {
          optionals.applyAnimation = function (pos, navState) {
            if (duration === 0) {
              pos.setValue(navState.index);
            } else {
              _reactNative.Animated.timing(pos, { toValue: navState.index, duration: duration }).start();
            }
          };
        }
      }

      return _react3.default.createElement(NavigationAnimatedView, _extends({
        navigationState: navigationState,
        style: [styles.animatedView, style],
        renderOverlay: DefaultRenderer.renderHeader,
        renderScene: DefaultRenderer.renderCard
      }, optionals, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }));
    }
  }]);

  return DefaultRenderer;
}(_react2.Component), _class.propTypes = {
  navigationState: _react2.PropTypes.object,
  onNavigate: _react2.PropTypes.func
}, _class.childContextTypes = {
  navigationState: _react2.PropTypes.any
}, _temp));

exports.default = DefaultRenderer;
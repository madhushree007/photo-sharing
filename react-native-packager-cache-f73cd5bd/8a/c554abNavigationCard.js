
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _class2,
    _temp2,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationCard.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SceneView: {
    displayName: 'SceneView'
  },
  NavigationCard: {
    displayName: 'NavigationCard'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationCard.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var Animated = require('react-native').Animated;
var NavigationCardStackPanResponder = require('./NavigationCardStackPanResponder');
var NavigationCardStackStyleInterpolator = require('./NavigationCardStackStyleInterpolator');
var NavigationContainer = require('./NavigationContainer');
var NavigationPagerPanResponder = require('./NavigationPagerPanResponder');
var NavigationPagerStyleInterpolator = require('./NavigationPagerStyleInterpolator');
var NavigationPointerEventsContainer = require('./NavigationPointerEventsContainer');
var NavigationPropTypes = require('./NavigationPropTypes');
var React = require('react');
var ReactComponentWithPureRenderMixin = require('react-addons-pure-render-mixin');
var StyleSheet = require('react-native').StyleSheet;
var View = require('react-native').View;

var PropTypes = React.PropTypes;

var SceneView = _wrapComponent('SceneView')((_temp = _class = function (_React$Component) {
  _inherits(SceneView, _React$Component);

  function SceneView() {
    _classCallCheck(this, SceneView);

    return _possibleConstructorReturn(this, (SceneView.__proto__ || Object.getPrototypeOf(SceneView)).apply(this, arguments));
  }

  _createClass(SceneView, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.sceneRendererProps.scene.navigationState !== this.props.sceneRendererProps.scene.navigationState;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.sceneRenderer(this.props.sceneRendererProps);
    }
  }]);

  return SceneView;
}(React.Component), _class.propTypes = {
  sceneRenderer: PropTypes.func.isRequired,
  sceneRendererProps: NavigationPropTypes.SceneRenderer
}, _temp));

var NavigationCard = _wrapComponent('NavigationCard')((_temp2 = _class2 = function (_React$Component2) {
  _inherits(NavigationCard, _React$Component2);

  function NavigationCard() {
    _classCallCheck(this, NavigationCard);

    return _possibleConstructorReturn(this, (NavigationCard.__proto__ || Object.getPrototypeOf(NavigationCard)).apply(this, arguments));
  }

  _createClass(NavigationCard, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          panHandlers = _props.panHandlers,
          pointerEvents = _props.pointerEvents,
          renderScene = _props.renderScene,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['panHandlers', 'pointerEvents', 'renderScene', 'style']);

      var viewStyle = style === undefined ? NavigationCardStackStyleInterpolator.forHorizontal(props) : style;

      var viewPanHandlers = panHandlers === undefined ? NavigationCardStackPanResponder.forHorizontal(props) : panHandlers;

      return React.createElement(
        Animated.View,
        _extends({}, viewPanHandlers, {
          pointerEvents: pointerEvents,
          ref: this.props.onComponentRef,
          style: [styles.main, viewStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }),
        React.createElement(SceneView, {
          sceneRenderer: renderScene,
          sceneRendererProps: props,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        })
      );
    }
  }]);

  return NavigationCard;
}(React.Component), _class2.propTypes = _extends({}, NavigationPropTypes.SceneRendererProps, {
  onComponentRef: PropTypes.func.isRequired,
  panHandlers: NavigationPropTypes.panHandlers,
  pointerEvents: PropTypes.string.isRequired,
  renderScene: PropTypes.func.isRequired,
  style: PropTypes.any
}), _temp2));

var styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

NavigationCard = NavigationPointerEventsContainer.create(NavigationCard);
NavigationCard = NavigationContainer.create(NavigationCard);

NavigationCard.CardStackPanResponder = NavigationCardStackPanResponder;
NavigationCard.CardStackStyleInterpolator = NavigationCardStackStyleInterpolator;
NavigationCard.PagerPanResponder = NavigationPagerPanResponder;
NavigationCard.PagerStyleInterpolator = NavigationPagerStyleInterpolator;

module.exports = NavigationCard;
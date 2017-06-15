
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/CustomComponents/NavigationExperimental/NavigationCardStack.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationCardStack: {
    displayName: 'NavigationCardStack'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/CustomComponents/NavigationExperimental/NavigationCardStack.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NativeAnimatedModule = require('NativeModules').NativeAnimatedModule;
var NavigationCard = require('NavigationCard');
var NavigationCardStackPanResponder = require('NavigationCardStackPanResponder');
var NavigationCardStackStyleInterpolator = require('NavigationCardStackStyleInterpolator');
var NavigationPropTypes = require('NavigationPropTypes');
var NavigationTransitioner = require('NavigationTransitioner');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var PropTypes = React.PropTypes;
var Directions = NavigationCardStackPanResponder.Directions;

var NavigationCardStack = _wrapComponent('NavigationCardStack')((_temp = _class = function (_React$Component) {
  _inherits(NavigationCardStack, _React$Component);

  function NavigationCardStack(props, context) {
    _classCallCheck(this, NavigationCardStack);

    var _this = _possibleConstructorReturn(this, (NavigationCardStack.__proto__ || Object.getPrototypeOf(NavigationCardStack)).call(this, props, context));

    _this._configureTransition = function () {
      var isVertical = _this.props.direction === 'vertical';
      var animationConfig = {};
      if (!!NativeAnimatedModule && !_this.props.enableGestures && NavigationCardStackStyleInterpolator.canUseNativeDriver(isVertical)) {
        animationConfig.useNativeDriver = true;
      }
      return animationConfig;
    };

    return _this;
  }

  _createClass(NavigationCardStack, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._render = this._render.bind(this);
      this._renderScene = this._renderScene.bind(this);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(NavigationTransitioner, {
        configureTransition: this._configureTransition,
        navigationState: this.props.navigationState,
        render: this._render,
        style: this.props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      });
    }
  }, {
    key: '_render',
    value: function _render(props) {
      var _this2 = this;

      var renderHeader = this.props.renderHeader;


      var header = renderHeader ? React.createElement(
        View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          }
        },
        renderHeader(props)
      ) : null;

      var scenes = props.scenes.map(function (scene) {
        return _this2._renderScene(_extends({}, props, {
          scene: scene
        }));
      });

      return React.createElement(
        View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          }
        },
        React.createElement(
          View,
          {
            style: [styles.scenes, this.props.scenesStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 272
            }
          },
          scenes
        ),
        header
      );
    }
  }, {
    key: '_renderScene',
    value: function _renderScene(props) {
      var isVertical = this.props.direction === 'vertical';

      var interpolator = this.props.cardStyleInterpolator || (isVertical ? NavigationCardStackStyleInterpolator.forVertical : NavigationCardStackStyleInterpolator.forHorizontal);

      var style = interpolator(props);

      var panHandlers = null;

      if (this.props.enableGestures) {
        var panHandlersProps = _extends({}, props, {
          onNavigateBack: this.props.onNavigateBack,
          gestureResponseDistance: this.props.gestureResponseDistance
        });
        panHandlers = isVertical ? NavigationCardStackPanResponder.forVertical(panHandlersProps) : NavigationCardStackPanResponder.forHorizontal(panHandlersProps);
      }

      return React.createElement(NavigationCard, _extends({}, props, {
        key: 'card_' + props.scene.key,
        panHandlers: panHandlers,
        renderScene: this.props.renderScene,
        style: [style, this.props.cardStyle],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }));
    }
  }]);

  return NavigationCardStack;
}(React.Component), _class.propTypes = {
  cardStyle: PropTypes.any,

  direction: PropTypes.oneOf([Directions.HORIZONTAL, Directions.VERTICAL]),

  gestureResponseDistance: PropTypes.number,

  cardStyleInterpolator: PropTypes.func,

  enableGestures: PropTypes.bool,

  navigationState: NavigationPropTypes.navigationState.isRequired,

  onNavigateBack: PropTypes.func,

  renderHeader: PropTypes.func,

  renderScene: PropTypes.func.isRequired,

  style: View.propTypes.style,

  scenesStyle: View.propTypes.style
}, _class.defaultProps = {
  direction: Directions.HORIZONTAL,
  enableGestures: true
}, _temp));

var styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column-reverse'
  },
  scenes: {
    flex: 1
  }
});

module.exports = NavigationCardStack;
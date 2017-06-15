
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationCardStack.js';

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
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationCardStack.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NavigationAnimatedView = require('./NavigationAnimatedView');
var NavigationCard = require('./NavigationCard');
var NavigationCardStackStyleInterpolator = require('./NavigationCardStackStyleInterpolator');
var NavigationContainer = require('./NavigationContainer');
var NavigationCardStackPanResponder = require('./NavigationCardStackPanResponder');
var NavigationPropTypes = require('./NavigationPropTypes');
var React = require('react');
var ReactComponentWithPureRenderMixin = require('react-addons-pure-render-mixin');
var StyleSheet = require('react-native').StyleSheet;

var emptyFunction = require('fbjs/lib/emptyFunction');

var PropTypes = React.PropTypes;
var Directions = NavigationCardStackPanResponder.Directions;

var NavigationCardStack = _wrapComponent('NavigationCardStack')((_temp = _class = function (_React$Component) {
  _inherits(NavigationCardStack, _React$Component);

  function NavigationCardStack(props, context) {
    _classCallCheck(this, NavigationCardStack);

    return _possibleConstructorReturn(this, (NavigationCardStack.__proto__ || Object.getPrototypeOf(NavigationCardStack)).call(this, props, context));
  }

  _createClass(NavigationCardStack, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._renderScene = this._renderScene.bind(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(NavigationAnimatedView, {
        navigationState: this.props.navigationState,
        renderOverlay: this.props.renderOverlay,
        renderScene: this._renderScene,

        style: [styles.animatedView, this.props.style],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      });
    }
  }, {
    key: '_renderScene',
    value: function _renderScene(props) {
      var isVertical = this.props.direction === 'vertical';

      var style = isVertical ? NavigationCardStackStyleInterpolator.forVertical(props) : NavigationCardStackStyleInterpolator.forHorizontal(props);

      var panHandlers = isVertical ? NavigationCardStackPanResponder.forVertical(props) : NavigationCardStackPanResponder.forHorizontal(props);

      return React.createElement(NavigationCard, _extends({}, props, {
        key: 'card_' + props.scene.key,
        panHandlers: panHandlers,
        renderScene: this.props.renderScene,
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }));
    }
  }]);

  return NavigationCardStack;
}(React.Component), _class.propTypes = {
  direction: PropTypes.oneOf([Directions.HORIZONTAL, Directions.VERTICAL]),
  navigationState: NavigationPropTypes.navigationParentState.isRequired,
  renderOverlay: PropTypes.func,
  renderScene: PropTypes.func.isRequired
}, _class.defaultProps = {
  direction: Directions.HORIZONTAL,
  renderOverlay: emptyFunction.thatReturnsNull
}, _temp));

var styles = StyleSheet.create({
  animatedView: {
    flex: 1
  }
});

module.exports = NavigationContainer.create(NavigationCardStack);
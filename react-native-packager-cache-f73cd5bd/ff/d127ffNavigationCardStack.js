
'use strict';

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationCardStack.js';

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
var NavigationCardStack = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(NavigationCardStack, _React$Component);

  function NavigationCardStack(props, context) {
    babelHelpers.classCallCheck(this, NavigationCardStack);
    return babelHelpers.possibleConstructorReturn(this, (NavigationCardStack.__proto__ || Object.getPrototypeOf(NavigationCardStack)).call(this, props, context));
  }

  babelHelpers.createClass(NavigationCardStack, [{
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

      return React.createElement(NavigationCard, babelHelpers.extends({}, props, {
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
}, _temp);


var styles = StyleSheet.create({
  animatedView: {
    flex: 1
  }
});

module.exports = NavigationContainer.create(NavigationCardStack);
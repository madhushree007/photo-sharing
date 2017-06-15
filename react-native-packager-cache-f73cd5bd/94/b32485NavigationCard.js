
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/CustomComponents/NavigationExperimental/NavigationCard.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationCard: {
    displayName: 'NavigationCard'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/CustomComponents/NavigationExperimental/NavigationCard.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var Animated = require('Animated');
var NavigationCardStackPanResponder = require('NavigationCardStackPanResponder');
var NavigationCardStackStyleInterpolator = require('NavigationCardStackStyleInterpolator');
var NavigationPagerPanResponder = require('NavigationPagerPanResponder');
var NavigationPagerStyleInterpolator = require('NavigationPagerStyleInterpolator');
var NavigationPointerEventsContainer = require('NavigationPointerEventsContainer');
var NavigationPropTypes = require('NavigationPropTypes');
var React = require('React');
var StyleSheet = require('StyleSheet');

var PropTypes = React.PropTypes;

var NavigationCard = _wrapComponent('NavigationCard')((_temp = _class = function (_React$Component) {
  _inherits(NavigationCard, _React$Component);

  function NavigationCard() {
    _classCallCheck(this, NavigationCard);

    return _possibleConstructorReturn(this, (NavigationCard.__proto__ || Object.getPrototypeOf(NavigationCard)).apply(this, arguments));
  }

  _createClass(NavigationCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          panHandlers = _props.panHandlers,
          pointerEvents = _props.pointerEvents,
          renderScene = _props.renderScene,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['panHandlers', 'pointerEvents', 'renderScene', 'style']);

      var viewStyle = style === undefined ? NavigationCardStackStyleInterpolator.forHorizontal(props) : style;

      var viewPanHandlers = panHandlers === undefined ? NavigationCardStackPanResponder.forHorizontal(_extends({}, props, {
        onNavigateBack: this.props.onNavigateBack
      })) : panHandlers;

      return React.createElement(
        Animated.View,
        _extends({}, viewPanHandlers, {
          pointerEvents: pointerEvents,
          ref: this.props.onComponentRef,
          style: [styles.main, viewStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }),
        renderScene(props)
      );
    }
  }]);

  return NavigationCard;
}(React.Component), _class.propTypes = _extends({}, NavigationPropTypes.SceneRendererProps, {
  onComponentRef: PropTypes.func.isRequired,
  onNavigateBack: PropTypes.func,
  panHandlers: NavigationPropTypes.panHandlers,
  pointerEvents: PropTypes.string.isRequired,
  renderScene: PropTypes.func.isRequired,
  style: PropTypes.any
}), _temp));

var styles = StyleSheet.create({
  main: {
    backgroundColor: '#E9E9EF',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    top: 0
  }
});

NavigationCard = NavigationPointerEventsContainer.create(NavigationCard);

NavigationCard.CardStackPanResponder = NavigationCardStackPanResponder;
NavigationCard.CardStackStyleInterpolator = NavigationCardStackStyleInterpolator;
NavigationCard.PagerPanResponder = NavigationPagerPanResponder;
NavigationCard.PagerStyleInterpolator = NavigationPagerStyleInterpolator;

module.exports = NavigationCard;
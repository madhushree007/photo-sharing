
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/Touchable/TouchableWithoutFeedback.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var EdgeInsetsPropType = require('EdgeInsetsPropType');
var React = require('React');
var TimerMixin = require('react-timer-mixin');
var Touchable = require('Touchable');
var View = require('View');

var ensurePositiveDelayProps = require('ensurePositiveDelayProps');
var warning = require('fbjs/lib/warning');

var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

var TouchableWithoutFeedback = _wrapComponent('_component')(React.createClass({
  displayName: 'TouchableWithoutFeedback',

  mixins: [TimerMixin, Touchable.Mixin],

  propTypes: {
    accessible: React.PropTypes.bool,
    accessibilityComponentType: React.PropTypes.oneOf(View.AccessibilityComponentType),
    accessibilityTraits: React.PropTypes.oneOfType([React.PropTypes.oneOf(View.AccessibilityTraits), React.PropTypes.arrayOf(React.PropTypes.oneOf(View.AccessibilityTraits))]),

    disabled: React.PropTypes.bool,

    onPress: React.PropTypes.func,
    onPressIn: React.PropTypes.func,
    onPressOut: React.PropTypes.func,

    onLayout: React.PropTypes.func,

    onLongPress: React.PropTypes.func,

    delayPressIn: React.PropTypes.number,

    delayPressOut: React.PropTypes.number,

    delayLongPress: React.PropTypes.number,

    pressRetentionOffset: EdgeInsetsPropType,

    hitSlop: EdgeInsetsPropType
  },

  getInitialState: function getInitialState() {
    return this.touchableGetInitialState();
  },

  componentDidMount: function componentDidMount() {
    ensurePositiveDelayProps(this.props);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    ensurePositiveDelayProps(nextProps);
  },

  touchableHandlePress: function touchableHandlePress(e) {
    this.props.onPress && this.props.onPress(e);
  },

  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
    this.props.onPressIn && this.props.onPressIn(e);
  },

  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
    this.props.onPressOut && this.props.onPressOut(e);
  },

  touchableHandleLongPress: function touchableHandleLongPress(e) {
    this.props.onLongPress && this.props.onLongPress(e);
  },

  touchableGetPressRectOffset: function touchableGetPressRectOffset() {
    return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
  },

  touchableGetHitSlop: function touchableGetHitSlop() {
    return this.props.hitSlop;
  },

  touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
    return this.props.delayPressIn || 0;
  },

  touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
    return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
  },

  touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
    return this.props.delayPressOut || 0;
  },

  render: function render() {
    var child = React.Children.only(this.props.children);
    var children = child.props.children;
    warning(!child.type || child.type.displayName !== 'Text', 'TouchableWithoutFeedback does not work well with Text children. Wrap children in a View instead. See ' + (child._owner && child._owner.getName && child._owner.getName() || '<unknown>'));
    if (Touchable.TOUCH_TARGET_DEBUG && child.type && child.type.displayName === 'View') {
      children = React.Children.toArray(children);
      children.push(Touchable.renderDebugView({ color: 'red', hitSlop: this.props.hitSlop }));
    }
    var style = Touchable.TOUCH_TARGET_DEBUG && child.type && child.type.displayName === 'Text' ? [child.props.style, { color: 'red' }] : child.props.style;
    return React.cloneElement(child, {
      accessible: this.props.accessible !== false,
      accessibilityLabel: this.props.accessibilityLabel,
      accessibilityComponentType: this.props.accessibilityComponentType,
      accessibilityTraits: this.props.accessibilityTraits,
      testID: this.props.testID,
      onLayout: this.props.onLayout,
      hitSlop: this.props.hitSlop,
      onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
      onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
      onResponderGrant: this.touchableHandleResponderGrant,
      onResponderMove: this.touchableHandleResponderMove,
      onResponderRelease: this.touchableHandleResponderRelease,
      onResponderTerminate: this.touchableHandleResponderTerminate,
      style: style,
      children: children
    });
  }
}));

module.exports = TouchableWithoutFeedback;

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/Keyboard/KeyboardAvoidingView.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/Keyboard/KeyboardAvoidingView.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var Keyboard = require('Keyboard');
var LayoutAnimation = require('LayoutAnimation');
var Platform = require('Platform');
var React = require('React');
var TimerMixin = require('react-timer-mixin');
var View = require('View');

var PropTypes = React.PropTypes;

var viewRef = 'VIEW';

var KeyboardAvoidingView = _wrapComponent('_component')(React.createClass({
  displayName: 'KeyboardAvoidingView',

  mixins: [TimerMixin],

  propTypes: _extends({}, View.propTypes, {
    behavior: PropTypes.oneOf(['height', 'position', 'padding']),

    contentContainerStyle: View.propTypes.style,

    keyboardVerticalOffset: PropTypes.number.isRequired
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      keyboardVerticalOffset: 0
    };
  },
  getInitialState: function getInitialState() {
    return {
      bottom: 0
    };
  },


  subscriptions: [],
  frame: null,

  relativeKeyboardHeight: function relativeKeyboardHeight(keyboardFrame) {
    var frame = this.frame;
    if (!frame || !keyboardFrame) {
      return 0;
    }

    var y1 = Math.max(frame.y, keyboardFrame.screenY - this.props.keyboardVerticalOffset);
    var y2 = Math.min(frame.y + frame.height, keyboardFrame.screenY + keyboardFrame.height - this.props.keyboardVerticalOffset);
    if (frame.y > keyboardFrame.screenY) {
      return frame.y + frame.height - keyboardFrame.screenY - this.props.keyboardVerticalOffset;
    }
    return Math.max(y2 - y1, 0);
  },
  onKeyboardChange: function onKeyboardChange(event) {
    if (!event) {
      this.setState({ bottom: 0 });
      return;
    }

    var duration = event.duration,
        easing = event.easing,
        endCoordinates = event.endCoordinates;

    var height = this.relativeKeyboardHeight(endCoordinates);

    if (duration && easing) {
      LayoutAnimation.configureNext({
        duration: duration,
        update: {
          duration: duration,
          type: LayoutAnimation.Types[easing] || 'keyboard'
        }
      });
    }
    this.setState({ bottom: height });
  },
  onLayout: function onLayout(event) {
    this.frame = event.nativeEvent.layout;
  },
  componentWillUpdate: function componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextState.bottom === this.state.bottom && this.props.behavior === 'height' && nextProps.behavior === 'height') {
      nextState.bottom = 0;
    }
  },
  componentWillMount: function componentWillMount() {
    if (Platform.OS === 'ios') {
      this.subscriptions = [Keyboard.addListener('keyboardWillChangeFrame', this.onKeyboardChange)];
    } else {
      this.subscriptions = [Keyboard.addListener('keyboardDidHide', this.onKeyboardChange), Keyboard.addListener('keyboardDidShow', this.onKeyboardChange)];
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.subscriptions.forEach(function (sub) {
      return sub.remove();
    });
  },
  render: function render() {
    var _props = this.props,
        behavior = _props.behavior,
        children = _props.children,
        style = _props.style,
        props = _objectWithoutProperties(_props, ['behavior', 'children', 'style']);

    switch (behavior) {
      case 'height':
        var heightStyle = void 0;
        if (this.frame) {
          heightStyle = { height: this.frame.height - this.state.bottom, flex: 0 };
        }
        return React.createElement(
          View,
          _extends({ ref: viewRef, style: [style, heightStyle], onLayout: this.onLayout }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            }
          }),
          children
        );

      case 'position':
        var positionStyle = { bottom: this.state.bottom };
        var contentContainerStyle = this.props.contentContainerStyle;


        return React.createElement(
          View,
          _extends({ ref: viewRef, style: style, onLayout: this.onLayout }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            }
          }),
          React.createElement(
            View,
            { style: [contentContainerStyle, positionStyle], __source: {
                fileName: _jsxFileName,
                lineNumber: 180
              }
            },
            children
          )
        );

      case 'padding':
        var paddingStyle = { paddingBottom: this.state.bottom };
        return React.createElement(
          View,
          _extends({ ref: viewRef, style: [style, paddingStyle], onLayout: this.onLayout }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            }
          }),
          children
        );

      default:
        return React.createElement(
          View,
          _extends({ ref: viewRef, onLayout: this.onLayout, style: style }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            }
          }),
          children
        );
    }
  }
}));

module.exports = KeyboardAvoidingView;
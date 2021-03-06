var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};var React = require('react');
var ReactNative = require('react-native');var TouchableOpacity = ReactNative.TouchableOpacity,
    View = ReactNative.View;

var Button = function Button(props) {
  return React.createElement(TouchableOpacity, _extends({ activeOpacity: 0.6 }, props), props.children);
};

module.exports = Button;
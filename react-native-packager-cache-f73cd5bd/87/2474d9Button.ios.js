var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-scrollable-tab-view/Button.ios.js';
var React = require('react');
var ReactNative = require('react-native');
var TouchableOpacity = ReactNative.TouchableOpacity,
    View = ReactNative.View;


var Button = function Button(props) {
  return React.createElement(
    TouchableOpacity,
    _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    props.children
  );
};

module.exports = Button;
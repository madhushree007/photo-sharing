var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-scrollable-tab-view/SceneComponent.js';
var React = require('react');
var ReactNative = require('react-native');
var Component = React.Component;
var View = ReactNative.View,
    StyleSheet = ReactNative.StyleSheet;


var StaticContainer = require('react-native/Libraries/Components/StaticContainer');

var SceneComponent = function SceneComponent(Props) {
  var shouldUpdated = Props.shouldUpdated,
      props = babelHelpers.objectWithoutProperties(Props, ['shouldUpdated']);

  return React.createElement(
    View,
    babelHelpers.extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    React.createElement(
      StaticContainer,
      { shouldUpdate: shouldUpdated, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      props.children
    )
  );
};

module.exports = SceneComponent;
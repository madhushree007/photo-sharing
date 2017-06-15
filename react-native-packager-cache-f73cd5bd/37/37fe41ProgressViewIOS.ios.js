
'use strict';

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js';
var Image = require('Image');
var NativeMethodsMixin = require('NativeMethodsMixin');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var requireNativeComponent = require('requireNativeComponent');

var PropTypes = React.PropTypes;

var ProgressViewIOS = React.createClass({
  displayName: 'ProgressViewIOS',

  mixins: [NativeMethodsMixin],

  propTypes: babelHelpers.extends({}, View.propTypes, {
    progressViewStyle: PropTypes.oneOf(['default', 'bar']),

    progress: PropTypes.number,

    progressTintColor: PropTypes.string,

    trackTintColor: PropTypes.string,

    progressImage: Image.propTypes.source,

    trackImage: Image.propTypes.source
  }),

  render: function render() {
    return React.createElement(RCTProgressView, babelHelpers.extends({}, this.props, {
      style: [styles.progressView, this.props.style],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }));
  }
});

var styles = StyleSheet.create({
  progressView: {
    height: 2
  }
});

var RCTProgressView = requireNativeComponent('RCTProgressView', ProgressViewIOS);

module.exports = ProgressViewIOS;
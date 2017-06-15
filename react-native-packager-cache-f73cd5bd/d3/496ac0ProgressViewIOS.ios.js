
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/ProgressViewIOS/ProgressViewIOS.ios.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var Image = require('Image');
var NativeMethodsMixin = require('NativeMethodsMixin');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var requireNativeComponent = require('requireNativeComponent');

var PropTypes = React.PropTypes;

var ProgressViewIOS = _wrapComponent('_component')(React.createClass({
  displayName: 'ProgressViewIOS',

  mixins: [NativeMethodsMixin],

  propTypes: _extends({}, View.propTypes, {
    progressViewStyle: PropTypes.oneOf(['default', 'bar']),

    progress: PropTypes.number,

    progressTintColor: PropTypes.string,

    trackTintColor: PropTypes.string,

    progressImage: Image.propTypes.source,

    trackImage: Image.propTypes.source
  }),

  render: function render() {
    return React.createElement(RCTProgressView, _extends({}, this.props, {
      style: [styles.progressView, this.props.style],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }));
  }
}));

var styles = StyleSheet.create({
  progressView: {
    height: 2
  }
});

var RCTProgressView = requireNativeComponent('RCTProgressView', ProgressViewIOS);

module.exports = ProgressViewIOS;
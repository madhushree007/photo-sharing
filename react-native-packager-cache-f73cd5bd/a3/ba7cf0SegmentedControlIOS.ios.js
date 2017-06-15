
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NativeMethodsMixin = require('NativeMethodsMixin');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var requireNativeComponent = require('requireNativeComponent');

var PropTypes = React.PropTypes;

var SEGMENTED_CONTROL_REFERENCE = 'segmentedcontrol';

var SegmentedControlIOS = _wrapComponent('_component')(React.createClass({
  displayName: 'SegmentedControlIOS',

  mixins: [NativeMethodsMixin],

  propTypes: _extends({}, View.propTypes, {
    values: PropTypes.arrayOf(PropTypes.string),

    selectedIndex: PropTypes.number,

    onValueChange: PropTypes.func,

    onChange: PropTypes.func,

    enabled: PropTypes.bool,

    tintColor: PropTypes.string,

    momentary: PropTypes.bool
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      values: [],
      enabled: true
    };
  },

  _onChange: function _onChange(event) {
    this.props.onChange && this.props.onChange(event);
    this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
  },

  render: function render() {
    return React.createElement(RCTSegmentedControl, _extends({}, this.props, {
      ref: SEGMENTED_CONTROL_REFERENCE,
      style: [styles.segmentedControl, this.props.style],
      onChange: this._onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      }
    }));
  }
}));

var styles = StyleSheet.create({
  segmentedControl: {
    height: 28
  }
});

var RCTSegmentedControl = requireNativeComponent('RCTSegmentedControl', SegmentedControlIOS);

module.exports = SegmentedControlIOS;

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/DatePicker/DatePickerIOS.ios.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/DatePicker/DatePickerIOS.ios.js',
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

var DatePickerIOS = _wrapComponent('_component')(React.createClass({
  displayName: 'DatePickerIOS',

  _picker: undefined,

  mixins: [NativeMethodsMixin],

  propTypes: _extends({}, View.propTypes, {
    date: PropTypes.instanceOf(Date).isRequired,

    onDateChange: PropTypes.func.isRequired,

    maximumDate: PropTypes.instanceOf(Date),

    minimumDate: PropTypes.instanceOf(Date),

    mode: PropTypes.oneOf(['date', 'time', 'datetime']),

    minuteInterval: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30]),

    timeZoneOffsetInMinutes: PropTypes.number
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      mode: 'datetime'
    };
  },

  _onChange: function _onChange(event) {
    var nativeTimeStamp = event.nativeEvent.timestamp;
    this.props.onDateChange && this.props.onDateChange(new Date(nativeTimeStamp));
    this.props.onChange && this.props.onChange(event);

    var propsTimeStamp = this.props.date.getTime();
    if (this._picker && nativeTimeStamp !== propsTimeStamp) {
      this._picker.setNativeProps({
        date: propsTimeStamp
      });
    }
  },

  render: function render() {
    var _this = this;

    var props = this.props;
    return React.createElement(
      View,
      { style: props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      },
      React.createElement(RCTDatePickerIOS, {
        ref: function ref(picker) {
          _this._picker = picker;
        },
        style: styles.datePickerIOS,
        date: props.date.getTime(),
        maximumDate: props.maximumDate ? props.maximumDate.getTime() : undefined,
        minimumDate: props.minimumDate ? props.minimumDate.getTime() : undefined,
        mode: props.mode,
        minuteInterval: props.minuteInterval,
        timeZoneOffsetInMinutes: props.timeZoneOffsetInMinutes,
        onChange: this._onChange,
        onStartShouldSetResponder: function onStartShouldSetResponder() {
          return true;
        },
        onResponderTerminationRequest: function onResponderTerminationRequest() {
          return false;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })
    );
  }
}));

var styles = StyleSheet.create({
  datePickerIOS: {
    height: 216
  }
});

var RCTDatePickerIOS = requireNativeComponent('RCTDatePicker', {
  propTypes: _extends({}, DatePickerIOS.propTypes, {
    date: PropTypes.number,
    minimumDate: PropTypes.number,
    maximumDate: PropTypes.number,
    onDateChange: function onDateChange() {
      return null;
    },
    onChange: PropTypes.func
  })
});

module.exports = DatePickerIOS;
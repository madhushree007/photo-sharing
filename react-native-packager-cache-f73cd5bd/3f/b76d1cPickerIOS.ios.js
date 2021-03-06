
'use strict';

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/Picker/PickerIOS.ios.js',
    _class,
    _temp;

var NativeMethodsMixin = require('NativeMethodsMixin');
var React = require('React');
var StyleSheet = require('StyleSheet');
var StyleSheetPropType = require('StyleSheetPropType');
var TextStylePropTypes = require('TextStylePropTypes');
var View = require('View');
var processColor = require('processColor');

var itemStylePropType = StyleSheetPropType(TextStylePropTypes);
var requireNativeComponent = require('requireNativeComponent');

var PickerIOS = React.createClass({
  displayName: 'PickerIOS',

  mixins: [NativeMethodsMixin],

  propTypes: babelHelpers.extends({}, View.propTypes, {
    itemStyle: itemStylePropType,
    onValueChange: React.PropTypes.func,
    selectedValue: React.PropTypes.any }),

  getInitialState: function getInitialState() {
    return this._stateFromProps(this.props);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState(this._stateFromProps(nextProps));
  },

  _stateFromProps: function _stateFromProps(props) {
    var selectedIndex = 0;
    var items = [];
    React.Children.toArray(props.children).forEach(function (child, index) {
      if (child.props.value === props.selectedValue) {
        selectedIndex = index;
      }
      items.push({
        value: child.props.value,
        label: child.props.label,
        textColor: processColor(child.props.color)
      });
    });
    return { selectedIndex: selectedIndex, items: items };
  },

  render: function render() {
    var _this = this;

    return React.createElement(
      View,
      { style: this.props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      },
      React.createElement(RCTPickerIOS, {
        ref: function ref(picker) {
          return _this._picker = picker;
        },
        style: [styles.pickerIOS, this.props.itemStyle],
        items: this.state.items,
        selectedIndex: this.state.selectedIndex,
        onChange: this._onChange,
        onStartShouldSetResponder: function onStartShouldSetResponder() {
          return true;
        },
        onResponderTerminationRequest: function onResponderTerminationRequest() {
          return false;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })
    );
  },

  _onChange: function _onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    if (this.props.onValueChange) {
      this.props.onValueChange(event.nativeEvent.newValue, event.nativeEvent.newIndex);
    }

    if (this._picker && this.state.selectedIndex !== event.nativeEvent.newIndex) {
      this._picker.setNativeProps({
        selectedIndex: this.state.selectedIndex
      });
    }
  }
});

PickerIOS.Item = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(_class, _React$Component);

  function _class() {
    babelHelpers.classCallCheck(this, _class);
    return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  babelHelpers.createClass(_class, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return _class;
}(React.Component), _class.propTypes = {
  value: React.PropTypes.any,
  label: React.PropTypes.string,
  color: React.PropTypes.string
}, _temp);

var styles = StyleSheet.create({
  pickerIOS: {
    height: 216
  }
});

var RCTPickerIOS = requireNativeComponent('RCTPicker', {
  propTypes: {
    style: itemStylePropType
  }
}, {
  nativeOnly: {
    items: true,
    onChange: true,
    selectedIndex: true
  }
});

module.exports = PickerIOS;
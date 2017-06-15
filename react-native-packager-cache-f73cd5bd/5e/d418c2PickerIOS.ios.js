
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/Picker/PickerIOS.ios.js',
    _class,
    _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  _component: {},
  _component2: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/Picker/PickerIOS.ios.js',
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
var StyleSheetPropType = require('StyleSheetPropType');
var TextStylePropTypes = require('TextStylePropTypes');
var View = require('View');
var processColor = require('processColor');

var itemStylePropType = StyleSheetPropType(TextStylePropTypes);
var requireNativeComponent = require('requireNativeComponent');

var PickerIOS = _wrapComponent('_component')(React.createClass({
  displayName: 'PickerIOS',

  mixins: [NativeMethodsMixin],

  propTypes: _extends({}, View.propTypes, {
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
}));

PickerIOS.Item = _wrapComponent('_component2')((_temp = _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
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
}, _temp));

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
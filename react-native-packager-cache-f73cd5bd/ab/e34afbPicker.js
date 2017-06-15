

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/Picker/Picker.js',
    _class2,
    _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Picker: {
    displayName: 'Picker'
  },
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/Picker/Picker.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var ColorPropType = require('ColorPropType');
var PickerIOS = require('PickerIOS');
var PickerAndroid = require('PickerAndroid');
var Platform = require('Platform');
var React = require('React');
var StyleSheetPropType = require('StyleSheetPropType');
var TextStylePropTypes = require('TextStylePropTypes');
var UnimplementedView = require('UnimplementedView');
var View = require('View');
var ViewStylePropTypes = require('ViewStylePropTypes');

var itemStylePropType = StyleSheetPropType(TextStylePropTypes);

var pickerStyleType = StyleSheetPropType(_extends({}, ViewStylePropTypes, {
  color: ColorPropType
}));

var MODE_DIALOG = 'dialog';
var MODE_DROPDOWN = 'dropdown';

var Picker = _wrapComponent('Picker')((_temp = _class = function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker() {
    _classCallCheck(this, Picker);

    return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
  }

  _createClass(Picker, [{
    key: 'render',
    value: function render() {
      if (Platform.OS === 'ios') {
        return React.createElement(
          PickerIOS,
          _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            }
          }),
          this.props.children
        );
      } else if (Platform.OS === 'android') {
        return React.createElement(
          PickerAndroid,
          _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          }),
          this.props.children
        );
      } else {
        return React.createElement(UnimplementedView, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        });
      }
    }
  }]);

  return Picker;
}(React.Component), _class.MODE_DIALOG = MODE_DIALOG, _class.MODE_DROPDOWN = MODE_DROPDOWN, _class.defaultProps = {
  mode: MODE_DIALOG
}, _class.propTypes = _extends({}, View.propTypes, {
  style: pickerStyleType,

  selectedValue: React.PropTypes.any,

  onValueChange: React.PropTypes.func,

  enabled: React.PropTypes.bool,

  mode: React.PropTypes.oneOf(['dialog', 'dropdown']),

  itemStyle: itemStylePropType,

  prompt: React.PropTypes.string,

  testID: React.PropTypes.string
}), _temp));

Picker.Item = _wrapComponent('_component')((_temp2 = _class2 = function (_React$Component2) {
  _inherits(_class2, _React$Component2);

  function _class2() {
    _classCallCheck(this, _class2);

    return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
  }

  _createClass(_class2, [{
    key: 'render',
    value: function render() {
      throw null;
    }
  }]);

  return _class2;
}(React.Component), _class2.propTypes = {
  label: React.PropTypes.string.isRequired,

  value: React.PropTypes.any,

  color: ColorPropType,

  testID: React.PropTypes.string
}, _temp2));

module.exports = Picker;
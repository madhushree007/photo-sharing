'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/LinearGradient.ios.js';

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  LinearGradient: {
    displayName: 'LinearGradient'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/LinearGradient.ios.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var LinearGradient = _wrapComponent('LinearGradient')((_temp = _class = function (_Component) {
  _inherits(LinearGradient, _Component);

  function LinearGradient() {
    _classCallCheck(this, LinearGradient);

    return _possibleConstructorReturn(this, (LinearGradient.__proto__ || Object.getPrototypeOf(LinearGradient)).apply(this, arguments));
  }

  _createClass(LinearGradient, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          colors = _props.colors,
          locations = _props.locations,
          otherProps = _objectWithoutProperties(_props, ['colors', 'locations']);

      if (colors && locations && colors.length !== locations.length) {
        console.warn('LinearGradient colors and locations props should be arrays of the same length');
      }

      return _react3.default.createElement(NativeLinearGradient, _extends({}, otherProps, {
        colors: colors.map(_reactNative.processColor),
        locations: locations ? locations.slice(0, colors.length) : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }));
    }
  }]);

  return LinearGradient;
}(_react2.Component), _class.propTypes = _extends({
  start: _react2.PropTypes.arrayOf(_react2.PropTypes.number),
  end: _react2.PropTypes.arrayOf(_react2.PropTypes.number),
  colors: _react2.PropTypes.arrayOf(_react2.PropTypes.string).isRequired,
  locations: _react2.PropTypes.arrayOf(_react2.PropTypes.number)
}, _reactNative.View.propTypes), _temp));

exports.default = LinearGradient;


var NativeLinearGradient = (0, _reactNative.requireNativeComponent)('ExponentLinearGradient', null);
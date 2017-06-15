Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomIn = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/animation/src/animations/ZoomIn.js';

var _reactNative = require('react-native');

var _DriverShape = require('../drivers/DriverShape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ZoomIn: {
    displayName: 'ZoomIn'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/animation/src/animations/ZoomIn.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var ZoomIn = exports.ZoomIn = _wrapComponent('ZoomIn')((_temp = _class = function (_Component) {
  _inherits(ZoomIn, _Component);

  function ZoomIn() {
    _classCallCheck(this, ZoomIn);

    return _possibleConstructorReturn(this, (ZoomIn.__proto__ || Object.getPrototypeOf(ZoomIn)).apply(this, arguments));
  }

  _createClass(ZoomIn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          driver = _props.driver,
          children = _props.children,
          _props$inputRange = _props.inputRange,
          inputRange = _props$inputRange === undefined ? [0, 1] : _props$inputRange,
          _props$maxFactor = _props.maxFactor,
          maxFactor = _props$maxFactor === undefined ? 1.5 : _props$maxFactor,
          style = _props.style;


      return _react3.default.createElement(
        _reactNative.Animated.View,
        {
          style: [style, {
            transform: [{
              scale: driver.value.interpolate({
                inputRange: inputRange,
                outputRange: [1, maxFactor],
                extrapolate: 'clamp'
              })
            }]
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        children
      );
    }
  }]);

  return ZoomIn;
}(_react2.Component), _class.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react3.default.PropTypes.node,

  inputRange: _react3.default.PropTypes.array,

  maxFactor: _react3.default.PropTypes.number,
  style: _react3.default.PropTypes.object
}, _temp));
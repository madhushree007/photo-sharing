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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/BlurView.ios.js';

var _reactNative = require('react-native');

var _deprecatedPropType = require('react-native/Libraries/Utilities/deprecatedPropType');

var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  BlurView: {
    displayName: 'BlurView'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/BlurView.ios.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var BlurView = _wrapComponent('BlurView')((_temp = _class = function (_Component) {
  _inherits(BlurView, _Component);

  function BlurView() {
    _classCallCheck(this, BlurView);

    return _possibleConstructorReturn(this, (BlurView.__proto__ || Object.getPrototypeOf(BlurView)).apply(this, arguments));
  }

  _createClass(BlurView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          nativeProps = _objectWithoutProperties(_props, ['style']);

      if (nativeProps.tintEffect) {
        nativeProps.tint = nativeProps.tintEffect;
        delete nativeProps.tintEffect;
      }

      return _react3.default.createElement(NativeBlurView, _extends({}, nativeProps, {
        style: [this.props.style, { backgroundColor: 'transparent' }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }));
    }
  }]);

  return BlurView;
}(_react2.Component), _class.propTypes = _extends({
  tintEffect: (0, _deprecatedPropType2.default)(_react2.PropTypes.string, 'Use the `tint` prop instead.'),
  tint: _react2.PropTypes.oneOf(['light', 'default', 'dark']).isRequired,
  intensity: _react2.PropTypes.number.isRequired
}, _reactNative.View.propTypes), _class.defaultProps = {
  tint: 'default',
  intensity: 50
}, _temp));

exports.default = BlurView;


var NativeBlurView = (0, _reactNative.requireNativeComponent)('ExponentBlurView', null);
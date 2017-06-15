Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/FacebookAds/BannerViewManager.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CTKBannerView = (0, _reactNative.requireNativeComponent)('CTKBannerView', null, {
  onAdPress: true,
  onAdError: true
});

var sizeForType = {
  large: 90,
  rectangle: 250,
  standard: 50
};

var getSizeForType = function getSizeForType(type) {
  return sizeForType[type] || sizeForType.standard;
};

var BannerView = function BannerView(props) {
  var type = props.type,
      onPress = props.onPress,
      onError = props.onError,
      style = props.style,
      restProps = _objectWithoutProperties(props, ['type', 'onPress', 'onError', 'style']);

  var size = getSizeForType(type);

  return _react2.default.createElement(CTKBannerView, _extends({
    size: size,
    onAdPress: onPress,
    onAdError: onError,
    style: [style, { height: size }]
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

exports.default = BannerView;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

var ExponentConstants = _reactNative.NativeModules.ExponentConstants;


var manifest = void 0;
if (ExponentConstants && ExponentConstants.manifest) {
  manifest = _reactNative.NativeModules.ExponentConstants.manifest;
  if (typeof manifest === 'string') {
    manifest = JSON.parse(manifest);
  }
}

module.exports = _extends({}, _reactNative.NativeModules.ExponentConstants, {
  manifest: manifest
});
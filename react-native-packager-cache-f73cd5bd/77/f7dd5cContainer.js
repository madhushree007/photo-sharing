Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _platform = require('./../variables/platform');

var _platform2 = babelHelpers.interopRequireDefault(_platform);

var deviceHeight = _reactNative.Dimensions.get('window').height;

exports.default = function () {
  var variables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _platform2.default;

  var theme = {
    flex: 1,
    height: _reactNative.Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20
  };

  return theme;
};
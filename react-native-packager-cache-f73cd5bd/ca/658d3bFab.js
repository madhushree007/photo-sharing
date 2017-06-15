Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _platform = require('./../variables/platform');

var _platform2 = babelHelpers.interopRequireDefault(_platform);

exports.default = function () {
  var variables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _platform2.default;

  var platformStyle = variables.platformStyle;
  var platform = variables.platform;

  var fabTheme = {
    'NativeBase.Button': {
      alignItems: 'center',
      padding: null,
      justifyContent: 'center',
      'NativeBase.Icon': {
        alignSelf: 'center'
      },
      'NativeBase.IconNB': {
        alignSelf: 'center',
        fontSize: 20,
        lineHeight: platform === 'ios' ? 24 : undefined
      }
    }
  };

  return fabTheme;
};
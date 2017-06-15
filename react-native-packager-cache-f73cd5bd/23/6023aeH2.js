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

    var h2Theme = {
        color: variables.textColor,
        fontSize: variables.fontSizeH2,
        lineHeight: variables.lineHeightH2
    };

    return h2Theme;
};
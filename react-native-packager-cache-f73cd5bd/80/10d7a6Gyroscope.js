Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _createSensorWrapper = require('./lib/createSensorWrapper');

var _createSensorWrapper2 = _interopRequireDefault(_createSensorWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExponentGyroscope = _reactNative.NativeModules.ExponentGyroscope;
exports.default = (0, _createSensorWrapper2.default)(ExponentGyroscope, 'gyroscopeDidUpdate');
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimingDriver = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimingDriver = exports.TimingDriver = function () {
  function TimingDriver(options) {
    _classCallCheck(this, TimingDriver);

    this.animationOptions = _extends({
      easing: _reactNative.Easing.cubic,
      duration: 250
    }, options);
    this.value = new _reactNative.Animated.Value(0);
    this.runTimer = this.runTimer.bind(this);
  }

  _createClass(TimingDriver, [{
    key: 'runTimer',
    value: function runTimer(endValue, onFinish) {
      _reactNative.Animated.timing(this.value, _extends({
        toValue: endValue
      }, this.animationOptions)).start(onFinish);
    }
  }]);

  return TimingDriver;
}();
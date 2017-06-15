Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchableDriver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function defaultAnimation(value, toValue, animationOptions) {
  return _reactNative.Animated.timing(value, _extends({
    toValue: toValue
  }, animationOptions));
}

var TouchableDriver = exports.TouchableDriver = function () {
  function TouchableDriver(options) {
    _classCallCheck(this, TouchableDriver);

    this.animationOptions = _extends({
      easing: _reactNative.Easing.elastic(1),
      duration: 150
    }, options);
    this.value = new _reactNative.Animated.Value(0);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
    this.touchableViewProps = {
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut
    };
  }

  _createClass(TouchableDriver, [{
    key: 'onPressIn',
    value: function onPressIn() {
      defaultAnimation(this.value, 1, this.animationOptions).start();
    }
  }, {
    key: 'onPressOut',
    value: function onPressOut() {
      defaultAnimation(this.value, 0, this.animationOptions).start();
    }
  }]);

  return TouchableDriver;
}();
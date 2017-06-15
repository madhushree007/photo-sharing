Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollDriver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollDriver = exports.ScrollDriver = function () {
  function ScrollDriver() {
    _classCallCheck(this, ScrollDriver);

    this.value = new _reactNative.Animated.Value(0);
    this.onScrollViewLayout = this.onScrollViewLayout.bind(this);
    this.scrollViewProps = {
      onScroll: _reactNative.Animated.event([{
        nativeEvent: {
          contentOffset: {
            y: this.value
          }
        }
      }]),
      scrollEventThrottle: 1,
      onLayout: this.onScrollViewLayout
    };
  }

  _createClass(ScrollDriver, [{
    key: 'onScrollViewLayout',
    value: function onScrollViewLayout(event) {
      this.layout = event.nativeEvent.layout;
    }
  }]);

  return ScrollDriver;
}();
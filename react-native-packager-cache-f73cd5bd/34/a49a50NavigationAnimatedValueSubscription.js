
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationAnimatedValueSubscription = function () {
  function NavigationAnimatedValueSubscription(value, callback) {
    _classCallCheck(this, NavigationAnimatedValueSubscription);

    this._value = value;
    this._token = value.addListener(callback);
  }

  _createClass(NavigationAnimatedValueSubscription, [{
    key: 'remove',
    value: function remove() {
      this._value.removeListener(this._token);
    }
  }]);

  return NavigationAnimatedValueSubscription;
}();

module.exports = NavigationAnimatedValueSubscription;
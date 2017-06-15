
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormData = require('FormData');
var NativeEventEmitter = require('NativeEventEmitter');
var RCTNetworkingNative = require('NativeModules').Networking;
var convertRequestBody = require('convertRequestBody');

var RCTNetworking = function (_NativeEventEmitter) {
  _inherits(RCTNetworking, _NativeEventEmitter);

  function RCTNetworking() {
    _classCallCheck(this, RCTNetworking);

    return _possibleConstructorReturn(this, (RCTNetworking.__proto__ || Object.getPrototypeOf(RCTNetworking)).call(this, RCTNetworkingNative));
  }

  _createClass(RCTNetworking, [{
    key: 'sendRequest',
    value: function sendRequest(method, trackingName, url, headers, data, responseType, incrementalUpdates, timeout, callback) {
      var body = convertRequestBody(data);
      RCTNetworkingNative.sendRequest({
        method: method,
        url: url,
        data: _extends({}, body, { trackingName: trackingName }),
        headers: headers,
        responseType: responseType,
        incrementalUpdates: incrementalUpdates,
        timeout: timeout
      }, callback);
    }
  }, {
    key: 'abortRequest',
    value: function abortRequest(requestId) {
      RCTNetworkingNative.abortRequest(requestId);
    }
  }, {
    key: 'clearCookies',
    value: function clearCookies(callback) {
      RCTNetworkingNative.clearCookies(callback);
    }
  }]);

  return RCTNetworking;
}(NativeEventEmitter);

module.exports = new RCTNetworking();
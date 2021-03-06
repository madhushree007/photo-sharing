Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fbemitter = require('fbemitter');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExponentNotifications = _reactNative.NativeModules.ExponentNotifications;


var _emitter = void 0;
var _initialNotification = void 0;

function _maybeInitEmitter() {
  if (!_emitter) {
    _emitter = new _fbemitter.EventEmitter();
    _reactNative.DeviceEventEmitter.addListener('Exponent.notification', _emitNotification);
  }
}

function _emitNotification(notification) {
  if (typeof notification === 'string') {
    notification = JSON.parse(notification);
  }

  notification = _extends({}, notification);

  if (typeof notification.data === 'string') {
    try {
      notification.data = JSON.parse(notification.data);
    } catch (e) {}
  }

  _emitter.emit('notification', notification);
}

function _processNotification(notification) {
  notification = _extends({}, notification);

  if (!notification.data) {
    notification.data = {};
  }

  if (notification.hasOwnProperty('count')) {
    delete notification.count;
  }

  if (_reactNative.Platform.OS === 'ios') {
    if (notification.android) {
      delete notification.android;
    }

    if (notification.ios) {
      notification = _extends(notification, notification.ios);
      delete notification.ios;
    }
  }

  if (_reactNative.Platform.OS === 'android') {
    if (notification.ios) {
      delete notification.ios;
    }

    if (notification.android) {
      notification = _extends(notification, notification.android);
      delete notification.android;
    }
  }

  return notification;
}

function _validateNotification(notification) {
  if (_reactNative.Platform.OS === 'ios') {
    (0, _invariant2.default)(!!notification.title && !!notification.body, 'Local notifications on iOS require both a title and a body');
  } else if (_reactNative.Platform.OS === 'android') {
    (0, _invariant2.default)(!!notification.title, 'Local notifications on Android require a title');
  }
}

exports.default = {
  _setInitialNotification: function _setInitialNotification(notification) {
    _initialNotification = notification;
  },

  getExponentPushTokenAsync: ExponentNotifications.getExponentPushTokenAsync,

  presentLocalNotificationAsync: function presentLocalNotificationAsync(notification) {
    _validateNotification(notification);
    notification = _processNotification(notification);

    return ExponentNotifications.presentLocalNotification(notification);
  },
  scheduleLocalNotificationAsync: function scheduleLocalNotificationAsync(notification, options) {
    return regeneratorRuntime.async(function scheduleLocalNotificationAsync$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _validateNotification(notification);
            notification = _processNotification(notification);

            if (_reactNative.Platform.OS === 'ios') {
              if (options.time && options.time instanceof Date) {
                options = _extends({}, options, {
                  time: options.time.getTime()
                });
              }
            } else {
              if (options.time && typeof options.time === 'number') {
                options = _extends({}, options, {
                  time: new Date(options.time)
                });
              }
            }

            return _context.abrupt('return', ExponentNotifications.scheduleLocalNotification(notification, options));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, null, this);
  },
  dismissNotificationAsync: function dismissNotificationAsync(notificationId) {
    return regeneratorRuntime.async(function dismissNotificationAsync$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(_reactNative.Platform.OS === 'android')) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt('return', ExponentNotifications.dismissNotification(notificationId));

          case 4:
            return _context2.abrupt('return', Promise.reject('Dismissing notifications is not supported on iOS'));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, null, this);
  },
  dismissAllNotificationsAsync: function dismissAllNotificationsAsync() {
    return regeneratorRuntime.async(function dismissAllNotificationsAsync$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(_reactNative.Platform.OS === 'android')) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt('return', ExponentNotifications.dismissAllNotifications());

          case 4:
            return _context3.abrupt('return', Promise.reject('Dismissing notifications is not supported on iOS'));

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, null, this);
  },
  cancelScheduledNotificationAsync: function cancelScheduledNotificationAsync(notificationId) {
    return regeneratorRuntime.async(function cancelScheduledNotificationAsync$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', ExponentNotifications.cancelScheduledNotification(notificationId));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, null, this);
  },
  cancelAllScheduledNotificationsAsync: function cancelAllScheduledNotificationsAsync() {
    return regeneratorRuntime.async(function cancelAllScheduledNotificationsAsync$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', ExponentNotifications.cancelAllScheduledNotifications());

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, null, this);
  },
  addListener: function addListener(listener) {
    _maybeInitEmitter();

    if (_initialNotification) {
      var initialNotification = _initialNotification;
      _initialNotification = null;
      setTimeout(function () {
        _emitNotification(initialNotification);
      }, 0);
    }

    return _emitter.addListener('notification', listener);
  },
  getBadgeNumberAsync: function getBadgeNumberAsync() {
    return regeneratorRuntime.async(function getBadgeNumberAsync$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (ExponentNotifications.getBadgeNumberAsync) {
              _context6.next = 2;
              break;
            }

            return _context6.abrupt('return', 0);

          case 2:
            return _context6.abrupt('return', ExponentNotifications.getBadgeNumberAsync());

          case 3:
          case 'end':
            return _context6.stop();
        }
      }
    }, null, this);
  },
  setBadgeNumberAsync: function setBadgeNumberAsync(number) {
    return regeneratorRuntime.async(function setBadgeNumberAsync$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (ExponentNotifications.setBadgeNumberAsync) {
              _context7.next = 2;
              break;
            }

            return _context7.abrupt('return');

          case 2:
            return _context7.abrupt('return', ExponentNotifications.setBadgeNumberAsync(number));

          case 3:
          case 'end':
            return _context7.stop();
        }
      }
    }, null, this);
  }
};
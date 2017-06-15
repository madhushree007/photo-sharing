Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === _drawer.OPEN_DRAWER) {
    return _extends({}, state, {
      drawerState: 'opened'
    });
  }

  if (action.type === _drawer.CLOSE_DRAWER) {
    return _extends({}, state, {
      drawerState: 'closed'
    });
  }
  return state;
};

var _drawer = require('../actions/drawer');

var initialState = {
  drawerState: 'closed',
  drawerDisabled: true
};
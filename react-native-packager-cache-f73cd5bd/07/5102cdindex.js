Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _drawer = require('./drawer');

var _drawer2 = babelHelpers.interopRequireDefault(_drawer);

exports.default = (0, _redux.combineReducers)({
  drawer: _drawer2.default
});
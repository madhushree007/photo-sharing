Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  drawer: _drawer2.default
});
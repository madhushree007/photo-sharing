Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp2;

var _react = require('react');

var _percentToFloat = require('../lib/percentToFloat');

var _percentToFloat2 = _interopRequireDefault(_percentToFloat);

var _Stop = require('./Stop');

var _Stop2 = _interopRequireDefault(_Stop);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _extractOpacity = require('../lib/extract/extractOpacity');

var _extractOpacity2 = _interopRequireDefault(_extractOpacity);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gradient = (_temp2 = _class = function (_Component) {
    _inherits(Gradient, _Component);

    function Gradient() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Gradient);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gradient.__proto__ || Object.getPrototypeOf(Gradient)).call.apply(_ref, [this].concat(args))), _this), _this.getGradient = function () {
            var stops = {};
            _react.Children.forEach(_this.props.children, function (child) {
                if (child.type === _Stop2.default) {
                    if (child.props.stopColor && child.props.offset) {
                        var offset = (0, _percentToFloat2.default)(child.props.offset);

                        stops[offset] = (0, _color2.default)(child.props.stopColor).alpha((0, _extractOpacity2.default)(child.props.stopOpacity));
                    }
                } else {
                    console.warn('\'Gradient\' can only receive \'Stop\' elements as children');
                }
            });

            var sorted = _lodash2.default.sortBy(_lodash2.default.map(stops, function (stop, offset) {
                return { stop: stop, offset: offset };
            }), 'offset');
            var gradient = [];

            sorted.forEach(function (_ref2) {
                var stop = _ref2.stop;

                var channels = stop.rgbaArray();
                gradient.push(channels[0] / 255);
                gradient.push(channels[1] / 255);
                gradient.push(channels[2] / 255);
                gradient.push(channels[3]);
            });

            gradient.push.apply(gradient, _toConsumableArray(sorted.map(function (_ref3) {
                var offset = _ref3.offset;
                return +offset;
            })));
            return gradient;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Gradient;
}(_react.Component), _class.displayName = 'Gradient', _temp2);
exports.default = Gradient;
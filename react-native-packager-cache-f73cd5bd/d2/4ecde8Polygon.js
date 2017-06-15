Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Polygon.js';

var _Path = require('./Path');

var _Path2 = _interopRequireDefault(_Path);

var _props = require('../lib/props');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Polygon: {
        displayName: 'Polygon'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Polygon.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var Polygon = _wrapComponent('Polygon')((_temp2 = _class = function (_Component) {
    _inherits(Polygon, _Component);

    function Polygon() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Polygon);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Polygon, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var points = this.props.points;
            if (_lodash2.default.isArray(points)) {
                points = points.join(',');
            }

            return _react3.default.createElement(_Path2.default, _extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.props, {
                d: 'M' + points.trim().replace(/\s+/g, 'L') + 'z',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }));
        }
    }]);

    return Polygon;
}(_react2.Component), _class.displayName = 'Polygon', _class.propTypes = _extends({}, _props.pathProps, {
    points: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.array]).isRequired
}), _class.defaultProps = {
    points: ''
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root$getNativeElemen;

        (_root$getNativeElemen = _this3.root.getNativeElement()).setNativeProps.apply(_root$getNativeElemen, arguments);
    };
}, _temp2));

exports.default = Polygon;
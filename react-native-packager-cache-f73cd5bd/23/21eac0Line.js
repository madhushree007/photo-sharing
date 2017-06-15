Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Line.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = _interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var _props = require('../lib/props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = (_temp2 = _class = function (_Shape) {
    _inherits(Line, _Shape);

    function Line() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Line);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Line.__proto__ || Object.getPrototypeOf(Line)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Line, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            return _react2.default.createElement(RNSVGLine, _extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.extractProps(props), {
                x1: props.x1.toString(),
                y1: props.y1.toString(),
                x2: props.x2.toString(),
                y2: props.y2.toString(),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }));
        }
    }]);

    return Line;
}(_Shape3.default), _class.displayName = 'Line', _class.propTypes = _extends({}, _props.pathProps, {
    x1: _props.numberProp.isRequired,
    x2: _props.numberProp.isRequired,
    y1: _props.numberProp.isRequired,
    y2: _props.numberProp.isRequired
}), _class.defaultProps = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGLine = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.LineAttributes,
    uiViewClassName: 'RNSVGLine'
});

exports.default = Line;
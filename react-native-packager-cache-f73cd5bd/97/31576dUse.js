Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Use.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _props = require('../lib/props');

var _attributes = require('../lib/attributes');

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = _interopRequireDefault(_createReactNativeComponentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var idExpReg = /^#(.+)$/;
var Use = (_temp2 = _class = function (_Shape) {
    _inherits(Use, _Shape);

    function Use() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Use);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Use.__proto__ || Object.getPrototypeOf(Use)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Use, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var matched = props.href.match(idExpReg);
            var href = void 0;

            if (matched) {
                href = matched[1];
            }

            if (!href) {
                console.warn('Invalid `href` prop for `Use` element, expected a href like `"#id"`, but got: "' + props.href + '"');
            }

            var extractedProps = this.extractProps(props);

            return _react2.default.createElement(
                RNSVGUse,
                _extends({
                    ref: function ref(ele) {
                        _this2.root = ele;
                    }
                }, extractedProps, {
                    href: href,
                    width: props.width,
                    height: props.height,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }),
                props.children
            );
        }
    }]);

    return Use;
}(_Shape3.default), _class.displayName = 'Use', _class.propTypes = _extends({
    href: _react.PropTypes.string.isRequired,
    width: _props.numberProp,
    height: _props.numberProp }, _props.pathProps), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGUse = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.UseAttributes,
    uiViewClassName: 'RNSVGUse'
});

exports.default = Use;
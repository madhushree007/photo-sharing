Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Image.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = _interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _props = require('../lib/props');

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var _resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

var _resolveAssetSource2 = _interopRequireDefault(_resolveAssetSource);

var _ViewBox = require('./ViewBox');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var spacesRegExp = /\s+/;

var Image = (_temp2 = _class = function (_Shape) {
    _inherits(Image, _Shape);

    function Image() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Image);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Image, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var modes = props.preserveAspectRatio.trim().split(spacesRegExp);
            var meetOrSlice = _ViewBox.meetOrSliceTypes[modes[1]] || 0;
            var align = _ViewBox.alignEnum[modes[0]] || 'xMidYMid';

            return _react2.default.createElement(RNSVGImage, _extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.extractProps(_extends({}, props, { x: null, y: null }), { responder: true, transform: true }), {
                x: props.x.toString(),
                y: props.y.toString(),
                width: props.width.toString(),
                height: props.height.toString(),
                meetOrSlice: meetOrSlice,
                align: align,
                src: (0, _resolveAssetSource2.default)(props.href),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }));
        }
    }]);

    return Image;
}(_Shape3.default), _class.displayName = 'Image', _class.propTypes = _extends({}, _props.responderProps, _props.touchableProps, {
    x: _props.numberProp,
    y: _props.numberProp,
    width: _props.numberProp.isRequired,
    height: _props.numberProp.isRequired,
    href: _react.PropTypes.number.isRequired,
    preserveAspectRatio: _react.PropTypes.string
}), _class.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    preserveAspectRatio: 'xMidYMid meet'
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGImage = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.ImageAttributes,
    uiViewClassName: 'RNSVGImage'
});

exports.default = Image;
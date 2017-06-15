Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Path.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SerializablePath = require('../lib/SerializablePath');

var _SerializablePath2 = _interopRequireDefault(_SerializablePath);

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

var Path = (_temp2 = _class = function (_Shape) {
    _inherits(Path, _Shape);

    function Path() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Path);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Path.__proto__ || Object.getPrototypeOf(Path)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Path, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var d = new _SerializablePath2.default(props.d).toJSON();
            return _react2.default.createElement(RNSVGPath, _extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.extractProps(props), {
                d: d,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }));
        }
    }]);

    return Path;
}(_Shape3.default), _class.displayName = 'Path', _class.propTypes = _extends({}, _props.pathProps, {
    d: _react.PropTypes.string.isRequired
}), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);


var RNSVGPath = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.PathAttributes,
    uiViewClassName: 'RNSVGPath'
});

exports.default = Path;
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
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Svg.js';

var _reactNative = require('react-native');

var _ViewBox = require('./ViewBox');

var _ViewBox2 = _interopRequireDefault(_ViewBox);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Svg: {
        displayName: 'Svg'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Svg.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var RNSVGSvgViewManager = _reactNative.NativeModules.RNSVGSvgViewManager;

var id = 0;

var styles = _reactNative.StyleSheet.create({
    svg: {
        backgroundColor: 'transparent'
    }
});

var Svg = _wrapComponent('Svg')((_temp = _class = function (_Component) {
    _inherits(Svg, _Component);

    function Svg() {
        _classCallCheck(this, Svg);

        var _this = _possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).apply(this, arguments));

        _this.measureInWindow = function () {
            var _this$root;

            (_this$root = _this.root).measureInWindow.apply(_this$root, arguments);
        };

        _this.measure = function () {
            var _this$root2;

            (_this$root2 = _this.root).measure.apply(_this$root2, arguments);
        };

        _this.measureLayout = function () {
            var _this$root3;

            (_this$root3 = _this.root).measureLayout.apply(_this$root3, arguments);
        };

        _this.setNativeProps = function () {
            var _this$root4;

            (_this$root4 = _this.root).setNativeProps.apply(_this$root4, arguments);
        };

        _this.toDataURL = _reactNative.Platform.OS === 'ios' ? function () {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

            RNSVGSvgViewManager.toDataURL((0, _reactNative.findNodeHandle)(_this.root), callback);
        } : function () {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.noop;

            var node = (0, _reactNative.findNodeHandle)(_this.root);
            _this.onDataURLCallbacks.push(callback);
            _reactNative.UIManager.dispatchViewManagerCommand(node, _reactNative.UIManager.RNSVGSvgView.Commands.toDataURL, null);
        };

        _this._onDataURL = function (e) {
            while (_this.onDataURLCallbacks.length) {
                var callback = _this.onDataURLCallbacks.shift();
                callback(e.nativeEvent.base64);
            }
        };

        id++;
        _this.id = id;
        _this.onDataURLCallbacks = [];
        return _this;
    }

    _createClass(Svg, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var opacity = +props.opacity;
            var width = +props.width;
            var height = +props.height;
            var viewBox = props.viewBox;
            var dimensions = void 0;

            if (width && height) {
                dimensions = {
                    width: width,
                    height: height,
                    flex: 0
                };
            }

            if (props.viewbox) {
                viewBox = props.viewbox;
                console.warn('Prop `viewbox` is deprecated. please use `viewBox` instead.');
            }

            var content = viewBox ? _react3.default.createElement(
                _ViewBox2.default,
                {
                    viewBox: viewBox,
                    preserveAspectRatio: props.preserveAspectRatio,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                    }
                },
                props.children
            ) : props.children;

            var nativeProps = _lodash2.default.omit(props, ['width', 'height', 'viewBox', 'preserveAspectRatio', 'opacity']);

            return _react3.default.createElement(
                NativeSvgView,
                _extends({}, nativeProps, {
                    ref: function ref(ele) {
                        _this2.root = ele;
                    },
                    style: [styles.svg, props.style, !isNaN(opacity) && {
                        opacity: opacity
                    }, dimensions],
                    onDataURL: this._onDataURL,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109
                    }
                }),
                content
            );
        }
    }]);

    return Svg;
}(_react2.Component), _class.displayName = 'Svg', _class.propTypes = _extends({}, _reactNative.View.propTypes, {
    opacity: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.number]),
    width: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.number]),
    height: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.number]),

    viewBox: _react2.PropTypes.string,
    preserveAspectRatio: _react2.PropTypes.string
}), _temp));

var NativeSvgView = (0, _reactNative.requireNativeComponent)('RNSVGSvgView', null);

exports.default = Svg;
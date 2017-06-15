Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alignEnum = exports.meetOrSliceTypes = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/ViewBox.js';

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = _interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _G = require('./G');

var _G2 = _interopRequireDefault(_G);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ViewBox: {
        displayName: 'ViewBox'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/ViewBox.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var meetOrSliceTypes = {
    meet: 0,
    slice: 1,
    none: 2
};

var alignEnum = ['xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax', 'none'].reduce(function (prev, name) {
    prev[name] = name;
    return prev;
}, {});

var numberRegExp = /^\d*\.?\d*%?$/;
var spacesRegExp = /\s+/;

var ViewBox = _wrapComponent('ViewBox')((_temp = _class = function (_Component) {
    _inherits(ViewBox, _Component);

    function ViewBox() {
        _classCallCheck(this, ViewBox);

        return _possibleConstructorReturn(this, (ViewBox.__proto__ || Object.getPrototypeOf(ViewBox)).apply(this, arguments));
    }

    _createClass(ViewBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                viewBox = _props.viewBox,
                preserveAspectRatio = _props.preserveAspectRatio,
                name = _props.name;


            var params = viewBox.trim().split(spacesRegExp);

            if (params.length !== 4 || !params.some(function (param) {
                return param && numberRegExp.test(param);
            })) {
                console.warn('`viewBox` expected a string like `minX minY width height`, but got:' + viewBox);
                return _react3.default.createElement(
                    _G2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    this.props.children
                );
            }

            var modes = preserveAspectRatio.trim().split(spacesRegExp);

            var meetOrSlice = meetOrSliceTypes[modes[1]] || 0;
            var align = alignEnum[modes[0]] || 'xMidYMid';

            return _react3.default.createElement(
                RNSVGViewBox,
                {
                    name: name,
                    minX: params[0],
                    minY: params[1],
                    vbWidth: params[2],
                    vbHeight: params[3],
                    align: align,
                    meetOrSlice: meetOrSlice,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                },
                this.props.children
            );
        }
    }]);

    return ViewBox;
}(_react2.Component), _class.displayName = 'ViewBox', _class.propTypes = {
    viewBox: _react2.PropTypes.string.isRequired,
    preserveAspectRatio: _react2.PropTypes.string
}, _class.defaultProps = {
    preserveAspectRatio: 'xMidYMid meet'
}, _temp));

var RNSVGViewBox = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.ViewBoxAttributes,
    uiViewClassName: 'RNSVGViewBox'
});

exports.default = ViewBox;
exports.meetOrSliceTypes = meetOrSliceTypes;
exports.alignEnum = alignEnum;
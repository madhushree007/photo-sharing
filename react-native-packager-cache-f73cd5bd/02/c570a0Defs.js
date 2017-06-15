Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Defs.js';

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = _interopRequireDefault(_createReactNativeComponentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Defs: {
        displayName: 'Defs'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Defs.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var Defs = _wrapComponent('Defs')((_temp = _class = function (_Component) {
    _inherits(Defs, _Component);

    function Defs() {
        _classCallCheck(this, Defs);

        return _possibleConstructorReturn(this, (Defs.__proto__ || Object.getPrototypeOf(Defs)).apply(this, arguments));
    }

    _createClass(Defs, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                RNSVGDefs,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                this.props.children
            );
        }
    }]);

    return Defs;
}(_react2.Component), _class.displayName = 'Defs', _temp));

var RNSVGDefs = (0, _createReactNativeComponentClass2.default)({
    validAttributes: {},
    uiViewClassName: 'RNSVGDefs'
});

exports.default = Defs;
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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Symbol.js';

var _ViewBox = require('./ViewBox');

var _ViewBox2 = _interopRequireDefault(_ViewBox);

var _G = require('./G');

var _G2 = _interopRequireDefault(_G);

var _Defs = require('./Defs');

var _Defs2 = _interopRequireDefault(_Defs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SymbolElement: {
        displayName: 'SymbolElement'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-svg/elements/Symbol.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var SymbolElement = _wrapComponent('SymbolElement')((_temp = _class = function (_Component) {
    _inherits(SymbolElement, _Component);

    function SymbolElement() {
        _classCallCheck(this, SymbolElement);

        return _possibleConstructorReturn(this, (SymbolElement.__proto__ || Object.getPrototypeOf(SymbolElement)).apply(this, arguments));
    }

    _createClass(SymbolElement, [{
        key: 'render',
        value: function render() {
            var props = this.props;


            var viewBox = props.viewBox;
            if (props.viewbox) {
                viewBox = props.viewbox;
                console.warn('Prop `viewbox` is deprecated. please use `viewBox` instead.');
            }

            var content = viewBox ? _react3.default.createElement(
                _ViewBox2.default,
                {
                    name: props.id,
                    viewBox: viewBox,
                    preserveAspectRatio: props.preserveAspectRatio,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                props.children
            ) : _react3.default.createElement(
                _G2.default,
                { id: props.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                },
                props.children
            );

            return _react3.default.createElement(
                _Defs2.default,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                content
            );
        }
    }]);

    return SymbolElement;
}(_react2.Component), _class.displayName = 'Symbol', _class.propType = {
    id: _react2.PropTypes.string.isRequired,
    viewBox: _react2.PropTypes.string,
    preserveAspectRatio: _react2.PropTypes.string
}, _temp));

exports.default = SymbolElement;
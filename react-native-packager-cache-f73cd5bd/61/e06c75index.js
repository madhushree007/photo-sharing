'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-tabs/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Tabs: {
        displayName: 'Tabs'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-tabs/index.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var Tabs = _wrapComponent('Tabs')(function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs() {
        _classCallCheck(this, Tabs);

        return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
    }

    _createClass(Tabs, [{
        key: 'onSelect',
        value: function onSelect(el) {
            if (el.props.onSelect) {
                el.props.onSelect(el);
            } else if (this.props.onSelect) {
                this.props.onSelect(el);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var selected = this.props.selected;
            if (!selected) {
                _react3.default.Children.forEach(this.props.children.filter(function (c) {
                    return c;
                }), function (el) {
                    if (!selected || el.props.initial) {
                        selected = el.props.name || el.key;
                    }
                });
            }
            return _react3.default.createElement(
                _reactNative.View,
                { style: [styles.tabbarView, this.props.style], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                },
                _react3.default.Children.map(this.props.children.filter(function (c) {
                    return c;
                }), function (el) {
                    return _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        { key: el.props.name + "touch",
                            style: [styles.iconView, _this2.props.iconStyle, (el.props.name || el.key) == selected ? _this2.props.selectedIconStyle || el.props.selectedIconStyle || {} : {}],
                            onPress: function onPress() {
                                return !self.props.locked && self.onSelect(el);
                            },
                            onLongPress: function onLongPress() {
                                return self.onSelect(el);
                            },
                            activeOpacity: el.props.pressOpacity, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        selected == (el.props.name || el.key) ? _react3.default.cloneElement(el, { selected: true, style: [el.props.style, _this2.props.selectedStyle, el.props.selectedStyle] }) : el
                    );
                })
            );
        }
    }]);

    return Tabs;
}(_react2.Component));

var styles = _reactNative.StyleSheet.create({
    tabbarView: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 50,
        opacity: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = Tabs;
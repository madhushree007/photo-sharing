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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-router-flux/src/TabBar.js';

var _reactNative = require('react-native');

var _reactNativeTabs = require('react-native-tabs');

var _reactNativeTabs2 = _interopRequireDefault(_reactNativeTabs);

var _DefaultRenderer = require('./DefaultRenderer');

var _DefaultRenderer2 = _interopRequireDefault(_DefaultRenderer);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _TabbedView = require('./TabbedView');

var _TabbedView2 = _interopRequireDefault(_TabbedView);

var _Util = require('./Util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TabBar: {
    displayName: 'TabBar'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-router-flux/src/TabBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var TabBar = _wrapComponent('TabBar')((_temp = _class = function (_Component) {
  _inherits(TabBar, _Component);

  _createClass(TabBar, null, [{
    key: 'onSelect',
    value: function onSelect(el) {
      if (!_Actions2.default[el.props.name]) {
        throw new Error('No action is defined for name=' + el.props.name + ' ' + ('actions: ' + JSON.stringify(Object.keys(_Actions2.default))));
      }
      if (typeof el.props.onPress === 'function') {
        el.props.onPress();
      } else {
        _Actions2.default[el.props.name]();
      }
    }
  }]);

  function TabBar(props, context) {
    _classCallCheck(this, TabBar);

    var _this = _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call(this, props, context));

    _this.renderScene = _this.renderScene.bind(_this);
    return _this;
  }

  _createClass(TabBar, [{
    key: 'renderScene',
    value: function renderScene(navigationState) {
      return _react3.default.createElement(_DefaultRenderer2.default, {
        key: navigationState.key,
        onNavigate: this.props.onNavigate,
        navigationState: navigationState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.props.navigationState;
      var selected = state.children[state.index];

      var hideTabBar = this.props.unmountScenes || (0, _Util.deepestExplicitValueForKey)(state, 'hideTabBar') || this.props.hideOnChildTabs && (0, _Util.deepestExplicitValueForKey)(selected, 'tabs');

      var contents = _react3.default.createElement(
        _reactNativeTabs2.default,
        _extends({
          style: state.tabBarStyle,
          selectedIconStyle: state.tabBarSelectedItemStyle,
          iconStyle: state.tabBarIconContainerStyle,
          onSelect: TabBar.onSelect }, state, {
          selected: selected.sceneKey,
          pressOpacity: this.props.pressOpacity,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }),
        state.children.filter(function (el) {
          return el.icon || _this2.props.tabIcon;
        }).map(function (el) {
          var Icon = el.icon || _this2.props.tabIcon;
          return _react3.default.createElement(Icon, _extends({}, _this2.props, el, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }));
        })
      );
      return _react3.default.createElement(
        _reactNative.View,
        {
          style: { flex: 1 },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        },
        _react3.default.createElement(_TabbedView2.default, {
          navigationState: this.props.navigationState,
          style: { flex: 1 },
          renderScene: this.renderScene,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }),
        !hideTabBar && state.children.filter(function (el) {
          return el.icon;
        }).length > 0 && (state.tabBarBackgroundImage ? _react3.default.createElement(
          _reactNative.Image,
          { source: state.tabBarBackgroundImage, __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          contents
        ) : contents)
      );
    }
  }]);

  return TabBar;
}(_react2.Component), _class.propTypes = {
  navigationState: _react2.PropTypes.object,
  tabIcon: _react2.PropTypes.any,
  onNavigate: _react2.PropTypes.func,
  unmountScenes: _react2.PropTypes.bool,
  pressOpacity: _react2.PropTypes.number,
  hideOnChildTabs: _react2.PropTypes.bool
}, _temp));

exports.default = TabBar;

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-lightbox/Lightbox.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-lightbox/Lightbox.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var React = require('react');
var Children = React.Children,
    cloneElement = React.cloneElement,
    PropTypes = React.PropTypes;

var _require = require('react-native'),
    Animated = _require.Animated,
    TouchableHighlight = _require.TouchableHighlight,
    View = _require.View;

var TimerMixin = require('react-timer-mixin');

var LightboxOverlay = require('./LightboxOverlay');

var Lightbox = _wrapComponent('_component')(React.createClass({
  displayName: 'Lightbox',

  mixins: [TimerMixin],

  propTypes: {
    activeProps: PropTypes.object,
    renderHeader: PropTypes.func,
    renderContent: PropTypes.func,
    underlayColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    springConfig: PropTypes.shape({
      tension: PropTypes.number,
      friction: PropTypes.number
    }),
    swipeToDismiss: PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      swipeToDismiss: true,
      onOpen: function onOpen() {},
      onClose: function onClose() {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      isOpen: false,
      origin: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      layoutOpacity: new Animated.Value(1)
    };
  },

  getContent: function getContent() {
    if (this.props.renderContent) {
      return this.props.renderContent();
    } else if (this.props.activeProps) {
      return cloneElement(Children.only(this.props.children), this.props.activeProps);
    }
    return this.props.children;
  },

  getOverlayProps: function getOverlayProps() {
    return {
      isOpen: this.state.isOpen,
      origin: this.state.origin,
      renderHeader: this.props.renderHeader,
      swipeToDismiss: this.props.swipeToDismiss,
      springConfig: this.props.springConfig,
      backgroundColor: this.props.backgroundColor,
      children: this.getContent(),
      onClose: this.onClose
    };
  },

  open: function open() {
    var _this = this;

    this._root.measure(function (ox, oy, width, height, px, py) {
      _this.props.onOpen();

      _this.setState({
        isOpen: _this.props.navigator ? true : false,
        isAnimating: true,
        origin: {
          width: width,
          height: height,
          x: px,
          y: py
        }
      }, function () {
        if (_this.props.navigator) {
          var route = {
            component: LightboxOverlay,
            passProps: _this.getOverlayProps()
          };
          var routes = _this.props.navigator.getCurrentRoutes();
          routes.push(route);
          _this.props.navigator.immediatelyResetRouteStack(routes);
        } else {
          _this.setState({
            isOpen: true
          });
        }
        _this.setTimeout(function () {
          _this.state.layoutOpacity.setValue(0);
        });
      });
    });
  },

  close: function close() {
    throw new Error('Lightbox.close method is deprecated. Use renderHeader(close) prop instead.');
  },

  onClose: function onClose() {
    this.state.layoutOpacity.setValue(1);
    this.setState({
      isOpen: false
    }, this.props.onClose);
    if (this.props.navigator) {
      var routes = this.props.navigator.getCurrentRoutes();
      routes.pop();
      this.props.navigator.immediatelyResetRouteStack(routes);
    }
  },

  render: function render() {
    var _this2 = this;

    return React.createElement(
      View,
      {
        ref: function ref(component) {
          return _this2._root = component;
        },
        style: this.props.style,
        onLayout: function onLayout() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      },
      React.createElement(
        Animated.View,
        { style: { opacity: this.state.layoutOpacity }, __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        },
        React.createElement(
          TouchableHighlight,
          {
            underlayColor: this.props.underlayColor,
            onPress: this.open,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            }
          },
          this.props.children
        )
      ),
      this.props.navigator ? false : React.createElement(LightboxOverlay, _extends({}, this.getOverlayProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }))
    );
  }
}));

module.exports = Lightbox;

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationHeader.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationHeader: {
    displayName: 'NavigationHeader'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationHeader.js',
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
var ReactNative = require('react-native');
var NavigationContainer = require('./NavigationContainer');
var NavigationHeaderTitle = require('./NavigationHeaderTitle');
var NavigationHeaderBackButton = require('./NavigationHeaderBackButton');
var NavigationPropTypes = require('./NavigationPropTypes');
var NavigationHeaderStyleInterpolator = require('./NavigationHeaderStyleInterpolator');
var ReactComponentWithPureRenderMixin = require('react-addons-pure-render-mixin');

var Animated = ReactNative.Animated,
    Platform = ReactNative.Platform,
    StyleSheet = ReactNative.StyleSheet,
    View = ReactNative.View;


var APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
var STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
var PropTypes = React.PropTypes;

var NavigationHeader = _wrapComponent('NavigationHeader')((_temp = _class = function (_React$Component) {
  _inherits(NavigationHeader, _React$Component);

  function NavigationHeader() {
    _classCallCheck(this, NavigationHeader);

    return _possibleConstructorReturn(this, (NavigationHeader.__proto__ || Object.getPrototypeOf(NavigationHeader)).apply(this, arguments));
  }

  _createClass(NavigationHeader, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          scenes = _props.scenes,
          style = _props.style,
          viewProps = _props.viewProps;


      var scenesProps = scenes.map(function (scene) {
        var props = NavigationPropTypes.extractSceneRendererProps(_this2.props);
        props.scene = scene;
        return props;
      });

      return React.createElement(
        View,
        _extends({ style: [styles.appbar, style] }, viewProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }),
        scenesProps.map(this._renderLeft, this),
        scenesProps.map(this._renderTitle, this),
        scenesProps.map(this._renderRight, this)
      );
    }
  }, {
    key: '_renderLeft',
    value: function _renderLeft(props) {
      return this._renderSubView(props, 'left', this.props.renderLeftComponent, NavigationHeaderStyleInterpolator.forLeft);
    }
  }, {
    key: '_renderTitle',
    value: function _renderTitle(props) {
      return this._renderSubView(props, 'title', this.props.renderTitleComponent, NavigationHeaderStyleInterpolator.forCenter);
    }
  }, {
    key: '_renderRight',
    value: function _renderRight(props) {
      return this._renderSubView(props, 'right', this.props.renderRightComponent, NavigationHeaderStyleInterpolator.forRight);
    }
  }, {
    key: '_renderSubView',
    value: function _renderSubView(props, name, renderer, styleInterpolator) {
      var scene = props.scene,
          navigationState = props.navigationState;
      var index = scene.index,
          isStale = scene.isStale,
          key = scene.key;


      var offset = navigationState.index - index;

      if (Math.abs(offset) > 2) {
        return null;
      }

      var subView = renderer(props);
      if (subView === null) {
        return null;
      }

      var pointerEvents = offset !== 0 || isStale ? 'none' : 'box-none';
      return React.createElement(
        Animated.View,
        {
          pointerEvents: pointerEvents,
          key: name + '_' + key,
          style: [styles[name], styleInterpolator(props)], __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        },
        subView
      );
    }
  }]);

  return NavigationHeader;
}(React.Component), _class.defaultProps = {

  renderTitleComponent: function renderTitleComponent(props) {
    var navigationState = props.navigationState;

    var title = String(navigationState.title || '');
    return React.createElement(
      NavigationHeaderTitle,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      },
      title
    );
  },

  renderLeftComponent: function renderLeftComponent(props) {
    return props.scene.index > 0 ? React.createElement(NavigationHeaderBackButton, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      }
    }) : null;
  },

  renderRightComponent: function renderRightComponent(props) {
    return null;
  }
}, _class.propTypes = _extends({}, NavigationPropTypes.SceneRendererProps, {
  renderLeftComponent: PropTypes.func,
  renderRightComponent: PropTypes.func,
  renderTitleComponent: PropTypes.func,
  style: View.propTypes.style,
  viewProps: PropTypes.shape(View.propTypes)
}), _temp));

var styles = StyleSheet.create({
  appbar: {
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#FFF',
    borderBottomColor: 'rgba(0, 0, 0, .15)',
    borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    elevation: 2,
    flexDirection: 'row',
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT,
    justifyContent: 'flex-start',
    left: 0,
    marginBottom: 16,
    position: 'absolute',
    right: 0,
    top: 0
  },

  title: {
    bottom: 0,
    left: APPBAR_HEIGHT,
    marginTop: STATUSBAR_HEIGHT,
    position: 'absolute',
    right: APPBAR_HEIGHT,
    top: 0
  },

  left: {
    bottom: 0,
    left: 0,
    marginTop: STATUSBAR_HEIGHT,
    position: 'absolute',
    top: 0
  },

  right: {
    bottom: 0,
    marginTop: STATUSBAR_HEIGHT,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

var NavigationHeaderContainer = NavigationContainer.create(NavigationHeader);

NavigationHeaderContainer.HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;
NavigationHeaderContainer.Title = NavigationHeaderTitle;
NavigationHeaderContainer.BackButton = NavigationHeaderBackButton;

module.exports = NavigationHeaderContainer;
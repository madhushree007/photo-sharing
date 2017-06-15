
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/CustomComponents/NavigationExperimental/NavigationHeader.js';

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
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/CustomComponents/NavigationExperimental/NavigationHeader.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NavigationHeaderBackButton = require('NavigationHeaderBackButton');
var NavigationHeaderStyleInterpolator = require('NavigationHeaderStyleInterpolator');
var NavigationHeaderTitle = require('NavigationHeaderTitle');
var NavigationPropTypes = require('NavigationPropTypes');
var React = require('React');
var ReactComponentWithPureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var ReactNative = require('react-native');
var TVEventHandler = require('TVEventHandler');

var Animated = ReactNative.Animated,
    Platform = ReactNative.Platform,
    StyleSheet = ReactNative.StyleSheet,
    View = ReactNative.View;


var APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
var STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
var PropTypes = React.PropTypes;

var NavigationHeader = _wrapComponent('NavigationHeader')((_temp2 = _class = function (_React$Component) {
  _inherits(NavigationHeader, _React$Component);

  function NavigationHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavigationHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavigationHeader.__proto__ || Object.getPrototypeOf(NavigationHeader)).call.apply(_ref, [this].concat(args))), _this), _this._renderLeft = function (props) {
      return _this._renderSubView(props, 'left', _this.props.renderLeftComponent, NavigationHeaderStyleInterpolator.forLeft);
    }, _this._renderTitle = function (props) {
      return _this._renderSubView(props, 'title', _this.props.renderTitleComponent, NavigationHeaderStyleInterpolator.forCenter);
    }, _this._renderRight = function (props) {
      return _this._renderSubView(props, 'right', _this.props.renderRightComponent, NavigationHeaderStyleInterpolator.forRight);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavigationHeader, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._tvEventHandler = new TVEventHandler();
      this._tvEventHandler.enable(this, function (cmp, evt) {
        if (evt && evt.eventType === 'menu') {
          cmp.props.onNavigateBack && cmp.props.onNavigateBack();
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._tvEventHandler) {
        this._tvEventHandler.disable();
        delete this._tvEventHandler;
      }
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

      var barHeight = this.props.statusBarHeight instanceof Animated.Value ? Animated.add(this.props.statusBarHeight, new Animated.Value(APPBAR_HEIGHT)) : APPBAR_HEIGHT + this.props.statusBarHeight;

      return React.createElement(
        Animated.View,
        _extends({ style: [styles.appbar, { height: barHeight }, style]
        }, viewProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          }
        }),
        scenesProps.map(this._renderLeft, this),
        scenesProps.map(this._renderTitle, this),
        scenesProps.map(this._renderRight, this)
      );
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

      var subViewProps = _extends({}, props, { onNavigateBack: this.props.onNavigateBack });
      var subView = renderer(subViewProps);
      if (subView === null) {
        return null;
      }

      var pointerEvents = offset !== 0 || isStale ? 'none' : 'box-none';
      return React.createElement(
        Animated.View,
        {
          pointerEvents: pointerEvents,
          key: name + '_' + key,
          style: [styles[name], { marginTop: this.props.statusBarHeight }, styleInterpolator(props)], __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          }
        },
        subView
      );
    }
  }]);

  return NavigationHeader;
}(React.Component), _class.defaultProps = {

  renderTitleComponent: function renderTitleComponent(props) {
    var title = String(props.scene.route.title || '');
    return React.createElement(
      NavigationHeaderTitle,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      },
      title
    );
  },

  renderLeftComponent: function renderLeftComponent(props) {
    if (props.scene.index === 0 || !props.onNavigateBack) {
      return null;
    }
    return React.createElement(NavigationHeaderBackButton, {
      onPress: props.onNavigateBack,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      }
    });
  },

  renderRightComponent: function renderRightComponent(props) {
    return null;
  },

  statusBarHeight: STATUSBAR_HEIGHT
}, _class.propTypes = _extends({}, NavigationPropTypes.SceneRendererProps, {
  onNavigateBack: PropTypes.func,
  renderLeftComponent: PropTypes.func,
  renderRightComponent: PropTypes.func,
  renderTitleComponent: PropTypes.func,
  style: View.propTypes.style,
  statusBarHeight: PropTypes.number,
  viewProps: PropTypes.shape(View.propTypes)
}), _class.HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT, _class.Title = NavigationHeaderTitle, _class.BackButton = NavigationHeaderBackButton, _temp2));

var styles = StyleSheet.create({
  appbar: {
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#FFF',
    borderBottomColor: 'rgba(0, 0, 0, .15)',
    borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  title: {
    bottom: 0,
    left: APPBAR_HEIGHT,
    position: 'absolute',
    right: APPBAR_HEIGHT,
    top: 0
  },

  left: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0
  },

  right: {
    bottom: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

module.exports = NavigationHeader;
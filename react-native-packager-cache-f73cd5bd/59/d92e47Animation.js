var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/lottie-react-native/lib/js/Animation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

var _reactNativeSafeModule = require('react-native-safe-module');

var _reactNativeSafeModule2 = _interopRequireDefault(_reactNativeSafeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  LottieAnimation: {
    displayName: 'LottieAnimation'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/lottie-react-native/lib/js/Animation.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NativeLottieView = _reactNativeSafeModule2.default.component({
  viewName: 'LottieAnimationView',
  mockComponent: _reactNative.View
});

var LottieViewManager = _reactNativeSafeModule2.default.module({
  moduleName: 'LottieAnimationView',
  mock: {
    play: function play() {},
    reset: function reset() {}
  }
});

var ViewStyleExceptBorderPropType = function ViewStyleExceptBorderPropType(props, propName, componentName) {
  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var _View$propTypes;

  var flattened = _reactNative.StyleSheet.flatten(props[propName]);
  var usesBorder = Object.keys(flattened).some(function (key) {
    return key.startsWith('border');
  });
  if (usesBorder) {
    return Error(componentName + ' does not allow any border related style properties to be specified. ' + 'Border styles for this component will behave differently across platforms. If you\'d like ' + 'to render a border around this component, wrap it with a View.');
  }
  return (_View$propTypes = _reactNative.View.propTypes).style.apply(_View$propTypes, [props, propName, componentName].concat(rest));
};

var NotAllowedPropType = function NotAllowedPropType(props, propName, componentName) {
  var value = props[propName];
  if (value != null) {
    return Error(componentName + ' cannot specify \'' + propName + '\'.');
  }
  return null;
};

var propTypes = _extends({}, _reactNative.View.propTypes, {
  style: ViewStyleExceptBorderPropType,
  children: NotAllowedPropType,
  progress: _react2.PropTypes.number,
  speed: _react2.PropTypes.number,
  loop: _react2.PropTypes.bool,
  source: _react2.PropTypes.oneOfType([_react2.PropTypes.object, _react2.PropTypes.string]).isRequired
});

var defaultProps = {
  progress: 0,
  speed: 1,
  loop: false
};

var viewConfig = {
  uiViewClassName: 'LottieAnimationView',
  validAttributes: {
    progress: true
  }
};

var LottieAnimation = _wrapComponent('LottieAnimation')(function (_React$Component) {
  _inherits(LottieAnimation, _React$Component);

  function LottieAnimation(props) {
    _classCallCheck(this, LottieAnimation);

    var _this = _possibleConstructorReturn(this, (LottieAnimation.__proto__ || Object.getPrototypeOf(LottieAnimation)).call(this, props));

    _this.viewConfig = viewConfig;
    _this.refRoot = _this.refRoot.bind(_this);
    return _this;
  }

  _createClass(LottieAnimation, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      _reactNative.UIManager.updateView(this.getHandle(), this.viewConfig.uiViewClassName, {
        progress: props.progress
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.runCommand('play');
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.runCommand('reset');
    }
  }, {
    key: 'runCommand',
    value: function runCommand(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return _reactNative.Platform.select({
        android: function android() {
          return _reactNative.UIManager.dispatchViewManagerCommand(_this2.getHandle(), _reactNative.UIManager.AirbnbLottieView.Commands[name], args);
        },
        ios: function ios() {
          return LottieViewManager[name].apply(LottieViewManager, [_this2.getHandle()].concat(_toConsumableArray(args)));
        }
      })();
    }
  }, {
    key: 'getHandle',
    value: function getHandle() {
      return (0, _reactNative.findNodeHandle)(this.root);
    }
  }, {
    key: 'refRoot',
    value: function refRoot(root) {
      this.root = root;
    }
  }, {
    key: 'render',
    value: function render() {
      var source = this.props.source;

      var sourceName = typeof source === 'string' ? source : undefined;
      var sourceJson = typeof source === 'string' ? undefined : source;

      return _react3.default.createElement(NativeLottieView, _extends({
        ref: this.refRoot
      }, this.props, {
        source: undefined,
        sourceName: sourceName,
        sourceJson: sourceJson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }));
    }
  }]);

  return LottieAnimation;
}(_react3.default.Component));

LottieAnimation.propTypes = propTypes;
LottieAnimation.defaultProps = defaultProps;

var Animation = _reactNative.Animated.createAnimatedComponent(LottieAnimation);

Animation.prototype.play = function play() {
  return this.getNode().play();
};

Animation.prototype.reset = function pause() {
  return this.getNode().reset();
};

module.exports = Animation;
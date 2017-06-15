
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  StatusBar: {
    displayName: 'StatusBar'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/StatusBar/StatusBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var React = require('React');
var ColorPropType = require('ColorPropType');
var Platform = require('Platform');

var processColor = require('processColor');

var StatusBarManager = require('NativeModules').StatusBarManager;

function mergePropsStack(propsStack, defaultValues) {
  return propsStack.reduce(function (prev, cur) {
    for (var prop in cur) {
      if (cur[prop] != null) {
        prev[prop] = cur[prop];
      }
    }
    return prev;
  }, _extends({}, defaultValues));
}

function createStackEntry(props) {
  return {
    backgroundColor: props.backgroundColor != null ? {
      value: props.backgroundColor,
      animated: props.animated
    } : null,
    barStyle: props.barStyle != null ? {
      value: props.barStyle,
      animated: props.animated
    } : null,
    translucent: props.translucent,
    hidden: props.hidden != null ? {
      value: props.hidden,
      animated: props.animated,
      transition: props.showHideTransition
    } : null,
    networkActivityIndicatorVisible: props.networkActivityIndicatorVisible
  };
}

var StatusBar = _wrapComponent('StatusBar')((_temp2 = _class = function (_React$Component) {
  _inherits(StatusBar, _React$Component);

  function StatusBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatusBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatusBar.__proto__ || Object.getPrototypeOf(StatusBar)).call.apply(_ref, [this].concat(args))), _this), _this._stackEntry = null, _this._updatePropsStack = function () {
      clearImmediate(StatusBar._updateImmediate);
      StatusBar._updateImmediate = setImmediate(function () {
        var oldProps = StatusBar._currentValues;
        var mergedProps = mergePropsStack(StatusBar._propsStack, StatusBar._defaultProps);

        if (Platform.OS === 'ios') {
          if (!oldProps || oldProps.barStyle.value !== mergedProps.barStyle.value) {
            StatusBarManager.setStyle(mergedProps.barStyle.value, mergedProps.barStyle.animated);
          }
          if (!oldProps || oldProps.hidden.value !== mergedProps.hidden.value) {
            StatusBarManager.setHidden(mergedProps.hidden.value, mergedProps.hidden.animated ? mergedProps.hidden.transition : 'none');
          }

          if (!oldProps || oldProps.networkActivityIndicatorVisible !== mergedProps.networkActivityIndicatorVisible) {
            StatusBarManager.setNetworkActivityIndicatorVisible(mergedProps.networkActivityIndicatorVisible);
          }
        } else if (Platform.OS === 'android') {
          if (!oldProps || oldProps.barStyle.value !== mergedProps.barStyle.value) {
            StatusBarManager.setStyle(mergedProps.barStyle.value);
          }
          if (!oldProps || oldProps.backgroundColor.value !== mergedProps.backgroundColor.value) {
            StatusBarManager.setColor(processColor(mergedProps.backgroundColor.value), mergedProps.backgroundColor.animated);
          }
          if (!oldProps || oldProps.hidden.value !== mergedProps.hidden.value) {
            StatusBarManager.setHidden(mergedProps.hidden.value);
          }
          if (!oldProps || oldProps.translucent !== mergedProps.translucent) {
            StatusBarManager.setTranslucent(mergedProps.translucent);
          }
        }

        StatusBar._currentValues = mergedProps;
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatusBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._stackEntry = createStackEntry(this.props);
      StatusBar._propsStack.push(this._stackEntry);
      this._updatePropsStack();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var index = StatusBar._propsStack.indexOf(this._stackEntry);
      StatusBar._propsStack.splice(index, 1);

      this._updatePropsStack();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var index = StatusBar._propsStack.indexOf(this._stackEntry);
      this._stackEntry = createStackEntry(this.props);
      StatusBar._propsStack[index] = this._stackEntry;

      this._updatePropsStack();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'setHidden',
    value: function setHidden(hidden, animation) {
      animation = animation || 'none';
      StatusBar._defaultProps.hidden.value = hidden;
      if (Platform.OS === 'ios') {
        StatusBarManager.setHidden(hidden, animation);
      } else if (Platform.OS === 'android') {
        StatusBarManager.setHidden(hidden);
      }
    }
  }, {
    key: 'setBarStyle',
    value: function setBarStyle(style, animated) {
      animated = animated || false;
      StatusBar._defaultProps.barStyle.value = style;
      if (Platform.OS === 'ios') {
        StatusBarManager.setStyle(style, animated);
      } else if (Platform.OS === 'android') {
        StatusBarManager.setStyle(style);
      }
    }
  }, {
    key: 'setNetworkActivityIndicatorVisible',
    value: function setNetworkActivityIndicatorVisible(visible) {
      if (Platform.OS !== 'ios') {
        console.warn('`setNetworkActivityIndicatorVisible` is only available on iOS');
        return;
      }
      StatusBar._defaultProps.networkActivityIndicatorVisible = visible;
      StatusBarManager.setNetworkActivityIndicatorVisible(visible);
    }
  }, {
    key: 'setBackgroundColor',
    value: function setBackgroundColor(color, animated) {
      if (Platform.OS !== 'android') {
        console.warn('`setBackgroundColor` is only available on Android');
        return;
      }
      animated = animated || false;
      StatusBar._defaultProps.backgroundColor.value = color;
      StatusBarManager.setColor(processColor(color), animated);
    }
  }, {
    key: 'setTranslucent',
    value: function setTranslucent(translucent) {
      if (Platform.OS !== 'android') {
        console.warn('`setTranslucent` is only available on Android');
        return;
      }
      StatusBar._defaultProps.translucent = translucent;
      StatusBarManager.setTranslucent(translucent);
    }
  }]);

  return StatusBar;
}(React.Component), _class._propsStack = [], _class._defaultProps = createStackEntry({
  animated: false,
  showHideTransition: 'fade',
  backgroundColor: 'black',
  barStyle: 'default',
  translucent: false,
  hidden: false,
  networkActivityIndicatorVisible: false
}), _class._updateImmediate = null, _class._currentValues = null, _class.currentHeight = StatusBarManager.HEIGHT, _class.propTypes = {
  hidden: React.PropTypes.bool,

  animated: React.PropTypes.bool,

  backgroundColor: ColorPropType,

  translucent: React.PropTypes.bool,

  barStyle: React.PropTypes.oneOf(['default', 'light-content', 'dark-content']),

  networkActivityIndicatorVisible: React.PropTypes.bool,

  showHideTransition: React.PropTypes.oneOf(['fade', 'slide'])
}, _class.defaultProps = {
  animated: false,
  showHideTransition: 'fade'
}, _temp2));

module.exports = StatusBar;
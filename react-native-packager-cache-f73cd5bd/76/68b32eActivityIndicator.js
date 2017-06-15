
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/ActivityIndicator/ActivityIndicator.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/ActivityIndicator/ActivityIndicator.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var ColorPropType = require('ColorPropType');
var NativeMethodsMixin = require('NativeMethodsMixin');
var Platform = require('Platform');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var requireNativeComponent = require('requireNativeComponent');

var PropTypes = React.PropTypes;

var GRAY = '#999999';

var ActivityIndicator = _wrapComponent('_component')(React.createClass({
  displayName: 'ActivityIndicator',

  mixins: [NativeMethodsMixin],

  propTypes: _extends({}, View.propTypes, {
    animating: PropTypes.bool,

    color: ColorPropType,

    size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'large']), PropTypes.number]),

    hidesWhenStopped: PropTypes.bool
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      animating: true,
      color: Platform.OS === 'ios' ? GRAY : undefined,
      hidesWhenStopped: true,
      size: 'small'
    };
  },
  render: function render() {
    var _props = this.props,
        onLayout = _props.onLayout,
        style = _props.style,
        props = _objectWithoutProperties(_props, ['onLayout', 'style']);

    var sizeStyle = void 0;

    switch (props.size) {
      case 'small':
        sizeStyle = styles.sizeSmall;
        break;
      case 'large':
        sizeStyle = styles.sizeLarge;
        break;
      default:
        sizeStyle = { height: props.size, width: props.size };
        break;
    }

    return React.createElement(
      View,
      {
        onLayout: onLayout,
        style: [styles.container, style], __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      },
      React.createElement(RCTActivityIndicator, _extends({}, props, {
        style: sizeStyle,
        styleAttr: 'Normal',
        indeterminate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }))
    );
  }
}));

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeSmall: {
    width: 20,
    height: 20
  },
  sizeLarge: {
    width: 36,
    height: 36
  }
});

if (Platform.OS === 'ios') {
  var RCTActivityIndicator = requireNativeComponent('RCTActivityIndicatorView', ActivityIndicator, { nativeOnly: { activityIndicatorViewStyle: true } });
} else if (Platform.OS === 'android') {
  var RCTActivityIndicator = requireNativeComponent('AndroidProgressBar', ActivityIndicator, { nativeOnly: {
      indeterminate: true,
      progress: true,
      styleAttr: true
    } });
}

module.exports = ActivityIndicator;
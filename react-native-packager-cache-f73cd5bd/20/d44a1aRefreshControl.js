
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/RefreshControl/RefreshControl.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/RefreshControl/RefreshControl.js',
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
var View = require('View');

var requireNativeComponent = require('requireNativeComponent');

if (Platform.OS === 'android') {
  var RefreshLayoutConsts = require('UIManager').AndroidSwipeRefreshLayout.Constants;
} else {
  var RefreshLayoutConsts = { SIZE: {} };
}

var RefreshControl = _wrapComponent('_component')(React.createClass({
  displayName: 'RefreshControl',

  statics: {
    SIZE: RefreshLayoutConsts.SIZE
  },

  mixins: [NativeMethodsMixin],

  propTypes: _extends({}, View.propTypes, {
    onRefresh: React.PropTypes.func,

    refreshing: React.PropTypes.bool.isRequired,

    tintColor: ColorPropType,

    titleColor: ColorPropType,

    title: React.PropTypes.string,

    enabled: React.PropTypes.bool,

    colors: React.PropTypes.arrayOf(ColorPropType),

    progressBackgroundColor: ColorPropType,

    size: React.PropTypes.oneOf([RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE]),

    progressViewOffset: React.PropTypes.number
  }),

  _nativeRef: null,
  _lastNativeRefreshing: false,

  componentDidMount: function componentDidMount() {
    this._lastNativeRefreshing = this.props.refreshing;
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (this.props.refreshing !== prevProps.refreshing) {
      this._lastNativeRefreshing = this.props.refreshing;
    } else if (this.props.refreshing !== this._lastNativeRefreshing) {
      this._nativeRef.setNativeProps({ refreshing: this.props.refreshing });
      this._lastNativeRefreshing = this.props.refreshing;
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement(NativeRefreshControl, _extends({}, this.props, {
      ref: function ref(_ref) {
        _this._nativeRef = _ref;
      },
      onRefresh: this._onRefresh,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      }
    }));
  },
  _onRefresh: function _onRefresh() {
    this._lastNativeRefreshing = true;

    this.props.onRefresh && this.props.onRefresh();

    this.forceUpdate();
  }
}));

if (Platform.OS === 'ios') {
  var NativeRefreshControl = requireNativeComponent('RCTRefreshControl', RefreshControl);
} else if (Platform.OS === 'android') {
  var NativeRefreshControl = requireNativeComponent('AndroidSwipeRefreshLayout', RefreshControl);
}

module.exports = RefreshControl;
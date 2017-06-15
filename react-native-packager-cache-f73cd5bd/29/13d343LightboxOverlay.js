
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-lightbox/LightboxOverlay.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-lightbox/LightboxOverlay.js',
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
var PropTypes = React.PropTypes;

var _require = require('react-native'),
    Animated = _require.Animated,
    Dimensions = _require.Dimensions,
    Modal = _require.Modal,
    PanResponder = _require.PanResponder,
    Platform = _require.Platform,
    StatusBar = _require.StatusBar,
    StyleSheet = _require.StyleSheet,
    Text = _require.Text,
    TouchableOpacity = _require.TouchableOpacity,
    View = _require.View;

var WINDOW_HEIGHT = Dimensions.get('window').height;
var WINDOW_WIDTH = Dimensions.get('window').width;
var DRAG_DISMISS_THRESHOLD = 150;
var STATUS_BAR_OFFSET = Platform.OS === 'android' ? -25 : 0;

var LightboxOverlay = _wrapComponent('_component')(React.createClass({
  displayName: 'LightboxOverlay',

  propTypes: {
    origin: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number
    }),
    springConfig: PropTypes.shape({
      tension: PropTypes.number,
      friction: PropTypes.number
    }),
    backgroundColor: PropTypes.string,
    isOpen: PropTypes.bool,
    renderHeader: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    swipeToDismiss: PropTypes.bool
  },

  getInitialState: function getInitialState() {
    return {
      isAnimating: false,
      isPanning: false,
      target: {
        x: 0,
        y: 0,
        opacity: 1
      },
      pan: new Animated.Value(0),
      openVal: new Animated.Value(0)
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      springConfig: { tension: 30, friction: 7 },
      backgroundColor: 'black'
    };
  },

  componentWillMount: function componentWillMount() {
    var _this = this;

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: function onStartShouldSetPanResponder(evt, gestureState) {
        return !_this.state.isAnimating;
      },
      onStartShouldSetPanResponderCapture: function onStartShouldSetPanResponderCapture(evt, gestureState) {
        return !_this.state.isAnimating;
      },
      onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt, gestureState) {
        return !_this.state.isAnimating;
      },
      onMoveShouldSetPanResponderCapture: function onMoveShouldSetPanResponderCapture(evt, gestureState) {
        return !_this.state.isAnimating;
      },

      onPanResponderGrant: function onPanResponderGrant(evt, gestureState) {
        _this.state.pan.setValue(0);
        _this.setState({ isPanning: true });
      },
      onPanResponderMove: Animated.event([null, { dy: this.state.pan }]),
      onPanResponderTerminationRequest: function onPanResponderTerminationRequest(evt, gestureState) {
        return true;
      },
      onPanResponderRelease: function onPanResponderRelease(evt, gestureState) {
        if (Math.abs(gestureState.dy) > DRAG_DISMISS_THRESHOLD) {
          _this.setState({
            isPanning: false,
            target: {
              y: gestureState.dy,
              x: gestureState.dx,
              opacity: 1 - Math.abs(gestureState.dy / WINDOW_HEIGHT)
            }
          });
          _this.close();
        } else {
          Animated.spring(_this.state.pan, _extends({ toValue: 0 }, _this.props.springConfig)).start(function () {
            _this.setState({ isPanning: false });
          });
        }
      }
    });
  },

  componentDidMount: function componentDidMount() {
    if (this.props.isOpen) {
      this.open();
    }
  },

  open: function open() {
    var _this2 = this;

    StatusBar.setHidden(true, 'fade');
    this.state.pan.setValue(0);
    this.setState({
      isAnimating: true,
      target: {
        x: 0,
        y: 0,
        opacity: 1
      }
    });

    Animated.spring(this.state.openVal, _extends({ toValue: 1 }, this.props.springConfig)).start(function () {
      return _this2.setState({ isAnimating: false });
    });
  },

  close: function close() {
    var _this3 = this;

    StatusBar.setHidden(false, 'fade');
    this.setState({
      isAnimating: true
    });
    Animated.spring(this.state.openVal, _extends({ toValue: 0 }, this.props.springConfig)).start(function () {
      _this3.setState({
        isAnimating: false
      });
      _this3.props.onClose();
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.props.isOpen != props.isOpen && props.isOpen) {
      this.open();
    }
  },

  render: function render() {
    var _props = this.props,
        isOpen = _props.isOpen,
        renderHeader = _props.renderHeader,
        swipeToDismiss = _props.swipeToDismiss,
        origin = _props.origin,
        backgroundColor = _props.backgroundColor;
    var _state = this.state,
        isPanning = _state.isPanning,
        isAnimating = _state.isAnimating,
        openVal = _state.openVal,
        target = _state.target;


    var lightboxOpacityStyle = {
      opacity: openVal.interpolate({ inputRange: [0, 1], outputRange: [0, target.opacity] })
    };

    var handlers;
    if (swipeToDismiss) {
      handlers = this._panResponder.panHandlers;
    }

    var dragStyle;
    if (isPanning) {
      dragStyle = {
        top: this.state.pan
      };
      lightboxOpacityStyle.opacity = this.state.pan.interpolate({ inputRange: [-WINDOW_HEIGHT, 0, WINDOW_HEIGHT], outputRange: [0, 1, 0] });
    }

    var openStyle = [styles.open, {
      left: openVal.interpolate({ inputRange: [0, 1], outputRange: [origin.x, target.x] }),
      top: openVal.interpolate({ inputRange: [0, 1], outputRange: [origin.y + STATUS_BAR_OFFSET, target.y + STATUS_BAR_OFFSET] }),
      width: openVal.interpolate({ inputRange: [0, 1], outputRange: [origin.width, WINDOW_WIDTH] }),
      height: openVal.interpolate({ inputRange: [0, 1], outputRange: [origin.height, WINDOW_HEIGHT] })
    }];

    var background = React.createElement(Animated.View, { style: [styles.background, { backgroundColor: backgroundColor }, lightboxOpacityStyle], __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      }
    });
    var header = React.createElement(
      Animated.View,
      { style: [styles.header, lightboxOpacityStyle], __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      },
      renderHeader ? renderHeader(this.close) : React.createElement(
        TouchableOpacity,
        { onPress: this.close, __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        },
        React.createElement(
          Text,
          { style: styles.closeButton, __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            }
          },
          '\xD7'
        )
      )
    );
    var content = React.createElement(
      Animated.View,
      _extends({ style: [openStyle, dragStyle] }, handlers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }),
      this.props.children
    );
    if (this.props.navigator) {
      return React.createElement(
        View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        },
        background,
        content,
        header
      );
    }
    return React.createElement(
      Modal,
      { visible: isOpen, transparent: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      },
      background,
      content,
      header
    );
  }
}));

var styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  },
  open: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'transparent'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: WINDOW_WIDTH,
    backgroundColor: 'transparent'
  },
  closeButton: {
    fontSize: 35,
    color: 'white',
    lineHeight: 40,
    width: 40,
    textAlign: 'center',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 1.5,
    shadowColor: 'black',
    shadowOpacity: 0.8
  }
});

module.exports = LightboxOverlay;
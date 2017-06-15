Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/animation/src/components/ZoomableComponent.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = makeZoomable;

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ZoomDecorator: {
    displayName: 'ZoomDecorator',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/animation/src/components/ZoomableComponent.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

function getDistanceBetweenTwoPoints(_ref, _ref2) {
  var x1 = _ref.x,
      y1 = _ref.y;
  var x2 = _ref2.x,
      y2 = _ref2.y;

  var dx = Math.abs(x1 - x2);
  var dy = Math.abs(y1 - y2);

  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function middle1D(p1, p2) {
  return p1 > p2 ? p1 - (p1 - p2) / 2 : p2 - (p2 - p1) / 2;
}

function middle2D(_ref3, _ref4) {
  var x1 = _ref3.x,
      y1 = _ref3.y;
  var x2 = _ref4.x,
      y2 = _ref4.y;

  return {
    x: middle1D(x1, x2),
    y: middle1D(y1, y2)
  };
}

function maxOffset(offset, windowDimension, imageDimension) {
  var max = windowDimension - imageDimension;
  if (max >= 0) {
    return 0;
  }

  return offset < max ? max : offset;
}

function getOffsetByZoom(_ref5, _ref6) {
  var width = _ref5.width,
      height = _ref5.height,
      zoom = _ref5.zoom;
  var componentWidth = _ref6.componentWidth,
      componentHeight = _ref6.componentHeight;

  var xDiff = componentWidth * zoom - width;
  var yDiff = componentHeight * zoom - height;

  return {
    left: -xDiff / 2,
    top: -yDiff / 2
  };
}

function makeZoomable(ComponentToBeDecorated) {
  var _class, _temp;

  var ZoomDecorator = _wrapComponent('ZoomDecorator')((_temp = _class = function (_Component) {
    _inherits(ZoomDecorator, _Component);

    function ZoomDecorator(props) {
      _classCallCheck(this, ZoomDecorator);

      var _this = _possibleConstructorReturn(this, (ZoomDecorator.__proto__ || Object.getPrototypeOf(ZoomDecorator)).call(this, props));

      _this._onLayout = _this._onLayout.bind(_this);
      _this.state = {
        zoom: null,
        minZoom: null,
        layoutKnown: false,
        isZooming: false,
        isMoving: false,
        initialDistance: null,
        initialX: null,
        initialY: null,
        offsetTop: 0,
        offsetLeft: 0,
        initialTop: 0,
        initialLeft: 0,
        initialTopWithoutZoom: 0,
        initialLeftWithoutZoom: 0,
        initialZoom: 1,
        top: 0,
        left: 0
      };
      return _this;
    }

    _createClass(ZoomDecorator, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        this._panResponder = _reactNative.PanResponder.create({
          onStartShouldSetPanResponder: function onStartShouldSetPanResponder() {
            return true;
          },
          onStartShouldSetPanResponderCapture: function onStartShouldSetPanResponderCapture() {
            return true;
          },
          onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder() {
            return true;
          },
          onMoveShouldSetPanResponderCapture: function onMoveShouldSetPanResponderCapture() {
            return true;
          },
          onPanResponderGrant: function onPanResponderGrant() {},
          onPanResponderMove: function onPanResponderMove(evt, gesture) {
            var touches = evt.nativeEvent.touches;
            var touch1 = touches[0];
            var touch2 = touches[1];

            if (touches.length === 2) {
              _this2.processPinch(touch1, touch2);
              if (_this2.props.onZoom) _this2.props.onZoom();
            } else if (touches.length === 1 && !_this2.state.isZooming && !_this2.isMoveSmall(gesture)) {
              _this2.processTouch(touch1.pageX, touch1.pageY);
            }
          },

          onPanResponderTerminationRequest: function onPanResponderTerminationRequest() {
            return false;
          },

          onPanResponderRelease: function onPanResponderRelease() {
            if (!_this2.state.isMoving && !_this2.state.isZooming && _this2.props.onPress) {
              _this2.props.onPress();
            }
            _this2.setState({
              isZooming: false,
              isMoving: false
            });
          },
          onPanResponderTerminate: function onPanResponderTerminate() {},
          onShouldBlockNativeResponder: function onShouldBlockNativeResponder() {
            return true;
          }
        });
      }
    }, {
      key: 'isMoveSmall',
      value: function isMoveSmall(gesture) {
        return Math.abs(gesture.dx) < 2 && Math.abs(gesture.dy) < 2;
      }
    }, {
      key: 'processPinch',
      value: function processPinch(touch1, touch2) {
        var point1 = {
          x: touch1.pageX,
          y: touch1.pageY
        };

        var point2 = {
          x: touch2.pageX,
          y: touch2.pageY
        };

        var distance = getDistanceBetweenTwoPoints(point1, point2);
        var center = middle2D(point1, point2);

        if (!this.state.isZooming) {
          var offsetByZoom = getOffsetByZoom(this.state, this.props);
          this.setState({
            isZooming: true,
            initialDistance: distance,
            initialX: center.x,
            initialY: center.y,
            initialTop: this.state.top,
            initialLeft: this.state.left,
            initialZoom: this.state.zoom,
            initialTopWithoutZoom: this.state.top - offsetByZoom.top,
            initialLeftWithoutZoom: this.state.left - offsetByZoom.left
          });
        } else {
          var touchZoom = distance / this.state.initialDistance;
          var zoom = touchZoom * this.state.initialZoom > this.state.minZoom ? touchZoom * this.state.initialZoom : this.state.minZoom;

          var _offsetByZoom = getOffsetByZoom(this.state, this.props);
          var left = this.state.initialLeftWithoutZoom * touchZoom + _offsetByZoom.left;
          var top = this.state.initialTopWithoutZoom * touchZoom + _offsetByZoom.top;

          _reactNative.LayoutAnimation.easeInEaseOut();
          this.setState({
            zoom: zoom,
            left: left > 0 ? 0 : maxOffset(left, this.state.width, this.props.componentWidth * zoom),
            top: top > 0 ? 0 : maxOffset(top, this.state.height, this.props.componentHeight * zoom)
          });
        }
      }
    }, {
      key: 'processTouch',
      value: function processTouch(x, y) {
        if (!this.state.isMoving) {
          this.setState({
            isMoving: true,
            initialX: x,
            initialY: y,
            initialTop: this.state.top,
            initialLeft: this.state.left
          });
        } else {
          var left = this.state.initialLeft + x - this.state.initialX;
          var top = this.state.initialTop + y - this.state.initialY;

          var zoomedWidth = this.props.componentWidth * this.state.zoom;
          var zoomedHeight = this.props.componentHeight * this.state.zoom;

          _reactNative.LayoutAnimation.easeInEaseOut();
          this.setState({
            left: left > 0 ? 0 : maxOffset(left, this.state.width, zoomedWidth),
            top: top > 0 ? 0 : maxOffset(top, this.state.height, zoomedHeight)
          });
        }
      }
    }, {
      key: '_onLayout',
      value: function _onLayout(event) {
        var layout = event.nativeEvent.layout;

        if (layout.width === this.state.width && layout.height === this.state.height) {
          return;
        }

        var zoom = layout.width / this.props.componentWidth;

        var offsetTop = layout.height > this.props.componentHeight * zoom ? (layout.height - this.props.componentHeight * zoom) / 2 : 0;

        this.setState({
          layoutKnown: true,
          width: layout.width,
          height: layout.height,
          zoom: zoom,
          offsetTop: offsetTop,
          minZoom: zoom
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            style = _props.style,
            otherProps = _objectWithoutProperties(_props, ['style']);

        return _react3.default.createElement(
          _reactNative.View,
          _extends({
            style: style,
            onLayout: this._onLayout
          }, this._panResponder.panHandlers, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 238
            }
          }),
          _react3.default.createElement(ComponentToBeDecorated, _extends({
            style: [style, {
              position: 'absolute',
              top: this.state.offsetTop + this.state.top,
              left: this.state.offsetLeft + this.state.left,
              width: this.props.componentWidth * this.state.zoom,
              height: this.props.componentHeight * this.state.zoom
            }]
          }, otherProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            }
          }))
        );
      }
    }]);

    return ZoomDecorator;
  }(_react2.Component), _class.propTypes = {
    componentWidth: _react2.PropTypes.number.isRequired,
    componentHeight: _react2.PropTypes.number.isRequired,
    style: _react2.PropTypes.object,
    onPress: _react2.PropTypes.func,
    onZoom: _react2.PropTypes.func
  }, _temp));

  return ZoomDecorator;
}
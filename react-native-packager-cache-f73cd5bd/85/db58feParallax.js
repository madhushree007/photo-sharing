Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parallax = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/animation/src/animations/Parallax.js';

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _DriverShape = require('../drivers/DriverShape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Parallax: {
    displayName: 'Parallax'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/animation/src/animations/Parallax.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var findNodeHandle = _reactNative2.default.findNodeHandle;

var Parallax = exports.Parallax = _wrapComponent('Parallax')((_temp = _class = function (_Component) {
  _inherits(Parallax, _Component);

  function Parallax(props) {
    _classCallCheck(this, Parallax);

    var _this = _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call(this, props));

    _this.translation = new _reactNative.Animated.Value(0);
    _this.calculateTranslation = _this.calculateTranslation.bind(_this);
    _this.measure = _this.measure.bind(_this);
    _this.handleMeasure = _this.handleMeasure.bind(_this);
    _this.state = {
      y: 0
    };
    return _this;
  }

  _createClass(Parallax, [{
    key: 'handleMeasure',
    value: function handleMeasure(x, y, width, height, pageX, pageY) {
      this.setState({ x: pageX, y: pageY });
    }
  }, {
    key: 'measure',
    value: function measure() {
      _reactNative.UIManager.measure(findNodeHandle(this), this.handleMeasure);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      requestAnimationFrame(this.measure);
    }
  }, {
    key: 'calculateTranslation',
    value: function calculateTranslation(scrollOffset) {
      var y = this.state.y;
      var driver = this.props.driver;

      var scrollHeight = driver.layout.height;
      this.translation.setValue(scrollOffset.value - (y - scrollHeight / 2));
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var driver = this.props.driver;

      this.animationListener = driver.value.addListener(this.calculateTranslation);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var driver = this.props.driver;

      driver.value.removeListener(this.animationListener);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          scrollSpeed = _props.scrollSpeed,
          children = _props.children,
          extrapolation = _props.extrapolation,
          insideScroll = _props.insideScroll,
          style = _props.style,
          driver = _props.driver,
          header = _props.header;

      var scrollVector = insideScroll ? -1 : 1;
      var scrollFactor = scrollVector * (scrollSpeed - 1);
      var animatedValue = header ? driver.value : this.translation;

      return _react3.default.createElement(
        _reactNative.Animated.View,
        {
          style: [style, {
            transform: [{
              translateY: animatedValue.interpolate(_extends({
                inputRange: [-100, 100],
                outputRange: [-scrollFactor * 100, scrollFactor * 100]
              }, extrapolation))
            }]
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        },
        children
      );
    }
  }]);

  return Parallax;
}(_react2.Component), _class.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react3.default.PropTypes.node,

  extrapolation: _react3.default.PropTypes.object,

  scrollSpeed: _react3.default.PropTypes.number,

  insideScroll: _react3.default.PropTypes.bool,

  header: _react3.default.PropTypes.bool,

  style: _react3.default.PropTypes.object
}, _class.defaultProps = {
  insideScroll: true,
  header: false
}, _temp));
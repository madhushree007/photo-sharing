Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroHeader = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/animation/src/animations/HeroHeader.js';

var _reactNative = require('react-native');

var _ZoomOut = require('./ZoomOut');

var _Parallax = require('./Parallax');

var _DriverShape = require('../drivers/DriverShape');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  HeroHeader: {
    displayName: 'HeroHeader'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/animation/src/animations/HeroHeader.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var HeroHeader = exports.HeroHeader = _wrapComponent('HeroHeader')((_temp = _class = function (_Component) {
  _inherits(HeroHeader, _Component);

  function HeroHeader(props) {
    _classCallCheck(this, HeroHeader);

    var _this = _possibleConstructorReturn(this, (HeroHeader.__proto__ || Object.getPrototypeOf(HeroHeader)).call(this, props));

    _this.onLayout = _this.onLayout.bind(_this);
    _this.state = {
      height: 240
    };
    return _this;
  }

  _createClass(HeroHeader, [{
    key: 'onLayout',
    value: function onLayout(event) {
      var height = event.nativeEvent.layout.height;

      this.setState({ height: height });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          driver = _props.driver,
          children = _props.children;


      return _react3.default.createElement(
        _reactNative.View,
        { onLayout: this.onLayout, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        _react3.default.createElement(
          _ZoomOut.ZoomOut,
          {
            driver: driver,
            inputRange: [-(0.9 * this.state.height), 0],
            maxFactor: 3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          _react3.default.createElement(
            _Parallax.Parallax,
            {
              driver: driver,
              scrollSpeed: 0.5,
              insideScroll: true,
              header: true,
              extrapolation: { extrapolateLeft: 'clamp' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            children
          )
        )
      );
    }
  }]);

  return HeroHeader;
}(_react2.Component), _class.propTypes = {
  driver: _DriverShape.DriverShape.isRequired,

  children: _react3.default.PropTypes.node
}, _temp));
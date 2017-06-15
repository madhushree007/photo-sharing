var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-maps/components/MapPolyline.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = _interopRequireDefault(_decorateMapComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MapPolyline: {
    displayName: 'MapPolyline'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-maps/components/MapPolyline.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var propTypes = _extends({}, _reactNative.View.propTypes, {
  coordinates: _react2.PropTypes.arrayOf(_react2.PropTypes.shape({
    latitude: _react2.PropTypes.number.isRequired,
    longitude: _react2.PropTypes.number.isRequired
  })),

  onPress: _react2.PropTypes.func,

  fillColor: _react2.PropTypes.string,

  strokeWidth: _react2.PropTypes.number,

  strokeColor: _react2.PropTypes.string,

  zIndex: _react2.PropTypes.number,

  lineCap: _react2.PropTypes.oneOf(['butt', 'round', 'square']),

  lineJoin: _react2.PropTypes.oneOf(['miter', 'round', 'bevel']),

  miterLimit: _react2.PropTypes.number,

  geodesic: _react2.PropTypes.bool,

  lineDashPhase: _react2.PropTypes.number,

  lineDashPattern: _react2.PropTypes.arrayOf(_react2.PropTypes.number)
});

var defaultProps = {
  strokeColor: '#000',
  strokeWidth: 1
};

var MapPolyline = _wrapComponent('MapPolyline')(function (_React$Component) {
  _inherits(MapPolyline, _React$Component);

  function MapPolyline() {
    _classCallCheck(this, MapPolyline);

    return _possibleConstructorReturn(this, (MapPolyline.__proto__ || Object.getPrototypeOf(MapPolyline)).apply(this, arguments));
  }

  _createClass(MapPolyline, [{
    key: 'render',
    value: function render() {
      var AIRMapPolyline = this.getAirComponent();
      return _react3.default.createElement(AIRMapPolyline, _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }));
    }
  }]);

  return MapPolyline;
}(_react3.default.Component));

MapPolyline.propTypes = propTypes;
MapPolyline.defaultProps = defaultProps;

module.exports = (0, _decorateMapComponent2.default)(MapPolyline, {
  componentType: 'Polyline',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});
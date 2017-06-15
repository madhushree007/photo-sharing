var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-maps/components/MapView.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

var _MapMarker = require('./MapMarker');

var _MapMarker2 = _interopRequireDefault(_MapMarker);

var _MapPolyline = require('./MapPolyline');

var _MapPolyline2 = _interopRequireDefault(_MapPolyline);

var _MapPolygon = require('./MapPolygon');

var _MapPolygon2 = _interopRequireDefault(_MapPolygon);

var _MapCircle = require('./MapCircle');

var _MapCircle2 = _interopRequireDefault(_MapCircle);

var _MapCallout = require('./MapCallout');

var _MapCallout2 = _interopRequireDefault(_MapCallout);

var _MapUrlTile = require('./MapUrlTile');

var _MapUrlTile2 = _interopRequireDefault(_MapUrlTile);

var _AnimatedRegion = require('./AnimatedRegion');

var _AnimatedRegion2 = _interopRequireDefault(_AnimatedRegion);

var _decorateMapComponent = require('./decorateMapComponent');

var _ProviderConstants = require('./ProviderConstants');

var ProviderConstants = _interopRequireWildcard(_ProviderConstants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MapView: {
    displayName: 'MapView'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-maps/components/MapView.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var MAP_TYPES = {
  STANDARD: 'standard',
  SATELLITE: 'satellite',
  HYBRID: 'hybrid',
  TERRAIN: 'terrain',
  NONE: 'none'
};

var GOOGLE_MAPS_ONLY_TYPES = [MAP_TYPES.TERRAIN, MAP_TYPES.NONE];

var viewConfig = {
  uiViewClassName: 'AIR<provider>Map',
  validAttributes: {
    region: true
  }
};

var propTypes = _extends({}, _reactNative.View.propTypes, {
  provider: _react2.PropTypes.oneOf(['google']),

  style: _reactNative.View.propTypes.style,

  customMapStyle: _react2.PropTypes.array,

  customMapStyleString: _react2.PropTypes.string,

  showsUserLocation: _react2.PropTypes.bool,

  showsMyLocationButton: _react2.PropTypes.bool,

  followsUserLocation: _react2.PropTypes.bool,

  showsPointsOfInterest: _react2.PropTypes.bool,

  showsCompass: _react2.PropTypes.bool,

  zoomEnabled: _react2.PropTypes.bool,

  rotateEnabled: _react2.PropTypes.bool,

  cacheEnabled: _react2.PropTypes.bool,

  loadingEnabled: _react2.PropTypes.bool,

  loadingBackgroundColor: _reactNative.ColorPropType,

  loadingIndicatorColor: _reactNative.ColorPropType,

  scrollEnabled: _react2.PropTypes.bool,

  pitchEnabled: _react2.PropTypes.bool,

  toolbarEnabled: _react2.PropTypes.bool,

  moveOnMarkerPress: _react2.PropTypes.bool,

  showsScale: _react2.PropTypes.bool,

  showsBuildings: _react2.PropTypes.bool,

  showsTraffic: _react2.PropTypes.bool,

  showsIndoors: _react2.PropTypes.bool,

  mapType: _react2.PropTypes.oneOf(Object.values(MAP_TYPES)),

  region: _react2.PropTypes.shape({
    latitude: _react2.PropTypes.number.isRequired,
    longitude: _react2.PropTypes.number.isRequired,

    latitudeDelta: _react2.PropTypes.number.isRequired,
    longitudeDelta: _react2.PropTypes.number.isRequired
  }),

  initialRegion: _react2.PropTypes.shape({
    latitude: _react2.PropTypes.number.isRequired,
    longitude: _react2.PropTypes.number.isRequired,

    latitudeDelta: _react2.PropTypes.number.isRequired,
    longitudeDelta: _react2.PropTypes.number.isRequired
  }),

  liteMode: _react2.PropTypes.bool,

  maxDelta: _react2.PropTypes.number,

  minDelta: _react2.PropTypes.number,

  legalLabelInsets: _reactNative.EdgeInsetsPropType,

  onRegionChange: _react2.PropTypes.func,

  onRegionChangeComplete: _react2.PropTypes.func,

  onPress: _react2.PropTypes.func,

  onLongPress: _react2.PropTypes.func,

  onPanDrag: _react2.PropTypes.func,

  onMarkerPress: _react2.PropTypes.func,

  onMarkerSelect: _react2.PropTypes.func,

  onMarkerDeselect: _react2.PropTypes.func,

  onCalloutPress: _react2.PropTypes.func,

  onMarkerDragStart: _react2.PropTypes.func,

  onMarkerDrag: _react2.PropTypes.func,

  onMarkerDragEnd: _react2.PropTypes.func

});

var MapView = _wrapComponent('MapView')(function (_React$Component) {
  _inherits(MapView, _React$Component);

  function MapView(props) {
    _classCallCheck(this, MapView);

    var _this = _possibleConstructorReturn(this, (MapView.__proto__ || Object.getPrototypeOf(MapView)).call(this, props));

    _this.state = {
      isReady: _reactNative.Platform.OS === 'ios'
    };

    _this._onMapReady = _this._onMapReady.bind(_this);
    _this._onChange = _this._onChange.bind(_this);
    _this._onLayout = _this._onLayout.bind(_this);
    return _this;
  }

  _createClass(MapView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { provider: this.props.provider };
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      var a = this.__lastRegion;
      var b = nextProps.region;
      if (!a || !b) return;
      if (a.latitude !== b.latitude || a.longitude !== b.longitude || a.latitudeDelta !== b.latitudeDelta || a.longitudeDelta !== b.longitudeDelta) {
        this.map.setNativeProps({ region: b });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isReady = this.state.isReady;

      if (isReady) {
        this._updateStyle();
      }
    }
  }, {
    key: '_updateStyle',
    value: function _updateStyle() {
      var customMapStyle = this.props.customMapStyle;

      this.map.setNativeProps({ customMapStyleString: JSON.stringify(customMapStyle) });
    }
  }, {
    key: '_onMapReady',
    value: function _onMapReady() {
      var _props = this.props,
          region = _props.region,
          initialRegion = _props.initialRegion;

      if (region) {
        this.map.setNativeProps({ region: region });
      } else if (initialRegion) {
        this.map.setNativeProps({ region: initialRegion });
      }
      this._updateStyle();
      this.setState({ isReady: true });
    }
  }, {
    key: '_onLayout',
    value: function _onLayout(e) {
      var _props2 = this.props,
          region = _props2.region,
          initialRegion = _props2.initialRegion,
          onLayout = _props2.onLayout;
      var isReady = this.state.isReady;
      var layout = e.nativeEvent.layout;

      if (!layout.width || !layout.height) return;
      if (region && isReady && !this.__layoutCalled) {
        this.__layoutCalled = true;
        this.map.setNativeProps({ region: region });
      } else if (initialRegion && isReady && !this.__layoutCalled) {
        this.__layoutCalled = true;
        this.map.setNativeProps({ region: initialRegion });
      }
      if (onLayout) {
        onLayout(e);
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      this.__lastRegion = event.nativeEvent.region;
      if (event.nativeEvent.continuous) {
        if (this.props.onRegionChange) {
          this.props.onRegionChange(event.nativeEvent.region);
        }
      } else if (this.props.onRegionChangeComplete) {
        this.props.onRegionChangeComplete(event.nativeEvent.region);
      }
    }
  }, {
    key: 'animateToRegion',
    value: function animateToRegion(region, duration) {
      this._runCommand('animateToRegion', [region, duration || 500]);
    }
  }, {
    key: 'animateToCoordinate',
    value: function animateToCoordinate(latLng, duration) {
      this._runCommand('animateToCoordinate', [latLng, duration || 500]);
    }
  }, {
    key: 'fitToElements',
    value: function fitToElements(animated) {
      this._runCommand('fitToElements', [animated]);
    }
  }, {
    key: 'fitToSuppliedMarkers',
    value: function fitToSuppliedMarkers(markers, animated) {
      this._runCommand('fitToSuppliedMarkers', [markers, animated]);
    }
  }, {
    key: 'fitToCoordinates',
    value: function fitToCoordinates() {
      var coordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments[1];
      var _options$edgePadding = options.edgePadding,
          edgePadding = _options$edgePadding === undefined ? { top: 0, right: 0, bottom: 0, left: 0 } : _options$edgePadding,
          _options$animated = options.animated,
          animated = _options$animated === undefined ? true : _options$animated;


      this._runCommand('fitToCoordinates', [coordinates, edgePadding, animated]);
    }
  }, {
    key: 'takeSnapshot',
    value: function takeSnapshot(args) {
      var _this2 = this;

      if (_reactNative.Platform.OS === 'ios' && arguments.length === 4) {
        console.warn('Old takeSnapshot API has been deprecated; will be removed in the near future');
        var width = arguments[0];
        var height = arguments[1];
        var region = arguments[2];
        var callback = arguments[3];
        this._runCommand('takeSnapshot', [width || 0, height || 0, region || {}, 'png', 1, 'legacy', callback]);
        return undefined;
      }

      var config = {
        width: args.width || 0,
        height: args.height || 0,
        region: args.region || {},
        format: args.format || 'png',
        quality: args.quality || 1.0,
        result: args.result || 'file'
      };
      if (config.format !== 'png' && config.format !== 'jpg') throw new Error('Invalid format specified');
      if (config.result !== 'file' && config.result !== 'base64') throw new Error('Invalid result specified');

      if (_reactNative.Platform.OS === 'android') {
        return _reactNative.NativeModules.AirMapModule.takeSnapshot(this._getHandle(), config);
      } else if (_reactNative.Platform.OS === 'ios') {
        return new Promise(function (resolve, reject) {
          _this2._runCommand('takeSnapshot', [config.width, config.height, config.region, config.format, config.quality, config.result, function (err, snapshot) {
            if (err) {
              reject(err);
            } else {
              resolve(snapshot);
            }
          }]);
        });
      }
      return Promise.reject('takeSnapshot not supported on this platform');
    }
  }, {
    key: '_uiManagerCommand',
    value: function _uiManagerCommand(name) {
      return _reactNative.NativeModules.UIManager[(0, _decorateMapComponent.getAirMapName)(this.props.provider)].Commands[name];
    }
  }, {
    key: '_mapManagerCommand',
    value: function _mapManagerCommand(name) {
      return _reactNative.NativeModules[(0, _decorateMapComponent.getAirMapName)(this.props.provider) + 'Manager'][name];
    }
  }, {
    key: '_getHandle',
    value: function _getHandle() {
      return (0, _reactNative.findNodeHandle)(this.map);
    }
  }, {
    key: '_runCommand',
    value: function _runCommand(name, args) {
      switch (_reactNative.Platform.OS) {
        case 'android':
          _reactNative.NativeModules.UIManager.dispatchViewManagerCommand(this._getHandle(), this._uiManagerCommand(name), args);
          break;

        case 'ios':
          this._mapManagerCommand(name).apply(undefined, [this._getHandle()].concat(_toConsumableArray(args)));
          break;

        default:
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var props = void 0;

      if (this.state.isReady) {
        props = _extends({}, this.props, {
          region: null,
          initialRegion: null,
          onChange: this._onChange,
          onMapReady: this._onMapReady,
          onLayout: this._onLayout
        });
        if (_reactNative.Platform.OS === 'ios' && props.provider === ProviderConstants.PROVIDER_DEFAULT && GOOGLE_MAPS_ONLY_TYPES.includes(props.mapType)) {
          props.mapType = MAP_TYPES.standard;
        }
        props.handlePanDrag = !!props.onPanDrag;
      } else {
        props = {
          style: this.props.style,
          region: null,
          initialRegion: null,
          onChange: this._onChange,
          onMapReady: this._onMapReady,
          onLayout: this._onLayout
        };
      }

      if (_reactNative.Platform.OS === 'android' && this.props.liteMode) {
        return _react3.default.createElement(AIRMapLite, _extends({
          ref: function ref(_ref) {
            _this3.map = _ref;
          }
        }, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 615
          }
        }));
      }

      var AIRMap = getAirMapComponent(this.props.provider);

      return _react3.default.createElement(AIRMap, _extends({
        ref: function ref(_ref2) {
          _this3.map = _ref2;
        }
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        }
      }));
    }
  }]);

  return MapView;
}(_react3.default.Component));

MapView.propTypes = propTypes;
MapView.viewConfig = viewConfig;
MapView.childContextTypes = _decorateMapComponent.contextTypes;

MapView.MAP_TYPES = MAP_TYPES;

var nativeComponent = function nativeComponent(Component) {
  return (0, _reactNative.requireNativeComponent)(Component, MapView, {
    nativeOnly: {
      onChange: true,
      onMapReady: true,
      handlePanDrag: true
    }
  });
};
var airMaps = {
  default: nativeComponent('AIRMap')
};
if (_reactNative.Platform.OS === 'android') {
  airMaps.google = airMaps.default;
} else {
  airMaps.google = _decorateMapComponent.googleMapIsInstalled ? nativeComponent('AIRGoogleMap') : (0, _decorateMapComponent.createNotSupportedComponent)('react-native-maps: AirGoogleMaps dir must be added to your xCode project to support GoogleMaps on iOS.');
}
var getAirMapComponent = function getAirMapComponent(provider) {
  return airMaps[provider || 'default'];
};

var AIRMapLite = _reactNative.NativeModules.UIManager.AIRMapLite && (0, _reactNative.requireNativeComponent)('AIRMapLite', MapView, {
  nativeOnly: {
    onChange: true,
    onMapReady: true,
    handlePanDrag: true
  }
});

MapView.Marker = _MapMarker2.default;
MapView.Polyline = _MapPolyline2.default;
MapView.Polygon = _MapPolygon2.default;
MapView.Circle = _MapCircle2.default;
MapView.UrlTile = _MapUrlTile2.default;
MapView.Callout = _MapCallout2.default;
_extends(MapView, ProviderConstants);
MapView.ProviderPropType = _react2.PropTypes.oneOf(Object.values(ProviderConstants));

MapView.Animated = _reactNative.Animated.createAnimatedComponent(MapView);
MapView.AnimatedRegion = _AnimatedRegion2.default;

module.exports = MapView;

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationAnimatedView.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationAnimatedView: {
    displayName: 'NavigationAnimatedView'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationAnimatedView.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var Animated = require('react-native').Animated;
var NavigationContainer = require('./NavigationContainer');
var NavigationPropTypes = require('./NavigationPropTypes');
var NavigationScenesReducer = require('./NavigationScenesReducer');
var React = require('react');
var StyleSheet = require('react-native').StyleSheet;
var View = require('react-native').View;

var PropTypes = React.PropTypes;


function applyDefaultAnimation(position, navigationState) {
  Animated.spring(position, {
    bounciness: 0,
    toValue: navigationState.index
  }).start();
}

var NavigationAnimatedView = _wrapComponent('NavigationAnimatedView')((_temp = _class = function (_React$Component) {
  _inherits(NavigationAnimatedView, _React$Component);

  function NavigationAnimatedView(props, context) {
    _classCallCheck(this, NavigationAnimatedView);

    var _this = _possibleConstructorReturn(this, (NavigationAnimatedView.__proto__ || Object.getPrototypeOf(NavigationAnimatedView)).call(this, props, context));

    var layout = {
      height: new Animated.Value(0),
      initHeight: 0,
      initWidth: 0,
      isMeasured: false,
      width: new Animated.Value(0)
    };

    _this.state = {
      layout: layout,
      position: new Animated.Value(_this.props.navigationState.index),
      scenes: NavigationScenesReducer([], _this.props.navigationState)
    };
    return _this;
  }

  _createClass(NavigationAnimatedView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._onLayout = this._onLayout.bind(this);
      this._onProgressChange = this._onProgressChange.bind(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._positionListener = this.state.position.addListener(this._onProgressChange);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.navigationState !== this.props.navigationState) {
        this.setState({
          scenes: NavigationScenesReducer(this.state.scenes, nextProps.navigationState, this.props.navigationState)
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.navigationState.index !== this.props.navigationState.index) {
        this.props.applyAnimation(this.state.position, this.props.navigationState, lastProps.navigationState);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state.position.removeListener(this._positionListener);
    }
  }, {
    key: '_onProgressChange',
    value: function _onProgressChange(data) {
      var delta = Math.abs(data.value - this.props.navigationState.index);
      if (delta > Number.EPSILON) {
        return;
      }

      var scenes = this.state.scenes.filter(function (scene) {
        return !scene.isStale;
      });

      if (scenes.length !== this.state.scenes.length) {
        this.setState({ scenes: scenes });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var overlay = this._renderOverlay();
      var scenes = this._renderScenes();
      return React.createElement(
        View,
        {
          onLayout: this._onLayout,
          style: this.props.style, __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        },
        React.createElement(
          View,
          { style: styles.scenes, key: 'scenes', __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            }
          },
          scenes
        ),
        overlay
      );
    }
  }, {
    key: '_renderScenes',
    value: function _renderScenes() {
      return this.state.scenes.map(this._renderScene, this);
    }
  }, {
    key: '_renderScene',
    value: function _renderScene(scene) {
      var _props = this.props,
          navigationState = _props.navigationState,
          onNavigate = _props.onNavigate,
          renderScene = _props.renderScene;
      var _state = this.state,
          position = _state.position,
          scenes = _state.scenes;


      return renderScene({
        layout: this.state.layout,
        navigationState: navigationState,
        onNavigate: onNavigate,
        position: position,
        scene: scene,
        scenes: scenes
      });
    }
  }, {
    key: '_renderOverlay',
    value: function _renderOverlay() {
      if (this.props.renderOverlay) {
        var _props2 = this.props,
            _navigationState = _props2.navigationState,
            _onNavigate = _props2.onNavigate,
            _renderOverlay2 = _props2.renderOverlay;
        var _state2 = this.state,
            _position = _state2.position,
            _scenes = _state2.scenes;


        return _renderOverlay2({
          layout: this.state.layout,
          navigationState: _navigationState,
          onNavigate: _onNavigate,
          position: _position,
          scene: _scenes[_navigationState.index],
          scenes: _scenes
        });
      }
      return null;
    }
  }, {
    key: '_onLayout',
    value: function _onLayout(event) {
      var _event$nativeEvent$la = event.nativeEvent.layout,
          height = _event$nativeEvent$la.height,
          width = _event$nativeEvent$la.width;


      var layout = _extends({}, this.state.layout, {
        initHeight: height,
        initWidth: width,
        isMeasured: true
      });

      layout.height.setValue(height);
      layout.width.setValue(width);

      this.setState({ layout: layout });
    }
  }]);

  return NavigationAnimatedView;
}(React.Component), _class.propTypes = {
  applyAnimation: PropTypes.func,
  navigationState: NavigationPropTypes.navigationState.isRequired,
  onNavigate: PropTypes.func.isRequired,
  renderOverlay: PropTypes.func,
  renderScene: PropTypes.func.isRequired
}, _class.defaultProps = {
  applyAnimation: applyDefaultAnimation
}, _temp));

var styles = StyleSheet.create({
  scenes: {
    flex: 1
  }
});

NavigationAnimatedView = NavigationContainer.create(NavigationAnimatedView);

module.exports = NavigationAnimatedView;

'use strict';

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationAnimatedView.js';

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

var NavigationAnimatedView = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(NavigationAnimatedView, _React$Component);

  function NavigationAnimatedView(props, context) {
    babelHelpers.classCallCheck(this, NavigationAnimatedView);

    var _this = babelHelpers.possibleConstructorReturn(this, (NavigationAnimatedView.__proto__ || Object.getPrototypeOf(NavigationAnimatedView)).call(this, props, context));

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

  babelHelpers.createClass(NavigationAnimatedView, [{
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


      var layout = babelHelpers.extends({}, this.state.layout, {
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
}, _temp);


var styles = StyleSheet.create({
  scenes: {
    flex: 1
  }
});

NavigationAnimatedView = NavigationContainer.create(NavigationAnimatedView);

module.exports = NavigationAnimatedView;
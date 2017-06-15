
'use strict';

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationView.js';

var Animated = require('react-native').Animated;
var NavigationContainer = require('./NavigationContainer');
var React = require('react');
var StyleSheet = require('react-native').StyleSheet;
var View = require('react-native').View;
var NavigationScenesReducer = require('./NavigationScenesReducer');
var ReactComponentWithPureRenderMixin = require('react-addons-pure-render-mixin');

var PropTypes = React.PropTypes;
var NavigationView = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(NavigationView, _React$Component);

  function NavigationView(props, context) {
    babelHelpers.classCallCheck(this, NavigationView);

    var _this = babelHelpers.possibleConstructorReturn(this, (NavigationView.__proto__ || Object.getPrototypeOf(NavigationView)).call(this, props, context));

    var layout = {
      initWidth: 0,
      initHeight: 0,
      isMeasured: false,
      width: new Animated.Value(0),
      height: new Animated.Value(0)
    };

    var navigationState = _this.props.navigationState;


    _this._position = new Animated.Value(navigationState.index);

    _this.state = {
      layout: layout,
      scenes: NavigationScenesReducer([], navigationState)
    };
    return _this;
  }

  babelHelpers.createClass(NavigationView, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return ReactComponentWithPureRenderMixin.shouldComponentUpdate.call(this, nextProps, nextState);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.navigationState !== this.props.navigationState) {
        var _navigationState = nextProps.navigationState;

        this.setState({
          scenes: NavigationScenesReducer(this.state.scenes, _navigationState, null)
        }, function () {
          _this2._position.setValue(_navigationState.index);
        });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._onLayout = this._onLayout.bind(this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          navigationState = _props.navigationState,
          onNavigate = _props.onNavigate;
      var _state = this.state,
          layout = _state.layout,
          scenes = _state.scenes;


      var sceneProps = {
        layout: layout,
        navigationState: navigationState,
        onNavigate: onNavigate,
        position: this._position,
        scene: scenes[navigationState.index],
        scenes: scenes
      };

      return React.createElement(
        View,
        {
          onLayout: this._onLayout,
          style: this.props.style, __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        },
        this._renderScene(sceneProps)
      );
    }
  }, {
    key: '_renderScene',
    value: function _renderScene(props) {

      var child = this.props.renderScene(props);
      if (child === null) {
        return null;
      }
      return React.createElement(
        View,
        { key: props.scene.key, style: styles.scene, __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        },
        child
      );
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
  return NavigationView;
}(React.Component), _class.propTypes = {
  navigationState: PropTypes.object.isRequired,
  onNavigate: PropTypes.func.isRequired,
  renderScene: PropTypes.func.isRequired
}, _temp);


var styles = StyleSheet.create({
  scene: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

module.exports = NavigationContainer.create(NavigationView);
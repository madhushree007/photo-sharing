
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationView.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationView: {
    displayName: 'NavigationView'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationView.js',
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
var React = require('react');
var StyleSheet = require('react-native').StyleSheet;
var View = require('react-native').View;
var NavigationScenesReducer = require('./NavigationScenesReducer');
var ReactComponentWithPureRenderMixin = require('react-addons-pure-render-mixin');

var PropTypes = React.PropTypes;

var NavigationView = _wrapComponent('NavigationView')((_temp = _class = function (_React$Component) {
  _inherits(NavigationView, _React$Component);

  function NavigationView(props, context) {
    _classCallCheck(this, NavigationView);

    var _this = _possibleConstructorReturn(this, (NavigationView.__proto__ || Object.getPrototypeOf(NavigationView)).call(this, props, context));

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

  _createClass(NavigationView, [{
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

  return NavigationView;
}(React.Component), _class.propTypes = {
  navigationState: PropTypes.object.isRequired,
  onNavigate: PropTypes.func.isRequired,
  renderScene: PropTypes.func.isRequired
}, _temp));

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
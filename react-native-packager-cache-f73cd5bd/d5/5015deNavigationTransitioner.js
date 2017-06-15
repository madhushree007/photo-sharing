
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/NavigationExperimental/NavigationTransitioner.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationTransitioner: {
    displayName: 'NavigationTransitioner'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/NavigationExperimental/NavigationTransitioner.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var Animated = require('Animated');
var Easing = require('Easing');
var NavigationPropTypes = require('NavigationPropTypes');
var NavigationScenesReducer = require('NavigationScenesReducer');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var invariant = require('fbjs/lib/invariant');

var PropTypes = React.PropTypes;


var DefaultTransitionSpec = {
  duration: 250,
  easing: Easing.inOut(Easing.ease),
  timing: Animated.timing
};

var NavigationTransitioner = _wrapComponent('NavigationTransitioner')((_temp = _class = function (_React$Component) {
  _inherits(NavigationTransitioner, _React$Component);

  function NavigationTransitioner(props, context) {
    _classCallCheck(this, NavigationTransitioner);

    var _this = _possibleConstructorReturn(this, (NavigationTransitioner.__proto__ || Object.getPrototypeOf(NavigationTransitioner)).call(this, props, context));

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
      progress: new Animated.Value(1),
      scenes: NavigationScenesReducer([], _this.props.navigationState)
    };

    _this._prevTransitionProps = null;
    _this._transitionProps = buildTransitionProps(props, _this.state);
    _this._isMounted = false;
    return _this;
  }

  _createClass(NavigationTransitioner, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._onLayout = this._onLayout.bind(this);
      this._onTransitionEnd = this._onTransitionEnd.bind(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var nextScenes = NavigationScenesReducer(this.state.scenes, nextProps.navigationState, this.props.navigationState);

      if (nextScenes === this.state.scenes) {
        return;
      }

      var nextState = _extends({}, this.state, {
        scenes: nextScenes
      });

      var position = nextState.position,
          progress = nextState.progress;


      progress.setValue(0);

      this._prevTransitionProps = this._transitionProps;
      this._transitionProps = buildTransitionProps(nextProps, nextState);

      var transitionUserSpec = nextProps.configureTransition ? nextProps.configureTransition(this._transitionProps, this._prevTransitionProps) : null;

      var transitionSpec = _extends({}, DefaultTransitionSpec, transitionUserSpec);

      var timing = transitionSpec.timing;

      delete transitionSpec.timing;

      var animations = [timing(progress, _extends({}, transitionSpec, {
        toValue: 1
      }))];

      if (nextProps.navigationState.index !== this.props.navigationState.index) {
        animations.push(timing(position, _extends({}, transitionSpec, {
          toValue: nextProps.navigationState.index
        })));
      }

      this.setState(nextState, function () {
        nextProps.onTransitionStart && nextProps.onTransitionStart(_this2._transitionProps, _this2._prevTransitionProps);
        Animated.parallel(animations).start(_this2._onTransitionEnd);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        {
          onLayout: this._onLayout,
          style: [styles.main, this.props.style], __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        },
        this.props.render(this._transitionProps, this._prevTransitionProps)
      );
    }
  }, {
    key: '_onLayout',
    value: function _onLayout(event) {
      var _event$nativeEvent$la = event.nativeEvent.layout,
          height = _event$nativeEvent$la.height,
          width = _event$nativeEvent$la.width;

      if (this.state.layout.initWidth === width && this.state.layout.initHeight === height) {
        return;
      }
      var layout = _extends({}, this.state.layout, {
        initHeight: height,
        initWidth: width,
        isMeasured: true
      });

      layout.height.setValue(height);
      layout.width.setValue(width);

      var nextState = _extends({}, this.state, {
        layout: layout
      });

      this._transitionProps = buildTransitionProps(this.props, nextState);
      this.setState(nextState);
    }
  }, {
    key: '_onTransitionEnd',
    value: function _onTransitionEnd() {
      var _this3 = this;

      if (!this._isMounted) {
        return;
      }

      var prevTransitionProps = this._prevTransitionProps;
      this._prevTransitionProps = null;

      var nextState = _extends({}, this.state, {
        scenes: this.state.scenes.filter(isSceneNotStale)
      });

      this._transitionProps = buildTransitionProps(this.props, nextState);

      this.setState(nextState, function () {
        _this3.props.onTransitionEnd && _this3.props.onTransitionEnd(_this3._transitionProps, prevTransitionProps);
      });
    }
  }]);

  return NavigationTransitioner;
}(React.Component), _class.propTypes = {
  configureTransition: PropTypes.func,
  navigationState: NavigationPropTypes.navigationState.isRequired,
  onTransitionEnd: PropTypes.func,
  onTransitionStart: PropTypes.func,
  render: PropTypes.func.isRequired
}, _temp));

function buildTransitionProps(props, state) {
  var navigationState = props.navigationState;
  var layout = state.layout,
      position = state.position,
      progress = state.progress,
      scenes = state.scenes;


  var scene = scenes.find(isSceneActive);

  invariant(scene, 'No active scene when building navigation transition props.');

  return {
    layout: layout,
    navigationState: navigationState,
    position: position,
    progress: progress,
    scenes: scenes,
    scene: scene
  };
}

function isSceneNotStale(scene) {
  return !scene.isStale;
}

function isSceneActive(scene) {
  return scene.isActive;
}

var styles = StyleSheet.create({
  main: {
    flex: 1
  }
});

module.exports = NavigationTransitioner;
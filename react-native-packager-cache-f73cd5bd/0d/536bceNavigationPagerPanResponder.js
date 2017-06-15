
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animated = require('react-native').Animated;
var NavigationAbstractPanResponder = require('./NavigationAbstractPanResponder');
var NavigationCardStackPanResponder = require('./NavigationCardStackPanResponder');

var clamp = require('clamp');

var ANIMATION_DURATION = NavigationCardStackPanResponder.ANIMATION_DURATION,
    DISTANCE_THRESHOLD = NavigationCardStackPanResponder.DISTANCE_THRESHOLD,
    POSITION_THRESHOLD = NavigationCardStackPanResponder.POSITION_THRESHOLD,
    RESPOND_THRESHOLD = NavigationCardStackPanResponder.RESPOND_THRESHOLD,
    Directions = NavigationCardStackPanResponder.Directions;

var Actions = {
  JUMP_BACK: { type: 'jump_back' },
  JUMP_FORWARD: { type: 'jump_forward' }
};

var NavigationPagerPanResponder = function (_NavigationAbstractPa) {
  _inherits(NavigationPagerPanResponder, _NavigationAbstractPa);

  function NavigationPagerPanResponder(direction, props) {
    _classCallCheck(this, NavigationPagerPanResponder);

    var _this = _possibleConstructorReturn(this, (NavigationPagerPanResponder.__proto__ || Object.getPrototypeOf(NavigationPagerPanResponder)).call(this));

    _this._isResponding = false;
    _this._isVertical = direction === Directions.VERTICAL;
    _this._props = props;
    _this._startValue = 0;
    return _this;
  }

  _createClass(NavigationPagerPanResponder, [{
    key: 'onMoveShouldSetPanResponder',
    value: function onMoveShouldSetPanResponder(event, gesture) {
      var props = this._props;

      if (props.navigationState.index !== props.scene.index) {
        return false;
      }

      var layout = props.layout;
      var isVertical = this._isVertical;
      var axis = isVertical ? 'dy' : 'dx';
      var index = props.navigationState.index;
      var distance = isVertical ? layout.height.__getValue() : layout.width.__getValue();

      return Math.abs(gesture[axis]) > RESPOND_THRESHOLD && distance > 0 && index > 0;
    }
  }, {
    key: 'onPanResponderGrant',
    value: function onPanResponderGrant() {
      var _this2 = this;

      this._isResponding = false;
      this._props.position.stopAnimation(function (value) {
        _this2._isResponding = true;
        _this2._startValue = value;
      });
    }
  }, {
    key: 'onPanResponderMove',
    value: function onPanResponderMove(event, gesture) {
      if (!this._isResponding) {
        return;
      }

      var _props = this._props,
          layout = _props.layout,
          navigationState = _props.navigationState,
          position = _props.position,
          scenes = _props.scenes;


      var isVertical = this._isVertical;
      var axis = isVertical ? 'dy' : 'dx';
      var index = navigationState.index;
      var distance = isVertical ? layout.height.__getValue() : layout.width.__getValue();

      var prevIndex = Math.max(0, index - 1);

      var nextIndex = Math.min(index + 1, scenes.length - 1);

      var value = clamp(prevIndex, this._startValue - gesture[axis] / distance, nextIndex);

      position.setValue(value);
    }
  }, {
    key: 'onPanResponderRelease',
    value: function onPanResponderRelease(event, gesture) {
      var _this3 = this;

      if (!this._isResponding) {
        return;
      }

      this._isResponding = false;

      var _props2 = this._props,
          navigationState = _props2.navigationState,
          onNavigate = _props2.onNavigate,
          position = _props2.position;


      var isVertical = this._isVertical;
      var axis = isVertical ? 'dy' : 'dx';
      var index = navigationState.index;
      var distance = gesture[axis];

      position.stopAnimation(function (value) {
        _this3._reset();
        if (distance > DISTANCE_THRESHOLD || value <= index - POSITION_THRESHOLD) {
          onNavigate(Actions.JUMP_BACK);
          return;
        }

        if (distance < -DISTANCE_THRESHOLD || value >= index + POSITION_THRESHOLD) {
          onNavigate(Actions.JUMP_FORWARD);
        }
      });
    }
  }, {
    key: 'onPanResponderTerminate',
    value: function onPanResponderTerminate() {
      this._isResponding = false;
      this._reset();
    }
  }, {
    key: '_reset',
    value: function _reset() {
      var props = this._props;
      Animated.timing(props.position, {
        toValue: props.navigationState.index,
        duration: ANIMATION_DURATION
      }).start();
    }
  }]);

  return NavigationPagerPanResponder;
}(NavigationAbstractPanResponder);

function createPanHandlers(direction, props) {
  var responder = new NavigationPagerPanResponder(direction, props);
  return responder.panHandlers;
}

function forHorizontal(props) {
  return createPanHandlers(Directions.HORIZONTAL, props);
}

module.exports = {
  Actions: Actions,
  forHorizontal: forHorizontal
};
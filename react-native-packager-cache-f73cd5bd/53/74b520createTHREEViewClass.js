'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/createTHREEViewClass.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _GLView = require('./GLView');

var _GLView2 = _interopRequireDefault(_GLView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  THREEView: {
    displayName: 'THREEView',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/createTHREEViewClass.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

exports.default = function (THREE) {
  var _class, _temp2;

  return _wrapComponent('THREEView')((_temp2 = _class = function (_React$Component) {
    _inherits(THREEView, _React$Component);

    function THREEView() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, THREEView);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = THREEView.__proto__ || Object.getPrototypeOf(THREEView)).call.apply(_ref, [this].concat(args))), _this), _this._onContextCreate = function (gl) {
        var renderer = new THREE.WebGLRenderer({
          canvas: {
            width: gl.drawingBufferWidth,
            height: gl.drawingBufferHeight,
            style: {},
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {},
            clientHeight: gl.drawingBufferHeight
          },
          context: gl
        });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        renderer.setClearColor(0x000000, 1);

        var lastFrameTime = void 0;
        var animate = function animate() {
          _this._requestAnimationFrameID = requestAnimationFrame(animate);

          var now = 0.001 * global.nativePerformanceNow();
          var dt = typeof lastFrameTime !== 'undefined' ? now - lastFrameTime : 0.16666;

          if (_this.props.tick) {
            _this.props.tick(dt);
          }

          if (_this.props.scene && _this.props.camera) {
            var camera = _this.props.camera;
            if (_this.props.autoAspect && camera.aspect) {
              var desiredAspect = gl.drawingBufferWidth / gl.drawingBufferHeight;
              if (camera.aspect !== desiredAspect) {
                camera.aspect = desiredAspect;
                camera.updateProjectionMatrix();
              }
            }
            renderer.render(_this.props.scene, camera);
          }
          gl.flush();
          gl.endFrameEXP();

          lastFrameTime = now;
        };
        animate();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(THREEView, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._requestAnimationFrameID) {
          cancelAnimationFrame(this._requestAnimationFrameID);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            scene = _props.scene,
            camera = _props.camera,
            autoAspect = _props.autoAspect,
            tick = _props.tick,
            viewProps = _objectWithoutProperties(_props, ['scene', 'camera', 'autoAspect', 'tick']);

        return _react3.default.createElement(_GLView2.default, _extends({}, viewProps, {
          onContextCreate: this._onContextCreate,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }));
      }
    }], [{
      key: 'textureFromAsset',
      value: function textureFromAsset(asset) {
        if (!asset.localUri) {
          throw new Error('Asset \'' + asset.name + '\' needs to be downloaded before ' + 'being used as an OpenGL texture.');
        }
        var texture = new THREE.Texture();
        texture.image = {
          data: asset,
          width: asset.width,
          height: asset.height
        };
        texture.needsUpdate = true;
        texture.isDataTexture = true;
        return texture;
      }
    }]);

    return THREEView;
  }(_react3.default.Component), _class.propTypes = _extends({
    scene: _react2.PropTypes.object,
    camera: _react2.PropTypes.object,

    autoAspect: _react2.PropTypes.bool,

    tick: _react2.PropTypes.func

  }, _reactNative.View.propTypes), _class.defaultProps = {
    autoAspect: true
  }, _temp2));
};
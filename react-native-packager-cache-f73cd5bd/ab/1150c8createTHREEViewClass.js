'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/createTHREEViewClass.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _GLView = require('./GLView');

var _GLView2 = babelHelpers.interopRequireDefault(_GLView);

exports.default = function (THREE) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    babelHelpers.inherits(THREEView, _React$Component);

    function THREEView() {
      var _ref;

      var _temp, _this, _ret;

      babelHelpers.classCallCheck(this, THREEView);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = THREEView.__proto__ || Object.getPrototypeOf(THREEView)).call.apply(_ref, [this].concat(args))), _this), _this._onContextCreate = function (gl) {
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
      }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(THREEView, [{
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
            viewProps = babelHelpers.objectWithoutProperties(_props, ['scene', 'camera', 'autoAspect', 'tick']);

        return _react2.default.createElement(_GLView2.default, babelHelpers.extends({}, viewProps, {
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
  }(_react2.default.Component), _class.propTypes = babelHelpers.extends({
    scene: _react.PropTypes.object,
    camera: _react.PropTypes.object,

    autoAspect: _react.PropTypes.bool,

    tick: _react.PropTypes.func

  }, _reactNative.View.propTypes), _class.defaultProps = {
    autoAspect: true
  }, _temp2;
};
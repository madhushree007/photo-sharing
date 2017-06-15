Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  KeepAwake: {
    displayName: 'KeepAwake'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/KeepAwake.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var ExponentKeepAwake = _reactNative.NativeModules.ExponentKeepAwake;

var KeepAwake = _wrapComponent('KeepAwake')((_temp = _class = function (_Component) {
  _inherits(KeepAwake, _Component);

  function KeepAwake() {
    _classCallCheck(this, KeepAwake);

    return _possibleConstructorReturn(this, (KeepAwake.__proto__ || Object.getPrototypeOf(KeepAwake)).apply(this, arguments));
  }

  _createClass(KeepAwake, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      ExponentKeepAwake.activate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ExponentKeepAwake.deactivate();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return KeepAwake;
}(_react2.Component), _class.activate = ExponentKeepAwake.activate, _class.deactivate = ExponentKeepAwake.deactivate, _temp));

exports.default = KeepAwake;
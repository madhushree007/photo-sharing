Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/registerRootComponent.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = registerRootComponent;

var _reactNative = require('react-native');

var _Constants = require('./Constants');

var _Constants2 = _interopRequireDefault(_Constants);

var _Font = require('./Font');

var _Notifications = require('./Notifications');

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ExponentRootComponent: {
    displayName: 'ExponentRootComponent',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/expo/src/registerRootComponent.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

function wrapWithExponentRoot(AppRootComponent) {
  var ExponentRootComponent = _wrapComponent('ExponentRootComponent')(function (_React$Component) {
    _inherits(ExponentRootComponent, _React$Component);

    function ExponentRootComponent() {
      _classCallCheck(this, ExponentRootComponent);

      return _possibleConstructorReturn(this, (ExponentRootComponent.__proto__ || Object.getPrototypeOf(ExponentRootComponent)).apply(this, arguments));
    }

    _createClass(ExponentRootComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        _reactNative.StyleSheet.setStyleAttributePreprocessor('fontFamily', _Font.processFontFamily);

        if (this.props.exp.notification) {
          _Notifications2.default._setInitialNotification(this.props.exp.notification);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react3.default.createElement(AppRootComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }));
      }
    }]);

    return ExponentRootComponent;
  }(_react3.default.Component));

  return ExponentRootComponent;
}

function registerRootComponent(component) {
  _reactNative.AppRegistry.registerComponent('main', function () {
    return wrapWithExponentRoot(component);
  });
}
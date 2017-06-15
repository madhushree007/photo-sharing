

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/UnimplementedViews/UnimplementedView.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  UnimplementedView: {
    displayName: 'UnimplementedView'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/UnimplementedViews/UnimplementedView.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var React = require('React');
var StyleSheet = require('StyleSheet');

var UnimplementedView = _wrapComponent('UnimplementedView')(function (_React$Component) {
  _inherits(UnimplementedView, _React$Component);

  function UnimplementedView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UnimplementedView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UnimplementedView.__proto__ || Object.getPrototypeOf(UnimplementedView)).call.apply(_ref, [this].concat(args))), _this), _this.setNativeProps = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UnimplementedView, [{
    key: 'render',
    value: function render() {
      var View = require('View');
      return React.createElement(
        View,
        { style: [styles.unimplementedView, this.props.style], __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        this.props.children
      );
    }
  }]);

  return UnimplementedView;
}(React.Component));

var styles = StyleSheet.create({
  unimplementedView: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'flex-start'
  }
});

module.exports = UnimplementedView;
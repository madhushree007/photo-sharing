Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/theme/examples/Shapes.js';

var _connectStyle = require('../src/connectStyle');

var _connectStyle2 = _interopRequireDefault(_connectStyle);

var _StyleProvider = require('../src/StyleProvider');

var _StyleProvider2 = _interopRequireDefault(_StyleProvider);

var _resolveIncludes = require('../src/resolveIncludes');

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _components = {
  Shapes: {
    displayName: 'Shapes'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/@shoutem/theme/examples/Shapes.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var theme = function theme() {
  var variables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    circle: {
      width: variables.circleRadius,
      height: variables.circleRadius,
      borderRadius: variables.circleRadius,
      backgroundColor: '#fff'
    },
    'developer.project.screen': {
      'developer.project.view': {

        'developer.project.view': {
          '.nestedCircle': _defineProperty({}, _resolveIncludes.INCLUDE, ['circle'])
        },

        '.square': {
          marginTop: 10,
          width: variables.squareSize,
          height: variables.squareSize,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center'
        },

        '.circle': _defineProperty({}, _resolveIncludes.INCLUDE, ['circle'])
      },
      container: {
        marginTop: 50,
        alignItems: 'center',
        flex: 1
      },
      title: {
        color: variables.color,
        fontSize: variables.fontSize
      },
      input: {
        width: 100,
        height: 50,
        backgroundColor: 'red'
      }
    }
  };
};

var Shapes = _wrapComponent('Shapes')((_temp = _class = function (_React$Component) {
  _inherits(Shapes, _React$Component);

  function Shapes(props, context) {
    _classCallCheck(this, Shapes);

    var _this = _possibleConstructorReturn(this, (Shapes.__proto__ || Object.getPrototypeOf(Shapes)).call(this, props, context));

    _this.updateThemeVariable = _this.updateThemeVariable.bind(_this);

    var themeVariables = _extends({
      color: 'navy',
      fontSize: 18,
      squareSize: 250,
      circleRadius: 100
    }, props.themeVariables);

    _this.state = {
      themeVariables: themeVariables
    };
    return _this;
  }

  _createClass(Shapes, [{
    key: 'updateThemeVariable',
    value: function updateThemeVariable(key, val) {
      var themeVariables = _extends({}, this.state.themeVariables, _defineProperty({}, key, val));
      this.setState({ themeVariables: themeVariables });
    }
  }, {
    key: 'resolveTheme',
    value: function resolveTheme(themeVariables) {
      return theme(themeVariables);
    }
  }, {
    key: 'render',
    value: function render() {
      var themeVariables = this.state.themeVariables;

      return _react3.default.createElement(
        _StyleProvider2.default,
        { style: this.resolveTheme(themeVariables), __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        },
        _react3.default.createElement(StyledScreen, { style: this.props.screenStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        })
      );
    }
  }]);

  return Shapes;
}(_react3.default.Component), _class.propTypes = {
  themeVariables: _react3.default.PropTypes.object,
  screenStyle: _react3.default.PropTypes.object
}, _class.defaultProps = {
  themeVariables: {},
  screenStyle: {}
}, _temp));

exports.default = Shapes;


function Screen(_ref) {
  var style = _ref.style;

  return _react3.default.createElement(
    StyledView,
    { style: style.container, virtual: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      }
    },
    _react3.default.createElement(
      _reactNative.Text,
      { style: style.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      },
      'Theme Screen'
    ),
    _react3.default.createElement(
      StyledView,
      { styleName: 'square', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      },
      _react3.default.createElement(StyledView, { styleName: 'circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }),
      _react3.default.createElement(StyledView, { styleName: 'nestedCircle', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })
    ),
    _react3.default.createElement(
      StyledView,
      { styleName: 'square', virtual: true, style: { backgroundColor: 'navy' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      },
      _react3.default.createElement(StyledView, { styleName: 'circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      })
    )
  );
}

Screen.propTypes = {
  style: _react3.default.PropTypes.object
};

var StyledScreen = (0, _connectStyle2.default)('developer.project.screen')(Screen);
var StyledView = (0, _connectStyle2.default)('developer.project.view')(_reactNative.View);
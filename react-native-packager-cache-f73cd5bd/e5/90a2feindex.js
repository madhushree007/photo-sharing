Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/headerContent/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _drawer = require('../../actions/drawer');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var headerLogo = require('../../../images/Header-Logo.png');

var HeaderContent = (_temp = _class = function (_Component) {
  babelHelpers.inherits(HeaderContent, _Component);

  function HeaderContent() {
    babelHelpers.classCallCheck(this, HeaderContent);
    return babelHelpers.possibleConstructorReturn(this, (HeaderContent.__proto__ || Object.getPrototypeOf(HeaderContent)).apply(this, arguments));
  }

  babelHelpers.createClass(HeaderContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        _react2.default.createElement(
          _nativeBase.Left,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          _react2.default.createElement(
            _nativeBase.Button,
            { transparent: true, onPress: function onPress() {
                return _reactNativeRouterFlux.Actions.popTo('home');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-back', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            })
          )
        ),
        _react2.default.createElement(
          _nativeBase.Body,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          _react2.default.createElement(_reactNative.Image, { source: headerLogo, style: _styles2.default.imageHeader, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          })
        ),
        _react2.default.createElement(
          _nativeBase.Right,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          _react2.default.createElement(
            _nativeBase.Button,
            { transparent: true, onPress: this.props.openDrawer, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            })
          )
        )
      );
    }
  }]);
  return HeaderContent;
}(_react.Component), _class.propTypes = {
  openDrawer: _react2.default.PropTypes.func,
  navigation: _react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string
  })
}, _temp);


function bindAction(dispatch) {
  return {
    openDrawer: function openDrawer() {
      return dispatch((0, _drawer.openDrawer)());
    }
  };
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    navigation: state.cardNavigation
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(HeaderContent);
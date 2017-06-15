Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/ProfileNew/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _reactNativeSwiper = require('react-native-swiper');

var _reactNativeSwiper2 = babelHelpers.interopRequireDefault(_reactNativeSwiper);

var _drawer = require('../../actions/drawer');

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var deviceWidth = _reactNative.Dimensions.get('window').width;

var ProfileNew = (_temp = _class = function (_Component) {
  babelHelpers.inherits(ProfileNew, _Component);

  function ProfileNew() {
    babelHelpers.classCallCheck(this, ProfileNew);
    return babelHelpers.possibleConstructorReturn(this, (ProfileNew.__proto__ || Object.getPrototypeOf(ProfileNew)).apply(this, arguments));
  }

  babelHelpers.createClass(ProfileNew, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react2.default.createElement(
          _nativeBase.Header,
          { style: { backgroundColor: '#373737' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              {
                transparent: true,
                style: _styles2.default.btnHeader,
                onPress: function onPress() {
                  return _reactNativeRouterFlux.Actions.login({ type: _reactNativeRouterFlux.ActionConst.RESET });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                'CANCLE'
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            _react2.default.createElement(
              _reactNativeEasyGrid.Grid,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              _react2.default.createElement(
                _reactNativeEasyGrid.Col,
                { style: { flexDirection: 'row' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  },
                  'Camera Roll'
                ),
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-down', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { transparent: true, style: _styles2.default.btnHeader, onPress: this.props.openDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                'DONE'
              )
            )
          )
        )
      );
    }
  }]);
  return ProfileNew;
}(_react.Component), _class.propTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, bindAction)(ProfileNew);
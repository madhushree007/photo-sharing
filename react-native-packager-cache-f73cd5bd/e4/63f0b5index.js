Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/walkthrough/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeSwiper = require('react-native-swiper');

var _reactNativeSwiper2 = babelHelpers.interopRequireDefault(_reactNativeSwiper);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _commonColor = require('../../../native-base-theme/variables/commonColor');

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var deviceWidth = _reactNative.Dimensions.get('window').width;
var Walkthrough = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Walkthrough, _Component);

  function Walkthrough() {
    babelHelpers.classCallCheck(this, Walkthrough);
    return babelHelpers.possibleConstructorReturn(this, (Walkthrough.__proto__ || Object.getPrototypeOf(Walkthrough)).apply(this, arguments));
  }

  babelHelpers.createClass(Walkthrough, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, {
          backgroundColor: _commonColor2.default.statusBarColor,
          barStyle: 'light-content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }),
        _react2.default.createElement(
          _nativeBase.Content,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react2.default.createElement(
            _reactNativeSwiper2.default,
            {
              loop: false,
              width: deviceWidth + 3,
              dot: _react2.default.createElement(_nativeBase.View, { style: _styles2.default.swiperDot, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              }),
              activeDot: _react2.default.createElement(_nativeBase.View, { style: _styles2.default.swiperActiveDot, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            _react2.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.slides, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _reactNative.Platform.OS === 'android' ? _styles2.default.apaginationText : _styles2.default.iospaginationText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                '1 of 3'
              ),
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-paper-outline', style: _styles2.default.imageIcons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { numberOfLines: 2, style: _reactNative.Platform.OS === 'android' ? _styles2.default.aText : _styles2.default.iosText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                'Explore the latest news from your mobile device'
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                {
                  transparent: true, rounded: true,
                  onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.home();
                  },
                  style: _styles2.default.Button,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { style: { color: '#FFF', fontWeight: '600' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  'Skip To App'
                )
              )
            ),
            _react2.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.slides, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _reactNative.Platform.OS === 'android' ? _styles2.default.apaginationText : _styles2.default.iospaginationText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                '2 of 3'
              ),
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-information-circle-outline', style: _styles2.default.imageIcons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { numberOfLines: 2, style: _reactNative.Platform.OS === 'android' ? _styles2.default.aText : _styles2.default.iosText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                'Get News Feed of variuos domains at one place'
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                {
                  transparent: true, rounded: true,
                  onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.home();
                  },
                  style: _styles2.default.Button,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { style: { color: '#FFF', fontWeight: '600' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  'Skip To App'
                )
              )
            ),
            _react2.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.slides, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              _react2.default.createElement(
                _nativeBase.Text,
                { style: _reactNative.Platform.OS === 'android' ? _styles2.default.apaginationText : _styles2.default.iospaginationText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                '3 of 3'
              ),
              _react2.default.createElement(_nativeBase.Icon, { name: 'ios-volume-up-outline', style: _styles2.default.imageIcons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                { numberOfLines: 2, style: _reactNative.Platform.OS === 'android' ? _styles2.default.aText : _styles2.default.iosText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                'Get going with the React Native Flat App Theme'
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                {
                  transparent: true, rounded: true,
                  onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.home();
                  },
                  style: _styles2.default.Button,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { style: { color: '#FFF', fontWeight: '600' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81
                    }
                  },
                  'Continue To App'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Walkthrough;
}(_react.Component), _class.propTypes = {
  navigation: _react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string
  })
}, _temp);


var mapStateToProps = function mapStateToProps(state) {
  return {
    navigation: state.cardNavigation
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Walkthrough);
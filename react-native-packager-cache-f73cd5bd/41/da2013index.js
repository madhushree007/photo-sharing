Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/walkthrough/index.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeSwiper = require('react-native-swiper');

var _reactNativeSwiper2 = _interopRequireDefault(_reactNativeSwiper);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _commonColor = require('../../../native-base-theme/variables/commonColor');

var _commonColor2 = _interopRequireDefault(_commonColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Walkthrough: {
    displayName: 'Walkthrough'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/walkthrough/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var deviceWidth = _reactNative.Dimensions.get('window').width;

var Walkthrough = _wrapComponent('Walkthrough')((_temp = _class = function (_Component) {
  _inherits(Walkthrough, _Component);

  function Walkthrough() {
    _classCallCheck(this, Walkthrough);

    return _possibleConstructorReturn(this, (Walkthrough.__proto__ || Object.getPrototypeOf(Walkthrough)).apply(this, arguments));
  }

  _createClass(Walkthrough, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        _react3.default.createElement(_reactNative.StatusBar, {
          backgroundColor: _commonColor2.default.statusBarColor,
          barStyle: 'light-content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }),
        _react3.default.createElement(
          _nativeBase.Content,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react3.default.createElement(
            _reactNativeSwiper2.default,
            {
              loop: false,
              width: deviceWidth + 3,
              dot: _react3.default.createElement(_nativeBase.View, { style: _styles2.default.swiperDot, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              }),
              activeDot: _react3.default.createElement(_nativeBase.View, { style: _styles2.default.swiperActiveDot, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            _react3.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.slides, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              _react3.default.createElement(
                _nativeBase.Text,
                { style: _reactNative.Platform.OS === 'android' ? _styles2.default.apaginationText : _styles2.default.iospaginationText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                '1 of 3'
              ),
              _react3.default.createElement(_nativeBase.Icon, { name: 'ios-paper-outline', style: _styles2.default.imageIcons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              }),
              _react3.default.createElement(
                _nativeBase.Text,
                { numberOfLines: 2, style: _reactNative.Platform.OS === 'android' ? _styles2.default.aText : _styles2.default.iosText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                'Explore the latest news from your mobile device'
              ),
              _react3.default.createElement(
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
                _react3.default.createElement(
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
            _react3.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.slides, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              _react3.default.createElement(
                _nativeBase.Text,
                { style: _reactNative.Platform.OS === 'android' ? _styles2.default.apaginationText : _styles2.default.iospaginationText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                '2 of 3'
              ),
              _react3.default.createElement(_nativeBase.Icon, { name: 'ios-information-circle-outline', style: _styles2.default.imageIcons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              }),
              _react3.default.createElement(
                _nativeBase.Text,
                { numberOfLines: 2, style: _reactNative.Platform.OS === 'android' ? _styles2.default.aText : _styles2.default.iosText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                'Get News Feed of variuos domains at one place'
              ),
              _react3.default.createElement(
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
                _react3.default.createElement(
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
            _react3.default.createElement(
              _nativeBase.View,
              { style: _styles2.default.slides, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              _react3.default.createElement(
                _nativeBase.Text,
                { style: _reactNative.Platform.OS === 'android' ? _styles2.default.apaginationText : _styles2.default.iospaginationText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                '3 of 3'
              ),
              _react3.default.createElement(_nativeBase.Icon, { name: 'ios-volume-up-outline', style: _styles2.default.imageIcons, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              }),
              _react3.default.createElement(
                _nativeBase.Text,
                { numberOfLines: 2, style: _reactNative.Platform.OS === 'android' ? _styles2.default.aText : _styles2.default.iosText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                'Get going with the React Native Flat App Theme'
              ),
              _react3.default.createElement(
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
                _react3.default.createElement(
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
}(_react2.Component), _class.propTypes = {
  navigation: _react3.default.PropTypes.shape({
    key: _react3.default.PropTypes.string
  })
}, _temp));

var mapStateToProps = function mapStateToProps(state) {
  return {
    navigation: state.cardNavigation
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Walkthrough);
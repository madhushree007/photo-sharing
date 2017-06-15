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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/ProfileNew/index.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _reactNativeEasyGrid = require('react-native-easy-grid');

var _reactNativeSwiper = require('react-native-swiper');

var _reactNativeSwiper2 = _interopRequireDefault(_reactNativeSwiper);

var _drawer = require('../../actions/drawer');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ProfileNew: {
    displayName: 'ProfileNew'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/ProfileNew/index.js',
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

var ProfileNew = _wrapComponent('ProfileNew')((_temp = _class = function (_Component) {
  _inherits(ProfileNew, _Component);

  function ProfileNew() {
    _classCallCheck(this, ProfileNew);

    return _possibleConstructorReturn(this, (ProfileNew.__proto__ || Object.getPrototypeOf(ProfileNew)).apply(this, arguments));
  }

  _createClass(ProfileNew, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _nativeBase.Container,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react3.default.createElement(
          _nativeBase.Header,
          { style: { backgroundColor: '#373737' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react3.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            _react3.default.createElement(
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
              _react3.default.createElement(
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
          _react3.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            _react3.default.createElement(
              _reactNativeEasyGrid.Grid,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              _react3.default.createElement(
                _reactNativeEasyGrid.Col,
                { style: { flexDirection: 'row' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                _react3.default.createElement(
                  _nativeBase.Text,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  },
                  'Camera Roll'
                ),
                _react3.default.createElement(_nativeBase.Icon, { active: true, name: 'arrow-down', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                })
              )
            )
          ),
          _react3.default.createElement(
            _nativeBase.Right,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            _react3.default.createElement(
              _nativeBase.Button,
              { transparent: true, style: _styles2.default.btnHeader, onPress: this.props.openDrawer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              _react3.default.createElement(
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
}(_react2.Component), _class.propTypes = {
  navigation: _react3.default.PropTypes.shape({
    key: _react3.default.PropTypes.string
  })
}, _temp));

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
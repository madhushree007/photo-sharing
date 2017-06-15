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
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/CustomTabBar.js';

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CustomTabBar: {
    displayName: 'CustomTabBar'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/CustomTabBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var deviceWidth = require('Dimensions').get('window').width;
var TAB_UNDERLINE_REF = 'TAB_UNDERLINE';

var CustomTabBar = _wrapComponent('CustomTabBar')((_temp = _class = function (_Component) {
  _inherits(CustomTabBar, _Component);

  function CustomTabBar() {
    _classCallCheck(this, CustomTabBar);

    return _possibleConstructorReturn(this, (CustomTabBar.__proto__ || Object.getPrototypeOf(CustomTabBar)).apply(this, arguments));
  }

  _createClass(CustomTabBar, [{
    key: 'renderTabOption',
    value: function renderTabOption(name, page) {
      var _this2 = this;

      var isTabActive = this.props.activeTab === page;

      return _react3.default.createElement(
        _reactNative.TouchableOpacity,
        { key: name, onPress: function onPress() {
            return _this2.props.goToPage(page);
          }, style: [styles.tab, { borderWidth: isTabActive ? 2 : 0, borderColor: isTabActive ? '#FFF' : 'transparent', borderRadius: isTabActive ? 30 : undefined }], __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        _react3.default.createElement(
          _nativeBase.Text,
          { style: { color: '#fff', fontWeight: isTabActive ? '900' : '500' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          name
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var numberOfTabs = this.props.tabs.length;
      var tabUnderlineStyle = {
        position: 'absolute',
        width: deviceWidth / numberOfTabs,
        height: 4,
        backgroundColor: 'navy',
        bottom: 0
      };
      return _react3.default.createElement(
        _nativeBase.View,
        { style: styles.tabs, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        this.props.tabs.map(function (tab, i) {
          return _this3.renderTabOption(tab, i);
        })
      );
    }
  }]);

  return CustomTabBar;
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

var primary = require('../../themes/variable').brandPrimary;
var styles = {
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 8,
    marginHorizontal: 5
  },

  tabs: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  }
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CustomTabBar);
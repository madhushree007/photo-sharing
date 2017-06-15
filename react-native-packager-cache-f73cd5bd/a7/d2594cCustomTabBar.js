Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/components/channels/CustomTabBar.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var deviceWidth = require('Dimensions').get('window').width;
var TAB_UNDERLINE_REF = 'TAB_UNDERLINE';
var CustomTabBar = (_temp = _class = function (_Component) {
  babelHelpers.inherits(CustomTabBar, _Component);

  function CustomTabBar() {
    babelHelpers.classCallCheck(this, CustomTabBar);
    return babelHelpers.possibleConstructorReturn(this, (CustomTabBar.__proto__ || Object.getPrototypeOf(CustomTabBar)).apply(this, arguments));
  }

  babelHelpers.createClass(CustomTabBar, [{
    key: 'renderTabOption',
    value: function renderTabOption(name, page) {
      var _this2 = this;

      var isTabActive = this.props.activeTab === page;

      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { key: name, onPress: function onPress() {
            return _this2.props.goToPage(page);
          }, style: [styles.tab, { borderWidth: isTabActive ? 2 : 0, borderColor: isTabActive ? '#FFF' : 'transparent', borderRadius: isTabActive ? 30 : undefined }], __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        _react2.default.createElement(
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
      return _react2.default.createElement(
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
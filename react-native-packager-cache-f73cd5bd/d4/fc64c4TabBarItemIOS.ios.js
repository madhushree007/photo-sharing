
'use strict';

var _class,
    _temp2,
    _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native/Libraries/Components/TabBarIOS/TabBarItemIOS.ios.js';

var ColorPropType = require('ColorPropType');
var Image = require('Image');
var React = require('React');
var StaticContainer = require('StaticContainer.react');
var StyleSheet = require('StyleSheet');
var View = require('View');

var requireNativeComponent = require('requireNativeComponent');

var TabBarItemIOS = (_temp2 = _class = function (_React$Component) {
  babelHelpers.inherits(TabBarItemIOS, _React$Component);

  function TabBarItemIOS() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, TabBarItemIOS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabBarItemIOS.__proto__ || Object.getPrototypeOf(TabBarItemIOS)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasBeenSelected: false
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(TabBarItemIOS, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.selected) {
        this.setState({ hasBeenSelected: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.hasBeenSelected || nextProps.selected) {
        this.setState({ hasBeenSelected: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children,
          props = babelHelpers.objectWithoutProperties(_props, ['style', 'children']);

      if (this.state.hasBeenSelected) {
        var tabContents = React.createElement(
          StaticContainer,
          { shouldUpdate: this.props.selected, __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            }
          },
          children
        );
      } else {
        var tabContents = React.createElement(View, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        });
      }

      return React.createElement(
        RCTTabBarItem,
        babelHelpers.extends({}, props, {
          style: [styles.tab, style], __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }),
        tabContents
      );
    }
  }]);
  return TabBarItemIOS;
}(React.Component), _class.propTypes = babelHelpers.extends({}, View.propTypes, {
  badge: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

  badgeColor: ColorPropType,

  systemIcon: React.PropTypes.oneOf(['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated']),

  icon: Image.propTypes.source,

  selectedIcon: Image.propTypes.source,

  onPress: React.PropTypes.func,

  renderAsOriginal: React.PropTypes.bool,

  selected: React.PropTypes.bool,

  style: View.propTypes.style,

  title: React.PropTypes.string,

  isTVSelectable: React.PropTypes.bool
}), _temp2);


var styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});

var RCTTabBarItem = requireNativeComponent('RCTTabBarItem', TabBarItemIOS);

module.exports = TabBarItemIOS;

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavigationRootContainer: {
    displayName: 'NavigationRootContainer'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-experimental-navigation/NavigationRootContainer.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var AsyncStorage = require('react-native').AsyncStorage;
var Linking = require('react-native').Linking;
var NavigationPropTypes = require('./NavigationPropTypes');
var NavigationStateUtils = require('./NavigationStateUtils');
var Platform = require('react-native').Platform;
var React = require('react');

function getBackAction() {
  return { type: 'BackAction' };
}

var PropTypes = React.PropTypes;

var NavigationRootContainer = _wrapComponent('NavigationRootContainer')((_temp = _class = function (_React$Component) {
  _inherits(NavigationRootContainer, _React$Component);

  function NavigationRootContainer(props) {
    _classCallCheck(this, NavigationRootContainer);

    var _this = _possibleConstructorReturn(this, (NavigationRootContainer.__proto__ || Object.getPrototypeOf(NavigationRootContainer)).call(this, props));

    var navState = null;
    if (!_this.props.persistenceKey) {
      navState = NavigationStateUtils.getParent(_this.props.reducer(null, props.initialAction));
    }
    _this.state = { navState: navState };
    return _this;
  }

  _createClass(NavigationRootContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.handleNavigation = this.handleNavigation.bind(this);
      this._handleOpenURLEvent = this._handleOpenURLEvent.bind(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.linkingActionMap) {
        Linking.getInitialURL().then(this._handleOpenURL.bind(this));
        Platform.OS === 'ios' && Linking.addEventListener('url', this._handleOpenURLEvent);
      }
      if (this.props.persistenceKey) {
        AsyncStorage.getItem(this.props.persistenceKey, function (err, storedString) {
          if (err || !storedString) {
            _this2.setState({
              navState: _this2.props.reducer(null, _this2.props.initialAction)
            });
            return;
          }
          _this2.setState({
            navState: JSON.parse(storedString)
          });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (Platform.OS === 'ios') {
        Linking.removeEventListener('url', this._handleOpenURLEvent);
      }
    }
  }, {
    key: '_handleOpenURLEvent',
    value: function _handleOpenURLEvent(event) {
      this._handleOpenURL(event.url);
    }
  }, {
    key: '_handleOpenURL',
    value: function _handleOpenURL(url) {
      if (!this.props.linkingActionMap) {
        return;
      }
      var action = this.props.linkingActionMap(url);
      if (action) {
        this.handleNavigation(action);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        onNavigate: this.handleNavigation
      };
    }
  }, {
    key: 'handleNavigation',
    value: function handleNavigation(action) {
      var navState = this.props.reducer(this.state.navState, action);
      if (navState === this.state.navState) {
        return false;
      }
      this.setState({
        navState: navState
      });

      if (this.props.persistenceKey) {
        AsyncStorage.setItem(this.props.persistenceKey, JSON.stringify(navState));
      }

      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var navigation = this.props.renderNavigation(this.state.navState, this.handleNavigation);
      return navigation;
    }
  }]);

  return NavigationRootContainer;
}(React.Component), _class.propTypes = {
  initialAction: NavigationPropTypes.action.isRequired,
  linkingActionMap: PropTypes.func,
  persistenceKey: PropTypes.string,
  reducer: PropTypes.func.isRequired,
  renderNavigation: PropTypes.func.isRequired
}, _class.defaultProps = {
  initialAction: { type: 'RootContainerInitialAction' }
}, _class.childContextTypes = {
  onNavigate: PropTypes.func
}, _class.getBackAction = getBackAction, _temp));

module.exports = NavigationRootContainer;
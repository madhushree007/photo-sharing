Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/node_modules/react-native-router-flux/src/Switch.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Switch;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Switch(props) {
  var navState = props.navigationState;

  var selector = props.selector;
  var statem = props.statem;
  if (!selector && !statem) console.error('Selector should be defined.');
  var index = -1;
  var selectedKey = void 0;
  if (!selector) {
    navState.children.forEach(function (el, i) {
      if (!(el.default || el.state)) {
        console.error('Either default or state should be defined for element=' + el.key);
      }
      if (el.default) {
        index = i;
      } else if (el.state.active) {
        index = i;
      }
    });
  } else {
    selectedKey = selector(props);
    if (!selectedKey) console.error('Selector should return key.');
    navState.children.forEach(function (el, i) {
      if (el.sceneKey === selectedKey) {
        index = i;
      }
    });
  }
  if (index === -1) console.error('A scene for key \u201C' + selectedKey + '\u201D does not exist.');
  selectedKey = navState.children[index].sceneKey;

  var navigationState = void 0;
  if (index !== navState.index) {
    if (props.unmountScenes) {
      navigationState = _extends({}, navState, {
        children: [navState.children[navState.index]],
        index: 0
      });
      setTimeout(function () {
        _Actions2.default[selectedKey]({ unmountScenes: true });
      }, 1);
    } else {
      navigationState = _extends({}, navState, { index: index });
      setTimeout(function () {
        _Actions2.default[selectedKey]();
      }, 1);
    }
  } else {
    navigationState = navState;
  }

  return _react2.default.createElement(_TabBar2.default, {
    onNavigate: props.onNavigate,
    navigationState: navigationState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  });
}

Switch.propTypes = {
  navigationState: _react.PropTypes.object,
  onNavigate: _react.PropTypes.func,
  selector: _react.PropTypes.func,
  statem: _react.PropTypes.any,
  unmountScenes: _react.PropTypes.bool
};
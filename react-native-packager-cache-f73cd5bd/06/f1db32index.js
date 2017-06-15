Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/packages/react-native-simple-modal/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
   Modal: {
      displayName: 'Modal'
   }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
   filename: '/Users/madhushree/Sites/projects/React/FlatApp/js/packages/react-native-simple-modal/index.js',
   components: _components,
   locals: [module],
   imports: [_react3.default]
});

function _wrapComponent(id) {
   return function (Component) {
      return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
   };
}

var Modal = _wrapComponent('Modal')(function (_Component) {
   _inherits(Modal, _Component);

   function Modal() {
      _classCallCheck(this, Modal);

      var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

      _this.state = {
         opacity: new _reactNative.Animated.Value(0),
         scale: new _reactNative.Animated.Value(0.8),
         offset: new _reactNative.Animated.Value(0)
      };
      return _this;
   }

   _createClass(Modal, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
         if (props.open && props.children !== this.state.children) {
            this.setState({ children: props.children });
         }

         if (props.open !== this.props.open) {
            if (props.open) this.open();else this.close();
         }

         if (props.offset !== this.props.offset) {
            this.animateOffset(props.offset);
         }
      }
   }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
         var _this2 = this;

         if (_reactNative.Platform.OS === 'android') {
            _reactNative.BackAndroid.addEventListener('hardwareBackPress', function () {
               if (_this2.state.open) {
                  _this2.close();
                  return true;
               }
               return false;
            });
         }
      }
   }, {
      key: 'setPhase',
      value: function setPhase(toValue) {
         var _this3 = this;

         if (this.state.open != toValue) {
            var _props = this.props,
                animationDuration = _props.animationDuration,
                animationTension = _props.animationTension;

            _reactNative.Animated.timing(this.state.opacity, {
               toValue: toValue,
               duration: animationDuration
            }).start();

            _reactNative.Animated.spring(this.state.scale, {
               toValue: toValue ? 1 : 0.8,
               tension: animationTension
            }).start();

            setTimeout(function () {
               if (toValue) _this3.props.modalDidOpen();else {
                  _this3.setState({ open: false, children: undefined });
                  _this3.props.modalDidClose();
               }
            }, animationDuration);
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _state = this.state,
             opacity = _state.opacity,
             open = _state.open,
             scale = _state.scale,
             offset = _state.offset,
             children = _state.children;
         var overlayOpacity = this.props.overlayOpacity;

         var containerStyles = [styles.absolute, styles.container];

         if (!this.state.open) {
            containerStyles.push(styles.hidden);
         }

         return _react3.default.createElement(
            _reactNative.View,
            {
               pointerEvents: open ? 'auto' : 'none',
               style: containerStyles, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
               }
            },
            _react3.default.createElement(
               _reactNative.TouchableOpacity,
               {
                  style: styles.absolute,
                  onPress: this.close.bind(this),
                  activeOpacity: 0.75, __source: {
                     fileName: _jsxFileName,
                     lineNumber: 93
                  }
               },
               _react3.default.createElement(_reactNative.Animated.View, { style: { flex: 1, opacity: opacity, backgroundColor: 'rgba(0, 0, 0, ' + overlayOpacity + ')' }, __source: {
                     fileName: _jsxFileName,
                     lineNumber: 97
                  }
               })
            ),
            _react3.default.createElement(
               _reactNative.Animated.View,
               {
                  style: [styles.defaultModalStyle, this.props.style, { opacity: opacity, transform: [{ scale: scale }, { translateY: offset }] }], __source: {
                     fileName: _jsxFileName,
                     lineNumber: 99
                  }
               },
               children
            )
         );
      }
   }, {
      key: 'open',
      value: function open() {
         this.setState({ open: true });
         this.setPhase(1);
      }
   }, {
      key: 'close',
      value: function close() {
         this.setPhase(0);
      }
   }, {
      key: 'animateOffset',
      value: function animateOffset(offset) {
         _reactNative.Animated.spring(this.state.offset, { toValue: offset }).start();
      }
   }]);

   return Modal;
}(_react2.Component));

Modal.propTypes = {
   open: _react2.PropTypes.bool,
   offset: _react2.PropTypes.number,
   overlayOpacity: _react2.PropTypes.number,
   animationDuration: _react2.PropTypes.number,
   animationTension: _react2.PropTypes.number,
   modalDidOpen: _react2.PropTypes.func,
   modalDidClose: _react2.PropTypes.func
};

Modal.defaultProps = {
   open: false,
   offset: 0,
   overlayOpacity: 0.75,
   animationDuration: 200,
   animationTension: 40,
   modalDidOpen: function modalDidOpen() {
      return undefined;
   },
   modalDidClose: function modalDidClose() {
      return undefined;
   }
};

var styles = _reactNative.StyleSheet.create({
   absolute: {
      position: 'absolute',
      top: -545,
      left: -8,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0)'
   },
   container: {
      justifyContent: 'center'
   },
   defaultModalStyle: {
      borderRadius: 2,
      margin: 8,
      padding: 10,
      backgroundColor: '#F5F5F5'
   },
   hidden: {
      left: 0,
      height: 0,
      width: 0
   }
});

exports.default = Modal;
Object.defineProperty(exports, "__esModule", {
   value: true
});
var _jsxFileName = '/Users/madhushree/Sites/projects/React/FlatApp/js/packages/react-native-simple-modal/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Modal = function (_Component) {
   babelHelpers.inherits(Modal, _Component);

   function Modal() {
      babelHelpers.classCallCheck(this, Modal);

      var _this = babelHelpers.possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

      _this.state = {
         opacity: new _reactNative.Animated.Value(0),
         scale: new _reactNative.Animated.Value(0.8),
         offset: new _reactNative.Animated.Value(0)
      };
      return _this;
   }

   babelHelpers.createClass(Modal, [{
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

         return _react2.default.createElement(
            _reactNative.View,
            {
               pointerEvents: open ? 'auto' : 'none',
               style: containerStyles, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
               }
            },
            _react2.default.createElement(
               _reactNative.TouchableOpacity,
               {
                  style: styles.absolute,
                  onPress: this.close.bind(this),
                  activeOpacity: 0.75, __source: {
                     fileName: _jsxFileName,
                     lineNumber: 93
                  }
               },
               _react2.default.createElement(_reactNative.Animated.View, { style: { flex: 1, opacity: opacity, backgroundColor: 'rgba(0, 0, 0, ' + overlayOpacity + ')' }, __source: {
                     fileName: _jsxFileName,
                     lineNumber: 97
                  }
               })
            ),
            _react2.default.createElement(
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
}(_react.Component);

Modal.propTypes = {
   open: _react.PropTypes.bool,
   offset: _react.PropTypes.number,
   overlayOpacity: _react.PropTypes.number,
   animationDuration: _react.PropTypes.number,
   animationTension: _react.PropTypes.number,
   modalDidOpen: _react.PropTypes.func,
   modalDidClose: _react.PropTypes.func
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
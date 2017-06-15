Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.touchablePropsKeys = exports.touchableProps = exports.responderPropsKeys = exports.responderProps = exports.pathProps = exports.transformProps = exports.strokeProps = exports.clipProps = exports.fillProps = exports.numberProp = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _reactNative = require('react-native');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var numberProp = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);

var touchableProps = {
    disabled: _react.PropTypes.bool,
    onPress: _react.PropTypes.func,
    onPressIn: _react.PropTypes.func,
    onPressOut: _react.PropTypes.func,
    onLongPress: _react.PropTypes.func,
    delayPressIn: _react.PropTypes.number,
    delayPressOut: _react.PropTypes.number,
    delayLongPress: _react.PropTypes.number
};

var touchablePropsKeys = Object.keys(touchableProps);

var responderPropsKeys = [].concat(_toConsumableArray(Object.keys(_reactNative.PanResponder.create({}).panHandlers)), ['pointerEvents']);

var responderProps = responderPropsKeys.reduce(function (props, name) {
    props[name] = _react.PropTypes.func;
    return props;
}, {});

var fillProps = {
    fill: _react.PropTypes.string,
    fillOpacity: numberProp,
    fillRule: _react.PropTypes.oneOf(['evenodd', 'nonzero'])
};

var clipProps = {
    clipRule: _react.PropTypes.oneOf(['evenodd', 'nonzero']),
    clipPath: _react.PropTypes.string
};

var definationProps = {
    name: _react.PropTypes.string
};

var strokeProps = {
    stroke: _react.PropTypes.string,
    strokeWidth: numberProp,
    strokeOpacity: numberProp,
    strokeDasharray: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.number), _react.PropTypes.string]),
    strokeDashoffset: numberProp,
    strokeLinecap: _react.PropTypes.oneOf(['butt', 'square', 'round']),
    strokeLinejoin: _react.PropTypes.oneOf(['miter', 'bevel', 'round']),
    strokeMiterlimit: numberProp
};

var transformProps = {
    scale: numberProp,
    scaleX: numberProp,
    scaleY: numberProp,
    rotate: numberProp,
    rotation: numberProp,
    translate: numberProp,
    translateX: numberProp,
    translateY: numberProp,
    x: numberProp,
    y: numberProp,
    origin: numberProp,
    originX: numberProp,
    originY: numberProp,
    skew: numberProp,
    skewX: numberProp,
    skewY: numberProp,
    transform: _react.PropTypes.object
};

var pathProps = _extends({}, fillProps, strokeProps, clipProps, transformProps, responderProps, touchableProps, definationProps);

exports.numberProp = numberProp;
exports.fillProps = fillProps;
exports.clipProps = clipProps;
exports.strokeProps = strokeProps;
exports.transformProps = transformProps;
exports.pathProps = pathProps;
exports.responderProps = responderProps;
exports.responderPropsKeys = responderPropsKeys;
exports.touchableProps = touchableProps;
exports.touchablePropsKeys = touchablePropsKeys;
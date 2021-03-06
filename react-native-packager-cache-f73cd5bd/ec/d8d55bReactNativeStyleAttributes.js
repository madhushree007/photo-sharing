

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ImageStylePropTypes = require('ImageStylePropTypes');
var TextStylePropTypes = require('TextStylePropTypes');
var ViewStylePropTypes = require('ViewStylePropTypes');

var keyMirror = require('fbjs/lib/keyMirror');
var matricesDiffer = require('matricesDiffer');
var processColor = require('processColor');
var processTransform = require('processTransform');
var sizesDiffer = require('sizesDiffer');

var ReactNativeStyleAttributes = _extends({}, keyMirror(ViewStylePropTypes), keyMirror(TextStylePropTypes), keyMirror(ImageStylePropTypes));

ReactNativeStyleAttributes.transform = { process: processTransform };
ReactNativeStyleAttributes.transformMatrix = { diff: matricesDiffer };
ReactNativeStyleAttributes.shadowOffset = { diff: sizesDiffer };

ReactNativeStyleAttributes.decomposedMatrix = 'decomposedMatrix';

var colorAttributes = { process: processColor };
ReactNativeStyleAttributes.backgroundColor = colorAttributes;
ReactNativeStyleAttributes.borderBottomColor = colorAttributes;
ReactNativeStyleAttributes.borderColor = colorAttributes;
ReactNativeStyleAttributes.borderLeftColor = colorAttributes;
ReactNativeStyleAttributes.borderRightColor = colorAttributes;
ReactNativeStyleAttributes.borderTopColor = colorAttributes;
ReactNativeStyleAttributes.color = colorAttributes;
ReactNativeStyleAttributes.shadowColor = colorAttributes;
ReactNativeStyleAttributes.textDecorationColor = colorAttributes;
ReactNativeStyleAttributes.tintColor = colorAttributes;
ReactNativeStyleAttributes.textShadowColor = colorAttributes;
ReactNativeStyleAttributes.overlayColor = colorAttributes;

module.exports = ReactNativeStyleAttributes;
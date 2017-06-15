

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var invariant = require('fbjs/lib/invariant');

var genericComponentClass = null;

var tagToComponentClass = {};
var textComponentClass = null;

var ReactHostComponentInjection = {
  injectGenericComponentClass: function injectGenericComponentClass(componentClass) {
    genericComponentClass = componentClass;
  },

  injectTextComponentClass: function injectTextComponentClass(componentClass) {
    textComponentClass = componentClass;
  },

  injectComponentClasses: function injectComponentClasses(componentClasses) {
    _extends(tagToComponentClass, componentClasses);
  }
};

function createInternalComponent(element) {
  invariant(genericComponentClass, 'There is no registered component for the tag %s', element.type);
  return new genericComponentClass(element);
}

function createInstanceForText(text) {
  return new textComponentClass(text);
}

function isTextComponent(component) {
  return component instanceof textComponentClass;
}

var ReactHostComponent = {
  createInternalComponent: createInternalComponent,
  createInstanceForText: createInstanceForText,
  isTextComponent: isTextComponent,
  injection: ReactHostComponentInjection
};

module.exports = ReactHostComponent;
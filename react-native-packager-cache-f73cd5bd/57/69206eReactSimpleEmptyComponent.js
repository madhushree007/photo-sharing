

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ReactReconciler = require('ReactReconciler');

var ReactSimpleEmptyComponent = function ReactSimpleEmptyComponent(placeholderElement, instantiate) {
  this._currentElement = null;
  this._renderedComponent = instantiate(placeholderElement);
};
_extends(ReactSimpleEmptyComponent.prototype, {
  mountComponent: function mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID) {
    return ReactReconciler.mountComponent(this._renderedComponent, transaction, hostParent, hostContainerInfo, context, parentDebugID);
  },
  receiveComponent: function receiveComponent() {},
  getHostNode: function getHostNode() {
    return ReactReconciler.getHostNode(this._renderedComponent);
  },
  unmountComponent: function unmountComponent() {
    ReactReconciler.unmountComponent(this._renderedComponent);
    this._renderedComponent = null;
  }
});

module.exports = ReactSimpleEmptyComponent;
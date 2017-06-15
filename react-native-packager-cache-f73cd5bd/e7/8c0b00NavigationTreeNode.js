

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var invariant = require('fbjs/lib/invariant');
var immutable = require('immutable');

var List = immutable.List;

var NavigationTreeNode = function () {
  function NavigationTreeNode(value) {
    _classCallCheck(this, NavigationTreeNode);

    this.__parent = null;
    this._children = new List();
    this._value = value;
  }

  _createClass(NavigationTreeNode, [{
    key: 'getValue',
    value: function getValue() {
      return this._value;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.__parent;
    }
  }, {
    key: 'getChildrenCount',
    value: function getChildrenCount() {
      return this._children.size;
    }
  }, {
    key: 'getChildAt',
    value: function getChildAt(index) {
      return index > -1 && index < this._children.size ? this._children.get(index) : null;
    }
  }, {
    key: 'appendChild',
    value: function appendChild(child) {
      if (child.__parent) {
        child.__parent.removeChild(child);
      }
      child.__parent = this;
      this._children = this._children.push(child);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var index = this._children.indexOf(child);

      invariant(index > -1, 'The node to be removed is not a child of this node.');

      child.__parent = null;

      this._children = this._children.splice(index, 1);
    }
  }, {
    key: 'indexOf',
    value: function indexOf(child) {
      return this._children.indexOf(child);
    }
  }, {
    key: 'forEach',
    value: function forEach(callback, context) {
      this._children.forEach(callback, context);
    }
  }, {
    key: 'map',
    value: function map(callback, context) {
      return this._children.map(callback, context).toJS();
    }
  }, {
    key: 'some',
    value: function some(callback, context) {
      return this._children.some(callback, context);
    }
  }]);

  return NavigationTreeNode;
}();

module.exports = NavigationTreeNode;
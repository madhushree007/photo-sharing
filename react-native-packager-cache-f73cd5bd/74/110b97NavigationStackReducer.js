
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var NavigationStateUtils = require('./NavigationStateUtils');

var defaultGetReducerForState = function defaultGetReducerForState(initialState) {
  return function (state) {
    return state || initialState;
  };
};

function NavigationStackReducer(_ref) {
  var initialState = _ref.initialState,
      getReducerForState = _ref.getReducerForState,
      getPushedReducerForAction = _ref.getPushedReducerForAction;

  var getReducerForStateWithDefault = getReducerForState || defaultGetReducerForState;
  return function (lastState, action) {
    if (!lastState) {
      return initialState;
    }
    var lastParentState = NavigationStateUtils.getParent(lastState);
    if (!lastParentState) {
      return lastState;
    }

    var activeSubState = lastParentState.children[lastParentState.index];
    var activeSubReducer = getReducerForStateWithDefault(activeSubState);
    var nextActiveState = activeSubReducer(activeSubState, action);
    if (nextActiveState !== activeSubState) {
      var nextChildren = [].concat(_toConsumableArray(lastParentState.children));
      nextChildren[lastParentState.index] = nextActiveState;
      return _extends({}, lastParentState, {
        children: nextChildren
      });
    }

    var subReducerToPush = getPushedReducerForAction(action, lastParentState);
    if (subReducerToPush) {
      return NavigationStateUtils.push(lastParentState, subReducerToPush(null, action));
    }

    switch (action.type) {
      case 'back':
      case 'BackAction':
        if (lastParentState.index === 0 || lastParentState.children.length === 1) {
          return lastParentState;
        }
        return NavigationStateUtils.pop(lastParentState);
    }

    return lastParentState;
  };
}

module.exports = NavigationStackReducer;
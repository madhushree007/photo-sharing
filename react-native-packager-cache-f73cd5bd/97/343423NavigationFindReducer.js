
'use strict';

function NavigationFindReducer(reducers, defaultState) {
  return function (lastState, action) {
    for (var i = 0; i < reducers.length; i++) {
      var reducer = reducers[i];
      var newState = reducer(lastState, action);
      if (newState !== lastState) {
        return newState || defaultState;
      }
    }
    return lastState || defaultState;
  };
}

module.exports = NavigationFindReducer;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = createPersistor;

var _constants = require('./constants');

var _asyncLocalStorage = require('./defaults/asyncLocalStorage');

var _asyncLocalStorage2 = _interopRequireDefault(_asyncLocalStorage);

var _isStatePlainEnough = require('./utils/isStatePlainEnough');

var _isStatePlainEnough2 = _interopRequireDefault(_isStatePlainEnough);

var _jsonStringifySafe = require('json-stringify-safe');

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createPersistor(store, config) {
  var serialize = config.serialize || defaultSerialize;
  var deserialize = config.deserialize || defaultDeserialize;
  var blacklist = config.blacklist || [];
  var whitelist = config.whitelist || false;
  var transforms = config.transforms || [];
  var debounce = config.debounce || false;
  var keyPrefix = config.keyPrefix || _constants.KEY_PREFIX;
  var storage = config.storage || (0, _asyncLocalStorage2.default)('local');

  if (storage.keys && !storage.getAllKeys) storage = _extends({}, storage, { getAllKeys: storage.keys });

  var lastState = {};
  var paused = false;
  var purgeMode = false;
  var storesToProcess = [];
  var timeIterator = null;

  store.subscribe(function () {
    if (paused) return;

    var state = store.getState();
    if (process.env.NODE_ENV !== 'production') {
      if (!(0, _isStatePlainEnough2.default)(state)) console.warn('redux-persist: State is not plain enough to persist. Can only persist plain objects.');
    }

    (0, _forEach3.default)(state, function (subState, key) {
      if (!passWhitelistBlacklist(key)) return;
      if (lastState[key] === state[key]) return;
      if (storesToProcess.indexOf(key) !== -1) return;
      storesToProcess.push(key);
    });

    if (timeIterator === null) {
      timeIterator = setInterval(function () {
        if (storesToProcess.length === 0) {
          clearInterval(timeIterator);
          timeIterator = null;
          return;
        }

        var key = storesToProcess[0];
        var storageKey = createStorageKey(key);
        var endState = transforms.reduce(function (subState, transformer) {
          return transformer.in(subState, key);
        }, store.getState()[storesToProcess[0]]);
        if (typeof endState !== 'undefined') storage.setItem(storageKey, serialize(endState), warnIfSetError(key));
        storesToProcess.shift();
      }, debounce);
    }

    lastState = state;
  });

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return false;
    if (blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function adhocRehydrate(incoming) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var state = {};
    if (options.serial) {
      (0, _forEach3.default)(incoming, function (subState, key) {
        try {
          var data = deserialize(subState);
          state[key] = transforms.reduceRight(function (interState, transformer) {
            return transformer.out(interState, key);
          }, data);
        } catch (err) {
          if (process.env.NODE_ENV !== 'production') console.warn('Error rehydrating data for key "' + key + '"', subState, err);
        }
      });
    } else state = incoming;

    store.dispatch(rehydrateAction(state));
    return state;
  }

  function purge(keys) {
    if (typeof keys === 'undefined') {
      purgeAll();
    } else {
      purgeMode = keys;
      (0, _forEach3.default)(keys, function (key) {
        storage.removeItem(createStorageKey(key), warnIfRemoveError(key));
      });
    }
  }

  function purgeAll() {
    purgeMode = '*';
    storage.getAllKeys(function (err, allKeys) {
      if (err && process.env.NODE_ENV !== 'production') {
        console.warn('Error in storage.getAllKeys');
      }
      purge(allKeys.filter(function (key) {
        return key.indexOf(keyPrefix) === 0;
      }).map(function (key) {
        return key.slice(keyPrefix.length);
      }));
    });
  }

  function createStorageKey(key) {
    return '' + keyPrefix + key;
  }

  return {
    rehydrate: adhocRehydrate,
    pause: function pause() {
      paused = true;
    },
    resume: function resume() {
      paused = false;
    },
    purge: purge,
    purgeAll: purgeAll,
    _getPurgeMode: function _getPurgeMode() {
      return purgeMode;
    }
  };
}

function warnIfRemoveError(key) {
  return function removeError(err) {
    if (err && process.env.NODE_ENV !== 'production') {
      console.warn('Error storing data for key:', key, err);
    }
  };
}

function warnIfSetError(key) {
  return function setError(err) {
    if (err && process.env.NODE_ENV !== 'production') {
      console.warn('Error storing data for key:', key, err);
    }
  };
}

function defaultSerialize(data) {
  return (0, _jsonStringifySafe2.default)(data, null, null, function (k, v) {
    if (process.env.NODE_ENV !== 'production') return null;
    throw new Error('\n      redux-persist: cannot process cyclical state.\n      Consider changing your state structure to have no cycles.\n      Alternatively blacklist the corresponding reducer key.\n      Cycle encounted at key "' + k + '" with value "' + v + '".\n    ');
  });
}

function defaultDeserialize(serial) {
  return JSON.parse(serial);
}

function rehydrateAction(data) {
  return {
    type: _constants.REHYDRATE,
    payload: data
  };
}
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = devTools;

var _jsan = require("jsan");

var _socketclusterClient = require("socketcluster-client");

var _socketclusterClient2 = _interopRequireDefault(_socketclusterClient);

var _configureStore = require('./configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _constants = require('./constants');

var _reactNative = require('./utils/reactNative');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ERROR = '@@remotedev/ERROR';

var monitorActions = ['@@redux/INIT', 'TOGGLE_ACTION', 'SWEEP', 'IMPORT_STATE', 'SET_ACTIONS_ACTIVE'];

var instanceId = void 0;
var instanceName = void 0;
var socketOptions = void 0;
var socket = void 0;
var channel = void 0;
var store = {};
var lastAction = void 0;
var filters = void 0;
var isExcess = void 0;
var isMonitored = void 0;
var started = void 0;
var startOn = void 0;
var stopOn = void 0;
var sendOn = void 0;
var sendOnError = void 0;
var sendTo = void 0;
var lastErrorMsg = void 0;

function isFiltered(action) {
  if (!action || !action.action || !action.action.type) return false;
  return filters.whitelist && !action.action.type.match(filters.whitelist.join('|')) || filters.blacklist && action.action.type.match(filters.blacklist.join('|'));
}

function filterStagedActions(state) {
  if (!filters) return state;

  var filteredStagedActionIds = [];
  var filteredComputedStates = [];

  state.stagedActionIds.forEach(function (id, idx) {
    if (!isFiltered(state.actionsById[id])) {
      filteredStagedActionIds.push(id);
      filteredComputedStates.push(state.computedStates[idx]);
    }
  });

  return _extends({}, state, {
    stagedActionIds: filteredStagedActionIds,
    computedStates: filteredComputedStates
  });
}

function send() {
  if (!instanceId) instanceId = socket && socket.id || Math.random().toString(36).substr(2);
  try {
    fetch(sendTo, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        type: 'STATE',
        id: instanceId,
        name: instanceName,
        payload: (0, _jsan.stringify)(filterStagedActions(store.liftedStore.getState()))
      })
    }).catch(function (err) {
      console.warn(err);
    });
  } catch (err) {
    console.warn(err);
  }
}

function relay(type, state, action, nextActionId) {
  if (filters && isFiltered(action)) return;
  var message = {
    type: type,
    id: socket.id,
    name: instanceName
  };
  if (state) message.payload = (0, _jsan.stringify)(state);
  if (type === 'ACTION') {
    message.action = (0, _jsan.stringify)(action);
    message.isExcess = isExcess;
    message.nextActionId = nextActionId;
  } else if (action) {
    message.action = action;
  }
  socket.emit(socket.id ? 'log' : 'log-noid', message);
}

function handleMessages(message) {
  if (message.type === 'IMPORT' || message.type === 'SYNC' && socket.id && message.id !== socket.id) {
    store.liftedStore.dispatch({
      type: 'IMPORT_STATE', nextLiftedState: (0, _jsan.parse)(message.state)
    });
  }if (message.type === 'UPDATE' || message.type === 'IMPORT' || message.type === 'START') {
    relay('STATE', filterStagedActions(store.liftedStore.getState()));
  }if (message.type === 'START') {
    isMonitored = true;
  } else if (message.type === 'STOP' || message.type === 'DISCONNECTED') {
    isMonitored = false;
    relay('STOP');
  } else if (message.type === 'ACTION') {
    store.dispatch(message.action);
  } else if (message.type === 'DISPATCH') {
    store.liftedStore.dispatch(message.action);
  }
}

function async(fn) {
  setTimeout(fn, 0);
}

function sendError(errorAction) {
  if (errorAction.message && errorAction.message === lastErrorMsg) return;
  lastErrorMsg = errorAction.message;

  async(function () {
    store.dispatch(errorAction);
    if (!started) send();
  });
}

function catchErrors() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && _typeof(window.onerror) === 'object') {
    window.onerror = function (message, url, lineNo, columnNo, error) {
      var errorAction = { type: ERROR, message: message, url: url, lineNo: lineNo, columnNo: columnNo };
      if (error && error.stack) errorAction.stack = error.stack;
      sendError(errorAction);
      return false;
    };
  } else if (typeof global !== 'undefined' && global.ErrorUtils) {
    global.ErrorUtils.setGlobalHandler(function (error, isFatal) {
      sendError({ type: ERROR, error: error, isFatal: isFatal });
    });
  }

  if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && typeof console.error === 'function' && !console.beforeRemotedev) {
    console.beforeRemotedev = console.error.bind(console);
    console.error = function () {
      var errorAction = { type: ERROR };
      var error = arguments[0];
      errorAction.message = error.message ? error.message : error;
      if (error.sourceURL) {
        errorAction = _extends({}, errorAction, { sourceURL: error.sourceURL, line: error.line, column: error.column
        });
      }
      if (error.stack) errorAction.stack = error.stack;
      sendError(errorAction);
      console.beforeRemotedev.apply(null, arguments);
    };
  }
}

function str2array(str) {
  return typeof str === 'string' ? [str] : str && str.length;
}

function init(options) {
  instanceName = options.name;
  if (options.filters) {
    filters = options.filters;
  }
  if (options.port) {
    socketOptions = {
      port: options.port,
      hostname: options.hostname || 'localhost',
      secure: options.secure
    };
  } else socketOptions = _constants.defaultSocketOptions;

  startOn = str2array(options.startOn);
  stopOn = str2array(options.stopOn);
  sendOn = str2array(options.sendOn);
  sendOnError = options.sendOnError;
  if (sendOn || sendOnError) {
    sendTo = options.sendTo || (socketOptions.secure ? 'https' : 'http') + '://' + socketOptions.hostname + ':' + socketOptions.port;
    instanceId = options.id;
  }
  if (sendOnError === 1) catchErrors();
}

function start() {
  if (started) return;
  started = true;

  socket = _socketclusterClient2.default.connect(socketOptions);
  socket.on('error', function (err) {
    console.warn(err);
  });
  socket.emit('login', 'master', function (err, channelName) {
    if (err) {
      console.warn(err);return;
    }
    channel = socket.subscribe(channelName);
    channel.watch(handleMessages);
    socket.on(channelName, handleMessages);
  });
  relay('STATE', store.liftedStore.getState());
}

function stop() {
  started = false;
  isMonitored = false;
  if (channel) {
    channel.unsubscribe();
    channel.unwatch();
  }
  if (socket) {
    socket.off();
    socket.disconnect();
  }
}

function checkForReducerErrors() {
  var liftedState = arguments.length <= 0 || arguments[0] === undefined ? store.liftedStore.getState() : arguments[0];

  if (liftedState.computedStates[liftedState.currentStateIndex].error) {
    if (started) relay('STATE', filterStagedActions(liftedState));else send();
    return true;
  }
  return false;
}

function monitorReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  lastAction = action.type;
  if (!started && sendOnError === 2 && store.liftedStore) async(checkForReducerErrors);else if (action.action) {
    if (startOn && !started && startOn.indexOf(action.action.type) !== -1) async(start);else if (stopOn && started && stopOn.indexOf(action.action.type) !== -1) async(stop);else if (sendOn && !started && sendOn.indexOf(action.action.type) !== -1) async(send);
  }
  return state;
}

function handleChange(state, liftedState, maxAge) {
  if (checkForReducerErrors(liftedState)) return;

  var nextActionId = liftedState.nextActionId;
  var liftedAction = liftedState.actionsById[nextActionId - 1];
  var action = liftedAction.action;

  if (action.type === '@@INIT') {
    relay('INIT', state, { timestamp: Date.now() });
  } else if (monitorActions.indexOf(lastAction) === -1) {
    if (lastAction === 'JUMP_TO_STATE') return;
    relay('ACTION', state, liftedAction, nextActionId);
    if (!isExcess && maxAge) isExcess = liftedState.stagedActionIds.length >= maxAge;
  } else {
    relay('STATE', filterStagedActions(liftedState));
  }
}

function devTools() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  init(_extends({}, options, {
    hostname: (0, _reactNative.getHostForRN)(options.hostname)
  }));
  var realtime = typeof options.realtime === 'undefined' ? process.env.NODE_ENV === 'development' : options.realtime;
  if (!realtime && !(startOn || sendOn || sendOnError)) return function (f) {
    return f;
  };

  var maxAge = options.maxAge || 30;
  return function (next) {
    return function (reducer, initialState) {
      store = (0, _configureStore2.default)(next, monitorReducer, { maxAge: maxAge, shouldCatchErrors: !!sendOnError })(reducer, initialState);

      if (realtime) start();
      store.subscribe(function () {
        if (isMonitored) handleChange(store.getState(), store.liftedStore.getState(), maxAge);
      });
      return store;
    };
  };
}
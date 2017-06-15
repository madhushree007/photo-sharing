

var global = typeof window != 'undefined' && window || function () {
  return this;
}();

var WebSocket = global.WebSocket || global.MozWebSocket;

module.exports = WebSocket ? ws : null;

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;
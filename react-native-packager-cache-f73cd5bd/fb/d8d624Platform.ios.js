

'use strict';

var Platform = {
  OS: 'ios',
  get Version() {
    var constants = require('NativeModules').IOSConstants;
    return constants ? constants.osVersion : '';
  },
  get isTVOS() {
    var constants = require('NativeModules').IOSConstants;
    return constants ? constants.interfaceIdiom === 'tv' : false;
  },
  get isTesting() {
    var constants = require('NativeModules').IOSConstants;
    return constants && constants.isTesting;
  },
  select: function select(obj) {
    return obj.ios;
  }
};

module.exports = Platform;
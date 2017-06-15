
var color = require('color');

var primary = color('#01cca1');

var secondary = color('#00c497');
var info = color('#5bc0de');
var success = color('#5cb85c');
var danger = color('#d9534f');
var warning = color('#f0ad4e');
var sidebar = color('#252932');
var dark = color('rgba(0,0,0,0.8)');
var light = color('rgba(255,255,255,0.8)');

var theme1 = '#01cca1';
var header1 = '#00c497';

module.exports = {
  brandPrimary: primary.hexString().toString(),
  brandSecondary: secondary.hexString().toString(),
  brandInfo: info.hexString().toString(),
  brandSuccess: success.hexString().toString(),
  brandDanger: danger.hexString().toString(),
  brandWarning: warning.hexString().toString(),
  brandSidebar: sidebar.hexString().toString(),

  dark: dark.hexString().toString(),
  light: light.hexString().toString()
};
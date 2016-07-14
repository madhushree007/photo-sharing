var Color = require("color")

var primary = Color("#01cca1");		//theme background
var secondary = Color("#00c497");	//header
var info = Color("#5bc0de");
var success = Color("#5cb85c");
var danger = Color("#d9534f");
var warning = Color("#f0ad4e");
var sidebar = Color("#252932");
var dark = Color("rgba(0,0,0,0.8)");
var light = Color("rgba(255,255,255,0.8)");

// var darken = secondary.darken(0.2).hexString().toString();

module.exports = {
	brandPrimary : primary.hexString().toString(),
	brandSecondary: secondary.hexString().toString(),
	brandInfo: info.hexString().toString(),
	brandSuccess: success.hexString().toString(),
	brandDanger: danger.hexString().toString(),
	brandWarning: warning.hexString().toString(),
	brandSidebar: sidebar.hexString().toString(),
	// darker: darken,
	dark: dark.hexString().toString(),
	light: light.hexString().toString()
}
#! /usr/bin/env node
var child_process = require("child_process");
var fs = require('fs');
var originLinks = {
	NativeStarterPro: 'git@gitstrap.com:strapmobile/NativeStarterPro.git',
	NativeStarterProSeed: 'git@gitstrap.com:strapmobile/NativeStarterPro-seed.git',
	FlatApp: 'git@gitstrap.com:strapmobile/FlatApp.git',
	FlatAppSeed: 'git@gitstrap.com:strapmobile/FlatApp-seed.git',
	Ecommerce: 'git@gitstrap.com:strapmobile/Ecommerce.git',
	EcommerceSeed: 'git@gitstrap.com:strapmobile/Ecommerce-seed.git'
}

var upstreamLinks = {
	NativeStarterPro: 'git@gitstrap.com:strapmobile/NativeStarterPro-seed.git',
	NativeStarterProSeed: 'git@github.com:GeekyAnts/react-native-native-base-seed.git',
	FlatApp: 'git@gitstrap.com:strapmobile/FlatApp-seed.git',
	FlatAppSeed: 'git@github.com:GeekyAnts/react-native-native-base-seed.git',
	Ecommerce: 'git@gitstrap.com:strapmobile/Ecommerce-seed.git',
	EcommerceSeed: 'git@github.com:GeekyAnts/react-native-native-base-seed.git'
}

var packageJson = JSON.parse(fs.readFileSync(process.cwd() + '/package.json', 'utf8'));


var output = child_process.spawnSync(
				"git", 
				["remote", "add", "origin", originLinks[packageJson.repoName]], 
				{encoding: 'utf8'});

if(output.status != 0) {
	var cOutput = child_process.spawnSync(
					"git", 
					["remote", "set-url", "origin", originLinks[packageJson.repoName]], 
					{encoding: 'utf8'});

	console.log(cOutput.output[1]);
}
else {
	console.log(output.output[1]);
}

var output = child_process.spawnSync(
				"git", 
				["remote", "add", "upstream", upstreamLinks[packageJson.repoName]], 
				{encoding: 'utf8'});

if(output.status != 0) {
	var cOutput = child_process.spawnSync(
					"git", 
					["remote", "set-url", "upstream", upstreamLinks[packageJson.repoName]], 
					{encoding: 'utf8'});

	console.log(cOutput.output[1]);
}
else {
	console.log(output.output[1]);
}

var output = child_process.spawnSync(
				"git",
				["fetch", "upstream"],
				{encoding: 'utf8'});

console.log(output.output[1]);













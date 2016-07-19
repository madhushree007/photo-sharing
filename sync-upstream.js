#! /usr/bin/env node

var child_process = require("child_process");

var branch = process.argv[2];

var output = child_process.spawnSync(
				"git", 
				["merge", "upstream/" + branch], 
				{encoding: 'utf8'});
if(output.status != 0)
	console.log(output.output[1]);
else
	console.log(output.error[1]);
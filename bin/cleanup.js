#! /usr/bin/env node

var shell = require("shelljs");
var yargs = require("yargs");
var del = require('del');

var argv = yargs.usage("$0 command [options]")
  .command("node_modules", "Deletes the node_modules directory.", function (yargs) {
	del(['./node_modules/**']).then(function (paths) {
		if(paths.length > 0){
			console.log("Removing node_modules")
			if(argv.verbose || argv.v){
				console.log('Deleted files and folders:\n', paths.join('\n'));
			}
		}
		else{
			console.log("node_modules does not exist.")
		}
	}), function(err) {
			console.log(err);
	};
  })
  .command("bower_components", "Deletes the bower_components directory.", function (yargs) {
	del(['./bower_components/**']).then(function (paths) {
		if(paths.length > 0){
			console.log("Removing bower_components")
			if(argv.verbose || argv.v){
				console.log('Deleted files and folders:\n', paths.join('\n'));
			}
		}
		else{
			console.log("bower_components does not exist.")
		}
	}), function(err) {
			console.log(err);
	};
  
  })
  .example('$0 node_modules -v', 'Deletes the node_modules directory and prints what was deleted')
  .alias('v', 'verbose')
  .describe('v', 'verbose')
  .help("h")
  .alias("h", "help")
  .argv

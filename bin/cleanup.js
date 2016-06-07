#! /usr/bin/env node

var shell = require("shelljs");
var yargs = require("yargs");
var del = require('del');

var argv = yargs.usage("$0 command [options]")
  .option('r', {
    type: 'boolean',
	alias: 'recursive',
    default: true,
    describe: 'Recursively delete all.'
  })
  .command("node_modules", "Deletes the node_modules directory.", function (yargs) {
	
	var deleteFolders = './node_modules/**';
	if(yargs.argv.r || yargs.argv.recursive ){
		deleteFolders = './**/node_modules/**';
	}
	del([deleteFolders]).then(function (paths) {
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
	var deleteFolders = './bower_components/**';
	if(yargs.argv.r || yargs.argv.recursive ){
		deleteFolders = './**/bower_components/**';
	}
	del([deleteFolders]).then(function (paths) {
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

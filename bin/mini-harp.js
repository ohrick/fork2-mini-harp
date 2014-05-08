#!/usr/bin/env node

var miniHarp = require("../index.js");

var parsedArgv = require("minimist")(process.argv.slice(2));

var port = parsedArgv.port||4000;

console.log("Starting mini-harp on http://localhost: " + port);
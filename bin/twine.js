#! /usr/bin/env node
const commander = require('commander');
const pkg = require('../package.json');
const updateNotifier = require('update-notifier');

updateNotifier({pkg}).notify({isGlobal: true});

commander
	.version(pkg.version)
	.command('configure', 'configure Twitter-related credentials')
	.command('lookup', 'lookup things on twitter')
	.parse(process.argv);

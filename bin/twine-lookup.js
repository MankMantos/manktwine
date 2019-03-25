const commander = require('commander');
const pkg = require('../package.json');
const lookup = require('../commands/lookup');
const util = require('../lib/util');


commander.version(pkg.version);

commander
    .command('users [screen-names')
    .description('Find users by their screen name')
    .action( names => lookup.users(util.exractName(pkg.name), names).catch(util.handleError));

commander
    .command('statuses [ids]')
    .description('Find statuses (tweets) by their ID')
    .action(ids => lookup.statuses(util.exractName(pkg.name), ids).catch(util.handleError));
    
commander.parse(process.argv);

if (!process.argv.slice(2).length) {
    commander.outputHelp();
}
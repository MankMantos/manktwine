const commander = require('commander');
const pkg = require('../package.json');
const configure = require('../commands/configure');
const util = require('../lib/util');

commander
    .version(pkg.version)

commander
    .command('consumer')
    .description('Add a Twitter API key and secret')
    .action( () => util.exractName(configure.consumer(pkg.name)).catch(util.handleError))

commander
    .command('account')
    .description('Authorize access to a twitter account')
    .action( () => util.exractName(configure.consumer(pkg.name)).catch(util.handleError));
commander
    .parse(process.argv)

if (!process.argv.slice(2).length) {
    commander.outputHelp();
}
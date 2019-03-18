const commander = require('commander');
const pkg = require('../package.json');
const configure = require('../commands/configure');

commander
    .version(pkg.version)

commander
    .command('consumer')
    .description('Add a Twitter API key and secret')
    .action( async () => {
        await configure.consumer(pkg.name);
    })
commander
    .parse(process.argv)

if (!process.argv.slice(2).length) {
    commander.outputHelp();
}
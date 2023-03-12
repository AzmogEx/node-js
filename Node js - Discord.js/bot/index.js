const CommandoClient = require('./client');
const path = require('path') // on ajoute la librairie path

const client = new CommandoClient({
	commandPrefix: '?',
	owner: '372675148832309250',
        disableMentions: 'everyone'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['divers', 'Divers'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands')) // on indique où seront les fichiers des commandes du bot
;

client.once('ready', () => {
    console.log(`Je suis prêt !`);
});

client.on('error', console.error);

client.login('NzA5NzcxNTc3NjQ1ODU4OTU0.XrqwSw.eQ0Z_vwstzeWNV5hQI8fW4OMrPI');
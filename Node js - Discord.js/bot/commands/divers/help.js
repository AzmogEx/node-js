const { Command } = require('discord.js-commando');

module.exports = class HelpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			memberName: 'help',
			group: 'divers',
			description: 'help.',
			clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la permission d'envoyer des messages
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

	async run(msg, { text }) {
		msg.say(`**Voici les commande disponibles !**`);
	}
};
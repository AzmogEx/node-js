const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            memberName: 'hello',
            group: 'divers',
            aliases: ['bonjour', 'hi'],
            description: 'Répond hello !.',
            clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la perm de send des mess
            userPermissions: ['ADMINISTRATOR'], // l'user doit etre admin pour use this command
                    guildOnly: false,
                    throttling: {
                            usages: 2,
                            duration: 10,
                    },
        });
    }

    async run(msg) {
            msg.say(`Bonjour, je suis ${this.client.user.tag} (\`${this.client.user.id}\`)`);
    }

};
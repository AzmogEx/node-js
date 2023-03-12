module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Musique actuelle ${queue.current.title} skipped ✅` : `Quelque chose s'est mal passé ${message.author}... réessayer ? ❌`);
    },
};
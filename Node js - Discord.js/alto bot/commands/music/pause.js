module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Musique actuelle ${queue.current.title} pause ✅` : `Quelque chose s'est mal passé ${message.author}... réessayer ? ❌`);
    },
};
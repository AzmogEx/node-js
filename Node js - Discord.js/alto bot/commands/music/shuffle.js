module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Aucune musique dans la file d'attente après celle en cours ${message.author}... réessayer ? ❌`);

        await queue.shuffle();

        return message.channel.send(`File d'attente mélangée **${queue.tracks.length}** musique(s) ! ✅`);
    },
};
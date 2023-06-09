module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author}... réessayer ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Veuillez spécifier un filtre valide pour activer ou désactiver ${message.author}... réessayer ? ❌\n${actualFilter ? `Filtre actuellement actif ${actualFilter} (${client.config.app.px}filtre ${actualFilter} pour le désactiver ).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Ce filtre n'existe pas ${message.author}... réessayer ? ❌\n${actualFilter ? `Filtre actuellement actif ${actualFilter}.\n` : ''}Liste des filtres disponibles ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Le filtre ${filter} est maintenant **${queue.getFiltersEnabled().includes(filter) ? 'activée' : 'désactivée'}** ✅\n*Rappel plus la musique est longue, plus cela prendra de temps.*`);
    },
};
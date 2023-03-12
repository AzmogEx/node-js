player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`J'ai commencé à jouer ${track.title} dans **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Musique ${track.title} ajouté dans la file d'attente ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Jai été manuellement déconnecté du canal vocal, en vidant la file dattente... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Personne n est dans le canal vocal, laissant le canal vocal... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('J ai fini de lire toute la file d attente ✅');
});
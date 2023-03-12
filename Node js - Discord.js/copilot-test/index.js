// crée moi un bot discord
const Discord = require('discord.js')
const client = new Discord.Client()
// fait moi le lien tockent du bot
client.login('NzA5NzcxNTc3NjQ1ODU4OTU0.GrYB77.OSg8ZEO7wJXYEDe5YmjOWebKchC8RkyfKVhbLQ')
// quand le bot est prêt fait moi un console.log qui me dit qu'il a bien démarrer
client.on('ready', () => {
    console.log('Je suis prêt !')
    })

// fait moi une commande qui dit bonjour dans un salon
client.on('message', message => {
    if (message.content === 'bonjour') {
        message.channel.send('Bonjour !')
    }
}
)

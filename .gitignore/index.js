const Discord = require("discord.js");
const bot = new Discord.Client()

var prefix = ("/")

bot.login("METTRE ICI VOTR TOKEN")

bot.on('ready', function() {
    bot.user.setPresence({game: { name: 'mettez ici votre nom que vous voulez'}});
    console.log("Bot Connecté")
});

bot.on('message', message => {
    if (message.content === prefix + 'test'){
        message.channel.sendMessage('Testbot');
}})

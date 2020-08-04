const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();



client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    function removeRole() {
        message.member.roles.remove(message.guild.roles.cache.find(role => role.name === "Predditor"));
    }
    if ((message.content.toLowerCase().includes('reddit')) && (message.author != "740068698320142356")) {
        //message.channel.send('Role assigned: Predditor');
        if (!(message.member.roles.cache.find(role => role.name === 'Predditor'))) {
            message.channel.send('PREDDITOR ALERT!!!\nRole assigned: Predditor');
            message.member.roles.add(message.guild.roles.cache.find(role => role.name === "Predditor"));
            setTimeout(removeRole, 600000)
        } else {
            message.channel.send('PREDDITOR ALERT');
        }
    }
    if(message.content.toLowerCase() == "4chan rules") {
        message.member.roles.remove(message.guild.roles.cache.find(role => role.name === "Predditor"));
    }
});

client.login(config.token);

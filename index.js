const Discord = require('discord.js');
const client =  new Discord.Client();
const ddiff = require('return-deep-diff');

client.on('ready',() => {
    console.log('Bot is Online');
});

client.on('ready', () => {
    client.user.setActivity('Ali Gamings Fan Server', { type: "WATCHING" });
   });
var prefix = "?"
client.on('message', message =>{
    if (!message.content.startsWith(prefix)) return;
    let args =  message.content.split(' ').slice(1);
    var argresult = args.join(' ');
});

client.on('message', message => {
    if (message.author === client.user)return;
    if (message.content.startsWith(prefix + 'ping')){
        message.channel.sendMessage(`pong!\`${Date.now() -  message.createdTimestamp} ms\``);
    } else

    if (message.content.startsWith(prefix + 'food')){
        message.channel.sendMessage('Ali and I are Biryani fans :D');
    } else 
    
    if (message.content.startsWith(prefix + 'live')){
        message.channel.sendMessage('@here Ali is now streaming! Go Check it out! Link = https://gaming.youtube.com/channel/UC0NIYNCKUJGOtMA_iLd-dyQ !! :flame:')
    } else 

    if (message.content.startsWith(prefix + 'plsSlav')){
        message.channel.sendMessage('Here is some gopnik compilation https://www.youtube.com/watch?v=xMSGnGL8JU0')
    }
});

client.on('guildMemberAdd', member =>{
    let guild = member.guild;
    client.channels.get('485381188949901313').sendMessage(`Ayo ${member.user} just joined the server! :flame: `)
});

client.on('guildMemberRemove', member =>{
    let guild = member.guild;
    client.channels.get('485381188949901313').sendMessage(`Ah man ${member.user.username} just left the server :sob:`)
});

client.on('roleCreate', role =>{
    let guild = role.guild;
    client.channels.get('485381188949901313').sendMessage(`Role called ${role.name} has been created`);  
});

client.on('roleDelete', role =>{
    let guild = role.guild;
    client.channels.get('485381188949901313').sendMessage(`Role called ${role.name} has been deleted`);  
});

client.on('roleUpdate', (oRole, nRole) =>{

});

client.login('NDg1MzcxNjA1NzUzNjU5Mzkz.Dm_e6g.J5hKjGY3N3LFFErXZXaukjTfSfc');
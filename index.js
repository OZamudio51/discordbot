const discord = require('discord.js');

const client = new discord.Client();

const prefix = '-';


client.once('ready', () => {
    console.log('Big Hoh');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'hoh') {
        message.channel.send('hoh');
    }
});

client.on('message', msg => {
    if(msg.content === 'hoh') {
        msg.reply('hoh');
    }
})

client.on('message', msg => {
    if(msg.content === 'good bot') {
        msg.reply('Thx');
    }
})

client.on('message', msg => {
    if(msg.content === 'oof') {
        msg.reply('big oof');
    }
})

// client.on('presenceUpdate', (oldMember, newMember) => {
//     if(oldMember.PresenceStatus !== newMember.PresenceStatus){
//         console.log(`${newMember.user.username} is now ${newMember.PresenceStatus}`);
//     }
// });

// client.on('presenceUpdate', usr => {
//     if (usr.status === 'online') {
//         console.log(`${usr.username} is online`);
//     } else if (usr.status === 'offline') {
//         console.log(`${usr.username} is offline`);
//     }
// });

client.login('NzM5MjE3MTk5NjUwMDQ2MDYy.XyXPqg.bJBVZGHsRo_1yMtCJ7uR7q8XUrE');
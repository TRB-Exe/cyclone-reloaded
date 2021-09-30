const { Command } = require('yuuko');
module.exports = new Command(['botnews'], (message) => {
message.channel.createMessage({
    embed: {
        title: `Новости бота`,
        description: `Все новости бота`,
        color: 0x7589da,
        fields: [
{
                name: `01.01.70`,
                value: `Новостей на данный момент нет. Но возможно они когда нибудь будут ¯\_(ツ)_/¯`,
                inline: false,
            },
        ],
    },
});
});
const { Command } = require('yuuko');
module.exports = new Command(['help'], (message) => {
message.channel.createMessage({
    embed: {
        title: `Все команды бота cyclone reloaded`,
        description: `[Добавить бота на ваш сервер](https://discord.com/api/oauth2/authorize?client_id=872763206437830696&permissions=8&scope=bot%20applications.commands)`,
        color: 0x7589da,
        fields: [
            {
                name: 'Основные команды',
                value: '`_help`, `_ping`, `_botinfo`, `_botnews`',
                inline: false,
            },

            {
                name: 'Утилиты',
                value: '`_userinfo`, `_serverinfo`',
                inline: false,
            },
            {
                name: 'Развлекательные ~~или бесполезные~~ команды',
                value: '`_rickroll`, `_owo`, `_getbebra`, `_loremipsum`',
                inline: false,
            },
            {
                name: 'Модерация',
                value: `В разработке`,
                inline: false,
            },
        ],
    },
});
});
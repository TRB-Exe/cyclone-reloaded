const { Command } = require('yuuko');
const moment = require('moment');
module.exports = new Command(['guild', 'server', 'serverinfo', 'guildinfo'], (message) => {
    const guild = message.channel.guild;
    const owner = guild.members.get(guild.ownerID);
    message.channel.createMessage({
        embed: {
            title: `Информация о сервере ${guild.name}`,
            description: `Просто информация о сервере`,
            color: 0x7589da,
            thumbnail: {
                url: guild.iconURL,
            },
            fields: [
                {
                    name: 'Название сервера',
                    value: `<:round_badge_white_24dp:892341851447787521> ${guild.name} (id: \`${guild.id}\`)`,
                    inline: false,
                },

                {
                    name: 'Создатель сервер',
                    value: `<:account:892339233820389376> ${owner.username}#${owner.discriminator} (id: \`${guild.ownerID}\`)`,
                    inline: false,
                },
                {
                    name: 'Дата создания сервера',
                    value: `<:date_event:892341337884622849> ${moment.utc(guild.createdAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
                    inline: false,
                },
                {
                    name: 'Количество участников',
                    value: `<:account:892339233820389376> ${guild.memberCount}`,
                    inline: false,
                },
            ],
        },
    });
});
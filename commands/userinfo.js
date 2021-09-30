const { Command } = require('yuuko');
const moment = require('moment');
module.exports = new Command(['userinfo', 'user'], async (message, args, context) => { // eslint-disable-line no-unused-vars
    if (!args[0]) {
        return message.channel.createMessage(`<:warning_error:892340109435887637> Пользователь не найден!`);
    }
    const user = message.mentions[0];
    const guild = message.channel.guild;
    const member = await guild.members.get(user.id);
    message.channel.createMessage({
        embed: {
            title: `Информация о ${user.username}#${user.discriminator}`,
            thumbnail: {
                url: user.avatarURL,
            },
            color: 0x7289da,
            fields: [
                {
                    name: 'Дата создания аккаунта',
                    value: `<:date_event:892341337884622849> ${moment.utc(user.createdAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
                    inline: false,
                },
                {
                    name: 'ID',
                    value: `<:round_badge_white_24dp:892341851447787521> \`${user.id}\``,
                    inline: false,
                },
                {
                    name: 'Роли',
                    value: '<@&' + member.roles.map((r) => `${r}`).join('>, <@&') + '>',
                    inline: false,
                },
                {
                    name: 'Дата входа на сервер',
                    value: `<:date_event:892341337884622849> ${moment.utc(member.joinedAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
                    inline: false,
                },
            ],
        },
    });
});
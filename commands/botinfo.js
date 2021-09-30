const { Command, Client } = require('yuuko');
const moment = require("moment");
const dotenv = require('dotenv');
var env = dotenv.config();
env = process.env;
module.exports = new Command(['botinfo'], (message) => {
message.channel.createMessage({
    embed: {
        title: `Информация о боте`,
        description: `${env.BOTNAME} - просто бот для вашего сервера с командами развлечений и модерацией. В будущем бот будет улучшаться.`,
        color: 0x7589da,
        fields:[
            {
                name: 'Инфорация о хосте бота',
                value: 'null',
                inline: false,
            },
            {
                name: 'Ссылки',
                value: `[Пригласить бота](${env.INVITELINK}) \n[Сервер ${env.SUPPORTSERVERNAME}](${env.SUPPORNTSERVERINVITE}) \n[Репозиторий в GitHub](https://github.com/TRB-Exe/cyclone-reloaded)`,
                inline: false,
            },
        ],
    },
});
});
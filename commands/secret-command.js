const { Command } = require('yuuko');
module.exports = new Command(['secret-command'], (message) => {
message.channel.createMessage({
    embed: {
        title: `Поздравляем вы нашли секретную команду!`,
        description: `Но здесь ничего нет`,
        color: 0x7589da,
    },
});
});
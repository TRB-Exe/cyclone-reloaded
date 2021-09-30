const { Command } = require('yuuko');
module.exports = new Command(['getbebra'], (message) => {
message.channel.createMessage({
    embed: {
        title: `БЕСПЛАТНАЯ БЕБРА`,
        description: `[ХВАТАЙ БЕСПЛАТНО](http://trbexe.ml/files/bebra.html)`,
        color: 0x7589da,
        thumbnail: {
            url: `http://trbexe.ml/images/mish.png`,
        },
    },
});
});
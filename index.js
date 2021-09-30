const { Client } = require('yuuko');
const path = require('path');
const dotenv = require('dotenv');
var env = dotenv.config();
env = process.env;

// импорт токена и префикса с файла .env

const bot = new Client({
    token: env.TOKEN,
    prefix: env.PREFIX,
    ignoreBots: true,
});


bot.extendContext({
    variableOne: 'variable1',
});
bot.editStatus("idle", {name: `${env.PREFIX}help | v${env.VERSION}`, type: 3})

bot.on('error', (err) => {
    console.error(err);
});

bot.globalCommandRequirements = {
    guildOnly: true,
};

bot
    .addDir(path.join(__dirname, 'commands'))
    .addDir(path.join(__dirname, 'events'))
    .connect();
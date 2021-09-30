const { EventListener } = require('yuuko');
module.exports = new EventListener('ready', ({client}) => {
    console.log('Cyclone reloaded')
    console.log(`Bot started without errors and logged in bot account ${client.user.usename}`);
});
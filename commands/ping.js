const { Command } = require('yuuko');
module.exports = new Command('ping', (message, args, context) => {
  message.channel.createMessage('Pong!');
});
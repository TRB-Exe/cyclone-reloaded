const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.data.name, command);
}

client.once('ready', () => {
        console.log('Ready ebat');
});







client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
                await command.execute(interaction);
        } catch (error) {
                console.error(error);
                return interaction.reply({ content: '😰 Произошла неизвестная ошибка. Сообщение о ошибке сохранена в консоль хоста', ephemeral: true });
        }
});

client.login(token);


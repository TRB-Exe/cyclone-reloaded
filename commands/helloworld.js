const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
        data: new SlashCommandBuilder()
                .setName('helloworld')
                .setDescription('Привет мир!'),
        async execute(interaction) {
                await interaction.reply('Hello World!');
        },
};


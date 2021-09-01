const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
        data: new SlashCommandBuilder()
                .setName('help')
                .setDescription('Команды'),
        async execute(interaction) {
                await interaction.reply('На данный момент бот в разработке и используются слеш команды. \n Доступные команды \ninvite, ping, avatar, prune');
        },
};

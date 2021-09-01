const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('news')
		.setDescription('Новости и изменения в боте'),
	async execute(interaction) {
		await interaction.reply('Новости бота ```Новостей на данный момент нет```');
	},
};

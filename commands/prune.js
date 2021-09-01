const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prune')
		.setDescription('очистка чата.')
		.addIntegerOption(option => option.setName('amount').setDescription('количество от 1 до 100')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		if (amount <= 1 || amount > 101) {
			return interaction.reply({ content: 'Максимум 100 сообщений.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
		});

		return interaction.reply({ content: `Удалено \`${amount}\` сообщений.`, ephemeral: true });
	},
};

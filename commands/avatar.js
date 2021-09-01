const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Получить аватар пользователя.')
		.addUserOption(option => option.setName('target').setDescription('юзер')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`Аватар пользователя ${user.username} : ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Ваш аватар: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};

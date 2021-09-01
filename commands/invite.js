                                                                                        
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
        data: new SlashCommandBuilder()
                .setName('invite')
                .setDescription('Пригласить бота'),
        async execute(interaction) {
                await interaction.reply('Бот на слэш командах и есть шанс что на вашем сервере они не будут работать. Приглашение пока недоступно');
        },
};




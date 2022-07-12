import { SlashCommandBuilder } from '@discordjs/builders';
import { ICommand } from '.';
import { errorHandler } from '../utils/errorHandler';

export const status: ICommand = {
  data: new SlashCommandBuilder().setName('status').setDescription('Verifica status do bot'),
  run: async interaction => {
    try {
      await interaction.deferReply();

      await interaction.editReply(`Bot estável utilizando versão ${process.env.npm_package_version}`);
    } catch (error) {
      errorHandler('status command', error);
    }
  },
};

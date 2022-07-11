import { Interaction } from 'discord.js';
import { commands } from '../commands';
import { errorHandler } from '../utils/errorHandler';

export const onInteractionCreate = async (interaction: Interaction) => {
  try {
    if (!interaction.isCommand()) return;

    for (const command of commands) {
      if (command.data.name === interaction.commandName) {
        await command.run(interaction);

        break;
      }
    }
  } catch (error) {
    errorHandler('onInteraction event', error);
  }
};

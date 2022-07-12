import { Interaction } from 'discord.js';
import { commands } from '../commands';
import { errorHandler } from '../utils/errorHandler';

export const onInteractionCreate = async (interaction: Interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const command = commands.find(command => command.data.name === interaction.commandName);

    if (command) await command.run(interaction);
  } catch (error) {
    errorHandler('onInteraction event', error);
  }
};

import { REST } from '@discordjs/rest';
import { Client } from 'discord.js';
import { APIApplicationCommandOption, Routes } from 'discord-api-types/v9';
import { commands } from '../commands';
import { discordToken } from '../utils/settings';
import { logHandler } from '../utils/logHandler';
import { errorHandler } from '../utils/errorHandler';

interface Payload {
  name: string;
  description?: string;
  type?: number;
  options?: APIApplicationCommandOption[];
}

export const onReady = async (bot: Client) => {
  try {
    if (!bot.application?.id) throw new Error('Missing app id');

    const rest = new REST({ version: '9' }).setToken(discordToken());

    const body: Payload[] = commands.map(command => command.data.toJSON());

    await rest.put(Routes.applicationCommands(bot.application.id), { body });

    logHandler.log('info', 'Connected to Discord!');
  } catch (error) {
    errorHandler('onReady event', error);
  }
};

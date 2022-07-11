import { Client, Interaction } from 'discord.js';
import { onInteractionCreate } from '../events/onInteractionCreate';
import { onReady } from '../events/onReady';
import { options } from '../settings/discord';
import { discordToken } from '../utils/settings';

export async function start() {
  const bot = new Client(options);

  bot.on('ready', async () => await onReady(bot));

  bot.on('interactionCreate', async (interaction: Interaction) => await onInteractionCreate(interaction));

  bot.login(discordToken());
}

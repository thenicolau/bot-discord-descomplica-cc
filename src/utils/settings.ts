import { dotEnv } from '../infrastructure/dotEnv';

const { getStringEnv, getNumberEnv, getEnvMode } = dotEnv();

export const nodeEnv = () => getEnvMode('NODE_ENV');

export const discordToken = () => getStringEnv('DISCORD_TOKEN');

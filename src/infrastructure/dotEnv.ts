import 'dotenv/config';
import { castNumber } from '../helpers/cast-number';

type Environment = 'production' | 'development';

export const dotEnv = () => {
  const getStringEnv = (settingName: string): string => {
    const setting = returnSetting(settingName);

    if (!setting) throw new Error(errorMessage(settingName));

    return setting;
  };

  const getNumberEnv = (settingName: string): number => {
    const rawSetting = returnSetting(settingName);
    const setting = castNumber(rawSetting);

    if (!setting) throw new Error(errorMessage(settingName));

    return setting;
  };

  const getEnvMode = (settingName: string): Environment => {
    const setting = returnSetting(settingName);

    if (!setting) throw new Error(errorMessage(settingName));

    if (setting !== 'production' && setting !== 'development') {
      const message = `${settingName} invalid value. Must be 'development' or 'production'`;

      errorMessage('', message);

      throw new Error(message);
    }

    return setting;
  };

  const errorMessage = (settingName: string, errorMessage?: string): string => {
    const message = errorMessage ?? `You need to configure the ${settingName} environment variable`;

    console.log('Settings error:', message);

    return message;
  };

  const returnSetting = (settingName: string): string | undefined => {
    const setting = process.env[settingName];

    if (setting === null) return undefined;

    return setting;
  };

  return { getStringEnv, getNumberEnv, getEnvMode };
};

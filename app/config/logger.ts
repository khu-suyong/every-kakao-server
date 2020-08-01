import { TransportType } from '../utils/logger/transports';

export const config = {
  transports: [
    {
      type: TransportType.CONSOLE,
      level: 'debug'
    },
    {
      type: TransportType.FILE('logs/api'),
      level: 'debug'
    },
    {
      type: TransportType.FILE('logs/error'),
      level: 'error'
    },
    {
      type: TransportType.FILE('logs/warn'),
      level: 'warn'
    }
  ]
};

export default config;

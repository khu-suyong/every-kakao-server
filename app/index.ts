import { config } from './config';
import { logger } from './utils/logger';

export const app = async () => {
  logger.info('test');
  logger.info('winston logger test');
  logger.debug('config', config);
};

export default app;

import createLogger from './logger';

import config from '../../config/logger';

export const logger = createLogger(config);

export default logger;

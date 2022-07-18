import { LoggerService as LS } from '@nestjs/common';
import * as winston from 'winston';

export class LoggerService implements LS {
  private logger: winston.Logger;

  constructor() {}
  warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message);
  }
  debug(message: any, ...optionalParams: any[]) {
    this.logger.debug(message);
  }
  log(message: any, ...optionalParams: any[]) {
    this.logger.log(message);
  }
  error(message: any, ...optionalParams: any[]) {
    this.logger.error(message);
  }
  verbose(message: any, ...optionalParams: any[]) {
    this.logger.verbose(message);
  }
}

import { LoggerService as LS } from '@nestjs/common';
import * as winston from 'winston';

export class LoggerService implements LS {
  private logger: winston.Logger;

  constructor() {}
  warn(message: any, ...optionalParams: any[]) {}
  debug(message: any, ...optionalParams: any[]) {}
  log(message: any, ...optionalParams: any[]) {}
  error(message: any, ...optionalParams: any[]) {}
  verbose(message: any, ...optionalParams: any[]) {}
}

import { LoggerService as LS } from '@nestjs/common';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
import * as dayjs from 'dayjs';
const { errors, combine, json, timestamp, ms, prettyPrint } = winston.format;

export class LoggerService /* implements LS */ {
  private logger: winston.Logger;

  constructor() {
    // this.logger = winston.createLogger({
    // format: combine(
    //   errors({ stack: true }),
    //   json(),
    //   timestamp({ format: 'isoDateTime' }),
    //   ms(),
    //   prettyPrint(),
    // ),
    // transports: [
    //   new winston.transports.File({
    //     level: 'error',
    //     filename: `error-${dayjs(new Date()).format('YYYY-MM-DD')}.log`,
    //     dirname: 'logs',
    //     maxsize: 5000000,
    //   }),
    //   new winston.transports.File({
    //     filename: `application-${dayjs(new Date()).format('YYYY-MM-DD')}.log`,
    //     dirname: 'logs',
    //     maxsize: 5000000,
    //   }),
    //   new winston.transports.Console({
    //     level: 'production' === 'production' ? 'info' : 'silly',
    //     format: combine(
    //       nestWinstonModuleUtilities.format.nestLike('application-log', {
    //         prettyPrint: true,
    //       }),
    //     ),
    //   }),
    // ],
    // });
    // console.log = (message: any, params?: any) => {
    //   this.logger.debug(message, params);
    // };
  }
  // warn(message: string) {
  //   this.logger.warn(message);
  // }
  // debug(message: any) {
  //   this.logger.debug(message);
  // }
  // log(message: any) {
  //   this.logger.log(message);
  // }
  // error(message: any) {
  //   this.logger.error(message);
  // }
  // verbose(message: any) {
  //   this.logger.verbose(message);
  // }
}

import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { LoggerService as LS } from '@nestjs/common';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
import * as dayjs from 'dayjs';
@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.File({
          level: 'error',
          filename: `error-${dayjs(new Date()).format('YYYY-MM-DD')}.log`,
          dirname: 'logs',
          maxsize: 5000000,
        }),
        new winston.transports.File({
          filename: `application-${dayjs(new Date()).format('YYYY-MM-DD')}.log`,
          dirname: 'logs',
          maxsize: 5000000,
        }),
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'info' : 'silly',
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
  ],
  // providers: [LoggerService],
  // exports: [LoggerService],
})
export class LoggerModule {}

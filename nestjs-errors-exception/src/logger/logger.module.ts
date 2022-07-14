import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WinstonModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        transports: [
          new winston.transports.File({
            filename: `${process.cwd()}/log/YYYY-MM-DD HH:mm:ss`,
          }),
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike(),
            ),
          }),
        ],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class LoggerModule {}

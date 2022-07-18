import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSource } from './db/datasource.config';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule, TypeOrmModule.forRoot(dataSource)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

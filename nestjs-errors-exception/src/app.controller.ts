import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Logger,
} from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './error/business-exception.filter';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private logger: Logger,
  ) {}

  @Get('/base_error')
  getbaseError(): string {
    throw new Error('Error 발생');
  }
  @Get('/nest_error')
  getNestError(): string {
    throw new HttpException('Error 발생', HttpStatus.INTERNAL_SERVER_ERROR);
  }
  @Get('/business_error')
  getBusinessError(): string {
    this.logger.error('test');
    const userId = 1;
    throw new BusinessException(
      'users',
      `User with id=${userId} was not found.`,
      'User not found',
      HttpStatus.NOT_FOUND,
    );
  }
}

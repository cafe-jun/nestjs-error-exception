import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessException } from './error/business-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
    const userId = 1;
    throw new BusinessException(
      'users',
      `User with id=${userId} was not found.`,
      'User not found',
      HttpStatus.NOT_FOUND,
    );
  }
}

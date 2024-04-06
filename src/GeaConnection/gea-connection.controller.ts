/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('gea-connection')
export class RmqController {
  @Get('')
  async geaCon() {
    return 'hi';
  }
}

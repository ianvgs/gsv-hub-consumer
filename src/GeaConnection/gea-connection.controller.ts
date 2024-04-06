/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('gea-connection')
export class GeaConnectionController {
  constructor() {}

  @Get()
  async getTodasCategoriasBySiteId() {}
}

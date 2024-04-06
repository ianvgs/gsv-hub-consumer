/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GeaConnectionController } from './gea-connection.controller';

@Module({
  controllers: [GeaConnectionController],
})
export class GeaConnectionModule {}

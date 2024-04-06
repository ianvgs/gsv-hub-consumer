/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { RmqService } from './RMQModule/rmq.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RmqController } from './RMQModule/rmq.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: false,
      isGlobal: true,
    }),
  ],
  controllers: [RmqController],
  providers: [ConfigService, RmqService],
})
export class AppModule {}

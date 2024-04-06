/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { RmqService } from './RMQModuleConsumer/rmqconsumer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RmqController } from './RMQModuleConsumer/rmqconsumer.controller';
import { GeaConnectionModule } from './GeaConnection/gea-connection.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: false,
      isGlobal: true,
    }),
    GeaConnectionModule,
  ],
  controllers: [RmqController],
  providers: [ConfigService, RmqService],
})
export class AppModule {}

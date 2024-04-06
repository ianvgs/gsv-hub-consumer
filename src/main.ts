/* eslint-disable prettier/prettier */
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBIT_MQ_URI],
      queue: 'generate_gea_protocol',
      noAck: false,
      persistent: true,
    },
  });
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('gea-microservice');
  await app.listen(configService.get('PORT') || 3000);
  await app.startAllMicroservices();
}
bootstrap();

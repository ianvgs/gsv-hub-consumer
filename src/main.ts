/* eslint-disable prettier/prettier */
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'generate_gea_protocol',
      noAck: false,
      persistent: true,
    },
  });
  await app.startAllMicroservices();
}
bootstrap();

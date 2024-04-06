/* eslint-disable prettier/prettier */
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('gea-microservice');
  app.listen(configService.get('PORT') || 3000);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBIT_MQ_URI],
      queue: 'generate_gea_protocol',
      noAck: false,
      persistent: true,
    },
  });
  await app.startAllMicroservices();

  /*const app = await NestFactory.create(AppModule);
    const rmqService = app.get<RmqService>(RmqService)
    app.connectMicroservice(rmqService.getOptions('TESTING'))  
    app.connectMicroservice({
        transport: Transport.TCP,
        options:{
          port:3001
        }
      })
    await app.startAllMicroservices()
    app.listen(3001) 
    await app.listen(configService.get('PORT');
  */
}
bootstrap();

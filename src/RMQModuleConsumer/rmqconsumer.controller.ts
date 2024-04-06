/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from './rmqconsumer.service';

//Somente @EventPattern
@Controller()
export class RmqController {
  constructor(private readonly rmqService: RmqService) {}

  @EventPattern('gsv_nr_created')
  handleBillingCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    const pattern = context.getPattern();
    console.log('data', data);
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    /* console.log("Original", originalMsg?.fields?.routingKey) */
    //Nome da fila

    /*     try {
      const idFromGea = await this.rmqService.callGeaApi({
        gsv_id: data.gsv_id,
      });

      if (idFromGea) {
        const gsvAtualizado = await this.gsvService.update({ gsv_id, gea_id });

        if (gsvAtualizado) {
          channel.ack(originalMsg);
        } else {
          channel.nack(originalMsg, false);
        }
      }
    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
      channel.nack(originalMsg, false);
    } */
  }
}

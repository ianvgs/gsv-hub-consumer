/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class RmqService {
  callGeaApi({ gsv_id }) {
    console.log('GSV_ID', gsv_id);
    /*    const response = await this.httpService.makeRequest(
      'https://exemplo.com/api/endpoint',
      gsv_id,
    ); */

    /*     if (response.status === 200   e getAsset.id) {
        return {idCriado:responde.data.id}
      console.log('Sucesso! Mensagem processada.');
      //.ack APAGA a mensagem da fila
    } else {
      throw new Error('Erro na chamada HTTP.');
    } */
  }
}

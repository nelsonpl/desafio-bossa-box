import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Desafio BossaBox - Dev. Back-End';
  }
}

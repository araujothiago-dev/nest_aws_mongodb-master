import { Injectable } from '@nestjs/common';
import { CreateNotificacoeDto } from './dto/create-notificacoe.dto';
import { UpdateNotificacoeDto } from './dto/update-notificacoe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Notificacao } from './entities/notificacoe.entity';
import { Model } from 'mongoose';

@Injectable()
export class NotificacoesService {
  constructor(
    @InjectModel(Notificacao.name, 'notificacoes')
    private notificaoModel: Model<Notificacao>
  ) {}
  
  create(createNotificacoeDto: CreateNotificacoeDto) {
    return 'This action adds a new notificacoe';
  }

  findAll() {
    return `This action returns all notificacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificacoe`;
  }

  update(id: number, updateNotificacoeDto: UpdateNotificacoeDto) {
    return `This action updates a #${id} notificacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificacoe`;
  }
}

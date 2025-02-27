import { Injectable } from '@nestjs/common';
import { CreateNotificacoeDto } from '../dto/create-notificacao.dto';
import { UpdateNotificacoeDto } from '../dto/update-notificacao.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Notificacao } from '../entities/notificacao.schema';
import { Model } from 'mongoose';

@Injectable()
export class NotificacaoService {
  constructor(
    @InjectModel(Notificacao.name, 'admin')
    private notificaoModel: Model<Notificacao>
  ) {}
  
  create(createNotificacoeDto: CreateNotificacoeDto) {
    const createNotificacao = new this.notificaoModel(createNotificacoeDto);

    const notificacao = createNotificacao.save();

    return notificacao;
  }

  findAll() {
    const notificacoes = this.notificaoModel.find().exec();

    if(!notificacoes) {
      throw 'Notificacoes not found';
    }

    return notificacoes;
  }

  findOne(id: string) {
    const notificacao = this.notificaoModel.findOne({id}).exec();
    
    if(!notificacao) {
      throw 'Notificacao not found';
    }

    return notificacao;

    return `This action returns a #${id} notificacoe`;
  }

  update(id: number, updateNotificacoeDto: UpdateNotificacoeDto) {
    return `This action updates a #${id} notificacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificacoe`;
  }
}

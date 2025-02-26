import { Module } from '@nestjs/common';
import { NotificacaoService } from './services/notificacao.service';
import { NotificacaoController } from './controllers/notificacao.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notificacao, NotificacaoSchema } from './entities/notificacao.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notificacao.name, schema: NotificacaoSchema }], 'admin'),
  ],
  controllers: [NotificacaoController],
  providers: [NotificacaoService],
})
export class NotificacaoModule {}

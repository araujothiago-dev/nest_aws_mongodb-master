import { PartialType } from '@nestjs/swagger';
import { CreateNotificacoeDto } from './create-notificacao.dto';

export class UpdateNotificacoeDto extends PartialType(CreateNotificacoeDto) {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateNotificacoeDto } from '../dto/create-notificacao.dto';
import { UpdateNotificacoeDto } from '../dto/update-notificacao.dto';
import { NotificacaoService } from '../services/notificacao.service';

@Controller('notificacoes')
export class NotificacaoController {
  constructor(private readonly notificacoesService: NotificacaoService) {}

  @Post()
  create(@Body() createNotificacoeDto: CreateNotificacoeDto) {
    return this.notificacoesService.create(createNotificacoeDto);
  }

  @Get()
  findAll() {
    return this.notificacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificacoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificacoeDto: UpdateNotificacoeDto) {
    return this.notificacoesService.update(+id, updateNotificacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificacoesService.remove(+id);
  }
}

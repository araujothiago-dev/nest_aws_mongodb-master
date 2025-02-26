import { Test, TestingModule } from '@nestjs/testing';
import { NotificacaoController } from './notificacao.controller';
import { NotificacaoService } from '../notificacoes.service';

describe('NotificacaoController', () => {
  let controller: NotificacaoController;

  // Antes de cada teste, cria um módulo de teste e compila
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificacaoController],
      providers: [NotificacaoService],
    }).compile();

    // Obtém uma instância do NotificacaoController
    controller = module.get<NotificacaoController>(NotificacaoController);
  });

  // Testa se o controlador está definido
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';
import { ToolServiceFactory, ToolMock } from './tool.service.factory';

describe('Tool Controller', () => {
  let controller: ToolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToolController],
      providers: [
        {
          provide: ToolService,
          useClass: ToolServiceFactory,
        },]
    }).compile();

    controller = module.get<ToolController>(ToolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('testando buscando todas ferramentas...', async () => {
    expect(await controller.findAll('')).toStrictEqual(ToolMock);
  });

  it('testando filtro por tag...', async () => {
    expect(await controller.findAll('tag')).toStrictEqual(ToolMock[0]);
  });
});

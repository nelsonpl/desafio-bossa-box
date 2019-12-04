import { Test, TestingModule } from '@nestjs/testing';
import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';
import { getModelToken } from '@nestjs/mongoose';

describe('Tool Controller', () => {
  let controller: ToolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToolController],
      providers: [
        {
          provide: ToolService,
          useFactory: () => ({
            findAll: jest.fn(() => [{
              title: 'String',
              link: 'String',
              description: 'String',
              tags: ['String']
            }]),
          }),
        },]
    }).compile();

    controller = module.get<ToolController>(ToolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of cats', async () => {
    const result = [{
      title: 'String',
      link: 'String',
      description: 'String',
      tags: ['String']
    }];
    // jest.spyOn(controller, 'findAll').mockImplementation(() => result);

    expect(await controller.findAll('')).toStrictEqual(result);
  });
});

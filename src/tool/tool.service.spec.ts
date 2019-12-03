import { Test, TestingModule } from '@nestjs/testing';
import { ToolService } from './tool.service';
import { getModelToken } from '@nestjs/mongoose';

describe('ToolService', () => {
  let service: ToolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToolService,
        {
          provide: getModelToken('Tool'),
          useValue: [],
        },
      ],
    }).compile();

    service = module.get<ToolService>(ToolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});




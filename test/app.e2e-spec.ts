import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        "name": "api-bossabox",
        "version": "1.0.0",
        "description": "API para o desafio de desenvolvedor backend para a Bossabox.",
        "author": "nelson.npl@gmail.com",
        "license": "MIT"
      });
  });
});

describe('ToolController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tool (GET)', () => {
    return request(app.getHttpServer())
      .get('/tool')
      .expect(200);
  });
});

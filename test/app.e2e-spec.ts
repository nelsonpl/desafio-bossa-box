import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { api } from '../src/api';

let accessToken = '';
const user = { username: 'user-test', password: 'user-test' };

describe('AuthController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/login')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((res) => {
        accessToken = res.body.access_token;
      });
  });

});

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
      .expect(api);
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

  it('/tool (POST)', () => {
    return request(app.getHttpServer())
      .post('/tool')
      .send({ title: 'titulo', description: 'descricao', link: 'link', tag: ['tag'] })
      .expect(401);
  });

  it('/tool (GET) (401)', () => {
    return request(app.getHttpServer())
      .get('/tool')
      .expect(401);
  });
});

describe('UserController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (GET) (401)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(401)
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .auth(accessToken, { type: "bearer" })
      .expect(200)
  });

  it('/user (DEL)', () => {
    return request(app.getHttpServer())
      .del('/user')
      .auth(accessToken, { type: "bearer" })
      .expect(200)
  });

});

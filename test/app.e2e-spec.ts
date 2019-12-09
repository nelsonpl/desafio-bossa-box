import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { api } from '../src/api';

let accessToken = '';
let user = { username: "user-test", password: "user-test" };

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

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((res) => {
        accessToken = res.body.access_token;
      });
  });

  it('/profile (GET) (401)', () => {
    return request(app.getHttpServer())
      .get('/profile')
      .expect(401)
  });

  it('/profile (GET)', () => {
    return request(app.getHttpServer())
      .get('/profile')
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

describe('ToolController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tool (GET) (401)', () => {
    return request(app.getHttpServer())
      .get('/tool')
      .expect(401);
  });
});

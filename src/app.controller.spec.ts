import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { api } from './api';
import { AuthModule } from './auth/auth.module';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/user.model';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const userService = new UserService(null);
    const appService = new AppService();
    const authService = new AuthService(userService, null);
    appController = new AppController(appService, authService);

  });

  describe('root', () => {
    it('should return "Desafio BossaBox - Dev. Back-End - 1.0.0"', () => {
      expect(appController.getStatus()).toBe(api);
    });
  });
});

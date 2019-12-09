import { Controller, UseGuards, Request, Delete, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly authService: AuthService) { }

  @Delete()
  async delete(@Request() req) {
    return this.authService.delete(req.user);
  }

  @Get()
  get(@Request() req) {
    return req.user;
  }
}

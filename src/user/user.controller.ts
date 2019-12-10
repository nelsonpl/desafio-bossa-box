import { Controller, UseGuards, Request, Delete, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Delete()
  async delete(@Request() req) {
    return this.userService.delete(req.user);
  }

  @Get()
  get(@Request() req) {
    return req.user;
  }
}

import { Controller, UseGuards, Post, Body, Session } from '@nestjs/common';
import { LoginUserDto } from 'src/users/decorators/dtos/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { UserDto } from 'src/users/decorators/dtos/user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('auth2')
@Serialize(UserDto)
export class AuthController {

    constructor(
        private usersService: UsersService,
        private authService: AuthService,) {}


}

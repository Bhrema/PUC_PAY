import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  NotFoundException,
  Session,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from '../auth/auth.service';
import { User } from './user.entity';
import { LoginUserDto } from './dtos/login-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
    return session.userId
  }
  

  @Post('/signin')
    async signin(@Body() body: LoginUserDto) {
        const user = await this.authService.signin(body.email, body.password);
        return user;
    }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    const user = await this.authService.signup(body.email, body.name, body.cpf, body.cnpj, body.block, body.image, body.password);
    return user;
  }


  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Get('/adm/users')
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.findUsersWithCpf()
  }

  @Get('/adm/restaurants')
  async getUsersWithCnpj(): Promise<User[]> {
    return this.usersService.findUsersWithCnpj();
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  @UseInterceptors(FileInterceptor('image', { dest: './uploads' }))
  updateUser(@UploadedFile('image') image: Express.Multer.File, @Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}

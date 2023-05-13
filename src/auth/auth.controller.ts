import { Controller, UseGuards, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    
    @Post('login')
    async login(){
    }
}

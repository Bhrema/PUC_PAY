import { IsEmail, IsString, IsBoolean, IsOptional} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  password: string;
}

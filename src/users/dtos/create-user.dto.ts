import { IsEmail, IsString, IsOptional, IsNotEmpty} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  cpf: string;

  @IsOptional()
  @IsString()
  cnpj: string;

  @IsOptional()
  @IsString()
  block: string;
  
  @IsString()
  @IsNotEmpty()
  password: string;
}

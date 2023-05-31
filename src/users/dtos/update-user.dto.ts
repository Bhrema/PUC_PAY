import { IsEmail, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsBoolean()
  @IsOptional()
  isAdmin: boolean;

  @IsString()
  @IsOptional()
  block: string;

  @IsString()
  @IsOptional()
  cpf: string;

  @IsString()
  @IsOptional()
  cnpj: string;

  @IsString()
  @IsOptional()
  image: string;
}

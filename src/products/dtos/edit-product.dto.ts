import { IsOptional, IsString, IsBoolean } from "class-validator";

export class UpdateProductDto {
    @IsString()
    @IsOptional()
    name: string;
  
    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    price: string;
    
    @IsString()
    @IsOptional()
    image: string;
  }
  
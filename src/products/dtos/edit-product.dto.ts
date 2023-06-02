import { IsOptional, IsString, IsBoolean, IsNumber } from "class-validator";

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

    @IsNumber()
    @IsOptional()
    quantity: number
  }
  
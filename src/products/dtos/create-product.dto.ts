import {IsString, IsNotEmpty, IsNumber} from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    price: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    restaurant_id: number;
}
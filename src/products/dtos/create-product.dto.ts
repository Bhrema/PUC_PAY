import {IsString, IsNotEmpty, IsNumber} from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString({message: 'preço precisa ser string'})
    @IsNotEmpty()
    price: string;

    @IsNumber()
    restaurant_id: number;
}
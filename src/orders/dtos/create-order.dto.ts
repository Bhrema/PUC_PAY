import { IsNumber } from "class-validator";
import { Product } from "src/products/products.entity";


export class CreateOrderDto{
    @IsNumber()
    id: number

    products: Product[]
}
import { IsNumber, IsArray } from "class-validator";
import { cartProductDto } from "src/products/dtos/cart-product.dto";

export class CreateOrderDto {
  @IsNumber()
  compradorId: number;

  @IsArray()
  produtos: cartProductDto[];
}
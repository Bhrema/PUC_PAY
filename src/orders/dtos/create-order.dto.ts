import { IsNumber, IsArray } from "class-validator";
import { cartProduct } from "src/products/dtos/cart-product.dto";

export class CreateOrderDto {
  @IsNumber()
  compradorId: number;

  @IsArray()
  produtos: cartProduct[];
}
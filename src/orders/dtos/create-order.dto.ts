import { cartProduct } from "src/products/dtos/cart-product.dto";

export class CreateOrderDto {
  compradorId: number;
  produtos: cartProduct[];
}
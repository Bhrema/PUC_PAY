import { IsNumber } from "class-validator";

export class CartItemDto {
    @IsNumber()
    productId: number;
    
    @IsNumber()
    idComprador: number;
  }
import { Body, Controller, Post, Session } from '@nestjs/common';
import { CartItemDto } from './dtos/create-order.dto';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';
import { Product } from 'src/products/products.entity';

@Controller('order')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

  // @Post()
  // async createOrder(@Body() cartItems: CartItemDto[]): Promise<any> {
  //   const order = new tb_order();
  //   order.idComprador = cartItems[0].idComprador; 

  //   const products = [];

  //   for (const cartItem of cartItems) {
  //     const product = new Product();
  //     product.id = cartItem.productId;
  //     products.push(product);
  //   }

  //   order.products = products;

  //   const createdOrder = await this.ordersService.createOrder(order);
  //   return createdOrder;
  // }
}

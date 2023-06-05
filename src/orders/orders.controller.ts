import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('order')
export class OrdersController {
  constructor(private ordersService: OrdersService) { }

  @Post()
  async createOrderProducts(@Body() body: any) {
    const { produtos } = body;
    const products = produtos.map((produto: any) => {
      const { id, quantity, idComprador } = produto;
      return { id, quantity, idComprador };
    });
    console.log(products)

    const createdProducts = await this.ordersService.createOrderProducts(products);
    console.log(createdProducts);
  }

  @Get()
  findAllOrders(){
    return this.ordersService.getAllOrders()
  }

}

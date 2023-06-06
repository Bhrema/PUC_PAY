import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('order')
export class OrdersController {
  constructor(private ordersService: OrdersService) { }

  @Post()
  async createOrderProducts(@Body() body: any) {
    const { produtos } = body;
    const products = produtos.map((produto: any) => {
      const { id, quantity } = produto;
      return { id, quantity };
    });
    console.log(body)

    const createdProducts = await this.ordersService.createOrderProducts(body.idComprador, products);
    console.log(createdProducts);
  }

  @Get('/:id')
  findUserOrdersProducts(@Param('id') id: string){
    return this.ordersService.getAllUserOrders(parseInt(id))
  }
}

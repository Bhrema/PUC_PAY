import { Body, Controller, Post} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('order')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

    @Post()
    async getCartProducts(@Body() body: any) {
      const { produtos } = body
      const filteredProducts = produtos.map(product => {
        const { id, quantity, idComprador } = product;
        return { id, quantity, idComprador };
      });
      console.log(filteredProducts)
    }
}

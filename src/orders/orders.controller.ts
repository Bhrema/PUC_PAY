import { Body, Controller, Post} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';


@Controller('order')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

    @Post()
    async createOrder(@Body() body: CreateOrderDto) {
      return body
    }
}

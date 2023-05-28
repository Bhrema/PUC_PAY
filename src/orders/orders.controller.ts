import { Controller, Post, Session } from '@nestjs/common';
import { Product } from 'src/products/products.entity';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(){}
  }


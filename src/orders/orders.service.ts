import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/products/products.entity';
import { orderProduct } from './pedido-produto.entity';
import { cartProduct } from 'src/products/dtos/cart-product.dto';
import { create } from 'domain';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepo: Repository<Order>,
        @InjectRepository(Product)
        private produtoRepo: Repository<Product>,
        @InjectRepository(orderProduct)
        private orderProductRepo: Repository<orderProduct>,
    ) {}

    
}

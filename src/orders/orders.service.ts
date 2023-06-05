import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/products/products.entity';
import { orderProduct } from './pedido-produto.entity';

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

    // async saveProducts(id: number, quantity: number){
    //     const order = this.orderProductRepo.create({ id, quantity })
    //     return this.orderProductRepo.save(order)
    // }
}

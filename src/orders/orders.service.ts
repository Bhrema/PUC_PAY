import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>
    ) { }

    async createOrder(pedido: Order): Promise<Order> {
        const createdPedido = await this.orderRepository.save(pedido);
        return createdPedido;
    }
}

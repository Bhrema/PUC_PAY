import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tb_order } from './order.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(tb_order)
        private orderRepository: Repository<tb_order>
    ) { }

    async createOrder(pedido: tb_order): Promise<tb_order> {
        const createdPedido = await this.orderRepository.save(pedido);
        return createdPedido;
    }
}

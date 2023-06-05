import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';
import { orderProduct } from './pedido-produto.entity';
import { Product } from 'src/products/products.entity';
import { User } from 'src/users/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Order, Product, orderProduct, User])],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrdersModule {}

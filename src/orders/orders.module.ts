import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { tb_order } from './order.entity';

@Module({
    imports: [TypeOrmModule.forFeature([tb_order])],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrdersModule {}

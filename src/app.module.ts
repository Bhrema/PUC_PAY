import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/products.entity';
import { MulterModule } from '@nestjs/platform-express';
import { UserEntity } from './users/usertype.entity';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { tb_ticket } from './orders/ticket.entity';
import { tb_order } from './orders/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bd.sqlite',
      entities: [User, Product, UserEntity, tb_ticket, tb_order],
      synchronize: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    UsersModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController, OrdersController],
  providers: [AppService, OrdersService],
})

export class AppModule {}

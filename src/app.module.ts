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
import { diskStorage } from 'multer';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bd.sqlite',
      entities: [User, Product, UserEntity],
      synchronize: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

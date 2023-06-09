import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/products/products.entity';
import { OrderProduct } from './pedido-produto.entity';
import { CreateOrderProductDto } from './dtos/create-order.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
    @InjectRepository(Product)
    private produtoRepo: Repository<Product>,
    @InjectRepository(OrderProduct)
    private orderProductRepo: Repository<OrderProduct>,
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) { }

  async createOrderProducts(idComprador: number, orderProducts: CreateOrderProductDto[]): Promise<OrderProduct[]> {
    const order = new Order();
    order.pendente = true;
    order.idComprador = idComprador;
    const createdOrder = await this.orderRepo.save(order);
    console.log(createdOrder.id);
  
    const createdOrderProducts: OrderProduct[] = [];
    for (const productDto of orderProducts) {
      const product = new OrderProduct();
      product.idProduto = productDto.id;
      product.quantity = productDto.quantity;
      product.idOrder = createdOrder.id;
      console.log(product);
  
      const createdProduct = await this.orderProductRepo.save(product);
      createdOrderProducts.push(createdProduct);
    }
  
    return createdOrderProducts;
  }

  async getUserOrdersProducts(id: number): Promise<OrderProduct[]> {
    return this.orderProductRepo.createQueryBuilder('orderProduct')
      .where('orderProduct.idComprador = :id', { id })
      .getMany()
  }
  
  async getAllUserOrders(idComprador: number): Promise<Order[]> {
    const userOrders = await this.orderRepo.find({
      where: { idComprador },
      relations: ['orderProducts', 'orderProducts.product'],
    });
    return userOrders;
  }
}

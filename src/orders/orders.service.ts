import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/products/products.entity';
import { orderProduct } from './pedido-produto.entity';
import { CreateOrderProductDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
    @InjectRepository(Product)
    private produtoRepo: Repository<Product>,
    @InjectRepository(orderProduct)
    private orderProductRepo: Repository<orderProduct>,
  ) { }

  async createOrderProducts(idComprador: number, orderProducts: CreateOrderProductDto[]): Promise<orderProduct[]> {
    const order = new Order();
    order.pendente = true;
    order.idComprador = idComprador;
    const createdOrder = await this.orderRepo.save(order);
    console.log(createdOrder.id);
  
    const createdOrderProducts: orderProduct[] = [];
    for (const productDto of orderProducts) {
      const product = new orderProduct();
      product.idProduto = productDto.id;
      product.quantity = productDto.quantity;
      product.idOrder = createdOrder.id;
      console.log(product);
  
      const createdProduct = await this.orderProductRepo.save(product);
      createdOrderProducts.push(createdProduct);
    }
  
    return createdOrderProducts;
  }

  async getUserOrdersProducts(id: number): Promise<orderProduct[]> {
    return this.orderProductRepo.createQueryBuilder('orderProduct')
      .where('orderProduct.idComprador = :id', { id })
      .getMany()
  }
  
  async getAllUserOrders(idComprador: number): Promise<Order[]> {
    const userOrder = 
      this.orderRepo.find({
      where: { idComprador },
      relations: ['orderProducts']
    });

    return userOrder
  }
}

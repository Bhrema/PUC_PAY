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

    async criarPedido(compradorId: number, produtos: cartProduct[]): Promise<Order> {
        const order = new Order();

        const products: Product[] = [];

        for (const produtoData of produtos) {
            const product = new Product();
            product.id = produtoData.id;
            product.name = produtoData.name;
            product.price = produtoData.price;
            product.image = produtoData.image;
            product.restaurant_id = produtoData.idComprador;
          
            products.push(product);
          }

        order.products = products;
        order.comprador_id = compradorId;

        const createdOrder = await this.orderRepo.save(order);

        const tbOrderProduct = new orderProduct();
        tbOrderProduct.orders = []; 
        tbOrderProduct.orders.push(createdOrder);
        tbOrderProduct.produtos = []; 
        tbOrderProduct.produtos.push(...products);

        await this.orderProductRepo.save(tbOrderProduct);

        return createdOrder;
    }
}

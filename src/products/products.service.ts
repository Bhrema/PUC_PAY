import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
      ) {}

    async create(name: string, description: string, image: string, restaurant_id: number) {
        const product = this.productRepository.create({name, description, image, restaurant_id})
        return this.productRepository.save(product)
    }
}

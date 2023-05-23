import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { createWriteStream } from 'fs';
import { Express } from 'express';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    async create(name: string, description: string, image: string, price:string, restaurant_id: number) {
        const products = await this.productRepository.find({ name })

        if (products.length) {
            throw new BadRequestException('Produto já cadastrado na base de dados');
        }

        const product = this.productRepository.create({ name, description, image, price, restaurant_id })
        return this.productRepository.save(product)
    }

    findAll() {
        return this.productRepository.find()
    }

    find(name: string) {
        return this.productRepository.find({ name });
    }

    findOne(id: number) {
        if (!id) {
            return null;
        }
        return this.productRepository.findOne(id);
    }

    async findProductsWithIdRestaurant(idRes: number): Promise<Product[]> {
        return this.productRepository.createQueryBuilder('product')
          .where('restaurant_id = :idRes', { idRes })
          .getMany();
      }

    async remove(id: number) {
        const product = await this.findOne(id);
        if (!product) {
            throw new NotFoundException('user not found');
        }
        return this.productRepository.remove(product);
    }

    async update(id: number, attrs: Partial<Product>) {
        const product = await this.findOne(id);
        if (!product) {
            throw new NotFoundException('user not found');
        }
        Object.assign(product, attrs);
        return this.productRepository.save(product);
    }
}

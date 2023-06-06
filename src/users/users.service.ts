import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { orderProduct } from 'src/orders/pedido-produto.entity';
import { Product } from 'src/products/products.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>,
              @InjectRepository(orderProduct) private repoOrder: Repository<orderProduct>,
              @InjectRepository(Product) private repoProduct: Repository<Product>
  ) {}

  create(email: string, name:string, cpf: string, cnpj: string, block: string, image: string, password: string) {
    const user = this.repo.create({ email, name, cpf, cnpj, block, image, password });

    return this.repo.save(user);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne(id);
  }


  find(email: string) {
    return this.repo.find({ email });
  }
  
  createQueryBuilder(cpf: string) {
    return this.repo.find({ cpf })
  }

  async findUsersWithCpf(): Promise<User[]> {
    return this.repo.createQueryBuilder('user')
      .where('user.cpf IS NOT NULL')
      .andWhere('user.cpf <> ""')
      .getMany();
  }

 
  async findUsersWithCnpj(): Promise<User[]> {
    return this.repo.createQueryBuilder('user')
      .where('user.cnpj IS NOT NULL')
      .andWhere('user.cnpj <> ""')
      .getMany();
  }

  async findAll(): Promise<User[]> {
    return await this.repo.createQueryBuilder('user').getMany();
  }

  async update(user: User): Promise<User> {
    const updatedUser = await this.repo.save(user)
    return updatedUser;
  }

  async remove(id: number): Promise<void> {
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.repoProduct.delete({ restaurant_id: id })
    await this.repoOrder.delete({ idComprador: id });
    await this.repo.delete(id);
  }

}

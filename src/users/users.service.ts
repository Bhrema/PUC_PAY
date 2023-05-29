import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

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

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}

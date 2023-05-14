import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

import { Product } from 'src/products/products.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({ nullable: true, default: null })
  cpf: string;

  @Column({ nullable: true, default: null })
  cnpj: string;

  @Column({ nullable: true, default: null })
  block: string;

  @Column()
  password: string;

  @OneToMany(() => Product, product => product.restaurant)
  products: Product[];

  @Column( { default: false } )
  isAdmin: boolean;
  
  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}

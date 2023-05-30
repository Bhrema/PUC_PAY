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
import { tb_order } from 'src/orders/order.entity';

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
  
  @Column({ nullable: true, default: null })
  image: string;

  @Column()
  password: string;

  @OneToMany(() => Product, product => product.restaurant_id)
  products: Product[]

  @Column( { default: false } )
  isAdmin: boolean;

  @OneToMany(() => tb_order, (order) => order.idComprador)
  orders: tb_order[]
  
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

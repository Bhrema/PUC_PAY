import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany
} from 'typeorm';

import { Product } from 'src/products/products.entity';
import { Order } from 'src/orders/order.entity';
import { OrderProduct } from 'src/orders/pedido-produto.entity';

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

  @Column( { default: 0 } )
  balance: number;

  @Column()
  password: string;

  @Column( { default: false } )
  isAdmin: boolean;
  
  @OneToMany(() => Product, product => product.restaurant_id)
  products: Product[]

  @OneToMany(() => Order, order => order.user)
  order: Order[];

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

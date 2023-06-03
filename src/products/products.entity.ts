import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Order } from 'src/orders/order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  image: string;

  @ManyToOne(() => User, user => user.products)
  @JoinColumn({ name: "restaurant_id", referencedColumnName: "id" })
  restaurant_id: number;

  @ManyToMany(() => Order, (order) => order.produto)
  orders: Order[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted Product with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Product with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Product with id', this.id);
  }
}
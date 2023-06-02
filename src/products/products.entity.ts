import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
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

    @Column()
    quantity: number

    @ManyToOne(() => User, user => user.products)
    @JoinColumn({ name: "restaurant_id", referencedColumnName: "id"})
    restaurant_id: number;

    @ManyToMany(() => Order, (order) => order.produto)
    orders: Order[];
}
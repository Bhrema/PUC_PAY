import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { tb_order } from 'src/orders/order.entity';

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
    @JoinColumn({ name: "restaurant_id", referencedColumnName: "id"})
    restaurant_id: number;

    @ManyToMany(() => tb_order, order => order.products)
    orders: tb_order[];
}
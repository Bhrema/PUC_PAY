import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, Column } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "src/products/products.entity";

@Entity()
export class orderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column()
  quantity: number

  @ManyToMany(() => Product, product => product.id)
  product: number

  @ManyToMany(() => Order, order => order.id)
  order: number;
}
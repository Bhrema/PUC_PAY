import { Product } from "src/products/products.entity";
import { User } from "src/users/user.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, Column, PrimaryColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class orderProduct {
  @PrimaryColumn()
  idOrder: number;

  @Column()
  idProduto: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Order, order => order.orderProducts)
  @JoinColumn({ name: "idOrder", referencedColumnName: "id" })
  order: Order;

  @ManyToOne(() => Product, product => product.orderProducts)
  @JoinColumn({ name: "idProduto", referencedColumnName: "id" })
  product: Product;
}
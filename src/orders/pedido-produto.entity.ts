import { Product } from "src/products/products.entity";
import { User } from "src/users/user.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, Column, PrimaryColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class orderProduct {
  @PrimaryColumn()
  @ManyToOne(() => Product, product => product.orderProducts)
  @JoinColumn({ name: "idProduto", referencedColumnName: "id" })
  idProduto: number;

  @PrimaryColumn()
  @ManyToOne(() => Order, order => order.orderProducts)
  @JoinColumn({ name: "idOrder", referencedColumnName: "id" })
  idOrder: number
  
  @Column()
  quantity: number;
}
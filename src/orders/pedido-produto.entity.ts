import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "src/products/products.entity";

@Entity()
export class orderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Order, order => order.products)
  @JoinTable({
    joinColumns: [{ name: 'idProduto' }],
    inverseJoinColumns: [{ name: 'idPedido' }],
  })
  orders: Order[];

  @ManyToMany(() => Product, product => product.orders)
  @JoinTable({
    joinColumns: [{ name: 'idPedido' }],
    inverseJoinColumns: [{ name: 'idProduto' }],
  })
  produtos: Product[];
}
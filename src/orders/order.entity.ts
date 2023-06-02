import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/user.entity";
import { orderProduct } from "./pedido-produto.entity";


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => orderProduct, orderproduct => orderproduct.id)
    produto: number;

    @Column()
    comprador_id: number;

    @ManyToOne(() => User, (user) => user.orders)
    idRestaurante: number;
}
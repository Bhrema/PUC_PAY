import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/user.entity";
import { orderProduct } from "./pedido-produto.entity";


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => orderProduct, orderproduct => orderproduct.id)
    produtos: orderProduct[];

    @Column()
    comprador_id: number;

    @ManyToOne(() => User, (user) => user.orders)
    idRestaurante: number;

    @AfterInsert()
    logInsert() {
        console.log('Inserted Order with id', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated Order with id', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed Order with id', this.id);
    }
}
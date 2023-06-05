import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { orderProduct } from "./pedido-produto.entity";
import { User } from "src/users/user.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => orderProduct, orderproduct => orderproduct.idOrder)
    orderProducts: orderProduct[];

    @ManyToOne(() => User, user => user.orders)
    comprador_id: number;

    @Column()
    pendente: boolean;

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
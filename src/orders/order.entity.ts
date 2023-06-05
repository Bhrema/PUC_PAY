import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { orderProduct } from "./pedido-produto.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => orderProduct, orderproduct => orderproduct.idOrder)
    orderProducts: orderProduct[];

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
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { orderProduct } from "./pedido-produto.entity";
import { User } from "src/users/user.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => orderProduct, orderproduct => orderproduct.order)
    orderProducts: orderProduct[];

    @Column()
    idComprador: number

    @Column()
    pendente: boolean;

    @ManyToOne(() => User, user => user.order)
    @JoinColumn({ name: "idComprador", referencedColumnName: "id" })
    user: User;
    
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
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { tb_ticket } from "./ticket.entity";
import { User } from "src/users/user.entity";


@Entity()
export class tb_order{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => tb_ticket)
    @JoinColumn()
    ticket: tb_ticket

    @ManyToOne(() => User, (user) => user.orders)
    restaurant: User

    @ManyToOne(() => User, (user) => user.orders)
    buyer: User
}
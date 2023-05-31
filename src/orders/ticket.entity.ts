import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
}
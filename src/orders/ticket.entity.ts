import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tb_ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
}
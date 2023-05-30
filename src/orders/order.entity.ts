import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/user.entity";
import { Product } from "src/products/products.entity";


@Entity()
export class tb_order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idProduto: number

    @ManyToOne(() => User, (user) => user.orders)
    restaurant: number

    @ManyToOne(() => User, (user) => user.orders)
    idComprador: number

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
}
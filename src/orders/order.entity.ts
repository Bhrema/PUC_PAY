import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/user.entity";
import { Product } from "src/products/products.entity";


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: "comprador_id", referencedColumnName: "id" })
    comprador_id: User;

    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: "idRestaurante", referencedColumnName: "id" })
    idRestaurante: User;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
}
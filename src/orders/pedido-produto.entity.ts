import { Column } from "typeorm";

export class pedidoProduto {
    @Column()
    idPedido: number

    @Column()
    idProduto: number
}
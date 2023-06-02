import { Expose } from "class-transformer"

export class cartProduct {
    @Expose()
    id: number

    @Expose()
    name: string

    @Expose()
    price: string

    @Expose()
    image: string

    @Expose()
    quantity: number

    @Expose()
    idComprador: number
}
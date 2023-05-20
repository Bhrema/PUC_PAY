import { Expose } from "class-transformer";

export class ProductDto {
    @Expose()
    id: number

    @Expose()
    name: string

    @Expose()
    description: string

    @Expose()
    image: string

    @Expose()
    restaurant_id: number
}
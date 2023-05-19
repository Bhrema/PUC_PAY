import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    async createProduct(@Body() body: ProductDto){
        const product = await this.productsService.create(body.name, body.description, body.image, body.restaurant_id)
        return product;
    }
}

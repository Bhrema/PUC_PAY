import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    @UseInterceptors(FilesInterceptor('image'))
    uploadFile(@UploadedFile() file){
        console.log(file)
    }
}

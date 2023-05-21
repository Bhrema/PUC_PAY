import { Body, Controller, Post, Get, Param, NotFoundException, Delete, Patch, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/edit-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get('/:id')
    async findProduct(@Param('id') id: string){
        const product = await this.productsService.findOne(parseInt(id))
        if (!product) {
            throw new NotFoundException('product not found');
          }
          return product;
    }

    @Post()
    async createProduct(@Body() body: CreateProductDto){
        const product = await this.productsService.create(body.name, body.description, body.image, body.price, body.restaurant_id)
        return product;
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
}   

    @Get()
    async findAllProducts(){
        return this.productsService.findAll()
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
    return this.productsService.remove(parseInt(id));
  }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateProductDto) {
        return this.productsService.update(parseInt(id), body);
    }
}

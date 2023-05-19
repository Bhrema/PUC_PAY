import { IsEmail, IsString, IsOptional, IsNotEmpty} from 'class-validator';
import { User } from 'src/users/user.entity';

export class ProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    restaurant_id: number;
}
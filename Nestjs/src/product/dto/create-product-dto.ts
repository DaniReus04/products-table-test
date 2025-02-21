import { IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  price: number;

  @IsString()
  categoryIds: string[];

  @IsString()
  imageUrl: string;
}

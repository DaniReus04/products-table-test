import { IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  date: Date;

  @IsString()
  productIds: string[];

  @IsString()
  total: number;
}

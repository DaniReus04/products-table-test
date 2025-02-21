import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI is not defined in the enviroment variables.');
}
@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    ProductModule,
    CategoryModule,
    OrderModule,
  ],
})
export class AppModule {}

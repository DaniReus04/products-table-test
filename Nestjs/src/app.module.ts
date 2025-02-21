import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI is not defined in the enviroment variables.');
}
@Module({
  imports: [MongooseModule.forRoot(mongoUri)],
})
export class AppModule {}

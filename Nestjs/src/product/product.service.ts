/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product-dto';
import * as AWS from 'aws-sdk';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private s3: AWS.S3,
  ) {
    this.s3 = new AWS.S3({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async create(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = new this.productModel(createProductDTO);
    return newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async update(
    id: string,
    updateProductDTO: CreateProductDTO,
  ): Promise<Product | null> {
    return this.productModel
      .findByIdAndUpdate(id, updateProductDTO, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Product | null> {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    const bucketName = process.env.AWS_S3_BUCKET_NAME;

    if (!bucketName) {
      throw new Error('S3 bucket name is not defined in environment variables');
    }

    const params = {
      Bucket: bucketName,
      Key: `product-images/${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const data = await this.s3.upload(params).promise();
    return data.Location;
  }
}

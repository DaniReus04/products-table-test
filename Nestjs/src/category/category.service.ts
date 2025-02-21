import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './category.entity';
import { Model } from 'mongoose';
import { CreateCategoryDTO } from './dto/create-category-dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async create(CreateCategoryDTO: CreateCategoryDTO): Promise<Category> {
    const newProduct = new this.categoryModel(CreateCategoryDTO);
    return newProduct.save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category | null> {
    return this.categoryModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCategoryDTO: CreateCategoryDTO,
  ): Promise<Category | null> {
    return this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDTO, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Category | null> {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }
}

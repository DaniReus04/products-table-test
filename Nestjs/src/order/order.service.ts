import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.entity';
import { CreateOrderDTO } from './dto/create-order-dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  async create(CreateOrderDTO: CreateOrderDTO): Promise<Order> {
    const newOrder = new this.orderModel(CreateOrderDTO);
    return newOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order | null> {
    return this.orderModel.findById(id).exec();
  }

  async update(
    id: string,
    updateOrderDTO: CreateOrderDTO,
  ): Promise<Order | null> {
    return this.orderModel
      .findByIdAndUpdate(id, updateOrderDTO, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Order | null> {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}

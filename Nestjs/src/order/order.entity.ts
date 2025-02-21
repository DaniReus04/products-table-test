import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  date: Date,
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  total: Number,
});

export interface Order {
  id: string;
  date: Date;
  categoryIds: string[];
  total: number;
}

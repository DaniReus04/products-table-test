import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  imageUrl: String,
});

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryIds: string[];
  imageUrl: string;
}

export interface Order {
  id: string;
  date: Date;
  productIds: string[];
  total: number;
}

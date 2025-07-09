export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  price: number;
  quantity?: number;
  productModel: string;
  stock: boolean;
  totalReviews?: number;
  averageRating?: number;
  category: string;
  imageURL: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartItem {
  product: IProduct;
  quantity: number;
}
export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  quantity: string;
  dealerPrice?: number | null;
  mrp?: number | null;
  inStock: boolean;
  statusText?: string;
  image: string;
  description?: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  image: string;
  productCount: number;
}

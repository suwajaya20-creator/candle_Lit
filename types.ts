
export interface Product {
  id: string;
  name: string;
  category: 'Scented' | 'Luxury' | 'Artistic' | 'Seasonal' | 'Gift Set';
  price: number;
  description: string;
  image: string;
  details: string[];
  bestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

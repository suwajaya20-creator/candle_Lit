import { Product } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Midnight Jasmine',
    category: 'Scented',
    price: 32.00,
    description: 'A deep, floral embrace of blooming jasmine under the moonlight.',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
    details: ['100% Soy Wax', 'Hand-poured', '50 hours burn time'],
    bestSeller: true
  },
  {
    id: '2',
    name: 'Golden Oud',
    category: 'Luxury',
    price: 58.00,
    description: 'Rare oud wood infused with amber and gold leaf flakes for the ultimate decadence.',
    image: 'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=800',
    details: ['Premium Fragrance Oils', 'Gold Leaf Accents', 'Luxury Glass Vessel'],
    bestSeller: true
  },
  {
    id: '3',
    name: 'Love',
    category: 'Scented',
    price: 45.00,
    description: 'A passionate and romantic blend of fresh crimson roses and soft velvet petals. Designed to ignite the heart.',
    image: 'https://images.unsplash.com/photo-1572726729207-a78d6ff17d7f?auto=format&fit=crop&q=80&w=800',
    details: ['Rose Essential Oils', 'Crimson Soy Wax', 'Romantic Ambiance']
  },
  {
    id: '4',
    name: 'Winter Pine',
    category: 'Seasonal',
    price: 36.00,
    description: 'The crisp scent of a snow-covered forest captured in a festive glass vessel.',
    image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&q=80&w=800',
    details: ['Limited Edition', 'Eco-friendly Wick', 'Festive Packaging']
  },
  {
    id: '5',
    name: 'Serenity Box',
    category: 'Gift Set',
    price: 85.00,
    description: 'A curated collection of three mini candles designed for deep relaxation.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
    details: ['Set of 3', 'Gift Wrapped', 'Custom Message Included']
  },
  {
    id: '6',
    name: 'Sandalwood Mist',
    category: 'Scented',
    price: 34.00,
    description: 'Warm, earthy sandalwood notes that bring grounding energy to any room.',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=800',
    details: ['Essential Oils', 'Smokeless Burn', 'Reusable Vessel'],
    bestSeller: true
  }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Gifting', path: '/gifting' },
  { name: 'Contact', path: '/contact' }
];

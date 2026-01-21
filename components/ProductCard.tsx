
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.bestSeller && (
            <span className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] uppercase tracking-widest shadow-sm">
              Bestseller
            </span>
          )}
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
             <button className="w-full bg-white py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-colors duration-300">
               View Details
             </button>
          </div>
        </div>
      </Link>
      <div className="mt-6 text-center">
        <h3 className="text-lg serif tracking-wide group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
        <p className="text-stone-400 text-[10px] uppercase tracking-widest mt-1 mb-2">{product.category}</p>
        <p className="text-sm font-light text-stone-700">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

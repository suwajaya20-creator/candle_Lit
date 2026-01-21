
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC<{ onAddToCart: (id: string) => void }> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl serif mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-[#D4AF37] underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    onAddToCart(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="aspect-[3/4] overflow-hidden bg-stone-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex flex-col justify-center">
        <nav className="text-[10px] uppercase tracking-widest text-stone-400 mb-8 space-x-2">
          <Link to="/shop" className="hover:text-stone-900">Shop</Link>
          <span>/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>
        
        <h1 className="text-5xl serif mb-4 leading-tight">{product.name}</h1>
        <p className="text-2xl font-light text-stone-700 mb-8">${product.price.toFixed(2)}</p>
        
        <div className="prose prose-stone mb-10">
          <p className="text-stone-600 leading-relaxed font-light">{product.description}</p>
        </div>

        <ul className="mb-12 space-y-4">
          {product.details.map((detail, idx) => (
            <li key={idx} className="flex items-center text-sm text-stone-500">
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3"></span>
              {detail}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <button 
            onClick={handleAdd}
            className="flex-1 bg-stone-900 text-white py-5 uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] transition-all relative overflow-hidden"
          >
            {added ? 'Added to Bag ✓' : 'Add to Shopping Bag'}
          </button>
          <button className="border border-stone-200 px-6 hover:bg-stone-50 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-100 grid grid-cols-2 gap-8">
           <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Sustainable Choice</h4>
              <p className="text-xs text-stone-400">Natural wax, lead-free cotton wicks, and recyclable glass.</p>
           </div>
           <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Artisan Made</h4>
              <p className="text-xs text-stone-400">Small-batch production ensures the highest aromatic quality.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

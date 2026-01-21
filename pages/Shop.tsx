
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Scented', 'Luxury', 'Artistic', 'Seasonal', 'Gift Set'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-cream min-h-screen pb-24">
      {/* Header */}
      <div className="py-20 bg-stone-100 text-center border-b border-stone-200">
        <h1 className="text-5xl serif mb-4">The Collection</h1>
        <p className="text-stone-500 uppercase tracking-[0.3em] text-[10px]">Find the light that speaks to you</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20 border-b border-stone-100 pb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.3em] pb-2 transition-all duration-300 ${
                activeCategory === cat ? 'text-stone-900 border-b border-stone-900' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 animate-fadeIn">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40">
            <p className="text-stone-400 serif text-2xl italic">No candles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;

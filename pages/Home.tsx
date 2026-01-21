
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { getScentRecommendation } from '../services/gemini';

const Home: React.FC = () => {
  const [mood, setMood] = useState('');
  const [setting, setSetting] = useState('');
  const [recommendation, setRecommendation] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const bestSellers = PRODUCTS.filter(p => p.bestSeller).slice(0, 3);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood || !setting) return;
    setLoading(true);
    const result = await getScentRecommendation(mood, setting);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover filter brightness-[0.85]" 
            alt="Hero background"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl animate-fadeIn">
          <h1 className="text-6xl md:text-8xl serif mb-4 tracking-tight">Illuminate Your Essence</h1>
          <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-10 text-stone-100">Premium Handcrafted Candles</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-white text-stone-900 px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
              Shop Now
            </Link>
            <Link to="/gifting" className="border border-white text-white px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-stone-900 transition-all duration-300">
              Explore Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl serif mb-4">Curated Collections</h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Scented', img: 'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=800', link: '/shop' },
            { title: 'Luxury', img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800', link: '/shop' },
            { title: 'Artistic', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800', link: '/shop' }
          ].map((cat, idx) => (
            <Link key={idx} to={cat.link} className="relative group overflow-hidden block aspect-[4/5] bg-stone-200">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center">
                   <h3 className="text-white text-3xl serif tracking-widest mb-2">{cat.title}</h3>
                   <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] border-b border-white/40 pb-1">Discover</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl serif mb-4">The Bestsellers</h2>
              <p className="text-stone-500 max-w-md font-light">Experience the fragrances that our community loves most. Crafted for presence and peace.</p>
            </div>
            <Link to="/shop" className="hidden md:block text-[10px] uppercase tracking-[0.3em] border-b border-stone-300 pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">View All Products</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gemini AI Scent Matcher */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-6 block">Personalized Ritual</span>
           <h2 className="text-4xl serif mb-8">Find Your Signature Vibe</h2>
           <p className="text-stone-600 mb-12 font-light">Tell our AI sommelier how you're feeling, and we'll suggest the perfect olfactory companion for your space.</p>
           
           <form onSubmit={handleRecommend} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
             <input 
              type="text" 
              placeholder="How are you feeling? (e.g. Joyful, Moody)" 
              className="bg-stone-50 border border-stone-200 px-6 py-4 rounded-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              required
             />
             <input 
              type="text" 
              placeholder="Where are you? (e.g. Home office, Bath)" 
              className="bg-stone-50 border border-stone-200 px-6 py-4 rounded-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              value={setting}
              onChange={(e) => setSetting(e.target.value)}
              required
             />
             <button 
              type="submit" 
              disabled={loading}
              className="md:col-span-2 bg-stone-900 text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] transition-all disabled:opacity-50"
             >
               {loading ? 'Consulting the Oracle...' : 'Get Recommendation'}
             </button>
           </form>

           {recommendation && (
             <div className="p-10 bg-stone-50 border border-stone-200 animate-fadeIn text-left">
                <h4 className="serif text-3xl mb-2 text-[#735F4D]">{recommendation.vibeName}</h4>
                <div className="flex gap-2 mb-4">
                  {recommendation.notes.map((note: string, i: number) => (
                    <span key={i} className="bg-white px-3 py-1 text-[10px] uppercase tracking-widest text-stone-500 border border-stone-100">{note}</span>
                  ))}
                </div>
                <p className="text-stone-600 font-light italic leading-relaxed">"{recommendation.description}"</p>
                <div className="mt-8">
                   <Link to="/shop" className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37] hover:underline">Shop similar scents →</Link>
                </div>
             </div>
           )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative aspect-square bg-stone-100 p-8 overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover rounded-sm shadow-2xl" 
            alt="Craftsmanship"
           />
           <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cream border border-stone-200 p-8 flex items-center justify-center text-center">
              <div>
                <span className="text-4xl serif block">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-500">Vegan Wax</span>
              </div>
           </div>
        </div>
        <div className="order-1 lg:order-2">
           <h2 className="text-5xl serif mb-8 leading-tight">Crafting Moments of Pure Presence.</h2>
           <p className="text-stone-600 mb-6 leading-relaxed">At Candle Lit, we believe that lighting a candle is more than just adding a scent to a room—it's a conscious act of reclaiming your calm. Each vessel is hand-poured in small batches using premium soy wax and botanical oils.</p>
           <p className="text-stone-600 mb-10 leading-relaxed font-light">Our journey began with a simple mission: to create a sanctuary of light. Every wick, every fragrance, and every artistic shape is designed to linger in your memory long after the flame goes out.</p>
           <Link to="/contact" className="inline-block border-b border-stone-900 pb-2 uppercase tracking-[0.3em] text-[10px] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">Read Our Full Story</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

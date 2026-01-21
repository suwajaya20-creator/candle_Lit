
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex flex-col mb-6">
                <span className="text-xl font-bold tracking-widest uppercase serif">Candle Lit</span>
                <span className="text-[10px] tracking-[0.2em] -mt-1 uppercase text-stone-500 font-light">Lit Your Life</span>
              </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Hand-poured luxury candles crafted to elevate your everyday moments into serene rituals.
            </p>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-sm font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-stone-600">
              <li><Link to="/shop" className="hover:text-[#D4AF37] transition-colors">All Collections</Link></li>
              <li><Link to="/gifting" className="hover:text-[#D4AF37] transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="hover:text-[#D4AF37] transition-colors">Bestsellers</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-stone-600">
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Candle Care</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-sm font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-stone-500 mb-4">Join our community for exclusive early access to seasonal launches.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-stone-300 py-2 focus:outline-none focus:border-[#D4AF37] w-full text-sm"
              />
              <button className="ml-4 border-b border-stone-300 py-2 uppercase tracking-widest text-[10px] hover:text-[#D4AF37] transition-colors">Join</button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-stone-400">
          <p>© 2024 Candle Lit. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
            <a href="#" className="hover:text-[#D4AF37]">Pinterest</a>
            <a href="#" className="hover:text-[#D4AF37]">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

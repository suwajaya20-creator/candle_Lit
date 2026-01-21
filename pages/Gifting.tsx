
import React from 'react';
import { Link } from 'react-router-dom';

const Gifting: React.FC = () => {
  const giftOptions = [
    {
      title: 'Personalized Candles',
      desc: 'Add names, dates, or custom messages to our premium glass vessels.',
      img: 'https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Wedding Favors',
      desc: 'Create a signature scent for your big day. Bulk ordering and custom labels available.',
      img: 'https://images.unsplash.com/photo-1522673607200-1648832cee77?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Corporate Gifting',
      desc: 'Sophisticated gifts for clients and teams that embody luxury and thoughtfulness.',
      img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-cream pb-24">
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover filter brightness-50" />
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-6xl serif mb-4">The Art of Giving</h1>
          <p className="text-sm uppercase tracking-[0.4em]">Meaningful gifts, masterfully presented</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {giftOptions.map((opt, i) => (
            <div key={i} className="text-center group">
               <div className="aspect-square overflow-hidden mb-8 bg-stone-100">
                  <img src={opt.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
               <h3 className="text-2xl serif mb-4">{opt.title}</h3>
               <p className="text-stone-500 text-sm font-light leading-relaxed mb-6">{opt.desc}</p>
               <Link to="/contact" className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-stone-300 pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">Enquire Now</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-4xl serif mb-6">Need a Bespoke Creation?</h2>
           <p className="text-stone-600 mb-12 font-light">Whether it's an intimate dinner party or a large-scale event, our artisans work closely with you to design a sensory experience that lingers.</p>
           <button className="bg-stone-900 text-white px-12 py-5 uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] transition-all">
             Contact Gifting Suite
           </button>
        </div>
      </section>
    </div>
  );
};

export default Gifting;

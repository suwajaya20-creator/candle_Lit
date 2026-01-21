
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h1 className="text-5xl serif mb-8">Get in Touch</h1>
          <p className="text-stone-600 mb-12 font-light leading-relaxed">
            Have a question about our scents, shipping, or looking to collaborate? 
            Our concierge team is here to assist you in creating the perfect ambiance.
          </p>

          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] mb-2">Email Us</h4>
              <p className="text-2xl serif">suwajaya20@gmail.com</p>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] mb-2">Visit Our Studio</h4>
              <p className="text-xl serif leading-tight">123 Serenity Lane<br />Haven District, CA 90210</p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] mb-2">Hours</h4>
              <p className="text-stone-500 font-light text-sm">Mon - Fri: 9am - 6pm PST</p>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 p-12 border border-stone-100">
           <h3 className="text-2xl serif mb-8">Send a Message</h3>
           <form className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">Name</label>
                  <input type="text" className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">Email</label>
                  <input type="email" className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
             </div>
             <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">Subject</label>
                <select className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-[#D4AF37] transition-colors">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Wholesale</option>
                  <option>Press</option>
                </select>
             </div>
             <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">Message</label>
                <textarea rows={6} className="w-full bg-white border border-stone-200 p-4 focus:outline-none focus:border-[#D4AF37] transition-colors"></textarea>
             </div>
             <button className="w-full bg-stone-900 text-white py-5 uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] transition-all">
               Send Inquiry
             </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

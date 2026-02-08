import React from 'react';

// Reusable Service Card Component
const ServiceCard = ({ title, image, link }) => (
  <div className="group cursor-pointer overflow-hidden bg-white">
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>
    <div className="py-6 text-center border border-t-0 border-stone-100">
      <h3 className="font-serif text-xl uppercase tracking-widest">{title}</h3>
      <p className="mt-2 text-stone-400 text-sm uppercase tracking-tighter group-hover:text-stone-900 transition-colors">
        View Services &rarr;
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige text-stone-900 font-sans selection:bg-stone-200">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      {/* <div className="bg-stone-900 text-white py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-center px-4">
        Now Serving Pasadena & Silverlake • Open 7 Days A Week
      </div> */}

      {/* 2. STICKY NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-stone-100 px-6 py-4 flex justify-between items-center">
        {/* <div className="text-2xl font-serif font-bold tracking-tighter uppercase">Maison</div> */}
        <img src="/logo.png" alt="Tammy's Nails Logo" className="h-20 w-auto" />
        <ul className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-stone-500">
          <li className="hover:text-stone-900 cursor-pointer">Home</li>
          <li className="hover:text-stone-900 cursor-pointer">Services</li>
          <li className="hover:text-stone-900 cursor-pointer">Gallery</li>
          <li className="hover:text-stone-900 cursor-pointer">Contact</li>
        </ul>
        <a href="tel:+1234567890" className="bg-stone-900 text-white px-6 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-stone-700 transition">
          Call to Book
        </a>
      </nav>

      {/* 3. HERO SECTION */}
      <header className="relative h-[85vh] flex items-center justify-center bg-stone-200 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h2 className="text-sm uppercase tracking-[0.5em] mb-6 text-stone-600 font-semibold">Welcome to Tammy's</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Elevated nail care for your <span className="italic">comfort & style.</span>
          </h1>
{/*           <div className="flex flex-col md:flex-row gap-4 justify-center uppercase text-[11px] font-bold tracking-widest">
            <button className="bg-stone-900 text-white px-10 py-5 hover:bg-stone-800 transition shadow-xl">
              Pasadena Services
            </button>
            <button className="bg-white text-stone-900 px-10 py-5 border border-stone-200 hover:bg-stone-50 transition shadow-xl">
              Silverlake Services
            </button>
          </div> */}
        </div>
      </header>

      {/* 4. SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Our Nail Spa Services</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm leading-relaxed">
            Discover our comprehensive range of nail care services, each designed to provide you with the perfect treatment experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Manicures" 
            image="https://images.unsplash.com/photo-1604654894610-df4906b245ae?auto=format&fit=crop&q=80&w=800" 
          />
          <ServiceCard 
            title="Pedicures" 
            image="https://images.unsplash.com/photo-1519415510271-e62b447595cc?auto=format&fit=crop&q=80&w=800" 
          />
          <ServiceCard 
            title="Extra Services" 
            image="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800" 
          />
          <ServiceCard 
            title="Kids Services" 
            image="https://images.unsplash.com/photo-1522338140262-f46f59120181?auto=format&fit=crop&q=80&w=800" 
          />
        </div>
      </section>

      {/* 5. LOCATION INFO (Footer Pre-section) */}
      <section className="bg-white border-y border-stone-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl">Pasadena</h3>
            <p className="text-stone-500 uppercase tracking-widest text-xs">850 E Green St, Pasadena, CA 91101</p>
            <p className="text-stone-500 font-bold">626-464-7197</p>
            <p className="text-stone-400 text-sm">Mon-Sun: 9AM - 7PM</p>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl">Silverlake</h3>
            <p className="text-stone-500 uppercase tracking-widest text-xs">2474 Glendale, Los Angeles, CA 90039</p>
            <p className="text-stone-500 font-bold">323-522-3333</p>
            <p className="text-stone-400 text-sm">Mon-Sun: 10AM - 7PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
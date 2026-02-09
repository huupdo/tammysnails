import React from 'react';
import PhoneIcon from './components/PhoneIcon';
import MapPinIcon from './components/MapPinIcon';
import ClockIcon from './components/ClockIcon';
import { useRef } from 'react';

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
  const contactRef = useRef(null);
  const galleryRef = useRef(null);
  const servicesRef = useRef(null);

  return (
    <div className="min-h-screen bg-brand-beige text-stone-900 font-sans selection:bg-stone-200">

      {/* 1. TOP ANNOUNCEMENT BAR */}
      {/* <div className="bg-stone-900 text-white py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-center px-4">
        Now Serving Open 7 Days A Week
      </div> */}

      {/* 2. STICKY NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-stone-100 px-6 py-4 flex justify-center items-center relative">
        <div className="flex items-center gap-12">
          <div className="items-center md:flex tracking-widest">
            <img src="/logo.png" alt="Tammy's Nails Logo" className="h-20 w-auto" />
          </div>

          <div className="text-2xl font-bold tracking-tighter text-stone-500"></div>

          <ul className="hidden md:flex gap-8 text-[14px] font-bold uppercase tracking-widest text-stone-500">
            <li className="hover:text-stone-900 cursor-pointer"><button onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
              Home
            </button></li>
            <li className="hover:text-stone-900 cursor-pointer"><button className="btn" onClick={() => {
              servicesRef.current?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
              Services
            </button></li>
            <li className="hover:text-stone-900"><button className="btn" onClick={() => {
              galleryRef.current?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
              Gallery
            </button></li>
            <li className="hover:text-stone-900"><button className="btn" onClick={() => {
              contactRef.current?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
              Contact
            </button></li>
          </ul>
        </div>
        <a href="tel:+15302269462" className="absolute right-6 bg-stone-900 text-white px-6 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-stone-700 transition">
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
      <section ref={servicesRef} className="py-24 px-6 max-w-7xl mx-auto">
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

      {/* 5. Gallery*/}
      <section ref={galleryRef} className="bg-white border-y border-stone-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl">Tammy's Nails</h3>
            <p className="text-stone-500 uppercase tracking-widest text-sm"><MapPinIcon /> 2907 Churn Crk Rd, Redding, CA 96002</p>
            <p className="text-stone-500 text-sm"><PhoneIcon /> (530) 226-9462</p>
            <p className="text-stone-500 text-sm"><ClockIcon /> Mon-Sat: 10AM - 7PM</p>
          </div>
        </div>
      </section>

      {/* 6. LOCATION INFO (Footer Pre-section) */}
      <section ref={contactRef} class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <div class="text-center mb-16">
            <h3 class="font-medium text-2xl text-blue-500 dark:text-blue-400">Contact us</h3>
            <p class="text-gray-800 dark:text-gray-400">Ready to experience a new standard of nail care in our boutique nail salon.
              Book your appointment today</p>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <h3 className="font-serif text-stone-500 text-3xl">Tammy's Nails</h3>
                <p className="text-stone-500 tracking-widest text-sm"><MapPinIcon /> 2907 Churn Crk Rd, Redding, CA 96002</p>
                <p className="text-stone-500 text-sm"><PhoneIcon /> (530) 226-9462</p>
                <p className="text-stone-500 text-sm"><ClockIcon /> Mon-Sat: 10AM - 7PM</p>
              </div>
            </div>

            <div class="overflow-hidden rounded-lg lg:col-span-1 h-96 lg:h-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6061.839582969197!2d-122.35803008412879!3d40.56544847503779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2eca38b3997c5%3A0x74ce7f1f02ba2189!2sTammy&#39;s%20Nails%20-%20Nail%20Salon%20Redding%20CA!5e0!3m2!1sen!2sus!4v1770612118403!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-white dark:bg-gray-900">
        <div class="text-center p-6 mx-auto space-y-4 sm:space-y-0">
          <p class="text-sm text-gray-600 dark:text-gray-300">©2018 Tammy's Nails. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
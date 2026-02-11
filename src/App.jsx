import React from 'react';
import PhoneIcon from './components/PhoneIcon';
import MapPinIcon from './components/MapPinIcon';
import ClockIcon from './components/ClockIcon';
import { useRef, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

// Reusable Service Card Component
const ServiceCard = ({ title, image, link }) => (
  <div className="group cursor-pointer overflow-hidden bg-white">
    <div className="aspect-4/5 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="border border-t-0 border-stone-100 py-6 text-center">
      <h3 className="font-serif text-xl tracking-widest uppercase">{title}</h3>
      <p className="mt-2 text-sm tracking-tighter text-stone-400 uppercase transition-colors group-hover:text-stone-900">
        View Services &rarr;
      </p>
    </div>
  </div>
);

export default function App() {
  const contactRef = useRef(null);
  const galleryRef = useRef(null);
  const servicesRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      {/* <div className="bg-stone-900 text-white py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-center px-4">
        Now Serving Open 7 Days A Week
      </div> */}

      {/* 2. STICKY NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <div className="text-2xl font-bold text-stone-700 dark:text-stone-300">
                <img src="/logo.png" alt="Tammy's Nails Logo" className="h-16 w-auto md:h-20" />
                {/* <span className="text-stone-600 dark:text-stone-400">Your</span>
                Brand */}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-4 md:flex">
              <button
                className="btn rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-stone-700 dark:text-neutral-300 dark:hover:bg-stone-900/30 dark:hover:text-stone-300"
                onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
              >
                Home
              </button>
              <button
                className="btn rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-stone-700 dark:text-neutral-300 dark:hover:bg-stone-900/30 dark:hover:text-stone-300"
                onClick={() => {
                  servicesRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                Services
              </button>
              <button
                className="btn rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-stone-700 dark:text-neutral-300 dark:hover:bg-stone-900/30 dark:hover:text-stone-300"
                onClick={() => {
                  galleryRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                Gallery
              </button>
              <button
                className="btn rounded-lg px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-stone-50 hover:text-stone-700 dark:text-neutral-300 dark:hover:bg-stone-900/30 dark:hover:text-stone-300"
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                Contact
              </button>
              <a
                href="tel:+15302269462"
                className="bg-stone-900 px-6 py-2 text-[11px] font-bold tracking-widest text-white uppercase transition hover:bg-stone-700"
              >
                Call to Book
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 text-stone-700 dark:text-stone-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="mt-4 flex flex-col items-center gap-4 border-t border-neutral-200 pt-4 pb-4 md:hidden dark:border-neutral-800">
              <button
                className="text-lg font-medium text-gray-700 dark:text-neutral-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scroll({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </button>
              <button
                className="text-lg font-medium text-gray-700 dark:text-neutral-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </button>
              <button
                className="text-lg font-medium text-gray-700 dark:text-neutral-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Gallery
              </button>
              <button
                className="text-lg font-medium text-gray-700 dark:text-neutral-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  contactRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </button>
              <a
                href="tel:+15302269462"
                className="w-full bg-stone-900 px-6 py-2 text-center text-[11px] font-bold tracking-widest text-white uppercase transition hover:bg-stone-700"
              >
                Call to Book
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      {/* <header className="relative h-[85vh] flex items-center justify-center bg-stone-200 overflow-hidden">
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
        </div>
      </header> */}

      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden" id="home">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 opacity-20 blur-2xl dark:opacity-0"></div>
          <div className="absolute right-10 -bottom-20 h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr from-stone-300 via-stone-200 to-stone-100 opacity-40 blur-3xl dark:opacity-0"></div>
          <div className="absolute top-28 left-1/4 h-[35vh] w-[45vh] rounded-full bg-gradient-to-b from-stone-300 via-stone-200 to-stone-100 opacity-60 blur-3xl dark:h-[28vh] dark:from-stone-600 dark:via-stone-500 dark:to-stone-400 dark:opacity-20"></div>
        </div>
        <div className="absolute inset-0 -z-20">
          <img
            alt="Luxury Interior"
            src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=2000"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-xs dark:bg-neutral-900/40"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="mb-6">
            <span className="px-4 py-2 text-2xl font-medium text-stone-700 md:text-4xl dark:text-stone-200">
              Welcome to Tammy's
            </span>
          </div>
          <h1 className="mb-8 font-serif text-3xl leading-tight md:text-5xl">
            Experience nail care with non-toxic products and trending designs tailored to your{' '}
            <span className="italic">unique style.</span>
          </h1>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section
        ref={servicesRef}
        className="y-20 relative overflow-hidden bg-neutral-50 dark:bg-neutral-900/50"
        id="services"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-neutral-100">Our Services</h2>
            <p className="ttext-lg mx-auto max-w-2xl text-gray-700/80 dark:text-neutral-300/80">
              Discover our comprehensive range of nail care services, each designed to provide you with the perfect
              treatment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid grid-rows-[1fr_auto] gap-6 rounded-2xl border border-neutral-200/70 bg-white/70 p-8 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-neutral-100">Web Development</h3>
              <ServiceCard
                title="Manicures"
                image="https://images.unsplash.com/photo-1604654894610-df4906b245ae?auto=format&fit=crop&q=80&w=800"
              />
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-neutral-300">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-stone-600 dark:text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      id="Windframe_0Z93KQIY2"
                    >
                      <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-neutral-300">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-stone-600 dark:text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      id="Windframe_1C4J3j25a"
                    >
                      <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>SEO Optimized</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-neutral-300">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-stone-600 dark:text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      id="Windframe_L1Im7UJh6"
                    >
                      <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Performance Focused</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <ServiceCard
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
          /> */}
          </div>
        </div>
      </section>

      {/* 5. Gallery*/}
      <section ref={galleryRef} className="border-y border-stone-100 bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl">Tammy's Nails</h3>
            <p className="text-sm tracking-widest text-stone-500 uppercase">
              <MapPinIcon /> 2907 Churn Crk Rd, Redding, CA 96002
            </p>
            <p className="text-sm text-stone-500">
              <PhoneIcon /> (530) 226-9462
            </p>
            <p className="text-sm text-stone-500">
              <ClockIcon /> Mon-Sat: 10AM - 7PM
            </p>
          </div>
        </div>
      </section>

      {/* 6. LOCATION INFO (Footer Pre-section) */}
      <section ref={contactRef} className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-medium text-blue-500 dark:text-blue-400">Contact us</h3>
            <p className="text-gray-800 dark:text-gray-400">
              Ready to experience a new standard of nail care in our boutique nail salon. Book your appointment today
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12">
            <div className="flex flex-col items-center text-center">
              <h3 className="font-serif text-3xl text-stone-500">Tammy's Nails</h3>
              <p className="text-sm tracking-widest text-stone-500">
                <MapPinIcon /> 2907 Churn Crk Rd, Redding, CA 96002
              </p>
              <p className="text-sm text-stone-500">
                <PhoneIcon /> (530) 226-9462
              </p>
              <p className="text-sm text-stone-500">
                <ClockIcon /> Mon-Sat: 10AM - 7PM
              </p>
            </div>

            <div className="h-96 w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6061.839582969197!2d-122.35803008412879!3d40.56544847503779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2eca38b3997c5%3A0x74ce7f1f02ba2189!2sTammy&#39;s%20Nails%20-%20Nail%20Salon%20Redding%20CA!5e0!3m2!1sen!2sus!4v1770612118403!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto space-y-4 p-6 text-center sm:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-300">©2018 Tammy's Nails. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

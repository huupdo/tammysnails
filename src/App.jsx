import React from 'react';
import PhoneIcon from './components/PhoneIcon';
import MapPinIcon from './components/MapPinIcon';
import ClockIcon from './components/ClockIcon';
import { useRef, useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { GrInstagram, GrGoogle } from 'react-icons/gr';

// Reusable Service Card Component
const ServiceCard = ({ title, image, link }) => (
  <div className="group cursor-pointer overflow-hidden rounded-2xl bg-white">
    <div className="aspect-4/5 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="py-4 text-center">
      <h3 className="font-serif text-xl tracking-widest uppercase">{title}</h3>
    </div>
  </div>
);

export default function App() {
  const contactRef = useRef(null);
  const galleryRef = useRef(null);
  const servicesRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="bg-white text-gray-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      {/* <div className="bg-stone-900 text-white py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-center px-4">
        Now Serving Open 7 Days A Week
      </div> */}

      {/* 2. STICKY NAVIGATION */}
      <nav className="top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
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
              <div class="hidden w-32 md:block md:flex-1 lg:block lg:flex-1"></div>
              <a
                href="tel:+15302269462"
                className="rounded-lg bg-stone-900 px-6 py-2 text-[11px] font-bold tracking-widest text-white uppercase transition hover:bg-stone-700"
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
          <div className="absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full bg-linear-to-br from-stone-200 via-stone-100 to-stone-300 opacity-20 blur-2xl dark:opacity-0"></div>
          <div className="absolute right-10 -bottom-20 h-[40vh] w-[50vh] rounded-full bg-linear-to-br from-stone-300 via-stone-200 to-stone-100 opacity-40 blur-3xl dark:opacity-0"></div>
          <div className="absolute top-28 left-1/4 h-[35vh] w-[45vh] rounded-full bg-linear-to-br from-stone-300 via-stone-200 to-stone-100 opacity-60 blur-3xl dark:h-[28vh] dark:from-stone-600 dark:via-stone-500 dark:to-stone-400 dark:opacity-20"></div>
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
        className="relative overflow-hidden bg-neutral-50 py-20 dark:bg-neutral-900/50"
        id="services"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-neutral-100">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700/80 dark:text-neutral-300/80">
              Discover our comprehensive range of nail care services, each designed to provide you with the perfect
              treatment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <ServiceCard title="Manicures" image="/nail 1.jpg" alt="Manicures" />
            </div>
            <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <ServiceCard title="Pedicure" image="/nail 1.jpg" alt="Manicures" />
            </div>
            <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <ServiceCard title="Eye Brows" image="/nail 1.jpg" alt="Manicures" />
            </div>
            <div className="grid grid-rows-[1fr_auto] rounded-2xl border border-neutral-200/70 bg-white/70 p-2 shadow-xl ring-1 ring-neutral-200/50 transition-shadow duration-300 hover:shadow-2xl dark:border-neutral-800/70 dark:bg-neutral-950 dark:ring-neutral-700/50">
              <ServiceCard title="Lashes" image="/nail 1.jpg" alt="Manicures" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gallery*/}
      <section ref={galleryRef} className="relative overflow-hidden bg-white py-20 dark:bg-neutral-950" id="gallery">
        <div class="mx-auto max-w-7xl px-6">
          <div class="mb-8 text-center">
            <h2 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-neutral-100">Our Gallery</h2>
            <div className="mt-6 flex items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/tammy_nails_redding/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 transition-colors hover:text-pink-600 dark:text-stone-400 dark:hover:text-pink-400"
              >
                <GrInstagram size={20} />
                <span className="text-sm font-medium">Follow us</span>
              </a>
              <a
                href="https://maps.app.goo.gl/z9JHS3Li9wNqWiZh6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 transition-colors hover:text-blue-600 dark:text-stone-400 dark:hover:text-blue-400"
              >
                <GrGoogle size={20} />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-sm font-medium">Review us</span>
                  <span className="text-[10px]">
                    4.4 <span className="text-yellow-500">★</span> (312 reviews)
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="overflow-hidden rounded-2xl border border-neutral-200 shadow-2xl dark:border-neutral-800">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div class="relative min-w-full">
                  <img
                    alt="Gallery Image 1"
                    src="https://placehold.co/1200x600/78716c/ffffff?text=Project+1"
                    class="h-100 w-full object-cover md:h-150"
                  />
                  {/* <div class="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div class="p-8">
                      <h3 class="mb-2 text-2xl font-bold text-white">Innovative Web Platform</h3>
                      <p class="text-sm text-gray-200">E-commerce solution with advanced features</p>
                    </div>
                  </div> */}
                </div>
                <div class="relative min-w-full">
                  <img
                    alt="Gallery Image 2"
                    src="https://placehold.co/1200x600/57534e/ffffff?text=Project+2"
                    class="h-100 w-full object-cover md:h-150"
                  />
                  <div class="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div class="p-8">
                      <h3 class="mb-2 text-2xl font-bold text-white">Mobile App Design</h3>
                      <p class="text-sm text-gray-200">Beautiful interface for productivity app</p>
                    </div>
                  </div>
                </div>
                <div class="relative min-w-full">
                  <img
                    alt="Gallery Image 3"
                    src="https://placehold.co/1200x600/a8a29e/ffffff?text=Project+3"
                    class="h-100 w-full object-cover md:h-150"
                  />
                  <div class="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div class="p-8">
                      <h3 class="mb-2 text-2xl font-bold text-white">Corporate Branding</h3>
                      <p class="text-sm text-gray-200">Complete brand identity and website redesign</p>
                    </div>
                  </div>
                </div>
                <div class="relative min-w-full">
                  <img
                    alt="Gallery Image 4"
                    src="https://placehold.co/1200x600/44403c/ffffff?text=Project+4"
                    class="h-100 w-full object-cover md:h-150"
                  />
                  <div class="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div class="p-8">
                      <h3 class="mb-2 text-2xl font-bold text-white">Cloud Infrastructure</h3>
                      <p class="text-sm text-gray-200">Scalable cloud migration and deployment</p>
                    </div>
                  </div>
                </div>
                <div class="relative min-w-full">
                  <img
                    alt="Gallery Image 5"
                    src="https://placehold.co/1200x600/292524/ffffff?text=Project+5"
                    class="h-100 w-full object-cover md:h-150"
                  />
                  <div class="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent">
                    <div class="p-8">
                      <h3 class="mb-2 text-2xl font-bold text-white">Marketing Campaign</h3>
                      <p class="text-sm text-gray-200">Multi-channel digital marketing success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white dark:border-neutral-700 dark:bg-neutral-800/90 dark:hover:bg-neutral-800"
            >
              <svg
                class="h-6 w-6 text-gray-800 dark:text-neutral-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_hcUVdg6n6"
              >
                <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white dark:border-neutral-700 dark:bg-neutral-800/90 dark:hover:bg-neutral-800"
            >
              <svg
                class="h-6 w-6 text-gray-800 dark:text-neutral-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_p8YL9Od4X"
              >
                <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <div class="mt-6 flex justify-center gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${currentSlide === index ? 'bg-stone-700 dark:bg-stone-400' : 'bg-stone-300 dark:bg-stone-700'}`}
                />
              ))}
            </div>
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

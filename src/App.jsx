function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* 1. NAVIGATION: Using Flexbox to space out logo and button */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white border-b border-stone-200">
        <h1 className="text-2xl font-serif font-bold tracking-widest uppercase">Tammy's Nails</h1>
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider text-stone-600">
          <li className="hover:text-stone-900 cursor-pointer">Services</li>
          <li className="hover:text-stone-900 cursor-pointer">Gallery</li>
          <li className="hover:text-stone-900 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-stone-900 text-white px-5 py-2 text-sm font-bold rounded-sm hover:bg-stone-800 transition">
          Book Now
        </button>
      </nav>

      {/* 2. HERO: Centering content using flex-col */}
      <main className="flex flex-col items-center justify-center text-center py-24 px-4">
        <span className="text-rose-400 font-semibold tracking-[0.2em] uppercase text-xs mb-4">
          The Art of the Manicure
        </span>
        <h2 className="text-5xl md:text-7xl font-serif text-stone-800 max-w-3xl mb-8 leading-tight">
          Where Elegance <br /> Meets <span className="italic underline decoration-rose-200">Artistry</span>
        </h2>
        <p className="text-stone-500 max-w-lg mb-12 text-lg">
          Experience a new standard of nail care in our boutique studio. 
          Bespoke designs tailored to your unique style.
        </p>
        
        {/* Simple Placeholder Box for an image later */}
        <div className="w-full max-w-5xl aspect-video bg-stone-200 rounded-lg shadow-2xl flex items-center justify-center text-stone-400 italic">
          High-res salon image goes here
        </div>
      </main>
    </div>
  )
}

export default App
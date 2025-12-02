import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Showcase } from './components/Showcase';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="bg-[#05080d] min-h-screen text-white selection:bg-brand-500 selection:text-white">
      <Hero />
      <About />
      <Showcase />
      <Contact />
      
      {/* Sticky Mobile CTA for high conversion */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="bg-[#06C755] text-white p-4 rounded-full shadow-lg shadow-green-900/50 hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633-5.074-.506-12.016.964-12.016.964s-2.071 1.059-3.107 2.215c-1.036 1.156-2.191 4.792-2.191 4.792s-.361 1.252 1.035 1.734c1.396.482 4.286 1.276 5.826.963 1.541-.313 1.18-.819 1.18-.819s-.481-.192-.794-.265c-.313-.072-.699-.193-.699-.193s2.336-1.926 4.623-4.214c2.288-2.287 4.214-4.623 4.214-4.623s.12.386.193.699c.072.313.265.794.265.794s.506.361.819-1.18c.313-1.541-.482-4.43-1.385-5.875" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </main>
  );
}

export default App;
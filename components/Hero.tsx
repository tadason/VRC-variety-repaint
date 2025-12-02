import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05080d] via-[#0a1a2f] to-[#020507] z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[1] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-500 text-sm font-sans tracking-widest uppercase mb-6 backdrop-blur-md">
            Since 2024 • Industrial Grade
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-thai text-white leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            V-Variety
          </h1>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold font-thai text-white/90 leading-tight">
            ที่สุดแห่งงานพ่นสีฝุ่น<br className="hidden md:block" />มาตรฐานอุตสาหกรรม
          </h2>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 font-thai max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          ยกระดับชิ้นงานโลหะของคุณด้วยเทคโนโลยี Powder Coating คุณภาพสูง และเคมีภัณฑ์ Pretreatment ที่ช่วยเพิ่มความทนทานสูงสุด
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button icon onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            ขอใบเสนอราคา
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}>
            ดูผลงานของเรา
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
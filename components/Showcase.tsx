import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Industrial Machinery",
    thaiTitle: "ชิ้นส่วนเครื่องจักรกลหนัก",
    desc: "พ่นสีกันสนิมพิเศษ ทนทานต่อการกระแทกและการกัดกร่อน",
    image: "https://picsum.photos/800/1200?random=1" // Placeholder for heavy machinery parts
  },
  {
    id: 2,
    title: "Automotive Parts",
    thaiTitle: "อะไหล่ยานยนต์ & ล้อแม็ก",
    desc: "งานสี High Gloss สวยเงางาม ทนความร้อนสูง",
    image: "https://picsum.photos/800/1200?random=2" // Placeholder for car rims/parts
  },
  {
    id: 3,
    title: "Architectural Aluminium",
    thaiTitle: "โครงสร้างอลูมิเนียมอาคาร",
    desc: "งานโครงการหมู่บ้านจัดสรรและอาคารสูง",
    image: "https://picsum.photos/800/1200?random=3" // Placeholder for architectural metal
  }
];

export const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 px-6 min-h-screen bg-[#05080d] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-thai font-bold text-white mb-4">ผลงานเด่นของเรา</h2>
          <p className="text-gray-400 font-thai text-lg">ตัวอย่างชิ้นงานจริงที่ผ่านกระบวนการคุณภาพจาก V-Variety</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className="group relative aspect-[9/16] md:aspect-[3/5] rounded-[2rem] overflow-hidden bg-gray-900 cursor-pointer"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-brand-500 text-xs font-sans font-bold tracking-widest uppercase mb-2 block">
                  {item.title}
                </span>
                <h3 className="text-2xl font-thai font-semibold text-white mb-3">
                  {item.thaiTitle}
                </h3>
                <p className="text-gray-300 font-thai text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
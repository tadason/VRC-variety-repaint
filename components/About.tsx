import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Droplets } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    title: "ความทนทานสูงสุด",
    desc: "สีฝุ่นเกรดอุตสาหกรรม ทนต่อรอยขีดข่วน แสง UV และสารเคมี เหมาะสำหรับงาน Heavy Duty"
  },
  {
    icon: <Droplets className="w-8 h-8 text-cyan-400" />,
    title: "Pretreatment ชั้นเยี่ยม",
    desc: "เราใส่ใจทุกขั้นตอนการเตรียมผิวชิ้นงาน ด้วยน้ำยาเคมีสูตรพิเศษเพื่อการยึดเกาะที่สมบูรณ์แบบ"
  },
  {
    icon: <Layers className="w-8 h-8 text-indigo-400" />,
    title: "เฉดสีหลากหลาย",
    desc: "มีสีให้เลือกกว่า 100+ เฉดสี และ Texture หลากหลายรูปแบบ ตอบโจทย์ทุกดีไซน์"
  }
];

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 min-h-screen flex items-center relative z-10 bg-[#05080d]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-brand-500 font-sans font-bold tracking-wider uppercase mb-4">Why Choose Us</h3>
            <h2 className="text-4xl md:text-5xl font-thai font-semibold text-white mb-8 leading-tight">
              คุณภาพที่โรงงานชั้นนำ <br />
              <span className="text-gray-500">ไว้วางใจเลือกใช้</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-thai text-lg leading-relaxed">
              <p>
                ที่ <strong className="text-white">V-Variety</strong> เราไม่ใช่แค่โรงงานพ่นสี แต่เราคือพาร์ทเนอร์ที่ช่วยสร้างมูลค่าเพิ่มให้กับสินค้าของคุณ ด้วยประสบการณ์ในวงการอุตสาหกรรม
              </p>
              <p>
                เราเชี่ยวชาญด้านกระบวนการ <span className="text-blue-400">Powder Coating</span> และการจัดจำหน่ายน้ำยาเตรียมผิวโลหะ (Pretreatment) ที่ได้มาตรฐานสากล รองรับทั้งงาน Project ขนาดใหญ่และงาน SME
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-thai font-medium text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-400 font-thai">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
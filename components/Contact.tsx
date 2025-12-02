import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 min-h-[80vh] flex flex-col justify-center relative bg-[#05080d] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-thai font-bold text-white mb-6">
            ร่วมงานกับเรา
          </h2>
          <p className="text-xl text-gray-400 font-thai mb-12 max-w-2xl mx-auto">
            ปรึกษาปัญหาเรื่องสี หรือสอบถามราคาน้ำยาเคมีภัณฑ์ <br/>
            ทีมงาน V-Variety พร้อมดูแลธุรกิจของคุณ
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button className="w-full md:w-auto bg-[#06C755] hover:bg-[#05b34c] text-white border-0">
              <MessageCircle className="w-5 h-5 mr-2" />
              แอดไลน์: @v-variety
            </Button>
            
            <a href="tel:021234567" className="w-full md:w-auto">
              <Button variant="secondary" className="w-full">
                <Phone className="w-5 h-5 mr-2" />
                02-123-4567
              </Button>
            </a>
            
            <a href="mailto:sales@v-variety.com" className="w-full md:w-auto">
              <Button variant="outline" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                ขอใบเสนอราคา
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 text-gray-500 font-thai text-sm">
            <p>© 2024 V-Variety Industrial Coating. All rights reserved.</p>
            <p className="mt-2 text-xs">Bangkok, Thailand</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
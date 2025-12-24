import * as React from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FaAward, FaGavel, FaShip, FaGlobeAfrica } from "react-icons/fa";

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import TestimonialsSection from "../components/sections/TestimonialsSection";

// --- Animated Counter Component ---
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Home: React.FC = () => {
  const dynamicTexts = [
    "Gateway",
    "Official Trade Representation",
    "Market Entry Solution",
    "Trade Facilitation Pathway"
  ];

  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden font-['Montserrat'] font-medium text-[#09140F] bg-[#F9F2D6]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-[#F9F2D6] overflow-hidden pt-32 pb-20">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",
            filter: "blur(6px) brightness(0.6)", 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A13]/95 via-[#0B1A13]/80 to-[#0B1A13]" /> 

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tighter uppercase">
              <span className="block opacity-90">Your</span>
              
              <div className="relative h-[1.2em] flex justify-center items-center min-w-[300px] md:min-w-[800px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicTexts[textIndex]}
                    initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#308667] absolute whitespace-nowrap drop-shadow-[0_0_15px_rgba(48,134,103,0.3)]"
                  >
                    {dynamicTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-bold opacity-80 tracking-[0.05em]">
                to Ethiopia’s Market
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-[#F9F2D6]/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Forging strategic alliances between global industrial titans and 
            East Africa's premier economic gateway for over two decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link
              to="/services"
              className="group relative px-10 py-4 rounded-full bg-[#308667] text-white font-black text-[10px] uppercase tracking-[0.2em] overflow-hidden transition-all shadow-xl"
            >
              <span className="relative z-10">Expand Your Reach</span>
              <div className="absolute inset-0 bg-[#0B1A13] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>

            <Link
              to="/contact"
              className="px-10 py-4 rounded-full border border-white/20 text-white font-black text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-white hover:text-black transition-all"
            >
              Consult an Expert
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= MILESTONES SECTION ================= */}
      <section className="py-24 bg-[#F9F2D6] relative overflow-hidden font-['Montserrat']">
        <div className="absolute top-10 left-0 text-[12rem] font-black text-[#0B1A13]/[0.02] select-none pointer-events-none tracking-tighter">
          EST. 2004
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-10 bg-[#308667]" />
              <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em]">Corporate Heritage</span>
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-black text-[#0B1A13] leading-tight tracking-tighter uppercase">
              Milestones <br/> <span className="text-[#308667]">of Excellence</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[180px]">
            {/* Award Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="md:col-span-8 row-span-2 bg-[#0B1A13] rounded-[2.5rem] p-10 flex flex-col justify-between group relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div whileHover={{ rotate: 15 }} className="p-3 bg-[#308667] rounded-xl text-[#F9F2D6]">
                    <FaAward size={24} />
                  </motion.div>
                  <span className="text-[#308667] font-black uppercase tracking-widest text-[9px]">Platinum Recognition</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-[#F9F2D6] leading-tight max-w-md">
                  Winner of <span className="text-[#308667] group-hover:text-[#45b68c] transition-colors">Kalmar's</span> <br/> 2016 Award
                </h4>
              </div>
              <p className="relative z-10 text-[#F9F2D6]/40 text-xs max-w-xs font-medium leading-relaxed group-hover:text-[#F9F2D6]/70 transition-colors">
                Acknowledged as the leading regional partner for operational excellence in heavy machinery.
              </p>
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#308667]/0 via-transparent to-[#308667]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Global Partners Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="md:col-span-4 row-span-2 bg-[#308667] rounded-[2.5rem] p-8 flex flex-col justify-center text-[#F9F2D6] relative overflow-hidden shadow-xl"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute -right-6 -bottom-6 opacity-10">
                <FaGlobeAfrica size={240} />
              </motion.div>
              <div className="relative z-10">
                <span className="text-6xl font-black block tracking-tighter mb-1">
                  <Counter value={100} />+
                </span>
                <p className="text-sm font-bold uppercase tracking-widest opacity-90 leading-tight">
                  Global <br/> Partners
                </p>
              </div>
            </motion.div>

            {/* Active Tenders Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-4 row-span-1 bg-white rounded-3xl p-6 flex items-center gap-5 shadow-sm border border-[#0B1A13]/5 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#F9F2D6] flex items-center justify-center text-[#308667] group-hover:bg-[#308667] group-hover:text-white transition-colors">
                <FaGavel size={20} />
              </div>
              <div>
                <span className="text-2xl font-black text-[#0B1A13] block">
                  <Counter value={500} />+
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#0B1A13]/40">Active Tenders</span>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-4 row-span-1 bg-[#EAE3C5] rounded-3xl p-6 flex flex-col justify-center items-center text-center"
            >
              <span className="text-3xl font-black text-[#0B1A13]">
                <Counter value={20} />+
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#0B1A13]/40">Years Experience</span>
            </motion.div>

            {/* Shipments Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-4 row-span-1 bg-[#122C21] rounded-3xl p-6 flex items-center justify-between group overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-2xl font-black text-[#F9F2D6] block">
                  <Counter value={150} />+
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#308667]">Shipments</span>
              </div>
              <motion.div whileHover={{ x: 10, opacity: 1 }} className="text-[#308667] text-2xl opacity-40 transition-all">
                <FaShip />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="relative py-24 bg-[#F9F2D6] overflow-hidden border-t border-black/5">
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-black text-[#122C21] leading-[0.95] uppercase tracking-tighter mb-6">
                Who <br/> <span className="text-[#308667]">We Are</span>
              </h2>
              <div className="w-16 h-1.5 bg-[#308667] mb-8" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <p className="text-lg md:text-xl text-[#122C21] leading-snug font-bold">
                SABOLLA INTERNATIONAL TRADING PLC is a trusted bridge between international suppliers
                and Ethiopia’s marketplace.
              </p>
              <p className="text-base text-[#122C21]/70 leading-relaxed font-medium">
                We deliver market entry strategies, regulatory guidance, sourcing, logistics coordination, 
                and long-term partnership development. Our mission is to facilitate trade 
                that empowers both our global partners and the Ethiopian economy.
              </p>
              <div className="pt-2 h-[1px] w-8 bg-[#308667]" />
            </motion.div>
          </div>
        </div>
      </section>

      <GlobalFootprint />

      {/* ================= PARTNERS SECTION ================= */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[#122C21] mb-4 uppercase tracking-tighter">
              Strategic <span className="text-[#308667]">Partners</span>
            </h2>
            <div className="w-16 h-1 bg-[#308667] mx-auto mb-6" />
            <p className="text-sm text-[#122C21]/60 max-w-xl mx-auto font-medium">
              Collaborating with global leaders to deliver premium solutions into Ethiopia.
            </p>
          </div>

          <div className="space-y-32">
            <div className="relative">
              <div className="absolute -top-16 -left-4 text-[12rem] font-black text-[#122C21]/[0.03] select-none pointer-events-none uppercase tracking-tighter leading-none">
                INTL
              </div>
              <div className="relative z-10 flex justify-between items-end mb-10 px-2">
                <div>
                  <h3 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.5em] mb-2">Network Protocol</h3>
                  <h4 className="text-2xl font-black text-[#122C21] uppercase tracking-tight">International Partners</h4>
                </div>
                <Link to="/partners" className="text-[10px] font-black text-[#122C21]/40 uppercase tracking-widest hover:text-[#308667] transition-colors flex items-center gap-2">
                  Go to Partners <span className="text-lg">→</span>
                </Link>
              </div>
              <div className="group relative">
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                  <PartnersShowcase partners={PARTNERS} variant="scrollable" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-16 -right-4 text-[12rem] font-black text-[#122C21]/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none text-right">
                LOCAL
              </div>
              <div className="relative z-10 flex flex-row-reverse justify-between items-end mb-10 px-2 text-right">
                <div>
                  <h3 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.5em] mb-2">Government & Private</h3>
                  <h4 className="text-2xl font-black text-[#122C21] uppercase tracking-tight">Local Partners</h4>
                </div>
                <Link to="/partners" className="text-[10px] font-black text-[#122C21]/40 uppercase tracking-widest hover:text-[#308667] transition-colors flex items-center gap-2">
                  <span className="text-lg">←</span> Go to Partners
                </Link>
              </div>
              <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
                <PartnersShowcase partners={LOCAL_PARTNERS} variant="scrollable" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-32 text-[#F9F2D6] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')" }} />
        <div className="absolute inset-0 bg-[#0B1A13]/90" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-black mb-10 leading-tight uppercase tracking-tighter">
            Ready to Expand <br/> <span className="text-[#308667]">Into Ethiopia?</span>
          </motion.h3>
          <Link to="/contact" className="inline-block bg-[#F9F2D6] text-[#122C21] font-bold py-4 px-10 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#308667] hover:text-[#F9F2D6] transition-all duration-500 shadow-2xl">
            Contact Our Strategists
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
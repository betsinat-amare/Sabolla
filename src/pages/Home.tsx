import * as React from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaTrophy, 
  FaHandshake, 
  FaFileContract, 
  FaHistory, 
  FaTruckLoading, 
  FaArrowRight 
} from "react-icons/fa";

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import TestimonialsSection from "../components/sections/TestimonialsSection";

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
    "Gateway to Growth", 
    "Trade Representation", 
    "Market Solutions", 
    "Strategic Pathway"
  ];
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setTextIndex((prev) => (prev + 1) % dynamicTexts.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden font-['Montserrat'] bg-[#FCFAF2] text-[#0B1A13]">

      {/* ================= HERO SECTION (Fixed Overlap & Layout) ================= */}
      <section className="relative min-h-screen flex items-start pt-32 pb-20 overflow-hidden bg-[#cff4e4]">
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#0B1A13] hidden lg:block" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#308667]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* LEFT SIDE: Content */}
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
              

                <h1 className="text-5xl md:text-7xl lg:text-5xl font-black leading-[1.1] tracking-tighter uppercase mb-6">
                  Your <br />
                  <div className="inline-block min-h-[1.2em]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={dynamicTexts[textIndex]}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#308667] block"
                      >
                        {dynamicTexts[textIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <br /> to Ethiopia.
                </h1>

                <p className="text-xl md:text-xl text-[#0B1A13]/70 max-w-xl font-medium leading-relaxed mb-8">
                  Navigating the complexities of East African trade. We bridge the gap between world-class technology and Ethiopia's industrial landscape.
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link to="/services" className="group flex items-center gap-4 bg-[#0B1A13] text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-[#308667] transition-all duration-300 shadow-2xl">
                    Our Services
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link to="/contact" className="group flex items-center gap-4 border-2 border-[#0B1A13] text-[#0B1A13] px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-[#0B1A13] hover:text-white transition-all duration-300">
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Visual */}
        {/* RIGHT SIDE: Visual - Fixed to match the provided layout image */}
<div className="w-full lg:w-2/5 relative flex justify-center items-center">
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative w-full max-w-[450px]" 
  >
    {/* 1. Large Decorative background accent (The green box from your image) */}
    {/* This is positioned absolutely to sit behind and extend below the image */}
    
    
    {/* 2. Main Image Container */}
    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
      <img 
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" 
        alt="Industrial Trade"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
    </div>
  </motion.div>
</div>
          </div>
        </div>
      </section>

      {/* ================= MILESTONES SECTION (Corrected Spacing) ================= */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em]">Proven Track Record</span>
            <h3 className="text-4xl md:text-5xl font-black text-[#0B1A13] mt-2 uppercase tracking-tighter">Milestones of Excellence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Award Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-7 bg-[#0B1A13] rounded-[2.5rem] p-12 relative overflow-hidden group border border-[#308667]/20 shadow-2xl min-h-[400px] flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaTrophy size={180} className="text-[#308667]" />
              </div>
              <div className="relative z-10">
                <div className="bg-[#308667] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#308667]/20">
                  <FaTrophy size={32} className="text-white" />
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
                  Winner of <br/><span className="text-[#308667]">Kalmar's 2016</span> <br/>Global Award
                </h4>
                <p className="text-white/60 text-lg max-w-md leading-relaxed font-medium">
                  Recognized for unparalleled operational excellence and strategic market growth within the East African heavy machinery sector.
                </p>
              </div>
            </motion.div>

            {/* Partners Card with Gap */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-5 bg-[#308667] rounded-[2.5rem] p-12 flex flex-col justify-between items-center text-center text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 mt-8">
                <FaHandshake size={64} className="mx-auto mb-6 opacity-80" />
                <span className="text-8xl font-black flex items-center justify-center tracking-tighter mb-4 drop-shadow-lg">
                  <Counter value={100} />
                  <span className="ml-4 opacity-30 text-[#0B1A13]">+</span>
                </span>
                <p className="text-xl font-black uppercase tracking-[0.2em] opacity-90">Global Industrial Partners</p>
              </div>
              <div className="w-full h-1 bg-white/20 mt-8" />
              <p className="mt-4 text-white/70 text-sm font-bold uppercase tracking-widest">Forging Links Worldwide</p>
            </motion.div>

            {/* Small Stat Cards with Gaps */}
            {[
              { label: "Active Tenders", val: 500, icon: <FaFileContract />, color: "bg-white text-[#0B1A13] border-gray-100" },
              { label: "Years Experience", val: 20, icon: <FaHistory />, color: "bg-[#F9F2D6] text-[#0B1A13] border-transparent" },
              { label: "Shipments Logged", val: 150, icon: <FaTruckLoading />, color: "bg-[#122C21] text-white border-transparent" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                className={`md:col-span-4 rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-lg border ${item.color}`}
              >
                <div className="mb-4 text-3xl opacity-80">{item.icon}</div>
                <span className="text-5xl font-black mb-2 tracking-tighter flex items-center">
                  <Counter value={item.val} />
                  <span className="ml-3 opacity-40 font-bold">+</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 text-center">{item.label}</span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <GlobalFootprint />
      
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[#122C21] mb-4 uppercase tracking-tighter">
              Strategic <span className="text-[#308667]">Partners</span>
            </h2>
            <div className="w-16 h-1 bg-[#308667] mx-auto" />
          </div>
          <div className="space-y-32">
             <PartnersShowcase partners={PARTNERS} variant="scrollable" />
             <PartnersShowcase partners={LOCAL_PARTNERS} variant="scrollable" />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-32 bg-[#0B1A13] relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
            Ready to Build <br/> <span className="text-[#308667]">the Future?</span>
          </h2>
          <Link to="/contact" className="inline-block bg-[#308667] text-white px-12 py-6 rounded-full font-black text-[12px] uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-[#308667]/30">
            Consult our experts
          </Link>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#308667_1px,transparent_1px)] [background-size:40px_40px]" />
      </section>
    </div>
  );
};

export default Home;
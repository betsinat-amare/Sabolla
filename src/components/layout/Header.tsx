import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SabollaLogo from "../../assets/logo/sabolla_logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact", isPrimary: true },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current) return;
      const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
        `a[href='${location.pathname}']`
      );
      if (activeLink) {
        setUnderline({ left: activeLink.offsetLeft, width: activeLink.offsetWidth });
      } else {
        setUnderline({ left: 0, width: 0 });
      }
    };
    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-[80] w-full font-['Montserrat'] transition-all duration-700
          ${hasScrolled 
            ? "bg-[#0B1A13] py-4 shadow-2xl" 
            : "bg-transparent py-8"}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          <Link to="/" className="relative z-[90] transition-transform hover:scale-105">
            <img
              src={SabollaLogo}
              alt="Sabolla"
              className={`w-auto object-contain transition-all duration-500 origin-left
                ${hasScrolled ? "h-10 md:h-12" : "h-14 md:h-20"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-10 relative">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              if (item.isPrimary) {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="ml-4 px-8 py-3 rounded-full bg-[#308667] text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#F9F2D6] hover:text-[#0B1A13] transition-all shadow-lg"
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 py-2
                    ${isActive ? "text-[#308667]" : "text-[#F9F2D6] hover:text-[#308667]"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Industrial Menu Toggle */}
          <button
            className="lg:hidden relative z-[90] flex items-center gap-3 group"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-[10px] font-black text-[#F9F2D6] uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "w-6 rotate-45 translate-y-2 bg-[#308667]" : "w-6"}`} />
              <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "w-6 -rotate-45 -translate-y-2 bg-[#308667]" : "w-5"}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[75] bg-[#0B1A13] flex flex-col p-8 pt-32"
          >
            {/* Background Watermark for Mobile */}
            <div className="absolute bottom-10 left-0 text-[8rem] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter leading-none uppercase">
              Sabolla
            </div>

            <div className="flex flex-col space-y-6 relative z-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-5xl font-black uppercase tracking-tighter transition-all
                      ${location.pathname === item.path ? "text-[#308667]" : "text-[#F9F2D6] hover:text-[#308667]"}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto border-t border-white/10 pt-8"
            >
              <p className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em] mb-2">Connect</p>
              <p className="text-[#F9F2D6]/40 text-xs font-medium">Addis Ababa, Ethiopia</p>
              <p className="text-[#F9F2D6]/40 text-xs font-medium">info@sabolla.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
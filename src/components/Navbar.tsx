import { Link, useLocation } from "react-router-dom";
import { Search, Moon, Grid3X3 } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Batch 1 & Categories', path: '/' },
    { name: 'Batch 2', path: '/batch-2' },
    { name: 'Batch 3', path: '/batch-3' }
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300">
          <span className="text-white font-bold text-xl tracking-tighter">Ev</span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-900 font-bold tracking-[0.2em] text-sm leading-none">EVOLVRX</span>
          <span className="text-slate-500 text-[9px] font-medium tracking-[0.3em] leading-none mt-1.5">DIGITAL</span>
        </div>
      </Link>

      {/* Center Nav */}
      <div className="hidden md:flex items-center bg-white/60 border border-slate-200/60 rounded-full px-1.5 py-1.5 backdrop-blur-xl shadow-sm">
        {navLinks.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                isActive 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
          <Search size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-300">
          <Moon size={18} />
        </button>
        <div className="w-px h-4 bg-slate-200 mx-2" />
        <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
          <Grid3X3 size={16} />
          <span>Menu</span>
        </button>
      </div>
    </motion.nav>
  );
}

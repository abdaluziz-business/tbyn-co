import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export const OrganicStatsCard = ({ className = "" }: { className?: string }) => {
  const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
  ];

  return (
    <div className={`relative w-full max-w-[380px] group ${className}`}>
      {/* The Organic Shape Background using SVG */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 380 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl"
        >
          <path
            d="M60 0C26.8629 0 0 26.8629 0 60V180C0 213.137 26.8629 240 60 240H320C353.137 240 380 213.137 380 180V120C380 103.431 366.569 90 350 90H300C277.909 90 260 72.0914 260 50V30C260 13.4315 246.569 0 230 0H60Z"
            fill="#D9F99D"
          />
        </svg>
      </div>

      {/* Floating Arrow Button in the cut-out */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: -45 }}
        className="absolute top-0 right-0 w-20 h-20 bg-[#1e293b] rounded-full flex items-center justify-center text-white cursor-pointer z-20 shadow-xl border border-white/5"
      >
        <ArrowRight size={28} />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 p-10 pr-12 text-[#020617] h-[240px] flex flex-col justify-between">
        <div>
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-extrabold tracking-tighter mb-2"
          >
            10.2k+
          </motion.h4>
          <p className="text-sm font-medium opacity-70 max-w-[180px] leading-tight">
            Active users around the world
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Avatars */}
          <div className="flex -space-x-4">
            {avatars.map((url, i) => (
              <div 
                key={i} 
                className="w-12 h-12 rounded-full border-4 border-[#D9F99D] overflow-hidden bg-white/20"
              >
                <img src={url} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star className="fill-[#020617] text-[#020617]" size={32} />
            <div className="flex flex-col">
              <span className="text-3xl font-black leading-none">5</span>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Stars</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute -inset-4 bg-lime-400/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

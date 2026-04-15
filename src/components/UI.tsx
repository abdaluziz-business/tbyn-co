import React from "react";
import { motion } from "motion/react";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full active:scale-95";
  
  const variants = {
    primary: "gradient-bg text-white shadow-lg hover:shadow-primary/20 hover:brightness-110",
    secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/20",
    ghost: "text-text-body hover:text-white hover:bg-white/5"
  };
  
  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const FuturisticCTA = ({ text = "ابدأ الآن", className = "" }: { text?: string, className?: string }) => {
  return (
    <div className={`flex flex-row items-center gap-3 group cursor-pointer w-fit ${className}`}>
      {/* Capsule Button */}
      <motion.div 
        whileHover={{ x: 5 }}
        className="px-10 py-4 rounded-full bg-linear-to-r from-blue-600 to-violet-600 border border-white/10 text-white font-bold shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group-hover:brightness-110"
      >
        {text}
      </motion.div>
      
      {/* Circular Arrow */}
      <motion.div 
        whileHover={{ scale: 1.15 }}
        className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:bg-violet-600 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
      >
        <ArrowRight size={24} />
      </motion.div>
    </div>
  );
};

export const Card = ({ children, className = '', glow = false }: { children: React.ReactNode, className?: string, glow?: boolean }) => {
  return (
    <div className={`bg-bg-card border border-border-soft rounded-[24px] p-6 transition-all duration-300 ${glow ? 'hover:border-primary/30 hover:shadow-[0_0_40px_rgba(47,139,249,0.15)]' : ''} ${className}`}>
      {children}
    </div>
  );
};

export const Badge = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 ${className}`}>
      {children}
    </span>
  );
};

export const SectionHeader = ({ 
  title, 
  subtitle, 
  badge,
  description, 
  align = 'center',
  centered = false,
  className = ''
}: { 
  title: string, 
  subtitle?: string, 
  badge?: string,
  description?: string, 
  align?: 'center' | 'right' | 'left',
  centered?: boolean,
  className?: string
}) => {
  const finalAlign = centered ? 'center' : align;
  const alignments = {
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
    left: 'text-left items-start mr-auto'
  };

  const displaySubtitle = badge || subtitle;

  return (
    <div className={`flex flex-col max-w-4xl mb-24 ${alignments[finalAlign]} ${className}`}>
      {displaySubtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-8"
        >
          <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
          {displaySubtitle}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-xl md:text-2xl leading-relaxed font-light"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export const OrganicCard = ({ 
  title, 
  description, 
  footer, 
  accentColor = "primary", 
  className = "",
  id = "01"
}: { 
  title: React.ReactNode, 
  description: string, 
  footer?: React.ReactNode, 
  accentColor?: string,
  className?: string,
  id?: string
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative group bg-white/[0.01] border border-white/5 rounded-[32px] overflow-hidden transition-all duration-500 hover:border-${accentColor}/30 ${className}`}
    >
      {/* Subtle Corner Accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${accentColor}/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      
      {/* Content */}
      <div className="relative z-10 p-10 flex flex-col h-full text-right">
        <div className="flex justify-between items-start mb-12">
          <div className={`px-4 py-1 rounded-full bg-${accentColor}/10 border border-${accentColor}/20 text-${accentColor} text-[10px] font-bold uppercase tracking-widest`}>
            باقة {id}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4 tracking-tighter group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-text-muted text-base font-light leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-8 border-t border-white/5">
          {footer}
        </div>
      </div>

      {/* Industrial Cut-out Corner */}
      <div 
        className="absolute top-0 right-0 w-16 h-16 bg-bg-page"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
      ></div>
      
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className={`absolute top-2 right-2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-${accentColor} group-hover:text-black cursor-pointer`}
      >
        <ArrowRight size={18} />
      </motion.div>
    </motion.div>
  );
};

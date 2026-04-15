import { motion } from "motion/react";
import { Badge } from "./UI";
import { LucideIcon, CheckCircle2 } from "lucide-react";

interface ServiceDetailProps {
  badge: string;
  title: string;
  description: string;
  items?: string[];
  footer?: string;
  icon?: LucideIcon;
  reverse?: boolean;
}

export const ServiceDetail = ({ badge, title, description, items, footer, icon: Icon, reverse }: ServiceDetailProps) => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className={`absolute top-1/2 ${reverse ? '-left-1/4' : '-right-1/4'} -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none`}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">{badge}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.15] text-white">
              {title}
            </h2>
            <p className="text-text-muted text-xl mb-10 leading-relaxed max-w-xl">
              {description}
            </p>
            
            {items && (
              <div className="grid sm:grid-cols-1 gap-4 mb-10">
                {items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: reverse ? 10 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                      <CheckCircle2 size={18} className="text-primary" />
                    </div>
                    <span className="text-white/80 text-lg group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            )}
            
            {footer && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-linear-to-r from-primary/10 to-transparent border-r-4 border-primary"
              >
                <p className="text-white font-medium text-lg italic">{footer}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Main Visual Card */}
              <div className="absolute inset-12 glass rounded-[40px] border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl gradient-bg flex items-center justify-center shadow-2xl shadow-primary/40">
                    {Icon && <Icon size={64} className="text-white" />}
                  </div>
                </motion.div>

                {/* Decorative Dots */}
                <div className="absolute top-8 right-8 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/10"></div>
                </div>
              </div>

              {/* Orbiting Badges */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 p-4 glass rounded-2xl border-white/10 shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 left-0 p-4 glass rounded-2xl border-white/10 shadow-xl"
              >
                <div className="flex gap-2">
                  <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                  <div className="w-6 h-2 bg-primary/40 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

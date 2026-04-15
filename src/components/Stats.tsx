import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Users, TrendingUp, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { Badge } from "./UI";

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Stats = () => {
  const stats = [
    { 
      label: "عميل يثق بنا", 
      value: 50, 
      suffix: "+", 
      icon: <Users className="text-primary" size={24} />,
      description: "شراكات استراتيجية ناجحة"
    },
    { 
      label: "ينمو سنوياً", 
      value: 85, 
      suffix: "%", 
      icon: <TrendingUp className="text-secondary" size={24} />,
      description: "معدل نمو مستدام"
    },
    { 
      label: "مشروع ناجح", 
      value: 120, 
      suffix: "+", 
      icon: <CheckCircle2 className="text-accent" size={24} />,
      description: "تسليم بمعايير عالمية"
    },
    { 
      label: "أثر محقق", 
      value: 10, 
      suffix: "M+", 
      icon: <Globe className="text-primary" size={24} />,
      description: "قيمة مضافة للمجتمع"
    }
  ];

  return (
    <section className="py-32 bg-bg-page relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] rounded-full opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/5 text-white/50 border-white/10 uppercase tracking-[0.2em] text-[10px] font-bold">الأرقام تتحدث</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              إحصائيات <span className="gradient-text">تبيان</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full opacity-50"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-sm border border-white/5 rounded-[32px] group-hover:bg-white/[0.03] group-hover:border-white/10 transition-all duration-500"></div>
              
              <div className="relative p-10 flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter group-hover:gradient-text transition-all duration-500">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-white font-bold text-lg mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-text-muted text-sm opacity-60">
                  {stat.description}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <Sparkles size={20} className="text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

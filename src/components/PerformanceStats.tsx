import { motion } from "motion/react";
import { Zap, Database, ShieldCheck, Layers } from "lucide-react";

export const PerformanceStats = () => {
  const stats = [
    {
      id: "01",
      value: "24/7",
      label: "الدعم الفني",
      description: "استجابة فورية للأزمات",
      icon: <Zap size={24} className="text-amber-500" />,
      glowColor: "rgba(245, 158, 11, 0.15)",
    },
    {
      id: "02",
      value: "10TB+",
      label: "البيانات المعالجة",
      description: "إدارة بيانات ضخمة",
      icon: <Database size={24} className="text-purple-500" />,
      glowColor: "rgba(168, 85, 247, 0.15)",
    },
    {
      id: "03",
      value: "99.9%",
      label: "استقرار الأنظمة",
      description: "اعتمادية تشغيلية عالية",
      icon: <ShieldCheck size={24} className="text-emerald-500" />,
      glowColor: "rgba(16, 185, 129, 0.15)",
    },
    {
      id: "04",
      value: "50+",
      label: "المشاريع المنجزة",
      description: "حلول رقمية متكاملة",
      icon: <Layers size={24} className="text-cyan-500" />,
      glowColor: "rgba(6, 182, 212, 0.15)",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-bg-page relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-right mb-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">
                أداء استثنائي
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter">
              كفاءة عالية في <br />
              <span className="gradient-text">كل التفاصيل</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-experimental p-10 flex flex-col items-start text-right group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${stat.glowColor}, transparent 70%)` }}
              ></div>

              {/* Icon Container */}
              <div className="mb-8 w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-white font-bold text-lg mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-white/30 text-xs font-light">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

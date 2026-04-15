import { motion } from "motion/react";
import {
  Globe,
  Cpu,
  Zap,
  BrainCircuit,
  ShieldCheck,
  Layers,
} from "lucide-react";

export const WhyTabayun = () => {
  const cards = [
    {
      title: "Global",
      subtitle: "معايرة عالمية",
      icon: <Globe size={24} className="text-purple-400" />,
      bgColor: "bg-purple-500/5",
      borderColor: "border-purple-500/10",
    },
    {
      title: "100%",
      subtitle: "جاهزية التشغيل",
      icon: <Cpu size={24} className="text-teal-400" />,
      bgColor: "bg-teal-500/5",
      borderColor: "border-teal-500/10",
    },
    {
      title: "Fast",
      subtitle: "سرعة الإطلاق",
      icon: <Zap size={24} className="text-amber-400" />,
      bgColor: "bg-amber-500/5",
      borderColor: "border-amber-500/10",
    },
    {
      title: "AI Native",
      subtitle: "ذكاء مدمج",
      icon: <BrainCircuit size={24} className="text-emerald-400" />,
      bgColor: "bg-emerald-500/5",
      borderColor: "border-emerald-500/10",
    },
  ];

  const features = [
    {
      title: "السيادة الرقمية",
      description:
        "امتلاك كامل للمنصة والبيانات دون الاعتماد على حلول مغلقة، مع مرونة كاملة في التوسع والتطوير.",
      icon: <ShieldCheck size={20} className="text-primary" />,
    },
    {
      title: "هندسة معيارية",
      description:
        "بنية تقنية قابلة للتوسع والتكامل مع الأنظمة الأخرى، تمكن المؤسسات من تطوير خدماتها الرقمية دون تعقيد.",
      icon: <Layers size={20} className="text-primary" />,
    },
    {
      title: "أمان واعتمادية",
      description:
        "منصات مبنية وفق معايير أمان متقدمة تضمن استقرار الأنظمة وحماية البيانات الحساسة.",
      icon: <ShieldCheck size={20} className="text-primary" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-bg-page relative overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Right: Content */}
          <div className="lg:w-1/2 text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <BrainCircuit size={14} className="text-primary" />
                <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">
                  Why Tabayun
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight tracking-tighter">
                القيمة <br />
                <span className="gradient-text">الحقيقية.</span>
              </h2>

              <p className="text-text-muted text-lg leading-relaxed mb-12 max-w-xl mr-0 ml-auto">
                نحن لا نقدم مجرد برمجيات، بل نبني أصولاً رقمية استراتيجية. نمكن
                المؤسسات من امتلاك منصات رقمية مستقرة وقابلة للتوسع، تدار
                بمعايير واضحة وتدعم النمو المستدام.
              </p>

              <div className="space-y-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-white/40 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Left: Grid of Cards */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[2.5rem] border ${card.borderColor} ${card.bgColor} flex flex-col items-start text-right group hover:border-white/20 transition-all duration-500`}
              >
                <div className="mb-12 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div className="mt-auto">
                  <h3 className="text-3xl font-bold text-white mb-1 tracking-tighter">
                    {card.title}
                  </h3>
                  <p className="text-white/40 text-xs font-bold">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

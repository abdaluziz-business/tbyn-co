import { motion } from "motion/react";
import {
  Code,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  Star,
  Users,
  Tag,
  Layers,
} from "lucide-react";
import { OrganicCard } from "./UI";

export const SolutionsGrid = () => {
  const tracks = [
    {
      id: "01",
      badge: "تطوير الأنظمة",
      title: "الحوكمة والإمتثال",
      description:
        "أمن المعلومات، سياسات البيانات، وضمان مطابقة معايير الجودة العالمية. ISO / Compliance ",
      icon: <Code size={32} />,
      accent: "primary",
      footer: (
        <div className="flex items-center gap-4 justify-end">
          <div className="flex -space-x-2 rtl:space-x-reverse">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/p${i}/32/32`}
                className="w-8 h-8 rounded-full border-2 border-bg-page"
                alt=""
              />
            ))}
          </div>
          <span className="text-[10px] text-white/20 uppercase tracking-widest">
            +40 مطور
          </span>
        </div>
      ),
    },
    {
      id: "02",
      badge: "الاستشارات",
      title: " الاستراتيجية الرقمية",
      description:
        "خارطة الطريق التقنية، الابتكار المؤسسي، وتصميم تجربة المستخدم المتكاملة.",
      icon: <Briefcase size={24} />,
      accent: "secondary",
      footer: (
        <div className="flex items-center gap-2 justify-end text-primary">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
          <span className="text-[10px] text-white/40 mr-2">تقييم 4.9/5</span>
        </div>
      ),
    },
    {
      id: "03",
      badge: "الاستراتيجية",
      title: "الاستشارات التقنية",
      description:
        "تحليل الفجوات الرقمية، هندسة الحلول المخصصة، وإدارة رحلة التحول.",
      icon: <TrendingUp size={24} />,
      accent: "accent",
      footer: (
        <div className="flex flex-wrap gap-2 justify-end">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-white/40">
            رؤية 2030
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-white/40">
            تحول رقمي
          </span>
        </div>
      ),
    },
    {
      id: "04",
      badge: "الحوكمة والامتثال",
      title: "تطوير الأنظمة",
      description:
        "تطبيقات الويب والسحاب، أتمتة العمليات المعقدة، وتكامل الأنظمة البرمجية.",
      icon: <ShieldCheck size={28} />,
      accent: "primary",
      footer: (
        <div className="flex items-center gap-3 justify-end">
          <Layers size={16} className="text-white/20" />
          <span className="text-[10px] text-white/20 uppercase tracking-widest">
            معايير ISO 27001
          </span>
        </div>
      ),
    },
  ];

  return (
    <section
      id="solutions"
      className="py-40 bg-bg-page relative overflow-hidden"
    >
      {/* Background Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12 border-b border-white/5 pb-16">
          <div className="order-2 max-w-md">
            <p className="text-text-muted text-xl font-light leading-relaxed mb-8">
              نقدم حلولاً شاملة تغطي كافة جوانب التحول الرقمي، من الاستشارة إلى
              التنفيذ والحوكمة.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-bg-page bg-white/5 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://picsum.photos/seed/u${i}/40/40`}
                      alt=""
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[10px] text-white/20 uppercase tracking-widest">
                +150 جهة مستفيدة
              </span>
            </div>
          </div>

          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              dir="ltr"
            >
              <Layers size={14} className="text-primary" />
              <span className="text-primary text-[10px] uppercase">
                Integrated Tracks
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter">
              مساراتنا <br />
              <span className="gradient-text">المتكاملة</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <OrganicCard
                id={track.id}
                title={track.title}
                description={track.description}
                footer={track.footer}
                accentColor={track.accent}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

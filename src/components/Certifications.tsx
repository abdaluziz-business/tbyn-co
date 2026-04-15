import { motion } from "motion/react";
import { Award, ShieldCheck, CheckCircle, Star, Sparkles, Globe, Shield } from "lucide-react";
import { OrganicCard } from "./UI";

export const Certifications = () => {
  const certs = [
    {
      id: "01",
      title: "ISO 9001",
      subtitle: "إدارة الجودة",
      description: "الالتزام بأعلى معايير إدارة الجودة العالمية لضمان رضا العملاء.",
      icon: <Award size={28} />,
      accent: "primary",
      footer: (
        <div className="flex items-center gap-2 justify-end text-primary">
          <CheckCircle size={14} fill="currentColor" />
          <span className="text-[10px] uppercase font-bold">معتمد دولياً</span>
        </div>
      )
    },
    {
      id: "02",
      title: "ISO 27001",
      subtitle: "أمن المعلومات",
      description: "تطبيق أفضل الممارسات في حماية البيانات وأمن المعلومات المؤسسية.",
      icon: <ShieldCheck size={28} />,
      accent: "secondary",
      footer: (
        <div className="flex items-center gap-2 justify-end text-white/20">
          <Shield size={14} />
          <span className="text-[10px] uppercase">معايير أمنية</span>
        </div>
      )
    },
    {
      id: "03",
      title: "اعتماد محلي",
      subtitle: "الجهات التنظيمية",
      description: "حاصلون على اعتمادات رسمية من الجهات التقنية والتنظيمية في المملكة.",
      icon: <CheckCircle size={28} />,
      accent: "accent",
      footer: (
        <div className="flex items-center gap-2 justify-end text-white/20">
          <Globe size={14} />
          <span className="text-[10px] uppercase">المملكة العربية السعودية</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-40 bg-bg-page relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(47,139,249,0.03),transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-right">
        <div className="max-w-4xl mb-32 ml-auto">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary text-[10px] uppercase">الاعتمادات الدولية</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter">
            باحترافية حصلنا على <br />
            <span className="gradient-text">شهادات احترافية</span>
          </h2>
          <p className="text-text-muted text-xl md:text-2xl leading-relaxed font-light">
            نلتزم بالمعايير الدولية والمحلية لضمان تقديم خدمات تقنية موثوقة وآمنة، مما يعزز الثقة والتميز في كل مشروع نقوم به.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <OrganicCard 
                id={cert.id}
                title={cert.title}
                description={cert.description}
                footer={cert.footer}
                accentColor={cert.accent}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "motion/react";
import { Code, Briefcase, ShieldCheck, TrendingUp, ArrowLeft } from "lucide-react";
import { Card, SectionHeader } from "./UI";

export const Services = () => {
  const paths = [
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: "الاستشارات التقنية",
      bullets: ["تقييم الجاهزية الرقمية", "مراجعة البنية التقنية", "اختيار الأنظمة المناسبة"],
      color: "from-primary/20"
    },
    {
      icon: <Code className="text-secondary" size={32} />,
      title: "تطوير الأنظمة والمنصات",
      bullets: ["تطوير أنظمة تشغيل", "بناء منصات رقمية", "إنشاء بوابات خدمية"],
      color: "from-secondary/20"
    },
    {
      icon: <ShieldCheck className="text-accent" size={32} />,
      title: "الحوكمة والامتثال المؤسسي",
      bullets: ["إطار تشغيلي متكامل", "رفع مستوى الانضباط", "التهيئة للمعايير الدولية"],
      color: "from-accent/20"
    },
    {
      icon: <TrendingUp className="text-emerald-400" size={32} />,
      title: "الاستراتيجية الرقمية وخطط التحول",
      bullets: ["تحديد المبادرات ذات الأولوية", "مواءمة الأنظمة", "قياس الأثر والعائد"],
      color: "from-emerald-400/20"
    }
  ];

  return (
    <section className="py-24 bg-bg-section">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="مساراتنا"
          title="نقّدم أربعة مسارات متكاملة"
          description="تمّكن الجهات من بناء بنية رقمية مستقرة، وتعزيز الامتثال، ورفع الجاهزية للنمو."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paths.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card glow className="h-full flex flex-col group relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-bl ${path.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {path.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{path.title}</h3>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {path.bullets.map((bullet, i) => (
                    <li key={i} className="text-text-muted text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <a href="#" className="text-sm font-semibold text-white flex items-center gap-2 group/link">
                  اعرف المزيد
                  <ArrowLeft size={16} className="transition-transform group-hover/link:-translate-x-1" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

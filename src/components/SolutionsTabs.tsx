import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Monitor, Database, Shield, Lightbulb } from "lucide-react";
import { Card, SectionHeader, Button } from "./UI";

export const SolutionsTabs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const solutions = [
    {
      id: 0,
      title: "الاستشارات التقنية",
      icon: <Monitor size={24} />,
      content: "نقدم رؤى استراتيجية تساعدك على اختيار التقنيات الأنسب لأهداف عملك، مع التركيز على الكفاءة والنمو المستقبلي.",
      bullets: ["دراسات الجدوى التقنية", "تخطيط البنية التحتية", "تحسين العمليات الرقمية"]
    },
    {
      id: 1,
      title: "تطوير الأنظمة والمنصات",
      icon: <Database size={24} />,
      content: "بناء حلول برمجية مخصصة وقابلة للتوسع، من تطبيقات الويب المعقدة إلى أنظمة إدارة الموارد المؤسسية.",
      bullets: ["تطوير Full-stack", "تصميم واجهات UI/UX", "صيانة ودعم فني"]
    },
    {
      id: 2,
      title: "الحوكمة والامتثال",
      icon: <Shield size={24} />,
      content: "ضمان أمن بياناتك وامتثال مؤسستك للمعايير المحلية والعالمية، مما يقلل المخاطر ويعزز الثقة.",
      bullets: ["تدقيق أمن المعلومات", "سياسات حوكمة البيانات", "الامتثال لـ NCA"]
    },
    {
      id: 3,
      title: "الاستراتيجية الرقمية",
      icon: <Lightbulb size={24} />,
      content: "رسم خارطة طريق واضحة للتحول الرقمي تضمن بقاء مؤسستك في طليعة المنافسة والابتكار.",
      bullets: ["تحليل السوق التقني", "استراتيجيات تجربة المستخدم", "إدارة التغيير الرقمي"]
    }
  ];

  return (
    <section className="py-24 bg-bg-section">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="خدماتنا"
          title="حلول تقنية متكاملة"
          description="نجمع بين الخبرة العميقة والابتكار لتقديم خدمات تصنع فرقاً حقيقياً."
          centered
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {solutions.map((sol, idx) => (
            <div key={sol.id} className="bg-bg-card border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-right hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${openIndex === idx ? "bg-primary text-white" : "bg-white/5 text-text-muted"}`}>
                    {sol.icon}
                  </div>
                  <span className={`font-bold text-xl ${openIndex === idx ? "text-white" : "text-text-muted"}`}>
                    {sol.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-text-muted" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-8 pt-2 border-t border-white/5">
                      <p className="text-text-muted text-lg mb-8 leading-relaxed">
                        {sol.content}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {sol.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="text-white/80 font-medium">{bullet}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/contact">
                        <Button variant="primary" size="md">اطلب استشارة</Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "motion/react";
import { Linkedin, Sparkles, Twitter, Globe, Star } from "lucide-react";
import { OrganicCard } from "./UI";

export const Partners = () => {
  const team = [
    { name: "م. فهد السبيعي", role: "الرئيس التنفيذي", description: "خبير في التحول الرقمي والاستراتيجيات التقنية لأكثر من 15 عاماً.", accent: "primary" },
    { name: "أ. نورة الشهري", role: "مديرة العمليات", description: "متخصصة في إدارة المشاريع التقنية الكبرى وضمان جودة التنفيذ.", accent: "secondary" },
    { name: "م. ياسر القحطاني", role: "كبير المهندسين", description: "معماري برمجيات متخصص في بناء الأنظمة السحابية عالية التوفر.", accent: "accent" },
    { name: "أ. ريم الدوسري", role: "مديرة المشاريع", description: "خبيرة في منهجيات Agile وإدارة فرق التطوير متعددة التخصصات.", accent: "primary" },
  ];

  return (
    <section id="team" className="py-40 bg-bg-page relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-right">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="order-2 md:order-1 max-w-md">
            <p className="text-text-muted text-xl font-light leading-relaxed">
              نخبة من الخبراء والمستشارين يعملون بشغف لتحويل رؤيتك الرقمية إلى واقع ملموس بمعايير عالمية.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-primary text-[10px] uppercase">فريق تباين</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              عقول <span className="gradient-text">تبتكر</span> <br />
              سواعد <span className="text-white/20 italic">تنفذ</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <OrganicCard 
                id={`0${i + 1}`}
                title={
                  <div className="flex flex-col">
                    <span className="text-sm text-primary uppercase mb-2">{member.role}</span>
                    <span>{member.name}</span>
                  </div>
                }
                description={member.description}
                accentColor={member.accent}
                footer={
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <Linkedin size={16} className="text-white/20 hover:text-primary cursor-pointer transition-colors" />
                      <Twitter size={16} className="text-white/20 hover:text-primary cursor-pointer transition-colors" />
                    </div>
                    {i % 2 === 0 ? (
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} className="text-primary" fill="currentColor" />)}
                      </div>
                    ) : (
                      <Globe size={16} className="text-white/20" />
                    )}
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

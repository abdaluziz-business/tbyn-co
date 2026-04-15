import { motion } from "motion/react";
import { Card, Badge } from "./UI";
import { Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";

export const LatestUpdates = () => {
  const updates = [
    {
      platform: "Twitter",
      icon: <Twitter size={18} className="text-[#1DA1F2]" />,
      time: "منذ يومين",
      content: "فخورون بإطلاق النسخة التجريبية من نظام تبيان لإدارة البيانات الذكية. خطوة جديدة نحو التحول الرقمي الشامل. #تباين #تبيان",
      link: "#"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin size={18} className="text-[#0077B5]" />,
      time: "منذ أسبوع",
      content: "سعدنا اليوم باستضافة وفد من كبرى الشركات التقنية لمناقشة آفاق التعاون في مجال حوكمة البيانات وأمن المعلومات.",
      link: "#"
    },
    {
      platform: "Instagram",
      icon: <Instagram size={18} className="text-[#E4405F]" />,
      time: "منذ أسبوعين",
      content: "جانب من ورشة العمل الأخيرة لفريقنا حول دمج تقنيات الذكاء الاصطناعي في حلولنا البرمجية. القادم أفضل!",
      link: "#"
    }
  ];

  return (
    <section id="updates" className="py-32 bg-bg-page relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/5 text-white/50 border-white/10 uppercase tracking-widest text-[10px] font-bold">تعرف على تباين</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white">آخر التحديثات</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((update, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full p-8 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                      {update.icon}
                    </div>
                    <span className="text-sm font-bold text-white/80">{update.platform}</span>
                  </div>
                  <span className="text-xs text-white/30 font-medium">{update.time}</span>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-8 text-right dir-rtl">
                  {update.content}
                </p>

                <div className="flex justify-end">
                  <a 
                    href={update.link} 
                    className="text-white/20 hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                  >
                    عرض المنشور
                    <ExternalLink size={14} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "motion/react";
import { Card } from "./UI";
import { Target, ShieldCheck, Zap } from "lucide-react";

export const ValuesSection = () => {
  const values = [
    { 
      title: "تقنية تُبنى بمنهجية", 
      description: "بنية رقمية مؤسسية تضمن الاستقرار والاستدامة.",
      icon: <Target className="text-primary" size={32} />,
      accent: "from-primary/20 to-transparent",
      delay: 0.1
    },
    { 
      title: "تحول يُدار بانضباط", 
      description: "إدارة تشغيلية دقيقة تضمن تحقيق الأهداف المرجوة.",
      icon: <Zap className="text-secondary" size={32} />,
      accent: "from-secondary/20 to-transparent",
      delay: 0.2
    },
    { 
      title: "حوكمة تُطبّق بمعايير واضحة", 
      description: "سياسات وإجراءات واضحة ترفع كفاءة الأداء المؤسسي.",
      icon: <ShieldCheck className="text-accent" size={32} />,
      accent: "from-accent/20 to-transparent",
      delay: 0.3
    }
  ];

  return (
    <section className="py-32 bg-bg-page relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: v.delay }}
              className="group"
            >
              <Card className="relative h-full p-12 border-white/5 bg-white/[0.01] group-hover:bg-white/[0.03] transition-all duration-700 overflow-hidden rounded-[40px]">
                {/* Accent Glow */}
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-linear-to-br ${v.accent} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>
                
                <div className="relative z-10">
                  <div className="mb-10 w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                    {v.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6 leading-tight tracking-tight group-hover:gradient-text transition-all duration-500">
                    {v.title}
                  </h3>
                  
                  <p className="text-text-muted text-lg leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                    {v.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/5 to-transparent group-hover:via-primary/20 transition-all duration-700"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

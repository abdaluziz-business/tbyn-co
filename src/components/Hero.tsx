import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Zap, Shield, Cpu, Globe, Database } from "lucide-react";
import { FuturisticCTA, OrganicCard } from "./UI";

export const Hero = () => {
  const logos = [
    { name: "Partner 1", url: "https://picsum.photos/seed/p1/120/40" },
    { name: "Partner 2", url: "https://picsum.photos/seed/p2/120/40" },
    { name: "Partner 3", url: "https://picsum.photos/seed/p3/120/40" },
    { name: "Partner 4", url: "https://picsum.photos/seed/p4/120/40" },
    { name: "Partner 5", url: "https://picsum.photos/seed/p5/120/40" },
  ];

  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-bg-page">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Content: Asymmetrical & Bold */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-3/5 text-right"
          >
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary text-xs uppercase">المستقبل الرقمي يبدأ هنا</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] mb-10 tracking-tighter">
              تباين تطّور <br /> 
              <span className="gradient-text">منصات رقمية</span> <br />
            </h1>

            <p className="text-text-muted text-xl md:text-2xl max-w-[700px] mb-14 leading-relaxed font-light">
              نطور منصات رقمية عالية الاعتمادية  <span className="text-white font-medium">للجهات المهنية والقطاعات المنظمة</span>.منتجنا "بيان" يوفر منصة احترافية سريعة الإطلاق، ومشاريعنا المخصصة تُبنى وفق متطلبات دقيقة ومعايير تشغيل متقدمة..
            </p>

            <div className="flex flex-wrap gap-6 justify-start">
              <Link to="/contact">
                <FuturisticCTA text="ابدأ رحلتك الآن" className="items-end" />
              </Link>
              <Link to="/contact">
                <button className="btn-futuristic btn-futuristic-outline">
                  استشارة تقنية
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content: Floating Experimental Elements */}
          <div className="lg:w-2/5 relative h-[500px] w-full">
            {/* Main Floating Card */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] z-20"
            >
              <OrganicCard 
                id="AI"
                title="الحزمة الأساسية"
                description="منصة متكاملة بإدارة محتوى مرنة وسهلة الاستخدام للشركات الناشئة."
                accentColor="primary"
                footer={
                  <div className="space-y-6">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["0%", "85%", "85%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="h-full bg-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                      ></motion.div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-12 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                          <Zap className="text-primary/40" size={16} />
                        </div>
                      ))}
                    </div>
                  </div>
                }
              />
            </motion.div>

            {/* Floating Pills & Icons */}
            <motion.div 
              animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass px-6 py-3 rounded-full border-white/10 flex items-center gap-3 z-30"
            >
              <Shield className="text-accent" size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">أمان مطلق</span>
            </motion.div>

            <motion.div 
              animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 glass px-6 py-3 rounded-full border-white/10 flex items-center gap-3 z-30"
            >
              <Globe className="text-secondary" size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">توسع عالمي</span>
            </motion.div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.03] rounded-full pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary/20 rounded-full"></div>
            </motion.div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

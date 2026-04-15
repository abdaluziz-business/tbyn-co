import { motion, AnimatePresence } from "motion/react";
import { Zap, Brain, Shield, Plus, Check, Mail, X } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
  packagePrice: string;
  initialEmail: string;
  accentColor: string;
}

const PackageRequestModal = ({ isOpen, onClose, packageTitle, packagePrice, initialEmail, accentColor }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-[#0a0c14] border border-white/10 rounded-[2.5rem] w-full max-w-2xl overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
          dir="rtl"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 left-8 text-white/40 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-10 md:p-12">
            <div className="text-right mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">طلب هذه الباقة</h2>
              <div className="flex items-center justify-start gap-2">
                <span className="text-white/40 text-sm font-bold flex items-center gap-1">
                  {packagePrice}
                  <img src="/img/saudi-riyal.svg" alt="ريال" className="w-4 h-4 brightness-0 invert opacity-40" />
                </span>
                <span style={{ color: accentColor }} className="text-sm font-bold">{packageTitle}</span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white/40 text-xs font-bold mr-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    placeholder="أدخل اسمك..." 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-right text-sm text-white focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/40 text-xs font-bold mr-2 flex items-center gap-1">
                    المبلغ المتوقع
                    <img src="/img/saudi-riyal.svg" alt="ريال" className="w-3 h-3 brightness-0 invert opacity-40" />
                  </label>
                  <input 
                    type="text" 
                    placeholder="ادخل المبلغ المتوقع" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-right text-sm text-white focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white/40 text-xs font-bold mr-2">رقم الهاتف</label>
                  <input 
                    type="text" 
                    placeholder="05xxxxxxxx" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-right text-sm text-white focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white/40 text-xs font-bold mr-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    defaultValue={initialEmail}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-right text-sm text-white focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-white/40 text-xs font-bold mr-2">وصف مختصر للاحتياج</label>
                <textarea 
                  placeholder="كيف يمكننا مساعدتك في هذه الباقة؟"
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-right text-sm text-white focus:outline-none focus:border-white/30 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-white/90 transition-all mt-4">
                إرسال الطلب
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const PricingSection = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-bg-page relative overflow-hidden" dir="rtl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

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
              <Zap size={14} className="text-primary" />
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">
                اختر ما يناسب طموحك
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter">
              باقاتنا <br />
              <span className="gradient-text">المميزة</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: Integrated Platform */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-experimental p-10 flex flex-col h-full group"
          >
            <div className="flex justify-end mb-12">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                <Zap size={12} fill="currentColor" />
                الباقة الأساسية
              </div>
            </div>

            <div className="text-right mb-10">
              <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-primary transition-colors">المنصة المتكاملة</h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-sm">
                إطلاق منصة متكاملة بإدارة محتوى مرنة وسهلة الاستخدام للشركات الناشئة.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {[
                "موقع أو منصة جاهزة",
                "نظام إدارة محتوى",
                "إطلاق سريع للمنصة"
              ].map((feature, i) => (
                <div key={i} className="flex items-center justify-start gap-3 text-white/70 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary">
                    <Check size={12} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <div className="text-right mb-8">
                <div className="flex items-baseline justify-start gap-2">
                  <span className="text-5xl font-bold text-white tracking-tighter">15,000</span>
                  <img src="/img/saudi-riyal.svg" alt="ريال" className="w-6 h-6 brightness-0 invert opacity-60" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ادخل عنوان بريدك الالكتروني" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-right text-sm text-white focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
                
                <AnimatePresence>
                  {email.includes("@") && email.length > 5 && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-4 rounded-2xl bg-primary text-black font-bold text-sm shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:scale-[1.02] transition-all"
                    >
                      طلب الباقة الآن
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Smart Automation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-experimental p-10 flex flex-col h-full group"
          >
            <div className="flex justify-end mb-12">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
                <Brain size={12} fill="currentColor" />
                باقة الأتمتة (قريباً)
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="flex-1 text-right flex flex-col">
                <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-secondary transition-colors">الأتمتة الذكية</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-10">
                  تنظيم الاجتماعات، التذكيرات، وعمليات التحصيل داخل المنصة بشكل آلي بالكامل.
                </p>

                <div className="mt-auto">
                  <div className="flex items-baseline justify-start gap-2 mb-8">
                    <span className="text-5xl font-bold text-white tracking-tighter">45,000</span>
                    <img src="/img/saudi-riyal.svg" alt="ريال" className="w-6 h-6 brightness-0 invert opacity-60" />
                  </div>
                  <button className="w-full py-4 rounded-2xl bg-secondary text-white font-bold text-sm shadow-[0_0_30px_rgba(112,0,255,0.3)] hover:brightness-110 transition-all">
                    قريباً
                  </button>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                {[
                  { title: "أتمتة العمليات", desc: "ذكاء تشغيلي للأعمال", icon: <Brain size={18} /> },
                  { title: "إدارة الاجتماعات", desc: "تنظيم كل المواعيد", icon: <Zap size={18} /> },
                  { title: "التذكيرات والتحصيل", desc: "متابعة المدفوعات", icon: <Shield size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center justify-start gap-4 hover:bg-white/[0.05] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                      {item.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-white text-xs font-bold">{item.title}</div>
                      <div className="text-white/30 text-[10px]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 3: Sovereign Solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 card-experimental p-10 flex flex-col md:flex-row items-center gap-12 group"
          >
            <div className="flex-[2] text-right">
              <div className="flex justify-end mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                  <Shield size={12} fill="currentColor" />
                  باقة التميز المؤسسي (قريباً)
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">حلول سيادية مخصصة</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-10">
                حلول سحابية مخصصة للمؤسسات الكبرى والجهات الحكومية التي تحتاج أعلى درجات الأمان والخصوصية وسيادة البيانات.
              </p>
              <div className="flex justify-end">
                <button className="px-12 py-4 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:brightness-110 transition-all">
                  قريباً
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-3 w-full md:w-auto">
              {["القطاع الحكومي", "المؤسسات", "الشركات الكبيرة"].map((tag, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl py-4 px-6 text-center text-white/40 text-xs font-bold hover:text-white/60 transition-colors">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Custom Package */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 card-experimental p-10 flex flex-col items-center justify-center text-center group cursor-pointer"
          >
            <div className="w-24 h-24 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
              <Plus size={48} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">باقة مخصصة</h3>
            <p className="text-text-muted text-sm font-light">
              صمم حلولك التقنية الخاصة وفق احتياجاتك.
            </p>
          </motion.div>

        </div>
      </div>

      <PackageRequestModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageTitle="الباقة الأساسية"
        packagePrice="15,000"
        initialEmail={email}
        accentColor="#00f2ff"
      />
    </section>
  );
};

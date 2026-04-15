import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube, Globe, Cpu } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-bg-page text-white pt-24 pb-12 mt-40 relative overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Two Main Containers */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          
          {/* Left Container: Links (RTL: Appears on the left) */}
          <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-12 order-2">
            
            {/* Column 1: الصفحات الرئيسية */}
            <div className="text-right">
              <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-8">الصفحات الرئيسية</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-sm font-bold text-primary hover:text-white transition-colors">الرئيسية</Link></li>
                <li><Link to="/#about" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">من نحن</Link></li>
                <li><Link to="/#solutions" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الخدمات</Link></li>
                <li><Link to="/#pricing" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الأعمال</Link></li>
                <li><Link to="/blog" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">المدونة</Link></li>
              </ul>
            </div>

            {/* Column 2: الخدمات */}
            <div className="text-right">
              <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-8">الخدمات</h4>
              <ul className="space-y-4">
                <li><Link to="/#solutions" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الاستراتيجية الرقمية</Link></li>
                <li><Link to="/#solutions" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">تطوير الأنظمة</Link></li>
                <li><Link to="/#solutions" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الاستشارات التقنية</Link></li>
                <li><Link to="/#solutions" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الحوكمة والامتثال</Link></li>
              </ul>
            </div>

            {/* Column 3: المنتجات */}
            <div className="text-right">
              <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-8">المنتجات</h4>
              <ul className="space-y-4">
                <li><Link to="/#pricing" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">منصة بيان</Link></li>
                <li><Link to="/#pricing" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الحلول المؤسسية</Link></li>
                <li><Link to="/#pricing" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الباقات</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
              </ul>
            </div>

            {/* Column 4: الشركة */}
            <div className="text-right">
              <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-8">الشركة</h4>
              <ul className="space-y-4">
                <li><Link to="/#about" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">عن تباين</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الوظائف</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">الشركاء</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-white/60 hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
              </ul>
            </div>

          </div>

          {/* Right Container: Brand Info (RTL: Appears on the right) */}
          <div className="lg:w-1/3 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-16 flex flex-col items-start text-right order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                <img 
                  src="/img/logo.png" 
                  alt="تباين" 
                  className="w-8 h-8 object-contain brightness-0 invert" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tighter">تباين</h3>
            </div>
            
            <p className="text-white/40 text-sm leading-relaxed mb-12 max-w-xs">
              نطور منصات رقمية عالية الاعتمادية تساعد المؤسسات على بناء أنظمة تقنية مستقرة وقابلة للتوسع.
            </p>

            <div className="flex gap-4 mt-auto justify-start">
              {[Linkedin, Twitter, Youtube, Globe].reverse().map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar Container */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 order-1 lg:order-3">
            <img src="/img/footer logo/CLIENT LOGO/الكهربا-1 2.png" alt="الشركة السعودية للكهرباء" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
            <img src="/img/footer logo/CLIENT LOGO/Group 10.png" alt="وزارة الإعلام" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
            <img src="/img/footer logo/CLIENT LOGO/client-43 2.png" alt="شركة المياه الوطنية" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
            <img src="/img/footer logo/CLIENT LOGO/client-24 2.png" alt="برنامج الخدمات المشتركة" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 order-2 lg:order-2">
            <Link to="/contact" className="text-[10px] font-bold text-white/20 hover:text-primary transition-colors uppercase tracking-widest">سياسة الخصوصية</Link>
            <Link to="/contact" className="text-[10px] font-bold text-white/20 hover:text-primary transition-colors uppercase tracking-widest">شروط الاستخدام</Link>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-all order-3 lg:order-1">
            <div className="flex items-center gap-2">
              <img src="/img/footer logo/image 74.png" alt="Apple Pay" className="h-5 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/footer logo/image 75.png" alt="mada" className="h-5 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/footer logo/image 76.png" alt="VISA" className="h-5 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/footer logo/[CITYPNG.COM]Download MasterCard White Logo PNG - 2000x2000 1.png" alt="Mastercard" className="h-6 w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-white/10 text-[10px] font-bold uppercase tracking-[0.3em]">
            جميع الحقوق محفوظة لشركة تباين التقنية © 2026
          </p>
        </div>

      </div>
    </footer>
  );
};



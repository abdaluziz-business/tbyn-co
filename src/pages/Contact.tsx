import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button, Card, SectionHeader, Badge } from "../components/UI";

export const ContactPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="تواصل معنا"
          title="نحن هنا للإجابة على استفساراتك"
          description="سواء كنت تبحث عن استشارة تقنية أو ترغب في معرفة المزيد عن حلولنا، فريقنا جاهز لمساعدتك."
          centered
        />

        <div className="grid lg:grid-cols-3 gap-12 mt-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 text-right">
            <Card className="p-8 border-primary/20 bg-primary/5">
              <h3 className="text-2xl font-bold mb-6 text-white">معلومات الاتصال</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">البريد الإلكتروني</p>
                    <p className="text-text-muted">info@tabayun.sa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">الهاتف</p>
                    <p className="text-text-muted" dir="ltr">+966 500 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">الموقع</p>
                    <p className="text-text-muted">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">ساعات العمل</p>
                    <p className="text-text-muted">الأحد - الخميس: 9:00 ص - 5:00 م</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-secondary/20 bg-secondary/5">
              <div className="flex items-center gap-3 mb-4 flex-row-reverse">
                <MessageSquare className="text-secondary" size={24} />
                <h4 className="text-white font-bold">الدعم الفني</h4>
              </div>
              <p className="text-text-muted text-sm mb-6">
                للمشتركين في نظام تبيان، يمكنكم الحصول على دعم فني مباشر عبر لوحة التحكم الخاصة بكم.
              </p>
              <Button variant="secondary" className="w-full">مركز المساعدة</Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-10 h-full">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted mr-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      placeholder="أدخل اسمك"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted mr-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      placeholder="example@mail.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted mr-2">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      placeholder="05xxxxxxxx"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted mr-2">الموضوع</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors appearance-none">
                      <option className="bg-bg-card">استشارة تقنية</option>
                      <option className="bg-bg-card">طلب تجريبي لنظام تبيان</option>
                      <option className="bg-bg-card">شراكة استراتيجية</option>
                      <option className="bg-bg-card">أخرى</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted mr-2">الرسالة</label>
                  <textarea 
                    rows={6}
                    placeholder="كيف يمكننا مساعدتك؟"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <Button variant="primary" size="lg" className="w-full md:w-fit flex-row-reverse">
                  إرسال الرسالة
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

import { motion } from "motion/react";

const clients = [
  {
    name: "الشركة السعودية للكهرباء",
    logo: "/img/footer logo/CLIENT LOGO/الكهربا-1 2.png",
  },
  {
    name: "وزارة الإعلام",
    logo: "/img/footer logo/CLIENT LOGO/Group 10.png",
  },
  {
    name: "شركة المياه الوطنية",
    logo: "/img/footer logo/CLIENT LOGO/client-43 2.png",
  },
  {
    name: "برنامج الخدمات المشتركة",
    logo: "/img/footer logo/CLIENT LOGO/client-24 2.png",
  },
  // Adding duplicates or similar to fill the grid as requested (5-6 per row)
  {
    name: "الشركة السعودية للكهرباء",
    logo: "/img/footer logo/CLIENT LOGO/الكهربا-1 2.png",
  },
  {
    name: "وزارة الإعلام",
    logo: "/img/footer logo/CLIENT LOGO/Group 10.png",
  },
];

export const ClientsSection = () => {
  return (
    <section className="py-32 bg-bg-page relative overflow-hidden" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-right mb-20">
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            بعض عملائنا المميزين
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            نفتخر بالعمل مع <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">نخبة المؤسسات</span>
          </motion.h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex items-center justify-center aspect-square md:aspect-video lg:aspect-square hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-primary/5"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              
              {/* Tooltip or Label on Hover */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <span className="whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-[10px] text-white/60 font-medium">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/30 hover:text-primary transition-colors group"
          >
            انضم لعملائنا المميزين
            <span className="w-8 h-[1px] bg-white/10 group-hover:bg-primary transition-colors"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

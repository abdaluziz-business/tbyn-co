import { motion } from "motion/react";
import { BookOpen, ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

import { blogs } from "../data/blogs";

export const BlogSection = () => {
  const displayBlogs = blogs.slice(0, 3);

  return (
    <section id="blog" className="py-32 bg-bg-page relative overflow-hidden" dir="rtl">
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
              <BookOpen size={14} className="text-primary" />
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">
                مدونة تباين
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter">
              آخر المقالات <br />
              <span className="gradient-text">والأفكار التقنية</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayBlogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold text-white uppercase tracking-widest">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={12} className="text-primary" />
                    {blog.author}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="mt-auto">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white/60 group-hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    اقرأ المزيد
                    <ArrowRight size={14} className="group-hover:translate-x-[-4px] transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/blog"
              className="px-12 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 flex items-center gap-3 group"
            >
              مشاهدة جميع المقالات
              <ArrowRight size={18} className="group-hover:translate-x-[-4px] transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

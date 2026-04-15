import { motion } from "motion/react";
import { BookOpen, Calendar, User, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

import { blogs } from "../data/blogs";

export const BlogPage = () => {
  const allBlogs = blogs;

  return (
    <div className="pt-32 pb-24 bg-bg-page min-h-screen" dir="rtl">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-right mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <BookOpen size={14} className="text-primary" />
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold">
                المدونة الكاملة
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter text-white">
              استكشف أحدث <br />
              <span className="gradient-text">المقالات التقنية</span>
            </h1>
          </motion.div>
        </div>

        {/* Search & Filter (Placeholder) */}
        <div className="mb-16 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input
              type="text"
              placeholder="ابحث عن مقال..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {["الكل", "تقنية", "بيانات", "ذكاء اصطناعي", "أمن سيبراني"].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold hover:bg-primary hover:border-primary hover:text-white transition-all whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
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
      </div>
    </div>
  );
};

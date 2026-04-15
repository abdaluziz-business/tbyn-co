import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { blogs } from "../data/blogs";
import { useEffect } from "react";

export const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="pt-40 pb-24 text-center text-white">
        <h1 className="text-4xl font-bold mb-8">المقال غير موجود</h1>
        <Link to="/blog" className="text-primary hover:underline">العودة للمدونة</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-bg-page min-h-screen" dir="rtl">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">العودة</span>
        </motion.button>

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold text-white uppercase tracking-widest mb-6">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-white/30 text-xs font-bold uppercase tracking-widest border-y border-white/5 py-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                {blog.author}
              </div>
              <div className="mr-auto flex items-center gap-4">
                <button className="hover:text-primary transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="hover:text-primary transition-colors">
                  <Bookmark size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] overflow-hidden mb-16 border border-white/5"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full aspect-video object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none text-white/70 leading-relaxed 
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tighter
            prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
            prose-p:mb-8
            prose-ul:list-disc prose-ul:pr-6 prose-ul:mb-8
            prose-li:mb-2"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Footer Actions */}
        <div className="mt-20 pt-12 border-t border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs font-bold uppercase tracking-widest">شارك المقال:</span>
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all cursor-pointer">
                  <Share2 size={14} className="text-white/60" />
                </div>
              ))}
            </div>
          </div>
          <Link
            to="/blog"
            className="text-primary font-bold text-sm hover:underline flex items-center gap-2"
          >
            استكشف المزيد من المقالات
            <ArrowLeft size={16} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./UI";

export const Header = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dynamic values based on scroll
  const headerHeight = useTransform(scrollY, [0, 100], ["96px", "72px"]);
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(24px)"]);
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(11, 15, 26, 0)", "rgba(11, 15, 26, 0.8)"]);
  const headerBorder = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "الحلول", href: "/#solutions" },
    { name: "باقات تباين", href: "/#pricing" },
    { name: "إحصائيات", href: "/#stats" },
    { name: "عن تباين", href: "/#about" },
    { name: "المدونة", href: "/blog" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header 
      style={{ 
        height: headerHeight,
        backdropFilter: headerBlur,
        backgroundColor: headerBg,
        borderBottomColor: headerBorder
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b flex items-center"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/img/logo.png" 
            alt="تباين التقنية" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <img 
            src="/logo.png" 
            alt="تباين التقنية" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if image not found
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="text-white font-bold text-2xl tracking-tight hidden sm:block">تباين</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-text-body hover:text-white transition-colors text-sm font-medium"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-text-body hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-text-muted hover:text-white transition-colors">
            <Globe size={20} />
          </button>
          <Link to="/contact" className="hidden md:flex">
            <Button variant="primary" size="sm">
              ناقش مشروعك
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-bg-card border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-text-body hover:text-white py-2 border-b border-white/5"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-text-body hover:text-white py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="primary" className="w-full mt-2">ناقش مشروعك</Button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
};

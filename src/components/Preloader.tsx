import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    
    // Hide preloader after 1.5 seconds for navigation (faster than initial load)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0c14]"
        >
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            {/* Background Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
            />

            {/* Logo Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 w-full h-full"
            >
              <svg 
                viewBox="0 0 981.33 841.89" 
                className="w-full h-full drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2ff" />
                    <stop offset="100%" stopColor="#0066ff" />
                  </linearGradient>
                </defs>
                
                {/* Polygon Part - Drawing Animation */}
                <motion.polygon
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.1
                  }}
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="8"
                  points="481.63 45.82 59.85 45.82 59.85 342.71 313.19 342.71 313.19 276.04 131.41 276.04 131.41 113.37 369.63 113.37 481.63 45.82"
                />
                
                {/* Path Part - Drawing Animation */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="8"
                  d="M587.72,45.82l-204.9,117.48h-197.33c-.89,0,0,69.04,0,69.04h171.26v452.36c0,6.05,3.91,11.41,9.68,13.25h0c6.85,2.18,14.3,1.33,20.47-2.34l151.77-90.23v-312.3l107.56-64h203.26c-4.74,42.96-54.22,46.52-54.22,46.52h-137.19l-77.63,47.41v388.89c0,1.87-1.93,3.12-3.64,2.35l-86.14-38.95-70.81,40.3,139.56,66.96c67.56,41.19,83.56-24.89,83.56-24.89v-415.41h179.85c54.49,0,98.67-44.17,98.67-98.67h0V45.82h-333.77ZM856.89,161.37c0-.44-226.67,1.33-226.67,1.33l-156,92.44v316.44l-52.89,31.56V224.04l186.67-109.33h248.89v46.67Z"
                />

                {/* Fill Animation */}
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  fill="white"
                  d="M587.72,45.82l-204.9,117.48h-197.33c-.89,0,0,69.04,0,69.04h171.26v452.36c0,6.05,3.91,11.41,9.68,13.25h0c6.85,2.18,14.3,1.33,20.47-2.34l151.77-90.23v-312.3l107.56-64h203.26c-4.74,42.96-54.22,46.52-54.22,46.52h-137.19l-77.63,47.41v388.89c0,1.87-1.93,3.12-3.64,2.35l-86.14-38.95-70.81,40.3,139.56,66.96c67.56,41.19,83.56-24.89,83.56-24.89v-415.41h179.85c54.49,0,98.67-44.17,98.67-98.67h0V45.82h-333.77ZM856.89,161.37c0-.44-226.67,1.33-226.67,1.33l-156,92.44v316.44l-52.89,31.56V224.04l186.67-109.33h248.89v46.67Z"
                />
                <motion.polygon
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  fill="white"
                  points="481.63 45.82 59.85 45.82 59.85 342.71 313.19 342.71 313.19 276.04 131.41 276.04 131.41 113.37 369.63 113.37 481.63 45.82"
                />
              </svg>
            </motion.div>

            {/* Loading Bar */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-20 text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]"
          >
            Tabayun Digital
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

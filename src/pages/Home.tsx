import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { PricingSection } from "../components/PricingSection";
import { PerformanceStats } from "../components/PerformanceStats";
import { Certifications } from "../components/Certifications";
import { SolutionsGrid } from "../components/SolutionsGrid";
import { WhyTabayun } from "../components/WhyTabayun";
import { BlogSection } from "../components/BlogSection";
import { ClientsSection } from "../components/ClientsSection";

export const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      
      <SolutionsGrid />

      <PricingSection />

      <PerformanceStats />

      <Certifications />

      <WhyTabayun />
      
      <ClientsSection />

      <BlogSection />

    </>
  );
};

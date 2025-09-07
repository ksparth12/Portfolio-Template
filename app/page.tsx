"use client";

import { navItems } from "@/data";
import { dockItems } from "@/data/dock-items";
import { useEffect, useState, useRef } from "react";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import AnimatedDock from "@/components/animata/container/animated-dock";
import Projects from "@/components/Projects";

const Home = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl w-full mx-auto">
        {/* Desktop Dock - positioned at bottom */}
        <div 
          className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${
            isFooterVisible ? 'opacity-0 translate-y-20 pointer-events-none' : 'opacity-100 translate-y-0'
          }`}
        >
          <AnimatedDock 
            items={dockItems} 
            largeClassName="bg-black-100/80 border-white/20" 
            smallClassName="" 
          />
        </div>

        {/* Mobile Hamburger Menu - positioned at top-right */}
        <div className="fixed top-4 right-4 z-50 md:hidden">
          <AnimatedDock 
            items={dockItems} 
            largeClassName="" 
            smallClassName="" 
          />
        </div>
        
        <Hero />
        <Grid />
        <Projects/>
        {/* <RecentProjects /> */}
        <Clients />
        <Experience />
        <Approach />
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;

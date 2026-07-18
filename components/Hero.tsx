"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Waves, ShieldAlert, Award } from "lucide-react";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_background.png"
          alt="Clean River and Ocean Landscape"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Layered gradients for a deep premium aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark via-ocean-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/90 via-transparent to-ocean-dark/20" />
        {/* Glowing floating spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-glow/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-light/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy Column */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-teal-deep/30 border border-teal-glow/30 px-4 py-2 rounded-full backdrop-blur-md"
            >
              <Waves className="h-4 w-4 text-teal-glow animate-bounce" />
              <span className="text-xs font-bold uppercase tracking-widest text-teal-glow">
                Save Our Seas Initiative
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white"
            >
              Protecting Our Waterways. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-glow via-cyan-glow to-emerald-glow glow-text-teal">
                Building Cleaner Communities.
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Save Our Seas (SOS) is dedicated to reducing plastic pollution, promoting responsible waste management, and protecting our precious rivers and waterways through Project TIDE.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#plastic-to-cash"
                onClick={(e) => scrollToSection(e, "#plastic-to-cash")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-ocean-dark bg-teal-glow hover:bg-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(13,242,201,0.35)] hover:scale-105"
              >
                <span>Earn TIDE Rewards</span>
                <Award className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "#about")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:border-teal-glow hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span>Learn Our Mission</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* Quick Stats Overlay for Large Screens */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-teal-glow">12,000+</h3>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mt-1">Kg Plastic Recycled</p>
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-cyan-glow">3+</h3>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mt-1">Rivers Protected</p>
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-emerald-glow">2</h3>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mt-1">Active Hubs</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Graphic/Feature Card Column */}
          <motion.div 
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className="glass glow-teal p-8 rounded-3xl space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-glow/10 rounded-full blur-2xl group-hover:bg-teal-glow/20 transition-all duration-500" />
              
              <div className="flex items-center space-x-3 text-teal-glow">
                <ShieldAlert className="h-6 w-6" />
                <h4 className="font-heading font-bold text-sm uppercase tracking-widest">
                  Active Alert
                </h4>
              </div>

              <h3 className="font-heading font-black text-2xl text-white">
                Our waterways are in danger.
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Over 8 million tons of plastic enter our oceans annually. Through community action and incentivized recycling, we intercept waste directly from sources in Rivers State.
              </p>

              <div className="space-y-4">
                {[
                  "Community-driven cleanup operations",
                  "Educational modules in local schools",
                  "Points-to-scholarships redemption programs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-xs font-semibold text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-glow" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="#project-tide"
                onClick={(e) => scrollToSection(e, "#project-tide")}
                className="inline-flex w-full items-center justify-center py-3 rounded-xl border border-teal-glow/20 bg-teal-glow/5 hover:bg-teal-glow/15 text-xs font-bold uppercase tracking-wider text-teal-glow transition-all duration-300"
              >
                Discover Project TIDE
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating waves bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ocean-dark to-transparent z-10 pointer-events-none" />
    </section>
  );
}

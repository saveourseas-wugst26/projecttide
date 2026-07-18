"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Plastic to Cash", href: "#plastic-to-cash" },
  { label: "Collection Centres", href: "#collection-centres" },
  { label: "Project TIDE", href: "#project-tide" },
  { label: "Gallery", href: "#gallery" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for background styling
      setIsScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // Navbar height
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-teal-glow/30 flex items-center justify-center bg-ocean-deep/50 transition-all duration-300 group-hover:border-teal-glow/80">
                <Image
                  src="/logos/tide_logo.png"
                  alt="Save Our Seas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight tracking-wider text-slate-100 group-hover:text-teal-glow transition-colors duration-300">
                  SOS
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-teal-glow leading-none">
                  Project TIDE
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-teal-glow bg-white/5 border border-teal-glow/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-glow rounded-full shadow-[0_0_8px_#0df2c9]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTAs / Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="#plastic-to-cash"
              onClick={(e) => handleLinkClick(e, "#plastic-to-cash")}
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-widest text-ocean-dark bg-teal-glow hover:bg-white hover:text-ocean-dark rounded-full transition-all duration-300 glow-teal hover:scale-105"
            >
              Earn Rewards
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none transition-colors duration-300 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6 text-teal-glow" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-40 w-80 max-w-sm glass border-l border-white/10 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 pb-6 px-6 overflow-y-auto flex-grow">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-teal-glow bg-teal-deep/20 border border-teal-glow/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.label}
                  {isActive && <span className="w-2 h-2 bg-teal-glow rounded-full shadow-[0_0_8px_#0df2c9]" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="p-6 border-t border-white/5 bg-ocean-dark/50">
          <a
            href="#plastic-to-cash"
            onClick={(e) => handleLinkClick(e, "#plastic-to-cash")}
            className="flex w-full items-center justify-center py-3.5 text-sm font-bold uppercase tracking-widest text-ocean-dark bg-teal-glow hover:bg-white rounded-xl transition-all duration-300 glow-teal"
          >
            Earn Rewards
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
        />
      )}
    </nav>
  );
}

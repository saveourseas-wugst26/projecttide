"use client";

import Image from "next/image";
import { Mail, Globe, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

  return (
    <footer className="relative bg-ocean-dark border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-glow/5 to-transparent rounded-full blur-[100px] -z-10" />
      <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-ocean-light/5 to-transparent rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-teal-glow/30 flex items-center justify-center bg-ocean-deep">
                <Image
                  src="/logos/tide_logo.png"
                  alt="Save Our Seas Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-xl tracking-wider text-white">SOS</h4>
                <p className="text-[11px] uppercase font-bold tracking-widest text-teal-glow">Project TIDE</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Protecting our waterways and building cleaner communities through advocacy, community rewards, and education.
            </p>

            <blockquote className="border-l-2 border-teal-glow/50 pl-4 py-1 text-slate-300 italic text-sm">
              &ldquo;Protecting our waterways is protecting our future.&rdquo;
            </blockquote>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h5 className="font-heading font-bold text-sm uppercase tracking-widest text-white border-b border-white/10 pb-2 w-fit">
              Navigation
            </h5>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-medium">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Plastic to Cash", href: "#plastic-to-cash" },
                { label: "Collection Centres", href: "#collection-centres" },
                { label: "Project TIDE", href: "#project-tide" },
                { label: "Gallery", href: "#gallery" },
                { label: "Partners", href: "#partners" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 hover:text-teal-glow transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-transparent group-hover:bg-teal-glow rounded-full mr-2 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h5 className="font-heading font-bold text-sm uppercase tracking-widest text-white border-b border-white/10 pb-2 w-fit">
              Contact
            </h5>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-teal-glow mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@saveourseas.org" className="hover:text-white transition-colors duration-300">
                  hello@saveourseas.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-teal-glow mt-0.5 flex-shrink-0" />
                <a href="https://saveourseas.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  saveourseas.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-glow mt-0.5 flex-shrink-0" />
                <span>
                  Isiokpo & Wigwe University Campus,<br />Rivers State, Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h5 className="font-heading font-bold text-sm uppercase tracking-widest text-white border-b border-white/10 pb-2 w-fit">
              Stay Connected
            </h5>
            <p className="text-slate-400 text-sm leading-relaxed">
              Join our movement and keep updated on upcoming cleanups and community events.
            </p>
            
            <a
              href="https://chat.whatsapp.com/mock-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-ocean-dark bg-teal-glow hover:bg-white transition-all duration-300 glow-teal hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Join WhatsApp Group</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Save Our Seas (SOS) Initiative. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-teal-glow transition-colors duration-300">Privacy Policy</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-teal-glow transition-colors duration-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

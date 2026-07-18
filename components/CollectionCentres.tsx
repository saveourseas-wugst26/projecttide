"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck, Navigation } from "lucide-react";

interface Centre {
  name: string;
  coords: { x: number; y: number }; // Percentage offsets for custom map mockup
  status: "Active" | "Coming Soon";
  address: string;
  hours: string;
  phone: string;
}

const centres: Centre[] = [
  {
    name: "Isiokpo Centre",
    coords: { x: 35, y: 40 },
    status: "Active",
    address: "Project TIDE Community Hub, Isiokpo Town, Rivers State",
    hours: "Mon - Fri: 8:00 AM - 4:00 PM",
    phone: "+234 (0) 800 767 8433",
  },
  {
    name: "Wigwe University",
    coords: { x: 55, y: 48 },
    status: "Active",
    address: "Campus Recycling Yard, Wigwe University Campus, Isiokpo, Rivers State",
    hours: "Mon - Sat: 9:00 AM - 5:00 PM",
    phone: "+234 (0) 800 767 8433",
  },
  {
    name: "Port Harcourt Hub",
    coords: { x: 65, y: 80 },
    status: "Coming Soon",
    address: "Central Collection Depot, Trans-Amadi, Port Harcourt, Rivers State",
    hours: "Expected Launch: Q4 2026",
    phone: "Contact hello@saveourseas.org",
  },
];

export default function CollectionCentres() {
  const [selectedCentre, setSelectedCentre] = useState<Centre>(centres[0]);

  return (
    <section id="collection-centres" className="relative py-24 bg-ocean-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-ocean-light/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4">
            <MapPin className="h-4 w-4 text-teal-glow" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Drop-off Locations
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Current Collection Points
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Drop off your collected plastics at any approved Project TIDE Collection Centre to instantly verify weight and earn points.
          </p>
        </div>

        {/* Interactive Map Layout & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Location Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {centres.map((centre) => {
              const isActive = selectedCentre.name === centre.name;
              const isComingSoon = centre.status === "Coming Soon";
              return (
                <motion.div
                  key={centre.name}
                  onClick={() => setSelectedCentre(centre)}
                  className={`glass p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    isActive 
                      ? "border-teal-glow/40 bg-white/5 shadow-[0_0_15px_rgba(13,242,201,0.08)]" 
                      : "border-white/5 hover:border-white/15"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-teal-glow transition-colors duration-300">
                        {centre.name}
                      </h3>
                      
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        isComingSoon
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-teal-glow/10 text-teal-glow border border-teal-glow/20"
                      }`}>
                        {centre.status}
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {centre.address}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex flex-col space-y-2 text-xs font-semibold text-slate-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3.5 w-3.5 text-teal-glow flex-shrink-0" />
                      <span>{centre.hours}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <button
              onClick={() => window.open("https://chat.whatsapp.com/mock-link", "_blank")}
              className="inline-flex w-full items-center justify-center space-x-2 py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-widest text-white border border-white/10 hover:border-teal-glow hover:bg-white/5 transition-all duration-300"
            >
              <Navigation className="h-4 w-4" />
              <span>Find a Collection Centre</span>
            </button>
          </div>

          {/* Map Graphic / Interactive Overlay Column */}
          <div className="lg:col-span-7">
            <div className="glass w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden relative border border-white/5 flex flex-col justify-between p-6">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              {/* Simulated Rivers State Map graphic */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-20">
                <svg className="w-4/5 h-4/5 text-slate-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  {/* Mock Rivers State shape */}
                  <path d="M 20,40 C 25,30 35,28 45,32 C 55,36 60,30 70,35 C 80,40 85,50 80,60 C 75,70 70,85 55,80 C 40,75 35,82 25,75 C 15,68 18,50 20,40 Z" />
                  {/* Rivers / Delta channels */}
                  <path d="M 30,30 Q 35,42 22,60" strokeDasharray="2,2" />
                  <path d="M 50,33 Q 48,50 60,78" strokeDasharray="2,2" />
                  <path d="M 70,35 Q 60,55 75,68" strokeDasharray="2,2" />
                </svg>
              </div>

              {/* Header inside Map */}
              <div className="relative z-10 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                  Simulated Regional Hub Map
                </span>
                
                <span className="inline-flex items-center space-x-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest">
                  Live Feed Status
                </span>
              </div>

              {/* Map Points Overlay */}
              <div className="absolute inset-0">
                {centres.map((centre) => {
                  const isSelected = selectedCentre.name === centre.name;
                  const isComingSoon = centre.status === "Coming Soon";
                  return (
                    <button
                      key={centre.name}
                      onClick={() => setSelectedCentre(centre)}
                      style={{ left: `${centre.coords.x}%`, top: `${centre.coords.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group/pin focus:outline-none transition-transform duration-300"
                    >
                      {/* Outer pulse */}
                      <span className={`absolute inset-0 rounded-full scale-150 animate-ping opacity-25 ${
                        isComingSoon ? "bg-amber-500" : "bg-teal-glow"
                      }`} />
                      
                      {/* Inner point */}
                      <div className={`relative w-8 h-8 rounded-full flex items-center justify-center border shadow-lg transition-all duration-300 ${
                        isSelected
                          ? isComingSoon 
                            ? "bg-amber-500/80 border-amber-400 text-white scale-110 glow-teal"
                            : "bg-teal-glow/80 border-teal-glow text-ocean-dark scale-110 glow-teal"
                          : isComingSoon
                            ? "bg-ocean-deep border-amber-500/50 text-amber-500"
                            : "bg-ocean-deep border-teal-glow/50 text-teal-glow"
                      }`}>
                        <MapPin className="h-4 w-4" />
                      </div>

                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pin:block bg-ocean-dark border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-bold text-white whitespace-nowrap shadow-md">
                        {centre.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Info Overlay Box inside Map */}
              <motion.div 
                key={selectedCentre.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 glass-light p-4 rounded-xl max-w-sm mt-auto border border-white/10"
              >
                <h4 className="text-xs font-bold text-white uppercase tracking-wide mb-1 flex items-center">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal-glow mr-1.5 flex-shrink-0" />
                  {selectedCentre.name} Details
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {selectedCentre.address}
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-2 mt-2 text-[10px] text-slate-400 font-semibold">
                  <span>{selectedCentre.phone}</span>
                  <a 
                    href="#contact" 
                    className="text-teal-glow hover:underline uppercase tracking-widest text-[9px] font-bold"
                  >
                    Contact Hub
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

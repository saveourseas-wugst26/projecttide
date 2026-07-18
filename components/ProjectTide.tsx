"use client";

import { motion } from "framer-motion";
import { 
  Megaphone, 
  GraduationCap, 
  Users, 
  SearchCode, 
  Presentation, 
  Handshake, 
  Tv, 
  Layers 
} from "lucide-react";

interface FocusArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const focusAreas: FocusArea[] = [
  {
    icon: <Megaphone className="h-6 w-6 text-teal-glow" />,
    title: "Awareness Campaigns",
    description: "Public sensitizations and targeted digital drives to discourage plastic dumping and trash accumulation.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-teal-glow" />,
    title: "School Outreach",
    description: "Setting up SOS clubs in secondary schools and colleges, driving recycling bins deployment.",
  },
  {
    icon: <Users className="h-6 w-6 text-teal-glow" />,
    title: "Community Engagement",
    description: "Recruiting local volunteers for coastal cleanups and public space maintenance exercises.",
  },
  {
    icon: <SearchCode className="h-6 w-6 text-teal-glow" />,
    title: "Research & Assessments",
    description: "Publishing localized environmental audits, tracking waste tonnage and river pollution vectors.",
  },
  {
    icon: <Presentation className="h-6 w-6 text-teal-glow" />,
    title: "Stakeholder Seminars",
    description: "Engaging corporate leaders and state authorities to draft packaging regulations and CSR systems.",
  },
  {
    icon: <Handshake className="h-6 w-6 text-teal-glow" />,
    title: "Sustainability Partnerships",
    description: "Connecting local cleanup hubs with certified recyclers and industrial logistics partners.",
  },
  {
    icon: <Tv className="h-6 w-6 text-teal-glow" />,
    title: "Media & Education",
    description: "Disseminating informational booklets, news columns, radio spots, and conservation resources.",
  },
];

export default function ProjectTide() {
  return (
    <section id="project-tide" className="relative py-24 bg-gradient-to-b from-ocean-deep to-ocean-dark overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(13,242,201,0.04),transparent_50%)]" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-ocean-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4">
            <Layers className="h-4 w-4 text-teal-glow animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Implementation Arm
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            About Project TIDE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Project TIDE (Transforming Infrastructure, Disposal & Environment) is the active enforcement and implementation arm of Save Our Seas (SOS).
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-teal-glow/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3.5 bg-white/5 border border-white/10 w-fit rounded-2xl group-hover:scale-105 group-hover:border-teal-glow/20 transition-all duration-300">
                  {area.icon}
                </div>
                
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-teal-glow transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <span>Action Focus</span>
                <span className="w-1.5 h-1.5 bg-teal-glow rounded-full shadow-[0_0_6px_#0df2c9]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

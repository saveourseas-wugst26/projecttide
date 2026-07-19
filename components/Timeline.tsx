"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Microscope, 
  Handshake, 
  GraduationCap, 
  Globe, 
  Calendar, 
  ArrowRight,
  TrendingUp
} from "lucide-react";

interface Milestone {
  date: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  bullets?: string[];
}

const milestones: Milestone[] = [
  {
    date: "June 2, 2026",
    title: "Save Our Seas (SOS) & Project TIDE Founded",
    icon: <Rocket className="h-5 w-5 text-teal-glow" />,
    description: "Save Our Seas (SOS) was launched as a public environmental awareness movement, with Project TIDE (Transforming Infrastructure, Disposal & Environment) established as its implementation initiative to promote responsible plastic waste management and protect our waterways.",
  },
  {
    date: "June 3, 2026",
    title: "Environmental Research & Community Assessment",
    icon: <Microscope className="h-5 w-5 text-teal-glow" />,
    description: "We conducted our first environmental study to assess the impact of poor plastic waste disposal on rivers, water bodies, and surrounding communities in Isiokpo. The findings provided the foundation for our awareness campaign and long-term sustainability strategy.",
  },
  {
    date: "June 29, 2026",
    title: "Partnership with Trashcoin",
    icon: <Handshake className="h-5 w-5 text-teal-glow" />,
    description: "Project TIDE partnered with Trashcoin to launch the Plastic-to-Cash (P2C) Program, empowering community members to recycle plastic waste in exchange for TIDE Rewards, while promoting a circular economy and cleaner communities.",
  },
  {
    date: "June 30, 2026",
    title: "School & Community Outreach",
    icon: <GraduationCap className="h-5 w-5 text-teal-glow" />,
    description: "Our team visited Model Secondary School, Isiokpo, executing critical community activation steps:",
    bullets: [
      "Delivered an environmental awareness session on plastic pollution and water conservation.",
      "Engaged students and teachers through interactive discussions.",
      "Installed campaign banners and distributed educational flyers across the community.",
      "Donated waste disposal materials to support proper waste management and environmental responsibility."
    ]
  },
  {
    date: "July 17, 2026",
    title: "Official Website Launch",
    icon: <Globe className="h-5 w-5 text-teal-glow" />,
    description: "The official Project TIDE website launched, providing a digital platform for environmental education, Plastic-to-Cash participation, community engagement, partnership opportunities, and project impact reporting.",
  }
];

const nextSteps = [
  "Expand the Plastic-to-Cash (P2C) programme across Rivers State.",
  "Establish additional Project TIDE Collection Centres.",
  "Partner with schools, communities, NGOs, and corporate organizations.",
  "Scale environmental education and awareness campaigns.",
  "Build a cleaner, healthier, and more sustainable future for Nigeria."
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 bg-gradient-to-b from-ocean-dark to-ocean-deep overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-glow/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-ocean-light/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4">
            <Calendar className="h-4 w-4 text-teal-glow" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Timeline
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Journey: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-glow via-cyan-glow to-emerald-glow glow-text-teal">
              From Awareness to Action
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Every milestone represents another step toward building cleaner waterways, informed communities, and a more sustainable future for Rivers State.
          </p>
        </div>

        {/* Milestone Steps */}
        <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-16 py-4">
          {/* Animated line highlights */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal-glow via-cyan-glow to-transparent" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full glass border border-white/15 flex items-center justify-center bg-ocean-dark transition-all duration-300 group-hover:border-teal-glow/50 group-hover:scale-110">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-glow/85 group-hover:bg-teal-glow shadow-[0_0_8px_#0df2c9]" />
              </div>

              {/* Card Box */}
              <div className="glass p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-teal-glow/20 transition-all duration-300 hover:bg-white/5 shadow-lg relative overflow-hidden">
                {/* Floating glow spot */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-teal-glow/5 rounded-full blur-xl pointer-events-none group-hover:bg-teal-glow/10 transition-all duration-500" />
                
                {/* Top Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center space-x-2.5 text-teal-glow">
                    {milestone.icon}
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-teal-glow transition-colors duration-300">
                      {milestone.title}
                    </h3>
                  </div>
                  
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full w-fit">
                    {milestone.date}
                  </span>
                </div>

                <p className="text-slate-350 text-sm leading-relaxed font-medium">
                  {milestone.description}
                </p>

                {/* Bullet items list if present */}
                {milestone.bullets && (
                  <ul className="mt-4 space-y-2 border-l border-teal-glow/20 pl-4 py-1">
                    {milestone.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-xs text-slate-400 leading-relaxed flex items-start space-x-2">
                        <span className="text-teal-glow mt-0.5">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Next Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-24 glass p-8 sm:p-10 rounded-3xl border border-teal-glow/15 bg-gradient-to-br from-teal-deep/15 to-transparent relative overflow-hidden group shadow-xl"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-teal-glow/5 rounded-full blur-2xl pointer-events-none group-hover:bg-teal-glow/10 transition-all duration-500" />
          
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2.5 bg-teal-deep/20 border border-teal-glow/30 rounded-xl text-teal-glow">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-xl text-white">What&apos;s Next?</h3>
              <p className="text-xs text-teal-glow uppercase font-bold tracking-widest mt-0.5">Looking Ahead</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Our operations are rapidly scaling. We are expanding outreach programs, connecting with regional logistics players, and creating a unified platform for environmental data reporting.
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-teal-glow hover:text-white transition-colors duration-300"
              >
                <span>Partner with us today</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-6">
              {nextSteps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs font-medium text-slate-350 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-glow mt-1.5 flex-shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

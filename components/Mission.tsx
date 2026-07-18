"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, GraduationCap, HeartHandshake } from "lucide-react";

interface GoalItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const goals: GoalItem[] = [
  {
    icon: <Users className="h-5 w-5 text-teal-glow" />,
    title: "Community Outreach",
    description: "Empowering local neighborhood unions, market women, and youth associations to manage waste efficiently.",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-teal-glow" />,
    title: "School Programs",
    description: "Installing environmental awareness clubs and recycling points in secondary schools and tertiary institutions.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5 text-teal-glow" />,
    title: "Strategic Partnerships",
    description: "Collaborating with local waste recyclers, corporate sponsors, and environmental protection agencies.",
  },
];

export default function Mission() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-ocean-dark to-ocean-deep overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-teal-glow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-ocean-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass p-8 sm:p-12 rounded-3xl relative overflow-hidden group hover:border-teal-glow/20 transition-all duration-300"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-glow/5 rounded-full blur-2xl group-hover:bg-teal-glow/10 transition-all duration-500" />
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-teal-deep/20 border border-teal-glow/30 rounded-2xl">
                <Target className="h-8 w-8 text-teal-glow" />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">Our Mission</h3>
                <p className="text-xs uppercase font-bold tracking-widest text-teal-glow mt-0.5">Commitment to action</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To inspire individuals, schools, communities, institutions, and organizations to become active stewards of the environment by promoting proper waste disposal, environmental education, and collaborative sustainability initiatives. We believe that by building clean habits, we can transform ecological waste into valuable community opportunities.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass p-8 sm:p-12 rounded-3xl relative overflow-hidden group hover:border-teal-glow/20 transition-all duration-300"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-glow/5 rounded-full blur-2xl group-hover:bg-teal-glow/10 transition-all duration-500" />

            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-teal-deep/20 border border-teal-glow/30 rounded-2xl">
                <Eye className="h-8 w-8 text-teal-glow" />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">Our Vision</h3>
                <p className="text-xs uppercase font-bold tracking-widest text-teal-glow mt-0.5">Focusing on the future</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To build a future where every community contributes to cleaner waterways, healthier ecosystems, and a more sustainable Nigeria and Africa. We envision a society that does not treat plastic as waste, but as an economic resource, creating a clean circular economy that protects our rivers for generations.
            </p>
          </motion.div>
        </div>

        {/* Goals Sub-grid */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
              Our Core Pillars of Engagement
            </h4>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              How we drive systemic changes and execute on our mission day-to-day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-light p-6 rounded-2xl hover:bg-white/5 border border-white/5 transition-all duration-300"
              >
                <div className="p-3 bg-white/5 w-fit rounded-xl mb-4 border border-white/5">
                  {goal.icon}
                </div>
                <h5 className="font-heading font-bold text-lg text-white mb-2">{goal.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

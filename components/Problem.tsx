"use client";

import { motion } from "framer-motion";
import { AlertCircle, Ban, TrendingUp, Anchor } from "lucide-react";

interface ProblemStat {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

const stats: ProblemStat[] = [
  {
    icon: <AlertCircle className="h-6 w-6" />,
    value: "8 Million Tons",
    label: "Ocean Plastic Influx",
    description: "The volume of plastic dumped into global oceans every single year, choking marine life.",
    color: "from-red-500/20 to-orange-500/20 text-orange-400 border-orange-500/30",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    value: "150 Million Tons",
    label: "Accumulated Waste",
    description: "The total estimated weight of plastic waste currently circulating in marine environments.",
    color: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/30",
  },
  {
    icon: <Ban className="h-6 w-6" />,
    value: "450 Years",
    label: "Decomposition Rate",
    description: "How long a single plastic water bottle takes to biodegrade, breaking down into microplastics.",
    color: "from-emerald-500/20 to-teal-500/20 text-teal-glow border-teal-glow/30",
  },
];

export default function Problem() {
  return (
    <section id="about" className="relative py-24 bg-ocean-dark overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-ocean-medium/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4"
          >
            <Anchor className="h-4 w-4 text-teal-glow" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300">
              The Plastic Crisis
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Our Waterways Are <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Choking In Plastic
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base lg:text-lg mt-6 leading-relaxed"
          >
            Uncontrolled plastic pollution damages ecosystems, blocks drainage channels, causes floods, and leaks toxic chemicals into rivers like the Niger Delta and local communities in Rivers State.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`glass p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group bg-gradient-to-br ${stat.color} hover:scale-[1.02]`}
            >
              <div className="space-y-4">
                <div className="p-3 bg-white/5 border border-white/10 w-fit rounded-2xl">
                  {stat.icon}
                </div>
                
                <h3 className="font-heading font-black text-3xl tracking-tight text-white group-hover:glow-text-teal">
                  {stat.value}
                </h3>
                
                <h4 className="font-bold text-sm uppercase tracking-wider text-slate-200">
                  {stat.label}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
              
              <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-300">
                <span>Environmental Impact</span>
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Block / Additional Context */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/10 via-transparent to-ocean-medium/20 -z-10" />
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl italic font-medium leading-relaxed">
            &ldquo;Without immediate intervention, scientists project that by 2050, there will be more plastic than fish in our oceans. Project TIDE intercepts plastic waste at the source, offering rewards to drive systematic behavioral change.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-teal-glow">
            <span>Project TIDE Scientific Assessment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

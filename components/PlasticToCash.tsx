"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Coins, 
  ShieldCheck, 
  Sparkles, 
  Plus, 
  Minus,
  Info
} from "lucide-react";

interface Step {
  step: number;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    step: 1,
    title: "Collect Waste",
    description: "Collect plastic bottles and containers from your home, school, or community.",
    image: "/images/step1_collect.png",
  },
  {
    step: 2,
    title: "Visit Centre",
    description: "Bring your collected plastics to the nearest approved Project TIDE Collection Centre.",
    image: "/images/step2_dropoff.png",
  },
  {
    step: 3,
    title: "Weigh In",
    description: "Our friendly team weighs your plastics on our calibrated digital scales.",
    image: "/images/step3_weigh.png",
  },
  {
    step: 4,
    title: "Earn Points",
    description: "Receive 100 TIDE Points per kilogram directly credited to your member account.",
    image: "/images/step4_earn.png",
  },
  {
    step: 5,
    title: "Redeem Rewards",
    description: "Redeem points for scholarships, cash vouchers, school supplies, or community benefits.",
    image: "/images/step5_redeem.png",
  },
];

const benefits = [
  { icon: "♻️", title: "Protect Rivers & Waterways", desc: "Help intercept plastic waste before it clogs local water streams and reaches the ocean." },
  { icon: "💰", title: "Earn TIDE Rewards", desc: "Turn recyclable trash into digital points that hold real value in our partner network." },
  { icon: "🎓", title: "Unlock Scholarships & Benefits", desc: "Funding education opportunities and public utility access for active participants." },
  { icon: "🌍", title: "Reduce Plastic Pollution", desc: "Support the regional cleanup initiatives driving environmental hygiene." },
];

export default function PlasticToCash() {
  const [weight, setWeight] = useState<number>(10);
  const [activeStep, setActiveStep] = useState<number>(1);

  const points = weight * 100;

  // Determine reward tier based on points
  const getRewardTier = (pts: number) => {
    if (pts < 500) return { name: "Eco Starter", benefit: "Basic Cleanup Merchandise & Certificate" };
    if (pts < 1000) return { name: "Waterway Guard", benefit: "Mobile Data Bundle (1.5GB) / Solar Rechargeable Lamp" };
    if (pts < 2500) return { name: "Community Steward", benefit: "School Supplies Kit / Health Checkup Voucher" };
    if (pts < 5000) return { name: "TIDE Champion", benefit: "Tuition Relief Grant (Partially Funded Scholarship)" };
    return { name: "SOS Ambassador", benefit: "Full Term Academic Scholarship & Leadership Recognition" };
  };

  const currentTier = getRewardTier(points);

  return (
    <section id="plastic-to-cash" className="relative py-24 bg-ocean-deep overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(13,242,201,0.06),transparent_60%)]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-teal-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-teal-glow/10 border border-teal-glow/20 px-4 py-2 rounded-full mb-6">
            <Coins className="h-4 w-4 text-teal-glow" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal-glow">
              Project TIDE Rewards
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Plastic to Cash: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-glow via-cyan-glow to-emerald-glow glow-text-teal">
              Turn Plastic Into Opportunity
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg mt-6 leading-relaxed">
            Every plastic bottle you recycle helps protect our rivers—and earns you <strong>TIDE Rewards</strong>. Bring your recyclable plastics to any approved collection centre and receive <strong>100 TIDE Points for every 1 kg</strong> of plastic submitted.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-teal-glow/20 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
              <h4 className="font-heading font-bold text-base text-white mb-2">{b.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Five-Step Process Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">How It Works</h3>
            <p className="text-slate-400 text-sm mt-3">From collection to reward, track the 5-step Project TIDE process.</p>
          </div>

          {/* Desktop flow structure */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {/* Connection line background */}
            <div className="absolute top-1/3 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-glow/20 via-cyan-glow/40 to-emerald-glow/20 -z-10" />
            
            {steps.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.step * 0.12 }}
                onClick={() => setActiveStep(step.step)}
                className={`relative flex flex-col items-center text-center cursor-pointer group p-4 rounded-2xl transition-all duration-300 ${
                  activeStep === step.step ? "bg-white/5 border border-teal-glow/30 shadow-[0_0_15px_rgba(13,242,201,0.1)]" : "border border-transparent"
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square max-w-[140px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-teal-glow/40 transition-colors duration-300 mb-6 bg-ocean-dark shadow-md">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Step bubble */}
                  <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-teal-glow text-ocean-dark text-xs font-black flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>
                
                <h4 className="font-heading font-bold text-sm text-white mb-2 group-hover:text-teal-glow transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[180px] line-clamp-3">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile list structure */}
          <div className="lg:hidden flex flex-col space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-5 rounded-2xl flex items-center space-x-4 border border-white/5"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-ocean-dark">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-1 left-1 w-5 h-5 rounded-full bg-teal-glow text-ocean-dark text-[10px] font-black flex items-center justify-center shadow">
                    {step.step}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-heading font-bold text-sm text-white mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Calculator and Rate Table Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-16">
          {/* Interactive Calculator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass glow-teal p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-teal-glow/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-teal-deep/20 border border-teal-glow/30 rounded-xl text-teal-glow">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-white">Rewards Calculator</h3>
                  <p className="text-xs text-teal-glow uppercase font-bold tracking-widest mt-0.5">Calculate Your Impact</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Estimate how many TIDE Points you&apos;ll earn based on the weight of recyclable plastic you submit.
              </p>

              {/* Slider Area */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between">
                  <label className="text-slate-300 text-sm font-semibold uppercase tracking-wider">Plastic Weight (kg)</label>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => setWeight(Math.max(1, weight - 1))}
                      className="p-1 rounded bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                      aria-label="Decrease weight"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      max="500"
                      value={weight}
                      onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 bg-white/5 border border-white/15 rounded text-center text-sm font-bold text-white py-1 focus:outline-none focus:border-teal-glow"
                    />
                    <button 
                      onClick={() => setWeight(Math.min(500, weight + 1))}
                      className="p-1 rounded bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                      aria-label="Increase weight"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={weight > 100 ? 100 : weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="w-full h-2 bg-ocean-dark rounded-lg appearance-none cursor-pointer accent-teal-glow"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">
                    <span>1 kg</span>
                    <span>25 kg</span>
                    <span>50 kg</span>
                    <span>75 kg</span>
                    <span>100 kg+</span>
                  </div>
                </div>
              </div>

              {/* Results Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-ocean-dark/40 border border-white/5 rounded-2xl mb-6">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Points Earned</span>
                  <div className="flex items-baseline space-x-1.5 mt-1">
                    <span className="text-3xl font-heading font-black text-teal-glow leading-none">
                      {points.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">TIDE</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Member Tier</span>
                  <div className="text-white font-heading font-bold text-lg mt-1 flex items-center space-x-1.5">
                    <ShieldCheck className="h-5 w-5 text-emerald-glow" />
                    <span>{currentTier.name}</span>
                  </div>
                </div>
              </div>

              {/* Reward preview benefit banner */}
              <div className="p-4 bg-teal-glow/5 border border-teal-glow/20 rounded-xl flex items-start space-x-3 mb-6">
                <Info className="h-5 w-5 text-teal-glow mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Redeemable Rewards Suggested</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    {currentTier.benefit}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-ocean-dark bg-teal-glow hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(13,242,201,0.2)]"
            >
              Sign Up to Open Account
            </a>
          </motion.div>

          {/* Standard Rates Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 glass p-8 rounded-3xl flex flex-col justify-between border border-white/5"
          >
            <div>
              <h3 className="font-heading font-black text-lg text-white mb-6">Submission Reward Tiers</h3>
              
              <div className="divide-y divide-white/5">
                {[
                  { weight: "1 kg", reward: "100 TIDE Points" },
                  { weight: "5 kg", reward: "500 TIDE Points" },
                  { weight: "10 kg", reward: "1,000 TIDE Points" },
                  { weight: "25 kg", reward: "2,500 TIDE Points" },
                  { weight: "50 kg", reward: "5,000 TIDE Points" },
                ].map((row, idx) => (
                  <div key={idx} className="flex justify-between py-4 text-sm font-medium">
                    <span className="text-slate-300 font-semibold">{row.weight} Submitted</span>
                    <span className="text-teal-glow font-bold">{row.reward}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 border border-white/5 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-2">Notice</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Weight verification is conducted only by certified Project TIDE officers at approved Collection Centres. TIDE Points have no external cash liquidity, but can be redeemed inside the community rewards store.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Handshake, BadgeCheck } from "lucide-react";

interface Partner {
  name: string;
  type: string;
  role: string;
}

const partners: Partner[] = [
  { name: "Wigwe University", type: "Academic", role: "Primary Hub & Research" },
  { name: "Isiokpo Local Council", type: "Government", role: "Community Coordination" },
  { name: "RIWAMA", type: "Regulatory", role: "Waste Disposal Support" },
  { name: "RecyclePoints", type: "Industry", role: "Logistics & Recycling" },
  { name: "EcoCycle Africa", type: "NGO", role: "Advocacy & Outreach" },
  { name: "Clean Rivers Initiative", type: "NGO", role: "Coastal Operations" },
  { name: "Green Education Trust", type: "Foundation", role: "School Curriculums" },
  { name: "Niger Delta Conservation", type: "NGO", role: "Research & Assessment" },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 bg-ocean-deep overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(13,242,201,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4">
            <Handshake className="h-4 w-4 text-teal-glow" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Collaborations
            </span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
            Sustainability Partners
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            We collaborate with schools, universities, waste managers, and CSR teams to build circular economies.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Gradients to fade out edges */}
          <div className="absolute left-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-r from-ocean-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-l from-ocean-deep to-transparent z-10 pointer-events-none" />

          {/* Infinite Scrolling Track */}
          <div className="flex w-max gap-8 animate-marquee">
            {/* Render list twice to ensure seamless looping */}
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={idx}
                className="glass-light px-8 py-5 rounded-2xl flex items-center space-x-4 border border-white/5 hover:border-teal-glow/30 transition-all duration-300 w-72"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-glow/5 border border-teal-glow/20 flex items-center justify-center text-teal-glow">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white leading-tight">
                    {partner.name}
                  </h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-teal-glow mt-1">
                    {partner.type} &bull; {partner.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

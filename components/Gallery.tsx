"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "Cleanups" | "Outreach" | "Recycling";
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "River Cleanup Campaign",
    category: "Cleanups",
    image: "/images/gallery_cleanup.png",
    description: "Volunteers intercepting plastic trash along regional river corridors.",
  },
  {
    id: 2,
    title: "Wigwe University Workshop",
    category: "Outreach",
    image: "/images/gallery_school.png",
    description: "Students participating in our environmental stewardship training.",
  },
  {
    id: 3,
    title: "School Sorting Program",
    category: "Outreach",
    image: "/images/step1_collect.png",
    description: "Students collecting and sorting plastics at an institutional partner site.",
  },
  {
    id: 4,
    title: "Community Drop-off Centre",
    category: "Recycling",
    image: "/images/step2_dropoff.png",
    description: "Opening of the Isiokpo TIDE Collection Centre.",
  },
  {
    id: 5,
    title: "Calibrated Weight Verification",
    category: "Recycling",
    image: "/images/step3_weigh.png",
    description: "Verifying plastic weights to award corresponding member points.",
  },
  {
    id: 6,
    title: "TIDE Rewards Ceremony",
    category: "Recycling",
    image: "/images/step5_redeem.png",
    description: "Distributing community scholarships funded by the recycling program.",
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ["All", "Cleanups", "Outreach", "Recycling"];

  const filteredItems = galleryItems.filter((item) =>
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <section id="gallery" className="relative py-24 bg-ocean-dark overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,242,201,0.04),transparent_50%)]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-ocean-medium/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4">
            <ImageIcon className="h-4 w-4 text-teal-glow" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Visual Highlights
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Work In Action
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            A look at our community cleanups, educational outreach, and rewarding recycling activities.
          </p>
        </div>

        {/* Filter categories bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-teal-glow border-teal-glow text-ocean-dark font-black shadow-[0_0_12px_rgba(13,242,201,0.25)]"
                  : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 rounded-3xl overflow-hidden border border-white/5 cursor-pointer shadow-lg bg-ocean-deep"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark via-ocean-dark/45 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Hover border glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-teal-glow/30 rounded-3xl transition-all duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                  <span className="w-fit px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest bg-teal-glow/10 text-teal-glow border border-teal-glow/20 mb-3">
                    {item.category}
                  </span>
                  
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-teal-glow transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-300 text-xs leading-relaxed mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Magnifying Glass Icon */}
                <div className="absolute top-6 right-6 p-2 rounded-full glass border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-white">
                  <ZoomIn className="h-4 w-4 text-teal-glow" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10"
              >
                {/* Header/Close bar */}
                <div className="p-4 border-b border-white/5 flex justify-between items-center bg-ocean-dark/50">
                  <div>
                    <h3 className="font-heading font-black text-white text-base sm:text-lg">
                      {selectedImage.title}
                    </h3>
                    <span className="text-[10px] text-teal-glow font-bold uppercase tracking-widest">
                      {selectedImage.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white border border-white/10 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Image display */}
                <div className="relative aspect-video w-full bg-ocean-deep">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <div className="p-6 bg-ocean-dark/70">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

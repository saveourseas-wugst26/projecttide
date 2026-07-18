"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, MessageSquare } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Inquiry",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-ocean-dark overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-ocean-medium/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-glow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4">
            <MessageSquare className="h-4 w-4 text-teal-glow" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Get In Touch
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Connect With SOS
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Have questions about rewards, cleanups, or partnership opportunities? Reach out to our community team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading font-black text-xl text-white">Contact Information</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Contact Save Our Seas (SOS) and Project TIDE directly or drop off waste at our Isiokpo facilities.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-deep/20 border border-teal-glow/30 rounded-xl text-teal-glow flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</h4>
                    <a href="mailto:hello@saveourseas.org" className="text-sm font-semibold text-white hover:text-teal-glow transition-colors duration-300 mt-1 block">
                      hello@saveourseas.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-deep/20 border border-teal-glow/30 rounded-xl text-teal-glow flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Hotline</h4>
                    <span className="text-sm font-semibold text-white mt-1 block">
                      +234 (0) 800 767 8433
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-deep/20 border border-teal-glow/30 rounded-xl text-teal-glow flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Headquarters</h4>
                    <span className="text-sm font-semibold text-white leading-relaxed mt-1 block">
                      Project TIDE Community Hub, <br />
                      Isiokpo, Rivers State, Nigeria
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branded WhatsApp Card */}
            <div className="glass p-6 rounded-3xl border border-teal-glow/15 bg-gradient-to-br from-teal-deep/10 to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-glow/5 rounded-full blur-xl" />
              <h4 className="font-heading font-bold text-white text-base mb-2">Join the Movement</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Receive instant cleanup updates, track TIDE Points, and connect with other volunteers.
              </p>
              <a
                href="https://chat.whatsapp.com/mock-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-widest text-ocean-dark bg-teal-glow hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(13,242,201,0.15)]"
              >
                <span>👉 Join WhatsApp Community</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 h-full"
                  >
                    <CheckCircle2 className="h-16 w-16 text-teal-glow mb-6 animate-bounce" />
                    <h3 className="font-heading font-black text-2xl text-white mb-2">Message Transmitted</h3>
                    <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                      Thank you for contacting Save Our Seas. Our community team has received your submission and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10 hover:border-teal-glow hover:bg-white/5 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-heading font-black text-xl text-white mb-6">Send Us A Message</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="form-name" className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Full Name</label>
                        <input
                          id="form-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Chidi Egwu"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-glow focus:bg-white/10 transition-all duration-300"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="form-email" className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Email Address</label>
                        <input
                          id="form-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="chidi@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-glow focus:bg-white/10 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="form-phone" className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Phone Number (Optional)</label>
                        <input
                          id="form-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+234 (0) 801 234 5678"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-glow focus:bg-white/10 transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="form-subject" className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Inquiry Type</label>
                        <select
                          id="form-subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-teal-glow focus:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                          <option value="Inquiry" className="bg-ocean-dark text-white">General Inquiry</option>
                          <option value="Volunteer" className="bg-ocean-dark text-white">Volunteer Signup</option>
                          <option value="Partner" className="bg-ocean-dark text-white">Partnership Proposal</option>
                          <option value="Rewards" className="bg-ocean-dark text-white">Rewards Program Signup</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="form-message" className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Your Message</label>
                      <textarea
                        id="form-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help or collaborate..."
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-glow focus:bg-white/10 transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-xs font-semibold">
                        Please fill in all required fields.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex w-full items-center justify-center space-x-2 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-ocean-dark bg-teal-glow hover:bg-white disabled:bg-white/40 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_15px_rgba(13,242,201,0.15)]"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

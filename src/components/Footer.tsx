import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send, ChevronUp, CheckCircle, AlertCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xpwdjkga", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 4000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <>
      <footer
        id="contact"
        className="py-32 relative flex flex-col items-center justify-center pt-32 z-10"
      >
        <div className="container mx-auto px-6 text-center">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 80, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <p className="text-sm font-semibold text-primary-500 tracking-wide uppercase mb-4">
              Let's Connect
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.85] mb-6 select-none font-display">
              Have a project in{" "}
              <span className="text-gradient">mind?</span>
            </h2>
            <p className="text-sm md:text-base text-black dark:text-slate-400 font-medium max-w-md mx-auto mb-10 leading-relaxed">
              I'm open to new opportunities, collaborations, and interesting
              projects. Feel free to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:muhammad.fikri.amd@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ziword/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 dark:border-slate-700 text-black dark:text-slate-300 rounded-full text-sm font-semibold tracking-wide hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
              >
                LinkedIn Profile
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto mb-24"
          >
            <div className="glass-morphism rounded-3xl p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50">
              <h3 className="text-xl font-bold mb-2 font-display">Send a Message</h3>
              <p className="text-sm text-black dark:text-slate-400 mb-8">
                Or fill out the form below and I'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-black dark:text-slate-400 mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-black dark:text-slate-400 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-black dark:text-slate-400 mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="Project discussion, job opportunity, etc."
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-black dark:text-slate-400 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : formStatus === "error" ? (
                    <>
                      <AlertCircle className="w-4 h-4" />
                      Failed — Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-slate-200 dark:border-slate-800 w-full text-left overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-4"
            >
              <p className="text-lg font-bold tracking-tight font-display">
                Muhammad Fikri
              </p>
              <p className="text-sm text-black dark:text-slate-400 max-w-xs leading-relaxed">
                IT professional specializing in enterprise systems, database
                administration, and infrastructure engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-4"
            >
              <p className="text-xs font-semibold tracking-wide text-black dark:text-slate-400 uppercase">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { name: "GitHub", url: "https://github.com/ziword" },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/ziword/",
                  },
                  {
                    name: "Email",
                    url: "mailto:muhammad.fikri.amd@gmail.com",
                  },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target={platform.name !== "Email" ? "_blank" : undefined}
                    rel={
                      platform.name !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm font-medium text-black dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    {platform.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="space-y-4"
            >
              <p className="text-xs font-semibold tracking-wide text-black dark:text-slate-400 uppercase">
                Location
              </p>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-500" />
                <p className="text-sm font-medium text-black dark:text-slate-300">
                  Surabaya, East Java, Indonesia
                </p>
              </div>
              <p className="text-xs text-black dark:text-slate-500">
                UTC+07 — Western Indonesia Time
              </p>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-800/50"
          >
            <p className="text-xs text-black dark:text-slate-600">
              &copy; {new Date().getFullYear()} Muhammad Fikri. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-xl hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all duration-300 border border-slate-700 dark:border-slate-200"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

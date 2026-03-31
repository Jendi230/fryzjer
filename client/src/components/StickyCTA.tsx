/*
 * Sticky CTA — Dark Industrial Forge
 * Mobile-only sticky bottom bar with call and WhatsApp buttons
 * Appears after scrolling past the hero section
 */

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-devil-darker/98 backdrop-blur-md border-t border-devil-red/20 px-4 py-3 flex gap-3">
            <a
              href="tel:+48531898396"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-devil-red hover:bg-devil-red-light text-white font-display text-sm uppercase tracking-wider py-3 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń
            </a>
            <a
              href="https://wa.me/48531898396?text=Cześć! Chciałbym umówić wizytę w Czarci Barbershop."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-display text-sm uppercase tracking-wider py-3 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

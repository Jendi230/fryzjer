/*
 * Hero Section — Dark Industrial Forge
 * Full-screen hero with background image, dark overlay, bold claim, two CTAs
 * Answers: where, for whom, key services, how to book
 */

import { MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494784666/4mdqcwUvv6KZ96AHSgKurS/czarci-real-interior_7648e2ab.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Wnętrze Czarci Barbershop w Lublinie — fotele barberskie, industrialny wystrój z czerwono-czarnymi akcentami"
          className="w-full h-full object-cover object-center brightness-[0.5] contrast-[1.1] saturate-[0.9]"
          loading="eager"
        />
        {/* Dark gradient overlays — heavier on left for text readability, warm tint to match red/black interior */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[#1a0000]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <MapPin className="w-4 h-4 text-devil-red" />
            <span className="font-display text-sm uppercase tracking-[0.2em] text-devil-cream/70">
              Rzemieślnicza 8, Lublin
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight mb-6"
          >
            <span className="text-devil-cream">Czarci</span>
            <br />
            <span className="text-devil-red">Barbershop</span>
          </motion.h1>

          {/* Red accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-[3px] bg-devil-red mb-6"
          />

          {/* Claim */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-body text-lg sm:text-xl md:text-2xl text-devil-cream/80 font-light leading-relaxed mb-10 max-w-lg"
          >
            Dobre cięcie. Dobry klimat. Bez spiny.
            <br />
            <span className="text-devil-gold">Strzyżenie, broda i styl w jednym miejscu.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+48531898396"
              className="inline-flex items-center justify-center gap-2 bg-devil-red hover:bg-devil-red-light text-white font-display text-base sm:text-lg uppercase tracking-wider px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-devil-red/30 hover:-translate-y-0.5"
            >
              Umów wizytę
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center gap-2 border-2 border-devil-cream/30 text-devil-cream hover:border-devil-gold hover:text-devil-gold font-display text-base sm:text-lg uppercase tracking-wider px-8 py-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              Zobacz cennik
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#uslugi" className="flex flex-col items-center gap-2 group">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-devil-cream/40 group-hover:text-devil-red transition-colors">
            Przewiń
          </span>
          <ChevronDown className="w-5 h-5 text-devil-cream/40 group-hover:text-devil-red animate-bounce transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}

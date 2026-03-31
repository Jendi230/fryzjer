/*
 * Services & Pricing Section — Dark Industrial Forge
 * Card-based pricing with red accent lines, categorized services
 * Categories: Popularne, Premium, Ekspresowe, Warkoczyki
 */

import { motion } from "framer-motion";
import { Scissors, Crown, Zap, Sparkles, Star } from "lucide-react";

interface Service {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
}

interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  services: Service[];
  accent?: string;
}

const categories: ServiceCategory[] = [
  {
    title: "Najczęściej wybierane",
    icon: <Star className="w-5 h-5" />,
    services: [
      { name: "Strzyżenie włosów", price: "90 zł", description: "Precyzyjne cięcie dopasowane do Twojego stylu", popular: true },
      { name: "Combo (włosy i broda)", price: "120 zł", description: "Kompletna metamorfoza — włosy i broda w pakiecie", popular: true },
      { name: "Broda", price: "60 zł", description: "Pielęgnacja i trymowanie brody" },
    ],
  },
  {
    title: "Premium",
    icon: <Crown className="w-5 h-5" />,
    services: [
      { name: "Golenie głowy brzytwą", price: "60 zł", description: "Klasyczne golenie brzytwą na gładko" },
      { name: "Golenie twarzy brzytwą", price: "60 zł", description: "Tradycyjne golenie twarzy z gorącym ręcznikiem" },
    ],
  },
  {
    title: "Combo",
    icon: <Zap className="w-5 h-5" />,
    services: [
      { name: "Combo #0", price: "80 zł", description: "Golenie głowy golarką + broda" },
      { name: "Combo #1", price: "100 zł", description: "Strzyżenie na jedną długość + broda" },
    ],
  },
  {
    title: "Warkoczyki",
    icon: <Sparkles className="w-5 h-5" />,
    services: [
      { name: "Warkoczyki (1–2 szt.)", price: "20 zł" },
      { name: "Warkoczyki (3–4 szt.)", price: "50 zł" },
      { name: "Warkoczyki cała głowa", price: "100 zł" },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section id="uslugi" className="relative py-20 md:py-28 bg-devil-dark noise-overlay">
      {/* Diagonal top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-devil-cream">
            Usługi <span className="text-devil-red">&</span> Cennik
          </h2>
          <div className="red-line mt-4 mb-4" />
          <p className="font-body text-lg text-devil-cream/60 max-w-md">
            Sprawdź naszą ofertę. Bez ukrytych kosztów, bez niespodzianek.
          </p>
        </motion.div>

        {/* Service categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={catIdx}
              variants={fadeInUp}
              className="bg-devil-darker/60 border border-white/5 p-6 md:p-8 group hover:border-devil-red/20 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-devil-red">
                  {category.icon}
                </div>
                <h3 className="font-display text-xl uppercase tracking-wider text-devil-gold">
                  {category.title}
                </h3>
              </div>

              {/* Services list */}
              <div className="space-y-0">
                {category.services.map((service, idx) => (
                  <div
                    key={service.name}
                    className={`flex items-start justify-between py-4 ${
                      idx !== category.services.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="font-body text-base md:text-lg text-devil-cream font-medium">
                          {service.name}
                        </span>
                        {service.popular && (
                          <span className="text-[10px] font-display uppercase tracking-wider bg-devil-red/20 text-devil-red px-2 py-0.5">
                            Hit
                          </span>
                        )}
                      </div>
                      {service.description && (
                        <p className="font-body text-sm text-devil-cream/40 mt-1">
                          {service.description}
                        </p>
                      )}
                    </div>
                    <span className="font-display text-lg md:text-xl font-semibold text-devil-gold whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA under pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="tel:+48512066216"
            className="inline-flex items-center justify-center gap-2 bg-devil-red hover:bg-devil-red-light text-white font-display text-base uppercase tracking-wider px-10 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-devil-red/30 hover:-translate-y-0.5"
          >
            Umów wizytę teraz
          </a>
          <p className="font-body text-sm text-devil-cream/40 mt-4">
            Zadzwoń lub napisz na WhatsApp — odpowiemy szybko.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

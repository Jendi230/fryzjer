/*
 * Contact Section — Dark Industrial Forge
 * Address, phone, WhatsApp, opening hours, Google Maps embed
 * Ends the decision path — strong CTA
 */

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Navigation, Car } from "lucide-react";
import { MapView } from "@/components/Map";

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-20 md:py-28 bg-devil-dark noise-overlay">
      {/* Diagonal top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0%)" }} />

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
            Kontakt <span className="text-devil-red">&</span> Dojazd
          </h2>
          <div className="red-line mt-4 mb-4" />
          <p className="font-body text-lg text-devil-cream/60 max-w-md">
            Wpadaj do nas lub zadzwoń. Jesteśmy na Rzemieślniczej 8 w Lublinie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-devil-red/10 text-devil-red shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-sm uppercase tracking-wider text-devil-gold mb-1">Adres</h3>
                <p className="font-body text-base text-devil-cream/80">
                  ul. Rzemieślnicza 8<br />
                  20-270 Lublin
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-devil-red/10 text-devil-red shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-sm uppercase tracking-wider text-devil-gold mb-1">Telefon</h3>
                <a
                  href="tel:+48531898396"
                  className="font-body text-lg text-devil-cream/80 hover:text-devil-red transition-colors"
                >
                  +48 531 898 396
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-green-900/30 text-green-500 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-sm uppercase tracking-wider text-devil-gold mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/48531898396?text=Cześć! Chciałbym umówić wizytę w Czarci Barbershop."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-devil-cream/80 hover:text-green-500 transition-colors"
                >
                  Napisz na WhatsApp
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-devil-red/10 text-devil-red shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-sm uppercase tracking-wider text-devil-gold mb-1">Godziny otwarcia</h3>
                <div className="font-body text-base text-devil-cream/80 space-y-1">
                  <div className="flex justify-between gap-8">
                    <span>Poniedziałek – Piątek</span>
                    <span className="text-devil-cream">9:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Sobota</span>
                    <span className="text-devil-cream">9:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Niedziela</span>
                    <span className="text-devil-cream/50">Zamknięte</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking info */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-devil-red/10 text-devil-red shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-sm uppercase tracking-wider text-devil-gold mb-1">Dojazd</h3>
                <p className="font-body text-sm text-devil-cream/60">
                  Parking dostępny w okolicy. Dojedziesz do nas łatwo z centrum Lublina.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="tel:+48512066216"
                className="inline-flex items-center justify-center gap-2 bg-devil-red hover:bg-devil-red-light text-white font-display text-sm uppercase tracking-wider px-6 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-devil-red/20"
              >
                <Phone className="w-4 h-4" />
                Zadzwoń teraz
              </a>
              <a
                href="https://wa.me/48512066216?text=Cze%C5%9B%C4%87!%20Chcia%C5%82bym%20um%C3%B3wi%C4%87%20wizyt%C4%99%20w%20Czarci%20Barbershop."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-600/50 text-green-500 hover:bg-green-600/10 font-display text-sm uppercase tracking-wider px-6 py-3.5 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/dir//Rzemieślnicza+8,+Lublin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-devil-cream/20 text-devil-cream/70 hover:border-devil-gold hover:text-devil-gold font-display text-sm uppercase tracking-wider px-6 py-3.5 transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Wyznacz trasę
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] lg:h-full min-h-[400px] border border-white/5"
          >
            <MapView
              initialCenter={{ lat: 51.2465, lng: 22.5684 }}
              initialZoom={16}
              onMapReady={(map: google.maps.Map) => {
                const position = { lat: 51.2465, lng: 22.5684 };
                new google.maps.marker.AdvancedMarkerElement({
                  position,
                  map,
                  title: "Czarci Barbershop — Rzemieślnicza 8, Lublin",
                });
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

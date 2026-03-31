/*
 * Gallery Section — Dark Industrial Forge
 * Instagram-style grid with lightbox overlay
 * Uses generated images + Unsplash barbershop photos
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494784666/4mdqcwUvv6KZ96AHSgKurS/barber-work-1-5iQnUq8mSoHMP3B9LiXHrK.webp",
    alt: "Precyzyjny fade w Czarci Barbershop Lublin",
    category: "Strzyżenie",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494784666/4mdqcwUvv6KZ96AHSgKurS/barber-work-2-EnrLbtpfomKQxwLs8F62i5.webp",
    alt: "Detal skin fade — barbershop Lublin",
    category: "Fade",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494784666/4mdqcwUvv6KZ96AHSgKurS/beard-trim-DbbLmGCoNXTiCpCsig9rWJ.webp",
    alt: "Golenie brody brzytwą w Czarci Barbershop",
    category: "Broda",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494784666/4mdqcwUvv6KZ96AHSgKurS/interior-1-HqoTkxXmwZmn3XxXtp43Dj.webp",
    alt: "Wnętrze salonu Czarci Barbershop Lublin — fotele barberskie",
    category: "Klimat",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop",
    alt: "Strzyżenie męskie — barber przy pracy Lublin",
    category: "Strzyżenie",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop",
    alt: "Stylizacja fryzury męskiej w barbershopie",
    category: "Styl",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop",
    alt: "Narzędzia barberskie — maszynka i nożyczki",
    category: "Detale",
  },
  {
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&h=600&fit=crop",
    alt: "Pielęgnacja brody w salonie barberskim Lublin",
    category: "Broda",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop",
    alt: "Efekt końcowy strzyżenia — zadowolony klient",
    category: "Efekt",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-devil-cream">
            Galeria <span className="text-devil-red">prac</span>
          </h2>
          <div className="red-line mt-4 mb-4" />
          <p className="font-body text-lg text-devil-cream/60 max-w-md">
            Nasze najlepsze realizacje. Fade'y, brody, warkoczyki i klimat salonu.
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
          {IMAGES.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(idx)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                  <span className="font-display text-xs uppercase tracking-widest text-devil-gold">
                    {image.category}
                  </span>
                </div>
              </div>
              {/* Red accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-devil-red transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Zamknij"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={IMAGES[selectedImage].src}
              alt={IMAGES[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <span className="font-display text-sm uppercase tracking-widest text-devil-gold">
                {IMAGES[selectedImage].category}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

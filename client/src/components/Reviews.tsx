/*
 * Reviews Section — Dark Industrial Forge
 * Google Maps-style reviews with star ratings
 * 6 strongest reviews as social proof
 */

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  text: string;
  rating: number;
  tag: string;
  timeAgo: string;
}

const reviews: Review[] = [
  {
    name: "Kamil W.",
    text: "Najlepszy barber w Lublinie. Przychodzę regularnie od roku i za każdym razem wychodzę zadowolony. Fade zawsze perfekcyjny.",
    rating: 5,
    tag: "Strzyżenie",
    timeAgo: "2 tygodnie temu",
  },
  {
    name: "Mateusz K.",
    text: "Świetny klimat, profesjonalna obsługa. Broda wygląda rewelacyjnie po wizycie. Polecam każdemu!",
    rating: 5,
    tag: "Broda",
    timeAgo: "miesiąc temu",
  },
  {
    name: "Dawid R.",
    text: "Combo włosy + broda to strzał w dziesiątkę. Szybko, sprawnie i efekt zawsze na poziomie. Czarci to mój stały punkt.",
    rating: 5,
    tag: "Combo",
    timeAgo: "3 tygodnie temu",
  },
  {
    name: "Jakub M.",
    text: "Pierwszy raz byłem i od razu widać, że chłopaki wiedzą co robią. Bez gadania, konkretna robota. Wracam.",
    rating: 5,
    tag: "Klimat",
    timeAgo: "tydzień temu",
  },
  {
    name: "Piotr S.",
    text: "Golenie brzytwą to zupełnie inny level. Gorący ręcznik, precyzja i relaks. Warto spróbować.",
    rating: 5,
    tag: "Premium",
    timeAgo: "2 miesiące temu",
  },
  {
    name: "Adrian L.",
    text: "Warkoczyki zrobione szybko i solidnie. Trzymają się świetnie. Cena uczciwa jak na jakość.",
    rating: 5,
    tag: "Warkoczyki",
    timeAgo: "miesiąc temu",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-devil-gold text-devil-gold" : "text-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="opinie" className="relative py-20 md:py-28 bg-devil-dark noise-overlay">
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
          <div className="flex items-center gap-4 mb-2">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-devil-cream">
              Opinie <span className="text-devil-red">klientów</span>
            </h2>
          </div>
          <div className="red-line mt-4 mb-4" />
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-devil-gold text-devil-gold" />
              ))}
            </div>
            <span className="font-display text-lg text-devil-gold">4.9</span>
            <span className="font-body text-sm text-devil-cream/50">na podstawie opinii z Google Maps</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-devil-darker/60 border border-white/5 p-6 group hover:border-devil-red/20 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-devil-red/20 absolute top-4 right-4" />

              {/* Tag */}
              <span className="inline-block font-display text-[10px] uppercase tracking-widest text-devil-red bg-devil-red/10 px-2 py-1 mb-4">
                {review.tag}
              </span>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className="font-body text-base text-devil-cream/80 leading-relaxed mt-3 mb-4">
                „{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-wider text-devil-cream/60">
                  {review.name}
                </span>
                <span className="font-body text-xs text-devil-cream/30">
                  {review.timeAgo}
                </span>
              </div>

              {/* Bottom red line on hover */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-devil-red transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Google Maps link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Czarci+Barbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest text-devil-cream/50 hover:text-devil-gold transition-colors"
          >
            Zobacz wszystkie opinie na Google Maps
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

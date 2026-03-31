/*
 * About Section — Dark Industrial Forge
 * Short, authentic story about the barbershop
 * Image on one side, text on the other (asymmetric)
 */

import { motion } from "framer-motion";
import { Flame, Users, Award, Clock } from "lucide-react";

const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663494784666/4mdqcwUvv6KZ96AHSgKurS/interior-1-HqoTkxXmwZmn3XxXtp43Dj.webp";

const features = [
  {
    icon: <Flame className="w-5 h-5" />,
    title: "Czarci klimat",
    desc: "Surowe wnętrze, dobra muzyka i zero sztuczności. U nas czujesz się jak u siebie.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Precyzja rzemiosła",
    desc: "Każde cięcie to efekt doświadczenia i pasji. Nie idziemy na skróty.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Dla każdego faceta",
    desc: "Nieważne czy chcesz klasykę, fade czy warkoczyki — ogarniamy to.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Bez tracenia czasu",
    desc: "Wchodzisz, siadasz, robimy robotę. Szybko i konkretnie.",
  },
];

export default function About() {
  return (
    <section id="o-nas" className="relative py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={INTERIOR_IMG}
                alt="Wnętrze Czarci Barbershop — fotele barberskie i industrialny wystrój"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Red accent corner */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-devil-red" />
                <div className="absolute top-0 left-0 w-[3px] h-full bg-devil-red" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-full h-[3px] bg-devil-red" />
                <div className="absolute bottom-0 right-0 w-[3px] h-full bg-devil-red" />
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-devil-cream mb-2">
              O <span className="text-devil-red">nas</span>
            </h2>
            <div className="red-line mt-4 mb-6" />

            <p className="font-body text-lg text-devil-cream/70 leading-relaxed mb-4">
              Czarci Barbershop to miejsce dla facetów, którzy chcą wejść, usiąść w dobrym klimacie, dostać precyzyjne cięcie i wyjść z lepszym lookiem — bez tracenia czasu.
            </p>
            <p className="font-body text-base text-devil-cream/50 leading-relaxed mb-8">
              Działamy przy Rzemieślniczej 8 w Lublinie. Stawiamy na jakość, estetykę i dobry kontakt z klientem. Bez nadęcia, bez sztucznego marketingu — po prostu solidna robota i dobry vibe.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="text-devil-red mt-0.5 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-sm uppercase tracking-wider text-devil-gold mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-devil-cream/50 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

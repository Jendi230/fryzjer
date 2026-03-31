/*
 * Design: Dark Industrial Forge
 * Colors: Deep black (#0A0A0A), Devil Red (#C41E1E), Cream Gold (#D4A853), Warm Cream (#F5F0E8)
 * Typography: Oswald (headings, uppercase), Source Sans 3 (body)
 * Motifs: Red accent lines, grain texture, diagonal section cuts
 */

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

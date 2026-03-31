import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#uslugi", label: "Cennik" },
  { href: "#galeria", label: "Galeria" },
  { href: "#opinie", label: "Opinie" },
  { href: "#o-nas", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-devil-darker/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-devil-cream group-hover:text-devil-red transition-colors">
            Czarci
          </span>
          <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-devil-red">
            Barbershop
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase tracking-widest text-devil-cream/70 hover:text-devil-red transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+48531898396"
            className="flex items-center gap-2 bg-devil-red hover:bg-devil-red-light text-white font-display text-sm uppercase tracking-wider px-5 py-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-devil-red/20"
          >
            <Phone className="w-4 h-4" />
            Umów wizytę
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-devil-cream p-2"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-devil-darker/98 backdrop-blur-md border-t border-devil-red/20 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-display text-base uppercase tracking-widest text-devil-cream/80 hover:text-devil-red py-3 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+48531898396"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-devil-red text-white font-display text-base uppercase tracking-wider px-5 py-3 mt-4 w-full"
          >
            <Phone className="w-4 h-4" />
            Umów wizytę
          </a>
        </div>
      </div>
    </nav>
  );
}

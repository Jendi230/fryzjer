/*
 * Footer — Dark Industrial Forge
 * Minimal footer with branding, social links, copyright
 */

import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-devil-darker border-t border-white/5 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold uppercase tracking-wider text-devil-cream">
              Czarci
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-wider text-devil-red">
              Barbershop
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/czarci_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-devil-cream/50 hover:text-devil-red transition-colors"
              aria-label="Instagram Czarci Barbershop"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-display text-xs uppercase tracking-widest">
                @czarci_barbershop
              </span>
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-devil-cream/30">
            &copy; {new Date().getFullYear()} Czarci Barbershop. Rzemieślnicza 8, Lublin.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Star, Award, Users, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-noir text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-3xl">
              Traiteur <span className="text-gold italic">de Garip</span>
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              36 ans d'expérience au service de votre table. Spécialiste de la cuisine méditerranéenne et orientale. Noté 4,7/5 par plus de 103 clients.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold">Navigation</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold transition-smooth">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-smooth">Spécialités</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-smooth">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold">Suivez-nous</h4>
            <div className="mt-6 flex gap-3">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-primary-foreground/30 hover:border-gold hover:text-gold transition-smooth">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-primary-foreground/30 hover:border-gold hover:text-gold transition-smooth">
                <Instagram size={16} />
              </a>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gradient-warm px-6 py-3 text-xs tracking-[0.2em] uppercase shadow-soft">
              <Phone size={14} /> Contactez-nous
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Traiteur de Garip. Tous droits réservés.</p>
          <p>Cuisine méditerranéenne · turque · libanaise · grecque · arménienne</p>
        </div>
      </div>
    </footer>
  );
}
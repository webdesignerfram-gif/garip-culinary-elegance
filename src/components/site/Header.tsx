import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Spécialités" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl md:text-3xl text-primary-foreground tracking-wide">
            Traiteur <span className="text-gold italic">de Garip</span>
          </span>
          <span className="mt-1 text-[10px] tracking-[0.3em] text-primary-foreground/70 uppercase">
            Depuis 36 ans
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-sm tracking-[0.2em] uppercase text-primary-foreground/90 hover:text-gold transition-smooth"
              activeProps={{ className: "text-gold" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center border border-primary-foreground/40 px-5 py-2.5 text-xs tracking-[0.2em] uppercase text-primary-foreground hover:bg-primary-foreground hover:text-noir transition-smooth"
        >
          Devis
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-noir/95 backdrop-blur border-t border-primary-foreground/10">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-primary-foreground/90"
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Traiteur de Garip · Devis traiteur méditerranéen" },
      { name: "description", content: "Contactez Traiteur de Garip pour un devis personnalisé. Traiteur mariage, événement, halal, casher, végétarien." },
      { property: "og:title", content: "Contact — Traiteur de Garip" },
      { property: "og:description", content: "Contactez-nous pour un devis sur mesure." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative bg-noir text-primary-foreground pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="fade-in text-xs tracking-[0.4em] uppercase text-gold mb-6">Contact</p>
          <h1 className="fade-up font-display text-5xl md:text-7xl text-balance leading-[1.05] max-w-4xl">
            Parlons de <em className="not-italic text-gold">votre événement</em>
          </h1>
          <p className="fade-up mt-8 max-w-xl text-primary-foreground/75 text-lg" style={{ animationDelay: "200ms" }}>
            Une question, un devis, une idée — notre équipe vous répond avec soin.
          </p>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid lg:grid-cols-5 gap-16">
          {/* FORM */}
          <Reveal className="lg:col-span-3">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">Demande de devis</h2>
            <p className="text-muted-foreground mb-10">Réponse personnalisée sous 24h ouvrées.</p>

            {sent ? (
              <div className="bg-card border border-primary p-10 text-center">
                <p className="font-display text-2xl text-primary">Merci !</p>
                <p className="mt-3 text-muted-foreground">Votre demande a bien été transmise. Nous vous recontactons très rapidement.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Nom complet" name="name" required />
                  <Field label="Téléphone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Type d'événement" name="event" placeholder="Mariage, anniversaire…" />
                  <Field label="Nombre d'invités" name="guests" type="number" placeholder="50" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-smooth"
                    placeholder="Date, lieu, régime alimentaire, cuisine souhaitée…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-accent transition-smooth shadow-elegant"
                >
                  Envoyer la demande
                  <Send size={14} />
                </button>
              </form>
            )}
          </Reveal>

          {/* INFO */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="bg-noir text-primary-foreground p-10">
              <h3 className="font-display text-2xl text-gold mb-8">Coordonnées</h3>

              <InfoLine icon={Phone} label="Téléphone" value="+33 1 23 45 67 89" />
              <InfoLine icon={Mail} label="Email" value="contact@traiteurdegarip.fr" />
              <InfoLine icon={MapPin} label="Adresse" value="Région parisienne · Service traiteur extérieur" />

              <div className="flex gap-3 mt-8 pt-8 border-t border-primary-foreground/15">
                <Clock className="text-gold mt-1" size={18} strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-2">Horaires</p>
                  <p className="text-sm">Lundi — Samedi · 9h00 — 19h00</p>
                  <p className="text-sm text-primary-foreground/60">Dimanche sur rendez-vous</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-foreground/15">
                <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">Suivez-nous</p>
                <div className="flex gap-3">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-11 h-11 flex items-center justify-center border border-primary-foreground/30 hover:border-gold hover:text-gold transition-smooth">
                    <Facebook size={16} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-11 h-11 flex items-center justify-center border border-primary-foreground/30 hover:border-gold hover:text-gold transition-smooth">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-6 aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="Carte localisation Traiteur de Garip"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.224%2C48.815%2C2.469%2C48.902&layer=mapnik"
                className="w-full h-full grayscale"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-smooth"
      />
    </div>
  );
}

function InfoLine({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex gap-3 mb-6">
      <Icon className="text-gold mt-1 flex-shrink-0" size={18} strokeWidth={1.5} />
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-1">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send, Navigation } from "lucide-react";

const ADDRESS = "22 Rue Portail Matheron, 84000 Avignon";
const PHONE_DISPLAY = "+33 4 90 33 17 49";
const PHONE_TEL = "+33490331749";
const EMAIL = "contact@traiteurdegarip.fr";
const MAPS_QUERY = encodeURIComponent("Traiteur de Garip, 22 Rue Portail Matheron, 84000 Avignon");
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Traiteur de Garip · Devis traiteur méditerranéen" },
      { name: "description", content: "Contactez Traiteur de Garip à Avignon — 22 Rue Portail Matheron. Téléphone +33 4 90 33 17 49. Ouvert tous les jours 10h-21h. Devis traiteur méditerranéen, halal, casher." },
      { property: "og:title", content: "Contact — Traiteur de Garip" },
      { property: "og:description", content: "Traiteur à Avignon depuis 36 ans. Contactez-nous pour un devis personnalisé." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        name: "Traiteur de Garip",
        telephone: "+33490331749",
        email: "contact@traiteurdegarip.fr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "22 Rue Portail Matheron",
          postalCode: "84000",
          addressLocality: "Avignon",
          addressCountry: "FR",
        },
        openingHours: "Mo-Su 10:00-21:00",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "103" },
      }),
    }],
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

              <InfoLine icon={Phone} label="Téléphone" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} />
              <InfoLine icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <InfoLine icon={MapPin} label="Adresse" value={ADDRESS} href={MAPS_DIRECTIONS} />

              <div className="flex gap-3 mt-8 pt-8 border-t border-primary-foreground/15">
                <Clock className="text-gold mt-1" size={18} strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-2">Horaires</p>
                  <p className="text-sm">Ouvert tous les jours · 10h00 — 21h00</p>
                  <p className="text-sm text-primary-foreground/60">Avignon · Implantés depuis 36 ans</p>
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

          </Reveal>
        </div>
      </section>

      {/* NOUS TROUVER */}
      <section className="bg-card border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Nous trouver</p>
                <h2 className="font-display text-4xl md:text-6xl text-foreground text-balance leading-tight">
                  Au cœur d'<em className="not-italic text-primary">Avignon</em>
                </h2>
                <p className="mt-6 text-muted-foreground text-lg max-w-lg">
                  Implantés au {ADDRESS} depuis plus de 36 ans.
                </p>
              </div>
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase hover:bg-accent transition-smooth shadow-soft self-start"
              >
                <Navigation size={14} /> Voir l'itinéraire
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="aspect-[16/9] overflow-hidden border border-border shadow-elegant">
              <iframe
                title="Carte Traiteur de Garip Avignon"
                src={MAPS_EMBED}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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

function InfoLine({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  return (
    <div className="flex gap-3 mb-6">
      <Icon className="text-gold mt-1 flex-shrink-0" size={18} strokeWidth={1.5} />
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-1">{label}</p>
        {href ? (
          <a href={href} className="text-sm hover:text-gold transition-smooth">{value}</a>
        ) : (
          <p className="text-sm">{value}</p>
        )}
      </div>
    </div>
  );
}
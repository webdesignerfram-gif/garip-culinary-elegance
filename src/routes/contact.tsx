import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send, Navigation, Star, Award, Users, ShieldCheck } from "lucide-react";

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
        "@type": ["LocalBusiness", "FoodEstablishment"],
        "@id": "https://traiteurdegarip.fr/#business",
        name: "Traiteur de Garip",
        description: "Traiteur méditerranéen, turc, libanais, grec et arménien à Avignon depuis 36 ans. Service traiteur halal, casher, végétarien et vegan pour mariages, événements d'entreprise et réceptions privées.",
        url: "https://traiteurdegarip.fr",
        telephone: "+33490331749",
        email: "contact@traiteurdegarip.fr",
        image: [
          "/assets/hero-buffet.jpg",
          "/assets/gallery-mariage.jpg",
          "/assets/gallery-grillades.jpg",
          "/assets/gallery-mezze.jpg",
          "/assets/gallery-baklava.jpg",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "22 Rue Portail Matheron",
          postalCode: "84000",
          addressLocality: "Avignon",
          addressRegion: "Provence-Alpes-Côte d'Azur",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.9493,
          longitude: 4.8055,
        },
        openingHours: ["Mo-Su 10:00-21:00"],
        priceRange: "€€",
        paymentAccepted: ["Espèces", "Carte bancaire", "Chèque"],
        currenciesAccepted: "EUR",
        servesCuisine: ["Méditerranéenne", "Turque", "Libanaise", "Grecque", "Arménienne"],
        areaServed: [
          { "@type": "City", "name": "Avignon" },
          { "@type": "City", "name": "Carpentras" },
          { "@type": "City", "name": "Orange" },
          { "@type": "City", "name": "Cavaillon" },
          { "@type": "City", "name": "Châteauneuf-du-Pape" },
          { "@type": "City", "name": "Apt" },
          { "@type": "AdministrativeArea", "name": "Vaucluse" },
          { "@type": "AdministrativeArea", "name": "Provence-Alpes-Côte d'Azur" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          reviewCount: "103",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Camille R." },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody: "Une expérience exceptionnelle pour notre mariage, des plats incroyables et un service irréprochable.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Mehmet K." },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody: "Des saveurs méditerranéennes authentiques et une équipe très professionnelle.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Sophie L." },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody: "Le meilleur traiteur oriental et méditerranéen d'Avignon.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Antoine D." },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody: "Un buffet magnifique, varié et raffiné. Tous nos invités nous ont félicités pour le choix du traiteur.",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services traiteur",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Traiteur mariage",
                description: "Buffets, plateaux et service sur mesure pour mariages et cérémonies.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Traiteur événement d'entreprise",
                description: "Cocktails, séminaires, lancements de produit et réceptions professionnelles.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Buffet méditerranéen",
                description: "Buffets chauds et froids à thème méditerranéen, turc, libanais, grec et arménien.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cuisine halal & casher",
                description: "Menus certifiés halal et options casher sur demande.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Menu végétarien & vegan",
                description: "Menus 100 % végétaux sans compromis sur la saveur ni l'authenticité.",
              },
            },
          ],
        },
        sameAs: [
          "https://www.facebook.com/traiteurdegarip",
          "https://www.instagram.com/traiteurdegarip",
        ],
        foundingDate: "1989",
        numberOfEmployees: "8",
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

      {/* BADGES DE CONFIANCE */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { icon: Star, value: "4,7 / 5", label: "Noté par nos clients" },
            { icon: Award, value: "36 ans", label: "D'expérience" },
            { icon: Users, value: "103+", label: "Avis clients" },
            { icon: ShieldCheck, value: "Halal & Casher", label: "Cuisine certifiée" },
          ].map((t, i) => (
            <Reveal key={t.label} delay={i * 100}>
              <div className="text-center md:text-left">
                <t.icon className="text-primary mb-4 mx-auto md:mx-0" size={28} strokeWidth={1.2} />
                <p className="font-display text-2xl md:text-3xl text-foreground">{t.value}</p>
                <p className="mt-2 text-xs tracking-[0.15em] uppercase text-muted-foreground">{t.label}</p>
              </div>
            </Reveal>
          ))}
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

      {/* SEO CONTACT */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Traiteur à Avignon</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground text-balance leading-tight">
              Votre événement mérite <em className="not-italic text-primary">l'excellence</em>
            </h2>
            <div className="mt-10 mx-auto w-16 h-px bg-gradient-warm" />
            <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed text-lg text-left md:text-center">
              <p>
                Situé au <strong className="text-foreground">22 Rue Portail Matheron à Avignon</strong>,
                Traiteur de Garip vous accompagne depuis plus de 36 ans dans l'organisation de vos
                réceptions, mariages, baptêmes, anniversaires et événements d'entreprise.
                Notre cuisine méditerranéenne, turque, libanaise, grecque et arménienne s'adapte
                à tous les régimes alimentaires : <strong className="text-foreground">halal, casher, végétarien et vegan</strong>.
              </p>
              <p>
                Contactez-nous par téléphone au <strong className="text-foreground">+33 4 90 33 17 49</strong>,
                par email à <strong className="text-foreground">contact@traiteurdegarip.fr</strong>,
                ou via notre formulaire de devis en ligne. Réponse personnalisée sous 24h ouvrées.
                Service traiteur dans tout le Vaucluse, la Provence et la région PACA.
              </p>
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
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Star, Award, Users, ShieldCheck, ArrowRight, MapPin, Navigation, Quote } from "lucide-react";
import heroImg from "@/assets/hero-buffet.jpg";
import gGrillades from "@/assets/gallery-grillades.jpg";
import gMezze from "@/assets/gallery-mezze.jpg";
import gGrecque from "@/assets/gallery-grecque.jpg";
import gBaklava from "@/assets/gallery-baklava.jpg";
import gMariage from "@/assets/gallery-mariage.jpg";
import gShawarma from "@/assets/spec-shawarma.jpg";
import gFalafel from "@/assets/spec-falafel.jpg";
import gCouscous from "@/assets/spec-couscous.jpg";
import gDolma from "@/assets/spec-dolma.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Traiteur de Garip — 36 ans d'excellence culinaire méditerranéenne" },
      { name: "description", content: "Traiteur méditerranéen, turc, libanais, grec et arménien. Mariages, événements d'entreprise, réceptions sur mesure. Halal, casher, végétarien, vegan." },
      { property: "og:title", content: "Traiteur de Garip — Traiteur méditerranéen haut de gamme" },
      { property: "og:description", content: "36 ans d'excellence. Cuisine méditerranéenne, turque, libanaise, grecque, arménienne pour tous vos événements." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        name: "Traiteur de Garip",
        description: "Traiteur méditerranéen, turc, libanais, grec et arménien avec 36 ans d'expérience.",
        servesCuisine: ["Méditerranéenne", "Turque", "Libanaise", "Grecque", "Arménienne"],
        telephone: "+33490331749",
        address: {
          "@type": "PostalAddress",
          streetAddress: "22 Rue Portail Matheron",
          postalCode: "84000",
          addressLocality: "Avignon",
          addressCountry: "FR",
        },
        openingHours: "Mo-Su 10:00-21:00",
        areaServed: "Avignon, Vaucluse, Provence",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "103" },
      }),
    }],
  }),
  component: Index,
});

const trust = [
  { icon: Star, value: "4,7 / 5", label: "Noté par nos clients" },
  { icon: Award, value: "36 ans", label: "D'expérience" },
  { icon: Users, value: "103+", label: "Avis clients" },
  { icon: ShieldCheck, value: "Halal & Casher", label: "Cuisine certifiée" },
];

const gallery = [
  { src: gGrillades, alt: "Grillades turques au charbon", tag: "Grillades turques" },
  { src: gMezze, alt: "Mezze libanais", tag: "Mezze libanais" },
  { src: gGrecque, alt: "Moussaka grecque", tag: "Spécialités grecques" },
  { src: gCouscous, alt: "Couscous traditionnel", tag: "Cuisine arménienne" },
  { src: gShawarma, alt: "Shawarma découpé", tag: "Shawarma" },
  { src: gBaklava, alt: "Baklava aux pistaches", tag: "Pâtisseries orientales" },
  { src: gMariage, alt: "Réception de mariage", tag: "Réceptions mariage" },
  { src: gFalafel, alt: "Falafels et sauces", tag: "Falafels & dips" },
  { src: gDolma, alt: "Feuilles de vigne", tag: "Buffets méditerranéens" },
];

const reviews = [
  {
    name: "Camille R.",
    event: "Mariage · Avignon",
    text: "Une expérience exceptionnelle pour notre mariage, des plats incroyables et un service irréprochable.",
  },
  {
    name: "Mehmet K.",
    event: "Événement privé",
    text: "Des saveurs méditerranéennes authentiques et une équipe très professionnelle.",
  },
  {
    name: "Sophie L.",
    event: "Client fidèle · Avignon",
    text: "Le meilleur traiteur oriental et méditerranéen d'Avignon.",
  },
  {
    name: "Antoine D.",
    event: "Réception d'entreprise · Vaucluse",
    text: "Un buffet magnifique, varié et raffiné. Tous nos invités nous ont félicités pour le choix du traiteur.",
  },
];

function RatingStars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4].map((i) => (
        <Star key={i} size={16} className="fill-current text-gold" strokeWidth={1.5} />
      ))}
      <div className="relative" style={{ width: 16, height: 16 }}>
        <Star size={16} className="absolute inset-0 text-muted-foreground/30" strokeWidth={1.5} />
        <div className="absolute inset-0 overflow-hidden" style={{ width: "70%" }}>
          <Star size={16} className="fill-current text-gold" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

const ADDRESS = "22 Rue Portail Matheron, 84000 Avignon";
const MAPS_QUERY = encodeURIComponent("Traiteur de Garip, 22 Rue Portail Matheron, 84000 Avignon");
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Buffet méditerranéen haut de gamme"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-noir/30" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-12 pb-24 md:pb-32 pt-40">
          <div className="max-w-3xl">
            <p className="fade-in text-xs md:text-sm tracking-[0.4em] uppercase text-gold mb-6">
              Maison familiale · Depuis 1989
            </p>
            <h1 className="fade-up text-primary-foreground font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-balance">
              36 ans d'excellence <em className="not-italic text-gold">culinaire</em> méditerranéenne
            </h1>
            <p className="fade-up mt-8 max-w-xl text-primary-foreground/80 text-lg leading-relaxed" style={{ animationDelay: "200ms" }}>
              À Avignon depuis 1989. De la cuisine turque aux saveurs libanaises, grecques et arméniennes — nous adaptons chaque menu à vos traditions, votre culture et tous les régimes alimentaires.
            </p>
            <div className="fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "400ms" }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase shadow-elegant hover:bg-accent transition-smooth"
              >
                Contacter le traiteur
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 border border-primary-foreground/40 text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-primary-foreground hover:text-noir transition-smooth"
              >
                Nos spécialités
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {trust.map((t, i) => (
            <Reveal key={t.label} delay={i * 100}>
              <div className="text-center md:text-left">
                <t.icon className="text-primary mb-4 mx-auto md:mx-0" size={28} strokeWidth={1.2} />
                <p className="font-display text-3xl md:text-4xl text-foreground">{t.value}</p>
                <p className="mt-2 text-xs tracking-[0.15em] uppercase text-muted-foreground">{t.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-28 md:py-40 bg-background">
        <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Notre maison</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground text-balance leading-tight">
              Trois générations au service<br />
              <em className="not-italic text-primary">de votre table</em>
            </h2>
            <div className="mt-10 mx-auto w-16 h-px bg-gradient-warm" />
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Depuis 1989, Traiteur de Garip célèbre les grandes traditions culinaires de la Méditerranée et de l'Orient.
              Chaque plat est préparé avec des produits soigneusement sélectionnés, dans le respect des recettes héritées
              de nos aïeux — turques, libanaises, grecques, arméniennes — et adapté à toutes les cultures et tous les régimes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-noir py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Galerie</p>
                <h2 className="font-display text-4xl md:text-6xl text-primary-foreground text-balance leading-tight">
                  Une cuisine qui<br />se contemple
                </h2>
              </div>
              <p className="max-w-md text-primary-foreground/60 leading-relaxed">
                Grillades turques, mezze libanais, spécialités grecques et arméniennes, buffets méditerranéens, pâtisseries traditionnelles.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((g, i) => (
              <Reveal key={g.tag} delay={(i % 3) * 120}>
                <figure className="group relative overflow-hidden aspect-[4/5]">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/20 to-transparent opacity-90" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="text-xs tracking-[0.25em] uppercase text-gold">— {g.tag}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section className="py-28 md:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Avis clients</p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground text-balance leading-tight">
                Noté <em className="not-italic text-primary">4,4 / 5</em><br />par nos clients
              </h2>
              <div className="mt-8 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={22} className="fill-current text-gold" strokeWidth={0} style={{ opacity: i <= 4 ? 1 : 0.45 }} />
                ))}
                <span className="ml-3 text-sm text-muted-foreground tracking-wide">120+ avis vérifiés</span>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 4) * 100}>
                <article className="bg-card border border-border p-8 h-full flex flex-col transition-smooth hover:border-primary hover:shadow-soft">
                  <Quote className="text-primary/40" size={28} strokeWidth={1.2} />
                  <p className="mt-5 text-foreground leading-relaxed flex-1">"{r.text}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} className="fill-current text-gold" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="font-display text-lg text-foreground">{r.name}</p>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">{r.event}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOUS TROUVER */}
      <section className="bg-card border-y border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Nous trouver</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground text-balance leading-tight">
              Au cœur d'<em className="not-italic text-primary">Avignon</em><br />depuis 36 ans
            </h2>
            <div className="mt-8 flex items-start gap-3 text-foreground">
              <MapPin className="text-primary mt-1" size={20} strokeWidth={1.5} />
              <p className="text-lg leading-relaxed">{ADDRESS}</p>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Notre maison vous accueille au 22 Rue Portail Matheron, à deux pas du centre historique d'Avignon. Service traiteur dans tout le Vaucluse et la Provence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase hover:bg-accent transition-smooth shadow-soft"
              >
                <Navigation size={14} /> Voir l'itinéraire
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase hover:border-primary hover:text-primary transition-smooth"
              >
                Nous contacter
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="aspect-square overflow-hidden border border-border shadow-elegant">
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

      {/* AVIGNON SEO */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Avignon · Provence</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground text-balance leading-tight">
              Le savoir-faire méditerranéen,<br /><em className="not-italic text-primary">au cœur de la Provence</em>
            </h2>
            <div className="mt-10 mx-auto w-16 h-px bg-gradient-warm" />
            <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed text-lg text-left md:text-center">
              <p>
                Avignon, cité des Papes et carrefour culturel de la Provence, partage avec la Méditerranée une même
                passion pour les produits du soleil : huile d'olive, herbes fraîches, légumes gorgés de lumière. C'est ici,
                à quelques pas du Palais des Papes et du Pont d'Avignon, que <strong className="text-foreground">Traiteur de Garip</strong> a posé
                ses fourneaux il y a plus de 36 ans.
              </p>
              <p>
                Spécialiste de la cuisine turque, libanaise, grecque et arménienne en Vaucluse, notre maison
                familiale conjugue savoir-faire oriental et produits provençaux pour des réceptions, mariages
                et événements d'entreprise à Avignon, Carpentras, Orange, Châteauneuf-du-Pape et toute la région PACA.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-warm py-24 md:py-32 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl text-balance leading-tight">
              Préparons ensemble<br /><em className="not-italic text-gold">votre événement</em>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/80 text-lg">
              Mariages, fiançailles, anniversaires, baptêmes, réceptions d'entreprise — un menu sur mesure, à votre image.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-primary-foreground text-noir px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-noir transition-smooth shadow-elegant"
            >
              Demander un devis
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Star, Award, Utensils, Sparkles, ArrowRight } from "lucide-react";
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
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", reviewCount: "120" },
      }),
    }],
  }),
  component: Index,
});

const trust = [
  { icon: Star, value: "4,4 / 5", label: "Noté par nos clients" },
  { icon: Award, value: "36 ans", label: "D'expérience" },
  { icon: Utensils, value: "5 cuisines", label: "Méditerranéennes & orientales" },
  { icon: Sparkles, value: "Sur mesure", label: "Service traiteur personnalisé" },
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
              De la cuisine turque aux saveurs libanaises, grecques et arméniennes — nous adaptons chaque menu à vos traditions, votre culture et tous les régimes alimentaires.
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

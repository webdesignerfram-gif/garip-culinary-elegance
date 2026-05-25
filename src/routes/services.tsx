import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Check, ArrowRight } from "lucide-react";
import gShawarma from "@/assets/spec-shawarma.jpg";
import gFalafel from "@/assets/spec-falafel.jpg";
import gCouscous from "@/assets/spec-couscous.jpg";
import gDolma from "@/assets/spec-dolma.jpg";
import gMezze from "@/assets/gallery-mezze.jpg";
import gBaklava from "@/assets/gallery-baklava.jpg";
import gGrillades from "@/assets/gallery-grillades.jpg";
import gGrecque from "@/assets/gallery-grecque.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Spécialités — Traiteur de Garip · Cuisine méditerranéenne, turque, libanaise" },
      { name: "description", content: "Shawarma, kebabs, mezze, baklava, couscous, grillades arméniennes. Service traiteur halal, casher, végétarien et vegan pour tous événements." },
      { property: "og:title", content: "Spécialités — Traiteur de Garip" },
      { property: "og:description", content: "Nos spécialités méditerranéennes et orientales. Menus halal, casher, végétariens et vegan." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
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
  component: ServicesPage,
});

const specialties = [
  { name: "Shawarma", desc: "Mariné 24h, rôti à la broche, servi en plateau ou sandwich.", img: gShawarma },
  { name: "Kebabs & grillades turques", desc: "Adana, Urfa, şiş — viandes nobles cuites au charbon.", img: gGrillades },
  { name: "Mezze libanais", desc: "Houmous, moutabal, taboulé, kibbeh, feuilles de vigne.", img: gMezze },
  { name: "Moussaka & spécialités grecques", desc: "Recettes traditionnelles d'Égée, à la fois généreuses et raffinées.", img: gGrecque },
  { name: "Falafels & houmous", desc: "Croustillants, parfumés, accompagnés de tahini maison.", img: gFalafel },
  { name: "Couscous & plats mijotés", desc: "Semoule légère, viandes confites, légumes de saison.", img: gCouscous },
  { name: "Feuilles de vigne farcies", desc: "Dolma au riz, herbes fraîches et zeste de citron.", img: gDolma },
  { name: "Baklava & pâtisseries orientales", desc: "Pistache, noix, miel — feuilletés cuits chaque matin.", img: gBaklava },
];

const others = [
  "Taboulé frais",
  "Plateaux de mezze",
  "Grillades arméniennes",
  "Fruits de mer méditerranéens",
  "Salades fraîches de saison",
  "Pains traditionnels (pita, lavash, pide)",
  "Spécialités au charbon de bois",
  "Desserts orientaux assortis",
];

const regimes = [
  { title: "Service Halal", desc: "Viandes certifiées issues de bouchers de confiance, traçabilité totale." },
  { title: "Options Casher", desc: "Préparations adaptées sur demande, en partenariat avec des fournisseurs casher." },
  { title: "Menus végétariens", desc: "Riches en mezze, légumes grillés, légumineuses et fromages méditerranéens." },
  { title: "Menus vegan", desc: "100 % végétal sans compromis sur la saveur ni l'authenticité." },
  { title: "Menus personnalisés", desc: "Adaptés à vos invités, à vos traditions et au format de votre événement." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative bg-noir text-primary-foreground pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={gMezze} alt="" className="w-full h-full object-cover" width={1280} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/70 to-noir" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <p className="fade-in text-xs tracking-[0.4em] uppercase text-gold mb-6">Spécialités</p>
          <h1 className="fade-up font-display text-5xl md:text-7xl text-balance leading-[1.05] max-w-4xl">
            Une carte inspirée par <em className="not-italic text-gold">la Méditerranée</em> et l'Orient
          </h1>
          <p className="fade-up mt-8 max-w-2xl text-primary-foreground/75 text-lg leading-relaxed" style={{ animationDelay: "200ms" }}>
            Chaque recette est issue d'une tradition, transmise puis sublimée pour vos plus belles tables.
          </p>
        </div>
      </section>

      {/* SPECIALTIES GRID */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {specialties.map((s, i) => (
              <Reveal key={s.name} delay={(i % 2) * 100}>
                <article className="group">
                  <div className="overflow-hidden aspect-[5/4] mb-6">
                    <img
                      src={s.img}
                      alt={s.name}
                      loading="lazy"
                      width={1024}
                      height={820}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
                    {String(i + 1).padStart(2, "0")} —
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">{s.name}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Other items */}
          <Reveal>
            <div className="mt-24 border-t border-border pt-16">
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                Et aussi
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
                {others.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="text-primary mt-1">—</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="bg-card border-y border-border py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Tarification</p>
            <p className="font-display text-3xl md:text-5xl text-foreground italic leading-tight text-balance">
              « Contactez le traiteur pour un devis personnalisé. »
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-accent transition-smooth"
            >
              Demander un devis
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* REGIMES */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Pour tous</p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground text-balance leading-tight">
                Toutes les cultures,<br /><em className="not-italic text-primary">tous les régimes</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regimes.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 100}>
                <div className="bg-card border border-border p-8 h-full hover:border-primary transition-smooth">
                  <Check className="text-primary mb-4" size={22} strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-foreground">{r.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
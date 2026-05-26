import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Check, ArrowRight, ZoomIn, X } from "lucide-react";
import { useState } from "react";
import gMezze from "@/assets/gallery-mezze.jpg";
import photoKebabs from "@/assets/photo-kebabs.jpg";
import photoPide from "@/assets/photo-pide.jpg";
import photoMezzeLiban from "@/assets/photo-mezze-liban.jpg";
import photoShawarma from "@/assets/photo-shawarma.jpg";
import photoMoussaka from "@/assets/photo-moussaka.jpg";
import photoSouvlaki from "@/assets/photo-souvlaki.jpg";
import photoGrilladesArm from "@/assets/photo-grillades-arm.jpg";
import photoLavash from "@/assets/photo-lavash.jpg";
import photoPlateauMedit from "@/assets/photo-plateau-medit.jpg";
import photoFruitsMer from "@/assets/photo-fruits-mer.jpg";

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

type Menu = {
  cuisine: string;
  subtitle: string;
  origin: string;
  dishes: { name: string; desc: string }[];
};

const menus: Menu[] = [
  {
    cuisine: "Cuisine Méditerranéenne",
    subtitle: "Le soleil dans l'assiette",
    origin: "Côtes de la Méditerranée",
    dishes: [
      { name: "Fruits de mer méditerranéens", desc: "Gambas, poulpe, daurade — grillés à la plancha" },
      { name: "Plateau de mezze", desc: "Sélection d'entrées froides et chaudes" },
      { name: "Grillades de saison", desc: "Viandes et poissons au charbon de bois" },
      { name: "Salades fraîches", desc: "Légumes du marché, huile d'olive, herbes" },
      { name: "Couscous", desc: "Semoule légère, viandes confites, légumes" },
      { name: "Pâtisseries orientales", desc: "Miel, pistache, fleur d'oranger" },
    ],
  },
  {
    cuisine: "Cuisine Turque",
    subtitle: "Anatolie & Bosphore",
    origin: "Istanbul · Gaziantep",
    dishes: [
      { name: "Kebabs", desc: "Adana, Urfa, şiş — grillés à la braise" },
      { name: "Pide", desc: "Pain plat garni cuit au four à pierre" },
      { name: "Köfte", desc: "Boulettes de viande aux épices" },
      { name: "Lahmacun", desc: "Galette fine à la viande hachée et herbes" },
      { name: "İskender Kebab", desc: "Doner sur pain pide, sauce tomate, yaourt" },
      { name: "Börek", desc: "Feuilleté au fromage ou à la viande" },
      { name: "Baklava", desc: "Feuilleté à la pistache et au miel" },
    ],
  },
  {
    cuisine: "Cuisine Libanaise",
    subtitle: "Mezze & convivialité",
    origin: "Beyrouth · Tripoli",
    dishes: [
      { name: "Houmous", desc: "Crème de pois chiches, tahini, citron" },
      { name: "Taboulé", desc: "Persil, boulgour, tomate, menthe fraîche" },
      { name: "Falafels", desc: "Croquettes de pois chiches aux herbes" },
      { name: "Shawarma", desc: "Viande marinée, rôtie à la broche" },
      { name: "Mezze libanais", desc: "Assortiment de spécialités à partager" },
      { name: "Fattouche", desc: "Salade fraîche, pain croustillant, sumac" },
      { name: "Kebbé", desc: "Croquette de boulgour et viande, frite ou crue" },
    ],
  },
  {
    cuisine: "Cuisine Grecque",
    subtitle: "Égée & Cyclades",
    origin: "Athènes · Crète",
    dishes: [
      { name: "Moussaka", desc: "Aubergines, viande, béchamel gratinée" },
      { name: "Gyros", desc: "Viande rôtie en broche, pita, sauce tzatziki" },
      { name: "Souvlaki", desc: "Brochettes marinées grillées" },
      { name: "Tzatziki", desc: "Yaourt, concombre, ail, menthe" },
      { name: "Dolmadakia", desc: "Feuilles de vigne farcies au riz" },
      { name: "Spanakopita", desc: "Feuilleté aux épinards et feta" },
    ],
  },
  {
    cuisine: "Cuisine Arménienne",
    subtitle: "Tradition millénaire",
    origin: "Erevan · Caucase",
    dishes: [
      { name: "Lavash", desc: "Pain traditionnel cuit au tonir" },
      { name: "Dolma", desc: "Feuilles de vigne ou légumes farcis" },
      { name: "Grillades arméniennes (Khorovats)", desc: "Brochettes de viandes marinées au charbon" },
      { name: "Manti", desc: "Petits raviolis à la viande, yaourt et ail" },
      { name: "Brochettes traditionnelles", desc: "Bœuf, agneau, poulet, épices arméniennes" },
    ],
  },
];

type Photo = { src: string; alt: string; cuisine: string; title: string };

const photos: Photo[] = [
  { src: photoPlateauMedit, alt: "Plateau méditerranéen", cuisine: "Méditerranéenne", title: "Plateau méditerranéen" },
  { src: photoFruitsMer, alt: "Fruits de mer méditerranéens", cuisine: "Méditerranéenne", title: "Fruits de mer méditerranéens" },
  { src: photoKebabs, alt: "Kebabs turcs grillés", cuisine: "Turque", title: "Kebabs" },
  { src: photoPide, alt: "Pide turc au four à pierre", cuisine: "Turque", title: "Pide" },
  { src: photoMezzeLiban, alt: "Mezze libanais à partager", cuisine: "Libanaise", title: "Mezze libanais" },
  { src: photoShawarma, alt: "Shawarma libanais", cuisine: "Libanaise", title: "Shawarma" },
  { src: photoMoussaka, alt: "Moussaka grecque traditionnelle", cuisine: "Grecque", title: "Moussaka" },
  { src: photoSouvlaki, alt: "Souvlaki grec", cuisine: "Grecque", title: "Souvlaki" },
  { src: photoGrilladesArm, alt: "Grillades arméniennes Khorovats", cuisine: "Arménienne", title: "Grillades arméniennes" },
  { src: photoLavash, alt: "Pain lavash arménien", cuisine: "Arménienne", title: "Lavash" },
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

      {/* MENUS — CARTES */}
      <section id="menus" className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="max-w-3xl mb-16 md:mb-20">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Nos menus</p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground text-balance leading-tight">
                Cinq cuisines,<br /><em className="not-italic text-primary">une seule passion</em>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Découvrez nos cartes traditionnelles, transmises de génération en génération
                et revisitées pour vos plus belles tables.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {menus.map((m, i) => (
              <Reveal key={m.cuisine} delay={(i % 2) * 120}>
                <article
                  className={`relative bg-card border border-border p-8 md:p-10 h-full shadow-elegant hover:shadow-2xl transition-smooth ${
                    menus.length % 2 === 1 && i === menus.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  {/* corner ornaments */}
                  <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-primary/40" />
                  <span className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary/40" />
                  <span className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-primary/40" />
                  <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-primary/40" />

                  <header className="text-center pb-6 border-b border-border/70">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3">
                      Menu · {m.origin}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-foreground">{m.cuisine}</h3>
                    <p className="mt-2 italic text-muted-foreground text-sm">{m.subtitle}</p>
                  </header>

                  <ul className="mt-6 space-y-4">
                    {m.dishes.map((d) => (
                      <li key={d.name} className="group/dish">
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-base md:text-lg text-foreground whitespace-nowrap">
                            {d.name}
                          </span>
                          <span className="flex-1 border-b border-dotted border-border/70 translate-y-[-4px]" />
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <div aria-hidden className="relative h-px bg-border">
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 bg-background px-6 text-xs tracking-[0.4em] uppercase text-primary">
          Galerie
        </span>
      </div>

      {/* PHOTOS DES PLATS */}
      <PhotoGallery />

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

function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? photos[active] : null;

  const close = () => setActive(null);
  const prev = () => setActive((a) => (a === null ? null : (a - 1 + photos.length) % photos.length));
  const next = () => setActive((a) => (a === null ? null : (a + 1) % photos.length));

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <div className="max-w-3xl mb-14 md:mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Galerie des plats</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground text-balance leading-tight">
              L'art de la table,<br /><em className="not-italic text-primary">en images</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Cliquez sur une photo pour l'agrandir.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden bg-noir aspect-[4/5] focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`Agrandir : ${p.title}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="flex items-center gap-2 bg-background/90 text-foreground px-5 py-3 text-[10px] tracking-[0.3em] uppercase">
                    <ZoomIn size={14} /> Agrandir
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-left">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2">
                    Cuisine {p.cuisine}
                  </p>
                  <p className="font-display text-2xl md:text-3xl text-primary-foreground">
                    {p.title}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-noir/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 md:top-8 md:right-8 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Fermer"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground text-3xl md:text-4xl px-3"
            aria-label="Photo précédente"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground text-3xl md:text-4xl px-3"
            aria-label="Photo suivante"
          >
            ›
          </button>

          <figure
            className="relative max-w-5xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="w-full h-auto max-h-[80vh] object-contain shadow-2xl"
            />
            <figcaption className="mt-5 text-center">
              <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2">
                Cuisine {current.cuisine}
              </p>
              <p className="font-display text-2xl md:text-3xl text-primary-foreground">
                {current.title}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
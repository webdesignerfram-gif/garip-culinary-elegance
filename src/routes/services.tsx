import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Check, ArrowRight } from "lucide-react";
import gMezze from "@/assets/gallery-mezze.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Spécialités — Traiteur Garip · Cuisine méditerranéenne, turque, libanaise" },
      { name: "description", content: "Shawarma, kebabs, mezze, baklava, couscous, grillades arméniennes. Service traiteur halal, casher, végétarien et vegan pour tous événements." },
      { property: "og:title", content: "Spécialités — Traiteur Garip" },
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
        name: "Traiteur Garip",
        description: "Traiteur méditerranéen, turc, libanais, grec et arménien à Avignon depuis 36 ans. Service traiteur halal, casher, végétarien et vegan pour mariages, événements d'entreprise et réceptions privées.",
        url: "https://traiteurdegarip.fr",
        telephone: "+33490331749",
        email: "traiteurdescarmes@gmail.com",
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
  entrees: string[];
  plats: string[];
  desserts: string[];
};

const menus: Menu[] = [
  {
    cuisine: "Cuisine Méditerranéenne",
    subtitle: "Le soleil dans l'assiette",
    origin: "Côtes de la Méditerranée",
    entrees: [
      "Plateau de mezze",
      "Bruschetta",
      "Salade grecque",
      "Salade feta",
      "Aubergines grillées",
      "Poivrons farcis",
    ],
    plats: [
      "Couscous royal",
      "Fruits de mer méditerranéens",
      "Grillades méditerranéennes",
      "Calamars grillés",
      "Riz méditerranéen",
      "Brochettes de poulet",
      "Tajine méditerranéen",
      "Dorade grillée",
      "Ratatouille",
      "Tarama",
      "Pâtes aux fruits de mer",
      "Paëlla méditerranéenne",
      "Crevettes grillées",
    ],
    desserts: ["Pâtisseries orientales"],
  },
  {
    cuisine: "Cuisine Turque",
    subtitle: "Anatolie & Bosphore",
    origin: "Istanbul · Gaziantep",
    entrees: [
      "İmam Bayıldı",
      "Sigara Börek au fromage",
      "Sigara Börek à la viande hachée",
      "Houmous",
      "Cacık",
      "Dolmas",
      "Acılı Ezme",
      "Tarator",
      "Salade Berger",
    ],
    plats: [
      "Köfte",
      "Adana Kebab",
      "Tavuk Şiş",
      "Döner Kebab",
      "İskender Kebap",
      "Karnıyarık",
    ],
    desserts: ["Baklava à la pistache", "Revani", "Sütlaç", "Loukoum"],
  },
  {
    cuisine: "Cuisine Libanaise",
    subtitle: "Mezze & convivialité",
    origin: "Beyrouth · Tripoli",
    entrees: [
      "Houmous",
      "Taboulé",
      "Mezze libanais",
      "Fattouche",
      "Manakish",
      "Samboussek",
      "Moutabal",
      "Riz libanais",
      "Batata Harra",
      "Labneh",
      "Toum",
    ],
    plats: [
      "Falafels",
      "Shawarma",
      "Kebbé",
      "Manakish",
      "Kafta",
      "Shish Taouk",
      "Warak Enab",
      "Makdous",
    ],
    desserts: ["Mouhallabié", "Baklava libanais"],
  },
  {
    cuisine: "Cuisine Grecque",
    subtitle: "Égée & Cyclades",
    origin: "Athènes · Crète",
    entrees: [
      "Tzatziki",
      "Spanakopita",
      "Tiropita",
      "Dolmades",
      "Salade grecque",
      "Halumi grillée",
      "Calamars frits",
      "Tarama",
      "Fasolada",
      "Pita grecque",
    ],
    plats: [
      "Moussaka",
      "Gyros",
      "Souvlaki",
      "Keftedes",
      "Briam",
      "Pastitsio",
      "Riz citronné grec",
    ],
    desserts: ["Baklava grec", "Kadaif", "Loukoumades"],
  },
  {
    cuisine: "Cuisine Arménienne",
    subtitle: "Tradition millénaire",
    origin: "Erevan · Caucase",
    entrees: [
      "Soudjouk",
      "Pastırma",
      "Beurek arménien",
      "Mezze arménien",
    ],
    plats: [
      "Sou Beurek",
      "Lyulya Kebab",
      "Grillades arméniennes",
      "Lahmacun",
      "İçli Köfte",
      "İmam Bayıldı",
    ],
    desserts: ["Baklava arménienne", "Pilahi arménien"],
  },
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

                  <div className="mt-8 space-y-10">
                    {([
                      { label: "Entrées", items: m.entrees },
                      { label: "Plats chauds", items: m.plats },
                      { label: "Desserts", items: m.desserts },
                    ] as const).map((section) => (
                      <div key={section.label}>
                        <div className="flex items-center gap-4 mb-5">
                          <span className="h-px flex-1 bg-border" />
                          <h4 className="text-[11px] tracking-[0.4em] uppercase text-primary font-medium whitespace-nowrap">
                            {section.label}
                          </h4>
                          <span className="h-px flex-1 bg-border" />
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                          {section.items.map((d) => (
                            <li
                              key={d}
                              className="flex items-baseline gap-3 group/dish"
                            >
                              <span className="font-display text-[15px] md:text-base text-foreground group-hover/dish:text-primary transition-colors whitespace-nowrap">
                                {d}
                              </span>
                              <span className="flex-1 border-b border-dotted border-border/60 translate-y-[-4px]" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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

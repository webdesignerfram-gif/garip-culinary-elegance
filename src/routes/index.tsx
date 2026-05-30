import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Star, Award, Users, ShieldCheck, ArrowRight, MapPin, Navigation, Quote } from "lucide-react";
import heroImg from "@/assets/hero-buffet.jpg";
import r01 from "@/assets/realisation-01.jpg";
import r02 from "@/assets/realisation-02.jpg";
import r03 from "@/assets/realisation-03.jpg";
import r04 from "@/assets/realisation-04.jpg";
import r05 from "@/assets/realisation-05.jpg";
import r06 from "@/assets/realisation-06.jpg";
import r07 from "@/assets/realisation-07.jpg";
import r08 from "@/assets/realisation-08.jpg";
import r09 from "@/assets/realisation-09.jpg";
import r10 from "@/assets/realisation-10.jpg";
import r11 from "@/assets/realisation-11.jpg";
import r12 from "@/assets/realisation-12.jpg";
import r13 from "@/assets/realisation-13.jpg";
import r14 from "@/assets/realisation-14.jpg";
import r15 from "@/assets/realisation-15.jpg";
import r16 from "@/assets/realisation-16.jpg";
import r17 from "@/assets/realisation-17.jpg";
import r18 from "@/assets/realisation-18.jpg";
import r19 from "@/assets/realisation-19.jpg";
import r20 from "@/assets/realisation-20.jpg";
import r21 from "@/assets/realisation-21.jpg";
import r22 from "@/assets/realisation-22.jpg";
import r23 from "@/assets/realisation-23.jpg";
import r24 from "@/assets/realisation-24.jpg";
import r25 from "@/assets/realisation-25.jpg";
import r26 from "@/assets/realisation-26.jpg";
import r27 from "@/assets/realisation-27.jpg";
import r28 from "@/assets/realisation-28.jpg";
import r29 from "@/assets/realisation-29.jpg";
import r30 from "@/assets/realisation-30.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Traiteur Garip — 36 ans d'excellence culinaire méditerranéenne" },
      { name: "description", content: "Traiteur méditerranéen, turc, libanais, grec et arménien. Mariages, événements d'entreprise, réceptions sur mesure. Halal, casher, végétarien, vegan." },
      { property: "og:title", content: "Traiteur Garip — Traiteur méditerranéen haut de gamme" },
      { property: "og:description", content: "36 ans d'excellence. Cuisine méditerranéenne, turque, libanaise, grecque, arménienne pour tous vos événements." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
  component: Index,
});

const trust = [
  { icon: Star, value: "4,7 / 5", label: "Noté par nos clients" },
  { icon: Award, value: "36 ans", label: "D'expérience" },
  { icon: Users, value: "103+", label: "Avis clients" },
  { icon: ShieldCheck, value: "Halal & Casher", label: "Cuisine certifiée" },
];

const realisations = [
  { src: r01, title: "\u200BMariage haut de gamme à Avignon", desc: "\u200B" },
  { src: r02, title: "Buffet méditerranéen sur mesure", desc: "Une sélection de mezze, grillades et spécialités préparée selon les envies de nos clients." },
  { src: r03, title: "Réception familiale réussie", desc: "Des moments chaleureux célébrés autour d'une cuisine généreuse et conviviale." },
  { src: r04, title: "Saveurs de la Méditerranée", desc: "Un voyage gustatif entre traditions turques, libanaises, grecques et arméniennes." },
  { src: r05, title: "Événement d'entreprise", desc: "Une prestation clé en main pour séminaires, lancements et cocktails professionnels." },
  { src: r06, title: "Cuisine traditionnelle turque", desc: "Kebabs, pides et mezze préparés dans le plus pur respect de la tradition turque." },
  { src: r07, title: "Buffet oriental raffiné", desc: "Une présentation élégante associant saveurs orientales et finitions soignées." },
  { src: r08, title: "Réception privée élégante", desc: "Un service discret et professionnel pour des soirées intimes et mémorables." },
  { src: r09, title: "Notre savoir-faire depuis 36 ans", desc: "Trois décennies d'expérience au service de la gastronomie méditerranéenne." },
  { src: r10, title: "Des moments de partage inoubliables", desc: "Une cuisine pensée pour rassembler et créer des souvenirs durables." },
  { src: r11, title: "Buffet de mariage personnalisé", desc: "Chaque menu est composé sur mesure pour refléter votre histoire et vos traditions." },
  { src: r12, title: "Cuisine authentique libanaise", desc: "Houmous, taboulé, kebbés et grillades préparés selon les recettes familiales." },
  { src: r13, title: "Réception prestigieuse", desc: "Une organisation millimétrée et une présentation digne des plus grandes maisons." },
  { src: r14, title: "Soirée privée sur mesure", desc: "Un accompagnement personnalisé pour des événements uniques et raffinés." },
  { src: r15, title: "Événement professionnel réussi", desc: "Une logistique maîtrisée pour des réceptions d'entreprise sans fausse note." },
  { src: r16, title: "Buffet gourmand méditerranéen", desc: "Une abondance de couleurs et de saveurs pour ravir tous les convives." },
  { src: r17, title: "L'art de recevoir", desc: "Un service traiteur attentif aux moindres détails de votre événement." },
  { src: r18, title: "Une cuisine faite avec passion", desc: "Des plats préparés chaque jour avec des produits frais et soigneusement sélectionnés." },
  { src: r19, title: "Réception familiale chaleureuse", desc: "Une cuisine généreuse pour célébrer en famille les grands moments de la vie." },
  { src: r20, title: "Créations culinaires raffinées", desc: "Des dressages élégants alliant tradition méditerranéenne et modernité." },
  { src: r21, title: "Mariage d'exception", desc: "Un menu d'honneur conçu pour marquer durablement vos invités." },
  { src: r22, title: "Buffet généreux et élégant", desc: "Une présentation soignée pour des buffets aussi beaux que savoureux." },
  { src: r23, title: "Une tradition depuis 36 ans", desc: "Un héritage culinaire transmis avec exigence de génération en génération." },
  { src: r24, title: "Cuisine grecque authentique", desc: "Moussaka, souvlaki et spécialités helléniques préparés dans la pure tradition." },
  { src: r25, title: "Saveurs arméniennes traditionnelles", desc: "Grillades, lavash et spécialités arméniennes pour un voyage culinaire unique." },
  { src: r26, title: "Réception clé en main", desc: "De la création du menu au service à table, nous prenons tout en charge." },
  { src: r27, title: "Événement mémorable", desc: "Une prestation qui marque les esprits par sa qualité et son authenticité." },
  { src: r28, title: "Buffet premium", desc: "Une sélection haut de gamme pour des événements à la hauteur de vos exigences." },
  { src: r29, title: "Excellence culinaire", desc: "Un savoir-faire reconnu et plébiscité par plus de 103 avis clients." },
  { src: r30, title: "Des prestations sur mesure", desc: "Chaque événement est unique, chaque menu est pensé spécialement pour vous." },
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
const MAPS_QUERY = encodeURIComponent("Traiteur Garip, 22 Rue Portail Matheron, 84000 Avignon");
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
              Depuis 1989, Traiteur Garip célèbre les grandes traditions culinaires de la Méditerranée et de l'Orient.
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
                <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Nos réalisations</p>
                <h2 className="font-display text-4xl md:text-6xl text-primary-foreground text-balance leading-tight">
                  Découvrez<br />nos réalisations
                </h2>
              </div>
              <p className="max-w-md text-primary-foreground/60 leading-relaxed">
                Plus de 36 ans d'expérience au service de vos événements à Avignon et dans toute la région.
              </p>
            </div>
          </Reveal>

          {/* Texte de présentation */}
          <Reveal>
            <div className="bg-primary-foreground/[0.03] border border-primary-foreground/10 backdrop-blur-sm p-8 md:p-14 mb-20 max-w-5xl mx-auto">
              <p className="text-primary-foreground/80 leading-relaxed text-base md:text-lg">
                Depuis plus de 36 ans, <span className="text-gold">Traiteur Garip</span> accompagne ses clients lors de leurs événements les plus importants. Mariages, anniversaires, réceptions privées, événements d'entreprise ou repas familiaux, chaque prestation est préparée avec passion, savoir-faire et authenticité.
              </p>
              <p className="mt-6 text-primary-foreground/80 leading-relaxed text-base md:text-lg">
                Au fil des années, nous avons eu le plaisir de servir des centaines de clients à travers Avignon et sa région en proposant une cuisine méditerranéenne, turque, libanaise, grecque et arménienne de qualité.
              </p>
              <p className="mt-6 text-primary-foreground/80 leading-relaxed text-base md:text-lg">
                Les photos ci-dessous présentent quelques-unes de nos réalisations, de nos buffets et de nos créations culinaires préparées pour nos clients. Elles reflètent notre engagement, notre expérience et notre passion pour la gastronomie.
              </p>
              <p className="mt-6 text-primary-foreground/80 leading-relaxed text-base md:text-lg">
                Chaque événement est unique. C'est pourquoi nous mettons tout notre savoir-faire au service de vos envies afin de créer des moments inoubliables autour d'une cuisine généreuse et raffinée.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {realisations.map((r, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <figure className="group relative overflow-hidden bg-card shadow-elegant transition-smooth hover:shadow-soft hover:-translate-y-1">
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src={r.src}
                      alt={r.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <figcaption className="p-6 border-t border-border">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">Réalisation {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="font-display text-xl text-foreground leading-snug">{r.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
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
                Noté <em className="not-italic text-primary">4,7 / 5</em><br />par nos clients
              </h2>
              <div className="mt-8 flex items-center justify-center gap-1">
                <RatingStars />
                <span className="ml-3 text-sm text-muted-foreground tracking-wide">Plus de 103 avis vérifiés</span>
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
                    <div className="mb-2">
                      <RatingStars />
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
                title="Carte Traiteur Garip Avignon"
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
                à quelques pas du Palais des Papes et du Pont d'Avignon, que <strong className="text-foreground">Traiteur Garip</strong> a posé
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

      {/* PARTENAIRES & CLIENTS */}
      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Ils nous font confiance</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground text-balance leading-tight">
                Partenaires & <em className="not-italic text-primary">clients</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {[
              { name: "Ville d'Avignon", sub: "Mairie & collectivités" },
              { name: "Office du tourisme", sub: "Avignon Provence" },
              { name: "Hôtel d'Europe", sub: "5 étoiles · Avignon" },
              { name: "Palais des Papes", sub: "Monument historique" },
              { name: "Château des Fines Roches", sub: "Réceptions & mariages" },
              { name: "Château de la Barben", sub: "Événements prestige" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="bg-background border border-border px-6 py-8 text-center transition-smooth hover:border-primary hover:shadow-soft">
                  <p className="font-display text-lg text-foreground leading-tight">{p.name}</p>
                  <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{p.sub}</p>
                </div>
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

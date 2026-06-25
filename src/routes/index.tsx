import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Star, Award, Users, ShieldCheck, ArrowRight, MapPin, Navigation, Quote } from "lucide-react";
import heroImg from "@/assets/hero-garip.jpg";
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
      { name: "description", content: "Traiteur méditerranéen, turc, libanais, grec et arménien. Mariages, événements d'entreprise, réceptions sur mesure. Halal, casher, végétarien." },
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
        description: "Traiteur méditerranéen, turc, libanais, grec et arménien à Avignon depuis 36 ans. Service traiteur halal, casher, et végétarien pour mariages, événements d'entreprise et réceptions privées.",
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
            author: { "@type": "Person", name: "JF Faniel" },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody: "Beaucoup de choix venant de différentes cultures culinaires, le tout de qualité. De passage sur Avignon je n'ai fais que d'y retourner tellement il y a de choses à découvrir et à déguster",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "\u200B\n\n\nAlexis Midol-Monnet" },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody: "Excellents produits et de l'originalité par rapport aux \"libanais\" classiques, service très rapide et bonne humeur !\n\nL'indispensable pour une pause rapide en été à Avignon sans se ruiner.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "\u200BEmilie Menard" },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody: "​Depuis qq temps je viens me régaler chez Garip! Un bonheur pour les papilles, il y a beaucoup de choix de plats  végétariens ou carnés, à emporter ou sur place. ",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "​Maryl Renaud" },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody: "Clients depuis quelques années déjà, c’est toujours un plaisir des yeux et des papilles qui nous attend. Nous n’avons jamais été déçus par un plat et l’accueil est au top. Continuez à nous régaler.",
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
                name: "Menu végétarien",
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
  { src: r01, title: "Une journée gravée dans les mémoires", desc: "​Des pièces soignées, dressées avec minutie, qui racontent l'élégance d'un grand jour." },
  { src: r02, title: "L'art de la table ouverte", desc: "Une table généreuse où l'abondance et les couleurs invitent au partage et à la convivialité." },
  { src: r03, title: "​Quand la famille se retrouve", desc: "Des instants chaleureux autour d'une cuisine sincère, faite pour rassembler." },
  { src: r04, title: "Une ode aux horizons lointains", desc: "Un voyage entre plusieurs rives, servi en grandes tablées, fidèle aux savoir-faire d'origine." },
  { src: r05, title: "​Le détail qui fait la différence", desc: "Une prestation pensée pour impressionner, du dressage jusqu'au dernier invité servi." },
  { src: r06, title: "La force d'une tradition vivante", desc: "Des recettes transmises de génération en génération, préparées dans le respect de l'authenticité.\n" },
  { src: r07, title: "Quand le raffinement prend place", desc: "Une mise en scène soignée où chaque détail contribue à l'élégance de l'ensemble." },
  { src: r08, title: "L'intimité d'un moment unique", desc: "Une ambiance discrète et chaleureuse, pensée pour que chaque invité se sente privilégié." },
  { src: r09, title: "36 ans à mettre du cœur dans chaque service", desc: "Une expérience forgée dans la passion, au fil de milliers de tablées heureuses." },
  { src: r10, title: "Les instants qui restent", desc: "Une cuisine pensée pour créer du lien, bien après que les assiettes sont vidées." },
  { src: r11, title: "Votre histoire, servie à table", desc: "Un menu façonné autour de ce qui vous ressemble, pour un jour qui ne ressemble qu'à vous." },
  { src: r12, title: "L'héritage d'une cuisine vivante", desc: "Des saveurs ancrées dans la mémoire, portées par des mains qui en connaissent chaque secret." },
  { src: r13, title: "La générosité comme art de vivre", desc: "​Une table pensée dans ses moindres détails, où l'abondance rime avec tenue et élégance." },
  { src: r14, title: "On ne confie pas ça à n'importe qui", desc: "Chaque prestation est préparée avec rigueur et sincérité  la qualité ne s'improvise pas, elle se construit." },
  { src: r15, title: "La rigueur au service de l'élégance", desc: "Chaque assiette portée avec la précision d'un professionnel qui ne laisse rien au hasard." },
  { src: r16, title: "Une fête pour les yeux et pour l'âme", desc: "Un buffet généreux qui fait tourner les têtes dès l'entrée et régale jusqu'au bout." },
  { src: r17, title: "Mille détails, zéro fausse note", desc: "Un service orchestré avec soin, où chaque élément trouve sa place avant même que les invités arrivent." },
  { src: r18, title: "La beauté du geste bien fait", desc: "Une cuisine portée par l'exigence du fait maison, où la qualité se voit avant même de se goûter." },
  { src: r19, title: "Autour de la table, la famille entière", desc: "Des moments de chaleur partagés, où la cuisine devient le cœur battant de la fête." },
  { src: r20, title: "Quand le beau se mange aussi", desc: "Des créations travaillées avec soin, où le geste du dressage élève chaque service au rang d'œuvre." },
  { src: r21, title: "Un jour qui mérite le meilleur", desc: "Une attention portée à chaque convive, pour que le souvenir reste longtemps après le dernier verre." },
  { src: r22, title: "L'élégance dans l'abondance", desc: "Un buffet pensé pour impressionner dès le regard et séduire à chaque bouchée." },
  { src: r23, title: "Ce qui se transmet ne se perd jamais", desc: "Une cuisine ancrée dans le temps, portée par 36 ans d'exigence et de fidélité aux origines." },
  { src: r24, title: "Les racines ont un goût incomparable", desc: "Des recettes qui traversent les générations, préparées avec le respect de ceux qui les ont inventées." },
  { src: r25, title: "Là où chaque bouchée raconte une histoire", desc: "Des saveurs venues de loin, préparées avec la fierté de ceux qui les portent depuis toujours." },
  { src: r26, title: "Vous n'avez qu'à profiter", desc: "Du premier appel jusqu'au dernier invité servi, tout est pris en charge avec soin et précision." },
  { src: r27, title: "Ce dont on parle encore le lendemain", desc: "Une prestation qui laisse une impression durable, bien après que les lumières se sont éteintes." },
  { src: r28, title: "Quand l'exigence devient évidence", desc: "Un niveau de soin et de présentation pensé pour ceux qui ne veulent faire aucune concession." },
  { src: r29, title: "Plus de 100 fois, ils ont fait confiance", desc: "Un savoir-faire reconnu, plébiscité par des centaines de clients qui reviennent et recommandent." },
  { src: r30, title: "Rien de standard, tout sur mesure", desc: "​Chaque événement est pensé depuis le début comme s'il n'en existait aucun autre." },
];

const reviews = [
  {
    name: "JF Faniel",
    event: "​",
    text: "Beaucoup de choix venant de différentes cultures culinaires, le tout de qualité. De passage sur Avignon je n'ai fais que d'y retourner tellement il y a de choses à découvrir et à déguster",
  },
  {
    name: "\u200B\n\n\nAlexis Midol-Monnet",
    event: "​",
    text: "Excellents produits et de l'originalité par rapport aux \"libanais\" classiques, service très rapide et bonne humeur !\n\nL'indispensable pour une pause rapide en été à Avignon sans se ruiner.",
  },
  {
    name: "\u200BEmilie Menard",
    event: "​",
    text: "​Depuis qq temps je viens me régaler chez Garip! Un bonheur pour les papilles, il y a beaucoup de choix de plats  végétariens ou carnés, à emporter ou sur place. ",
  },
  {
    name: "​Maryl Renaud",
    event: "​",
    text: "Clients depuis quelques années déjà, c’est toujours un plaisir des yeux et des papilles qui nous attend. Nous n’avons jamais été déçus par un plat et l’accueil est au top. Continuez à nous régaler.",
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
          src={heroImg.url}
          alt="Image principale Traiteur Garip"
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
              { name: "Préfecture de Vaucluse", sub: "Bâtiment administratif public" },
              { name: "Palais des Papes", sub: "Monument historique" },
              { name: "Parc des Expositions", sub: "événementiel et salle de congrès et d'exposition" },
              { name: "Opéra Grand Avignon", sub: "Lieu culturel public" },
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

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
import dishCouscous from "@/assets/dish-couscous-royal.jpg";
import dishGrilladesMedit from "@/assets/dish-grillades-medit.jpg";
import dishSaladeGrecque from "@/assets/dish-salade-grecque.jpg";
import dishCalamars from "@/assets/dish-calamars.jpg";
import dishAubergines from "@/assets/dish-aubergines.jpg";
import dishDorade from "@/assets/dish-dorade.jpg";
import dishPaella from "@/assets/dish-paella.jpg";
import dishCrevettes from "@/assets/dish-crevettes.jpg";
import dishIskender from "@/assets/dish-iskender.jpg";
import dishLahmacun from "@/assets/dish-lahmacun.jpg";
import dishKofte from "@/assets/dish-kofte.jpg";
import dishDoner from "@/assets/dish-doner.jpg";
import dishBorek from "@/assets/dish-borek.jpg";
import dishBaklava from "@/assets/dish-baklava.jpg";
import dishKunefe from "@/assets/dish-kunefe.jpg";
import dishGozleme from "@/assets/dish-gozleme.jpg";
import dishHoumous from "@/assets/dish-houmous.jpg";
import dishTaboule from "@/assets/dish-taboule.jpg";
import dishFalafels from "@/assets/dish-falafels.jpg";
import dishFattouche from "@/assets/dish-fattouche.jpg";
import dishKebbe from "@/assets/dish-kebbe.jpg";
import dishChichTaouk from "@/assets/dish-chich-taouk.jpg";
import dishManakish from "@/assets/dish-manakish.jpg";
import dishSambousek from "@/assets/dish-sambousek.jpg";
import dishGyros from "@/assets/dish-gyros.jpg";
import dishDolmadakia from "@/assets/dish-dolmadakia.jpg";
import dishTzatziki from "@/assets/dish-tzatziki.jpg";
import dishSpanakopita from "@/assets/dish-spanakopita.jpg";
import dishPastitsio from "@/assets/dish-pastitsio.jpg";
import dishKeftedes from "@/assets/dish-keftedes.jpg";
import dishLoukoumades from "@/assets/dish-loukoumades.jpg";
import dishPitaGrecque from "@/assets/dish-pita-grecque.jpg";
import dishDolmaArm from "@/assets/dish-dolma-arm.jpg";
import dishManti from "@/assets/dish-manti.jpg";
import dishBasturma from "@/assets/dish-basturma.jpg";
import dishGata from "@/assets/dish-gata.jpg";
import dishKufta from "@/assets/dish-kufta.jpg";
import dishTolma from "@/assets/dish-tolma.jpg";
import dishMatnakash from "@/assets/dish-matnakash.jpg";
import dishNazook from "@/assets/dish-nazook.jpg";

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
  dishes: string[];
};

const menus: Menu[] = [
  {
    cuisine: "Cuisine Méditerranéenne",
    subtitle: "Le soleil dans l'assiette",
    origin: "Côtes de la Méditerranée",
    dishes: [
      "Plateau de mezze",
      "Couscous royal",
      "Fruits de mer méditerranéens",
      "Grillades méditerranéennes",
      "Salade grecque",
      "Calamars grillés",
      "Poivrons farcis",
      "Aubergines grillées",
      "Riz méditerranéen",
      "Brochettes de poulet",
      "Tajine méditerranéen",
      "Dorade grillée",
      "Salade feta",
      "Ratatouille",
      "Poulpe grillé",
      "Pâtes aux fruits de mer",
      "Paëlla méditerranéenne",
      "Crevettes grillées",
      "Bruschetta",
      "Pâtisseries orientales",
    ],
  },
  {
    cuisine: "Cuisine Turque",
    subtitle: "Anatolie & Bosphore",
    origin: "Istanbul · Gaziantep",
    dishes: [
      "İskender Kebab",
      "Adana Kebab",
      "Pide",
      "Lahmacun",
      "Köfte",
      "Döner Kebab",
      "Börek",
      "Baklava",
      "Menemen",
      "Simit",
      "Gözleme",
      "Tavuk Şiş",
      "Çiğ Köfte",
      "Kumpir",
      "Mercimek Çorbası",
      "Imam Bayıldı",
      "Kuzu Tandır",
      "Künefe",
      "Sarma",
      "Riz pilaf turc",
    ],
  },
  {
    cuisine: "Cuisine Libanaise",
    subtitle: "Mezze & convivialité",
    origin: "Beyrouth · Tripoli",
    dishes: [
      "Houmous",
      "Taboulé",
      "Falafels",
      "Shawarma",
      "Mezze libanais",
      "Fattouche",
      "Kebbé",
      "Manakish",
      "Kafta",
      "Sambousek",
      "Feuilles de vigne farcies",
      "Chich Taouk",
      "Moutabal",
      "Riz libanais",
      "Labneh",
      "Batata Harra",
      "Makdous",
      "Baklava libanais",
      "Sayadieh",
      "Mouhallabieh",
    ],
  },
  {
    cuisine: "Cuisine Grecque",
    subtitle: "Égée & Cyclades",
    origin: "Athènes · Crète",
    dishes: [
      "Moussaka",
      "Gyros",
      "Souvlaki",
      "Dolmadakia",
      "Tzatziki",
      "Spanakopita",
      "Salade grecque",
      "Feta grillée",
      "Calamars frits",
      "Pastitsio",
      "Keftedes",
      "Briam",
      "Tiropita",
      "Loukoumades",
      "Poulpe grillé",
      "Dakos",
      "Fasolada",
      "Riz citronné grec",
      "Baklava grec",
      "Pita grecque",
    ],
  },
  {
    cuisine: "Cuisine Arménienne",
    subtitle: "Tradition millénaire",
    origin: "Erevan · Caucase",
    dishes: [
      "Lavash",
      "Dolma arménien",
      "Manti arménien",
      "Grillades arméniennes",
      "Harissa arménienne",
      "Khorovats",
      "Basturma",
      "Sou beureg",
      "Pakhlava arménienne",
      "Gata",
      "Kufta arménien",
      "Spas",
      "Jingalov hats",
      "Tolma",
      "Brochettes arméniennes",
      "Riz pilaf arménien",
      "Ghapama",
      "Eetch",
      "Matnakash",
      "Nazook",
    ],
  },
];

type Specialty = { src: string; title: string; cuisine: string; desc: string };

const specialties: Specialty[] = [
  // Méditerranéenne
  { src: photoPlateauMedit, title: "Plateau de mezze", cuisine: "Méditerranéenne", desc: "Assortiment généreux de petites entrées chaudes et froides à partager." },
  { src: dishCouscous, title: "Couscous royal", cuisine: "Méditerranéenne", desc: "Semoule fine, légumes mijotés et viandes grillées, bouillon parfumé." },
  { src: photoFruitsMer, title: "Fruits de mer méditerranéens", cuisine: "Méditerranéenne", desc: "Sélection iodée du jour, citron, huile d'olive et herbes fraîches." },
  { src: dishGrilladesMedit, title: "Grillades méditerranéennes", cuisine: "Méditerranéenne", desc: "Brochettes et viandes marinées aux herbes du soleil, cuites à la flamme." },
  { src: dishSaladeGrecque, title: "Salade grecque", cuisine: "Méditerranéenne", desc: "Feta, olives kalamata, tomates juteuses et huile d'olive vierge." },
  { src: dishCalamars, title: "Calamars grillés", cuisine: "Méditerranéenne", desc: "Calamars tendres au citron et persil, juste saisis à la plancha." },
  { src: dishAubergines, title: "Aubergines grillées", cuisine: "Méditerranéenne", desc: "Fines tranches fondantes, yaourt, grenade et menthe fraîche." },
  { src: dishDorade, title: "Dorade grillée", cuisine: "Méditerranéenne", desc: "Dorade royale entière, peau croustillante, citron et herbes." },
  { src: dishPaella, title: "Paëlla méditerranéenne", cuisine: "Méditerranéenne", desc: "Riz safrané, fruits de mer généreux, cuisson lente en grande poêle." },
  { src: dishCrevettes, title: "Crevettes grillées", cuisine: "Méditerranéenne", desc: "Crevettes royales à l'ail et persil, juste grillées et citronnées." },
  // Turque
  { src: dishIskender, title: "İskender Kebab", cuisine: "Turque", desc: "Fines tranches de viande sur pide, sauce tomate, yaourt et beurre fondu." },
  { src: photoKebabs, title: "Adana Kebab", cuisine: "Turque", desc: "Brochette de viande hachée épicée, grillée au charbon de bois." },
  { src: photoPide, title: "Pide", cuisine: "Turque", desc: "Pain en forme de barque garni, cuit au four à pierre." },
  { src: dishLahmacun, title: "Lahmacun", cuisine: "Turque", desc: "Galette fine à la viande hachée épicée, persil et citron." },
  { src: dishKofte, title: "Köfte", cuisine: "Turque", desc: "Boulettes de viande aux épices, grillées et servies avec riz pilaf." },
  { src: dishDoner, title: "Döner Kebab", cuisine: "Turque", desc: "Viande marinée cuite en broche verticale, fines tranches dorées." },
  { src: dishBorek, title: "Börek", cuisine: "Turque", desc: "Feuilleté croustillant au fromage et herbes, doré au four." },
  { src: dishBaklava, title: "Baklava", cuisine: "Turque", desc: "Pâte filo, pistaches, miel et sirop parfumé à la fleur d'oranger." },
  { src: dishKunefe, title: "Künefe", cuisine: "Turque", desc: "Kadayif croustillant, fromage fondant, sirop chaud et pistaches." },
  { src: dishGozleme, title: "Gözleme", cuisine: "Turque", desc: "Galette fine pliée et garnie, cuite à la plaque chaude." },
  // Libanaise
  { src: dishHoumous, title: "Houmous", cuisine: "Libanaise", desc: "Purée onctueuse de pois chiches au tahini, huile d'olive et paprika." },
  { src: dishTaboule, title: "Taboulé", cuisine: "Libanaise", desc: "Persil frais, boulgour fin, tomates, menthe et citron." },
  { src: dishFalafels, title: "Falafels", cuisine: "Libanaise", desc: "Boulettes dorées de pois chiches aux herbes, sauce tahini." },
  { src: photoShawarma, title: "Shawarma", cuisine: "Libanaise", desc: "Viande marinée tranchée à la broche, sauce blanche et crudités." },
  { src: photoMezzeLiban, title: "Mezze libanais", cuisine: "Libanaise", desc: "Sélection traditionnelle d'entrées froides à partager." },
  { src: dishFattouche, title: "Fattouche", cuisine: "Libanaise", desc: "Salade croquante au pain pita grillé, sumac et mélasse de grenade." },
  { src: dishKebbe, title: "Kebbé", cuisine: "Libanaise", desc: "Boulettes de boulgour farcies à la viande, dorées et croustillantes." },
  { src: dishChichTaouk, title: "Chich Taouk", cuisine: "Libanaise", desc: "Brochettes de poulet mariné, riz parfumé et sauce à l'ail." },
  { src: dishManakish, title: "Manakish", cuisine: "Libanaise", desc: "Pain plat au zaatar et huile d'olive, cuit au four traditionnel." },
  { src: dishSambousek, title: "Sambousek", cuisine: "Libanaise", desc: "Chaussons feuilletés dorés farcis viande ou fromage." },
  // Grecque
  { src: photoMoussaka, title: "Moussaka", cuisine: "Grecque", desc: "Aubergines, viande hachée et béchamel gratinée au four." },
  { src: dishGyros, title: "Gyros", cuisine: "Grecque", desc: "Viande grillée, pita moelleuse, tzatziki, tomate et oignon rouge." },
  { src: photoSouvlaki, title: "Souvlaki", cuisine: "Grecque", desc: "Brochettes de viande marinée grillées sur braise." },
  { src: dishDolmadakia, title: "Dolmadakia", cuisine: "Grecque", desc: "Feuilles de vigne farcies au riz et herbes, citron." },
  { src: dishTzatziki, title: "Tzatziki", cuisine: "Grecque", desc: "Yaourt frais, concombre râpé, ail et menthe." },
  { src: dishSpanakopita, title: "Spanakopita", cuisine: "Grecque", desc: "Feuilleté doré aux épinards et feta, croustillant à souhait." },
  { src: dishPastitsio, title: "Pastitsio", cuisine: "Grecque", desc: "Pâtes longues, viande hachée et béchamel parfumée gratinée." },
  { src: dishKeftedes, title: "Keftedes", cuisine: "Grecque", desc: "Boulettes de viande aux herbes méditerranéennes et sauce tomate." },
  { src: dishLoukoumades, title: "Loukoumades", cuisine: "Grecque", desc: "Beignets dorés au miel, cannelle et noix concassées." },
  { src: dishPitaGrecque, title: "Pita grecque", cuisine: "Grecque", desc: "Pain moelleux fraîchement cuit, parfait à partager." },
  // Arménienne
  { src: photoLavash, title: "Lavash", cuisine: "Arménienne", desc: "Pain fin traditionnel cuit au tonir, inscrit à l'UNESCO." },
  { src: dishDolmaArm, title: "Dolma arménien", cuisine: "Arménienne", desc: "Légumes et feuilles de vigne farcis au riz et viande." },
  { src: dishManti, title: "Manti arménien", cuisine: "Arménienne", desc: "Petits raviolis à la viande, yaourt à l'ail et beurre épicé." },
  { src: photoGrilladesArm, title: "Khorovats", cuisine: "Arménienne", desc: "Grillades traditionnelles cuites lentement sur braises de bois." },
  { src: dishBasturma, title: "Basturma", cuisine: "Arménienne", desc: "Viande de bœuf séchée enrobée d'épices, finement tranchée." },
  { src: dishGata, title: "Gata", cuisine: "Arménienne", desc: "Pâtisserie briochée dorée, cœur sucré aux notes de beurre." },
  { src: dishKufta, title: "Kufta arménien", cuisine: "Arménienne", desc: "Boulettes de viande fines aux épices douces, riz pilaf." },
  { src: dishTolma, title: "Tolma", cuisine: "Arménienne", desc: "Légumes farcis (poivrons, tomates, aubergines) au riz et viande." },
  { src: dishMatnakash, title: "Matnakash", cuisine: "Arménienne", desc: "Pain moelleux traditionnel aux motifs gravés à la main." },
  { src: dishNazook, title: "Nazook", cuisine: "Arménienne", desc: "Feuilleté sucré aux noix et beurre, parfumé à la cardamome." },
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

                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {m.dishes.map((d) => (
                      <li
                        key={d}
                        className="flex items-baseline gap-3 py-1 group/dish hover:text-primary transition-colors"
                      >
                        <span className="font-display text-[15px] md:text-base text-foreground group-hover/dish:text-primary transition-colors whitespace-nowrap">
                          {d}
                        </span>
                        <span className="flex-1 border-b border-dotted border-border/60 translate-y-[-4px]" />
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
          Galerie des spécialités
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
  const current = active !== null ? specialties[active] : null;

  const close = () => setActive(null);
  const prev = () => setActive((a) => (a === null ? null : (a - 1 + specialties.length) % specialties.length));
  const next = () => setActive((a) => (a === null ? null : (a + 1) % specialties.length));

  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <div className="max-w-3xl mb-14 md:mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Galerie des spécialités</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground text-balance leading-tight">
              50 spécialités,<br /><em className="not-italic text-primary">en images</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dix plats incontournables pour chacune de nos cinq cuisines.
              Cliquez sur une photo pour la découvrir en grand format.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {specialties.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 80}>
              <article className="group bg-background border border-border overflow-hidden flex flex-col h-full shadow-elegant hover:shadow-2xl transition-smooth">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="relative block w-full overflow-hidden bg-noir aspect-[4/5] focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={`Agrandir : ${p.title}`}
                >
                  <img
                    src={p.src}
                    alt={`${p.title} — cuisine ${p.cuisine}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="flex items-center gap-2 bg-background/95 text-foreground px-5 py-3 text-[10px] tracking-[0.3em] uppercase">
                      <ZoomIn size={14} /> Agrandir
                    </span>
                  </div>
                </button>
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-primary mb-2">
                    Cuisine {p.cuisine}
                  </p>
                  <h3 className="font-display text-2xl md:text-[28px] leading-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
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
              alt={`${current.title} — cuisine ${current.cuisine}`}
              className="w-full h-auto max-h-[80vh] object-contain shadow-2xl"
            />
            <figcaption className="mt-5 text-center max-w-2xl mx-auto">
              <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2">
                Cuisine {current.cuisine}
              </p>
              <p className="font-display text-2xl md:text-3xl text-primary-foreground">
                {current.title}
              </p>
              <p className="mt-3 text-primary-foreground/75 text-sm md:text-base leading-relaxed">
                {current.desc}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
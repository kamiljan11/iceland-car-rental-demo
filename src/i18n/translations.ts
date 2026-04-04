export type Lang = "en" | "pl" | "is";

export const translations = {
  nav: {
    fleet: { en: "Fleet", pl: "Flota", is: "Bílafloti" },
    routes: { en: "Routes", pl: "Trasy", is: "Leiðir" },
    pricing: { en: "Pricing", pl: "Cennik", is: "Verðskrá" },
    contact: { en: "Contact", pl: "Kontakt", is: "Hafðu samband" },
    book: { en: "Book now", pl: "Rezerwuj", is: "Bóka" },
  },
  hero: {
    subtitle: {
      en: "Car rental · Iceland",
      pl: "Wypożyczalnia samochodów · Islandia",
      is: "Bílaleiga · Ísland",
    },
    title1: {
      en: "Discover Iceland",
      pl: "Odkryj Islandię",
      is: "Uppgötvaðu Ísland",
    },
    title2: {
      en: "without limits",
      pl: "bez granic",
      is: "án takmarkana",
    },
    desc: {
      en: "Reliable SUVs, camper vans and compact cars ready for any Icelandic adventure — from the Ring Road to hidden valleys.",
      pl: "Niezawodne SUV-y, kampery i auta kompaktowe gotowe na każdą islandzką przygodę — od Ring Road po ukryte doliny.",
      is: "Áreiðanlegir jeppar, húsbílar og smábílar tilbúnir í hvaða ævintýri sem er á Íslandi — frá Hringveginum að duldum dölum.",
    },
    cta1: { en: "Book now", pl: "Zarezerwuj teraz", is: "Bókaðu núna" },
    cta2: { en: "View fleet", pl: "Zobacz flotę", is: "Sjá bílaflota" },
  },
  fleet: {
    label: { en: "Our fleet", pl: "Nasza flota", is: "Bílaflotinn okkar" },
    title: {
      en: "Vehicles for every terrain",
      pl: "Pojazdy na każdy teren",
      is: "Ökutæki fyrir hvert landslag",
    },
    desc: {
      en: "Every car is prepared for Icelandic conditions — winter tyres, GPS, insurance and a full starter pack.",
      pl: "Każdy samochód jest przygotowany na islandzkie warunki — opony zimowe, GPS, ubezpieczenie i pełny pakiet startowy.",
      is: "Hver bíll er útbúinn fyrir íslenskar aðstæður — vetrardekk, GPS, trygging og fullt byrjunarpakka.",
    },
    details: { en: "Details →", pl: "Szczegóły →", is: "Nánar →" },
  },
  vehicles: {
    suv: {
      name: { en: "SUV 4×4", pl: "SUV 4×4", is: "SUV 4×4" },
      subtitle: { en: "Land Cruiser / Defender", pl: "Land Cruiser / Defender", is: "Land Cruiser / Defender" },
      price: { en: "from 89€ / day", pl: "od 89€ / dzień", is: "frá 89€ / dag" },
      features: {
        en: ["5 persons", "Diesel 4WD", "F-Road ready"],
        pl: ["5 osób", "Diesel 4WD", "F-Road ready"],
        is: ["5 manns", "Dísel 4WD", "F-vegir tilbúinn"],
      },
      tag: { en: "Most popular", pl: "Najpopularniejszy", is: "Vinsælastur" },
    },
    camper: {
      name: { en: "Camper Van", pl: "Kamper Van", is: "Húsbíll" },
      subtitle: { en: "VW California / similar", pl: "VW California / podobne", is: "VW California / svipaður" },
      price: { en: "from 119€ / day", pl: "od 119€ / dzień", is: "frá 119€ / dag" },
      features: {
        en: ["2-4 persons", "Kitchen", "Roof bed"],
        pl: ["2-4 osób", "Kuchnia", "Łóżko na dachu"],
        is: ["2-4 manns", "Eldhús", "Þakrúm"],
      },
      tag: { en: "For travellers", pl: "Dla podróżników", is: "Fyrir ferðalanga" },
    },
    compact: {
      name: { en: "Compact SUV", pl: "Compact SUV", is: "Smá-SUV" },
      subtitle: { en: "Duster / Tucson", pl: "Duster / Tucson", is: "Duster / Tucson" },
      price: { en: "from 49€ / day", pl: "od 49€ / dzień", is: "frá 49€ / dag" },
      features: {
        en: ["5 persons", "Economical", "Easy to drive"],
        pl: ["5 osób", "Ekonomiczny", "Łatwy w prowadzeniu"],
        is: ["5 manns", "Sparneytinn", "Auðvelt að aka"],
      },
      tag: { en: "Best budget", pl: "Najlepszy budżet", is: "Besti kostnaður" },
    },
  },
  features: {
    label: { en: "Why us", pl: "Dlaczego my", is: "Af hverju við" },
    title: {
      en: "Everything you need",
      pl: "Wszystko, czego potrzebujesz",
      is: "Allt sem þú þarft",
    },
    desc: {
      en: "We focus so you can focus on Iceland.",
      pl: "Skupiamy się na tym, żebyś mógł skupić się na Islandii.",
      is: "Við sjáum um hlutina svo þú getir einbeitt þér að Íslandi.",
    },
    items: [
      {
        title: { en: "Full insurance", pl: "Pełne ubezpieczenie", is: "Full trygging" },
        desc: {
          en: "CDW, SCDW, gravel protection and sand insurance included.",
          pl: "CDW, SCDW, gravel protection i ubezpieczenie piaskowe w cenie.",
          is: "CDW, SCDW, malarvörn og sandtrygging innifalin.",
        },
      },
      {
        title: { en: "KEF airport pickup", pl: "Odbiór z lotniska KEF", is: "Sótt á KEF flugvöll" },
        desc: {
          en: "Free transfer from Keflavík International Airport 24/7.",
          pl: "Darmowy transfer z Keflavík International Airport 24/7.",
          is: "Ókeypis flutningur frá Keflavík alþjóðaflugvelli 24/7.",
        },
      },
      {
        title: { en: "Winter tyres", pl: "Opony zimowe", is: "Vetrardekk" },
        desc: {
          en: "Studded tyres in winter season, all-season in summer.",
          pl: "Studded tyres w sezonie zimowym, all-season latem.",
          is: "Nagladekkjum á veturna, heilsársdekk á sumrin.",
        },
      },
      {
        title: { en: "Flexible bookings", pl: "Elastyczne rezerwacje", is: "Sveigjanleg bókun" },
        desc: {
          en: "Free cancellation up to 48h before pickup.",
          pl: "Darmowe anulowanie do 48h przed odbiorem.",
          is: "Ókeypis afbókun allt að 48 klst. fyrir afhendingu.",
        },
      },
      {
        title: { en: "24/7 support", pl: "Wsparcie 24/7", is: "Aðstoð 24/7" },
        desc: {
          en: "Roadside assistance and phone support across the island.",
          pl: "Pomoc drogowa i wsparcie telefoniczne na całej wyspie.",
          is: "Vegaþjónusta og símaþjónusta um alla eyjuna.",
        },
      },
      {
        title: { en: "No hidden fees", pl: "Bez ukrytych kosztów", is: "Engin falinn kostnaður" },
        desc: {
          en: "Transparent pricing. No surprises at pickup.",
          pl: "Przejrzyste ceny. Bez niespodzianek przy odbiorze.",
          is: "Gagnsæ verðlagning. Engar óvæntar gjaldskrár.",
        },
      },
    ],
  },
  cta: {
    title1: { en: "Want something", pl: "Chcesz coś", is: "Viltu eitthvað" },
    title2: { en: "like this for yourself?", pl: "takiego dla siebie?", is: "svona fyrir þig?" },
    desc: {
      en: "We create complete booking websites, fleet systems and branding for car rental companies. Get in touch — we'll build it together.",
      pl: "Tworzymy kompletne strony rezerwacyjne, systemy flotowe i branding dla wypożyczalni samochodów. Skontaktuj się z nami — zbudujemy to razem.",
      is: "Við búum til fullkomnar bókunarsíður, bílaflotakerfi og vörumerki fyrir bílaleigur. Hafðu samband — við byggjum þetta saman.",
    },
    cta1: { en: "Order your site", pl: "Zamów swoją stronę", is: "Pantaðu síðuna þína" },
    cta2: { en: "See more demos", pl: "Zobacz więcej demo", is: "Sjá fleiri sýnidæmi" },
  },
  footer: {
    desc: {
      en: "Car rental demo site · Created by your team",
      pl: "Demo strony wypożyczalni · Stworzone przez Twój zespół",
      is: "Sýnisíða bílaleigu · Búin til af teyminu þínu",
    },
  },
} as const;

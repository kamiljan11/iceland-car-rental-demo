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
    title1: { en: "Discover Iceland", pl: "Odkryj Islandię", is: "Uppgötvaðu Ísland" },
    title2: { en: "without limits", pl: "bez granic", is: "án takmarkana" },
    desc: {
      en: "Reliable SUVs, camper vans and compact cars ready for any Icelandic adventure — from the Ring Road to hidden valleys.",
      pl: "Niezawodne SUV-y, kampery i auta kompaktowe gotowe na każdą islandzką przygodę — od Ring Road po ukryte doliny.",
      is: "Áreiðanlegir jeppar, húsbílar og smábílar tilbúnir í hvaða ævintýri sem er á Íslandi — frá Hringveginum að duldum dölum.",
    },
    cta1: { en: "Book now", pl: "Zarezerwuj teraz", is: "Bókaðu núna" },
    cta2: { en: "View fleet", pl: "Zobacz flotę", is: "Sjá bílaflota" },
  },
  stats: {
    years: { en: "Years in Iceland", pl: "Lat na Islandii", is: "Ár á Íslandi" },
    vehicles: { en: "Vehicles ready", pl: "Pojazdów gotowych", is: "Bílar tilbúnir" },
    customers: { en: "Happy travelers", pl: "Zadowolonych podróżnych", is: "Ánægðir ferðamenn" },
    rating: { en: "Google rating", pl: "Ocena Google", is: "Google einkunn" },
  },
  fleet: {
    label: { en: "Our fleet", pl: "Nasza flota", is: "Bílaflotinn okkar" },
    title: { en: "Vehicles for every terrain", pl: "Pojazdy na każdy teren", is: "Ökutæki fyrir hvert landslag" },
    desc: {
      en: "Every car is prepared for Icelandic conditions — winter tyres, GPS, insurance and a full starter pack.",
      pl: "Każdy samochód jest przygotowany na islandzkie warunki — opony zimowe, GPS, ubezpieczenie i pełny pakiet startowy.",
      is: "Hver bíll er útbúinn fyrir íslenskar aðstæður — vetrardekk, GPS, trygging og fullt byrjunarpakka.",
    },
    details: { en: "Details →", pl: "Szczegóły →", is: "Nánar →" },
    bestFor: { en: "Best for:", pl: "Najlepszy na:", is: "Best fyrir:" },
  },
  vehicles: {
    suv: {
      name: { en: "Land Cruiser 4×4", pl: "Land Cruiser 4×4", is: "Land Cruiser 4×4" },
      subtitle: { en: "Conquer highlands & F-roads", pl: "Podbij wyżyny i drogi F", is: "Sigra hálendi og F-vegi" },
      tag: { en: "Most popular", pl: "Najpopularniejszy", is: "Vinsælastur" },
      features: {
        en: ["5 seats", "Diesel", "4WD"],
        pl: ["5 miejsc", "Diesel", "4WD"],
        is: ["5 sæti", "Dísel", "4WD"],
      },
      price: { en: "from €89/day", pl: "od 89€/dzień", is: "frá 89€/dag" },
      bestFor: { en: "Highlands, F-roads, winter", pl: "Wyżyny, drogi F, zima", is: "Hálendi, F-vegir, vetur" },
    },
    camper: {
      name: { en: "Explorer Camper", pl: "Explorer Camper", is: "Explorer Camper" },
      subtitle: { en: "Your rolling basecamp", pl: "Twoja baza na kółkach", is: "Hreyfanlegur búðastaður" },
      tag: { en: "Adventure", pl: "Przygoda", is: "Ævintýri" },
      features: {
        en: ["2 berths", "Kitchen", "Heating"],
        pl: ["2 łóżka", "Kuchnia", "Ogrzewanie"],
        is: ["2 koja", "Eldhús", "Hiti"],
      },
      price: { en: "from €129/day", pl: "od 129€/dzień", is: "frá 129€/dag" },
      bestFor: { en: "Ring Road, camping, freedom", pl: "Ring Road, camping, wolność", is: "Hringvegur, tjaldsvæði, frelsi" },
    },
    compact: {
      name: { en: "City Smart", pl: "City Smart", is: "City Smart" },
      subtitle: { en: "Perfect for paved roads", pl: "Idealny na asfalt", is: "Fullkominn á malbikaða vegi" },
      tag: { en: "Economy", pl: "Ekonomiczny", is: "Sparneytinn" },
      features: {
        en: ["4 seats", "Petrol", "Auto"],
        pl: ["4 miejsca", "Benzyna", "Automat"],
        is: ["4 sæti", "Bensín", "Sjálfskiptur"],
      },
      price: { en: "from €39/day", pl: "od 39€/dzień", is: "frá 39€/dag" },
      bestFor: { en: "Golden Circle, city trips", pl: "Golden Circle, miasto", is: "Gullni hringurinn, borgarferðir" },
    },
  },
  routes: {
    label: { en: "Popular routes", pl: "Popularne trasy", is: "Vinsælar leiðir" },
    title: { en: "Plan your adventure", pl: "Zaplanuj swoją przygodę", is: "Skipuleggðu ævintýrið þitt" },
    desc: {
      en: "Iceland's most iconic driving routes — each one unforgettable. We'll recommend the perfect vehicle.",
      pl: "Najbardziej kultowe trasy Islandii — każda niezapomniana. Doradzimy idealny pojazd.",
      is: "Heimsþekktustu akstursleiðir Íslands — allar ógleymanlegar. Við mælum með réttu ökutæki.",
    },
    items: [
      {
        name: { en: "Ring Road", pl: "Ring Road", is: "Hringvegurinn" },
        duration: { en: "7–10 days", pl: "7–10 dni", is: "7–10 dagar" },
        distance: { en: "1,322 km", pl: "1 322 km", is: "1.322 km" },
        difficulty: { en: "Easy – Moderate", pl: "Łatwa – Umiarkowana", is: "Auðveld – Miðlungs" },
        desc: {
          en: "The ultimate Icelandic road trip circling the entire island. Waterfalls, glaciers, fishing villages, and volcanic deserts.",
          pl: "Absolutny klasyk — objazd całej wyspy. Wodospady, lodowce, wioski rybackie i wulkaniczne pustynie.",
          is: "Fullkomin vegferð um alla eyjuna. Fossar, jöklar, sjávarbæir og eldfjallaeyðimerkur.",
        },
        vehicle: { en: "Any vehicle", pl: "Dowolny pojazd", is: "Hvaða bíll sem er" },
      },
      {
        name: { en: "Golden Circle", pl: "Złoty Krąg", is: "Gullni hringurinn" },
        duration: { en: "1 day", pl: "1 dzień", is: "1 dagur" },
        distance: { en: "230 km", pl: "230 km", is: "230 km" },
        difficulty: { en: "Easy", pl: "Łatwa", is: "Auðveld" },
        desc: {
          en: "Þingvellir, Geysir and Gullfoss in one loop. Iceland's most popular day trip — stunning and accessible.",
          pl: "Þingvellir, Geysir i Gullfoss w jednej pętli. Najpopularniejsza jednodniowa wycieczka Islandii.",
          is: "Þingvellir, Geysir og Gullfoss í einni lykkju. Vinsælasta dagsferð Íslands.",
        },
        vehicle: { en: "Any vehicle", pl: "Dowolny pojazd", is: "Hvaða bíll sem er" },
      },
      {
        name: { en: "Westfjords", pl: "Westfjordy", is: "Vestfirðir" },
        duration: { en: "4–5 days", pl: "4–5 dni", is: "4–5 dagar" },
        distance: { en: "950 km", pl: "950 km", is: "950 km" },
        difficulty: { en: "Challenging", pl: "Wymagająca", is: "Krefjandi" },
        desc: {
          en: "Remote cliffs, empty roads and raw untouched nature. The least visited region — and the most rewarding.",
          pl: "Odległe klify, puste drogi i surowa, nietknięta natura. Najmniej odwiedzany — i najbardziej satysfakcjonujący region.",
          is: "Afskekktir klettar, auðir vegir og hrá ósnortin náttúra. Minnst heimsótti landshlutinn — og mest gefandi.",
        },
        vehicle: { en: "SUV recommended", pl: "Zalecany SUV", is: "Jeppi mælt með" },
      },
      {
        name: { en: "Snæfellsnes", pl: "Snæfellsnes", is: "Snæfellsnes" },
        duration: { en: "2–3 days", pl: "2–3 dni", is: "2–3 dagar" },
        distance: { en: "400 km", pl: "400 km", is: "400 km" },
        difficulty: { en: "Easy", pl: "Łatwa", is: "Auðveld" },
        desc: {
          en: "\"Iceland in miniature\" — Kirkjufell, lava fields, black beaches and the mythical Snæfellsjökull glacier.",
          pl: "Islandia w miniaturze — Kirkjufell, pola lawowe, czarne plaże i mityczny lodowiec Snæfellsjökull.",
          is: "\"Ísland í smækkuðu formi\" — Kirkjufell, hraunbreiður, svartir strandir og goðsagnakenndur Snæfellsjökull.",
        },
        vehicle: { en: "Any vehicle", pl: "Dowolny pojazd", is: "Hvaða bíll sem er" },
      },
    ],
  },
  testimonials: {
    label: { en: "Traveler stories", pl: "Opinie podróżnych", is: "Sögur ferðamanna" },
    title: { en: "Trusted by adventurers", pl: "Zaufanie podróżników", is: "Traust ævintýrafólks" },
    items: [
      {
        name: "Sarah & Tom",
        country: { en: "United Kingdom", pl: "Wielka Brytania", is: "Bretland" },
        text: {
          en: "The Land Cruiser handled every F-road we threw at it. NordCar's team even called us to check on road conditions. Genuinely caring service.",
          pl: "Land Cruiser poradził sobie z każdą drogą F. Zespół NordCar nawet do nas dzwonił, żeby sprawdzić warunki drogowe. Naprawdę troskliwa obsługa.",
          is: "Land Cruiser réð auðveldlega við alla F-vegi. Teymi NordCar hringdi jafnvel í okkur til að athuga vegaaðstæður. Einlæg þjónusta.",
        },
        route: { en: "Ring Road · 10 days", pl: "Ring Road · 10 dni", is: "Hringvegur · 10 dagar" },
        rating: 5,
      },
      {
        name: "Michał K.",
        country: { en: "Poland", pl: "Polska", is: "Pólland" },
        text: {
          en: "Perfect camper van experience. Kitchen, heating, everything worked flawlessly. Waking up next to a glacier — priceless.",
          pl: "Perfekcyjny kamper. Kuchnia, ogrzewanie, wszystko działało bez zarzutu. Budzić się obok lodowca — bezcenne.",
          is: "Fullkomin reynsla af húsbíl. Eldhús, hiti, allt virkaði fullkomlega. Að vakna við jökul — ómetanlegt.",
        },
        route: { en: "South Coast · 5 days", pl: "Wybrzeże południowe · 5 dni", is: "Suðurströnd · 5 dagar" },
        rating: 5,
      },
      {
        name: "Yuki Tanaka",
        country: { en: "Japan", pl: "Japonia", is: "Japan" },
        text: {
          en: "Airport pickup was seamless. Car was warm, clean, and ready. GPS pre-loaded with our route. This is how car rental should be.",
          pl: "Odbiór z lotniska był bezproblemowy. Auto ciepłe, czyste i gotowe. GPS z załadowaną trasą. Tak powinna wyglądać każda wypożyczalnia.",
          is: "Afgreiðsla á flugvelli gekk vel. Bíllinn var heitur, hreinn og tilbúinn. GPS forhlaðinn með leiðinni okkar.",
        },
        route: { en: "Golden Circle · 1 day", pl: "Złoty Krąg · 1 dzień", is: "Gullni hringurinn · 1 dagur" },
        rating: 5,
      },
    ],
  },
  seasonal: {
    label: { en: "Seasonal guide", pl: "Przewodnik sezonowy", is: "Árstíðaleiðbeiningar" },
    title: { en: "When to visit?", pl: "Kiedy przyjechać?", is: "Hvenær á að heimsækja?" },
    summer: {
      title: { en: "Summer", pl: "Lato", is: "Sumar" },
      period: { en: "May – September", pl: "Maj – Wrzesień", is: "Maí – September" },
      points: {
        en: ["Midnight sun & 24h daylight", "All roads open incl. F-roads", "Highland access with 4×4", "Camping & camper van season", "Puffin watching season"],
        pl: ["Słońce o północy i 24h światła", "Wszystkie drogi otwarte, też F-roads", "Dostęp do wyżyn z 4×4", "Sezon na camping i kampery", "Sezon obserwacji maskonurów"],
        is: ["Miðnætursól og 24 klst. dagsljós", "Allir vegir opnir, þar með F-vegir", "Aðgangur að hálendinu með 4×4", "Tjaldstæða- og húsbílatímabil", "Lundatímabil"],
      },
    },
    winter: {
      title: { en: "Winter", pl: "Zima", is: "Vetur" },
      period: { en: "October – April", pl: "Październik – Kwiecień", is: "Október – Apríl" },
      points: {
        en: ["Northern lights season", "Ice caves & glacier hikes", "Studded winter tyres included", "Shorter days, dramatic light", "Hot springs in snow"],
        pl: ["Sezon zorzy polarnej", "Jaskinie lodowe i piesze wycieczki na lodowce", "Opony zimowe z kolcami w cenie", "Krótsze dni, dramatyczne światło", "Gorące źródła w śniegu"],
        is: ["Norðurljósatímabil", "Íshellar og jökulgengu", "Nagladekkjum innifalin", "Styttri dagar, dramatískt ljós", "Heitar laugar í snjó"],
      },
    },
  },
  faq: {
    label: { en: "FAQ", pl: "FAQ", is: "Algengar spurningar" },
    title: { en: "Common questions", pl: "Częste pytania", is: "Algengar spurningar" },
    items: [
      {
        q: {
          en: "Do I need a 4×4 in Iceland?",
          pl: "Czy potrzebuję 4×4 na Islandii?",
          is: "Þarf ég 4×4 á Íslandi?",
        },
        a: {
          en: "For Ring Road and Golden Circle, a compact car is fine. For F-roads, highlands, and winter driving, a 4×4 is required by law. We'll help you choose the right vehicle for your route.",
          pl: "Na Ring Road i Golden Circle wystarczy auto kompaktowe. Na drogi F, wyżyny i jazdę zimową 4×4 jest wymagane prawem. Pomożemy dobrać odpowiedni pojazd do Twojej trasy.",
          is: "Á Hringveg og Gullna hringinn dugar smábíll. Á F-vegi, hálendi og vetrarakstri er 4×4 krafist samkvæmt lögum. Við hjálpum þér að velja rétta ökutækið.",
        },
      },
      {
        q: {
          en: "What insurance is included?",
          pl: "Jakie ubezpieczenie jest w cenie?",
          is: "Hvaða trygging er innifalin?",
        },
        a: {
          en: "Every rental includes CDW (Collision Damage Waiver), SCDW (Super CDW), theft protection, gravel protection, and sand & ash insurance. Additional coverage is available.",
          pl: "Każdy wynajem obejmuje CDW, SCDW, ochronę przed kradzieżą, ochronę przed żwirem oraz ubezpieczenie od piasku i popiołu. Dostępne dodatkowe pokrycie.",
          is: "Sérhver leiga inniheldur CDW, SCDW, þjófnaðarvernd, malarvörn og sand- og öskutryggingu. Viðbótarvernd er í boði.",
        },
      },
      {
        q: {
          en: "Can I pick up at Keflavík Airport?",
          pl: "Czy mogę odebrać auto na lotnisku Keflavík?",
          is: "Get ég sótt bíl á Keflavíkurflugvelli?",
        },
        a: {
          en: "Yes! We offer free 24/7 airport pickup and drop-off at Keflavík International Airport. Our shuttle meets you at arrivals within 10 minutes of your call.",
          pl: "Tak! Oferujemy darmowy odbiór i zwrot na lotnisku Keflavík 24/7. Nasz shuttle przyjeżdża po Ciebie do 10 minut od telefonu.",
          is: "Já! Við bjóðum ókeypis flutning 24/7 til og frá Keflavíkurflugvelli. Rútan okkar hittir þig við komu innan 10 mínútna.",
        },
      },
      {
        q: {
          en: "What happens if the car breaks down?",
          pl: "Co się stanie, jeśli auto się zepsuje?",
          is: "Hvað gerist ef bíllinn bilar?",
        },
        a: {
          en: "We provide 24/7 roadside assistance across all of Iceland. Call us anytime and we'll either fix the issue remotely or send a replacement vehicle.",
          pl: "Zapewniamy pomoc drogową 24/7 na terenie całej Islandii. Zadzwoń o dowolnej porze — naprawimy problem zdalnie lub wyślemy samochód zastępczy.",
          is: "Við veitum vegaþjónustu 24/7 um allt Ísland. Hringdu hvenær sem er og við lögum málið eða sendum varabíl.",
        },
      },
      {
        q: {
          en: "Is there a minimum rental period?",
          pl: "Czy jest minimalny okres wynajmu?",
          is: "Er lágmarkleigutími?",
        },
        a: {
          en: "No minimum! Rent for 1 day or 30 — same great daily rate. Discounts kick in at 7+ days (5%) and 14+ days (10%).",
          pl: "Bez minimum! Wynajmij na 1 dzień lub 30 — ta sama świetna stawka. Rabaty od 7+ dni (5%) i 14+ dni (10%).",
          is: "Engin lágmark! Leigðu í 1 dag eða 30 — sama frábæra dagverðið. Afsláttur byrjar við 7+ daga (5%) og 14+ daga (10%).",
        },
      },
      {
        q: {
          en: "Can I drive to the highlands?",
          pl: "Czy mogę jechać na wyżyny?",
          is: "Má ég aka á hálendið?",
        },
        a: {
          en: "Yes, with our 4×4 vehicles! Highland F-roads are typically open June–September. We provide detailed maps and current road condition updates before your trip.",
          pl: "Tak, naszymi 4×4! Drogi F na wyżynach są zazwyczaj otwarte od czerwca do września. Zapewniamy mapy i aktualne informacje o warunkach drogowych.",
          is: "Já, með okkar 4×4 bílum! F-vegir á hálendinu eru venjulega opnir júní–september. Við útvegum ítarleg kort og vegaupplýsingar.",
        },
      },
    ],
  },
  features: {
    label: { en: "Why NordCar", pl: "Dlaczego NordCar", is: "Af hverju NordCar" },
    title: { en: "Built for Iceland", pl: "Stworzone dla Islandii", is: "Byggt fyrir Ísland" },
    desc: {
      en: "Every detail is designed for Icelandic conditions — so you focus on the adventure.",
      pl: "Każdy detal jest zaprojektowany pod islandzkie warunki — Ty skupiasz się na przygodzie.",
      is: "Hver smáatriði er hönnuð fyrir íslenskar aðstæður — svo þú einbeitir þér að ævintýrinu.",
    },
    items: [
      {
        title: { en: "Full insurance suite", pl: "Pełne ubezpieczenie", is: "Full tryggingarskrá" },
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
    label: { en: "BUSINESS AUTOPILOT", pl: "BUSINESS AUTOPILOT", is: "BUSINESS AUTOPILOT" },
    title1: { en: "Want a Website Like This", pl: "Chcesz taką stronę", is: "Viltu svona vefsíðu" },
    title2: { en: "For Your Rental?", pl: "Dla swojej wypożyczalni?", is: "Fyrir þína bílaleigu?" },
    desc: {
      en: "We build stunning, personalised websites for car rentals, tour operators, and travel businesses. Everything done for you — website, photos, ads, social media. One plan. Zero stress.",
      pl: "Tworzymy piękne, spersonalizowane strony dla wypożyczalni, touroperatorów i firm turystycznych. Wszystko zrobimy za Ciebie — stronę, zdjęcia, reklamy, social media. Jeden plan. Zero stresu.",
      is: "Við búum til glæsilegar, sérsniðnar vefsíður fyrir bílaleigur, ferðaskrifstofur og ferðafyrirtæki. Allt gert fyrir þig — vefsíða, myndir, auglýsingar, samfélagsmiðlar. Eitt pakki. Enginn stress.",
    },
    features: {
      f1: { en: "Custom Website", pl: "Strona na zamówienie", is: "Sérsniðin vefsíða" },
      f2: { en: "Professional Photos", pl: "Profesjonalne zdjęcia", is: "Fagmyndir" },
      f3: { en: "Social Media Ads", pl: "Reklamy social media", is: "Samfélagsmiðlaauglýsingar" },
      f4: { en: "All-In-One Plan", pl: "Pakiet all-in-one", is: "Allt-í-einu pakki" },
    },
    cta1: { en: "GET STARTED", pl: "ROZPOCZNIJ", is: "BYRJAÐU" },
    price: { en: "From only 199 €/month", pl: "Już od 199 €/mies.", is: "Frá aðeins 199 €/mán." },
    badges: {
      b1: { en: "Live in 7 days", pl: "Gotowe w 7 dni", is: "Tilbúið á 7 dögum" },
      b2: { en: "Fully personalised", pl: "W pełni spersonalizowane", is: "Fullkomlega sérsniðið" },
      b3: { en: "No long-term contracts", pl: "Bez długich umów", is: "Engir langtímasamningar" },
    },
  },
  footer: {
    desc: {
      en: "Car rental demo site · Created by your team",
      pl: "Demo strony wypożyczalni · Stworzone przez Twój zespół",
      is: "Sýnisíða bílaleigu · Búin til af teyminu þínu",
    },
    col1: { en: "Company", pl: "Firma", is: "Fyrirtæki" },
    col2: { en: "Services", pl: "Usługi", is: "Þjónusta" },
    col3: { en: "Support", pl: "Pomoc", is: "Aðstoð" },
    about: { en: "About us", pl: "O nas", is: "Um okkur" },
    careers: { en: "Careers", pl: "Kariera", is: "Störf" },
    press: { en: "Press", pl: "Media", is: "Fjölmiðlar" },
    rentals: { en: "Car rental", pl: "Wynajem aut", is: "Bílaleiga" },
    campers: { en: "Camper vans", pl: "Kampery", is: "Húsbílar" },
    tours: { en: "Self-drive tours", pl: "Wycieczki własnym autem", is: "Sjálfstæðar ferðir" },
    helpCenter: { en: "Help center", pl: "Centrum pomocy", is: "Hjálparmiðstöð" },
    terms: { en: "Terms", pl: "Regulamin", is: "Skilmálar" },
    privacy: { en: "Privacy", pl: "Prywatność", is: "Persónuvernd" },
    rights: { en: "All rights reserved.", pl: "Wszelkie prawa zastrzeżone.", is: "Öll réttindi áskilin." },
  },
} as const;

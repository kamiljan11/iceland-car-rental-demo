export type Lang = "en" | "pl" | "is";

export const translations = {
  nav: {
    fleet: { en: "Fleet", pl: "Flota", is: "Bílafloti" },
    routes: { en: "Routes", pl: "Trasy", is: "Leiðir" },
    pricing: { en: "Pricing", pl: "Cennik", is: "Verðskrá" },
    contact: { en: "Contact", pl: "Kontakt", is: "Hafðu samband" },
    book: { en: "Book now", pl: "Rezerwuj", is: "Bóka" },
    manage: { en: "Manage Booking", pl: "Zarządzaj rezerwacją", is: "Stjórna bókun" },
    driving: { en: "Driving in Iceland", pl: "Jazda po Islandii", is: "Akstur á Íslandi" },
    insurance: { en: "Insurance", pl: "Ubezpieczenie", is: "Trygging" },
  },
  booking: {
    pickupLocation: { en: "Pickup Location", pl: "Miejsce odbioru", is: "Afhendingarstaður" },
    pickupDate: { en: "Pick-up Date", pl: "Data odbioru", is: "Dagsetning afhendingar" },
    dropoffDate: { en: "Drop-off Date", pl: "Data zwrotu", is: "Dagsetning skila" },
    time: { en: "Pick-up Time", pl: "Godzina", is: "Tími" },
    search: { en: "Search", pl: "Szukaj", is: "Leita" },
  },
  trust: {
    award: { en: "Best Car Rental Iceland", pl: "Najlepsza wypożyczalnia Islandii", is: "Besta bílaleigan á Íslandi" },
    awardSub: { en: "World Travel Awards 2024–2025", pl: "World Travel Awards 2024–2025", is: "World Travel Awards 2024–2025" },
    saf: { en: "SAF Certified", pl: "Certyfikat SAF", is: "SAF vottað" },
    safSub: { en: "Icelandic Travel Industry Assoc.", pl: "Islandzkie Stow. Turystyki", is: "Samtök ferðaþjónustunnar" },
  },
  howItWorks: {
    label: { en: "How it works", pl: "Jak to działa", is: "Hvernig virkar" },
    title: { en: "Book. Arrive. Drive.", pl: "Zarezerwuj. Przyleć. Jedź.", is: "Bókaðu. Komdu. Keyrðu." },
    steps: {
      book: {
        title: { en: "Book Online", pl: "Zarezerwuj online", is: "Bókaðu á netinu" },
        desc: {
          en: "Full insurance with zero excess included in every booking. No hidden fees. No surprises. Free cancellation up to 48h.",
          pl: "Pełne ubezpieczenie z zerowym udziałem własnym w każdej rezerwacji. Bez ukrytych opłat. Darmowe anulowanie do 48h.",
          is: "Full trygging með engri sjálfsábyrgð innifalin í hverri bókun. Engin falinn kostnaður. Ókeypis afbókun 48 klst.",
        },
      },
      arrive: {
        title: { en: "Arrive at KEF", pl: "Przyleć do KEF", is: "Komdu á KEF" },
        desc: {
          en: "Check in online before you land. Your car will be prepared and waiting at Keflavík International Airport.",
          pl: "Zamelduj się online przed lądowaniem. Twój samochód będzie przygotowany i czekał na lotnisku Keflavík.",
          is: "Skráðu þig inn á netinu áður en þú lendir. Bíllinn þinn bíður tilbúinn á Keflavíkurflugvelli.",
        },
      },
      drive: {
        title: { en: "Grab Keys & Drive", pl: "Odbierz kluczyki", is: "Taktu lykla og keyrðu" },
        desc: {
          en: "Pick up your keys from our secure keybox. No queues, no upsells, no paperwork at pickup. Just drive.",
          pl: "Odbierz kluczyki z naszego bezpiecznego keyboxa. Bez kolejek, bez dopłat, bez papierów. Po prostu jedź.",
          is: "Sæktu lyklana í öruggri lyklakistu. Engar biðraðir, engin viðbótarsala. Bara keyrðu.",
        },
      },
    },
  },
  insurance: {
    label: { en: "Coverage", pl: "Ochrona", is: "Vernd" },
    title: { en: "Iceland-Proof Insurance", pl: "Ubezpieczenie na Islandię", is: "Trygging fyrir Ísland" },
    desc: {
      en: "Iceland's unique conditions demand specialized coverage. Every rental includes our comprehensive insurance suite — designed specifically for volcanic terrain, extreme weather, and gravel roads.",
      pl: "Unikalne warunki Islandii wymagają specjalistycznej ochrony. Każdy wynajem obejmuje nasz kompleksowy pakiet ubezpieczeniowy — zaprojektowany specjalnie dla wulkanicznego terenu, ekstremalnej pogody i szutrowych dróg.",
      is: "Einstæðar aðstæður Íslands krefjast sérhæfðrar verndar. Sérhver leiga inniheldur okkar alhliða tryggingarskrá — sérstaklega hönnuð fyrir eldfjallasviðsmyndir, öfgafullt veður og malarvegi.",
    },
    items: [
      {
        title: { en: "CDW", pl: "CDW", is: "CDW" },
        tag: { en: "Included", pl: "W cenie", is: "Innifalið" },
        desc: { en: "Collision Damage Waiver covers damage to the rental vehicle in case of an accident.", pl: "Ubezpieczenie CDW pokrywa uszkodzenia wynajmowanego pojazdu w przypadku wypadku.", is: "CDW nær yfir tjón á leigubílnum við slys." },
      },
      {
        title: { en: "SCDW", pl: "SCDW", is: "SCDW" },
        tag: { en: "Included", pl: "W cenie", is: "Innifalið" },
        desc: { en: "Super CDW reduces your excess to zero. Full peace of mind on any road.", pl: "Super CDW redukuje udział własny do zera. Pełny spokój na każdej drodze.", is: "SCDW lækkar sjálfsábyrgð í núll. Fullkominn hugarró á öllum vegum." },
      },
      {
        title: { en: "Gravel Protection", pl: "Ochrona przed żwirem", is: "Malarvörn" },
        tag: { en: "Included", pl: "W cenie", is: "Innifalið" },
        desc: { en: "Covers windshield and body damage from gravel on Iceland's many unpaved roads.", pl: "Pokrywa uszkodzenia szyby i karoserii od żwiru na licznych szutrowych drogach Islandii.", is: "Nær yfir tjón á framrúðu og yfirborði frá möl á óburðarhæfum vegum." },
      },
      {
        title: { en: "Sand & Ash Protection", pl: "Ochrona piasek/popiół", is: "Sand- og öskuvörn" },
        tag: { en: "Included", pl: "W cenie", is: "Innifalið" },
        desc: { en: "Volcanic sand and ash storms can damage paint. This unique Icelandic coverage protects you.", pl: "Wulkaniczny piasek i burze popiołu mogą uszkodzić lakier. Ta unikalna islandzka ochrona chroni Cię.", is: "Eldfjallasandur og öskustormar geta skemmt málningu. Þessi einstaka íslenska vernd verndar þig." },
      },
      {
        title: { en: "Water Damage", pl: "Szkody wodne", is: "Vatnstjón" },
        tag: { en: "Included", pl: "W cenie", is: "Innifalið" },
        desc: { en: "Protection when crossing rivers in highland F-roads with approved 4×4 vehicles.", pl: "Ochrona przy przekraczaniu rzek na drogach F na wyżynach z zatwierdzonymi pojazdami 4×4.", is: "Vernd við vaðbreiður á F-vegum með viðurkenndum jeppum." },
      },
      {
        title: { en: "Zero Deposit", pl: "Zero depozyt", is: "Engin tryggð" },
        tag: { en: "NordCar Exclusive", pl: "Tylko NordCar", is: "NordCar eingöngu" },
        desc: { en: "No credit card hold or deposit required. What you see is what you pay.", pl: "Brak blokady na karcie i depozytu. Co widzisz, tyle płacisz.", is: "Engin kreditkortahald eða trygging krafist. Það sem þú sérð er það sem þú borgar." },
      },
    ],
    badges: [
      { en: "Zero excess on all vehicles", pl: "Zero udział własny na wszystkich pojazdach", is: "Engin sjálfsábyrgð á öllum bílum" },
      { en: "Zero deposit required", pl: "Zero depozyt", is: "Engin trygging" },
      { en: "Zero hidden fees", pl: "Zero ukrytych opłat", is: "Engin falinn kostnaður" },
      { en: "24/7 roadside assistance included", pl: "Pomoc drogowa 24/7 w cenie", is: "Vegaþjónusta 24/7 innifalin" },
    ],
  },
  locations: {
    label: { en: "Pickup & drop-off", pl: "Odbiór i zwrot", is: "Afhending og skil" },
    title: { en: "Convenient Locations", pl: "Wygodne lokalizacje", is: "Þægilegir staðir" },
    main: { en: "Main Hub", pl: "Główna baza", is: "Aðalstöð" },
    items: [
      {
        name: { en: "Keflavík Int. Airport", pl: "Lotnisko Keflavík", is: "Keflavíkurflugvöllur" },
        address: "Blikavöllur 3, 235 Keflavík Airport",
        hours: { en: "Open 24/7 — Keybox pickup", pl: "Czynne 24/7 — Odbiór z keyboxa", is: "Opið 24/7 — Lyklakista" },
        pickup: { en: "Inside airport terminal", pl: "Wewnątrz terminala", is: "Inni í flugstöðinni" },
        phone: "+354 555 1234",
      },
      {
        name: { en: "Reykjavík Downtown", pl: "Reykjavík Centrum", is: "Reykjavík miðbær" },
        address: "Fiskislóð 22, 101 Reykjavík",
        hours: { en: "08:00 – 18:00 daily", pl: "08:00 – 18:00 codziennie", is: "08:00 – 18:00 daglega" },
        pickup: { en: "City center office", pl: "Biuro w centrum", is: "Skrifstofa í miðbæ" },
        phone: "+354 555 5678",
      },
      {
        name: { en: "Akureyri Airport", pl: "Lotnisko Akureyri", is: "Akureyrarflugvöllur" },
        address: "Akureyri Airport (AEY)",
        hours: { en: "Seasonal — June to September", pl: "Sezonowo — Czerwiec do Września", is: "Árstíðabundið — Júní til September" },
        pickup: { en: "Airport meet & greet", pl: "Spotkanie na lotnisku", is: "Móttaka á flugvelli" },
        phone: "+354 555 9012",
      },
    ],
  },
  drivingTips: {
    label: { en: "Driving in Iceland", pl: "Jazda po Islandii", is: "Akstur á Íslandi" },
    title: { en: "Stay Safe on the Road", pl: "Bądź bezpieczny na drodze", is: "Vertu öruggur á veginum" },
    desc: {
      en: "Iceland's roads are unique. Single-lane bridges, sudden weather changes, and unmarked gravel roads require attention. Here's what every driver should know.",
      pl: "Drogi Islandii są wyjątkowe. Jednopasmowe mosty, nagłe zmiany pogody i nieoznakowane szutrowe drogi wymagają uwagi. Oto co powinien wiedzieć każdy kierowca.",
      is: "Vegir á Íslandi eru einstakir. Einbreið brýr, skyndileg veðurbreytingar og ómerktar malarvegir krefjast athygli. Hér er það sem sérhver ökumaður þarf að vita.",
    },
    items: [
      {
        title: { en: "F-Roads Require 4×4", pl: "Drogi F wymagają 4×4", is: "F-vegir krefjast 4×4" },
        desc: { en: "Highland F-roads are only open in summer (June–Sept) and legally require a 4WD vehicle. Never attempt in a 2WD.", pl: "Drogi F na wyżynach są otwarte tylko latem (czerwiec–wrzesień) i wymagają prawnie pojazdu 4WD.", is: "F-vegir á hálendinu eru aðeins opnir á sumrin (júní–sept.) og krefjast löglega 4WD ökutæki." },
      },
      {
        title: { en: "Speed Limits", pl: "Ograniczenia prędkości", is: "Hraðatakmarkanir" },
        desc: { en: "90 km/h on paved highways, 80 km/h on gravel roads, 30–50 km/h in towns. Speed cameras are common.", pl: "90 km/h na drogach asfaltowych, 80 km/h na szutrze, 30–50 km/h w miastach. Fotoradary są powszechne.", is: "90 km/klst á malbikaðum þjóðvegum, 80 km/klst á malarvegum, 30–50 km/klst í þéttbýli." },
      },
      {
        title: { en: "Watch for Sheep", pl: "Uważaj na owce", is: "Varist kindur" },
        desc: { en: "Free-roaming sheep are on roads from June to September. Slow down in rural areas — they can appear suddenly.", pl: "Wolno pasące się owce są na drogach od czerwca do września. Zwolnij na terenach wiejskich.", is: "Frjálsar kindur eru á vegum frá júní til september. Hægðu á þér á dreifbýlissvæðum." },
      },
      {
        title: { en: "Fuel Stations", pl: "Stacje paliw", is: "Bensínstöðvar" },
        desc: { en: "Gas stations can be 200+ km apart in remote areas. Always fill up before heading to the Westfjords or Highlands.", pl: "Stacje benzynowe mogą być oddalone o 200+ km w odległych rejonach. Tankuj przed Westfjordami i wyżynami.", is: "Bensínstöðvar geta verið 200+ km á milli á afskekktum stöðum. Fylltu alltaf áður en þú fer á Vestfirði eða hálendið." },
      },
      {
        title: { en: "Check road.is Daily", pl: "Sprawdzaj road.is codziennie", is: "Athugaðu road.is daglega" },
        desc: { en: "Real-time road conditions at road.is. Some roads close without warning due to weather or river flooding.", pl: "Aktualne warunki drogowe na road.is. Niektóre drogi zamykają się bez ostrzeżenia z powodu pogody lub powodzi.", is: "Rauntíma vegaaðstæður á road.is. Sumir vegir lokast án fyrirvara vegna veðurs eða flóða." },
      },
      {
        title: { en: "Winter Driving", pl: "Jazda zimowa", is: "Vetrarakstur" },
        desc: { en: "Studded tires included Oct–Apr. Keep headlights on 24/7. Black ice and sudden blizzards are common. Carry warm clothes.", pl: "Opony z kolcami w cenie paź–kwi. Światła włączone 24/7. Gołoledź i nagłe zamiecie są częste.", is: "Nagladekkjum innifalin okt–apr. Hafðu ljósin kveikt 24/7. Hálka og skyndileg hríðarveður eru algeng." },
      },
    ],
    safetravel: { en: "SafeTravel.is", pl: "SafeTravel.is", is: "SafeTravel.is" },
    roadis: { en: "Road.is — Road Conditions", pl: "Road.is — Warunki drogowe", is: "Road.is — Vegaástand" },
    vedur: { en: "Vedur.is — Weather", pl: "Vedur.is — Pogoda", is: "Vedur.is — Veður" },
  },
  hero: {
    subtitle: {
      en: "Car rental · Iceland",
      pl: "Wypożyczalnia samochodów · Islandia",
      is: "Bílaleiga · Ísland",
    },
    title1: { en: "Rent a car in Iceland.", pl: "Wynajmij auto w Islandii.", is: "Leigðu bíl á Íslandi." },
    title2: { en: "No hidden fees. Ever.", pl: "Bez ukrytych opłat. Nigdy.", is: "Engin falin gjöld. Aldrei." },
    desc: {
      en: "Full insurance, free extras, and 24/7 roadside rescue — all included. Just drive.",
      pl: "Pełne ubezpieczenie, darmowe dodatki i pomoc drogowa 24/7 — wszystko w cenie. Po prostu jedź.",
      is: "Full trygging, ókeypis aukahlutir og 24/7 vegabjörgun — allt innifalið. Bara keyrðu.",
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
    title: { en: "Choose your vehicle", pl: "Wybierz swój pojazd", is: "Veldu ökutæki" },
    desc: {
      en: "All cars include full insurance, GPS, and winter tyres.",
      pl: "Każde auto z pełnym ubezpieczeniem, GPS i oponami zimowymi.",
      is: "Allir bílar með fullri tryggingu, GPS og vetrardekk.",
    },
    details: { en: "Details →", pl: "Szczegóły →", is: "Nánar →" },
    bestFor: { en: "Best for:", pl: "Najlepszy na:", is: "Best fyrir:" },
    detailModal: {
      specs: { en: "Specifications", pl: "Specyfikacja", is: "Tæknilegar upplýsingar" },
      included: { en: "Included with every rental", pl: "W cenie każdego wynajmu", is: "Innifalið í hverri leigu" },
      bookThis: { en: "Book this vehicle", pl: "Zarezerwuj ten pojazd", is: "Bóka þetta ökutæki" },
      froad: { en: "F-Road approved", pl: "Dozwolony na drogi F", is: "F-vegir leyfðir" },
      noFroad: { en: "Paved roads only", pl: "Tylko drogi utwardzone", is: "Aðeins malbikaðir vegir" },
      minAge: { en: "Min. driver age", pl: "Min. wiek kierowcy", is: "Lágmarksaldur ökumanns" },
      seats: { en: "Seats", pl: "Miejsca", is: "Sæti" },
      drive: { en: "Drivetrain", pl: "Napęd", is: "Drif" },
      fuel: { en: "Fuel", pl: "Paliwo", is: "Eldsneyti" },
      includedItems: {
        en: ["Full CDW insurance", "Zero excess", "Winter tyres", "Free GPS", "24/7 roadside assistance", "Free cancellation 48h"],
        pl: ["Pełne ubezpieczenie CDW", "Zerowy udział własny", "Opony zimowe", "Darmowy GPS", "Pomoc drogowa 24/7", "Darmowe anulowanie 48h"],
        is: ["Full CDW trygging", "Engin sjálfsábyrgð", "Vetrardekk", "Ókeypis GPS", "24/7 vegahjálp", "Ókeypis afbókun 48 klst"],
      },
    },
  },
  vehicles: {
    suv: {
      name: { en: "Land Cruiser 4×4", pl: "Land Cruiser 4×4", is: "Land Cruiser 4×4" },
      subtitle: { en: "Conquer highlands & F-roads", pl: "Podbij wyżyny i drogi F", is: "Sigra hálendi og F-vegi" },
      tag: { en: "Most popular", pl: "Najpopularniejszy", is: "Vinsælastur" },
      description: {
        en: "Our most popular choice for good reason. The Land Cruiser handles any terrain Iceland throws at it — gravel, snow, river crossings. Spacious interior with room for 4 large suitcases. Heated seats and powerful AC keep you comfortable year-round.",
        pl: "Nasz najpopularniejszy wybór nie bez powodu. Land Cruiser poradzi sobie z każdym terenem w Islandii — żwir, śnieg, brody. Przestronne wnętrze na 4 duże walizki. Podgrzewane fotele i mocna klimatyzacja zapewniają komfort przez cały rok.",
        is: "Vinsælasti valið okkar af góðri ástæðu. Land Cruiser ræður við allt landslag Íslands — möl, snjó, vaðlög. Rúmgott innrými með pláss fyrir 4 stóra ferðatöskur.",
      },
      features: {
        en: ["5 seats", "Diesel", "4WD"],
        pl: ["5 miejsc", "Diesel", "4WD"],
        is: ["5 sæti", "Dísel", "4WD"],
      },
      specs: { seats: 5, transmission: "automatic" as const, fuel: "diesel" as const, luggage: 4, drivetrain: "4WD", engine: "2.8L Turbo Diesel", range: "800 km" },
      price: { en: "from €89/day", pl: "od 89€/dzień", is: "frá 89€/dag" },
      bestFor: { en: "Highlands, F-roads, winter", pl: "Wyżyny, drogi F, zima", is: "Hálendi, F-vegir, vetur" },
      froad: true,
      minAge: 23,
    },
    camper: {
      name: { en: "Explorer Camper", pl: "Explorer Camper", is: "Explorer Camper" },
      subtitle: { en: "Your rolling basecamp", pl: "Twoja baza na kółkach", is: "Hreyfanlegur búðastaður" },
      tag: { en: "Adventure", pl: "Przygoda", is: "Ævintýri" },
      description: {
        en: "Sleep wherever Iceland takes you. Pop-up roof with double bed, fully equipped kitchen with gas stove, fridge, and sink. Diesel heater keeps you warm at -15°C. All camping gear included — just pack your clothes.",
        pl: "Śpij gdziekolwiek zaprowadzi Cię Islandia. Rozkładany dach z podwójnym łóżkiem, pełna kuchnia z kuchenką gazową, lodówką i zlewem. Ogrzewanie diesla utrzymuje ciepło do -15°C. Cały sprzęt kempingowy w cenie.",
        is: "Sofðu hvar sem Ísland leiðir þig. Uppfellanlegt þak með tvöfaldri rúminu, fullbúið eldhús með gasbrennaranum, ísskáp og vaski.",
      },
      features: {
        en: ["2 berths", "Kitchen", "Heating"],
        pl: ["2 łóżka", "Kuchnia", "Ogrzewanie"],
        is: ["2 koja", "Eldhús", "Hiti"],
      },
      specs: { seats: 2, transmission: "manual" as const, fuel: "diesel" as const, luggage: 0, drivetrain: "2WD", engine: "2.0L TDI", range: "900 km" },
      price: { en: "from €129/day", pl: "od 129€/dzień", is: "frá 129€/dag" },
      bestFor: { en: "Ring Road, camping, freedom", pl: "Ring Road, camping, wolność", is: "Hringvegur, tjaldsvæði, frelsi" },
      froad: false,
      minAge: 25,
    },
    compact: {
      name: { en: "City Smart", pl: "City Smart", is: "City Smart" },
      subtitle: { en: "Perfect for paved roads", pl: "Idealny na asfalt", is: "Fullkominn á malbikaða vegi" },
      tag: { en: "Economy", pl: "Ekonomiczny", is: "Sparneytinn" },
      description: {
        en: "The smartest choice for paved routes and city exploration. Excellent fuel economy at 5L/100km. Easy to park, easy to drive. USB charging, Bluetooth, and A/C standard. Perfect for the Golden Circle or Reykjavík day trips.",
        pl: "Najlepszy wybór na trasy asfaltowe i zwiedzanie miast. Doskonałe zużycie paliwa 5L/100km. Łatwy do parkowania i prowadzenia. USB, Bluetooth i klimatyzacja w standardzie. Idealny na Golden Circle.",
        is: "Besti valið fyrir malbikaðar leiðir og borgarskoðun. Framúrskarandi eldsneytisnýtni við 5L/100km.",
      },
      features: {
        en: ["4 seats", "Petrol", "Auto"],
        pl: ["4 miejsca", "Benzyna", "Automat"],
        is: ["4 sæti", "Bensín", "Sjálfskiptur"],
      },
      specs: { seats: 4, transmission: "automatic" as const, fuel: "petrol" as const, luggage: 2, drivetrain: "2WD", engine: "1.2L Petrol", range: "750 km" },
      price: { en: "from €39/day", pl: "od 39€/dzień", is: "frá 39€/dag" },
      bestFor: { en: "Golden Circle, city trips", pl: "Golden Circle, miasto", is: "Gullni hringurinn, borgarferðir" },
      froad: false,
      minAge: 20,
    },
    offroad: {
      name: { en: "Highland 4×4", pl: "Highland 4×4", is: "Highland 4×4" },
      subtitle: { en: "Built for F-roads & river crossings", pl: "Stworzony na drogi F i brody", is: "Gerður fyrir F-vegi og vaðlög" },
      tag: { en: "Off-road", pl: "Off-road", is: "Utan vegar" },
      features: {
        en: ["3 seats", "Diesel", "4WD"],
        pl: ["3 miejsca", "Diesel", "4WD"],
        is: ["3 sæti", "Dísel", "4WD"],
      },
      specs: { seats: 3, transmission: "manual" as const, fuel: "diesel" as const, luggage: 2, drivetrain: "4WD" },
      price: { en: "from €109/day", pl: "od 109€/dzień", is: "frá 109€/dag" },
      bestFor: { en: "Highlands, river crossings", pl: "Wyżyny, brody rzeczne", is: "Hálendi, vaðlög" },
      froad: true,
      minAge: 25,
    },
    electric: {
      name: { en: "EV Cruiser", pl: "EV Cruiser", is: "EV Cruiser" },
      subtitle: { en: "Zero emissions, full adventure", pl: "Zero emisji, pełna przygoda", is: "Engin útblástur, fullt ævintýri" },
      tag: { en: "Eco-friendly", pl: "Ekologiczny", is: "Umhverfisvænn" },
      features: {
        en: ["5 seats", "Electric", "AWD"],
        pl: ["5 miejsc", "Elektryczny", "AWD"],
        is: ["5 sæti", "Rafmagn", "AWD"],
      },
      specs: { seats: 5, transmission: "automatic" as const, fuel: "electric" as const, luggage: 3, drivetrain: "AWD" },
      price: { en: "from €79/day", pl: "od 79€/dzień", is: "frá 79€/dag" },
      bestFor: { en: "Ring Road, eco travel", pl: "Ring Road, eko podróż", is: "Hringvegur, umhverfisferðir" },
      froad: false,
      minAge: 21,
    },
    luxury: {
      name: { en: "Premium Explorer", pl: "Premium Explorer", is: "Premium Explorer" },
      subtitle: { en: "Luxury meets wilderness", pl: "Luksus spotyka dzicz", is: "Lúxus mætir víðernum" },
      tag: { en: "Premium", pl: "Premium", is: "Lúxus" },
      features: {
        en: ["5 seats", "Diesel", "4WD"],
        pl: ["5 miejsc", "Diesel", "4WD"],
        is: ["5 sæti", "Dísel", "4WD"],
      },
      specs: { seats: 5, transmission: "automatic" as const, fuel: "diesel" as const, luggage: 5, drivetrain: "4WD" },
      price: { en: "from €199/day", pl: "od 199€/dzień", is: "frá 199€/dag" },
      bestFor: { en: "Comfort, style, any road", pl: "Komfort, styl, każda droga", is: "Þægindi, stíll, allir vegir" },
      froad: true,
      minAge: 25,
    },
  },
  itinerary: {
    label: { en: "Free with every rental", pl: "Gratis do każdego wynajmu", is: "Ókeypis með hverri leigu" },
    title: { en: "Popular routes", pl: "Popularne trasy", is: "Vinsælar leiðir" },
    desc: {
      en: "Plan your drive with our most popular Iceland itineraries.",
      pl: "Zaplanuj podróż z naszymi najpopularniejszymi trasami.",
      is: "Skipuleggðu aksturinn þinn með vinsælustu leiðum okkar.",
    },
    features: [
      {
        title: { en: "Day-by-day route plan", pl: "Plan trasy dzień po dniu", is: "Dag-fyrir-dag leiðaráætlun" },
        desc: { en: "Driving times, distances, stops — optimized so you see more and drive less.", pl: "Czasy jazdy, odległości, przystanki — zoptymalizowane, żebyś więcej widział i mniej jechał.", is: "Aksturstímar, vegalengdir, stopp — fínstillt svo þú sjáir meira og keyrir minna." },
      },
      {
        title: { en: "Hidden gems & local tips", pl: "Ukryte perełki i lokalne tipy", is: "Faldir gimsteinar og staðbundin ráð" },
        desc: { en: "Hot springs, viewpoints, restaurants only locals know. Updated every season.", pl: "Gorące źródła, punkty widokowe, restauracje znane tylko lokalsom. Aktualizowane co sezon.", is: "Heitar laugar, útsýnisstaðir, veitingastaðir sem aðeins heimamenn þekkja." },
      },
      {
        title: { en: "Live in our app", pl: "Na żywo w aplikacji", is: "Í beinni í appinu" },
        desc: { en: "Offline maps, weather alerts, road conditions — everything in one place on your phone.", pl: "Mapy offline, alerty pogodowe, warunki drogowe — wszystko w jednym miejscu na telefonie.", is: "Ónettengd kort, veðurviðvaranir, vegaaðstæður — allt á einum stað í símanum þínum." },
      },
      {
        title: { en: "Adjusted to your car", pl: "Dopasowane do Twojego auta", is: "Aðlagað að bílnum þínum" },
        desc: { en: "F-road capable? We add highland routes. Compact? We keep you on smooth asphalt.", pl: "Samochód na drogi F? Dodajemy trasy górskie. Kompakt? Trzymamy Cię na gładkim asfalcie.", is: "F-vegahæfur? Við bætum við hálendisleiðum. Smábíll? Við höldum þér á sléttum malbikaðum vegum." },
      },
    ],
    cta: { en: "Get your free itinerary", pl: "Pobierz darmowy plan", is: "Fáðu ókeypis ferðaáætlun" },
    sampleRoutes: [
      { name: { en: "Ring Road", pl: "Ring Road", is: "Hringvegurinn" }, days: "7–10" },
      { name: { en: "Golden Circle", pl: "Złoty Krąg", is: "Gullni hringurinn" }, days: "1" },
      { name: { en: "Westfjords", pl: "Westfjordy", is: "Vestfirðir" }, days: "4–5" },
      { name: { en: "Snæfellsnes", pl: "Snæfellsnes", is: "Snæfellsnes" }, days: "2–3" },
    ],
  },
  testimonials: {
    label: { en: "Traveler stories", pl: "Opinie podróżnych", is: "Sögur ferðamanna" },
    title: { en: "What travelers say", pl: "Co mówią podróżni", is: "Hvað ferðamenn segja" },
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
        q: { en: "Do I need a 4×4 in Iceland?", pl: "Czy potrzebuję 4×4 na Islandii?", is: "Þarf ég 4×4 á Íslandi?" },
        a: { en: "For Ring Road and Golden Circle, a compact car is fine. For F-roads, highlands, and winter driving, a 4×4 is required by law. We'll help you choose the right vehicle for your route.", pl: "Na Ring Road i Golden Circle wystarczy auto kompaktowe. Na drogi F, wyżyny i jazdę zimową 4×4 jest wymagane prawem. Pomożemy dobrać odpowiedni pojazd do Twojej trasy.", is: "Á Hringveg og Gullna hringinn dugar smábíll. Á F-vegi, hálendi og vetrarakstri er 4×4 krafist samkvæmt lögum. Við hjálpum þér að velja rétta ökutækið." },
      },
      {
        q: { en: "What insurance is included?", pl: "Jakie ubezpieczenie jest w cenie?", is: "Hvaða trygging er innifalin?" },
        a: { en: "Every rental includes CDW, SCDW, theft protection, gravel protection, and sand & ash insurance. Zero excess on all plans.", pl: "Każdy wynajem obejmuje CDW, SCDW, ochronę przed kradzieżą, ochronę przed żwirem oraz ubezpieczenie od piasku i popiołu. Zero udział własny.", is: "Sérhver leiga inniheldur CDW, SCDW, þjófnaðarvernd, malarvörn og sand- og öskutryggingu. Engin sjálfsábyrgð." },
      },
      {
        q: { en: "Can I pick up at Keflavík Airport?", pl: "Czy mogę odebrać auto na lotnisku Keflavík?", is: "Get ég sótt bíl á Keflavíkurflugvelli?" },
        a: { en: "Yes! We offer 24/7 keybox pickup inside the airport terminal. Check in online, land, grab your keys and drive. Zero waiting time.", pl: "Tak! Oferujemy odbiór z keyboxa 24/7 wewnątrz terminala. Zamelduj się online, wyląduj, odbierz kluczyki i jedź. Zero czekania.", is: "Já! Við bjóðum lyklakistu 24/7 inni í flugstöðinni. Skráðu þig inn á netinu, lentu, taktu lyklana og keyrðu. Enginn biðtími." },
      },
      {
        q: { en: "What happens if the car breaks down?", pl: "Co się stanie, jeśli auto się zepsuje?", is: "Hvað gerist ef bíllinn bilar?" },
        a: { en: "We provide 24/7 roadside assistance across all of Iceland. Call us anytime and we'll either fix the issue remotely or send a replacement vehicle.", pl: "Zapewniamy pomoc drogową 24/7 na terenie całej Islandii. Zadzwoń o dowolnej porze — naprawimy problem zdalnie lub wyślemy samochód zastępczy.", is: "Við veitum vegaþjónustu 24/7 um allt Ísland. Hringdu hvenær sem er og við lögum málið eða sendum varabíl." },
      },
      {
        q: { en: "Is there a minimum rental period?", pl: "Czy jest minimalny okres wynajmu?", is: "Er lágmarkleigutími?" },
        a: { en: "No minimum! Rent for 1 day or 30 — same great daily rate. Discounts kick in at 7+ days (5%) and 14+ days (10%).", pl: "Bez minimum! Wynajmij na 1 dzień lub 30 — ta sama świetna stawka. Rabaty od 7+ dni (5%) i 14+ dni (10%).", is: "Engin lágmark! Leigðu í 1 dag eða 30 — sama frábæra dagverðið. Afsláttur byrjar við 7+ daga (5%) og 14+ daga (10%)." },
      },
      {
        q: { en: "Can I drive to the highlands?", pl: "Czy mogę jechać na wyżyny?", is: "Má ég aka á hálendið?" },
        a: { en: "Yes, with our 4×4 vehicles! Highland F-roads are typically open June–September. We provide detailed maps and current road condition updates before your trip.", pl: "Tak, naszymi 4×4! Drogi F na wyżynach są zazwyczaj otwarte od czerwca do września. Zapewniamy mapy i aktualne informacje o warunkach drogowych.", is: "Já, með okkar 4×4 bílum! F-vegir á hálendinu eru venjulega opnir júní–september. Við útvegum ítarleg kort og vegaupplýsingar." },
      },
      {
        q: { en: "Do you charge a deposit?", pl: "Czy pobieracie depozyt?", is: "Eruð þið með tryggingu?" },
        a: { en: "No! NordCar is a zero-deposit rental. We don't hold any amount on your credit card. What you see online is what you pay.", pl: "Nie! NordCar to wypożyczalnia bez depozytu. Nie blokujemy żadnej kwoty na Twojej karcie. Co widzisz online, tyle płacisz.", is: "Nei! NordCar er tryggingarlaus leiga. Við höldum engri upphæð á kreditkortinu þínu. Það sem þú sérð á netinu er það sem þú borgar." },
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
        desc: { en: "CDW, SCDW, gravel, sand & ash protection — all included. Zero excess.", pl: "CDW, SCDW, ochrona żwir, piasek i popiół — wszystko w cenie. Zero udział.", is: "CDW, SCDW, malar-, sand- og öskuvörn — allt innifalið. Engin sjálfsábyrgð." },
      },
      {
        title: { en: "Keybox airport pickup", pl: "Keybox na lotnisku", is: "Lyklakista á flugvelli" },
        desc: { en: "24/7 contactless pickup at KEF. Online check-in, grab keys, drive.", pl: "Bezkonktaktowy odbiór 24/7 na KEF. Check-in online, odbierz kluczyki, jedź.", is: "Snertilausi 24/7 á KEF. Netinnritun, taktu lykla, keyrðu." },
      },
      {
        title: { en: "Winter tyres", pl: "Opony zimowe", is: "Vetrardekk" },
        desc: { en: "Studded tyres Oct–Apr, all-season in summer. Always road-ready.", pl: "Kolce paź–kwi, całoroczne latem. Zawsze gotowe na drogę.", is: "Nagladekkjum okt–apr, heilsársdekk á sumrin. Alltaf tilbúið." },
      },
      {
        title: { en: "Flexible bookings", pl: "Elastyczne rezerwacje", is: "Sveigjanleg bókun" },
        desc: { en: "Free cancellation up to 48h. No prepayment required. Pay on arrival option.", pl: "Darmowe anulowanie do 48h. Bez przedpłat. Opcja płatności przy odbiorze.", is: "Ókeypis afbókun 48 klst. Engin fyrirframgreiðsla. Greiðsla við afhendingu." },
      },
      {
        title: { en: "24/7 roadside assistance", pl: "Pomoc drogowa 24/7", is: "Vegaþjónusta 24/7" },
        desc: { en: "Phone support and roadside rescue across all of Iceland, including highlands.", pl: "Wsparcie telefoniczne i pomoc drogowa na całej Islandii, włącznie z wyżynami.", is: "Símaþjónusta og vegabjörgun um allt Ísland, þar með talið hálendið." },
      },
      {
        title: { en: "No hidden fees", pl: "Bez ukrytych kosztów", is: "Engin falinn kostnaður" },
        desc: { en: "Transparent pricing. No surprise charges at pickup or drop-off. Ever.", pl: "Przejrzyste ceny. Żadnych niespodziewanych opłat przy odbiorze lub zwrocie. Nigdy.", is: "Gagnsæ verðlagning. Engin óvænt gjöld við afhendingu eða skil. Aldrei." },
      },
    ],
  },
  usp: {
    label: { en: "The NordCar Promise", pl: "Obietnica NordCar", is: "NordCar loforðið" },
    title1: { en: "Three Zeros.", pl: "Trzy zera.", is: "Þrjú núll." },
    title2: { en: "Total peace of mind.", pl: "Totalny spokój.", is: "Fullkominn hugarró." },
    desc: {
      en: "Everything included, nothing hidden.",
      pl: "Wszystko w cenie, nic nie jest ukryte.",
      is: "Allt innifalið, ekkert falið.",
    },
    zeros: [
      {
        title: { en: "Zero Deposit", pl: "Zero depozyt", is: "Engin trygging" },
        desc: { en: "No credit card hold — we don't lock a single cent.", pl: "Bez blokady na karcie — nie blokujemy ani centa.", is: "Engin kreditkortahald — við höldum ekki einni krónu." },
      },
      {
        title: { en: "Zero Excess", pl: "Zero udział własny", is: "Engin sjálfsábyrgð" },
        desc: { en: "Full insurance in every booking. CDW, SCDW, gravel, sand & ash — all covered.", pl: "Pełne ubezpieczenie w każdej rezerwacji. CDW, SCDW, żwir, piasek — pokryte.", is: "Full trygging í hverri bókun. CDW, SCDW, möl, sandur — allt tryggt." },
      },
      {
        title: { en: "Zero Hidden Fees", pl: "Zero ukrytych opłat", is: "Engin falinn kostnaður" },
        desc: { en: "Price online = price you pay. No surprises at the counter.", pl: "Cena online = cena, którą płacisz. Bez niespodzianek.", is: "Verð á netinu = verð sem þú borgar. Engar óvart." },
      },
    ],
    extras: [
      {
        title: { en: "24/7 Keybox Pickup", pl: "Keybox 24/7", is: "Lyklakista 24/7" },
        desc: { en: "Land at any hour. Your car is waiting at KEF — no queues, no counters, no upsells.", pl: "Ląduj o dowolnej godzinie. Auto czeka na KEF — bez kolejek, bez lad, bez dopłat.", is: "Lentu hvenær sem er. Bíllinn bíður á KEF — engar biðraðir, engar afgreiðslur." },
      },
      {
        title: { en: "Free Cancellation", pl: "Darmowe anulowanie", is: "Ókeypis afbókun" },
        desc: { en: "Plans change. Cancel up to 48h before pickup — full refund, no questions asked.", pl: "Plany się zmieniają. Anuluj do 48h przed odbiorem — pełny zwrot, bez pytań.", is: "Áætlanir breytast. Afbókaðu allt að 48 klst. fyrir afhendingu — full endurgreiðsla." },
      },
      {
        title: { en: "24/7 Roadside Rescue", pl: "Pomoc drogowa 24/7", is: "Vegabjörgun 24/7" },
        desc: { en: "Stuck in the highlands at midnight? We'll be there. Phone support and vehicle rescue across all Iceland.", pl: "Utknąłeś na wyżynach o północy? Będziemy tam. Wsparcie telefoniczne i pomoc na całej Islandii.", is: "Fastur á hálendinu um miðnætti? Við komum. Símaþjónusta og bílbjörgun um allt Ísland." },
      },
    ],
  },
  cta: {
    label: { en: "BUSINESS AUTOPILOT", pl: "BUSINESS AUTOPILOT", is: "BUSINESS AUTOPILOT" },
    title1: { en: "Want a Website Like This", pl: "Chcesz taką stronę", is: "Viltu svona vefsíðu" },
    title2: { en: "For Your Rental?", pl: "Dla swojej wypożyczalni?", is: "Fyrir þína bílaleigu?" },
    desc: {
      en: "Website, photos, ads, social media, and your own domain — all done for you. One plan, zero stress.",
      pl: "Strona, zdjęcia, reklamy, social media i własna domena — wszystko za Ciebie. Jeden plan, zero stresu.",
      is: "Vefsíða, myndir, auglýsingar, samfélagsmiðlar og eigið lén — allt gert fyrir þig. Eitt pakki, enginn stress.",
    },
    features: {
      f1: { en: "Custom Website", pl: "Strona na zamówienie", is: "Sérsniðin vefsíða" },
      f2: { en: "Professional Photos", pl: "Profesjonalne zdjęcia", is: "Fagmyndir" },
      f3: { en: "Social Media Ads", pl: "Reklamy social media", is: "Samfélagsmiðlaauglýsingar" },
      f4: { en: "Custom Domain Included", pl: "Własna domena w cenie", is: "Eigið lén innifalið" },
    },
    cta1: { en: "GET STARTED", pl: "ROZPOCZNIJ", is: "BYRJAÐU" },
    price: { en: "From only 19 990 ISK/month", pl: "Już od 19 990 ISK/mies.", is: "Frá aðeins 19 990 ISK/mán." },
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

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
      froad: true,
      minAge: 23,
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
      froad: false,
      minAge: 25,
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
      froad: false,
      minAge: 20,
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
      en: "Most rental companies in Iceland charge €2,000+ deposits and surprise you at pickup. We do the opposite. Everything is included, nothing is hidden.",
      pl: "Większość wypożyczalni na Islandii pobiera depozyty ponad 2000€ i zaskakuje Cię przy odbiorze. My robimy odwrotnie. Wszystko jest w cenie, nic nie jest ukryte.",
      is: "Flestar bílaleigur á Íslandi rukka 2.000€+ tryggingu og koma á óvart við afhendingu. Við gerum öfugt. Allt er innifalið, ekkert er falið.",
    },
    zeros: [
      {
        title: { en: "Zero Deposit", pl: "Zero depozyt", is: "Engin trygging" },
        desc: { en: "No credit card hold. No cash upfront. Most competitors lock €2,000+ on your card — we don't hold a single cent.", pl: "Bez blokady na karcie. Bez gotówki z góry. Konkurencja blokuje 2000€+ — my nie blokujemy ani centa.", is: "Engin kreditkortahald. Ekkert fyrirfram. Keppinautar halda 2.000€+ — við höldum ekki einni krónu." },
      },
      {
        title: { en: "Zero Excess", pl: "Zero udział własny", is: "Engin sjálfsábyrgð" },
        desc: { en: "Full insurance suite included in every booking. CDW, SCDW, gravel, sand & ash, water damage — all covered, zero out-of-pocket.", pl: "Pełne ubezpieczenie w każdej rezerwacji. CDW, SCDW, żwir, piasek, woda — wszystko pokryte, zero dopłat.", is: "Full trygging innifalin í hverri bókun. CDW, SCDW, möl, sandur og aska, vatn — allt tryggt, engin sjálfsábyrgð." },
      },
      {
        title: { en: "Zero Hidden Fees", pl: "Zero ukrytych opłat", is: "Engin falinn kostnaður" },
        desc: { en: "The price you see online is the price you pay. No airport surcharge, no fuel tricks, no surprise charges at the counter.", pl: "Cena, którą widzisz online to cena, którą płacisz. Bez dopłat lotniskowych, bez sztuczek z paliwem, bez niespodzianek.", is: "Verðið sem þú sérð á netinu er verðið sem þú borgar. Ekkert flugvallargjald, engin eldsneytisbragð, engin óvænt gjöld." },
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

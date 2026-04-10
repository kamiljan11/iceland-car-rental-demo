import { Sun, Snowflake, AlertTriangle, Eye } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import CrossHatch from "@/components/svg/CrossHatch";

const tips = [
  {
    icon: Snowflake,
    season: { en: "Winter (Oct–Apr)", pl: "Zima (paź–kwi)", is: "Vetur (okt–apr)" },
    items: {
      en: ["Studded winter tyres included", "Daylight: 4–6 hours only", "Check road.is before every drive", "Keep the fuel tank above half"],
      pl: ["Opony zimowe z kolcami w cenie", "Dzień: tylko 4–6 godzin", "Sprawdzaj road.is przed jazdą", "Utrzymuj bak powyżej połowy"],
      is: ["Nagladekkjum innifalin", "Dagsljós: aðeins 4–6 klst", "Athugaðu road.is áður en þú keyrir", "Haltu eldsneyti yfir helmingi"],
    },
  },
  {
    icon: Sun,
    season: { en: "Summer (May–Sep)", pl: "Lato (maj–wrz)", is: "Sumar (maí–sep)" },
    items: {
      en: ["24h daylight — midnight sun", "Gravel roads can be dusty", "Watch for sheep on rural roads", "Book early — high season fills fast"],
      pl: ["24h światła — słońce o północy", "Drogi żwirowe bywają zakurzone", "Uważaj na owce na drogach", "Rezerwuj wcześnie — sezon się zapełnia"],
      is: ["24 klst dagsljós — miðnætursól", "Malarvegir geta verið rykmiklir", "Varaðu þig á sauðfé", "Bókaðu snemma — háannatími"],
    },
  },
  {
    icon: AlertTriangle,
    season: { en: "F-Roads (Jun–Sep only)", pl: "Drogi F (cze–wrz)", is: "F-vegir (jún–sep)" },
    items: {
      en: ["4WD vehicle required by law", "River crossings — check depth first", "No fuel stations in highlands", "Inform someone of your route"],
      pl: ["4WD wymagane prawem", "Brody — sprawdzaj głębokość", "Brak stacji w górach", "Poinformuj kogoś o trasie"],
      is: ["4WD krafist samkvæmt lögum", "Vaðlög — athugaðu dýpt fyrst", "Engar bensínstöðvar á hálendinu", "Láttu vita af leið þinni"],
    },
  },
  {
    icon: Eye,
    season: { en: "Year-round tips", pl: "Porady na cały rok", is: "Ráð allt árið" },
    items: {
      en: ["Single-lane bridges — yield to closer car", "Speed limit: 90 km/h on highways", "Off-road driving is illegal & fined", "Wind can open doors violently"],
      pl: ["Mosty jednopasowe — ustąp bliższemu", "Limit: 90 km/h na autostradach", "Jazda poza drogą jest nielegalna", "Wiatr może otworzyć drzwi gwałtownie"],
      is: ["Einbreið brú — víktu fyrir nærri bíl", "Hámarkshraði: 90 km/klst", "Akstur utan vega er ólöglegur", "Vindur getur opnað hurðir af krafti"],
    },
  },
];

const DrivingTips = () => {
  const { lang } = useLang();
  const labels = {
    label: { en: "Know before you go", pl: "Wiedz zanim pojedziesz", is: "Vittu áður en þú ferð" },
    title: { en: "Driving in Iceland", pl: "Jazda po Islandii", is: "Akstur á Íslandi" },
  };

  return (
    <section id="driving" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <CrossHatch className="text-primary" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
            {labels.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {labels.title[lang]}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <tip.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold">{tip.season[lang]}</h3>
              </div>
              <ul className="space-y-2">
                {tip.items[lang].map((item, j) => (
                  <li key={j} className="text-muted-foreground text-xs sm:text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrivingTips;

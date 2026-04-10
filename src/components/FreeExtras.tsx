import { Wifi, MapPin, Snowflake, Baby, Shield, Headphones, Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const extras: {
  icon: typeof Wifi;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  saved: string;
}[] = [
  {
    icon: Wifi,
    title: { en: "Portable Wi-Fi", pl: "Przenośne Wi-Fi", is: "Ferða-WiFi" },
    desc: { en: "Stay connected across Iceland — even in remote areas", pl: "Bądź online w całej Islandii — nawet w odległych miejscach", is: "Vertu á netinu um alla Ísland" },
    saved: "€8/day",
  },
  {
    icon: MapPin,
    title: { en: "GPS Navigation", pl: "Nawigacja GPS", is: "GPS leiðsögn" },
    desc: { en: "Pre-loaded with Icelandic roads, F-roads & hidden spots", pl: "Z załadowanymi drogami Islandii i ukrytymi miejscami", is: "Forhlaðin með íslenskum vegum og faldum stöðum" },
    saved: "€5/day",
  },
  {
    icon: Snowflake,
    title: { en: "Winter Tyres & Studs", pl: "Opony zimowe i kolce", is: "Vetrardekk og broddar" },
    desc: { en: "Oct–Apr included, studs available on request", pl: "Paź–Kwi w cenie, kolce na życzenie", is: "Okt–Apr innifalin, broddar á beiðni" },
    saved: "€10/day",
  },
  {
    icon: Baby,
    title: { en: "Child Seats", pl: "Foteliki dziecięce", is: "Barnastólar" },
    desc: { en: "All ages — infant, toddler & booster seats free", pl: "Dla każdego wieku — za darmo", is: "Allir aldrar — ókeypis" },
    saved: "€7/day",
  },
  {
    icon: Shield,
    title: { en: "Full Insurance Bundle", pl: "Pełny pakiet ubezpieczeń", is: "Full tryggingapakki" },
    desc: { en: "CDW + SCDW + gravel + sand & ash — zero excess", pl: "CDW + SCDW + żwir + piasek — zero udziału własnego", is: "CDW + SCDW + malarvörn + sandvörn" },
    saved: "€25/day",
  },
  {
    icon: Headphones,
    title: { en: "24/7 Roadside Assist", pl: "Pomoc drogowa 24/7", is: "24/7 vegahjálp" },
    desc: { en: "Icelandic team on call — GPS-located rescue", pl: "Islandzki zespół na telefon — ratunek GPS", is: "Íslenskt teymi á vakt — GPS björgun" },
    saved: "€6/day",
  },
];

const labels = {
  title: { en: "Free extras others charge for", pl: "Darmowe dodatki, za które inni kasują", is: "Ókeypis viðbætur sem aðrir rukka fyrir" },
  saved: { en: "Others charge", pl: "U konkurencji", is: "Aðrir rukka" },
};

const FreeExtras = () => {
  const { lang } = useLang();

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          {labels.title[lang]}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {extras.map((extra, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl bg-card border border-border p-4"
            >
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-sm font-semibold text-foreground">
                    {extra.title[lang]}
                  </h3>
                  <span className="text-[10px] text-muted-foreground line-through">{extra.saved}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  {extra.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeExtras;

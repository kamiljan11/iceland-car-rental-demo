import { Wifi, MapPin, Snowflake, Baby, Shield, Headphones } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import AuroraGlow from "@/components/svg/AuroraGlow";
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
    desc: { en: "Pre-loaded with Icelandic roads, F-roads & hidden spots", pl: "Z załadowanymi drogami Islandii, drogami F i ukrytymi miejscami", is: "Forhlaðin með íslenskum vegum og faldum stöðum" },
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
    desc: { en: "All ages — infant, toddler & booster seats free", pl: "Dla każdego wieku — niemowlęce, dziecięce i podwyższające za darmo", is: "Allir aldrar — ungbarnaókeypis" },
    saved: "€7/day",
  },
  {
    icon: Shield,
    title: { en: "Full Insurance Bundle", pl: "Pełny pakiet ubezpieczeń", is: "Full tryggingapakki" },
    desc: { en: "CDW + SCDW + gravel + sand & ash — zero excess", pl: "CDW + SCDW + żwir + piasek — zero udziału własnego", is: "CDW + SCDW + malarvörn + sandvörn — engin sjálfsábyrgð" },
    saved: "€25/day",
  },
  {
    icon: Headphones,
    title: { en: "24/7 Roadside Assist", pl: "Pomoc drogowa 24/7", is: "24/7 vegahjálp" },
    desc: { en: "Icelandic team on call — GPS-located rescue", pl: "Islandzki zespół na telefon — ratunek z lokalizacją GPS", is: "Íslenskt teymi á vakt — GPS björgun" },
    saved: "€6/day",
  },
];

const labels = {
  label: { en: "All included, zero extra fees", pl: "Wszystko w cenie, zero dopłat", is: "Allt innifalið, engin aukagjöld" },
  title: { en: "Free extras others charge for", pl: "Darmowe dodatki, za które inni kasują", is: "Ókeypis viðbætur sem aðrir rukka fyrir" },
  saved: { en: "Others charge", pl: "U konkurencji", is: "Aðrir rukka" },
};

const FreeExtras = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <AuroraGlow position="top-left" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
            {labels.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {labels.title[lang]}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {extras.map((extra, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border bg-card/60 p-5 sm:p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <extra.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                    {extra.title[lang]}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                    {extra.desc[lang]}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-primary/5 rounded-full px-2.5 py-1">
                    <span className="text-[10px] text-muted-foreground">{labels.saved[lang]}:</span>
                    <span className="text-xs font-semibold text-primary line-through decoration-primary/40">{extra.saved}</span>
                    <span className="text-[10px] font-bold text-emerald-400 ml-1">FREE</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeExtras;

import { Check, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const rows: {
  feature: Record<Lang, string>;
  us: true;
  them: "extra" | "seasonal" | boolean;
  saved?: string;
}[] = [
  { feature: { en: "CDW Insurance", pl: "Ubezpieczenie CDW", is: "CDW trygging" }, us: true, them: "extra", saved: "~€15/day" },
  { feature: { en: "SCDW (Super CDW)", pl: "SCDW (Super CDW)", is: "SCDW" }, us: true, them: "extra", saved: "~€20/day" },
  { feature: { en: "Gravel Protection", pl: "Ochrona przed żwirem", is: "Malarvörn" }, us: true, them: "extra", saved: "~€12/day" },
  { feature: { en: "Sand & Ash Protection", pl: "Ochrona przed piaskiem", is: "Sand- og öskuvörn" }, us: true, them: false },
  { feature: { en: "Zero Excess", pl: "Zerowy udział własny", is: "Engin sjálfsábyrgð" }, us: true, them: false },
  { feature: { en: "Zero Deposit Hold", pl: "Bez blokady depozytu", is: "Engin tryggingafjárhæð" }, us: true, them: false },
  { feature: { en: "Portable Wi-Fi", pl: "Przenośne Wi-Fi", is: "Ferða-WiFi" }, us: true, them: "extra", saved: "~€8/day" },
  { feature: { en: "GPS Navigation", pl: "Nawigacja GPS", is: "GPS leiðsögn" }, us: true, them: "extra", saved: "~€5/day" },
  { feature: { en: "Winter Tyres & Studs", pl: "Opony zimowe i kolce", is: "Vetrardekk og broddar" }, us: true, them: "extra", saved: "~€10/day" },
  { feature: { en: "Child Seats", pl: "Foteliki dziecięce", is: "Barnastólar" }, us: true, them: "extra", saved: "~€7/day" },
  { feature: { en: "Full Insurance Bundle", pl: "Pełny pakiet ubezpieczeń", is: "Full tryggingapakki" }, us: true, them: "extra", saved: "~€25/day" },
  { feature: { en: "24/7 Roadside Assist", pl: "Pomoc drogowa 24/7", is: "24/7 vegahjálp" }, us: true, them: "extra", saved: "~€6/day" },
];

const InsuranceCompare = () => {
  const { lang } = useLang();
  const labels = {
    title: { en: "What's included vs. others", pl: "Co jest w cenie vs. konkurencja", is: "Hvað er innifalið vs. aðrir" },
    us: { en: "NordCar", pl: "NordCar", is: "NordCar" },
    them: { en: "Others", pl: "Konkurencja", is: "Aðrir" },
    extra: { en: "Extra €€", pl: "Dodatkowe €€", is: "Auka €€" },
    seasonal: { en: "Seasonal", pl: "Sezonowo", is: "Árstíðabundið" },
  };

  return (
    <section id="insurance" className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          {labels.title[lang]}
        </h2>

        {/* Table */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[1fr_72px_72px] sm:grid-cols-[1fr_100px_100px] items-center px-5 sm:px-6 py-3.5 border-b border-border bg-secondary/40">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Feature</span>
            <span className="text-center">
              <span className="text-xs sm:text-sm font-bold text-primary">{labels.us[lang]}</span>
            </span>
            <span className="text-center">
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">{labels.them[lang]}</span>
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_72px_72px] sm:grid-cols-[1fr_100px_100px] items-center px-5 sm:px-6 py-2.5 transition-colors hover:bg-secondary/20 ${
                i !== rows.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <span className="text-foreground text-xs sm:text-sm leading-tight">
                {row.feature[lang]}
              </span>

              {/* NordCar column */}
              <span className="flex justify-center">
                <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </span>
              </span>

              {/* Others column */}
              <span className="flex justify-center">
                {row.them === true ? (
                  <Check className="w-3.5 h-3.5 text-muted-foreground/50" />
                ) : row.them === false ? (
                  <span className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-destructive/60" strokeWidth={3} />
                  </span>
                ) : (
                  <span className="text-[10px] sm:text-xs text-muted-foreground/70 font-medium">
                    {row.them === "extra" ? (row.saved || labels.extra[lang]) : labels.seasonal[lang]}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCompare;

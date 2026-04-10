import { Check, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const rows = [
  { feature: { en: "CDW Insurance", pl: "Ubezpieczenie CDW", is: "CDW trygging" }, us: true, them: "extra" },
  { feature: { en: "SCDW (Super CDW)", pl: "SCDW (Super CDW)", is: "SCDW" }, us: true, them: "extra" },
  { feature: { en: "Gravel Protection", pl: "Ochrona przed żwirem", is: "Malarvörn" }, us: true, them: "extra" },
  { feature: { en: "Sand & Ash Protection", pl: "Ochrona przed piaskiem", is: "Sand- og öskuvörn" }, us: true, them: false },
  { feature: { en: "Zero Excess", pl: "Zerowy udział własny", is: "Engin sjálfsábyrgð" }, us: true, them: false },
  { feature: { en: "Zero Deposit Hold", pl: "Bez blokady depozytu", is: "Engin tryggingafjárhæð" }, us: true, them: false },
  { feature: { en: "GPS Navigation", pl: "Nawigacja GPS", is: "GPS leiðsögn" }, us: true, them: "extra" },
  { feature: { en: "Winter Tyres", pl: "Opony zimowe", is: "Vetrardekk" }, us: true, them: "seasonal" },
  { feature: { en: "24/7 Roadside Assist", pl: "Pomoc drogowa 24/7", is: "24/7 vegahjálp" }, us: true, them: "extra" },
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
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          {labels.title[lang]}
        </h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_120px_120px] bg-secondary/50 px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold">
            <span />
            <span className="text-center text-primary">{labels.us[lang]}</span>
            <span className="text-center text-muted-foreground">{labels.them[lang]}</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_120px_120px] px-4 sm:px-6 py-3 text-sm items-center ${i % 2 === 0 ? "bg-card" : "bg-secondary/20"}`}
            >
              <span className="text-foreground text-xs sm:text-sm">{row.feature[lang]}</span>
              <span className="flex justify-center">
                <Check className="w-4 h-4 text-primary" />
              </span>
              <span className="flex justify-center">
                {row.them === true ? (
                  <Check className="w-4 h-4 text-muted-foreground" />
                ) : row.them === false ? (
                  <X className="w-4 h-4 text-muted-foreground/40" />
                ) : (
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {row.them === "extra" ? labels.extra[lang] : labels.seasonal[lang]}
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

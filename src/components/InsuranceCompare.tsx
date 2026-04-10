import { Check, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import AuroraGlow from "@/components/svg/AuroraGlow";

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
    label: { en: "Full coverage, zero surprises", pl: "Pełne pokrycie, zero niespodzianek", is: "Full vernd, engar óvart" },
    title: { en: "What's included vs. others", pl: "Co jest w cenie vs. konkurencja", is: "Hvað er innifalið vs. aðrir" },
    us: { en: "NordCar", pl: "NordCar", is: "NordCar" },
    them: { en: "Others", pl: "Konkurencja", is: "Aðrir" },
    extra: { en: "Extra €€", pl: "Dodatkowe €€", is: "Auka €€" },
    seasonal: { en: "Seasonal", pl: "Sezonowo", is: "Árstíðabundið" },
  };

  return (
    <section id="insurance" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <AuroraGlow position="bottom-left" />
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
            {labels.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {labels.title[lang]}
          </h2>
        </div>
        <div className="rounded-2xl border border-border overflow-hidden">
          {/* Header */}
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

import { Sun, Snowflake, Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const SeasonalSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.seasonal.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {t.seasonal.title[lang]}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          {/* Summer */}
          <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:border-moss/40 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-moss/10 flex items-center justify-center">
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-moss" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold">{t.seasonal.summer.title[lang]}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{t.seasonal.summer.period[lang]}</p>
              </div>
            </div>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
              {t.seasonal.summer.points[lang].map((p, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-secondary-foreground">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-moss mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Winter */}
          <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:border-primary/40 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Snowflake className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold">{t.seasonal.winter.title[lang]}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{t.seasonal.winter.period[lang]}</p>
              </div>
            </div>
            <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
              {t.seasonal.winter.points[lang].map((p, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-secondary-foreground">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;

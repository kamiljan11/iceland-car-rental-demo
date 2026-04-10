import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const USPSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <p className="text-accent font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 sm:mb-5">
            {t.usp.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-8 leading-tight">
            {t.usp.title1[lang]}
            <br />
            <span className="text-gradient-glacier">{t.usp.title2[lang]}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {t.usp.desc[lang]}
          </p>
        </div>

        {/* Three Zeros — minimal, typographic */}
        <div className="space-y-12 sm:space-y-16">
          {t.usp.zeros.map((zero, i) => (
            <div key={i} className="flex items-start gap-6 sm:gap-10">
              <div className="font-display text-5xl sm:text-7xl font-black text-primary/20 leading-none shrink-0 w-16 sm:w-24 text-right">
                0{i + 1}
              </div>
              <div className="pt-1 sm:pt-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {zero.title[lang]}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
                  {zero.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;

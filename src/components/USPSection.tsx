import { ShieldCheck, CreditCard, Eye, Clock, Headphones, Key } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const icons = [CreditCard, ShieldCheck, Eye];
const secondaryIcons = [Key, Clock, Headphones];

const USPSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-accent font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            {t.usp.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {t.usp.title1[lang]}
            <br />
            <span className="text-gradient-glacier">{t.usp.title2[lang]}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.usp.desc[lang]}
          </p>
        </div>

        {/* Three Zeros — hero USP cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {t.usp.zeros.map((zero, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group relative bg-card border border-border rounded-2xl p-6 sm:p-8 text-center hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="font-display text-4xl sm:text-5xl font-black text-primary mb-2">
                  0
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {zero.title[lang]}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {zero.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Secondary differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {t.usp.extras.map((extra, i) => {
            const Icon = secondaryIcons[i];
            return (
              <div key={i} className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card/50 border border-border/50">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1">{extra.title[lang]}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{extra.desc[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPSection;

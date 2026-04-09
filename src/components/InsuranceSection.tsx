import { Shield, Wind, Mountain, Droplets, Check, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const insuranceIcons = [Shield, Shield, Mountain, Wind, Droplets, Sparkles];

const InsuranceSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.insurance.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.insurance.title[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {t.insurance.desc[lang]}
          </p>
        </div>

        {/* Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible scrollbar-hide mb-8 sm:mb-12">
          {t.insurance.items.map((item, i) => {
            const Icon = insuranceIcons[i];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-colors shrink-0 w-[260px] sm:w-auto"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{item.title[lang]}</h3>
                    <span className="text-[10px] sm:text-xs text-primary font-medium">{item.tag[lang]}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-primary/20 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            {t.insurance.badges.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-secondary-foreground">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span>{b[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;

import { Shield, Wind, Mountain, Droplets, Check, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const insuranceIcons = [Shield, Shield, Mountain, Wind, Droplets, Sparkles];

const InsuranceSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            {t.insurance.label[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.insurance.title[lang]}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.insurance.desc[lang]}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.insurance.items.map((item, i) => {
            const Icon = insuranceIcons[i];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{item.title[lang]}</h3>
                    <span className="text-xs text-primary font-medium">{item.tag[lang]}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {t.insurance.badges.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-secondary-foreground">
                <Check className="w-4 h-4 text-primary" />
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

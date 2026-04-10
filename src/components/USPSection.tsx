import { ShieldCheck, Banknote, Headphones } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const icons = [ShieldCheck, Banknote, Headphones];

const USPSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-accent font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3">
            {t.usp.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t.usp.title1[lang]}{" "}
            <span className="text-gradient-glacier">{t.usp.title2[lang]}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            {t.usp.desc[lang]}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-8">
          {t.usp.zeros.map((zero, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 sm:p-8 text-center hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-2">
                  {zero.title[lang]}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {zero.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPSection;

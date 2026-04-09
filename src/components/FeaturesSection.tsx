import {
  Shield,
  MapPin,
  Clock,
  Headphones,
  Snowflake,
  CreditCard,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const featureIcons = [Shield, MapPin, Snowflake, Clock, Headphones, CreditCard];

const FeaturesSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.features.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.features.title[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            {t.features.desc[lang]}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {t.features.items.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{f.title[lang]}</h3>
                <p className="text-muted-foreground text-[11px] sm:text-sm leading-relaxed">
                  {f.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

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
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            {t.features.label[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.features.title[lang]}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.features.desc[lang]}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title[lang]}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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

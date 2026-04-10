import { Car, Users, Star, Calendar } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const TrustBadges = () => {
  const { lang } = useLang();

  const items = [
    { icon: Star, value: "4.9★", label: "Google & Trustpilot" },
    { icon: Calendar, value: "12+", label: t.stats.years[lang] },
    { icon: Car, value: "85+", label: t.stats.vehicles[lang] },
    { icon: Users, value: "14,000+", label: t.stats.customers[lang] },
  ];

  return (
    <section className="border-b border-border/30 bg-card/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-6">
        <div className="flex items-center justify-between sm:justify-center sm:gap-12">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-sm sm:text-lg font-bold text-foreground leading-tight">{item.value}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

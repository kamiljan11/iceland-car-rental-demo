import { Car, Users, Star, Calendar, Award, ShieldCheck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const TrustBadges = () => {
  const { lang } = useLang();

  const items = [
    { icon: Star, value: "4.9★", label: "Google & Trustpilot" },
    { icon: Calendar, value: "12+", label: t.stats.years[lang] },
    { icon: Car, value: "85+", label: t.stats.vehicles[lang] },
    { icon: Users, value: "14,000+", label: t.stats.customers[lang] },
    { icon: Award, value: t.trust.award[lang], label: t.trust.awardSub[lang] },
    { icon: ShieldCheck, value: t.trust.saf[lang], label: t.trust.safSub[lang] },
  ];

  return (
    <section className="border-b border-border/30 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-1.5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm sm:text-base font-bold text-foreground leading-tight">{item.value}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

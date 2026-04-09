import { Car, Users, Star, Calendar } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const stats = [
  { value: "12+", icon: Calendar, key: "years" as const },
  { value: "85+", icon: Car, key: "vehicles" as const },
  { value: "14,000+", icon: Users, key: "customers" as const },
  { value: "4.9", icon: Star, key: "rating" as const },
];

const StatsBar = () => {
  const { lang } = useLang();

  return (
    <section className="border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.key} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{t.stats[s.key][lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

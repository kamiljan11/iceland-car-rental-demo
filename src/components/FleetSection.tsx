import carSuv from "@/assets/car-suv.jpg";
import carCamper from "@/assets/car-camper.jpg";
import carCompact from "@/assets/car-compact.jpg";
import { Users, Fuel, Snowflake, MapPin, Mountain, AlertTriangle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const vehicleKeys = ["suv", "camper", "compact"] as const;
const images = { suv: carSuv, camper: carCamper, compact: carCompact };
const icons = [Users, Fuel, Snowflake];

const FleetSection = () => {
  const { lang } = useLang();

  return (
    <section id="fleet" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
          {t.fleet.label[lang]}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          {t.fleet.title[lang]}
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-16">
          {t.fleet.desc[lang]}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicleKeys.map((key) => {
            const v = t.vehicles[key];
            return (
              <div
                key={key}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={images[key]}
                    alt={v.name[lang]}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {v.tag[lang]}
                  </span>
                  {/* F-road badge */}
                  {v.froad && (
                    <span className="absolute top-4 right-4 bg-accent/90 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Mountain className="w-3 h-3" />
                      F-Road OK
                    </span>
                  )}
                  {!v.froad && (
                    <span className="absolute top-4 right-4 bg-destructive/80 text-destructive-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      No F-Roads
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-1">
                    {v.name[lang]}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {v.subtitle[lang]}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {v.features[lang].map((f: string, i: number) => {
                      const Icon = icons[i];
                      return (
                        <span
                          key={f}
                          className="flex items-center gap-1.5 text-sm text-secondary-foreground bg-secondary px-3 py-1.5 rounded-lg"
                        >
                          <Icon className="w-3.5 h-3.5 text-primary" />
                          {f}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span>{t.fleet.bestFor[lang]} {v.bestFor[lang]}</span>
                    </div>
                  </div>
                  {/* Age requirement */}
                  <div className="text-xs text-muted-foreground mb-4 bg-secondary/50 px-3 py-2 rounded-lg">
                    {lang === "pl"
                      ? `Min. wiek kierowcy: ${v.minAge} lat`
                      : lang === "is"
                      ? `Lágmarksaldur ökumanns: ${v.minAge} ára`
                      : `Minimum driver age: ${v.minAge} years`}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-primary font-bold text-lg">
                      {v.price[lang]}
                    </span>
                    <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {t.fleet.details[lang]}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;

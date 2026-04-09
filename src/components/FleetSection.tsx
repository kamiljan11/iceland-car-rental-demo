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
    <section id="fleet" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          {t.fleet.label[lang]}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          {t.fleet.title[lang]}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-10 sm:mb-16">
          {t.fleet.desc[lang]}
        </p>

        {/* Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto gap-5 sm:gap-8 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
          {vehicleKeys.map((key) => {
            const v = t.vehicles[key];
            return (
              <div
                key={key}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 shrink-0 w-[300px] sm:w-auto"
              >
                <div className="relative overflow-hidden h-44 sm:h-56">
                  <img
                    src={images[key]}
                    alt={v.name[lang]}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full">
                    {v.tag[lang]}
                  </span>
                  {v.froad && (
                    <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-accent/90 text-accent-foreground text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1">
                      <Mountain className="w-3 h-3" />
                      F-Road
                    </span>
                  )}
                  {!v.froad && (
                    <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-destructive/80 text-destructive-foreground text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      No F-Roads
                    </span>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-1">
                    {v.name[lang]}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    {v.subtitle[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {v.features[lang].map((f: string, i: number) => {
                      const Icon = icons[i];
                      return (
                        <span
                          key={f}
                          className="flex items-center gap-1 text-xs sm:text-sm text-secondary-foreground bg-secondary px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg"
                        >
                          <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                          {f}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-4 text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-5">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
                      <span>{t.fleet.bestFor[lang]} {v.bestFor[lang]}</span>
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4 bg-secondary/50 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                    {lang === "pl"
                      ? `Min. wiek kierowcy: ${v.minAge} lat`
                      : lang === "is"
                      ? `Lágmarksaldur ökumanns: ${v.minAge} ára`
                      : `Minimum driver age: ${v.minAge} years`}
                  </div>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                    <span className="text-primary font-bold text-base sm:text-lg">
                      {v.price[lang]}
                    </span>
                    <button className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {t.fleet.details[lang]}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll hint on mobile */}
        <p className="text-center text-[10px] text-muted-foreground mt-2 md:hidden">
          ← swipe to see more →
        </p>
      </div>
    </section>
  );
};

export default FleetSection;

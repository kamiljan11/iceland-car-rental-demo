import carSuv from "@/assets/car-suv.jpg";
import carCamper from "@/assets/car-camper.jpg";
import carCompact from "@/assets/car-compact.jpg";
import { Users, Fuel, Snowflake } from "lucide-react";
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
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-1">
                    {v.name[lang]}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {v.subtitle[lang]}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {v.features[lang].map((f, i) => {
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
                  <div className="flex items-center justify-between">
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

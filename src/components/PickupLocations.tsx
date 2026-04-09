import { MapPin, Clock, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const PickupLocations = () => {
  const { lang } = useLang();

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            {t.locations.label[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t.locations.title[lang]}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.locations.items.map((loc, i) => (
            <div
              key={i}
              className={`bg-card border rounded-2xl p-8 hover:border-primary/30 transition-colors ${
                i === 0 ? "border-primary/30 ring-1 ring-primary/10" : "border-border"
              }`}
            >
              {i === 0 && (
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {t.locations.main[lang]}
                </span>
              )}
              <h3 className="font-display text-xl font-bold mb-1">{loc.name[lang]}</h3>
              <p className="text-muted-foreground text-sm mb-5">{loc.address}</p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{loc.hours[lang]}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{loc.pickup[lang]}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{loc.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PickupLocations;

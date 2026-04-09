import { MapPin, Clock, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const PickupLocations = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.locations.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.locations.title[lang]}
          </h2>
        </div>

        {/* Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
          {t.locations.items.map((loc, i) => (
            <div
              key={i}
              className={`bg-card border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors shrink-0 w-[280px] sm:w-auto ${
                i === 0 ? "border-primary/30 ring-1 ring-primary/10" : "border-border"
              }`}
            >
              {i === 0 && (
                <span className="inline-block bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full mb-3 sm:mb-4">
                  {t.locations.main[lang]}
                </span>
              )}
              <h3 className="font-display text-lg sm:text-xl font-bold mb-1">{loc.name[lang]}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-5">{loc.address}</p>

              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                  <span>{loc.hours[lang]}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                  <span>{loc.pickup[lang]}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
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

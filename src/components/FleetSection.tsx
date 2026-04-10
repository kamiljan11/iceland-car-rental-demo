import carSuv from "@/assets/car-suv.jpg";
import carCamper from "@/assets/car-camper.jpg";
import carCompact from "@/assets/car-compact.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import { useState } from "react";
import DemoDialog from "@/components/DemoDialog";

const vehicleKeys = ["suv", "camper", "compact"] as const;
const images = { suv: carSuv, camper: carCamper, compact: carCompact };

const FleetSection = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);

  return (
    <>
      <section id="fleet" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.fleet.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.fleet.title[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12 sm:mb-16">
            {t.fleet.desc[lang]}
          </p>

          <div className="flex overflow-x-auto gap-5 sm:gap-8 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
            {vehicleKeys.map((key) => {
              const v = t.vehicles[key];
              return (
                <div
                  key={key}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 shrink-0 w-[280px] sm:w-auto"
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
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                      {v.tag[lang]}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg sm:text-xl font-semibold mb-1">
                      {v.name[lang]}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                      {v.subtitle[lang]}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-primary font-semibold text-base sm:text-lg">
                        {v.price[lang]}
                      </span>
                      <button
                        className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setDemo(true)}
                      >
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
      <DemoDialog open={demo} onOpenChange={setDemo} feature="details" />
    </>
  );
};

export default FleetSection;

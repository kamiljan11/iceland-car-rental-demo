import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DotGrid from "@/components/svg/DotGrid";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import DemoDialog from "@/components/DemoDialog";

import carSuv from "@/assets/car-suv.jpg";
import carSuv2 from "@/assets/car-suv-2.jpg";
import carCamper from "@/assets/car-camper.jpg";
import carCamper2 from "@/assets/car-camper-2.jpg";
import carCompact from "@/assets/car-compact.jpg";
import carCompact2 from "@/assets/car-compact-2.jpg";
import car4x4 from "@/assets/car-4x4.jpg";
import car4x42 from "@/assets/car-4x4-2.jpg";
import carElectric from "@/assets/car-electric.jpg";
import carElectric2 from "@/assets/car-electric-2.jpg";
import carLuxury from "@/assets/car-luxury.jpg";
import carLuxury2 from "@/assets/car-luxury-2.jpg";

const vehicleKeys = ["suv", "camper", "compact", "offroad", "electric", "luxury"] as const;

const images: Record<string, string[]> = {
  suv: [carSuv, carSuv2],
  camper: [carCamper, carCamper2],
  compact: [carCompact, carCompact2],
  offroad: [car4x4, car4x42],
  electric: [carElectric, carElectric2],
  luxury: [carLuxury, carLuxury2],
};

const ImageGallery = ({ imgs, alt }: { imgs: string[]; alt: string }) => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="relative overflow-hidden h-44 sm:h-56 group/gallery">
      <img
        src={imgs[idx]}
        alt={alt}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover transition-all duration-500"
      />
      {imgs.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setIdx((i) => (i - 1 + imgs.length) % imgs.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 backdrop-blur flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIdx((i) => (i + 1) % imgs.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 backdrop-blur flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {imgs.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const FleetSection = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);

  return (
    <>
      <section id="fleet" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        <DotGrid className="text-primary" />
        <div className="max-w-7xl mx-auto relative">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.fleet.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.fleet.title[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12 sm:mb-16">
            {t.fleet.desc[lang]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {vehicleKeys.map((key) => {
              const v = t.vehicles[key];
              return (
                <div
                  key={key}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
                >
                <div className="relative">
                  <ImageGallery imgs={images[key]} alt={v.name[lang]} />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
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

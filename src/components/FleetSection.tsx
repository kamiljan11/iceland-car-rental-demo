import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Luggage, Cog, Fuel, Zap, Mountain } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import VehicleDetailDialog from "@/components/VehicleDetailDialog";

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
type VehicleKey = typeof vehicleKeys[number];

const images: Record<string, string[]> = {
  suv: [carSuv, carSuv2],
  camper: [carCamper, carCamper2],
  compact: [carCompact, carCompact2],
  offroad: [car4x4, car4x42],
  electric: [carElectric, carElectric2],
  luxury: [carLuxury, carLuxury2],
};

const transmissionLabel = { automatic: "Auto", manual: "Manual" };
const fuelIcon = (fuel: string) => fuel === "electric" ? Zap : Fuel;

const ImageGallery = ({ imgs, alt }: { imgs: string[]; alt: string }) => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="relative overflow-hidden h-52 sm:h-64 group/gallery bg-secondary/30">
      <img
        src={imgs[idx]}
        alt={alt}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover object-[center_40%] transition-all duration-500"
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

const SpecChip = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex items-center gap-1.5 text-muted-foreground">
    <Icon className="w-3.5 h-3.5" />
    <span className="text-[11px] sm:text-xs">{label}</span>
  </div>
);

const FleetSection = () => {
  const { lang } = useLang();
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleKey | null>(null);

  return (
    <>
      <section id="fleet" className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 gap-2">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                {t.fleet.title[lang]}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-1">
                {t.fleet.desc[lang]}
              </p>
            </div>
            <p className="text-xs text-muted-foreground whitespace-nowrap">{t.fleet.label[lang]}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {vehicleKeys.map((key) => {
              const v = t.vehicles[key];
              const s = v.specs;
              const FuelIcon = fuelIcon(s.fuel);
              return (
                <div
                  key={key}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedVehicle(key)}
                >
                  <div className="relative">
                    <ImageGallery imgs={images[key]} alt={v.name[lang]} />
                    <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded">
                      {v.tag[lang]}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-semibold leading-tight">
                          {v.name[lang]}
                        </h3>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {v.subtitle[lang]}
                        </p>
                      </div>
                      <span className="text-primary font-bold text-sm sm:text-base whitespace-nowrap">
                        {v.price[lang]}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                      <SpecChip icon={Users} label={String(s.seats)} />
                      <SpecChip icon={Cog} label={transmissionLabel[s.transmission]} />
                      <SpecChip icon={FuelIcon} label={s.fuel === "electric" ? "EV" : s.fuel.charAt(0).toUpperCase() + s.fuel.slice(1)} />
                      {s.luggage > 0 && <SpecChip icon={Luggage} label={String(s.luggage)} />}
                      {v.froad && <SpecChip icon={Mountain} label="F-Road" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <VehicleDetailDialog
        open={selectedVehicle !== null}
        onOpenChange={(o) => { if (!o) setSelectedVehicle(null); }}
        vehicleKey={selectedVehicle}
        images={images}
      />
    </>
  );
};

export default FleetSection;

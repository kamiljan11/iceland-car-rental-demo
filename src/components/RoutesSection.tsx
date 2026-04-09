import routeRingRoad from "@/assets/route-ring-road.jpg";
import routeGoldenCircle from "@/assets/route-golden-circle.jpg";
import routeWestfjords from "@/assets/route-westfjords.jpg";
import routeSnaefellsnes from "@/assets/route-snaefellsnes.jpg";
import { Clock, MapPin, Mountain, Car } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const images = [routeRingRoad, routeGoldenCircle, routeWestfjords, routeSnaefellsnes];

const RoutesSection = () => {
  const { lang } = useLang();

  return (
    <section id="routes" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          {t.routes.label[lang]}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          {t.routes.title[lang]}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-10 sm:mb-16">
          {t.routes.desc[lang]}
        </p>

        {/* Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 md:overflow-visible scrollbar-hide">
          {t.routes.items.map((route, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 shrink-0 w-[300px] sm:w-auto"
            >
              <div className="relative h-40 sm:h-52 overflow-hidden">
                <img
                  src={images[i]}
                  alt={route.name[lang]}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-foreground">
                    {route.name[lang]}
                  </h3>
                </div>
              </div>
              <div className="p-4 sm:p-6 pt-2 sm:pt-3">
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {route.desc[lang]}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                  <span className="flex items-center gap-1 sm:gap-1.5 text-secondary-foreground">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    {route.duration[lang]}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 text-secondary-foreground">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    {route.distance[lang]}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 text-secondary-foreground">
                    <Mountain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    {route.difficulty[lang]}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 text-secondary-foreground">
                    <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    {route.vehicle[lang]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] text-muted-foreground mt-2 md:hidden">
          ← swipe to see more →
        </p>
      </div>
    </section>
  );
};

export default RoutesSection;

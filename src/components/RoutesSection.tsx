import routeRingRoad from "@/assets/route-ring-road.jpg";
import routeGoldenCircle from "@/assets/route-golden-circle.jpg";
import routeWestfjords from "@/assets/route-westfjords.jpg";
import routeSnaefellsnes from "@/assets/route-snaefellsnes.jpg";
import { Clock, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import TopoLines from "@/components/svg/TopoLines";

const images = [routeRingRoad, routeGoldenCircle, routeWestfjords, routeSnaefellsnes];

const RoutesSection = () => {
  const { lang } = useLang();

  return (
    <section id="routes" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <TopoLines className="absolute top-0 right-0 w-[500px] h-[400px] text-primary" />
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          {t.routes.label[lang]}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          {t.routes.title[lang]}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12 sm:mb-16">
          {t.routes.desc[lang]}
        </p>

        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 md:overflow-visible scrollbar-hide">
          {t.routes.items.map((route, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 shrink-0 w-[280px] sm:w-auto"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={images[i]}
                  alt={route.name[lang]}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <h3 className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 font-display text-lg sm:text-xl font-bold">
                  {route.name[lang]}
                </h3>
              </div>
              <div className="p-4 sm:p-6 pt-3">
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                  {route.desc[lang]}
                </p>
                <div className="flex gap-4 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {route.duration[lang]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {route.distance[lang]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;

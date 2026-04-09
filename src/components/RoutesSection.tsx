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
    <section id="routes" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
          {t.routes.label[lang]}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          {t.routes.title[lang]}
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-16">
          {t.routes.desc[lang]}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {t.routes.items.map((route, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={images[i]}
                  alt={route.name[lang]}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {route.name[lang]}
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-3">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {route.desc[lang]}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-secondary-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    {route.duration[lang]}
                  </span>
                  <span className="flex items-center gap-1.5 text-secondary-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {route.distance[lang]}
                  </span>
                  <span className="flex items-center gap-1.5 text-secondary-foreground">
                    <Mountain className="w-4 h-4 text-primary" />
                    {route.difficulty[lang]}
                  </span>
                  <span className="flex items-center gap-1.5 text-secondary-foreground">
                    <Car className="w-4 h-4 text-accent" />
                    {route.vehicle[lang]}
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

import { Clock, MapPin, Mountain, Car } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import TopoLines from "@/components/svg/TopoLines";

import routeRingRoad from "@/assets/route-ringroad.jpg";
import routeGoldenCircle from "@/assets/route-goldencircle.jpg";
import routeWestfjords from "@/assets/route-westfjords.jpg";
import routeSnaefellsnes from "@/assets/route-snaefellsnes.jpg";

const routes = [
  {
    img: routeRingRoad,
    name: { en: "Ring Road", pl: "Ring Road", is: "Hringvegurinn" },
    days: "7–10",
    km: "1,322",
    highlights: { en: "Waterfalls, glaciers, volcanic beaches", pl: "Wodospady, lodowce, wulkaniczne plaże", is: "Fossar, jöklar, eldfjallastrandir" },
    difficulty: { en: "Easy – paved road", pl: "Łatwa – asfalt", is: "Auðvelt – malbikaður vegur" },
    recommended: { en: "Any car", pl: "Każdy samochód", is: "Hvaða bíll sem er" },
  },
  {
    img: routeGoldenCircle,
    name: { en: "Golden Circle", pl: "Złoty Krąg", is: "Gullni hringurinn" },
    days: "1",
    km: "230",
    highlights: { en: "Geysir, Gullfoss, Þingvellir", pl: "Geysir, Gullfoss, Þingvellir", is: "Geysir, Gullfoss, Þingvellir" },
    difficulty: { en: "Easy – day trip", pl: "Łatwa – jednodniowa", is: "Auðvelt – dagsferð" },
    recommended: { en: "Any car", pl: "Każdy samochód", is: "Hvaða bíll sem er" },
  },
  {
    img: routeWestfjords,
    name: { en: "Westfjords", pl: "Westfjordy", is: "Vestfirðir" },
    days: "4–5",
    km: "950",
    highlights: { en: "Remote fjords, Dynjandi waterfall, cliffs", pl: "Odległe fiordy, wodospad Dynjandi, klify", is: "Afskekktir firðir, Dynjandi, klettar" },
    difficulty: { en: "Moderate – gravel roads", pl: "Średnia – drogi żwirowe", is: "Miðlungs – malarvegir" },
    recommended: { en: "SUV / 4×4", pl: "SUV / 4×4", is: "Jeppi / 4×4" },
  },
  {
    img: routeSnaefellsnes,
    name: { en: "Snæfellsnes", pl: "Snæfellsnes", is: "Snæfellsnes" },
    days: "2–3",
    km: "400",
    highlights: { en: "Kirkjufell, lava fields, Snæfellsjökull", pl: "Kirkjufell, pola lawowe, Snæfellsjökull", is: "Kirkjufell, hraunbreiður, Snæfellsjökull" },
    difficulty: { en: "Easy – mostly paved", pl: "Łatwa – głównie asfalt", is: "Auðvelt – aðallega malbikað" },
    recommended: { en: "Any car", pl: "Każdy samochód", is: "Hvaða bíll sem er" },
  },
];

const ItinerarySection = () => {
  const { lang } = useLang();
  const it = t.itinerary;

  return (
    <section id="routes" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <TopoLines className="absolute top-0 right-0 w-[500px] h-[400px] text-primary" />
      <div className="max-w-7xl mx-auto relative">
        <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          {it.label[lang]}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          {it.title[lang]}
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12 sm:mb-16">
          {it.desc[lang]}
        </p>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {routes.map((route, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={route.img}
                  alt={route.name[lang]}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    {route.name[lang]}
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{route.days} {lang === "en" ? "days" : lang === "pl" ? "dni" : "dagar"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{route.km} km</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                    <Mountain className="w-3.5 h-3.5 text-primary" />
                    <span>{route.difficulty[lang]}</span>
                  </div>
                </div>
                <p className="text-secondary-foreground text-sm mb-3">{route.highlights[lang]}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Car className="w-3.5 h-3.5 text-accent" />
                  <span>{lang === "en" ? "Recommended" : lang === "pl" ? "Zalecane" : "Mælt með"}: <strong className="text-foreground">{route.recommended[lang]}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;

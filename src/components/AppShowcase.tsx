import { useState, useEffect } from "react";
import { MapPin, Navigation, Cloud, AlertTriangle, Fuel, Phone, ChevronRight, Sparkles, Eye } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const screens = [
  {
    id: "map",
    tab: { en: "Live Map", pl: "Mapa", is: "Kort" },
    title: { en: "Your route, live", pl: "Twoja trasa na żywo", is: "Leiðin þín, í beinni" },
    desc: { en: "Offline maps with your itinerary, fuel stops, and hidden gems marked.", pl: "Mapy offline z trasą, stacjami paliw i ukrytymi perełkami.", is: "Ónettengd kort með leiðinni, eldsneytissstöðvum og faldum gimsteinum." },
  },
  {
    id: "weather",
    tab: { en: "Weather", pl: "Pogoda", is: "Veður" },
    title: { en: "Road-aware weather", pl: "Pogoda na trasie", is: "Veður á leiðinni" },
    desc: { en: "Hourly forecasts along your route. Wind, ice, and visibility alerts before you drive.", pl: "Prognoza godzinowa na trasie. Alerty wiatru, lodu i widoczności.", is: "Klukkutímaspá á leiðinni. Vindur, ís og skyggni viðvaranir." },
  },
  {
    id: "roads",
    tab: { en: "Road Status", pl: "Stan dróg", is: "Vegaástand" },
    title: { en: "Real-time road conditions", pl: "Warunki drogowe w czasie rzeczywistym", is: "Rauntíma vegaaðstæður" },
    desc: { en: "Live data from road.is — closures, ice warnings, and F-road access status.", pl: "Dane z road.is — zamknięcia, ostrzeżenia, dostęp do dróg F.", is: "Gögn frá road.is — lokanir, ísviðvaranir og F-vegaaðgangur." },
  },
  {
    id: "assist",
    tab: { en: "SOS", pl: "SOS", is: "SOS" },
    title: { en: "One-tap roadside rescue", pl: "Pomoc drogowa jednym kliknięciem", is: "Vegabjörgun með einum smelli" },
    desc: { en: "GPS location sent automatically. We dispatch help to your exact position, 24/7.", pl: "Lokalizacja GPS wysłana automatycznie. Wysyłamy pomoc 24/7.", is: "GPS staðsetning send sjálfkrafa. Við sendum aðstoð 24/7." },
  },
];

const PhoneMockup = ({ activeScreen, lang }: { activeScreen: number; lang: Lang }) => {
  const screen = screens[activeScreen];

  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px]">
      {/* Phone frame */}
      <div className="relative bg-card border-2 border-border rounded-[2rem] p-2 shadow-2xl shadow-black/40">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-card rounded-b-xl z-10" />

        {/* Screen */}
        <div className="bg-background rounded-[1.5rem] overflow-hidden aspect-[9/19]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-6 pb-2 text-[9px] text-muted-foreground">
            <span>9:41</span>
            <span>NordCar</span>
            <span>●●●</span>
          </div>

          {/* Screen content based on active */}
          {activeScreen === 0 && (
            <div className="px-4 pt-2">
              <div className="bg-secondary/50 rounded-xl h-32 sm:h-40 mb-3 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  {/* Simplified map lines */}
                  <svg viewBox="0 0 200 160" className="w-full h-full">
                    <path d="M20 140 C40 100, 60 120, 80 80 C100 40, 140 60, 180 30" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
                    <circle cx="20" cy="140" r="4" fill="hsl(var(--accent))" />
                    <circle cx="80" cy="80" r="3" fill="hsl(var(--primary))" />
                    <circle cx="180" cy="30" r="4" fill="hsl(var(--primary))" />
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <Navigation className="w-5 h-5 text-primary mb-1" />
                  <span className="text-[10px] text-muted-foreground">Ring Road</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-3 py-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-[10px] text-foreground">Seljalandsfoss — 12 km</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-3 py-2">
                  <Fuel className="w-3 h-3 text-accent" />
                  <span className="text-[10px] text-foreground">N1 Vík — 45 km</span>
                </div>
              </div>
            </div>
          )}

          {activeScreen === 1 && (
            <div className="px-4 pt-2">
              <div className="text-center mb-3">
                <Cloud className="w-8 h-8 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">7°C</p>
                <p className="text-[10px] text-muted-foreground">Partly cloudy · Wind 15 km/h</p>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                {["12:00", "15:00", "18:00", "21:00"].map((t, i) => (
                  <div key={t} className="bg-secondary/30 rounded-lg py-2 text-center">
                    <p className="text-[8px] text-muted-foreground">{t}</p>
                    <p className="text-[10px] font-semibold text-foreground">{[7, 6, 4, 3][i]}°</p>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3 text-accent" />
                  <span className="text-[10px] font-medium text-accent">Wind alert at Dyrhólaey</span>
                </div>
              </div>
            </div>
          )}

          {activeScreen === 2 && (
            <div className="px-4 pt-2">
              <div className="space-y-2">
                {[
                  { road: "Route 1 (South)", status: "Open", color: "text-emerald-400" },
                  { road: "Route 1 (East)", status: "Open", color: "text-emerald-400" },
                  { road: "F26 Sprengisandur", status: "Closed", color: "text-destructive" },
                  { road: "F35 Kjalvegur", status: "Closed", color: "text-destructive" },
                  { road: "Route 54 Snæfellsnes", status: "Icy", color: "text-accent" },
                ].map((r) => (
                  <div key={r.road} className="flex items-center justify-between bg-secondary/30 rounded-lg px-3 py-2">
                    <span className="text-[10px] text-foreground">{r.road}</span>
                    <span className={`text-[9px] font-semibold ${r.color}`}>{r.status}</span>
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-muted-foreground text-center mt-3">Source: road.is · Updated 5 min ago</p>
            </div>
          )}

          {activeScreen === 3 && (
            <div className="px-4 pt-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mb-3">
                <Phone className="w-7 h-7 text-destructive" />
              </div>
              <p className="text-sm font-bold text-foreground mb-1">
                {lang === "en" ? "Emergency?" : lang === "pl" ? "Nagły wypadek?" : "Neyðartilvik?"}
              </p>
              <p className="text-[10px] text-muted-foreground text-center mb-4 px-2">
                {lang === "en" ? "Tap to call. GPS location sent automatically." : lang === "pl" ? "Dotknij, by zadzwonić. Lokalizacja GPS wysłana automatycznie." : "Snertu til að hringja. GPS staðsetning send sjálfkrafa."}
              </p>
              <div className="w-full bg-destructive/90 text-destructive-foreground rounded-xl py-3 text-center text-xs font-semibold">
                {lang === "en" ? "Call NordCar Rescue" : lang === "pl" ? "Zadzwoń po pomoc" : "Hringdu í NordCar björgun"}
              </div>
              <p className="text-[8px] text-muted-foreground mt-3">24/7 · +354 123 4567</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AppShowcase = () => {
  const { lang } = useLang();
  const [active, setActive] = useState(0);

  // Auto-cycle every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const labels = {
    title: { en: "Free app with every booking", pl: "Darmowa aplikacja do każdej rezerwacji", is: "Ókeypis app með hverri bókun" },
    desc: { en: "Offline maps, weather, road conditions, and emergency help — all in your pocket.", pl: "Mapy offline, pogoda, warunki drogowe i pomoc awaryjna — w Twojej kieszeni.", is: "Ónettengd kort, veður, vegaaðstæður og neyðaraðstoð — allt í vasanum." },
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-secondary/30 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text side */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              {labels.title[lang]}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-8">
              {labels.desc[lang]}
            </p>

            <div className="space-y-1">
              {screens.map((screen, i) => (
                <button
                  key={screen.id}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-xl px-4 py-3 transition-all duration-300 flex items-center justify-between group ${
                    active === i
                      ? "bg-card border border-primary/30"
                      : "hover:bg-card/50"
                  }`}
                >
                  <div>
                    <h3 className={`text-sm font-semibold ${active === i ? "text-primary" : "text-foreground"}`}>
                      {screen.title[lang]}
                    </h3>
                    <p className={`text-xs mt-0.5 leading-relaxed ${active === i ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
                      {screen.desc[lang]}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ml-3 transition-colors ${active === i ? "text-primary" : "text-muted-foreground/30"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Phone side */}
          <div className="flex justify-center">
            <PhoneMockup activeScreen={active} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;

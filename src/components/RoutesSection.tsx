import { Check, MapPin, Cloud, Gem, AlertTriangle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import TopoLines from "@/components/svg/TopoLines";
import DemoDialog from "@/components/DemoDialog";
import { useState, useEffect } from "react";

const screens = [
  {
    icon: MapPin,
    title: { en: "Custom Routes", pl: "Trasy na miarę", is: "Sérsniðnar leiðir" },
    desc: { en: "Day-by-day itinerary built by locals", pl: "Plan dzień po dniu od lokalnych", is: "Dag-fyrir-dag leið frá heimamönnum" },
    color: "text-primary",
    bg: "bg-primary/20",
    mockContent: "route",
  },
  {
    icon: Cloud,
    title: { en: "Live Weather", pl: "Pogoda na żywo", is: "Lifandi veður" },
    desc: { en: "Real-time forecasts along your route", pl: "Prognoza pogody na twojej trasie", is: "Rauntímaveðurspá á leiðinni" },
    color: "text-sky-400",
    bg: "bg-sky-400/20",
    mockContent: "weather",
  },
  {
    icon: Gem,
    title: { en: "Hidden Gems", pl: "Ukryte perełki", is: "Faldir gimsteinar" },
    desc: { en: "Secret spots you won't find on Google", pl: "Miejsca których nie ma w Google", is: "Leyndir staðir sem þú finnur ekki á Google" },
    color: "text-amber-400",
    bg: "bg-amber-400/20",
    mockContent: "gems",
  },
  {
    icon: AlertTriangle,
    title: { en: "Road Alerts", pl: "Alerty drogowe", is: "Vegaviðvaranir" },
    desc: { en: "Closures, conditions & F-road status", pl: "Zamknięcia, warunki i drogi F", is: "Lokanir, aðstæður og F-vegir" },
    color: "text-red-400",
    bg: "bg-red-400/20",
    mockContent: "alerts",
  },
];

const PhoneScreen = ({ active }: { active: number }) => {
  return (
    <div className="relative w-[260px] sm:w-[300px] mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[3px] border-border/60 bg-card overflow-hidden shadow-2xl shadow-primary/10">
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1 bg-card">
          <div className="w-20 h-5 bg-background rounded-full" />
        </div>
        {/* Screen area */}
        <div className="relative h-[420px] sm:h-[480px] bg-background overflow-hidden">
          {screens.map((screen, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700"
              style={{
                opacity: active === i ? 1 : 0,
                transform: active === i ? "scale(1) translateY(0)" : "scale(0.95) translateY(10px)",
              }}
            >
              {screen.mockContent === "route" && <RouteScreen />}
              {screen.mockContent === "weather" && <WeatherScreen />}
              {screen.mockContent === "gems" && <GemsScreen />}
              {screen.mockContent === "alerts" && <AlertsScreen />}
            </div>
          ))}
        </div>
        {/* Bottom bar */}
        <div className="flex justify-around py-3 bg-card border-t border-border/30">
          {["Home", "Itinerary", "Weather"].map((label, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-4 h-4 rounded-sm ${i === 1 ? "bg-primary" : "bg-muted-foreground/30"}`} />
              <span className={`text-[8px] ${i === 1 ? "text-primary" : "text-muted-foreground/50"}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Glow */}
      <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl -z-10" />
    </div>
  );
};

const RouteScreen = () => (
  <div className="w-full space-y-3">
    <p className="text-xs font-semibold text-foreground">Iceland</p>
    <div className="w-full h-36 rounded-xl bg-muted/30 relative overflow-hidden">
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <path d="M40,90 Q60,70 80,75 T120,50 T160,40" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="90" r="4" fill="hsl(var(--primary))" />
        <circle cx="80" cy="75" r="3" fill="hsl(var(--primary))" opacity="0.7" />
        <circle cx="120" cy="50" r="3" fill="hsl(var(--primary))" opacity="0.7" />
        <circle cx="160" cy="40" r="4" fill="hsl(var(--primary))" />
        <text x="30" y="102" fontSize="6" fill="hsl(var(--muted-foreground))">Reykjavík</text>
        <text x="145" y="35" fontSize="6" fill="hsl(var(--muted-foreground))">Akureyri</text>
      </svg>
    </div>
    {[1, 2, 3].map((d) => (
      <div key={d} className="flex items-center gap-2 bg-muted/20 rounded-lg px-3 py-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <div className="flex-1">
          <p className="text-[10px] font-medium text-foreground">Day {d}</p>
          <p className="text-[8px] text-muted-foreground">120 km · 3 stops</p>
        </div>
      </div>
    ))}
  </div>
);

const WeatherScreen = () => (
  <div className="w-full space-y-3">
    <p className="text-xs font-semibold text-foreground">Weather Along Route</p>
    {[
      { loc: "Reykjavík", temp: "8°C", icon: "☀️", wind: "12 km/h" },
      { loc: "Vík", temp: "5°C", icon: "🌧️", wind: "25 km/h" },
      { loc: "Jökulsárlón", temp: "3°C", icon: "🌨️", wind: "18 km/h" },
      { loc: "Akureyri", temp: "6°C", icon: "⛅", wind: "8 km/h" },
    ].map((w) => (
      <div key={w.loc} className="flex items-center gap-3 bg-muted/20 rounded-lg px-3 py-2.5">
        <span className="text-lg">{w.icon}</span>
        <div className="flex-1">
          <p className="text-[10px] font-medium text-foreground">{w.loc}</p>
          <p className="text-[8px] text-muted-foreground">Wind: {w.wind}</p>
        </div>
        <span className="text-sm font-bold text-foreground">{w.temp}</span>
      </div>
    ))}
  </div>
);

const GemsScreen = () => (
  <div className="w-full space-y-3">
    <p className="text-xs font-semibold text-foreground">Hidden Gems Nearby</p>
    {[
      { name: "Secret Hot Spring", dist: "2.3 km", rating: "4.9★" },
      { name: "Abandoned Farm", dist: "5.1 km", rating: "4.7★" },
      { name: "Canyon Viewpoint", dist: "8.4 km", rating: "4.8★" },
    ].map((g) => (
      <div key={g.name} className="bg-muted/20 rounded-lg px-3 py-2.5">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] font-medium text-foreground">{g.name}</p>
          <span className="text-[9px] text-amber-400 font-semibold">{g.rating}</span>
        </div>
        <p className="text-[8px] text-muted-foreground">{g.dist} from route · Local favorite</p>
      </div>
    ))}
    <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
      <Gem className="w-3 h-3 text-primary" />
      <p className="text-[9px] text-primary font-medium">12 more gems on your route</p>
    </div>
  </div>
);

const AlertsScreen = () => (
  <div className="w-full space-y-3">
    <p className="text-xs font-semibold text-foreground">Road Alerts</p>
    <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5">
      <div className="flex items-center gap-2 mb-1">
        <AlertTriangle className="w-3 h-3 text-red-400" />
        <p className="text-[10px] font-medium text-red-400">Road 1 — Closure</p>
      </div>
      <p className="text-[8px] text-muted-foreground">Between Vík and Höfn · Detour via 208</p>
    </div>
    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2.5">
      <div className="flex items-center gap-2 mb-1">
        <AlertTriangle className="w-3 h-3 text-amber-400" />
        <p className="text-[10px] font-medium text-amber-400">F-Road F35 — Caution</p>
      </div>
      <p className="text-[8px] text-muted-foreground">River crossing water level high</p>
    </div>
    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2.5">
      <div className="flex items-center gap-2 mb-1">
        <Check className="w-3 h-3 text-emerald-400" />
        <p className="text-[10px] font-medium text-emerald-400">Ring Road — Clear</p>
      </div>
      <p className="text-[8px] text-muted-foreground">All sections open · Good conditions</p>
    </div>
  </div>
);

const ItinerarySection = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);
  const it = t.itinerary;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="routes" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        <TopoLines className="absolute top-0 right-0 w-[500px] h-[400px] text-primary" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — content */}
            <div>
              <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
                {it.label[lang]}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5">
                {it.title[lang]}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-8">
                {it.desc[lang]}
              </p>

              {/* Feature indicators */}
              <div className="space-y-2 mb-8">
                {screens.map((screen, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreen(i)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeScreen === i
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-transparent hover:bg-muted/30"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${activeScreen === i ? screen.bg : "bg-muted/30"} flex items-center justify-center shrink-0 transition-colors`}>
                      <screen.icon className={`w-4 h-4 ${activeScreen === i ? screen.color : "text-muted-foreground"} transition-colors`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${activeScreen === i ? "text-foreground" : "text-muted-foreground"} transition-colors`}>
                        {screen.title[lang]}
                      </p>
                      <p className={`text-xs ${activeScreen === i ? "text-muted-foreground" : "text-muted-foreground/60"} transition-colors`}>
                        {screen.desc[lang]}
                      </p>
                    </div>
                    {activeScreen === i && (
                      <div className="ml-auto w-1.5 h-8 rounded-full bg-primary shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setDemo(true)}
                className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                {it.cta[lang]}
              </button>
            </div>

            {/* Right — animated phone */}
            <div className="flex justify-center lg:justify-end">
              <PhoneScreen active={activeScreen} />
            </div>
          </div>
        </div>
      </section>
      <DemoDialog open={demo} onOpenChange={setDemo} feature="generic" />
    </>
  );
};

export default ItinerarySection;

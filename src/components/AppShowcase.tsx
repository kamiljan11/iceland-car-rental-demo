import { useState, useEffect } from "react";
import { MapPin, Navigation, Cloud, Sparkles, Zap, Mountain, Phone, Camera, Route, ChevronRight, Star, Thermometer, Wind, Droplets, Clock, Battery, Wifi, Signal } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const features = [
  { icon: Route, label: { en: "AI Route Planner", pl: "Planer tras AI", is: "AI leiðarskipulag" }, highlight: true },
  { icon: Navigation, label: { en: "Offline Maps", pl: "Mapy offline", is: "Ónettengd kort" } },
  { icon: Sparkles, label: { en: "Aurora Alerts", pl: "Alerty zorzy", is: "Norðurljósaviðvaranir" } },
  { icon: Mountain, label: { en: "Hiking Trails", pl: "Szlaki", is: "Gönguleiðir" } },
  { icon: Cloud, label: { en: "Road Weather", pl: "Pogoda na trasie", is: "Vegaveður" } },
  { icon: Camera, label: { en: "Live Road Cams", pl: "Kamery drogowe", is: "Vegamyndavélar" } },
  { icon: MapPin, label: { en: "Secret Spots", pl: "Ukryte miejsca", is: "Leyndir staðir" } },
  { icon: Zap, label: { en: "EV Charging", pl: "Ładowarki EV", is: "Hleðslustöðvar" } },
  { icon: Phone, label: { en: "24/7 SOS", pl: "SOS 24/7", is: "SOS 24/7" } },
];

/* ── Status bar ── */
const StatusBar = () => (
  <div className="flex items-center justify-between px-4 pt-2.5 pb-1">
    <span className="text-[8px] font-semibold text-foreground">9:41</span>
    <div className="w-16 h-[18px] bg-foreground/10 rounded-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-1 bg-foreground/30 rounded-full" />
      </div>
    </div>
    <div className="flex items-center gap-0.5">
      <Signal className="w-2.5 h-2.5 text-foreground/60" />
      <Wifi className="w-2.5 h-2.5 text-foreground/60" />
      <Battery className="w-3 h-2.5 text-foreground/60" />
    </div>
  </div>
);

/* ── Bottom tab bar ── */
const TabBar = ({ active }: { active: number }) => {
  const tabs = [
    { icon: Route, label: "Route" },
    { icon: MapPin, label: "Explore" },
    { icon: Sparkles, label: "Aurora" },
    { icon: Cloud, label: "Weather" },
    { icon: Phone, label: "SOS" },
  ];
  return (
    <div className="flex items-center justify-around px-1 py-1.5 border-t border-border/40 bg-card/80 backdrop-blur-sm">
      {tabs.map((tab, i) => (
        <div key={tab.label} className="flex flex-col items-center gap-0.5">
          <tab.icon className={`w-3 h-3 ${i === active ? "text-primary" : "text-muted-foreground/50"}`} />
          <span className={`text-[5px] ${i === active ? "text-primary font-semibold" : "text-muted-foreground/50"}`}>{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

/* ── Screen 1: AI Route Planner ── */
const RouteScreen = ({ lang }: { lang: Lang }) => (
  <div className="flex flex-col h-full">
    <StatusBar />
    {/* Header */}
    <div className="px-3 pt-1 pb-2">
      <p className="text-[7px] text-muted-foreground">
        {lang === "en" ? "Good morning" : lang === "pl" ? "Dzień dobry" : "Góðan daginn"} 👋
      </p>
      <p className="text-[10px] font-bold text-foreground">
        {lang === "en" ? "Plan your trip" : lang === "pl" ? "Zaplanuj podróż" : "Skipuleggðu ferðina"}
      </p>
    </div>
    {/* Search bar */}
    <div className="mx-3 bg-secondary/50 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 mb-2">
      <MapPin className="w-2.5 h-2.5 text-muted-foreground/60" />
      <span className="text-[7px] text-muted-foreground/60">
        {lang === "en" ? "Where do you want to go?" : lang === "pl" ? "Dokąd chcesz jechać?" : "Hvert viltu fara?"}
      </span>
    </div>
    {/* AI suggestion card */}
    <div className="mx-3 bg-primary/10 border border-primary/20 rounded-xl p-2.5 mb-2">
      <div className="flex items-center gap-1 mb-1.5">
        <Sparkles className="w-2.5 h-2.5 text-primary" />
        <span className="text-[7px] font-semibold text-primary">AI Recommended</span>
      </div>
      <p className="text-[8px] font-semibold text-foreground mb-1">
        {lang === "en" ? "South Coast Adventure" : lang === "pl" ? "Przygoda na Południu" : "Suðurströnd ævintýri"}
      </p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[6px] text-muted-foreground bg-secondary/60 px-1.5 py-0.5 rounded-full">5 {lang === "en" ? "days" : lang === "pl" ? "dni" : "dagar"}</span>
        <span className="text-[6px] text-muted-foreground bg-secondary/60 px-1.5 py-0.5 rounded-full">8 {lang === "en" ? "stops" : lang === "pl" ? "przystanków" : "stopp"}</span>
        <span className="text-[6px] text-muted-foreground bg-secondary/60 px-1.5 py-0.5 rounded-full">340 km</span>
      </div>
      {/* Mini map */}
      <div className="bg-secondary/40 rounded-lg h-14 relative overflow-hidden">
        <svg viewBox="0 0 200 60" className="absolute inset-0 w-full h-full">
          {/* Map grid lines */}
          <line x1="0" y1="15" x2="200" y2="15" stroke="hsl(var(--border))" strokeWidth="0.3" />
          <line x1="0" y1="30" x2="200" y2="30" stroke="hsl(var(--border))" strokeWidth="0.3" />
          <line x1="0" y1="45" x2="200" y2="45" stroke="hsl(var(--border))" strokeWidth="0.3" />
          <line x1="50" y1="0" x2="50" y2="60" stroke="hsl(var(--border))" strokeWidth="0.3" />
          <line x1="100" y1="0" x2="100" y2="60" stroke="hsl(var(--border))" strokeWidth="0.3" />
          <line x1="150" y1="0" x2="150" y2="60" stroke="hsl(var(--border))" strokeWidth="0.3" />
          {/* Route path */}
          <path d="M20 45 C40 40, 55 25, 75 30 C95 35, 110 15, 135 20 C155 24, 170 18, 185 12" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Stop markers */}
          <circle cx="20" cy="45" r="3.5" fill="hsl(var(--primary))" />
          <circle cx="20" cy="45" r="1.5" fill="white" />
          <circle cx="75" cy="30" r="2.5" fill="hsl(var(--primary))" opacity="0.7" />
          <circle cx="135" cy="20" r="2.5" fill="hsl(var(--primary))" opacity="0.7" />
          <circle cx="185" cy="12" r="3.5" fill="hsl(var(--accent))" />
          <circle cx="185" cy="12" r="1.5" fill="white" />
          {/* Labels */}
          <text x="20" y="55" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="4" fontWeight="600">Reykjavík</text>
          <text x="75" y="40" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="3.5">Seljalandsfoss</text>
          <text x="135" y="30" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="3.5">Skógafoss</text>
          <text x="185" y="22" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="4" fontWeight="600">Vík</text>
        </svg>
      </div>
    </div>
    {/* Quick actions */}
    <div className="mx-3 grid grid-cols-3 gap-1.5 mb-2">
      {[
        { icon: Mountain, label: lang === "en" ? "Waterfalls" : lang === "pl" ? "Wodospady" : "Fossar", color: "text-blue-400" },
        { icon: Thermometer, label: lang === "en" ? "Hot Springs" : lang === "pl" ? "Gorące źródła" : "Heitar laugar", color: "text-orange-400" },
        { icon: Camera, label: lang === "en" ? "Viewpoints" : lang === "pl" ? "Widoki" : "Útsýni", color: "text-emerald-400" },
      ].map((item) => (
        <div key={item.label} className="bg-secondary/40 rounded-lg py-2 flex flex-col items-center gap-1">
          <item.icon className={`w-3 h-3 ${item.color}`} />
          <span className="text-[5.5px] text-muted-foreground font-medium">{item.label}</span>
        </div>
      ))}
    </div>
    {/* Recent trip */}
    <div className="mx-3 bg-secondary/30 rounded-lg px-2.5 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center">
          <Clock className="w-3 h-3 text-primary" />
        </div>
        <div>
          <p className="text-[7px] font-medium text-foreground">Golden Circle</p>
          <p className="text-[5.5px] text-muted-foreground">2 {lang === "en" ? "days ago" : lang === "pl" ? "dni temu" : "dögum síðan"}</p>
        </div>
      </div>
      <ChevronRight className="w-2.5 h-2.5 text-muted-foreground/50" />
    </div>
    <div className="flex-1" />
    <TabBar active={0} />
  </div>
);

/* ── Screen 2: Aurora Alert ── */
const AuroraScreen = ({ lang }: { lang: Lang }) => (
  <div className="flex flex-col h-full">
    <StatusBar />
    {/* Header */}
    <div className="px-3 pt-1 pb-2 flex items-center justify-between">
      <p className="text-[10px] font-bold text-foreground">
        {lang === "en" ? "Aurora Forecast" : lang === "pl" ? "Prognoza zorzy" : "Norðurljósaspá"}
      </p>
      <div className="bg-green-500/20 px-1.5 py-0.5 rounded-full">
        <span className="text-[6px] font-semibold text-green-400">● LIVE</span>
      </div>
    </div>
    {/* KP Index circle */}
    <div className="mx-auto relative w-16 h-16 mb-2">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
        <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="140 176" strokeLinecap="round" transform="rotate(-90 32 32)" />
        <circle cx="32" cy="32" r="20" fill="hsl(var(--primary)/0.08)" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[14px] font-black text-primary leading-none">5</span>
        <span className="text-[6px] text-muted-foreground font-medium">KP Index</span>
      </div>
    </div>
    {/* Tonight card */}
    <div className="mx-3 bg-primary/10 border border-primary/20 rounded-xl p-2.5 mb-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[8px] font-bold text-foreground">
          {lang === "en" ? "🌌 Tonight — High chance!" : lang === "pl" ? "🌌 Dziś — Duża szansa!" : "🌌 Í kvöld — Miklar líkur!"}
        </span>
        <span className="text-[6px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full font-semibold">80%</span>
      </div>
      <div className="flex items-center gap-3 text-[6.5px] text-muted-foreground">
        <span>🕙 22:00 – 02:00</span>
        <span>☁️ {lang === "en" ? "Clear skies" : lang === "pl" ? "Czyste niebo" : "Heiðskýrt"}</span>
      </div>
    </div>
    {/* Best spots */}
    <div className="mx-3 mb-2">
      <p className="text-[7px] font-semibold text-foreground mb-1.5">
        {lang === "en" ? "Best viewing spots" : lang === "pl" ? "Najlepsze miejsca" : "Bestu staðirnir"}
      </p>
      {[
        { name: "Grótta", dist: "8 km", rating: "4.8" },
        { name: "Þingvellir", dist: "45 km", rating: "4.9" },
        { name: "Vik Beach", dist: "180 km", rating: "4.7" },
      ].map((spot) => (
        <div key={spot.name} className="flex items-center justify-between py-1.5 border-b border-border/20 last:border-0">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-2 h-2 text-primary" />
            </div>
            <div>
              <p className="text-[7px] font-medium text-foreground">{spot.name}</p>
              <p className="text-[5.5px] text-muted-foreground">{spot.dist}</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <Star className="w-2 h-2 text-yellow-400 fill-yellow-400" />
            <span className="text-[6px] text-muted-foreground">{spot.rating}</span>
          </div>
        </div>
      ))}
    </div>
    {/* Weather strip */}
    <div className="mx-3 bg-secondary/40 rounded-lg p-2 flex items-center gap-3">
      <div className="flex items-center gap-1">
        <Thermometer className="w-2.5 h-2.5 text-blue-400" />
        <span className="text-[6.5px] text-foreground font-medium">-2°C</span>
      </div>
      <div className="flex items-center gap-1">
        <Wind className="w-2.5 h-2.5 text-muted-foreground" />
        <span className="text-[6.5px] text-muted-foreground">12 km/h</span>
      </div>
      <div className="flex items-center gap-1">
        <Droplets className="w-2.5 h-2.5 text-blue-300" />
        <span className="text-[6.5px] text-muted-foreground">15%</span>
      </div>
    </div>
    <div className="flex-1" />
    <TabBar active={2} />
  </div>
);

/* ── Screen 3: SOS Emergency ── */
const SOSScreen = ({ lang }: { lang: Lang }) => (
  <div className="flex flex-col h-full">
    <StatusBar />
    {/* Header */}
    <div className="px-3 pt-1 pb-2 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <p className="text-[10px] font-bold text-foreground">
        {lang === "en" ? "Emergency SOS" : lang === "pl" ? "SOS Awaryjne" : "Neyðar SOS"}
      </p>
    </div>
    {/* Location card */}
    <div className="mx-3 bg-secondary/40 rounded-xl p-2.5 mb-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[7px] font-semibold text-foreground">
          {lang === "en" ? "Your location" : lang === "pl" ? "Twoja lokalizacja" : "Staðsetning þín"}
        </span>
        <span className="text-[6px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full font-medium">GPS ✓</span>
      </div>
      {/* Mini location map */}
      <div className="bg-secondary/60 rounded-lg h-12 relative overflow-hidden mb-1.5">
        <svg viewBox="0 0 200 50" className="absolute inset-0 w-full h-full opacity-40">
          <line x1="0" y1="12" x2="200" y2="12" stroke="hsl(var(--border))" strokeWidth="0.5" />
          <line x1="0" y1="25" x2="200" y2="25" stroke="hsl(var(--border))" strokeWidth="0.5" />
          <line x1="0" y1="38" x2="200" y2="38" stroke="hsl(var(--border))" strokeWidth="0.5" />
          <line x1="40" y1="0" x2="40" y2="50" stroke="hsl(var(--border))" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="50" stroke="hsl(var(--border))" strokeWidth="0.5" />
          <line x1="160" y1="0" x2="160" y2="50" stroke="hsl(var(--border))" strokeWidth="0.5" />
          {/* Road */}
          <path d="M0 30 C50 28, 80 20, 120 22 C160 24, 180 18, 200 20" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
        {/* Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-destructive rounded-full flex items-center justify-center shadow-lg shadow-destructive/30">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <div className="w-6 h-6 bg-destructive/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
        </div>
      </div>
      <p className="text-[6.5px] text-muted-foreground">64.1466°N, 21.9426°W</p>
    </div>
    {/* Emergency contacts */}
    <div className="mx-3 space-y-1.5 mb-2">
      <button className="w-full bg-destructive text-destructive-foreground rounded-xl py-2.5 flex items-center justify-center gap-1.5 shadow-lg shadow-destructive/20">
        <Phone className="w-3 h-3" />
        <span className="text-[8px] font-bold">112 — {lang === "en" ? "Emergency" : lang === "pl" ? "Ratunkowy" : "Neyðarlína"}</span>
      </button>
      <button className="w-full bg-orange-500/90 text-white rounded-xl py-2 flex items-center justify-center gap-1.5">
        <Phone className="w-2.5 h-2.5" />
        <span className="text-[7px] font-semibold">ICE-SAR — {lang === "en" ? "Rescue" : lang === "pl" ? "Ratownictwo" : "Björgunarsveit"}</span>
      </button>
      <button className="w-full bg-secondary/60 text-foreground rounded-xl py-2 flex items-center justify-center gap-1.5">
        <Phone className="w-2.5 h-2.5 text-primary" />
        <span className="text-[7px] font-semibold">NordCar 24/7</span>
      </button>
    </div>
    {/* Info badges */}
    <div className="mx-3 grid grid-cols-2 gap-1.5">
      <div className="bg-secondary/30 rounded-lg px-2 py-1.5 text-center">
        <p className="text-[6px] text-muted-foreground">{lang === "en" ? "Signal" : lang === "pl" ? "Sygnał" : "Merki"}</p>
        <p className="text-[8px] font-bold text-green-400">Strong</p>
      </div>
      <div className="bg-secondary/30 rounded-lg px-2 py-1.5 text-center">
        <p className="text-[6px] text-muted-foreground">{lang === "en" ? "Battery" : lang === "pl" ? "Bateria" : "Rafhlaða"}</p>
        <p className="text-[8px] font-bold text-foreground">73%</p>
      </div>
    </div>
    <div className="flex-1" />
    <TabBar active={4} />
  </div>
);

const MiniPhone = ({ lang }: { lang: Lang }) => {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setScreen((p) => (p + 1) % 3), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-[180px] sm:w-[220px] shrink-0">
      <div className="bg-card border-2 border-border/80 rounded-[2rem] p-1.5 shadow-2xl shadow-black/40 relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-card rounded-b-xl z-10 flex items-center justify-center">
          <div className="w-6 h-1.5 bg-foreground/10 rounded-full" />
        </div>
        <div className="bg-background rounded-[1.6rem] overflow-hidden aspect-[9/19.5]">
          <div className="h-full flex flex-col">
            {screen === 0 && <RouteScreen lang={lang} />}
            {screen === 1 && <AuroraScreen lang={lang} />}
            {screen === 2 && <SOSScreen lang={lang} />}
          </div>
        </div>
        {/* Home indicator */}
        <div className="flex justify-center py-1">
          <div className="w-10 h-1 bg-foreground/20 rounded-full" />
        </div>
      </div>
      {/* Screen indicator dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setScreen(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === screen ? "bg-primary w-4" : "bg-muted-foreground/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

const AppShowcase = () => {
  const { lang } = useLang();

  const labels = {
    badge: { en: "Free with every booking", pl: "Gratis do każdej rezerwacji", is: "Ókeypis með hverri bókun" },
    title: { en: "NordCar Travel App", pl: "Aplikacja NordCar Travel", is: "NordCar Travel App" },
    desc: { en: "Tell the app your interests — it builds a perfect route with hidden gems, weather, and road conditions. Plus 9 more tools.", pl: "Podaj swoje zainteresowania — aplikacja stworzy idealną trasę z ukrytymi perełkami, pogodą i stanem dróg. Plus 9 innych narzędzi.", is: "Segðu appinu frá áhugamálum — það býr til fullkomna leið með faldum gimsteinum, veðri og vegaaðstæðum. Auk 9 annarra verkfæra." },
  };

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
          {/* Mini phone */}
          <MiniPhone lang={lang} />

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
              {labels.badge[lang]}
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold mb-2 text-foreground">
              {labels.title[lang]}
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              {labels.desc[lang]}
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {features.map((f) => (
                <div key={f.label.en} className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 ${
                  'highlight' in f && f.highlight 
                    ? "bg-primary/15 border border-primary/25 col-span-2 sm:col-span-3" 
                    : "bg-secondary/40"
                }`}>
                  <f.icon className={`w-3.5 h-3.5 shrink-0 ${'highlight' in f && f.highlight ? "text-primary" : "text-primary"}`} />
                  <span className={`text-[10px] sm:text-xs font-medium ${'highlight' in f && f.highlight ? "text-primary" : "text-foreground"}`}>{f.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
